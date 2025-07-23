const o4 = {
    toString(a1, a2) {
        return this.__proto__;
    },
};
const v5 = o4.toString();
const o9 = {
    set d(a7) {
        for (const v8 in v5) {
        }
    },
};
o9.d = o9;
gc();
