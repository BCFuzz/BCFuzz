const v2 = Symbol.isConcatSpreadable;
const v5 = `
    const o6 = {
        [-809]: v2,
    };
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v8 = v5.split(8);
const v9 = [2.0,-4.0];
function f10(a11, a12, a13) {
    return a13;
}
const v14 = f10(f10, v2, v5);
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    try { a20.constructor(v8); } catch (e) {}
}
Object.defineProperty(F15, "constructor", { enumerable: true, value: runString });
new F15(v9, f10, v14, F15);
gc();
