import {Get, HttpService, Injectable} from '@nestjs/common';
import {map} from 'rxjs/operators';

@Injectable()
export class RegisterService {

    constructor(private http: HttpService) {
    }
}
