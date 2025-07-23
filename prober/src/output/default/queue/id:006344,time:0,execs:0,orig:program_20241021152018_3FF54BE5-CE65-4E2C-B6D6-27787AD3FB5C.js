const v1 = new Float32Array();
const o11 = {
    toString(a3, a4) {
        const t3 = this.__proto__.toLocaleString().constructor;
        return t3().toWellFormed().replaceAll(v1);
    },
};
o11.toString(o11, o11);
gc();
