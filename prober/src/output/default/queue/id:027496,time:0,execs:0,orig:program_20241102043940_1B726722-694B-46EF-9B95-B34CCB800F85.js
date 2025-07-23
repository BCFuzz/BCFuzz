function f1() {
    return "throw";
}
const v3 = [["throw",f1]];
class C4 {
}
const v5 = C4.constructor;
try { v5(v3); } catch (e) {}
gc();
