import { BehaviorSubject, catchError, map, Observable, of, ReplaySubject, Subject } from "rxjs";
import { ReactiveService, Response, Unique } from "../interfaces/reactive-service";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

/**
 * Provides standard HTTP Processing
 * 
 * override "create,read,update,delete" methods to change HTTP behaviour.
 * 
 * override "process*" methods to change Data manipulation.
 * 
 * use "events$" to brocast string event messages.
 */
export abstract class ReactiveBase<T extends Unique> implements ReactiveService<T> {

    private http = inject(HttpClient);
    private _data = new BehaviorSubject<T[]>([]);
    /**
     * Subject
     * BehaviorSubject
     * ReplaySubject
     * AsyncSubject
     */
    protected URL = '';
    public data$ = this._data.asObservable();
    public events$ = new ReplaySubject<string>();

    create(data: Omit<T, "id">): Observable<Response> {
        const res$ = new BehaviorSubject<Response>({ msg: 'PROCESSING' });

        this.http.post<T>(`${this.URL}`, data)
            .pipe(
                catchError(() => of({ msg: 'ERROR' }))
            )
            .subscribe(payload => {
                
                if((payload as Response).msg == 'ERROR'){
                    res$.next(payload as Response);
                    return res$.complete();
                }
                    
                this.processCreate(payload as T);

                res$.next({ msg: 'DONE', data: payload });
                res$.complete();
                this.events$.next('CREATE DONE');
                
            });

        return res$;
    }

    protected processCreate( payload:T){
        this._data.next([payload, ...this._data.value]);
    }

    read(id?: Unique): Observable<Response> {

        const res$ = new BehaviorSubject<Response>({ msg: 'PROCESSING' });

        this.http.get<T[]>(this.URL)
            .pipe(
                catchError(() => of({ msg: 'ERROR' }))
            )
            .subscribe(payload => {
                
                if((payload as Response).msg == 'ERROR'){
                    res$.next(payload as Response);
                    return res$.complete();
                }

                this.processRead(payload as T[])

                res$.next({ msg: 'DONE', data: payload });
                res$.complete();
                this.events$.next('READ DONE');
            });

        return res$;
    }
    protected processRead( payload:T[]){
        this._data.next(payload);
    }

    update(target: T, data: Partial<Omit<T, "id">>): Observable<Response> {

        const res$ = new BehaviorSubject<Response>({ msg: 'PROCESSING' });

        this.http.put<T>(`${this.URL}/${target.id}`, { ...target, ...data })
            .pipe(
                catchError(() => of({ msg: 'ERROR' }))
            )
            .subscribe(payload => {
                
                if((payload as Response).msg == 'ERROR'){
                    res$.next(payload as Response);
                    return res$.complete();
                }

                this.processUpdate( payload as T);

                res$.next({ msg: 'DONE', data: payload });
                res$.complete();
                this.events$.next('UPDATE DONE');
            });

        return res$;
    }

    protected processUpdate( payload:T ){
        this._data.next(
            this._data.value.map(item => item.id == (payload as T).id ? payload : item) as T[]
        );
    }

    delete(target: T): Observable<Response> {
        const res$ = new BehaviorSubject<Response>({ msg: 'PROCESSING' });

        this.http.delete<T>(`${this.URL}/${target.id}`)
            .pipe(
                catchError(() => of({ msg: 'ERROR' }))
            )
            .subscribe(payload => {
               
                if((payload as Response).msg == 'ERROR'){
                    res$.next(payload as Response);
                    return res$.complete();
                }

                this.processDelete( payload as T );

                res$.next({ msg: 'DONE', data: payload });
                res$.complete();
                this.events$.next('DELETE DONE');
            });

        return res$;
    }

    protected processDelete( payload:T ){
        this._data.next(
            this._data.value.filter(item => item.id != (payload as T).id) as T[]
        );
    }
}
