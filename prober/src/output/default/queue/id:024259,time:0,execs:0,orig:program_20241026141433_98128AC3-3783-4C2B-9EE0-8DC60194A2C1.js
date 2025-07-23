const v2 = new Int32Array();
function f3(a4) {
    a4[a4] = Date;
    const o5 = {
        "g": a4,
        [f3]: v2,
    };
    o5[Symbol.toPrimitive] = Date;
    return o5;
}
JSON.parse(JSON.stringify([f3(f3(f3)).g]));
gc();
