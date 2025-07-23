const o6 = {
    valueOf() {
        const v3 = Symbol.toPrimitive;
        v3[v3].apply("8");
        return this;
    },
};
try { o6.valueOf(o6); } catch (e) {}
gc();
