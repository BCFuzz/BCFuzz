class C1 {
    static p(a3) {
        Int8Array.lastChunkHandling = Float32Array;
        Uint8Array.fromBase64("valueOf", Int8Array);
    }
}
try { C1.p(Float32Array, C1); } catch (e) {}
gc();
