import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  championData = []
  championDataObs = new BehaviorSubject<any>(this.championData)

  urlData = 'https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json'

  constructor(private http: HttpClient) {
    this.http.get(this.urlData).subscribe((data: any)=>{
      this.championData = data.data
      this.championDataObs.next(this.championData)
      
    })
   }

  getChampionDataObs(): Observable<any>{
    return this.championDataObs.asObservable()
  }


}
