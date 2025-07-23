for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v11 = createGlobalObject();
const v12 = v11.Float16Array;
const v13 = new v12(createGlobalObject, v11, createGlobalObject);
v13.buffer.transfer();
try { v12.from(v13); } catch (e) {}
gc();
