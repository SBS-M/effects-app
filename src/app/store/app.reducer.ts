
import * as reducers from './reducers/index.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
    users: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usuarioReducer
}