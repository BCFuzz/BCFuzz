const v1 = new Int8Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new SharedArrayBuffer(Int8Array, v1);
    const v7 = new Uint8ClampedArray(v6);
    v7.set(v1);
}
new F2();
gc();
