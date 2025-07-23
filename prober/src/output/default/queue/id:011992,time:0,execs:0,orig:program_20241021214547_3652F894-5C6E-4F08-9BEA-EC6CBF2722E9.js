[];
class C1 {
    constructor(a3) {
        try { this.constructor(); } catch (e) {}
        const v5 = typeof this;
        ("boolean").search();
        ("boolean").replace(v5, v5);
    }
}
const v9 = new C1();
const t10 = v9.constructor;
new t10();
const v12 = v9.constructor;
const v13 = new v12();
const t14 = v13.constructor;
new t14();
const v16 = new v12();
const t17 = v16.constructor;
new t17();
const v19 = new C1();
const t20 = v19.constructor;
new t20();
const t22 = v19.constructor;
new t22();
const t24 = v19.constructor;
new t24();
gc();
