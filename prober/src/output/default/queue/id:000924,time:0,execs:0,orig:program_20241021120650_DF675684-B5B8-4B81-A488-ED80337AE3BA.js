function f0() {
}
class C1 extends f0 {
    toString(a3, a4) {
        C1 /= f0;
    }
}
const v5 = new C1();
try { v5.toString(); } catch (e) {}
const v7 = new C1();
const t10 = v7.constructor;
const v9 = new t10();
try { v9.toString(); } catch (e) {}
gc();
