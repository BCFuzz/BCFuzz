const v2 = createGlobalObject().Float16Array;
const v3 = [11,536870888,-5,65537,1254414823,-16,-536870912,65536];
v3[6] = v3;
v2.from(v3.toLocaleString()).sort();
gc();
