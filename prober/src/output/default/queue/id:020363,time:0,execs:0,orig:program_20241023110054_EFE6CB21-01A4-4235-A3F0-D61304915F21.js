function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o3 = {
    };
    const v4 = o3.constructor;
    class C5 extends v4 {
    }
    const v7 = C5.getOwnPropertyDescriptors(RegExp).$_;
    try { v7.set(v4); } catch (e) {}
}
new F0();
gc();
