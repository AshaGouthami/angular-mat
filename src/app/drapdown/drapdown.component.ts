import { Component} from '@angular/core';
import { CountriesService } from '../countries.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-drapdown',
  templateUrl: './drapdown.component.html',
  styleUrls: ['./drapdown.component.css']
})
export class DrapdownComponent {
  createDrapdownForm = new FormGroup({
    country: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl('')
  });
  constructor(private country: CountriesService) { }
}

countrylist:[];
states:[
  {
    state:'ap'
  },
  {
    state:'trs'
  },
  {
    state:'bangalore'
  }
]
country:[
  {
    country:'india'
  },
  {
    country:'us'
  },
  {
    country:'uk'
  }
]
// this.countrylist=Object.keys(this.states)

//   countries:{};
//   states:{};
//   cities:{};

//   constructor(private country: CountriesService) { 
//     this.getInfo();
//   }

//   getInfo(){
//  this.countries=this.country.getCountries().subscribe(
//    res=>{
//      this.countries=res;
//    },
//    err=>console.log(err)
//  );
// }
// onChangeCountry(countryId: number) {
//   if (countryId) {
//     this.country.getStates(countryId).subscribe(
//       data => {
//         this.states = data;
//         this.cities = null;
//       }
//     );
//   } else {
//     this.states = null;
//     this.cities = null;
//   }
// }

// onChangeState(stateId: number) {
//   if (stateId) {
//     this.country.getCities(stateId).subscribe(
//       data => this.cities = data
//     );
//   } else {
//     this.cities = null;
//   }
// }
// }


