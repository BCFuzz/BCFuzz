for (let [i7, i8] = (() => {
        const v2 = new SharedArrayBuffer();
        const v4 = new DataView(v2);
        try { v4.setBigInt64(); } catch (e) {}
        return [9, 10];
    })();
    i7 < i8;
    i8--) {
}
gc();
