const v2 = new FinalizationRegistry(Int8Array);
try { v2.unregister(); } catch (e) {}
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
gc();
