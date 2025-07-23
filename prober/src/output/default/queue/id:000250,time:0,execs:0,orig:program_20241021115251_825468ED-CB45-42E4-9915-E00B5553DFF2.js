class C1 {
    #n(a3, a4) {
    }
    static 241 = 0.0;
}
const v5 = new C1();
const v6 = new C1();
function f7(a8, a9, a10, a11) {
    const o12 = {
        __proto__: a8,
        ...a9,
    };
    return a11;
}
f7(v6, C1);
f7(f7, v5);
gc();
