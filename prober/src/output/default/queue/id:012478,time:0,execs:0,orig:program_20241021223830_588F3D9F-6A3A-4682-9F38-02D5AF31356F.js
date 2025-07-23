const v2 = new Uint32Array(11);
const v5 = new BigInt64Array();
try { v5.set(v2); } catch (e) {}
const v8 = new FinalizationRegistry(Int8Array);
const o9 = {
};
for (let i13 = -3, i14 = 10; i14--, i13 < i14;) {
}
const v21 = new Proxy(v8, o9);
try { v21.unregister(o9, Int8Array, Uint32Array); } catch (e) {}
gc();
