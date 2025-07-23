function f1(a2) {
    Int8Array.lastChunkHandling = a2;
    Uint8Array.fromBase64("valueOf", Int8Array);
    return 10;
}
try { f1(10); } catch (e) {}
gc();
