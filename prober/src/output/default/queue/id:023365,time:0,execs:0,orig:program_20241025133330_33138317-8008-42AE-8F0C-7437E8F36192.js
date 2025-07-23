const v2 = new Uint8ClampedArray(11);
Object.defineProperty(Int16Array, "maximum", { writable: true, value: v2 });
Int16Array.initial = 127;
const v7 = this.WebAssembly.Memory;
try { new v7(Int16Array); } catch (e) {}
for (let i11 = 0, i12 = 10; i11 != i12; i12--) {
}
gc();
