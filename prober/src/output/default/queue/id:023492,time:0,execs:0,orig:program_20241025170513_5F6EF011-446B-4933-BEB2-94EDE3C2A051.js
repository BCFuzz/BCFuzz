class C0 {
    constructor(a2) {
        let v4 = 9;
        const v5 = ++v4;
        Math.imul(v5, v5);
        const v7 = this.constructor;
        try { new v7(this, v7, C0, v5, C0); } catch (e) {}
    }
}
new C0();
gc();
