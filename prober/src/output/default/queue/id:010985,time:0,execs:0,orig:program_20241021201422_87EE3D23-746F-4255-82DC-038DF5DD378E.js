function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(a3); } catch (e) {}
    a3 !== a3;
}
const v9 = new F1(1000000.0);
new F1(v9, v9, F1);
gc();
