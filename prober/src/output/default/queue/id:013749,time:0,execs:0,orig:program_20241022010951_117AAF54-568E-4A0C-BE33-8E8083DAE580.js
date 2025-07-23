function F0() {
    if (!new.target) { throw 'must be called with new'; }
    delete this.d;
}
const v3 = new F0();
const v4 = v3.constructor;
new v4();
class C6 extends F0 {
}
try { C6(); } catch (e) {}
const v8 = new C6();
const t11 = v8.constructor;
new t11();
new v4();
for (let v12 = 0; v12 < 250; v12++) {
}
gc();
