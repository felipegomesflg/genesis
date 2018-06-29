import { DotGenesisPage } from './app.po';

describe('dot-genesis App', () => {
  let page: DotGenesisPage;

  beforeEach(() => {
    page = new DotGenesisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
