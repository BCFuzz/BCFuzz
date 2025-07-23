const v2 = new Int16Array(257);
function f3(a4, a5, a6, a7) {
    const o15 = {
        10: a4,
        toString(a9, a10, a11) {
            JSON["stringify"](this);
            return "stringify";
        },
    };
    return o15;
}
const v17 = v2["reduceRight"](f3);
v17[v17] = v17;
gc();
