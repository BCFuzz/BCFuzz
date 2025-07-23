for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let v20 = 0; v20 < 10; v20++) {
    for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
    }
    const o33 = {
        "maxByteLength": 6,
    };
    const v35 = new ArrayBuffer(5, o33);
    const v37 = new Float64Array(v35);
    try { v35.transfer(v20); } catch (e) {}
    v37[10] = v35;
}
gc();
