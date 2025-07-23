function f0(a1, a2) {
    const v3 = a2?.constructor;
    const o4 = {
    };
    return v3;
}
class C5 {
}
const v6 = new C5();
v6.constructor = f0;
const v7 = v6.constructor;
const v9 = createGlobalObject();
try { v9.load(v7); } catch (e) {}
gc();
