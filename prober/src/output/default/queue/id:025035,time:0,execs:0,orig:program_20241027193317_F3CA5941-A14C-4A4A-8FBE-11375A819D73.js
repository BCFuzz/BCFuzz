function f1(a2, a3, a4, a5) {
    try { a2(-9007199254740990); } catch (e) {}
    return parseInt(a2);
}
for (let v9 = 0; v9 < 5; v9++) {
    f1(f1);
}
gc();
