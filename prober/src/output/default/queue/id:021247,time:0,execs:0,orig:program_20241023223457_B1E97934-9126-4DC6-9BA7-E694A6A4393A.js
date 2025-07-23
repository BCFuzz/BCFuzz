for (let v0 = 0; v0 < 100; v0++) {
    const o9 = {
        toString(a2, a3) {
            const v5 = this.__proto__.toLocaleString();
            const v6 = v5.constructor;
            const v7 = new v6(v5, v6);
            v7.concat();
            return this;
        },
    };
    o9.toString(o9, v0);
}
gc();
