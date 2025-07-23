function f0(a1, a2) {
    a1 * a2;
    return f0;
}
for (let v4 = 0; v4 < 100; v4++) {
    f0(v4);
}
gc();
