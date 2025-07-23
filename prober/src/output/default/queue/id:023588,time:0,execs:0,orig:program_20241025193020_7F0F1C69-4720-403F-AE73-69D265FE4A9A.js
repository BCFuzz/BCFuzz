function f1(a2, a3, a4, a5) {
    const v6 = a4[319];
    const v7 = ~v6;
    (v7 % -1024) ** v6;
    return v7;
}
const v12 = new Float32Array(3008);
v12.filter(f1);
gc();
