function f0(a1, a2, a3, a4) {
    let v6 = a3 >>> 2147483649;
    v6--;
    const v8 = v6--;
    v8 - v8;
    const v10 = v6--;
    v10 * v10;
    let v12;
    try { v12 = a1(f0, a2); } catch (e) {}
    for (let v13 = 0; v13 < 5; v13++) {
    }
    return v12;
}
for (let v14 = 0; v14 < 50; v14++) {
    f0(f0);
}
gc();
