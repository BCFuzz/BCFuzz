WeakSet.constructor = Date;
function f3(a4, a5) {
    return a5;
}
class C6 extends f3 {
}
const v7 = new C6();
v7.valueOf = Symbol;
const v8 = WeakSet.constructor;
try { new v8(v7); } catch (e) {}
gc();
