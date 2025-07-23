function f0(a1, a2, a3, a4) {
    a2 % a2;
    const v6 = a2 + a2;
    try { a3(); } catch (e) {}
    return v6;
}
for (let v8 = 0; v8 < 5; v8++) {
    f0(v8, v8, f0);
}
gc();
