const v0 = /(?:a*)*a\s(\xed\xb0\x80)\x01Axyz{0,1}/yvgi;
function f1(a2) {
    const v3 = `
        /\u{12345}/myvis;
        /aa\fb\nc\rd\te\vf?/gi;
    `;
    v3.split(v0);
    return v3;
}
Object.defineProperty(v0, "toString", { configurable: true, value: f1 });
const o7 = {
    [v0]: v0,
};
gc();
