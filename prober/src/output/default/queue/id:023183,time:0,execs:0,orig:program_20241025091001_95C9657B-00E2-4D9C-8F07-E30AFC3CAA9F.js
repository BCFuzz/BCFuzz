const v1 = new WeakSet();
const v2 = new WeakSet();
const o3 = {
};
o3.constructor.freeze(v1);
class C6 {
}
function f7() {
    v1.__proto__ = v2;
    return f7;
}
C6.constructor = f7;
const v8 = C6.constructor;
try { v8(); } catch (e) {}
gc();
