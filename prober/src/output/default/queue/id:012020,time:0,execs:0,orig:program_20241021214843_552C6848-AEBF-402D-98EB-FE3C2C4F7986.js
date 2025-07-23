class C0 {
    n(a2, a3) {
        a2();
        function* f5(a6, a7, a8) {
            return a8;
        }
        return f5();
    }
}
function f10(a11) {
    return f10;
}
const v12 = new C0();
const v13 = v12.n(f10);
const v14 = new C0();
try { v14.n(v13); } catch (e) {}
gc();
