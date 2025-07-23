class C0 {
    constructor(a2, a3) {
        const v5 = new WeakSet();
        Object.defineProperty(v5, "length", { enumerable: true, get: a3 });
        const v7 = new Uint16Array();
        try { v7.set(v5); } catch (e) {}
    }
}
new C0(C0, C0);
gc();
