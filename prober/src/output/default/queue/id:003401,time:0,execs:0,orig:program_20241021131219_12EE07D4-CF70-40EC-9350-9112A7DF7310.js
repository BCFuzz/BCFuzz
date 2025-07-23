const o8 = {
    toString(a1, a2) {
        const v3 = this.__proto__;
        const v5 = v3.toLocaleString(v3).constructor;
        const v6 = new v5(a2, v5);
        v6.toLowerCase();
        return v6;
    },
};
o8.toString();
gc();
