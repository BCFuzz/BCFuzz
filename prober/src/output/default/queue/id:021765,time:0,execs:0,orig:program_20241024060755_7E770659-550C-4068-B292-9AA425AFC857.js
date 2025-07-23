class C0 {
}
const v2 = EvalError(C0);
class C3 {
}
const v4 = new C3();
const v5 = v4.constructor;
try { v5.constructor(v2); } catch (e) {}
gc();
