const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v4 = new Uint16Array(v1, v2);
for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
}
const v16 = new v2(7);
const v18 = v4.sort().toReversed(v16);
try { v18.set(v16); } catch (e) {}
for (let i22 = 0, i23 = 10; i22 !== i23; i23--) {
}
gc();
