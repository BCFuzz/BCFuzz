const v1 = new Float32Array();
const v2 = v1.subarray();
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new SharedArrayBuffer();
    const v8 = new Uint8ClampedArray(v7);
    v8.set(v2);
}
new F3();
gc();
