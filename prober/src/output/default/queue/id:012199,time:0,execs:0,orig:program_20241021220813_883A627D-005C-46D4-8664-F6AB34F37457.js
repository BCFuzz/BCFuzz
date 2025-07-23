function f0(a1, a2, a3, a4) {
    let v6 = a3 >>> 2147483649;
    v6--;
    const v8 = v6--;
    v8 * v8;
    try { a1(); } catch (e) {}
    for (let v11 = 0; v11 < 5; v11++) {
        v8 ^ undefined;
    }
    return 2147483649;
}
for (let v14 = 0; v14 < 50; v14++) {
    f0(f0);
}
gc();
