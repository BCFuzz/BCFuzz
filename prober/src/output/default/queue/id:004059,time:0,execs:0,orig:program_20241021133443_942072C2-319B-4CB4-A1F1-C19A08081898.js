function f0() {
}
const v1 = [-4294967296,14107];
class C2 extends f0 {
}
const v3 = new C2();
const v4 = new C2();
const v6 = [v4];
Reflect.apply(v1.unshift, v3, v6);
gc();
