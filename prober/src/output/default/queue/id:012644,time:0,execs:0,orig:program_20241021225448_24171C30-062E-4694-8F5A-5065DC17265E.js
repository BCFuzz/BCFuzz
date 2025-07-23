function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new Int32Array(681);
function f6(a7, a8, a9, a10) {
    v2[9] <<= 257;
    return a10;
}
v5.map(f6);
gc();
