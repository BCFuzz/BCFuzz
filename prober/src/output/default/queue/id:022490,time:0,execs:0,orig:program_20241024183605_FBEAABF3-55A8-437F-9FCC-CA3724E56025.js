function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F1 {
    static toString(a5, a6) {
        for (let i9 = -3, i10 = 10; i9 < i10; i10--) {
            new Int16Array(i10);
            for (let v18 = 0; v18 < 5; v18++) {
            }
        }
    }
}
try { C3.toString(); } catch (e) {}
const v20 = new C3();
const v21 = v20.constructor;
try { v21.toString(F1, C3, Int16Array, C3); } catch (e) {}
gc();
