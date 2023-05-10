import { Component } from '@angular/core';

import { Chart, registerables} from 'chart.js';

declare var getManager : any;
declare var getCompany : any;
declare var getMeeting : any;

Chart.register(...registerables);
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  title = 'Accueil';

  listeCommerciaux : Array<string> = [];
  historiqueRencontre : Array<Array<string>> = [[]];

  ngOnInit(): void {

    var listeCommerciaux = this.listeCommerciaux;
    var historiqueRencontre = this.historiqueRencontre;

    (async function() {
      var listeManager = await getManager();
      //console.log("liste : "+listeBDD); 

      for(let i=0; i < listeManager.length ; i++){
        var agentCommercial : Array<string> = [];

        agentCommercial.push(listeManager[i].firstname);
        agentCommercial.push(listeManager[i].lastname);
        var concatAgentComm = agentCommercial.join(" ");

        listeCommerciaux.push(concatAgentComm);
        //console.log("agentCommercial : "+concatAgenComm)
      }

      //console.log("listeCommerciaux : "+listeCommerciaux)



      var listeCompany = await getCompany();
      //console.log("liste : "+listeBDD); 

      for(let i=0; i < listeCompany.length ; i++){
        var listeEntreprise : Array<string> = [];

        listeEntreprise.push(listeCompany[i].name);

        //console.log("entreprises : "+listeEntreprise)
      }

      // HISTOGRAMME
      const data = [
        { day: "Lundi", count: 1 },
        { day: "Mardi", count: 0 },
        { day: "Mercredi", count: 3 },
        { day: "Jeudi", count: 5 },
        { day: "Vendredi", count: 1 },
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


      // HISTORIQUE
      var listeMeeting = await getMeeting();
      console.log("meetingBDD : "+listeMeeting[0].date)
      console.log("testHistorique : "+historiqueRencontre)

      for(let i=0 ; i<listeMeeting.length ; i++){
        var rencontre : Array<string> = [];
        var agentCommercial : Array<string> = [];

        console.log("testHistorique 2 : "+historiqueRencontre);

        rencontre.push(listeMeeting[i].date);
        rencontre.push(listeMeeting[i].manager);
        //agentCommercial.push(listeMeeting[i].firstname);
        //agentCommercial.push(listeMeeting[i].lastname);
        //var concatAgentComm = agentCommercial.join(" ");
        //rencontre.push(concatAgentComm);

        rencontre.push(listeMeeting[i].company);
        rencontre.push(listeMeeting[i].details);

        historiqueRencontre.push(rencontre);

        console.log("rencontre : "+historiqueRencontre);
      }

    })();

  }
}