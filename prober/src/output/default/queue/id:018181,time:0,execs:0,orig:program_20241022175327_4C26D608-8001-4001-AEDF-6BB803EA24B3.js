const v1 = `e${2.220446049250313e-16}g`;
class C2 {
}
const v3 = C2.constructor;
try { v3(v1); } catch (e) {}
gc();
