import {Get, HttpService, Injectable} from '@nestjs/common';
import {map} from 'rxjs/operators';

@Injectable()
export class LoginService {

    constructor(private http: HttpService) {
    }

    public getPlatforms() {
        return this.http.get('https://opencritic.com/api/platform')
            .pipe(
                map(response => response.data),
            );
    }

    public getAllGames() {
        return this.http.get('https://opencritic.com/api/game')
            .pipe(
                map(response => response.data),
            );
    }

    public getSingleGame(id) {
        return this.http.get('https://opencritic.com/api/game/' + id)
            .pipe(
                map(response => response.data),
            );
    }
}
