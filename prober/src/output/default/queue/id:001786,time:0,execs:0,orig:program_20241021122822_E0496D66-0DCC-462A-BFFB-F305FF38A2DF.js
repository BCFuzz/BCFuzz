function f0() {
    const o3 = {
        "h": 7.672670323597263,
        "b": Infinity,
        [Infinity]: f0,
    };
    return o3;
}
const v4 = f0();
const t9 = v4.Infinity;
const v6 = t9();
function f7(a8) {
    return v6;
}
const v9 = f7();
const v10 = f7(v6);
const v11 = f7();
function f12(a13, a14, a15, a16) {
    const o17 = {
        ...a15,
        __proto__: a15,
    };
    return a16;
}
f12(v4, v11, v9);
f12(v11, v10, v9);
gc();
