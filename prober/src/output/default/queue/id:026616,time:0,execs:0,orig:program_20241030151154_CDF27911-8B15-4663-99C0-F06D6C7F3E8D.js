const v4 = `
    async function f5(a6, a7, a8) {
        return 4 instanceof Int32Array;
    }
`;
const v10 = v4.split(3);
const v11 = [2.0,-4.0];
function f12(a13, a14, a15) {
    return v10;
}
const v16 = f12();
v16.unshift("0");
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    try { a23.constructor(v10); } catch (e) {}
}
new F18(v11, f12, v16, F18);
gc();
