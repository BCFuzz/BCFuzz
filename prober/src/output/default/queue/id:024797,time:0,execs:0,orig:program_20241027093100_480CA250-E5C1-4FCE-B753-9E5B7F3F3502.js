function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
class C4 extends F0 {
    #b = v3;
}
const t7 = createGlobalObject().EvalError;
const v8 = t7(C4);
for (let i12 = 0, i13 = 10 + 10; i13--, i13;) {
    const v19 = createGlobalObject();
    try { v19.load(v8); } catch (e) {}
}
gc();
