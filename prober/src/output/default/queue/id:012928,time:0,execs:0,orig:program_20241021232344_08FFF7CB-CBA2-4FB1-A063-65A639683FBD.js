const v1 = 1 > 1;
const v2 = [];
Object.defineProperty(v2, 0, { value: v1 });
Float64Array.from(v2);
gc();
