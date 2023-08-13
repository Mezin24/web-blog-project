import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/test/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entity/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    name: 'Test',
    lastname: 'Testovish',
    age: 30,
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.RUB,
    username: 'Test',
    avatar
  }
};

export const withError = Template.bind({});
withError.args = {
  error: 'test'
};

export const withLoading = Template.bind({});
withLoading.args = {
  isLoading: true
};
