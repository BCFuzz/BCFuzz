const v0 = [1073741824,8,4294967297,-37269,-28454];
const t1 = createGlobalObject().Float16Array;
const v4 = new t1(v0);
v4[4] = v4;
v4.toSorted();
gc();
