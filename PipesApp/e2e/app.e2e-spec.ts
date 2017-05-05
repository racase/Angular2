import { PipesAppPage } from './app.po';

describe('pipes-app App', () => {
  let page: PipesAppPage;

  beforeEach(() => {
    page = new PipesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
