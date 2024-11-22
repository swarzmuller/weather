import { css } from "@emotion/react";

export const HistoryWrapper = css`
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 0;
  gap: 34px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const BackLink = css`
  display: flex;
  align-items: center;
  gap: 48px;
  font-size: 18px;
  line-height: 25px;
  font-weight: 600;
  text-decoration: none;
  color: #121212;
`;

export const List = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0;
  padding: 0;
`;

export const HistoryItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 49%;
  max-width: 49%;
  background: #f2f6ff;
  padding: 12px;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const Name = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
`;

export const Description = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const Status = css`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    position: relative;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: #1c242b;

    &::after {
      position: absolute;
      right: -8px;
      top: 0;
      content: "°";
    }
  }
`;
