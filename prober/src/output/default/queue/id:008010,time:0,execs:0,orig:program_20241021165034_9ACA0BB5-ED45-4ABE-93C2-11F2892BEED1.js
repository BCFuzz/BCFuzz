function f1(a2, a3, a4, a5) {
    const v8 = Number.isNaN(a3 + a3);
    v8 && v8;
    return f1;
}
for (let v10 = 0; v10 < 5; v10++) {
    const t6 = f1();
    t6(v10, "9007199254740992");
}
gc();
