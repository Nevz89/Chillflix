import { BreakWordPipe } from './break-word.pipe';

describe('BreakWordPipe', () => {
  it('create an instance', () => {
    const pipe = new BreakWordPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform value to 25 chars length', () => {
    const pipe = new BreakWordPipe();
    const testValue = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
    const result = pipe.transform(testValue);

    expect(result.length).toEqual(25);
  })
});
