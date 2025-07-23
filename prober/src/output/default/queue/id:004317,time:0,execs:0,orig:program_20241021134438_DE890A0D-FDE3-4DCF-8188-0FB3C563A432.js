function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new Float32Array();
v5.copyWithin(v2, -26255);
gc();
