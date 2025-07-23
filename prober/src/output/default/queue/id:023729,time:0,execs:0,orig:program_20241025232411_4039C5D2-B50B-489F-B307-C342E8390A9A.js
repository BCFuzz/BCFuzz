class C1 {
    constructor(a3, a4, a5) {
        const v7 = Uint8ClampedArray.from(a5);
        function f8() {
            return -56765n;
        }
        Object.defineProperty(v7, "constructor", { get: f8 });
        try { v7.subarray(); } catch (e) {}
    }
}
new C1(C1, C1, C1);
gc();
