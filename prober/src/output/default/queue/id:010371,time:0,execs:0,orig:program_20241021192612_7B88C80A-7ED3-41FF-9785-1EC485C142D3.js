function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends Date {
    }
    const v7 = new C6();
    for (let v8 = 0; v8 < 100; v8++) {
    }
    for (let v9 = 0; v9 < 5; v9++) {
        try { new Reflect(v7); } catch (e) {}
        try { Reflect.getPrototypeOf(v9); } catch (e) {}
    }
}
const v13 = new F0();
new F0(v13, v13, v13);
gc();
