function f1() {
    return 8;
}
SharedArrayBuffer.toString = f1;
const v3 = new SharedArrayBuffer(SharedArrayBuffer);
const v5 = new Float32Array(v3);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = new Uint8ClampedArray(v3);
    v11.set(v5);
}
new F6();
gc();
