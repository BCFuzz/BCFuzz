function f1(a2, a3, a4, a5) {
    Number.isNaN(a3 + a3);
    return f1;
}
for (let v9 = 0; v9 < 5; v9++) {
    const t5 = f1(f1, v9, "9007199254740992", v9);
    t5(v9, "9007199254740992");
}
gc();
