function f2() {
    return 536870912;
}
Object.defineProperty(Int16Array, "minimum", { enumerable: true, get: f2 });
const v5 = this.WebAssembly.Memory;
try { new v5(Int16Array); } catch (e) {}
for (let i9 = 0, i10 = 10; i9 != i10; i10--) {
}
gc();
