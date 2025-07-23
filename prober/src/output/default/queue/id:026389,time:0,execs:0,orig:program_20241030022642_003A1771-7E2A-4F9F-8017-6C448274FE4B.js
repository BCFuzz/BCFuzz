function f1(a2, a3, a4, a5) {
    let v7 = a4 >>> 2147483649;
    const v9 = v7-- << 13;
    v9 * v9;
    try { a2(a2); } catch (e) {}
}
f1(f1);
gc();
