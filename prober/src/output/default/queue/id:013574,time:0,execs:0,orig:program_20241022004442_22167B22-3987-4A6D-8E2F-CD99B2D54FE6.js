function f0(a1, a2, a3, a4) {
    Object.getOwnPropertyNames(a2);
    return a2;
}
for (let v7 = 0; v7 < 10; v7++) {
    f0(f0, v7);
}
gc();
