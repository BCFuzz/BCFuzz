class C0 {
}
const v1 = new C0();
class C2 {
    constructor(a4, a5, a6) {
        const v7 = this.constructor;
        try { new v7(); } catch (e) {}
        for (const v9 in a4) {
        }
    }
}
const v10 = new C2(v1);
const t12 = v10.constructor;
new t12(v10);
gc();
