function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = v3.constructor;
v4.toString(v4, v4, v4).match(v2);
gc();
