const v2 = new Uint32Array(971);
function f3(a4, a5) {
    const o6 = {
        1024: a4,
        ...v2,
    };
    return o6;
}
const v7 = f3();
for (let v8 = 0; v8 < 100; v8++) {
    for (let i = 0; i < 5; i++) {
        for (let v10 = 0; v10 < 5; v10++) {
        }
        42 in v7;
    }
}
gc();
