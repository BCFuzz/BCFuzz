function f0(a1, a2) {
    const v4 = new Uint32Array(a1, a1);
    const v5 = v4.buffer;
    v5.transfer();
    v5.transferToFixedLength(v4);
    return f0;
}
try { f0(f0, f0); } catch (e) {}
gc();
