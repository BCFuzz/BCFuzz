const v2 = `
    const o4 = {
        "maxByteLength": 1073741824,
    };
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v6 = v2.split(8);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return v2;
}
const v12 = f8(v2, v7, v7);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v6); } catch (e) {}
}
Object.defineProperty(F13, "constructor", { enumerable: true, value: runString });
new F13(v7, f8, v12, F13);
gc();
