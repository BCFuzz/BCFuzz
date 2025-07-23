class C0 {
}
const v1 = new C0();
const v3 = new Float32Array();
const v5 = `
    delete v3[Float32Array];
`;
const v7 = v5.split(3);
function f8(a9, a10, a11) {
    return a11;
}
const v12 = f8(Float32Array, C0, v5);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v7); } catch (e) {}
}
new F13(v1, f8, v12, F13);
gc();
