function f1(a2, a3, a4, a5) {
    a2.toString();
    let v7;
    try { v7 = a2(-2077331653); } catch (e) {}
    for (let v9 = 0; v9 < 5; v9++) {
        function f10(a11, a12, a13) {
            return a12;
        }
        f10(undefined);
    }
    return v7;
}
for (let v15 = 0; v15 < 50; v15++) {
    f1(f1);
}
gc();
