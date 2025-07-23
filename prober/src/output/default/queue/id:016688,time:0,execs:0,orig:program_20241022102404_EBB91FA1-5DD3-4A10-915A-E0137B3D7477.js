const v1 = new Int16Array();
const v2 = v1.toString();
const v3 = [v2];
const v5 = createGlobalObject();
v5.Float16Array.from(v3).toSorted(Int16Array, v3, v5, Int16Array, v2);
gc();
