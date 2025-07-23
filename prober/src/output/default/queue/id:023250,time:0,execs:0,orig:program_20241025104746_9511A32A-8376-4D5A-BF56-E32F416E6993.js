const v1 = new Float32Array();
const v3 = `
    const v4 = delete v1[Float32Array];
    const o5 = {
    };
    o5.a = v4;
    /\u{12345}/myvis;
`;
const v7 = v3.split(3);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return a12;
}
const v13 = f9(v7, Float32Array, v8);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
new F14(v8, f9, v13, F14);
gc();
