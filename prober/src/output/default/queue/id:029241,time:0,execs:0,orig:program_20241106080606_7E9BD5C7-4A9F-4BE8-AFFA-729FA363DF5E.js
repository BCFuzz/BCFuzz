class C0 {
}
const v1 = new C0();
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v14 = `
    v1[1073741825];
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v17 = v14.split(8);
const v18 = [2.0,-4.0];
function f19(a20, a21, a22) {
    return a21;
}
const v23 = f19();
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    try { a29.constructor(v17); } catch (e) {}
}
Object.defineProperty(F24, "constructor", { enumerable: true, value: runString });
new F24(v18, f19, v23, F24);
gc();
