const o2 = {
    set a(a1) {
    },
};
const v5 = new Float64Array(3413);
const o6 = {
    [v5]: o2,
};
JSON.stringify(o6);
gc();
