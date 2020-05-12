import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import avatar from '../../images/avatar.png';

import {
  Wrapper,
  Container,
  Title,
  UserProfile,
  Avatar,
  AvatarTitle,
  AvatarName,
  AvatarButton,
  AvatarButtonLabel,
  OptionsContainer,
  OptionsLabel,
  Options,
  Option,
  OptionLabel,
  OptionAction,
  OptionValue,
} from './styles';

function Settings() {
  return (
    <Wrapper>
      <Container>
        <Title>Ajustes</Title>

        <UserProfile>
          <Avatar source={avatar} resizeMode="contain" />

          <AvatarTitle>@mnzsss</AvatarTitle>
          <AvatarName>Gabriel Menezes</AvatarName>
          <AvatarButton>
            <AvatarButtonLabel>Ver meu perfil</AvatarButtonLabel>
            <AntDesign name="right" size={15} color="#0db060" />
          </AvatarButton>
        </UserProfile>

        <OptionsContainer>
          <OptionsLabel>Minha Conta</OptionsLabel>

          <Options>
            <Option>
              <OptionLabel>Meu PicPay</OptionLabel>
              <OptionAction>
                <OptionValue>@mnzsss</OptionValue>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Meu Número</OptionLabel>
              <OptionAction>
                <OptionValue>(11) 98625-7114</OptionValue>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Meu E-mail</OptionLabel>
              <OptionAction>
                <OptionValue>gabrielsmenezes99@gmail.com</OptionValue>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Dados Pessoais</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Conta Bancária</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Taxas e Limites</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Meus Endereços</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Meus Favoritos</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>
          </Options>
        </OptionsContainer>
      </Container>
    </Wrapper>
  );
}

export default Settings;
