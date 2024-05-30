const { soma, subtracao, multiplicacao, divisao } = require('../app');

describe('Função de soma', () => {
  test('Deve somar dois números corretamente', () => {
    expect(soma(1, 2)).toBe(3);
    expect(soma(5, 5)).toBe(10);
    expect(soma(-1, 1)).toBe(0);
  });
});

describe('Função de subtração', () => {
  test('Deve subtrair dois números corretamente', () => {
    expect(subtracao(10, 2)).toBe(8);
    expect(subtracao(5, 5)).toBe(0);
    expect(subtracao(7, 9)).toBe(-2);
  });
});

describe('Função de multiplicação', () => {
  test('Deve multiplicar dois números corretamente', () => {
    expect(multiplicacao(1, 2)).toBe(2);
    expect(multiplicacao(5, 5)).toBe(25);
    expect(multiplicacao(-1, 1)).toBe(-1);
  });
});

describe('Função de divisão', () => {
  test('Deve dividir dois números corretamente', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(divisao(6, 6)).toBe(1);
    expect(divisao(-10, 5)).toBe(-2);
  });
});