const v1 = ("object").__proto__;
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
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
const v29 = new BigUint64Array(124);
for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
}
v29.sort(f2);
gc();
