function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
4294967295 in v2;
gc();
