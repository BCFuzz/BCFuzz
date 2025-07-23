const v1 = [-63720,-63720];
function f2() {
    return -63720;
}
v1.toString = f2;
const v5 = new BigUint64Array(1657);
v5.indexOf(/r[xyz]\p{Nd}s(?:foo)*/isu, v1);
gc();
