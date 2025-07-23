function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
class C3 {
}
const v4 = new C3();
const v6 = new WeakSet();
let v7 = [v4];
v6[--v7];
gc();
