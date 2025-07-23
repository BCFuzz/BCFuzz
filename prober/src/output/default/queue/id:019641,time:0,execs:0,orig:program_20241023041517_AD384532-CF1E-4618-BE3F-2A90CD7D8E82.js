for (let [i9, i10] = (() => {
        const v5 = new SharedArrayBuffer();
        const v7 = new DataView(v5);
        try { v7.setFloat64(undefined, -2147483649, undefined); } catch (e) {}
        return [0, 10];
    })();
    i9 < i10;
    i10--) {
}
gc();
