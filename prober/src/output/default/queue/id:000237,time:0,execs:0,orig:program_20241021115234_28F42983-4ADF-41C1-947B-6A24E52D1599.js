function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = new Int32Array();
v4 >= v2;
gc();
