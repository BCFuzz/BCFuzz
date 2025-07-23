const o1 = {
    "g": -1000.0,
};
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    const v23 = Date();
    Object.defineProperty(JSON, "toJSON", { configurable: true, enumerable: true, value: o1 });
    JSON.stringify(JSON, JSON, v23);
}
gc();
