const v2 = new SharedArrayBuffer();
const v3 = new Uint32Array(v2);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Float32Array(v2);
    v9.set(v3);
}
new F4(v2, SharedArrayBuffer);
gc();
