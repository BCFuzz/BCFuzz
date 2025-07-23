function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 5;
    delete this.f;
}
const v4 = new F0();
this.constructor.values(v4);
gc();
