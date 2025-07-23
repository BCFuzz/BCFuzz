function f0() {
    const o3 = {
        "h": 7.672670323597263,
        "b": Infinity,
        [Infinity]: f0,
    };
    return o3;
}
const v5 = f0().Infinity;
const v6 = v5(v5);
const o7 = {
    ...v6,
};
gc();
