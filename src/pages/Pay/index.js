import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import { Wrapper, Header, Container, Input, TextInput, Text } from './styles';
import Services from '../../components/Services';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#00fc6c"
          />

          <Input>
            <AntDesign name="search1" size={20} color="#fff" />
            <TextInput
              placeholder="Quem você quer pagar ?"
              keyboardAppearance="dark"
            />
          </Input>
        </Header>

        <Text>Sugestões para Você</Text>
        <Suggestions />

        <Services />
      </Container>
    </Wrapper>
  );
};

export default Home;
