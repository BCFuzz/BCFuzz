const v2 = createGlobalObject().Float16Array;
const v3 = new v2(v2);
v3.buffer;
for (const v5 in v3) {
}
gc();
