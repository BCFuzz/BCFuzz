class C1 {
}
const v2 = new Float32Array(C1, Float32Array, Float32Array);
const t3 = v2.constructor;
const v4 = new t3();
class C5 extends C1 {
}
for (let v6 = 0; v6 < 250; v6++) {
    for (const v7 in v2) {
        typeof v7 === v4;
    }
    v6++;
    v6--;
}
gc();
