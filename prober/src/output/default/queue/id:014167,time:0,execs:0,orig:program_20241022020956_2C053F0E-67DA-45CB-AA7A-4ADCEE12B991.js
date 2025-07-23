const v2 = createGlobalObject().Float16Array;
const v3 = new v2(v2);
new Uint16Array(v3.with());
gc();
