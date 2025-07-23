Object.defineProperty(Array, Symbol.toPrimitive, { writable: true, enumerable: true, value: Array });
const v3 = Array(Array);
const v6 = createGlobalObject().WebAssembly;
v6.parameters = v3;
const v7 = v6.Tag;
try { new v7(v6); } catch (e) {}
for (let i11 = -3, i12 = 10; i12--, i11 < i12;) {
}
gc();
