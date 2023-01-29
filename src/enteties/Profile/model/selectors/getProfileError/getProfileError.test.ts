import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData, getProfileError } from 'enteties/Profile';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';

describe('getProfileError', () => {
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
                error: '123',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
