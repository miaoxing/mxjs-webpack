import webpack from '..';

describe('webpack', () => {
  test('name', () => {
    const result = webpack.build({
      name: 'test',
    });

    expect(result.name).toBe('test');
  });
});
