class C1 {
}
C1.alphabet = "string";
const v4 = new Uint8Array();
try { v4.setFromBase64("-2147483647", C1); } catch (e) {}
gc();
