const v2 = createGlobalObject().Float16Array;
const v4 = new v2(2147483648);
v4.length ||= v2;
gc();
