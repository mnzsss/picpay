import React from 'react';

import img13 from '../../images/13.png';

import { Container, Details, Title, Img, Description } from './styles';

const Banner = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha suas Parcerias em dias, use o PicPay para fazer suas
          cobranças.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
};

export default Banner;
