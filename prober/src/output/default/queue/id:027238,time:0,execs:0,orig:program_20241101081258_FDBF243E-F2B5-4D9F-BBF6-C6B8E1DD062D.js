function f0() {
}
class C2 extends f0 {
}
new C2();
const v4 = new C2();
const t6 = v4.constructor;
new t6();
const t8 = v4.constructor;
const v8 = new t8();
const v9 = new C2();
const t11 = v9.constructor;
new t11();
const t13 = v9.constructor;
new t13();
const v14 = new C2();
const t16 = v14.constructor;
new t16();
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    const v21 = this.constructor;
    try { new v21(v4); } catch (e) {}
    const t22 = a19.constructor;
    new t22(v8);
}
new F17("function");
gc();
