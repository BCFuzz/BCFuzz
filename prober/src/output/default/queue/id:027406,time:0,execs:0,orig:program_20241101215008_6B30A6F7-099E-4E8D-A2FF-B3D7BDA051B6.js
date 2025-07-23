const v1 = new Uint16Array();
v1.subarray(v1);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new SharedArrayBuffer();
    const v8 = new Int32Array(v7);
    v8.set(v1);
}
new F3();
gc();
