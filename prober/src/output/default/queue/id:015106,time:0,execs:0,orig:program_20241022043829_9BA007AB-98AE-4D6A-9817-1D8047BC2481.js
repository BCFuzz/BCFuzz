for (let v1 = 0; v1 < 10; v1++) {
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
        const v12 = [-7677,1613127934,16,47879,12,10000,-56627,-4096,21519];
        function f13() {
            function f14() {
                class C15 extends undefined {
                }
                return i5;
            }
            return f14;
        }
        function f16(a17) {
            return v1;
        }
        Object.defineProperty(v12, "toString", { configurable: true, enumerable: true, get: f13, set: f16 });
        const v19 = new SharedArrayBuffer(v1, SharedArrayBuffer);
        const v21 = new DataView(v19);
        try { v21.getUint16(v12); } catch (e) {}
    }
}
gc();
