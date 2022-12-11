import { CounterSchema } from 'enteties/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 42,
        };
        expect(
            counterReducer(
                state,
                counterActions.increment(),
            ),
        )
            .toEqual({ value: 43 });
    });
    test('decrement', () => {
        const state: CounterSchema = {
            value: 42,
        };
        expect(
            counterReducer(
                state,
                counterActions.decrement(),
            ),
        )
            .toEqual({ value: 41 });
    });
    test('empty state', () => {
        expect(
            counterReducer(
                undefined,
                counterActions.decrement(),
            ),
        )
            .toEqual({ value: -1 });
    });
});
