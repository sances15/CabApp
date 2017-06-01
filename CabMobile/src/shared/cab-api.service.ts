import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CABApi {
    data: any;
    private baseURL = 'https://ces-cab-app.firebaseio.com';

    constructor(private http: Http) { 
        this.data = null;
    } 

    getUserDetails() {
        return new Promise(resolve => {
            this.http.get(`${this.baseURL}/user.json`)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    getUserSchedules() {
        return new Promise(resolve => {
            this.http.get(`${this.baseURL}/schedules.json`)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    getLocationDetails(routeId) {
        routeId = 'srid-10001';
        return new Promise(resolve => {
            this.http.get(`${this.baseURL}/route/${routeId}.json`)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });        
    }
}