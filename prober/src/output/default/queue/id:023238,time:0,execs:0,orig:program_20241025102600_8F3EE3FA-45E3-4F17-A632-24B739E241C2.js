class C0 {
}
const v1 = new C0();
const v3 = new Float32Array(v1, v1, Float32Array);
const v5 = `
    delete v3[Float32Array];
    /\u{12345}/myvis;
`;
const v8 = v5.split(3);
function f9(a10, a11, a12) {
    return a10;
}
const v13 = f9();
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v8); } catch (e) {}
}
new F14(v1, f9, v13, F14);
gc();
