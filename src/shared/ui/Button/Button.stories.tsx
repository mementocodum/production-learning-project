import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};
BackgroundTheme.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedTheme.decorators = [ThemeDecorator(Theme.DARK)];
export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};
Square.decorators = [ThemeDecorator(Theme.LIGHT)];
export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
SquareL.decorators = [ThemeDecorator(Theme.LIGHT)];
export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
SquareXL.decorators = [ThemeDecorator(Theme.LIGHT)];
