const v3 = new Int32Array(33823);
function f4(a5) {
    a5[Symbol.toPrimitive] = Date;
    const o8 = {
        "g": a5,
        [f4]: v3,
    };
    return o8;
}
JSON.parse(JSON.stringify([f4(f4(f4)).g]));
gc();
