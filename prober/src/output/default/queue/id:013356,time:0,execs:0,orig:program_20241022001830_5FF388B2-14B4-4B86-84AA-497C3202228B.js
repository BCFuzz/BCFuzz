class C0 {
    constructor(a2) {
        for (let v3 = 0; v3 < 5; v3++) {
            for (let v4 = 0; v4 < 250; v4++) {
                v4++;
                v4--;
            }
            try { Reflect.ownKeys(v3); } catch (e) {}
        }
    }
}
const t11 = C0.prototype.constructor;
new t11();
new C0();
gc();
