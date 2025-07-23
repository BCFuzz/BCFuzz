const v0 = [1073741824,8,4294967297,-37269,-28454];
v0[3] = v0;
const t2 = createGlobalObject().Float16Array;
const v4 = new t2(v0);
v4.reverse();
v4.toSorted();
gc();
