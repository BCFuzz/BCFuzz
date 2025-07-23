class C3 {
    [1524151279] = "257";
}
const v4 = new C3();
const v6 = v4[1524151279].constructor;
try { v6.fromCodePoint(2147483648n); } catch (e) {}
gc();
