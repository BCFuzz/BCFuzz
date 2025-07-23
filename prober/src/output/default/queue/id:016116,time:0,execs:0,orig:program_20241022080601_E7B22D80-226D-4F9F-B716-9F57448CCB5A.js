for (let v1 = 0; v1 < 5; v1++) {
    class C3 {
        #d = 10n;
    }
    const v4 = new C3();
    const t5 = v4.constructor;
    const v6 = new t5();
    const t7 = v6.constructor;
    new t7();
}
gc();
