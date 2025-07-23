const v0 = [7,536870888,-8,-268435456,-3,-9007199254740990,-7,-65536,7];
const v1 = [-2121405923,-30903];
const v2 = [536870888,-313439290,-27837,-1761334524,-3,-285729088,-27977441,268435456];
class C6 {
}
const v7 = new C6("54e1", v2);
const v8 = new C6("37Z");
const v9 = new C6();
function f10(a11, a12, a13, a14) {
    const o15 = {
        __proto__: v0,
        [a13]: a12,
        "a": "37Z",
        "d": a14,
        ...a11,
        "f": a13,
        "b": v1,
        [a11]: v7,
        5: "37Z",
    };
    return o15;
}
f10(v8, f10("number", f10("number", "37Z", v9), v2), "37Z", v2);
const o21 = {
    "maxByteLength": 173,
};
const v23 = new SharedArrayBuffer(3, o21);
new BigInt64Array(v23);
gc();
