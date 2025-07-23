const v0 = [1073741824,8,4294967297,-37269,-28454];
v0[4] = v0;
v0[307] = v0;
v0.shift();
const t3 = createGlobalObject().Float16Array;
const v5 = new t3(v0);
v5.toSorted();
gc();
