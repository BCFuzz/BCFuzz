const o0 = {
};
for (let v1 = 0; v1 < 5; v1++) {
    const v2 = v1++;
    const t4 = o0.__proto__;
    t4[536870912] = v2;
}
const v6 = new Uint8Array(3129);
for (const v7 in v6) {
    function f8() {
        v6[arguments];
        return arguments;
    }
    f8()[1910];
}
gc();
