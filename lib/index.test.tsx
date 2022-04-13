import CRT, { withCRT } from './index';

describe('Main CRT render component', () => {
  test('applies styles to child elements', () => {
    const result = CRT();
    console.log(result);
    expect(result).toEqual({});
  });
});
