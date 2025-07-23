const v1 = new BigUint64Array();
for (let v2 = 0; v2 < 5; v2++) {
}
const v3 = [BigUint64Array];
v3[-1] = v1;
v3[-1];
gc();
