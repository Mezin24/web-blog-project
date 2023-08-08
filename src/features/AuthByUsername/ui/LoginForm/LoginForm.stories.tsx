import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  login: {
    username: 'user',
    password: '123'
  }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  login: {
    username: 'user',
    password: '123'
  }
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  login: {
    username: 'user',
    password: '123',
    error: 'Error message'
  }
})];

export const withLoading = Template.bind({});
withLoading.args = {};
withLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  login: {
    username: 'user',
    password: '123',
    isLoading: true
  }
})];
