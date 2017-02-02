import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

import { LoginService } from './login.service';
import { Tokens } from '../tokens.entity';
import { Token } from '../token.entity';

import { environment } from '../../../environments/environment'

@Injectable()
export class ApiLoginService implements LoginService {
    private url = '/auth/authenticate';

    constructor(private http: Http) { }

    login(username: string, password: string): Observable<Tokens> {
        return this.http.post(environment.apiEndpoint + this.url, { username: username, password: password })
            .map(() => {
                // TODO: get the real token
                const accessToken = new Token();

                accessToken.token = 'token';
                accessToken.expiresIn = 15000;

                const tokens = new Tokens();

                tokens.accessToken = accessToken;

                return tokens;
            })
        ;
    }
}
