const v1 = Error(Error);
const o2 = {
    __proto__: v1,
};
Float32Array[0] = [o2];
new Float32Array(Float32Array);
gc();
