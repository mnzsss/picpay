import React from 'react';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

import { Container, Option, Title, Img } from './styles';

const itens = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Paga suas Contas sem Sair de Casa',
    bgColor: '#172c4a',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Paga suas Contas sem Sair de Casa',
    bgColor: '#6a0159',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Paga suas Contas sem Sair de Casa',
    bgColor: '#4139c8',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Paga suas Contas sem Sair de Casa',
    bgColor: '#00ab4b',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Paga suas Contas sem Sair de Casa',
    bgColor: '#ba2f76',
  },
];

const Tips = () => {
  return (
    <Container>
      {itens.map(item => (
        <Option bgColor={item.bgColor} key={item.key}>
          <Title>{item.title}</Title>

          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;
