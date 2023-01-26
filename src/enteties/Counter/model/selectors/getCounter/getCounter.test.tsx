import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounterTest', () => {
    test('return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 42,
            },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 42 });
    });
});
