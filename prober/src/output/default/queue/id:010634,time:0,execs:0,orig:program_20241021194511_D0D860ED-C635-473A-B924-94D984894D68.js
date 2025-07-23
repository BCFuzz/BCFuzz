class C0 {
    constructor() {
        const o3 = {
            "apply": BigInt,
        };
        const v5 = new Proxy(BigInt, o3);
        try { v5(o3, Proxy, v5); } catch (e) {}
    }
}
new C0();
gc();
