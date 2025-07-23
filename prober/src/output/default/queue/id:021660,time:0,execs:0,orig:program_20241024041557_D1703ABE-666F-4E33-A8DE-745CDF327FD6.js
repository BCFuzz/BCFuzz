function f0(a1, a2, a3, a4) {
    let v6 = a3 >>> 2147483649;
    const v7 = v6--;
    let v8 = v7 ^ v7;
    v8--;
    let v10 = v7 - v8;
    v10--;
    try { a1(); } catch (e) {}
    for (let v13 = 0; v13 < 5; v13++) {
    }
    return v6;
}
for (let v14 = 0; v14 < 50; v14++) {
    f0(f0);
}
gc();
