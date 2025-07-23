function f1(a2, a3, a4, a5) {
    const v6 = a4[319];
    const v9 = (~v6 % -1024) ** v6;
    v9 >>> v9;
}
const v13 = new Float32Array(3008);
v13.filter(f1);
gc();
