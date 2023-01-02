import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'fsffsfs' },
})];

export const WithError = Template.bind({});
WithError.args = {
};
WithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'fsffsfs', error: 'error message' },
})];

export const isLoading = Template.bind({});
isLoading.args = {
};
isLoading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
