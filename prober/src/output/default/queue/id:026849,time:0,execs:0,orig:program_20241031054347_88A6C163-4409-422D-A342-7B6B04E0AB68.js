const v2 = `
    Object.defineProperty(8, "unicode", { configurable: true, enumerable: true, value: -2147483649 });
    /\u{12345}/myvis;
`;
const v5 = v2.split(8);
v5.pop(v2, v5, 8, v5);
const v7 = v5.reverse();
try { ("toString").matchAll(v7); } catch (e) {}
gc();
