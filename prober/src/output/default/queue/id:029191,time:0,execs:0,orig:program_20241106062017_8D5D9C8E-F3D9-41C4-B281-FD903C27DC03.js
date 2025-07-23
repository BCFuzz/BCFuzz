function f1(a2, a3, a4) {
    Object.defineProperty(a2, 0, { configurable: true, get: Uint32Array });
    return a2;
}
f1(f1);
try { new Int32Array(f1); } catch (e) {}
gc();
