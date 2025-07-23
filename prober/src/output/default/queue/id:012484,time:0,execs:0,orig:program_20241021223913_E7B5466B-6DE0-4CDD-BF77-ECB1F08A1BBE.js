function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends Date {
    }
    const v7 = new C6();
    for (const v9 of v7.toString(v7)) {
    }
    for (let v10 = 0; v10 < 5; v10++) {
        v10 % v10;
        try { Reflect.getPrototypeOf(v10); } catch (e) {}
    }
}
new F0();
const v15 = new F0();
const t14 = v15.constructor;
new t14();
gc();
