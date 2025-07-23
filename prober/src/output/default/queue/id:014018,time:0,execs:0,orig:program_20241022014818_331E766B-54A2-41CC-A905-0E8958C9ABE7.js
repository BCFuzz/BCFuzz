class C1 {
    constructor(a3) {
        const v4 = this.constructor;
        try { new v4("d"); } catch (e) {}
        a3 in this;
    }
}
const v7 = new C1();
const t8 = v7.constructor;
const v9 = new t8();
new C1(v9);
gc();
