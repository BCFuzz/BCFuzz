const v3 = ("number").constructor;
function f4(a5, a6) {
    return 9;
}
Object.defineProperty(v3, Symbol.toPrimitive, { enumerable: true, value: f4 });
const v9 = v3.fromCharCode(12, v3);
function f10(a11) {
    const o12 = {
        [a11]: v9,
        "g": a11,
    };
    return o12;
}
JSON.parse(JSON.stringify([f10(f10()).g]));
gc();
