const v2 = new Float64Array(64);
for (let i = 0; i < 5; i++) {
    v2[3] = 64;
    Reflect.construct(Float32Array, [Reflect], Float64Array);
}
gc();
