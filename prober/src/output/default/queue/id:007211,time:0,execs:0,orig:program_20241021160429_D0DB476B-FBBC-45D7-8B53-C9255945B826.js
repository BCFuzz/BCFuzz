function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
([v3]).every(RangeError);
gc();
