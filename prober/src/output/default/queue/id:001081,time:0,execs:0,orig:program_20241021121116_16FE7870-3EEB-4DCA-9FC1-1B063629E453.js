const v2 = new Int8Array(254);
const v5 = new Int32Array(v2);
const v7 = new Float64Array(v5, 2993);
const v9 = [v5,2993];
Reflect.apply(v7.includes, v2, v9);
gc();
