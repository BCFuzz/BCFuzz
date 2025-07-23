function f0(a1, a2) {
    const v4 = new ArrayBuffer(a1, a1);
    v4.transfer();
    new Uint8ClampedArray(v4);
    return f0;
}
try { f0(); } catch (e) {}
gc();
