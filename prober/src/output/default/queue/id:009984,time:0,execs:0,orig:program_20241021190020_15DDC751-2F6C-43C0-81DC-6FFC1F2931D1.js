const v0 = [538,1000];
function f1() {
    const v2 = [v0,v0];
    return v2.join(v2);
}
const v5 = new BigInt64Array();
v5.valueOf = f1;
function f6(a7) {
    return a7;
}
v5 | f6;
gc();
