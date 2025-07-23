class C0 {
}
const v1 = new C0();
const t3 = ("m").constructor;
const v4 = new t3();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this.constructor;
    let v12;
    try { v12 = new v11(v4); } catch (e) {}
    a7.valueOf(v12, a10, a10);
}
new F5("m");
new F5(v1);
gc();
