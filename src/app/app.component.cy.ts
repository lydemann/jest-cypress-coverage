import { appInitConfig } from '../main';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  it('renders', () => {
    cy.mount(AppComponent, {
      providers: appInitConfig.providers,
    });
  });
});
