class C2 {
    constructor(a4) {
        const v5 = this.constructor;
        try { new v5("d"); } catch (e) {}
        a4 in this;
    }
}
new C2("d");
const v9 = new C2(536870887);
v9.e = v9;
new C2();
gc();
