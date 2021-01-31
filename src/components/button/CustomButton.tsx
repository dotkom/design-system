import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';

export interface ButtonProps {
  colorScheme: string
}

const CustomButton: FC<ButtonProps> = ({colorScheme}) => (
  <Button colorScheme={colorScheme} variant="solid">Button</Button>
);

export default CustomButton;