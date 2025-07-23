const o5 = {
    toString(a1, a2) {
        const t2 = [];
        t2.length = 2147483648;
        return a2;
    },
};
const v8 = Array(3408);
const v10 = [];
o5.toString(Array, o5, Reflect.apply(v8.copyWithin, v8, v10));
gc();
