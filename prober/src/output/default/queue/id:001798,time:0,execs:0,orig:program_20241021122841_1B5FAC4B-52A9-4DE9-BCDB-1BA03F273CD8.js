function f0() {
    let v1 = -2.3987554640519305e+306;
    v1++;
    return f0;
}
for (let v3 = 0; v3 < 10; v3++) {
    f0();
}
gc();
