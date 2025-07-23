class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
const v3 = [1000000000.0,-2.0];
const o4 = {
    "set": v2,
};
const v6 = new Proxy(v3, o4);
try { v6.fill(v3); } catch (e) {}
gc();
