class C1 {
    constructor(a3, a4, a5, a6) {
        this.undefined = this;
        delete this["undefined"];
    }
}
const v8 = new C1();
const v9 = new C1(v8, "undefined", C1, v8);
const t8 = v9.constructor;
new t8();
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
