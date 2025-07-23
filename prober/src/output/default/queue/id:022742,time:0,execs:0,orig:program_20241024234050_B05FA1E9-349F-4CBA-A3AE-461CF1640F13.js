const v1 = (13).__proto__;
function f2() {
    for (let v3 = 0; v3 < 25; v3++) {
        const v5 = "p" + v3;
        "p" in v1;
        v1[v5] = v3;
    }
    for (let i9 = -3, i10 = 10; i9 < i10; i10--) {
    }
    return f2;
}
const v19 = new BigUint64Array(124);
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
v19.sort(f2);
gc();
