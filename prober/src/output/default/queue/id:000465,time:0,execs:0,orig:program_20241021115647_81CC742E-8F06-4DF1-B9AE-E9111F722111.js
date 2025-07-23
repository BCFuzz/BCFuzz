class C0 {
    #m(a2) {
    }
}
const v3 = new C0();
const v4 = new C0();
const o5 = {
    __proto__: v4,
    ...v3,
};
gc();
