const v1 = new WeakSet();
function f2() {
    return WeakSet;
}
class C3 {
}
const v4 = new C3();
const o5 = {
    "set": f2,
};
const v7 = new Proxy(v1, o5);
v7.d = v4;
gc();
