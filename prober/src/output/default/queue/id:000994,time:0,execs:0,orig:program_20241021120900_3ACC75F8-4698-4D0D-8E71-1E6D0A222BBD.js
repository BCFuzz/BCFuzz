class C0 {
}
const v1 = new C0();
const v2 = new C0();
const o3 = {
    __proto__: v2,
};
v2.__proto__ = v1;
gc();
