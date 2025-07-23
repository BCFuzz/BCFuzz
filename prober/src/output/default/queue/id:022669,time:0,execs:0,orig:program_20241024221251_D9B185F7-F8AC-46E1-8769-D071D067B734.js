const v1 = new Int32Array();
function f2(a3) {
    const o4 = {
        "g": a3,
        [f2]: v1,
    };
    return o4;
}
JSON.parse(JSON.stringify([f2(f2(f2)).g]));
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
