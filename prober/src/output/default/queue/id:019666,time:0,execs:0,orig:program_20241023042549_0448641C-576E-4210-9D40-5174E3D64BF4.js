function f0(a1, a2, a3, a4) {
    let v6 = a3 >>> 2147483649;
    const v8 = v6-- - v6;
    const v9 = v8 * v8;
    try { f0(v9, a3, v6, v9); } catch (e) {}
    return f0;
}
f0(f0, f0, f0, f0);
gc();
