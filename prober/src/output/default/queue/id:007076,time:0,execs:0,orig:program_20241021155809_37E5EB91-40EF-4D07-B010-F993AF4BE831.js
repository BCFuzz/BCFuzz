const o10 = {
    get d() {
        for (let v2 = 0; v2 < 100; v2++) {
            const v3 = new Int8Array();
            function f4(a5, a6, a7) {
                v3[v2];
                return a5;
            }
            f4(this, v3, Int8Array);
        }
        return Int8Array;
    },
};
const o11 = {
    ...o10,
};
gc();
