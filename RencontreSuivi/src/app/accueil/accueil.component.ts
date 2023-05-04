import { Component } from '@angular/core';

import { Chart, registerables} from 'chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  title = 'Accueil';
  

  ngOnInit(): void {

(async function() {
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


