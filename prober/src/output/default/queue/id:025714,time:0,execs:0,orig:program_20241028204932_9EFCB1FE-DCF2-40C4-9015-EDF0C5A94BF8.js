function f2(a3, a4, a5, a6) {
    let v8 = a5 >>> 2147483649;
    const v9 = v8--;
    const v10 = -6 - v9;
    v10 * v10;
    try { a3(a3, -4294967296, v9); } catch (e) {}
    return -6;
}
f2(f2);
gc();
