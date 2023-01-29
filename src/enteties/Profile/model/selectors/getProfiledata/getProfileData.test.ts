import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from 'enteties/Profile';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { useDebugValue } from 'react';

describe('getProfileData', () => {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
