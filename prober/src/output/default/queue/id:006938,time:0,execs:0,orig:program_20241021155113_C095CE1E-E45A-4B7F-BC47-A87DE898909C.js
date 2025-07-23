function f1() {
    return 31391;
}
const v3 = new BigInt64Array(31391, 31391, 31391);
v3.toString = f1;
delete v3[v3];
gc();
