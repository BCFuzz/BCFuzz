let v1 = "string";
function f3(a4) {
    const o8 = {
        "b": v1,
        __proto__: a4,
        [a4](a6, a7) {
            super.e = this;
            a6 -= "a";
            v1 = a7;
            return a7;
        },
        "h": a4,
        1175: a4,
    };
    return o8;
}
const v9 = f3("1191154859");
const v10 = f3("1191154859");
const v11 = f3("1191154859");
function f12(a13, a14, a15, a16) {
    const o17 = {
        "h": "a",
        [-1]: a13,
        "b": a13,
        ..."1191154859",
        "f": v10,
        ...v9,
        ...v9,
        "e": a13,
        [a13]: a16,
        "a": a16,
    };
    return o17;
}
const v20 = f12(v1, f12(v1, v9, "a", f12("1191154859", "1191154859", "1191154859", v9)), "a", v11);
const v21 = `
    const t36 = v20[v1];
    t36.length = 2;
    let v27 = 38107 >> 2;
    Math.imul(5, 5);
    38107 && 38107;
    v27--;
`;
eval(v21);
gc();
