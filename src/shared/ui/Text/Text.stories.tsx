import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppText, TextTheme } from './AppText';

export default {
    title: 'shared/Text',
    component: AppText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppText>;

const Template: ComponentStory<typeof AppText> = (args) => <AppText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text hfbdblfhdbhrbsrsgbrfbsgjdksbnvj;bndjsbndsb;udskjbnvhmdfsghvbfdvbhbaekbvfhdsbkv,kdfs',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text hfbdblfhdbhrbsrsgbrfbsgjdksbnvj;bndjsbndsb;udskjbnvhmdfsghvbfdvbhbaekbvfhdsbkv,kdfs',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Text hfbdblfhdbhrbsrsgbrfbsgjdksbnvj;bndjsbndsb;udskjbnvhmdfsghvbfdvbhbaekbvfhdsbkv,kdfs',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text hfbdblfhdbhrbsrsgbrfbsgjdksbnvj;bndjsbndsb;udskjbnvhmdfsghvbfdvbhbaekbvfhdsbkv,kdfs',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text hfbdblfhdbhrbsrsgbrfbsgjdksbnvj;bndjsbndsb;udskjbnvhmdfsghvbfdvbhbaekbvfhdsbkv,kdfs',
    theme: TextTheme.ERROR,
};
