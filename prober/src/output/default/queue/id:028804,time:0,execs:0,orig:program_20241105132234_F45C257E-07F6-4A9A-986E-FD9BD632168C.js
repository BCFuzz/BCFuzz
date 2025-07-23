const v2 = `
    const o4 = {
        153970149: 1073741824,
        "maxByteLength": 1073741824,
    };
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v6 = v2.split(8);
v6[1] = v6;
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return v2;
}
const v12 = f8(v7, v2, 8);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v6); } catch (e) {}
}
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
Object.defineProperty(F13, "constructor", { enumerable: true, value: runString });
new F13(v7, f8, v12, F13);
gc();
