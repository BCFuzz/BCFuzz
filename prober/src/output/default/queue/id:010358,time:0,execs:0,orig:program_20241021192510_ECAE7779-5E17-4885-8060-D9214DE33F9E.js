const o4 = {
    ["constructor"](a2, a3) {
    },
};
class C6 {
    m(a8, a9) {
        a9();
    }
}
const v11 = new C6();
try { v11.m(WeakSet, o4); } catch (e) {}
gc();
