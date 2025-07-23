const v2 = new Uint16Array(1300);
function f3(a4) {
    const o5 = {
        "g": a4,
        [1300]: v2,
    };
    return o5;
}
JSON.parse(JSON.stringify([f3(f3(1300)).g]));
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
gc();
