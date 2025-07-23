function f1(a2, a3, a4, a5) {
    a2 >> a2;
    let v7 = a4[1024];
    v7++;
    const v11 = (v7++ && 2147483649) ** v7;
    v11 << v11;
    return a3;
}
const v15 = new Float32Array(3008);
function f16(a17) {
    return v15;
}
v15.constructor = f16;
v15.filter(f1);
gc();
