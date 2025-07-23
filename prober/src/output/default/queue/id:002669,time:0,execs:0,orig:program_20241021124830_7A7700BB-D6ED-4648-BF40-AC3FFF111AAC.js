class C3 {
    [-12] = -12;
    #c;
    [-2147483648] = 1073741824;
    [1073741824] = -2147483648;
    static #g = -12;
    static [-12] = 1073741824;
    static #e;
}
const v4 = new C3();
const v5 = new C3();
const v6 = new C3();
function f7(a8, a9, a10) {
    const o20 = {
        toString(a12, a13, a14, a15) {
            a12.toLowerCase(v5, a12, a9, a13, a8);
            return a10;
        },
        __proto__: a10,
    };
    return o20;
}
const v21 = f7(v5, v5, v5);
const v23 = f7(v4, f7(C3, v6, v6), v21);
for (const v24 in v6) {
    for (let v25 = 0; v25 < 100; v25++) {
        f7(C3, v5, v23);
    }
}
gc();
