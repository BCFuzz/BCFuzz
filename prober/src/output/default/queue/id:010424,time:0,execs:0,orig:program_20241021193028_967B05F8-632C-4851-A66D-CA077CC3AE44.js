function f0() {
    return f0;
}
function f1(a2, a3, a4, a5) {
    const v7 = new Int32Array();
    const v9 = (0.0).constructor;
    v9.isInteger(v7);
    const o13 = {
        __proto__: a5,
        "f": f0,
        set a(a12) {
        },
    };
    return v9;
}
f1(f1, f1, f0, f1);
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
for (let v25 = 0; v25 < 10; v25++) {
    f1();
}
gc();
