const v0 = /((?:ab)|cde)/dgsu;
function f2(a3, a4, a5, a6) {
    const v7 = a5[831];
    const v9 = v0 ** a5[1024];
    v9 << v7;
    return v9;
}
const v12 = new Int16Array(3008);
v12.filter(f2);
gc();
