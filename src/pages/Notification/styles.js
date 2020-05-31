import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: #100f12;
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Notifications = styled.ScrollView`
  background: #3d4451;
  margin-top: 20px;
`;

export const NotificationItem = styled.TouchableOpacity`
  padding: 16px;

  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
`;

export const NotificationTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const NotificationHour = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;
