class C0 {
    static #p(a2) {
    }
}
const v3 = new C0();
const v4 = v3.constructor;
for (let i8 = 0, i9 = 10 + 10; i9--, i9;) {
    const v16 = createGlobalObject();
    try { v16.load(v4); } catch (e) {}
}
gc();
