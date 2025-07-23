class C1 {
    static #b = "255";
    n(a3, a4) {
        c = "255";
    }
}
const v5 = new C1();
const v6 = /a(?:b)/ds;
try { v5.n(); } catch (e) {}
v6["compile"]("255");
gc();
