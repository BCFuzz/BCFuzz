const o11 = {
    toString(a2, a3) {
        const v6 = this.__proto__.toLocaleString(a2, "-8").constructor;
        const v7 = v6.fromCharCode("-8");
        const v9 = v7[0].repeat();
        v9.replaceAll(v9, v7);
        return v6;
    },
};
o11.toString();
gc();
