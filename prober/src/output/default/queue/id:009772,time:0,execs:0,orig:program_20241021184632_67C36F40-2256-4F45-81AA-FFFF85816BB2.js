function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends Date {
    }
    const v7 = new C6();
    for (const v9 of v7.toString()) {
    }
    for (let v10 = 0; v10 < 5; v10++) {
        try { Reflect.getPrototypeOf(v10); } catch (e) {}
    }
}
const v13 = new F0(F0, F0, F0);
const v14 = new F0(v13, v13, v13);
new F0(v14, v13, v14);
gc();
