import { Component } from '@angular/core';

import { Chart, registerables} from 'chart.js';

declare var getData : any;

Chart.register(...registerables);
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  title = 'Accueil';

  listeCommerciaux : Array<Array<string>> = [];

  ngOnInit(): void {

    var listeCommerciaux = this.listeCommerciaux;

    (async function() {
      var listeBDD = await getData();
      console.log("liste : "+listeBDD); 

      for(let i=0; i < listeBDD.length ; i++){
        var agentCommercial : Array<string> = [];
        agentCommercial.push(listeBDD[i].firstname);
        //console.log(listeBDD[i].firstname)
        agentCommercial.push(listeBDD[i].lastname);
        //console.log(listeBDD[i].lastname)
        listeCommerciaux.push(agentCommercial);
        console.log("Agent Commercial : "+agentCommercial)
      }

      console.log("listeCommerciaux : "+listeCommerciaux)

      const data = [
        { year: 2010, count: 5 },
        { year: 2011, count: 2 },
        { year: 2012, count: 0 },
        { year: 2013, count: 4 },
        { year: 2014, count: 3 },
      ];

      var Courbe = new Chart("Courbe",
        {
          type: 'bar',
          data: {
            labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
            datasets: [
              {
                label: 'Commerciaux rencontrés',
                data: data.map(row => row.count)
              }
            ]
          }
        }
      );
    })();
  }
}