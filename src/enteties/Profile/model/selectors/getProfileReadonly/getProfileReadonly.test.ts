import { StateSchema } from 'app/providers/StoreProvider';
import {
    getProfileReadonly,
} from 'enteties/Profile';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';

describe('getProfileReadonly', () => {
    test('only first param', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Kazakhstan,
            lastname: 'Kaddafi',
            first: 'Muammar',
            city: 'asf',
            currency: Currency.USD,

        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
