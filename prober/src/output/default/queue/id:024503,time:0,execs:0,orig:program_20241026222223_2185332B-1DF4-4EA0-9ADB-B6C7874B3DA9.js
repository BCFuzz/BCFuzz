class C0 {
    constructor(a2, a3) {
        const v5 = new WeakSet();
        Object.defineProperty(v5, "length", { enumerable: true, get: a3 });
        try { new Uint16Array(v5); } catch (e) {}
    }
}
new C0(C0, C0);
gc();
