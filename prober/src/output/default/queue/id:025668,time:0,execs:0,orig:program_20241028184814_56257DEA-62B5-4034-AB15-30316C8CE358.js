const v1 = new SharedArrayBuffer();
const v3 = new Int16Array(v1);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Int32Array(v1);
    v9.set(v3);
}
new F4(F4, v1);
gc();
