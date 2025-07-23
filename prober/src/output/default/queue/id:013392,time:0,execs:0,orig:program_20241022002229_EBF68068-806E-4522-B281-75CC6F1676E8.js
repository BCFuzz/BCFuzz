const o1 = {
};
o1.element = 255n;
const v5 = createGlobalObject().WebAssembly.Table;
try { new v5(o1); } catch (e) {}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
