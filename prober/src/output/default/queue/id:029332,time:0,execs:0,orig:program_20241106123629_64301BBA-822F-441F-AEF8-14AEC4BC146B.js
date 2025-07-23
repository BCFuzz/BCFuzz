const v0 = `
    async function* f1(a2, a3) {
        return a2;
    }
`;
const v5 = `
    [1000000000.0,-2.0,-822.2701748699242,-5.0];
`;
const v7 = v5.replaceAll(8, v0);
for (let i10 = -3, i11 = 10; 8 < i11; i11--) {
}
const v18 = [2.0,-4.0];
function f19(a20, a21, a22) {
    return a22;
}
const v23 = f19(v0, 8, 8);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    try { a29.constructor(v7); } catch (e) {}
}
new F24(v18, f19, v23, F24);
gc();
