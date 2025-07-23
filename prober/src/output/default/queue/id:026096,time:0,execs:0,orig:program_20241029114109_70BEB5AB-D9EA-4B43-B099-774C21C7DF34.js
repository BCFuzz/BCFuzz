function f0() {
    return f0;
}
class C1 extends f0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = C1;
    delete this.b;
}
const v7 = new F2();
const v10 = new Int16Array(3681);
for (const v11 in v10) {
    class C12 {
    }
    const v13 = new C12();
    const v15 = this.constructor;
    v15.assign(v13, v15, v7);
}
gc();
