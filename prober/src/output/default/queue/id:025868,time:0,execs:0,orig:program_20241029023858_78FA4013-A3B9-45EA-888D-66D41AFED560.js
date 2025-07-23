function f1(a2, a3, a4, a5) {
    let v6 = a4[1024];
    const v9 = (v6++ && 2147483649) ** v6;
    v9 << v9;
    return a3;
}
const v13 = new Float32Array(3008);
v13.filter(f1);
gc();
