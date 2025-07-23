function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a2;
    this.e = a2;
}
const v3 = new F0();
const o5 = {
    "c": 8,
    ...v3,
};
gc();
