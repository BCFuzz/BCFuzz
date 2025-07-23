function f0(a1, a2, a3, a4) {
    let v6 = a3 >>> 2147483649;
    let v7 = v6--;
    const v8 = --v7;
    try { a1(); } catch (e) {}
    for (let v10 = 0; v10 < 5; v10++) {
        v7 ^ undefined;
    }
    return v8;
}
for (let v13 = 0; v13 < 50; v13++) {
    f0(f0);
}
gc();
