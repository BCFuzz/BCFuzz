function f1(a2, a3) {
    (-2 & a2) * a3;
    return f1;
}
for (let v6 = 0; v6 < 10; v6++) {
    f1(v6, f1);
}
gc();
