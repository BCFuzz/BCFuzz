const v2 = `
    Object.defineProperty(/a\nW/vgi, "unicode", { configurable: true, enumerable: true, value: -2147483649 });
    /\u{12345}/myvis;
`;
const v6 = v2.split(8);
const v7 = v6.reverse();
function f8(a9, a10, a11) {
    return v7;
}
const v12 = f8(v7, v6, "toString");
try { ("toString").matchAll(v12); } catch (e) {}
gc();
