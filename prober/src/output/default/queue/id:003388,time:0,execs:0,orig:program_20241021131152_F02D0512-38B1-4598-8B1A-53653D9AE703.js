let v1;
try { v1 = Uint32Array.call(); } catch (e) {}
for (let v2 = 0; v2 < 50; v2++) {
    class C4 {
        constructor(a6, a7) {
            a7.g = a7;
            a7.h = "g";
        }
        static n(a9, a10) {
        }
    }
    C4.name;
    const v12 = new C4(v1, C4);
    new C4(C4, v12);
}
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
