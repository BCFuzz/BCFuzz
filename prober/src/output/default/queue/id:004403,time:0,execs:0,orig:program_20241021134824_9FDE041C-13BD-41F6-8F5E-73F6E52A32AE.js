class C0 {
    static set b(a2) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v4 = new C0();
const o5 = {
    __proto__: C0,
};
class C6 {
}
const v7 = new C6();
const v8 = v7.constructor;
C0.b = v4;
for (let v9 = 0; v9 < 25; v9++) {
    const v10 = /(Tp+)/mdvi;
    const v11 = [];
    v11[Symbol.isConcatSpreadable] = v8;
    v11.concat(v10);
}
gc();
