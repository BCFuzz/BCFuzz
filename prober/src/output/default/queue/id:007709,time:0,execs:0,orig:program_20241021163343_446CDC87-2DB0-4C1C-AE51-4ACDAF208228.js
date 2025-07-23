function f1(a2, a3, a4, a5) {
    Number.isNaN("9007199254740992");
    return f1;
}
for (let v8 = 0; v8 < 5; v8++) {
    const v9 = f1(v8, f1, v8, v8);
    v9("9007199254740992", v9, v8, v9);
}
gc();
