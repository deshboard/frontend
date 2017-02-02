import { OpaqueToken } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Tokens } from '../tokens.entity';

export const LoginService = new OpaqueToken('LoginService');

export interface LoginService {
    login(username: string, password: string): Observable<Tokens>;
}
