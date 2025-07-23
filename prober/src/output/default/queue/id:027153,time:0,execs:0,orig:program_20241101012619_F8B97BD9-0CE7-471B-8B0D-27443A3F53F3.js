const v0 = /(?:a*)*a\s(\xed\xb0\x80)\x01Axyz{0,1}/yvgi;
function f1(a2) {
    const v3 = `
        /\u{12345}/myvis;
        function f5(a6) {
            return f1;
        }
    `;
    v3.split(v0);
    return a2;
}
Object.defineProperty(v0, "toString", { configurable: true, value: f1 });
const o8 = {
    [v0]: v0,
};
gc();
