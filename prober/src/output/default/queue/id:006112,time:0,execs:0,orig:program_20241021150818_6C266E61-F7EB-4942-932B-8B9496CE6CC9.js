function f1(a2, a3, a4, a5) {
    for (const v6 in 1073741823n) {
    }
    return a3;
}
f1(1073741823n, 1073741823n, 1073741823n, f1);
f1(f1, 1073741823n, 1073741823n, f1);
gc();
