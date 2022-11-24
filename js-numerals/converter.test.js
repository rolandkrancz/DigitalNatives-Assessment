import { converter } from "./converter";

test('1', () => {
    expect(converter(1)).toEqual('one');
})

test('7', () => {
    expect(converter(7)).toEqual('seven');
})

test('10', () => {
    expect(converter(10)).toEqual('ten');
})

test('12', () => {
    expect(converter(11)).toEqual('eleven');
})

test('20', () => {
    expect(converter(20)).toEqual('twenty');
})

test('21', () => {
    expect(converter(21)).toEqual('twenty-one');
})

test('99', () => {
    expect(converter(99)).toEqual('ninety-nine');
})

test('100', () => {
    expect(converter(100)).toEqual('one hundred');
})

test('200', () => {
    expect(converter(200)).toEqual('two hundred');
})

test('601', () => {
    expect(converter(601)).toEqual('six hundred and one');
})

test('999', () => {
    expect(converter(999)).toEqual('nine hundred and ninety-nine');
})