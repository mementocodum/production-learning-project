import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginUsername,
} from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('ok', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'odmen',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('odmen');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
