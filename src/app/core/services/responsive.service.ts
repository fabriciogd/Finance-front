import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResponsiveService {
    private isMobile = new Subject<boolean>();

    constructor() {
        this.checkWidth();
    }

    onMobileChange(status: boolean) {
        this.isMobile.next(status);
    }

    getMobileStatus(): Observable<any> {
        return this.isMobile.asObservable();
    }

    public checkWidth() {
        var width = window.innerWidth;

        if (width <= 768) {
            this.onMobileChange(true);
        } 
        else{
            this.onMobileChange(false);
        }
    }
}