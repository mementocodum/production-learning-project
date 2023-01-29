import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from 'enteties/Profile';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';

describe('getProfileIsLoading', () => {
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
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
