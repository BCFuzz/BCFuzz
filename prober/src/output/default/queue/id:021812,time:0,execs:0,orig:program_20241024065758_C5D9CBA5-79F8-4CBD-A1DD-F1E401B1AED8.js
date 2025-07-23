function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    static toString(a4, a5) {
        for (let i8 = -3, i9 = 10; i8 < i9; i9--) {
            for (let i18 = 0, i19 = 10;
                (() => {
                    new Float64Array(i9);
                    return i18 < i19;
                })();
                i19--) {
            }
        }
    }
}
const v28 = new C2();
const v29 = v28.constructor;
try { v29.toString(); } catch (e) {}
gc();
