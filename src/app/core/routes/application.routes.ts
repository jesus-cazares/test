import { Routes } from '@angular/router';

export const APPLICATION_ROUTES: Routes = [
    {
        path: 'test',
        loadChildren: () => import('../../modules/survey/survey.module').then(m => m.SurveyModule)
    },
    { path: '', redirectTo: 'test', pathMatch: 'full'}
];
