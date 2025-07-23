class C0 {
    constructor(a2, a3) {
        class C5 {
            constructor(a7) {
                class C8 {
                    [a7];
                    4 = this;
                }
                new C8();
                new C8();
                new C8();
            }
        }
        new C5(a3);
        const v13 = new C5(a3);
        const t15 = v13.constructor;
        new t15();
        new C5(63116);
    }
}
const v17 = new C0(C0, C0);
const v18 = v17.constructor;
class C19 {
    static set b(a21) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v23 = new C19();
const o24 = {
    __proto__: C19,
};
C19.b = v23;
new v18();
const v26 = new C0();
new C0(v23, v26);
class C28 extends C0 {
}
new C28();
const v30 = new C28();
const t39 = v30.constructor;
new t39();
new C28();
class C34 extends C0 {
}
new C34();
new C34();
gc();
