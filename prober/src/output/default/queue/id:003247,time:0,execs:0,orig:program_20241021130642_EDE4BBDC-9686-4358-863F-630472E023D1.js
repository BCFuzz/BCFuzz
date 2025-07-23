const o8 = {
    toString(a3, a4, a5) {
        Reflect.construct("bigint");
        return a3;
    },
};
const v9 = (47425).constructor;
try { new v9(o8); } catch (e) {}
gc();
