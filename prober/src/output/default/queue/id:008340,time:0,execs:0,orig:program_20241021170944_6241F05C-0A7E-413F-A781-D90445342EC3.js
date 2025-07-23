for (let v0 = 0; v0 < 5; v0++) {
    class C2 {
    }
    const v3 = new C2();
    class C4 extends C2 {
    }
    const v5 = new C4();
    const v6 = v5.constructor;
    try { v6(); } catch (e) {}
    delete v3[Symbol()];
    for (let v10 = 0; v10 < 100; v10++) {
    }
}
gc();
