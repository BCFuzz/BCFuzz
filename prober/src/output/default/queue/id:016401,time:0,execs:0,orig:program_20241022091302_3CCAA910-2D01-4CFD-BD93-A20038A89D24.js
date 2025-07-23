const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v3 = new Int8Array();
v1.__proto__ = v3;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Uint8Array(v3, a6, a6);
    v9.constructor.from(v1);
}
new F4();
gc();
