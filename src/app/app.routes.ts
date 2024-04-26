import { Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import path from 'node:path';
import { OutsideComponent } from './components/outside/outside.component';
import { InsideComponent } from './components/inside/inside.component';
import { BigFireComponent } from './components/big-fire/big-fire.component';
import { LPGComponent } from './components/lpg/lpg.component';
import { SmallFireComponent } from './components/small-fire/small-fire.component';
import { BuildingComponent } from './components/building/building.component';
import { AparComponent } from './components/apar/apar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ArticleComponent } from './components/article/article.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "outside", component: OutsideComponent },
    { path: "article/:post", component: ArticleComponent },
    { path: "apar", component: AparComponent },
    { path: "LPG", component: LPGComponent },
    { path: "small-fire", component: SmallFireComponent },
    { path: "building", component: BuildingComponent },
    { path: "**", component: NotFoundComponent },
];
