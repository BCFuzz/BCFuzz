function f0(a1, a2, a3) {
    ("number").strike();
    try { a3["getUTCSeconds"](); } catch (e) {}
    return f0;
}
for (let v8 = 0; v8 < 100; v8++) {
    f0();
}
gc();
