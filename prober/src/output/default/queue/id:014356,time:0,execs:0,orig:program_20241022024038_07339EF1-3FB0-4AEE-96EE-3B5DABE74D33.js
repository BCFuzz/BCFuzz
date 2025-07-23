const v2 = new Uint8ClampedArray(11);
class C5 {
    [127] = v2;
}
const v6 = new C5();
const v7 = v6[127];
const v9 = this.WebAssembly;
v9.validate(v7);
const v11 = v9.Memory;
try { new v11(Int16Array); } catch (e) {}
for (let i15 = 0, i16 = 10; i16 >>> i16, i15 != i16; i16--) {
}
gc();
