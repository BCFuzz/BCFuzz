function f0(a1) {
    return a1;
}
class C2 {
}
const v3 = new C2();
const v5 = this.constructor;
v5.toString = f0;
v5.assign(v3, v5);
gc();
