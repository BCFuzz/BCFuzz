function f0() {
}
class C1 extends f0 {
}
const v2 = new C1();
const o3 = {
    "getOwnPropertyDescriptor": f0,
};
const v5 = new Proxy(v2, o3);
function f6() {
    return v5;
}
v5.constructor = f6;
gc();
