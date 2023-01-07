import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginIsLoading,
} from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('not loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
    test('empty', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
