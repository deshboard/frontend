import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

import { LoginService } from './login.service';
import { Tokens } from '../tokens.entity';
import { Token } from '../token.entity';

@Injectable()
export class MockLoginService implements LoginService {
    login(username: string, password: string): Observable<Tokens> {
        if (username === 'admin' && password === 'admin') {
            const accessToken = new Token();

            accessToken.token = 'token';
            accessToken.expiresIn = 15000;

            const tokens = new Tokens();

            tokens.accessToken = accessToken;

            return Observable.of(tokens).delay(2000);
        } else {
            // See https://github.com/Reactive-Extensions/RxJS/issues/648
            return <Observable<Tokens>>Observable.throw(new Error('Login failed')).materialize().delay(2000).dematerialize();
        }
    }
}
