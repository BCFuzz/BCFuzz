class C1 {
}
const v3 = createGlobalObject();
const v4 = v3.Float16Array;
const v5 = new v4(v4, 4096, v3, v4);
v5.copyWithin(C1, v3, 4096);
gc();
