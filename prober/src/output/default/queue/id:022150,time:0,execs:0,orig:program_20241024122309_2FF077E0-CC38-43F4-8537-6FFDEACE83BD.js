function f0(a1, a2) {
    a2?.constructor;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    return f0;
}
class C8 {
}
const v9 = new C8();
v9.constructor = f0;
const v10 = v9.constructor;
const v12 = createGlobalObject();
try { v12.load(v10); } catch (e) {}
gc();
