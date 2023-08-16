import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text title="Title" text="Card text content" />
};

export const Dark = Template.bind({});
Dark.args = {
  children: <Text title="Title" text="Card text content" />
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  children: <Text title="Title" text="Card text content" />
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
