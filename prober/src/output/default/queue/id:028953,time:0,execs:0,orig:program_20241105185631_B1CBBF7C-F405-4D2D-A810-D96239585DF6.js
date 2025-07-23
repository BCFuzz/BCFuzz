for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = `
    Uint8Array(2147483648);
    for (let i17 = 8, i18 = 10; i17 < i18;) {
    }
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v25 = v12.split(8);
const v26 = [2.0,-4.0];
function f27(a28, a29, a30) {
    return a30;
}
const v31 = f27(v26, v12, runString);
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    try { a37.constructor(v25); } catch (e) {}
}
Object.defineProperty(F32, "constructor", { enumerable: true, value: runString });
new F32(v26, f27, v31, F32);
gc();
