function f1() {
    return "8e";
}
const v2 = f1.constructor;
try { v2("8e"); } catch (e) {}
gc();
