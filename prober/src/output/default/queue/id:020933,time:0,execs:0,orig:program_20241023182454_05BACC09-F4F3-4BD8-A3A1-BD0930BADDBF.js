const v0 = [];
class C1 {
}
const v2 = new C1();
const t4 = v2.constructor;
const v4 = new t4(v0);
class C5 {
}
Object.defineProperty(C5, 3, { enumerable: true, value: v4 });
function f7(a8, a9, a10) {
    Object.defineProperty(a9, 3, { writable: true, value: v0 });
    return a8;
}
try { f7(536870887, C5); } catch (e) {}
gc();
