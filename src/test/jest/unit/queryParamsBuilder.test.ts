import  buildQueryParamsString from '../../../services/queryParamsBuilder/index';

describe('Build Query Params string function', () => {
  test('With empty object', () => {
    expect(buildQueryParamsString({})).toBe('');
  });

  test('With string object field ', () => {
    expect(buildQueryParamsString({ hello: 'world'})).toBe('hello=world');
  });

  test('With boolean object field ', () => {
    expect(buildQueryParamsString({ hello: false})).toBe('hello=false');
  });

  test('With number object field ', () => {
    expect(buildQueryParamsString({ hello: 1})).toBe('hello=1');
  });


  test('With null object field ', () => {
    expect(buildQueryParamsString({ hello: null})).toBe('hello=null');
  });

  test('With undefined object field ', () => {
    expect(buildQueryParamsString({ hello: undefined})).toBe('hello=undefined');
  });

  test('With object object field ', () => {
    expect(buildQueryParamsString({ hello: {}})).toBe('hello={}');
  });

  test('With combined fields', () => {
    expect(buildQueryParamsString({
      first: {},
      second: 1,
      third: 'third',
      fourth: false,
      fifth: null,
      sixth: undefined
    })).toBe('first={}&second=1&third=third&fourth=false&fifth=null&sixth=undefined');
  })
});