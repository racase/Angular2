import { ProyectoBasePage } from './app.po';

describe('proyecto-base App', () => {
  let page: ProyectoBasePage;

  beforeEach(() => {
    page = new ProyectoBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
