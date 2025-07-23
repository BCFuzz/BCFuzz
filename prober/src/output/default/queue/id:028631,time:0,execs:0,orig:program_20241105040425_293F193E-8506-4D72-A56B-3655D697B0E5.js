class C0 {
}
const v1 = new C0();
const v3 = runString();
const v5 = `
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
    v1[v3] = 8;
`;
const v7 = v5.split(8);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return a12;
}
const v13 = f9();
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
Object.defineProperty(F14, "constructor", { enumerable: true, value: runString });
new F14(v8, f9, v13, F14);
gc();
