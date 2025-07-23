function f2(a3, a4) {
    const o9 = {
        ...a3,
        __proto__: a3,
        "b": 462505212n,
        [2n]: a4,
        get b() {
            super.e;
        },
        [a4]: f2,
        ...a3,
        "c": 462505212n,
        set f(a8) {
        },
    };
    return o9;
}
f2(f2());
for (let v12 = 0; v12 < 10; v12++) {
    f2();
}
gc();
