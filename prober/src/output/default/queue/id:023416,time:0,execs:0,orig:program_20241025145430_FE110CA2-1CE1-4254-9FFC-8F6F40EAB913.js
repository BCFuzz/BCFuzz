const v2 = createGlobalObject().Float16Array;
const v3 = [4294967297,-1861993523,8,-1795360980];
v3.shift();
v2.from(v3.toLocaleString()).sort();
gc();
