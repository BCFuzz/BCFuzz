function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
function f3() {
    return v2;
}
const o4 = {
};
o4.ownKeys = f3;
const v6 = new Proxy(Proxy, o4);
const v8 = this.constructor;
try { v8.freeze(v6); } catch (e) {}
gc();
