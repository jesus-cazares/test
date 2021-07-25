import { Component } from '@angular/core';

@Component({
  selector: 'ng-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  rfc: string;
  acta: string;
  representante: string;
  actaRepresentante: string;
  sector: string;
  seccion1= false;
}
