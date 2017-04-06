import { AbsaExercisePage } from './app.po';

describe('absa-exercise App', () => {
  let page: AbsaExercisePage;

  beforeEach(() => {
    page = new AbsaExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
