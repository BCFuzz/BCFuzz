function f0(a1, a2, a3, a4) {
    let v6 = a3 >>> 2147483649;
    const v7 = v6--;
    const v8 = v7 << v7;
    v8 * v8;
    try { a1(a1); } catch (e) {}
    return a4;
}
f0(f0);
gc();
