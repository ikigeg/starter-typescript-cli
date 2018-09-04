import { hello } from './hello';

describe('hello', () => {
  it('should return expected default', () => {
    // Act
    const output = hello();

    // Assert
    expect(output).toEqual('Hello 🗺️!');
  });

  it('should returns expected doggo', () => {
    // Arrange
    const target = 'doggo';

    // Act
    const output = hello(target);

    // Assert
    expect(output).toEqual(`Hello ${target}!`);
  });
});
