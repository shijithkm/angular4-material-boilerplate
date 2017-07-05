import { AngularChartsPage } from './app.po';

describe('angular-charts App', () => {
  let page: AngularChartsPage;

  beforeEach(() => {
    page = new AngularChartsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
