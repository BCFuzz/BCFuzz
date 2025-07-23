class C1 {
    static set b(a3) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v5 = new C1();
const o6 = {
    __proto__: C1,
};
C1.b = v5;
Reflect.construct(Date, [C1], Map);
gc();
