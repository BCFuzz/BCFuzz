class C1 {
    constructor(a3) {
        const v4 = `
            \`match${-1000000.0}getUint32\`;
            /\u{12345}/myvis;
        `;
        const v7 = v4.split(a3);
        v7.shift();
        const t7 = C1.constructor;
        t7(v7);
    }
}
function f11() {
    return C1;
}
const v12 = f11.call(f11, -1000000.0, C1, -1000000.0, f11);
try { new v12(-1000000.0); } catch (e) {}
gc();
