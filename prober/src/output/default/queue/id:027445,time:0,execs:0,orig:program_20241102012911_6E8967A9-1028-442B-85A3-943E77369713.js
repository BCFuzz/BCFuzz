function f1(a2, a3, a4, a5) {
    a2++;
    const v7 = a4[831];
    let v8 = a4[1024];
    v8--;
    ((v8++ && 2147483649) ** v8) << v7;
    return 2147483649;
}
const v16 = new Float32Array(3008);
v16.filter(f1);
gc();
