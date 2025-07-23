class C0 {
    constructor(a2, a3, a4) {
        let v5 = 0;
        const v9 = Uint8ClampedArray.from(-15);
        function f10() {
            return -0.9569480257603082;
        }
        Object.defineProperty(v9, "constructor", { get: f10 });
        try { v9.subarray(); } catch (e) {}
        do {
            v5++;
        } while (v5 < 45830)
    }
}
new C0(C0, C0, C0);
gc();
