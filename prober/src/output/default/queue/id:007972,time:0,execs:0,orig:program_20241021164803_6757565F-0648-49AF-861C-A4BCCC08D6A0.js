function f1(a2) {
    for (let v4 = 0; v4 < 5; v4++) {
    }
    const o7 = {
        "maxByteLength": 2312845920,
    };
    const v9 = new ArrayBuffer(750704325, o7);
    const v11 = new Int8Array(v9);
    v11["268435440"] = 1.7976931348623157e+308;
    return "268435440";
}
f1();
f1();
gc();
