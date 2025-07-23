function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
for (let i9 = -1, i10 = 10; -1 < i10; i10--) {
}
const v19 = `
    for (const v21 in Uint8Array()) {
        /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
    }
`;
const v23 = v19.split(8);
v23[1] = v5;
const v24 = [2.0,-4.0];
function f25(a26, a27, a28) {
}
const v29 = f25();
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    try { a35.constructor(v23); } catch (e) {}
}
Object.defineProperty(F30, "constructor", { enumerable: true, value: runString });
new F30(v24, f25, v29, F30);
gc();
