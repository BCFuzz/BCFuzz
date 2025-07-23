function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 5;
    delete this.f;
}
const v4 = new F0();
const o5 = {
    2665031226: v4,
    ...v4,
};
gc();
