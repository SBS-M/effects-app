import { Usuario } from 'src/app/models/usuario.model';
import * as fromUserAction from '../actions/index.actions';


export interface UsuarioState {
    users: Array<Usuario>,
    loaded: boolean,
    loading: boolean,
    error: any
}

const estadoInicial: UsuarioState = {
    users: new Array<Usuario>(),
    loaded: false,
    loading: false,
    error: null
}


export function usuarioReducer(state = estadoInicial, action: fromUserAction.usuarioActions): UsuarioState {

    switch (action.type) {
        case fromUserAction.CARGAR_USUARIO:
            return {
                ...state,
                loading: true
            };
        case fromUserAction.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                users: action.usuarios
            };
        case fromUserAction.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        default:
            return state;
    }

}