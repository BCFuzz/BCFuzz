const v0 = [];
const o1 = {
    [v0]: v0,
};
const v4 = new Int32Array();
function f5(a6) {
    a6[Symbol.toPrimitive] = Date;
    const o9 = {
        "g": a6,
        [f5]: v4,
    };
    return o9;
}
const v12 = f5(f5(f5)).g;
JSON.parse(JSON.stringify([v12,v12.g(o1)]));
gc();
