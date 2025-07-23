function f1(a2, a3, a4) {
    Object.defineProperty(a2, 0, { configurable: true, get: Uint32Array });
    return f1;
}
f1(f1);
try { new BigInt64Array(f1); } catch (e) {}
gc();
