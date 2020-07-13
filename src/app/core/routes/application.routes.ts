import { Routes } from '@angular/router';

export const APPLICATION_ROUTES: Routes = [
    {
        path: 'test',
        loadChildren: () => import('../../modules/test/test.module').then(m => m.TestModule)
    },
    { path: '', redirectTo: 'test', pathMatch: 'full'}
];
