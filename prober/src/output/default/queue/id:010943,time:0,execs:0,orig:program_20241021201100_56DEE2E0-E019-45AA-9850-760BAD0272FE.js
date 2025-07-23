function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Float32Array(this, a6, a5);
    v9.string = a6;
    class C10 {
        constructor(a12, a13, a14) {
            const v15 = this.constructor;
            try { new v15(a13, this, "2r9v"); } catch (e) {}
            a14 in v9;
        }
    }
    const v18 = new C10("2r9v", F2, a4);
    const t12 = v18.constructor;
    new t12("string", F2, "string");
}
new F2("string", "string", "string", F2);
gc();
