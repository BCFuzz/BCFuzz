function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 extends Set {
        }
        const v8 = new C7();
        v8.keys();
    }
    const v10 = new F2();
    const v11 = new F2(F0, v10);
    const t11 = v11.constructor;
    new t11();
}
const v14 = new F0();
const t15 = v14.constructor;
const v16 = new t15();
const t17 = v16.constructor;
new t17();
new F0();
gc();
