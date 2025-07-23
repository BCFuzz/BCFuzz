const o0 = {
};
const v2 = new Date();
const v5 = v2[Symbol.toPrimitive];
const o8 = {
    valueOf() {
        v5.apply(o0);
        return v2;
    },
};
try { o8.valueOf(o8); } catch (e) {}
gc();
