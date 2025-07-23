const v0 = [];
const v1 = [v0,v0];
const v2 = [v1,v0];
const v3 = [v2,v2,v1];
const v4 = [v3,v1,v1,v2];
const v5 = [];
const v6 = [v4,v5,v0,v5,v0];
const v7 = [v3,v0,v2];
const v8 = [v4,v7,v7];
function f9(a10, a11) {
    const o12 = {
        "c": v8,
        "h": v6,
        __proto__: a11,
        [a11]: v1,
        "g": a10,
    };
    return o12;
}
f9(v3, v6);
f9(v6, v2);
for (const v15 in v8) {
    -NaN;
}
gc();
