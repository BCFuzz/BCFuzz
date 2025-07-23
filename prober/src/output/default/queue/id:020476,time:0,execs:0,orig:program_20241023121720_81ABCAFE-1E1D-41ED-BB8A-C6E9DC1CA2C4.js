const v1 = Symbol.toPrimitive;
const o12 = {
    [v1]() {
        class C3 {
        }
        function f4() {
        }
        const v7 = new BigInt64Array(16);
        v7.toSorted(f4);
        this - ~-766085537;
    },
};
const o21 = {
    toString(a14, a15) {
        const v17 = this.__proto__.toLocaleString(a15);
        const t15 = v17.constructor;
        const v19 = t15(v1, v17, this);
        try { v19.search(o12); } catch (e) {}
        return a15;
    },
};
o21.toString(o12, Symbol, o12);
gc();
