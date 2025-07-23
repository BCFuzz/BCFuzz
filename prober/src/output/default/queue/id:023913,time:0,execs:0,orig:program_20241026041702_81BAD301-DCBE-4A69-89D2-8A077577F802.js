for (let i4 = 0, i5 = 10; Reflect.construct(Int32Array, []) < i5;) {
    const v16 = new Int8Array(9);
    const o21 = {
        valueOf(a18, a19) {
            return v16.indexOf(a19, a18);
        },
    };
    try { o21.valueOf(2147483649n); } catch (e) {}
    i5--;
}
gc();
