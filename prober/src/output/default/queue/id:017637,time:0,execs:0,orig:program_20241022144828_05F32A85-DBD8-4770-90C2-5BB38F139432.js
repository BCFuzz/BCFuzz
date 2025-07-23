function f0(a1, a2, a3) {
    const v5 = ("number").strike();
    v5.replace(a2, v5);
    return a2;
}
f0[Symbol.replace] = f0;
for (let v9 = 0; v9 < 10; v9++) {
    f0(v9, f0);
}
gc();
