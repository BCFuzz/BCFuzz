class C1 {
    toString(a3, a4) {
        return "function";
    }
}
const v5 = new C1();
const t6 = v5.constructor;
const v7 = new t6("function", "function", v5, "function", "function");
const v10 = v7 + Date();
try { eval(v10); } catch (e) {}
gc();
