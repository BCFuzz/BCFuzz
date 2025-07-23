const v2 = new Uint32Array(150);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            this.propertyIsEnumerable(this, v3, a6, v2);
            delete this.f;
        }
    }
    const v9 = new C4();
    const t9 = v9.constructor;
    new t9(C4, C4, C4);
}
gc();
