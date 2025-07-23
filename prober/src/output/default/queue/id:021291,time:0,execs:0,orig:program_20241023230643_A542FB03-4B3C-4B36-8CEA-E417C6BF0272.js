function f0(a1) {
    return a1;
}
class C2 {
}
const v3 = new C2();
const o5 = {
    __proto__: v3,
};
const v6 = this.constructor;
v6.toString = f0;
v6.assign(v3, v6);
gc();
