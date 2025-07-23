function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    }
}
const v16 = new F0(F0, F0, F0, F0);
function f17(a18, a19) {
    class C20 {
        static [C20];
    }
    return C20;
}
v16.constructor = f17;
const v21 = v16.constructor;
try { v21(v21, v16, f17, v16); } catch (e) {}
gc();
