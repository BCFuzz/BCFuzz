const v1 = Symbol.toPrimitive;
const o9 = {
    [v1]() {
        class C3 {
        }
        const v6 = ~-766085537;
        Float32Array instanceof C3;
        this - v6;
    },
};
const o18 = {
    toString(a11, a12) {
        const v13 = this.__proto__;
        const t13 = v13.toLocaleString(o9, v13, v13).constructor;
        const v16 = t13(a12);
        try { v16.search(o9); } catch (e) {}
        return v16;
    },
};
o18.toString();
gc();
