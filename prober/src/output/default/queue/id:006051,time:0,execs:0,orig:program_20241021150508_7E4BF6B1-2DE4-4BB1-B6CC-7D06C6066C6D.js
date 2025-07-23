const v1 = [Float32Array,Float32Array,Float32Array];
Object.defineProperty(v1, 4, { enumerable: true, value: Float32Array });
v1[4] &= 19;
for (let v3 = 0; v3 < 250; v3++) {
    v3++;
    v3--;
}
gc();
