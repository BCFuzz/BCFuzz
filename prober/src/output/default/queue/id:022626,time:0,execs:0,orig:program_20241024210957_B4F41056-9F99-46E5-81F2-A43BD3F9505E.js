const v2 = Array(Array);
v2[125] = Int32Array;
function f3(a4) {
    const o5 = {
        [v2]: v2,
        "g": a4,
    };
    return o5;
}
JSON.parse(JSON.stringify([f3(f3(Int32Array)).g]));
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
gc();
