const o10 = {
    toString(a2, a3) {
        const v6 = this.__proto__.toLocaleString().constructor;
        for (let v7 = 0; v7 < 100; v7++) {
        }
        return v6.fromCharCode("-13")[0];
    },
};
const v11 = o10.toString();
o10.toString(v11, "-13", v11);
gc();
