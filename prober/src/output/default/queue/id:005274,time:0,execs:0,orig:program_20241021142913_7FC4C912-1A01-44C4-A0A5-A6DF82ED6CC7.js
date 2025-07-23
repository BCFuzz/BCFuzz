class C1 {
    a;
}
const v2 = new C1();
const v3 = new C1();
const v5 = new Map();
function f6(a7, a8, a9) {
    a8.a;
    const o11 = {
        ...v2,
        ...v3,
    };
    return o11;
}
f6(v5, f6(-2.2250738585072014e-308, f6(C1, v2)));
gc();
