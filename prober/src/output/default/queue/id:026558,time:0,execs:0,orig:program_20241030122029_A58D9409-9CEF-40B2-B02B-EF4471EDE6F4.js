let v0 = -920.5348287396685;
class C1 {
    static {
        try {
            super.p();
        } catch(e4) {
            v0 = e4;
        }
    }
}
const v5 = C1.constructor;
try { v5(v0); } catch (e) {}
gc();
