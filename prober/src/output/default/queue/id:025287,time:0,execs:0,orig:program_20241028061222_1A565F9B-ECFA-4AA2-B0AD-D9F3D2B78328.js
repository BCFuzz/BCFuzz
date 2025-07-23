const v1 = new Uint16Array();
v1.subarray();
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new SharedArrayBuffer();
    const v8 = new Uint8ClampedArray(v7);
    v8.set(v1);
}
new F3();
gc();
