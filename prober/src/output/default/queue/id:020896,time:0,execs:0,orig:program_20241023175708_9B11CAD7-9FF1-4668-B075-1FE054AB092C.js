function f0() {
    return f0;
}
f0 /= f0;
function f1(a2, a3, a4, a5) {
    let v7 = a4 >>> 2147483649;
    v7--;
    try { a2(); } catch (e) {}
    for (let v10 = 0; v10 < 5; v10++) {
        f0 ^ undefined;
    }
    return f0;
}
for (let v13 = 0; v13 < 50; v13++) {
    f1(f1);
}
gc();
