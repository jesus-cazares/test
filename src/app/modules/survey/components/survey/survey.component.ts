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
  tipoInmueble: string;
  tipoConstruccion: string;
  niveles: string;
  poblacion: string;
  visitantes: string;
  discapacidad: string;
  ninos: string;
  constructivo: string;
  modificaciones: string;
  especiales: string;
  elevadores: string;
  recipientes: string;
 
  puntoReunion: string;
  analisisRiesgo: string;
  simulacros: string;
  estudioRiesgos: string;
  contingencia: string;
  planContinudad: string;
  corresponsable: string;
  corresponsabilidad: string;
  polizaSeguro: string;
  vobo: string;
  noModificacion: string;
  gas: string;
  nomDos: string;
  botiquin: string;
  alertamiento: string;
  cartaAlertamiento: string;
  estructural: string;
  

  brigadaemerg: string;
  capacitacion: string;
  simulacro: string;
  mantenimiento: string;
  arquitectonicos: string;
  vulnerables: string;
  planoBotiquines: string;
  planoBrigadistas: string;
  riskElectricos: string;
  planoEvacuacion: string;
  planoEscaleras: string;
  planoAlertamiento: string;
  planoRisk: string;
  planoNomCeroDos: string;
  extintores: string;
  planoMenorrisk: string;


  confiaBrigada: string;
  confiaAcreditado: string;
  continuidadMercado: string;
  recursosEmergencia: string;
  preparados: string;



  secciones: { [index: string]: boolean } = {
    seccion1: true,
    seccion2: false,
    seccion3: false,
    seccion4: false,
    seccion5: false,
    seccion6: false,
    seccion7: false
  };

  enableSection(section: number): void {
    Object.keys(this.secciones).forEach((key: string, index: number) => {
      this.secciones[key] = section === (index + 1);
    });
  }

  submit(): void {
    
  }
}
