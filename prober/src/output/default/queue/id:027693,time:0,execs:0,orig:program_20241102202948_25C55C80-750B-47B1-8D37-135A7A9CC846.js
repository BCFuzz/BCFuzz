for (let v0 = 0; v0 < 5; v0++) {
    class C1 {
        constructor(a3, a4, a5, a6) {
            const v7 = this?.toString;
            v7.call(v7);
        }
    }
    const v9 = new C1();
    new C1(v9, v9, v0, v9);
}
gc();
