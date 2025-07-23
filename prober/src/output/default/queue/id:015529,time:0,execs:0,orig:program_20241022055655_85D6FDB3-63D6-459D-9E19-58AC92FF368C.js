const v0 = [];
function f1(a2, a3, a4, a5) {
    const v6 = a3.length;
    try { a2(a3, v6, v0, v6, a3); } catch (e) {}
    try { a3(a3, v0); } catch (e) {}
    return v6;
}
for (let v9 = 0; v9 < 50; v9++) {
    f1(f1, f1);
}
gc();
