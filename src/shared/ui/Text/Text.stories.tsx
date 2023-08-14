import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Some lorem ipsum text',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Some lorem ipsum text',
  theme: TextTheme.ERROR
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title'
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Some lorem ipsum text'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Some lorem ipsum text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title',
  text: 'Some lorem ipsum text',
  theme: TextTheme.ERROR
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title'
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Some lorem ipsum text'
};

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title',
  text: 'Some lorem ipsum text',
  size: TextSize.L
};
