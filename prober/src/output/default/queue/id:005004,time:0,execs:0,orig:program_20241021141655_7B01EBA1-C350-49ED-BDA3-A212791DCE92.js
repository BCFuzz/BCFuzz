new WeakMap();
class C3 extends WeakMap {
    static toString(a5, a6) {
    }
}
const v7 = new C3();
function f8(a9, a10) {
    1590426664n | a9;
}
v7.constructor = f8;
const v12 = v7.constructor;
try { new v12(); } catch (e) {}
gc();
