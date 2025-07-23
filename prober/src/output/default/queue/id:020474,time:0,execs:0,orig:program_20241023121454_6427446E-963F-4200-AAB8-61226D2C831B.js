function f1(a2) {
    const o3 = {
    };
    o3.constructor.freeze(a2);
    return -4294967296 === a2;
}
const v7 = f1();
for (let v8 = 0; v8 < 10; v8++) {
    f1(v7);
}
gc();
