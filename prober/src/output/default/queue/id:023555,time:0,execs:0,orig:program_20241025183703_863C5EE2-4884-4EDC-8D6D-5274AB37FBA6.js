const v2 = new Int32Array();
const o3 = {
};
const v5 = [-1,9,4294967296,65536,10,49592,10];
v5[533] = "";
const v6 = v5.copyWithin("", 255);
v6[810] = v2;
v6[46] = o3;
v5[858] = v5;
v6[1000] = Date("");
const v10 = v5.sort;
Reflect.apply(v10, v5, v10);
gc();
