class C0 {
}
const v1 = C0.bind(C0, C0, C0, C0, C0);
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
Reflect.construct(F2, [Reflect,Reflect,Reflect,Reflect,Reflect], v1);
gc();
