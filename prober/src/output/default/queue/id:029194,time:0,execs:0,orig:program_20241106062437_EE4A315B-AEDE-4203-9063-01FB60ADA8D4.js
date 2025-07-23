const v2 = new Int16Array(536870912);
const v4 = createGlobalObject();
const v5 = v4.Atomics;
try { v5.compareExchange(v2, v4, v4, v2); } catch (e) {}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
