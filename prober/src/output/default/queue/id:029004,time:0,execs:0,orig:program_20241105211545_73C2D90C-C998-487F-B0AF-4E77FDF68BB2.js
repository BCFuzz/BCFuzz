class C0 {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 5; v3++) {
        const v4 = [65536,536870887,9223372036854775807];
        const v5 = `
            for (const v6 of v4) {
            }
            /\u{12345}/myvis;
        `;
        const v8 = v5.split(v3);
        try { C0.constructor(v8); } catch (e) {}
    }
}
new F1();
gc();
