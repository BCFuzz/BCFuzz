class C0 {
}
const v1 = new C0();
const v2 = new C0();
const v3 = new C0();
function f4(a5, a6, a7, a8) {
    const o9 = {
        __proto__: a7,
    };
    return o9;
}
const v10 = f4(v3, v2, v1);
const v11 = f4(v1, v10, v2);
v10 << -24688;
v2[v11] = v2;
gc();
