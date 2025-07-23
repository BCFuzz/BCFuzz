function f0(a1, a2, a3, a4) {
    function f5(a6, a7) {
        return 127 / -1000.0;
    }
    a1.toString = f5;
    try { a1(); } catch (e) {}
    parseInt(a1);
    return f5;
}
for (let v14 = 0; v14 < 5; v14++) {
    f0(f0);
}
gc();
