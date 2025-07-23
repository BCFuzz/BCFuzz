const o18 = {
    get d() {
        for (let v1 = 0; v1 < 50; v1++) {
            for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
            }
            let v13 = 8n ^ 8n;
            v13--;
            const v16 = new BigUint64Array(v1);
            v16.indexOf(v13);
        }
        return this;
    },
};
const o19 = {
    ...o18,
};
gc();
