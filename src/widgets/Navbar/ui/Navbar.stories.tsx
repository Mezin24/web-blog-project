import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  user: {

  }
})];

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [StoreDecorator({
  user: {
    authData: {}
  }
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {

  }
})];
