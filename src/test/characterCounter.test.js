// characterCounter.test.js
const { countCharacter } = require('../helpers/countCharacter.js');

test('Contar el número de ocurrencias de un carácter en un array de strings', () => {
    // Caso de prueba 1: Contar el número de ocurrencias de 'a' en un array de strings
    const result1 = countCharacter('a', 'resource1', ['apple', 'banana', 'cherry']);
    expect(result1).toEqual({ char: 'a', resource: 'resource1', count: 4 });

    // // Caso de prueba 2: Contar el número de ocurrencias de 'x' en un array vacío
    const result2 = countCharacter('x', 'resource2', []);
    expect(result2).toEqual({ char: 'x', resource: 'resource2', count: 0 });

    // // Caso de prueba 3: Contar el número de ocurrencias de 'z' en un array de strings
    const result3 = countCharacter('z', 'resource3', ['pizza', 'hamburger', 'hotdog']);
    expect(result3).toEqual({ char: 'z', resource: 'resource3', count: 2 });
});
