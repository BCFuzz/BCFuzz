const v0 = [10000,-2147483649,1073741824];
const v1 = [-22361,2147483649,11237,-4096,-65536,1073741824,9223372036854775807,-64478,-65537];
function f2() {
    return v1;
}
class C3 extends f2 {
    a = v0;
}
new C3();
const v5 = f2();
const v8 = new Uint32Array(1003);
for (const v9 in v8) {
    for (let v10 = 0; v10 < 5; v10++) {
        v5[v9] = v10;
    }
}
gc();
