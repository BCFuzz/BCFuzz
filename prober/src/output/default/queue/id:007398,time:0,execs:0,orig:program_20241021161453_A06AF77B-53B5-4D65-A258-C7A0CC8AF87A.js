function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = new WeakMap();
class C5 {
    get e() {
        function f7(a8, a9, a10) {
            for (let v11 = 0; v11 < 25; v11++) {
            }
            return v4.get(v2);
        }
        f7(f7(this, v4, this), WeakMap, f7);
    }
}
const v15 = new C5();
v15.e;
const t16 = v15.constructor;
const v18 = new t16();
v18.e;
gc();
