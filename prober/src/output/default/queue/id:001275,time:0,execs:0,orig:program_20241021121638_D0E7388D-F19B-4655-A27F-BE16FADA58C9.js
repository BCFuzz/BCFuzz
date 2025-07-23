function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
new Float64Array(v2);
gc();
