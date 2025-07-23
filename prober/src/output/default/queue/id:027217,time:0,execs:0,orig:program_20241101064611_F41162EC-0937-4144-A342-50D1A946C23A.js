class C0 {
}
const v1 = new C0();
function f2() {
    return undefined?.constructor;
}
v1.constructor = f2;
const v5 = v1.constructor;
const v7 = createGlobalObject();
const t9 = v7.EvalError;
const v9 = t9(v5);
try { v7.load(v9); } catch (e) {}
gc();
