for (let v0 = 0; v0 < 5; v0++) {
    class C1 {
        constructor(a3, a4, a5) {
            function F6(a8, a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this instanceof C1;
            }
            const v12 = new F6(C1, C1, C1);
            const t8 = v12.constructor;
            new t8();
            const v15 = new F6(a4, F6, a4);
            const t11 = v15.constructor;
            new t11();
        }
    }
    const v18 = new C1(C1, v0, C1);
    const v19 = new C1();
    const v20 = v19.constructor;
    new v20(v20, v20, v18, C1, v20);
    new C1();
}
gc();
