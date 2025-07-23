function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v8 = new SharedArrayBuffer(delete v4[6]);
const v9 = new Uint8ClampedArray(v8);
v9.sort();
gc();
