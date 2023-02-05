import { createAction, props } from '@ngrx/store';
import { ActionTypes} from '../actiontypes';
import { RegisterRequestInterface } from '../../types/registerRequest.Interface';

export const registerAction = createAction(
    ActionTypes.REGISTER, 
    props<RegisterRequestInterface>()
)

