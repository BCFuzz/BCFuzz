class C0 {
    static p(a2) {
        Int8Array.alphabet = Int8Array;
        Uint8Array.fromBase64("valueOf", Int8Array);
    }
}
try { C0.p(); } catch (e) {}
gc();
