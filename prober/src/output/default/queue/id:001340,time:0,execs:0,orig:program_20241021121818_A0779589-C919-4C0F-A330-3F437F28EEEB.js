class C2 {
    128 = 1e-15;
}
const v3 = new C2();
const v4 = new C2();
function f5(a6, a7) {
    const o8 = {
        [a6]: a7,
        __proto__: a6,
    };
    return o8;
}
const v9 = f5(v4);
f5(f5(v3));
v3[4096] = -0.0;
v9 / Date;
gc();
