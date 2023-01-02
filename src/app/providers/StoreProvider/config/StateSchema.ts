import { CounterSchema } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/authByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}
