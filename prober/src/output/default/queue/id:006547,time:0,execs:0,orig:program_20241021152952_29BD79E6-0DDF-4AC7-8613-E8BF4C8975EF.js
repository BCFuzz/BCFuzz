function f2(a3, a4) {
    const o6 = {
        [a4]: a4,
        get g() {
            return a3;
        },
    };
    return o6;
}
const v7 = f2(-3444, 3);
f2().constructor.entries(v7);
gc();
