import { Routes } from '@angular/router';
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
    { path: "article/:post", component: ArticleComponent },
    { path: "**", component: NotFoundComponent },
];
