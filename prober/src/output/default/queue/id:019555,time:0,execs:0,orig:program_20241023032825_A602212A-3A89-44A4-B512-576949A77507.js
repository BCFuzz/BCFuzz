for (let [i9, i10] = (() => {
        const v4 = new SharedArrayBuffer();
        const v6 = new DataView(v4);
        try { v6.getFloat64(11, 9223372036854775807); } catch (e) {}
        return [0, 10];
    })();
    i9 < i10;
    i10--) {
}
gc();
