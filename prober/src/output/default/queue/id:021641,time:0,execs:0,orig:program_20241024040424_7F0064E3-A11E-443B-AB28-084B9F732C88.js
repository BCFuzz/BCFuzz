const o8 = {
    valueOf() {
        const v3 = new Date();
        v3[Symbol.toPrimitive].apply("8");
        return this;
    },
};
try { o8.valueOf("8", o8, "8"); } catch (e) {}
gc();
