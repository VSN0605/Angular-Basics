import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
// import path from 'path';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About}
];