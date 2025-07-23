const v0 = /(ab)\1/dyisu;
const o6 = {
    valueOf(a2) {
        const o3 = {
        };
        return o3.constructor.freeze(v0);
    },
};
const v7 = o6.valueOf();
o6.valueOf(v7, v7, o6, v7);
gc();
