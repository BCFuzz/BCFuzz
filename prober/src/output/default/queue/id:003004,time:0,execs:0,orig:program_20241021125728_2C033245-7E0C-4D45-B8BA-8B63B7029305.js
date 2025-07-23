class C1 {
    ["constructor"];
}
const v2 = new C1();
try { v2(); } catch (e) {}
gc();
