const v0 = [-985168975,268435439,255,-2029723201,4294967296,-1177784798,10,6,-34719202];
v0[307] = v0;
v0.shift();
const t2 = createGlobalObject().Float16Array;
const v5 = new t2(v0);
v5.toSorted();
gc();
