function f0() {
}
class C1 extends f0 {
}
const v2 = new C1();
const o3 = {
    "getOwnPropertyDescriptor": f0,
};
const v5 = new Proxy(v2, o3);
v5.e = v5;
gc();
