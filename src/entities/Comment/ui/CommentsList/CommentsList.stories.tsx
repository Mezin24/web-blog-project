import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentsList } from './CommentsList';

export default {
  title: 'entity/Comment/CommentsList',
  component: CommentsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '2',
      text: 'Some comment text 1',
      user: {
        id: '1',
        username: 'Username',
        avatar: 'https://img3.goodfon.com/original/2560x1600/0/1c/devushka-lico-resnicy-vzglyad.jpg'
      }
    },
    {
      id: '1',
      text: 'Some comment text 2',
      user: {
        id: '2',
        username: 'Admin',
        avatar: 'https://www.laserskinsurgery.com/wp-content/uploads/2020/10/male-plastic-surgery-new-york.jpg'
      }
    }
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
