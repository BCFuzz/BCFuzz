const v0 = [1000,268435440,8];
const v1 = [-9007199254740990,-1543020116,-17970,-47671,-8255,19341,536870887];
function f2(a3, a4) {
    const v5 = a3.toLocaleString(a4, v0, v0, v1, f2);
    v1.toSorted();
    v1[9] = v5;
    return v5;
}
f2(v1);
f2(v0);
gc();
