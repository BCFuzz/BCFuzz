class C1 {
    toString(a3, a4) {
        Math.imul(a4);
    }
}
const v7 = new C1();
const v8 = v7.constructor;
const v9 = v8.prototype;
const v10 = new v8(v9);
try { v10.toString(v9, 1960788938n); } catch (e) {}
gc();
