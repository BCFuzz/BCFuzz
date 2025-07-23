class C0 {
}
function f1(a2, a3, a4) {
    const o28 = {
        [a4](a6, a7, a8, a9) {
        },
        toString(a11, a12, a13, a14) {
            const v15 = `
                function F16(a18, a19, a20, a21) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                let v22 = new F16();
                const v23 = new F16();
                try { new a12(a2, ...v23); } catch (e) {}
                v22 |= a12?.b;
            `;
            eval(v15);
        },
    };
    return o28;
}
const v29 = f1(f1, C0, C0);
f1(C0, v29, v29);
gc();
