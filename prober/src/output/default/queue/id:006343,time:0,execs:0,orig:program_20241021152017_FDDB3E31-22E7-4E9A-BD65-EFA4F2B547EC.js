function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(this, a3); } catch (e) {}
    a4.prototype;
    this.c = Date;
}
const v8 = new F1(Date, F1);
const v9 = new F1(v8, F1);
new F1(v9, F1);
gc();
