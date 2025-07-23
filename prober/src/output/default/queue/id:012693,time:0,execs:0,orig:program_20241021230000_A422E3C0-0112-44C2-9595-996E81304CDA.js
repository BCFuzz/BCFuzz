class C0 {
    constructor(a2) {
        const o3 = {
        };
        const v5 = new Proxy(C0, this);
        new v5(Proxy);
        const v7 = new Proxy();
        const t7 = v7.constructor;
        const v9 = t7();
        v9[0] = v9;
    }
}
try { new C0(); } catch (e) {}
gc();
