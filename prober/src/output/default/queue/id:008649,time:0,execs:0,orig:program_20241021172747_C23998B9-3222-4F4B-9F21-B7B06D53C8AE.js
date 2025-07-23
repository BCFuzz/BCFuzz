class C1 {
}
C1.toString = BigInt;
try { ("object").normalize(C1); } catch (e) {}
gc();
