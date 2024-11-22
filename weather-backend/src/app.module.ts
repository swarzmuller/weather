import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vitaliiilchenko:Farstone2vetal1-@cluster0.yiwrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    WeatherModule,
  ],
})
export class AppModule {}
