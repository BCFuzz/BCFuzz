function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor;
}
const v7 = F0.prototype;
const v8 = new F0(v7, v7, F0, F0);
const v9 = v8.constructor;
new v9(v8, F0, F0, v9);
new F0();
this.constructor.freeze(v7);
gc();
