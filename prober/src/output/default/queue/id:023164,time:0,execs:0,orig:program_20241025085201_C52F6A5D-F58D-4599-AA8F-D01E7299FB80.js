function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    a4 instanceof F1;
    try { new v5(this, a3); } catch (e) {}
    this.c = Date;
}
const v8 = new F1(F1, Date);
new F1(v8);
gc();
