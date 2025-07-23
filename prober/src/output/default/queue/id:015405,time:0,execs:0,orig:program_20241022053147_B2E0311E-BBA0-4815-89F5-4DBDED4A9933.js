const v2 = new Uint8Array(210);
for (const v3 of v2) {
    class C4 {
        constructor(a6) {
            try { a6["call"](); } catch (e) {}
        }
    }
    new C4(C4);
}
gc();
