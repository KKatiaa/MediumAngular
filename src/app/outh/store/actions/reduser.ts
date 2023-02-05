import {createReducer, on, Action} from'@ngrx/store'

import {AuthStateInterface} from 'src/app/outh/types/authState.interface';
import { registerAction } from './register.action';

const initialState: AuthStateInterface = {
    isSubmitting:false
}

const authReduser = createReducer(
    initialState,
    on(registerAction, (state): AuthStateInterface =>({
        /*...state,*/
        isSubmitting: true
    }))
)

export function reducer(state:AuthStateInterface, action: Action) {
    return authReduser(state, action);
}