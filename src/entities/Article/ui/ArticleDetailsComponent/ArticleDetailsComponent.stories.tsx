import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsComponent } from './ArticleDetailsComponent';

export default {
  title: 'shared/ArticleDetailsComponent',
  component: ArticleDetailsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsComponent>;

const Template: ComponentStory<typeof ArticleDetailsComponent> = (args) => <ArticleDetailsComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
