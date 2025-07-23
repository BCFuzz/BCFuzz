class C0 {
}
const v1 = new C0();
function f2() {
    const v7 = Date();
    const o8 = {
        [Math]: v7,
        [-1e-15]: "sqdu",
    };
    o8.toJSON = Math;
    o8.f = o8;
    return JSON.stringify(o8);
}
v1.constructor = f2;
const v11 = v1.constructor;
try { v11(); } catch (e) {}
gc();
