class C1 {
    constructor(a3) {
        const v4 = `
            \`match${-1000000.0}getUint32\`;
        `;
        const v6 = v4.split(a3);
        v6.shift();
        const t6 = C1.constructor;
        t6(v6);
    }
}
function f10() {
    return C1;
}
const v11 = f10.call();
try { new v11(-1000000.0); } catch (e) {}
gc();
