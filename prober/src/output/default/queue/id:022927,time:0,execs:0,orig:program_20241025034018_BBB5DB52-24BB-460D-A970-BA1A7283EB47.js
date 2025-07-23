function f0() {
    return f0;
}
function f1(a2, a3, a4, a5) {
    try { a2(); } catch (e) {}
    try { a3(a5, f0); } catch (e) {}
    try { a3(a3); } catch (e) {}
    return f1;
}
for (let v9 = 0; v9 < 25; v9++) {
    f1(f1, f1);
}
gc();
