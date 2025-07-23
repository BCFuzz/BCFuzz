function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    class C7 extends Date {
    }
    const v8 = new C7();
    for (const v10 of v8.toString()) {
    }
    for (let v11 = 0; v11 < 5; v11++) {
        try { Reflect.getPrototypeOf(v11, -3.0, v8); } catch (e) {}
    }
}
new F1();
new F1();
new F1();
gc();
