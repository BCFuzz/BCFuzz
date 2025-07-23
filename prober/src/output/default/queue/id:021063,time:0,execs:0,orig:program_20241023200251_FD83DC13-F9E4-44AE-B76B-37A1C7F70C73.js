const v1 = new Float32Array();
for (let v2 = 0; v2 < 5; v2++) {
    for (let v3 = 0; v3 < 5; v3++) {
        v1[v2] = v3;
        const v5 = new Float64Array(v3, v3, v2);
        v5[3388] = v5;
    }
    for (let i = 0; i < 1000; i++) {
    }
}
gc();
