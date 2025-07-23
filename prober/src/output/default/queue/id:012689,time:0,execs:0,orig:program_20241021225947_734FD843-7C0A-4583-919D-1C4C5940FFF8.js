const v4 = createGlobalObject().Float16Array;
const v5 = new v4(v4);
v5.subarray(-15, -1);
v5.with();
gc();
