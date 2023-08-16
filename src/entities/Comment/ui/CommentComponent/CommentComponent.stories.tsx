import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentComponent } from './CommentComponent';

export default {
  title: 'entity/Comment/CommentComponent',
  component: CommentComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentComponent>;

const Template: ComponentStory<typeof CommentComponent> = (args) => <CommentComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'Some comment text',
    user: {
      id: '1',
      username: 'Username',
      avatar: 'https://img3.goodfon.com/original/2560x1600/0/1c/devushka-lico-resnicy-vzglyad.jpg'
    }
  }
};

export const loading = Template.bind({});
loading.args = {
  isLoading: true
};
