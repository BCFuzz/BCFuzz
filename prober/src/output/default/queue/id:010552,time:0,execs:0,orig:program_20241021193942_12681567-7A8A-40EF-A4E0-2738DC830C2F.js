class C2 {
    static set b(a4) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v6 = new C2();
const o7 = {
    __proto__: C2,
};
C2.b = v6;
const v9 = this.ArrayBuffer;
v9[0] = -4294967295;
try { v9.apply(13404756, v9); } catch (e) {}
gc();
