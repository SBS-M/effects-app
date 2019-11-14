import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';


export const CARGAR_USUARIO = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIO_FAIL = '[Usuarios] Cargar usuarios FAIL';
export const CARGAR_USUARIO_SUCCESS = '[Usuarios] Cargar usuarios SUCCESS';

export class CargarUsuarioActions implements Action{
    readonly type = CARGAR_USUARIO;
}

export class CargarUsuarioActionsFail implements Action{
    readonly type = CARGAR_USUARIO_FAIL;
    constructor( public payload: any ){}
}

export class CargarUsuarioActionsSuccess implements Action{
    readonly type = CARGAR_USUARIO_SUCCESS;
    constructor( public usuarios: Array<Usuario> ){}
}

export type usuarioActions = 
CargarUsuarioActions | 
CargarUsuarioActionsFail | 
CargarUsuarioActionsSuccess;