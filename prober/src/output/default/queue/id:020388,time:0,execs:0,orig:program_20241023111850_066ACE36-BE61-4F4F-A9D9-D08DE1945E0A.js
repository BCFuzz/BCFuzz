function f1(a2, a3, a4) {
    Object.defineProperty(a2, 0, { configurable: true, get: Uint32Array });
    let v5;
    try { v5 = a3.apply(a4, a3); } catch (e) {}
    return v5;
}
f1(f1, f1);
gc();
