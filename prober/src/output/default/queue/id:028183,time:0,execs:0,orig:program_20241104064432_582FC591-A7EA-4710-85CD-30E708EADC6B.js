class C0 {
    constructor(a2, a3) {
        const v4 = this.constructor;
        try { new v4(v4); } catch (e) {}
    }
    #m(a7, a8) {
    }
}
const v9 = new C0();
v9.length = v9;
const v10 = new C0(v9, C0);
const t11 = v10.constructor;
const v12 = new t11();
new C0(v12, v9);
for (let i17 = 0, i18 = 10 + 10; i18--, i17 < i18;) {
}
gc();
