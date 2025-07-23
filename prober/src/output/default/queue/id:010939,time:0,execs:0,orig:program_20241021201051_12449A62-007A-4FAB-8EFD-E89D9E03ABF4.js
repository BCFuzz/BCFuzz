function f0(a1) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    Reflect.construct(F2, a1);
    return F2;
}
class C8 {
}
class C9 extends C8 {
}
const v10 = new C9();
v10.constructor = f0;
const v11 = v10.constructor;
try { v11(); } catch (e) {}
gc();
