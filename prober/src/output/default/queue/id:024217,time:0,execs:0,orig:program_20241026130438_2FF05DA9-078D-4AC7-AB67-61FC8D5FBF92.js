const v2 = new BigInt64Array();
const o12 = {
    get b() {
        return this;
    },
    set h(a5) {
    },
    get d() {
        delete this.b;
        const v9 = delete this.h;
        super.h = v2 == Int16Array;
        gc();
        return v9;
    },
};
function f13(a14, a15) {
    const o16 = {
        ...o12,
    };
    return o12;
}
f13(Int16Array, o12);
f13(v2, BigInt64Array);
gc();
