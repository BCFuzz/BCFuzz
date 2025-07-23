for (let v1 = 0; v1 < 10; v1++) {
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
        const v12 = [-7677,1613127934,16,47879,12,10000,-56627,-4096,21519];
        function f13() {
            function f14() {
                class C15 extends 1651233039n {
                }
                return C15;
            }
            return f14;
        }
        function f16(a17) {
            return a17;
        }
        Object.defineProperty(v12, "toString", { configurable: true, enumerable: true, get: f13, set: f16 });
        const v19 = new SharedArrayBuffer(v1, SharedArrayBuffer);
        const v21 = new DataView(v19);
        try { v21.getUint16(v12); } catch (e) {}
    }
}
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
gc();
