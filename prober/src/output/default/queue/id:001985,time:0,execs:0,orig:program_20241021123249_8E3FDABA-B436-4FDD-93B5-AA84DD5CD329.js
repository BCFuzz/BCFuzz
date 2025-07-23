class C0 {
}
const v1 = new C0();
const v2 = new C0();
const t4 = v2.constructor;
const v4 = new t4();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = a7?.constructor;
    try { new v9(); } catch (e) {}
}
new F5(v4);
const v12 = new F5(v1);
new F5(v12);
gc();
