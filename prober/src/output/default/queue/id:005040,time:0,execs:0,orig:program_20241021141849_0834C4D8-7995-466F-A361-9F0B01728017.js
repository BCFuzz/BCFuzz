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
            v4.get(v2);
            return v4;
        }
        f7();
        f7();
    }
}
const v15 = new C5();
v15.e;
const t18 = v15.constructor;
const v18 = new t18();
v18.e;
gc();
