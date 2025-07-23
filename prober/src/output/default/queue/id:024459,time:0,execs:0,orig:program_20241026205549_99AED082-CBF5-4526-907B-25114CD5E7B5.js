const v2 = `
    Object.defineProperty(/a\nW/vgi, "unicode", { configurable: true, enumerable: true, value: -2147483649 });
    /\u{12345}/myvis;
`;
const v6 = v2.split(8);
const v7 = v6.pop();
const v8 = v6.reverse(v7, v7);
try { ("toString").matchAll(v8); } catch (e) {}
gc();
