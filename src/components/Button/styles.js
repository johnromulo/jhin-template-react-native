import styled from 'styled-components/native';

import { colors } from '~/styles/themes';

export const Container = styled.TouchableOpacity`
  height: 46px;
  background: ${colors.dark};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.light};
  font-size: 18px;
`;
