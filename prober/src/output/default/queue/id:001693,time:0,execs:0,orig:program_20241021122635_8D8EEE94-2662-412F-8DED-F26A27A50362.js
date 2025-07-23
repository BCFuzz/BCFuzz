class C0 {
}
const v1 = new C0();
const o2 = {
};
const v4 = new Proxy(v1, o2);
const o5 = {
    __proto__: v4,
};
gc();
