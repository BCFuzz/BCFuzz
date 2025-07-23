const v0 = [];
v0[0] = v0;
const v1 = v0.pop();
class C2 {
}
const v3 = new C2();
const v4 = v3.constructor;
const v5 = new v4();
const v6 = v4.constructor;
try { v6(v5, v1); } catch (e) {}
gc();
