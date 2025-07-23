function f0() {
    const v3 = new Uint8Array();
    v3.byteOffset;
    function f5() {
        return f0;
    }
    const v6 = f5.apply(f5, arguments);
    try { v6(); } catch (e) {}
    return f0;
}
f0();
gc();
