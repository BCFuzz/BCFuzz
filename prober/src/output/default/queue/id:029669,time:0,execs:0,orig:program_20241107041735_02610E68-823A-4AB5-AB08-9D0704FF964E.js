const v0 = `
    function* f1(a2, a3, a4) {
        return a3;
    }
`;
const v6 = `
    [1000000000.0,-2.0,-822.2701748699242,-5.0];
`;
const v8 = v6.replaceAll(8, v0);
for (let i11 = -3, i12 = 10; 8 < i12; i12--) {
}
const v19 = [2.0,-4.0];
function f20(a21, a22, a23) {
    return a21;
}
const v24 = f20();
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    try { a30.constructor(v8); } catch (e) {}
}
new F25(v19, f20, v24, F25);
gc();
