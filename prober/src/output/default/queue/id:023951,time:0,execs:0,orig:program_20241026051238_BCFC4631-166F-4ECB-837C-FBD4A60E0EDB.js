const v1 = new Int32Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new SharedArrayBuffer(Uint8ClampedArray, this);
    const v7 = new Uint8ClampedArray(v6);
    v7.set(v1);
}
new F2();
gc();
