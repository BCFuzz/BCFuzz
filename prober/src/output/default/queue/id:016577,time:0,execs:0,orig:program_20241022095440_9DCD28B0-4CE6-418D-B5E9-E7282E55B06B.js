const v1 = 1 >>> 1;
const v4 = createGlobalObject().Float16Array;
const v5 = new v4(v4);
v5.indexOf(v1);
gc();
