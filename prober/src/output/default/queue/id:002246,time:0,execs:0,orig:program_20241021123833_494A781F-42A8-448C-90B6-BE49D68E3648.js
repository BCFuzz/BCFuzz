function f1(a2, a3) {
    const v4 = a2 && a2;
    return v4 && v4;
}
f1(false);
for (let v7 = 0; v7 < 10; v7++) {
    f1();
}
gc();
