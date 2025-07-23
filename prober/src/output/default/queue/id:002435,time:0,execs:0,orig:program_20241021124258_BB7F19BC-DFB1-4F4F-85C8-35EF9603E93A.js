function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 5;
}
const v3 = new F0();
const v4 = new F0();
const o5 = {
    __proto__: v3,
};
delete v4.e;
gc();
