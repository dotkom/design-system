import React from 'react';
import CustomButton from './CustomButton';

export default {
  component: CustomButton,
  title: 'CustomButton',
};

const Template = (args:any) => <CustomButton {...args} />

export const Default: any = Template.bind({});
Default.args = {
  colorScheme: 'green',
};