const v2 = new Uint32Array(150);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            try { this.constructor(); } catch (e) {}
            delete this.f;
            for (let v9 = 0; v9 < 66; v9++) {
            }
        }
    }
    new C4();
    const v11 = new C4(150);
    const t12 = v11.constructor;
    new t12();
}
gc();
