import { ModalPruebaPage } from './app.po';

describe('modal-prueba App', () => {
  let page: ModalPruebaPage;

  beforeEach(() => {
    page = new ModalPruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
