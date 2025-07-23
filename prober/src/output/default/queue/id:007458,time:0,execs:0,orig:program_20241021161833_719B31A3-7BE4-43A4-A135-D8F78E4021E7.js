for (let v1 = 0; v1 < 5; v1++) {
    const t1 = "hasInstance";
    t1["isArray" >>> v1] = v1;
}
const v6 = new Float32Array(3008);
for (const v7 in v6) {
}
gc();
