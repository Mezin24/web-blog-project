import { classNames } from './classNames';

describe('className', () => {
  test('with only main class', () => {
    expect(classNames('main')).toBe('main');
  });

  test('with main and additional classes', () => {
    const expected = 'main class1 class2';
    expect(classNames('main', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with main and additional classes and mods', () => {
    const expected = 'main class1 class2 selected hovered';
    expect(classNames('main', {
      selected: true,
      hovered: true,
    }, ['class1', 'class2'])).toBe(expected);
  });

  test('with main and additional classes and mods false', () => {
    const expected = 'main class1 class2 selected';
    expect(classNames('main', {
      selected: true,
      hovered: false,
    }, ['class1', 'class2'])).toBe(expected);
  });

  test('with main and additional classes and mods undefined', () => {
    const expected = 'main class1 class2 hovered';
    expect(classNames('main', {
      selected: undefined,
      hovered: true,
    }, ['class1', 'class2'])).toBe(expected);
  });
});
