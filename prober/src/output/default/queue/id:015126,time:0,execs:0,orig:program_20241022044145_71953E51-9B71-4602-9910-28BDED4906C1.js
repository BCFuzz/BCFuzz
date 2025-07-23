for (let i3 = 0, i4 = 10; i4--, i3 < i4;) {
}
for (let i13 = 0, i14 = 10; i13 !== i14; i14--) {
}
const v21 = [-1000000000.0,1.2397431382009003,-0.41756218319641647,1.0,-635.5591240959784,-1.0];
v21[Symbol.toPrimitive] = Symbol;
const v25 = new ArrayBuffer();
const v27 = new DataView(v25);
try { v27.setFloat64(3227715239, v21); } catch (e) {}
gc();
