const v0 = /(?:a*)*a\s(\xed\xb0\x80)\x01Axyz{0,1}/yvgi;
function f1(a2) {
    const v3 = `
        /aa\fb\nc\rd\te\vf?/gi;
    `;
    v3.split(v0);
    return a2;
}
Object.defineProperty(v0, "toString", { configurable: true, value: f1 });
const o6 = {
    [v0]: v0,
};
gc();
