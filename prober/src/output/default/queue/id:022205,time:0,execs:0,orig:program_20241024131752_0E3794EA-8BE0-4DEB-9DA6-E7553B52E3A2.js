const v0 = [1073741824,8,4294967297,-37269,-28454];
v0[307] = v0;
v0.shift();
const t2 = createGlobalObject().Float16Array;
const v5 = new t2(v0);
v5.toSorted();
gc();
