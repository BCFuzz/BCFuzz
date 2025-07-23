function f0(a1, a2, a3, a4) {
    let v5 = 5n;
    v5--;
    const v7 = v5 * v5;
    const v8 = v7 | v7;
    v8 + v8;
    for (let v10 = 0; v10 < 250; v10++) {
        v10++;
        v10--;
    }
    return a2;
}
f0();
gc();
