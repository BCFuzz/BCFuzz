function f0(a1, a2, a3, a4) {
    let v6 = a3 >>> 2147483649;
    const v7 = v6--;
    let v9 = v7 - (v7 ^ v7);
    v9--;
    try { a1(); } catch (e) {}
    for (let v12 = 0; v12 < 5; v12++) {
    }
    return f0;
}
for (let v13 = 0; v13 < 50; v13++) {
    f0(f0);
}
gc();
