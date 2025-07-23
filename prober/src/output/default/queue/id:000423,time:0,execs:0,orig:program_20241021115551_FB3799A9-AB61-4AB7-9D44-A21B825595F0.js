const v1 = typeof Float32Array;
const v3 = v1 === "object";
const t1 = "object";
delete t1[268435456];
v1[6] = v3;
gc();
