function f1() {
    f1();
    const v6 = 255n * -5.0;
    const v8 = !v6 - -472090241;
    3418n >> v6;
    let v10 = v8 ^ 3418n;
    v10--;
    return f1;
}
try { f1(); } catch (e) {}
gc();
