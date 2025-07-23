const v1 = EvalError(EvalError);
class C2 {
}
const v3 = new C2();
const v4 = v3.constructor;
try { v4.constructor(v1); } catch (e) {}
gc();
