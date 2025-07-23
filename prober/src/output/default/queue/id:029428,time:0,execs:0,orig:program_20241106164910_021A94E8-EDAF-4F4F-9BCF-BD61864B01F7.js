function f1(a2, a3, a4, a5) {
    const v6 = a4[831];
    let v7 = a4[1024];
    ((v7++ && 2147483649) ** v7) << v6;
    return 2147483649;
}
const v14 = new Uint16Array(3008);
v14.filter(f1);
gc();
