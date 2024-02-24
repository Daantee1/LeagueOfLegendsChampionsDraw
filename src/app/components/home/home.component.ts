import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  championData: any[] = []
  selectFill: boolean = false
  selectMid: boolean = false
  selectSupport: boolean = false
  selectAdc: boolean = false
  selectTop: boolean = false
  selectJg: boolean = false
  noRoleSelected: boolean = false
  draw: boolean = false
  championDrawn: boolean = false
  championSelected: string = ''
  championSelectedImg: string = ''

  
  constructor(private dataService: DataService) {
    this.dataService.getChampionDataObs().subscribe((data: any)=>{
      this.championData = data
     
    })
   }

   championSelectedFunc(){
    if(this.draw){
      setTimeout(()=>{
        this.championDrawn = true
      }, 1500)
    }
   
    
   }

   drawAgain(){
    this.draw = false
    this.championDrawn = false
    this.noRoleSelected = false
    this.selectMid = false
    this.selectSupport = false
    this.selectAdc = false
    this.selectTop = false
    this.selectJg = false
    this.selectFill = false
    this.championSelected = ''
    this.championSelectedImg = ''
   }

   drawChampion(){
   
    if(this.selectFill){
      this.draw = true
      this.drawChampionFill()
    } else if(this.selectMid){
      this.draw = true
      this.drawChampionMid()
    } else if(this.selectSupport){
      this.draw = true
      this.drawChampionSupport()
    } else if(this.selectAdc){
      this.draw = true
      this.drawChampionAdc()
    } else if(this.selectTop){
      this.draw = true
      this.drawChampionTop()
    } else if(this.selectJg){
      this.draw = true
      this.drawChampionJg()
    } else {
      this.noRoleSelected = true
    } 
    

   }


   selectFillFunc(){
    this.selectFill = !this.selectFill
    this.selectMid = false
    this.selectSupport = false
    this.selectAdc = false
    this.selectTop = false
    this.selectJg = false
    this.noRoleSelected = false
   }
   selectMidFunc(){
    this.selectMid = !this.selectMid
    this.selectFill = false
    this.selectSupport = false
    this.selectAdc = false
    this.selectTop = false
    this.selectJg = false
    this.noRoleSelected = false
   }
   selectSupportFunc(){
    this.selectSupport = !this.selectSupport
    this.selectFill = false
    this.selectMid = false
    this.selectAdc = false
    this.selectTop = false
    this.selectJg = false
    this.noRoleSelected = false
   }
   selectAdcFunc(){
    this.selectAdc = !this.selectAdc
    this.selectFill = false
    this.selectMid = false
    this.selectSupport = false
    this.selectTop = false
    this.selectJg = false
    this.noRoleSelected = false
   }
   selectTopFunc(){
    this.selectTop = !this.selectTop
    this.selectFill = false
    this.selectMid = false
    this.selectSupport = false
    this.selectAdc = false
    this.selectJg = false
    this.noRoleSelected = false
   }
   selectJgFunc(){
    this.selectJg = !this.selectJg
    this.selectFill = false
    this.selectMid = false
    this.selectSupport = false
    this.selectAdc = false
    this.selectTop = false
    this.noRoleSelected = false
   }

   drawChampionFill(){
    if(this.championData){
      const championsArray = Object.values(this.championData);
      const randomIndex = Math.floor(Math.random() * championsArray.length)
      const randomChampion = championsArray[randomIndex]
      this.championSelected = randomChampion.name
      this.championSelectedImg = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${randomChampion.image.full}`
    }else{
      console.log('No data');
    }
   }

   drawChampionMid(){
    if(this.championData){
      const championsArray = Object.values(this.championData);
      const midChampions = championsArray.filter((champion: any)=>{
      return  champion.tags.includes('Mage') || champion.tags.includes('Assassin')
      })
      if(midChampions.length > 0){
        const randomIndex = Math.floor(Math.random() * midChampions.length)
        const randomChampion = midChampions[randomIndex]
        console.log(randomChampion);
        this.championSelected = randomChampion.name
        this.championSelectedImg = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${randomChampion.image.full}`
        
      } else {
        console.log('No mages or assassins');
      }
    }else{
      console.log('No data');
    }
   }
   drawChampionSupport(){
    if(this.championData){
      const championsArray = Object.values(this.championData);
      const midChampions = championsArray.filter((champion: any)=>{
        return (champion.tags.includes('Mage') && champion.tags.includes('Support')) || (champion.tags.includes('Tank') && champion.tags.includes('Support'))
      })
      if(midChampions.length > 0){
        const randomIndex = Math.floor(Math.random() * midChampions.length)
        const randomChampion = midChampions[randomIndex]
        this.championSelected = randomChampion.name
        this.championSelectedImg = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${randomChampion.image.full}`
      } else {
        console.log('No mages or assassins');
      }
    }else{
      console.log('No data');
    }
   }
   drawChampionAdc(){
    if(this.championData){
      const championsArray = Object.values(this.championData);
      const midChampions = championsArray.filter((champion: any)=>{
        return (champion.tags.includes('Marksman')) 
      })
      if(midChampions.length > 0){
        const randomIndex = Math.floor(Math.random() * midChampions.length)
        const randomChampion = midChampions[randomIndex]
        this.championSelected = randomChampion.name
        this.championSelectedImg = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${randomChampion.image.full}`
      } else {
        console.log('No mages or assassins');
      }
    }else{
      console.log('No data');
    }
   }
   drawChampionTop(){
    if(this.championData){
      const championsArray = Object.values(this.championData);
      const midChampions = championsArray.filter((champion: any)=>{
        return (champion.tags.includes('Tank') && champion.tags.includes('Fighter')) || (champion.tags.includes('Tank') || champion.tags.includes('Marksman') && champion.tags.includes('Fighter')) 
      })
      if(midChampions.length > 0){
        const randomIndex = Math.floor(Math.random() * midChampions.length)
        const randomChampion = midChampions[randomIndex]
        this.championSelected = randomChampion.name
        this.championSelectedImg = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${randomChampion.image.full}`
      } else {
        console.log('No mages or assassins');
      }
    }else{
      console.log('No data');
    }
   }
   drawChampionJg(){
    if(this.championData){
      const championsArray = Object.values(this.championData);
      const midChampions = championsArray.filter((champion: any)=>{
        return (champion.tags.includes('Tank') && champion.tags.includes('Fighter')) || (champion.tags.includes('Assassin'))
      })
      if(midChampions.length > 0){
        const randomIndex = Math.floor(Math.random() * midChampions.length)
        const randomChampion = midChampions[randomIndex]
        this.championSelected = randomChampion.name
        this.championSelectedImg = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${randomChampion.image.full}`
      } else {
        console.log('No mages or assassins');
      }
    }else{
      console.log('No data');
    }
   }

}
