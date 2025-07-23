const v0 = [-15,10,40963,-65537,1024,1521];
v0[307] = v0;
v0.shift();
const t2 = createGlobalObject().Float16Array;
const v5 = new t2(v0);
v5.toSorted();
gc();
