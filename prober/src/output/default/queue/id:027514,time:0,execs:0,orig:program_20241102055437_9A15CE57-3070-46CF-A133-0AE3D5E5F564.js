function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new Int8Array(255);
for (const v10 in v9) {
    class C11 {
        constructor(a13) {
            const v15 = `
                /\u{12345}/myvis;
                const v17 = new F0();
                a13(v17, ...F2);
            `;
            const v19 = v15.split(a13);
            v19.shift(eval);
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C11(v10);
}
gc();
