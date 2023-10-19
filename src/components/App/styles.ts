import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  height: 100%;
  padding: 10px 16px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 360px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 60px;
  }
`;

export const Subscriptions = styled.p`
  color: #7D7F81;
  font-size: 25px;
  padding: 8px 0;

  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
    max-width: 940px;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  @media (min-width: 768px) {
    justify-content: left;
  }
`;

export const Link = styled.a`
`;

export const ButtonImg = styled.img`
  width: 100%;
  max-width: 400px;
`;