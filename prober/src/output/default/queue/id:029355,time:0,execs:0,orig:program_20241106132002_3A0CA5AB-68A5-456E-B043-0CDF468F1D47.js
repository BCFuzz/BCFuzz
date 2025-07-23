const v3 = `
    const o4 = {
        153970149: 1834665654n,
    };
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v6 = v3.split(8);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return v3;
}
const v12 = f8();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v6); } catch (e) {}
}
Object.defineProperty(F13, "constructor", { enumerable: true, value: runString });
new F13(v7, f8, v12, F13);
gc();
