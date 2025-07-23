function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.__lookupSetter__;
    try { new v4(); } catch (e) {}
}
for (let v6 = 0; v6 < 10; v6++) {
    class C7 extends F0 {
    }
    new C7();
}
gc();
