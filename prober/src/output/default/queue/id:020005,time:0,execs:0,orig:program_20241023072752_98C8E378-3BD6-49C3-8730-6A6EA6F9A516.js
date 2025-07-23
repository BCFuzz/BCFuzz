const v1 = new Date(Date);
const v4 = v1[Symbol.toPrimitive];
const o7 = {
    valueOf() {
        v4.apply();
        return this;
    },
};
try { o7.valueOf(v1, Symbol, o7, Symbol, v1); } catch (e) {}
gc();
