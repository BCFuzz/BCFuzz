class C2 {
}
const v3 = C2.bind();
v3.length;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    try { a8.setPrototypeOf(WeakMap, -1.0); } catch (e) {}
}
Reflect.construct(F5, [Reflect,Reflect], v3);
gc();
