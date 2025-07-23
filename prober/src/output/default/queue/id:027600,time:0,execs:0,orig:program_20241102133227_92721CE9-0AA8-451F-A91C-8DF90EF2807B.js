function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    static toString(a4, a5) {
        for (let i8 = -3, i9 = 10; i8 < i9; i9--) {
            for (let v16 = 0; v16 < 25; v16++) {
                new Uint32Array(i9);
            }
        }
    }
}
try { C2.toString(F0, F0, F0, C2); } catch (e) {}
gc();
