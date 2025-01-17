import { Observable } from "rxjs";

/**
 * A uniquely identifiable value.
 */
export interface Unique{
    id:number;
}

export interface Response{
    msg:string;
    data?:any;
}

export interface ReactiveService<T extends Unique> {

    data$:Observable<T[]>;

    create( data:Omit<T, 'id'> ):Observable<Response>;

    read( id?:Unique ):Observable<Response>;

    update( target:T, data:Partial<Omit<T, 'id'>>):Observable<Response>;

    delete( data:T ):Observable<Response>;

}
