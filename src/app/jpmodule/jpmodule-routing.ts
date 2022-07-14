import { RouterModule, Routes } from '@angular/router';
import { JpGithubCherryComponent } from './github-jp/jp-github-cherry/jp-github-cherry.component';
import { JpGithubPrComponent } from './github-jp/jp-github-pr/jp-github-pr.component';
import { JpGithubPrivateRepoComponent } from './github-jp/jp-github-private-repo/jp-github-private-repo.component';
import { JpGithubTutorialComponent } from './github-jp/jp-github-tutorial/jp-github-tutorial.component';

const routes: Routes = [
  {
      path: 'jp-github-tutorial',
      component: JpGithubTutorialComponent,
      pathMatch: 'full'
  },
  {
      path: 'jp-github-pr',
      component: JpGithubPrComponent,
      pathMatch: 'full'
  },
  {
      path: 'jp-github-cherry',
      component: JpGithubCherryComponent,
      pathMatch: 'full'
  },
  {
      path: 'jp-github-private-repo',
      component: JpGithubPrivateRepoComponent,
      pathMatch: 'full'
  },
];

export const routing = RouterModule.forChild(routes);
