import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentComponent } from './CommentComponent';

export default {
  title: 'shared/CommentComponent',
  component: CommentComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentComponent>;

const Template: ComponentStory<typeof CommentComponent> = (args) => <CommentComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
