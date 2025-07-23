const v4 = `
    async function f5(a6, a7, a8) {
        4 instanceof Int32Array;
        return f5;
    }
    /\u{12345}/myvis;
`;
const v11 = v4.split(3);
const v12 = [2.0,-4.0];
function f13(a14, a15, a16) {
    return v11;
}
const v17 = f13();
v17.unshift("0");
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    try { a24.constructor(v11); } catch (e) {}
}
new F19(v12, f13, v17, F19);
gc();
