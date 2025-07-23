function f0() {
    const o2 = {
        5: "length",
        "a": "length",
    };
    return o2;
}
const v3 = f0();
const v4 = f0();
const v9 = new Uint8ClampedArray(2502);
for (const v11 in v9) {
    const o12 = {
    };
    o12.g = 6;
    const o13 = {
    };
    o13.g = v3;
    o13.e = Int8Array;
    const o14 = {
        ...v4,
        __proto__: o12,
        1073741825: o12,
    };
    o14.a = 25842;
    const o15 = {
    };
}
gc();
