class C0 {
}
const v1 = new C0();
const v3 = new Float32Array(v1, Float32Array, C0);
const v5 = `
    const v6 = delete v3[Float32Array];
    function f7(a8, a9) {
        a9.at(a9, a8, a8, v6);
        return v1;
    }
`;
const v11 = v5.split(3);
function f12(a13, a14, a15) {
    return a14;
}
const v16 = f12(v1, C0, v5);
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    try { a22.constructor(v11); } catch (e) {}
}
new F17(v1, f12, v16, F17);
gc();
