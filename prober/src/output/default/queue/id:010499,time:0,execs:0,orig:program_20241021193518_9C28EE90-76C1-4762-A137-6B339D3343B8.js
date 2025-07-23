const v1 = new Date();
const v2 = v1.toLocaleDateString();
class C3 {
}
const v4 = new C3();
const v5 = v4.constructor;
const v6 = new C3();
const v7 = v5.constructor;
try { v7(v6, v2); } catch (e) {}
gc();
