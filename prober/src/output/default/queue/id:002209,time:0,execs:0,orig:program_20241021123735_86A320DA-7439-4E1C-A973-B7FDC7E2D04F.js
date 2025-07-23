function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new Uint32Array();
v5.subarray(v2, v5);
gc();
