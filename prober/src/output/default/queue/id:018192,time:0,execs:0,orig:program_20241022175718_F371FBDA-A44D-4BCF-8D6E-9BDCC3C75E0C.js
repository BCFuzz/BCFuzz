let v0 = "JZ";
function f1(a2, a3, a4, a5) {
    let v7 = a4 >>> 2147483649;
    const v8 = v7--;
    const v9 = v8 - v8;
    v9 * v9;
    const v11 = v0--;
    v11 ^ v11;
    try { a2(a2, f1); } catch (e) {}
    for (let v14 = 0; v14 < 5; v14++) {
    }
    return v7;
}
for (let v15 = 0; v15 < 50; v15++) {
    f1(f1);
}
gc();
