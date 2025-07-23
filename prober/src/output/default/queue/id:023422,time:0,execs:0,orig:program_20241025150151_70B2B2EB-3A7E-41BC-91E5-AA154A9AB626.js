class C0 {
}
const v1 = new C0();
function f2() {
    const v5 = Date();
    const o6 = {
        [Math]: v5,
    };
    o6.toJSON = Math;
    o6.f = o6;
    JSON.stringify(o6);
    return f2;
}
v1.constructor = f2;
const v9 = v1.constructor;
try { v9(); } catch (e) {}
gc();
