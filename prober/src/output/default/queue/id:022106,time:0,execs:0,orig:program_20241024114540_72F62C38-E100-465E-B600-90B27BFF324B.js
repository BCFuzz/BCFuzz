class C0 {
}
const v1 = new C0();
class C2 extends C0 {
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
        const v21 = createGlobalObject().Atomics;
        try { v21.exchange(C2, v1, 218968620); } catch (e) {}
        for (let v23 = 0; v23 < 250; v23++) {
        }
    }
}
new F4();
gc();
