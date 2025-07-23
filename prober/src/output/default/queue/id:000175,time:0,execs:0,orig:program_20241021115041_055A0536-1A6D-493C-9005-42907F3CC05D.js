function f0() {
    const o7 = {
        get e() {
            super[this] = Symbol.replace;
            return Symbol;
        },
        "b": -0.0,
        "c": -2.3987554640519305e+306,
        __proto__: "replace",
        [-0.0]: "replace",
        "g": -0.0,
    };
    return o7;
}
for (let v8 = 0; v8 < 100; v8++) {
    f0();
}
gc();
