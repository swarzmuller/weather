import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Model } from 'mongoose';
import { WeatherRequest } from './weather.schema';

@Injectable()
export class WeatherService {
  private readonly API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  private readonly API_KEY = '00c6d1517b83427fb400d7cf8982451d';

  constructor(
    @InjectModel('Weather') private weatherModel: Model<WeatherRequest>,
    private readonly httpService: HttpService,
  ) {}

  async fetchWeather(city: string): Promise<any> {
    const existing = await this.weatherModel.findOne({ city }).exec();
    if (existing) {
      return existing.response;
    }

    const { data } = await firstValueFrom(
      this.httpService.get(this.API_URL, {
        params: { q: city, appid: this.API_KEY, units: 'metric' },
      }),
    );

    const newRequest = new this.weatherModel({ city, response: data });
    await newRequest.save();
    return data;
  }

  async getRecentRequests(): Promise<WeatherRequest[]> {
    return this.weatherModel.find().sort({ createdAt: -1 }).limit(100).exec();
  }
}
