class C0 {
}
const v1 = new C0();
function f2() {
    const v5 = Date();
    const v6 = v5.isWellFormed();
    const o7 = {
        [Math]: v5,
    };
    o7.toJSON = v6;
    o7.c = o7;
    return JSON.stringify(o7);
}
v1.constructor = f2;
const v10 = v1.constructor;
try { v10(); } catch (e) {}
gc();
