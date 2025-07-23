function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v6 = new Float32Array(1000);
v6.lastIndexOf(undefined, v2);
gc();
