const o0 = {
};
for (let v1 = 0; v1 < 5; v1++) {
    const v2 = v1++;
    const t4 = o0.__proto__;
    t4[536870912] = v2;
}
const v6 = new BigInt64Array(3852);
for (const v7 in v6) {
    ([-998.3801941914703]).concat(o0, 3852, v6, v7);
}
gc();
