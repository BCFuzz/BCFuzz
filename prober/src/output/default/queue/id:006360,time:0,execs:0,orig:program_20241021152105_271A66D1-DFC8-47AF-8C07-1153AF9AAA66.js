function f0() {
    ("n")[-2];
    return f0;
}
for (let v3 = 0; v3 < 10; v3++) {
    f0();
}
gc();
