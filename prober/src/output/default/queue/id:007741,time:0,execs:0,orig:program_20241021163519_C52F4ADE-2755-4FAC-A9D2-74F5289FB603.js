class C0 {
    constructor(a2, a3) {
        for (let v4 = 0; v4 < 32; v4++) {
            async function f5(a6, a7, a8, a9) {
                return a6;
            }
            const v10 = f5(f5, f5, v4, f5);
            function f11() {
                return C0;
            }
            Object.defineProperty(v10, "constructor", { configurable: true, get: f11 });
            v10.catch();
        }
    }
}
new C0(C0, C0);
new C0();
gc();
