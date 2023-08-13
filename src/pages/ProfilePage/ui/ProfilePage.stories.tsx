import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/test/avatar.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  profile: {
    form: {
      name: 'Test',
      lastname: 'Testovish',
      age: 30,
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.RUB,
      username: 'Test',
      avatar
    },
    readonly: false
  }
}),];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      name: 'Test',
      lastname: 'Testovish',
      age: 30,
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.RUB,
      username: 'Test',
      avatar
    },
    readonly: true
  }
})];
