const v2 = new Uint16Array(3838);
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
}
const v16 = createGlobalObject().Atomics;
try { v16.and(v2, v2, 9223372036854775807n); } catch (e) {}
for (let i20 = 0, i21 = 10; i21--, i20 < i21;) {
}
gc();
