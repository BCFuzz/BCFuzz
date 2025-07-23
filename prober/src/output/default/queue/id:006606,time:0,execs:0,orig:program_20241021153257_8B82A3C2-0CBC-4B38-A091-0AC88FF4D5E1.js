function F0() {
    if (!new.target) { throw 'must be called with new'; }
    delete this.d;
}
const v3 = new F0();
const v4 = v3.constructor;
new v4();
class C6 extends F0 {
}
new C6();
new v4();
for (let v9 = 0; v9 < 250; v9++) {
}
gc();
