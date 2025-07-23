function f1(a2, a3, a4) {
    for (let v6 = 0; v6 < 10; v6++) {
        JSON["p" + a4] = v6;
    }
    try { a4["1000"](); } catch (e) {}
    return "1000";
}
for (let v10 = 0; v10 < 100; v10++) {
    f1("1000", f1, f1);
}
gc();
