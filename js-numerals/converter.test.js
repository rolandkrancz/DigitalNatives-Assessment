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