import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData, getProfileForm } from 'enteties/Profile';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';

describe('getProfileForm', () => {
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
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
