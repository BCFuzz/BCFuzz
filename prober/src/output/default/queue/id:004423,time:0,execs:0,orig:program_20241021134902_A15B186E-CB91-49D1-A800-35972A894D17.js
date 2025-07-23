function f1(a2, a3, a4, a5) {
    const v6 = a3 + a3;
    v6 === v6;
    let v8 = a3 + a3;
    v8--;
    return f1;
}
for (let v10 = 0; v10 < 5; v10++) {
    const t8 = f1();
    t8(v10, "9007199254740992");
}
gc();
