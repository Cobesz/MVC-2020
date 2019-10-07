import {Get, HttpService, Injectable} from '@nestjs/common';
import {map} from 'rxjs/operators';

@Injectable()
export class HomeService {
    constructor(private http: HttpService) {
    }

    public getPlatforms() {
        return this.http.get('https://opencritic.com/api/platform')
            .pipe(
                map(response => response.data),
            );
    }
}
