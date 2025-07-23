function f0(a1) {
    return a1;
}
class C2 {
}
const v3 = new C2();
v3.constructor = f0;
this.constructor.seal(v3);
gc();
