import React from 'react';
import { Image, Text } from 'react-native';

import { stylesBat } from './BatLogoStyles';
import batLogo from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <>
      <Text style={stylesBat.title}>
        BAT PASS GENERATOR
      </Text>
      <Image source={batLogo}
      style={{
        resizeMode: 'contain',
        height: 180
      }}/>
    </>
  );
}