function f0() {
    const o10 = {
        toString(a3, a4) {
            return this.__proto__.toLocaleString(a3, a3, a4, f0).constructor.fromCharCode("-8")[0];
        },
    };
    return o10;
}
f0()[f0()];
gc();
