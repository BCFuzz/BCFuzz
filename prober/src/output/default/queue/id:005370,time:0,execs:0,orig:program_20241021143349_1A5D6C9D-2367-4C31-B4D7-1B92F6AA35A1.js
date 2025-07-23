function f0(a1, a2) {
    +arguments;
    return 0 && a2;
}
for (let v7 = 0; v7 < 50; v7++) {
    f0(f0, v7);
}
gc();
