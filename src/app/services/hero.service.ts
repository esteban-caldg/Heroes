import {Injectable} from '@angular/core'
import { Hero } from '../interfaces/hero'
import { HEROESDB } from '../dataBase/heroesData'
import {Observable, of} from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
    providedIn: 'root',
})

/* synchronous call: hace un llamado a los datos que bloquea la aplicacion 
    en este caso no afecta dado que la base no hace http request sino que
    los datos estan construidos dentro del mismo codigo*/



/* export class HeroService{
    constructor(){}
    getHeroes(): Hero[]{
        return HEROESDB;
    }
} */

/*---------------------------------------------------- */
/* asynchronous call: No bloquea el navegador cuando se hace
                      una llamada*/


export class HeroService{
    constructor(private messageService:MessageService){}
    getHeroes(): Observable<Hero[]>{
        const heroes = of(HEROESDB);
        this.messageService.add("HeroService: fetched heroes")
        return heroes;
    }
}