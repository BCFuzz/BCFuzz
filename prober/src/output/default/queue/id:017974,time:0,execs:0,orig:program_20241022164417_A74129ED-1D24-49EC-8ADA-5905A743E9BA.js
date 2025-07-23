const v2 = new FinalizationRegistry(Int8Array);
const o3 = {
};
for (let i7 = -3, i8 = 10; i8--, i7 < i8;) {
}
const v15 = new Proxy(v2, o3);
const v16 = v15.constructor;
try { new v16(v15); } catch (e) {}
gc();
