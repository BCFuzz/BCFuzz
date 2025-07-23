const v3 = new BigInt64Array(9);
const o8 = {
    valueOf(a5, a6) {
        return v3.indexOf(a6, a5);
    },
};
try { o8.valueOf(2147483649n); } catch (e) {}
gc();
