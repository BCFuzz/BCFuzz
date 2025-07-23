const v0 = -Infinity;
class C2 {
    constructor(a4) {
        const v5 = this.constructor;
        try { new v5(v0); } catch (e) {}
        delete a4[a4];
    }
}
new C2(NaN);
new C2(v0);
gc();
