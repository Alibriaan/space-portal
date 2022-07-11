import  buildQueryParamsString from '../../services/queryParamsBuilder/index';



describe('Build Query Params string function', () => {
  test('With empty object', () => {
    expect(buildQueryParamsString({})).toBe('');
  });
});