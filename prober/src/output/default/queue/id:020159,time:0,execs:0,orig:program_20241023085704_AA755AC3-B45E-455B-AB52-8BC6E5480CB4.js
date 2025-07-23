function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a5.a = a5;
}
class C9 extends F3 {
}
for (let i12 = 0, i13 = 10;
    i12 < i13;
    (() => {
        i13--;
        const v18 = new C9(v2);
        const v19 = v18.constructor;
        try { new v19(); } catch (e) {}
    })()) {
}
gc();
