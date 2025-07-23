const v1 = new Float32Array();
const v2 = [-6,-34151,-864891854];
v2.unshift(v1);
v2[307] = v2;
v2.shift();
const t4 = createGlobalObject().Float16Array;
const v8 = new t4(v2);
v8.toSorted();
gc();
