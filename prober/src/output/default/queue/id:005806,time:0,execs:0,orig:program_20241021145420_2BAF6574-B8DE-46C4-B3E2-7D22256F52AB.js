class C1 {
}
C1[Symbol.iterator] = "-2147483648";
try { new BigInt64Array(C1); } catch (e) {}
gc();
