const v2 = Array();
class C3 extends Array {
}
const v4 = new C3();
const v5 = new C3();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = a9.splice(v5, this, this, a10);
    function f12() {
        return Array;
    }
    function f13(a14) {
        return v11;
    }
    Object.defineProperty(v11, 39, { get: f12, set: f13 });
    v11.concat(10);
}
const v16 = new F6(v4, v5);
const t18 = v16.constructor;
new t18(v16, v2);
gc();
