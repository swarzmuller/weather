import { css } from "@emotion/react";

export const Wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 105px 0;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 48px 0;
  }

  .loading {
    position: relative;
    opacity: 0.7;

    &::after {
      position: absolute;
      left: calc(50% - 8px);
      top: calc(50% - 8px);
      display: block;
      height: 20px;
      width: 20px;
      border: 5px solid #2e61ec;
      border-radius: 50%;
      border-top: 5px solid #ffffff;
      animation: spin 2s linear infinite;
      content: "";
    }

    @keyframes spin {
      0% {
        rotate: 0deg;
      }
      100% {
        rotate: 360deg;
      }
    }
  }
`;

export const Item = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 572px;
  width: 100%;
  transition: 0.3s;
`;

export const Place = css`
  font-size: 20px;
  font-weight: 700;
  color: #1c242b;
  margin: 80px 0 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    margin: 48px 0 16px;
  }
`;

export const Temp = css`
  position: relative;
  font-size: 54px;
  font-weight: 700;
  line-height: 65px;
  color: #1c242b;
  text-align: center;

  &::after {
    position: absolute;
    right: -25px;
    top: 0;
    content: "°";
  }
`;

export const Image = (focused: boolean) => css`
  @media (max-width: 768px) {
    width: 160px;
    transition: 0.3s;
    object-fit: cover;
    overflow: hidden;
    height: ${focused ? 0 : "160px"};
  }
`;

export const Description = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #35424f;
  margin-top: 4px;
  text-transform: capitalize;
  text-align: center;
`;

export const Form = css`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 90px 0 0 0;
  }
`;

export const FormLabel = css`
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #56626f;
  text-align: left;
`;

export const Input = css`
  width: 100%;
  padding: 15px 12px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  border: 1px solid #ced6dd;
  border-radius: 8px;
  color: #1c242b;
  margin: 12px 0 20px;
  transition: 0.3s;
`;

export const Button = css`
  width: 100%;
  padding: 16px 32px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: #ffffff;
  border-radius: 8px;
  text-transform: uppercase;
  background: linear-gradient(180deg, #2f5af4 0%, #0fa2ab 100%) no-repeat;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(180deg, #0fa2ab 0%, #2f5af4 100%) no-repeat;
  }
`;

export const ShowLink = css`
  font-size: 14px;
  line-height: 21px;
  color: #8e9aa7;
  text-decoration: underline;
  margin-top: 50px;
`;

export const Error = css`
  align-self: flex-start;
  color: #ff0000;
  margin-top: 5px;
  font-size: 12px;
`;
