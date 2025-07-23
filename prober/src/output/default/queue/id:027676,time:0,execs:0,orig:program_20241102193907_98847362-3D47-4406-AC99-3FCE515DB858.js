const v3 = new SharedArrayBuffer();
const v4 = new Uint8ClampedArray(v3);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Uint16Array(v3);
    v9.set(v4);
}
new F5();
gc();
