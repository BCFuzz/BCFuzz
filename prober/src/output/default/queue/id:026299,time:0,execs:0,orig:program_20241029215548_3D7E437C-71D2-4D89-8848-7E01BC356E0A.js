for (let i3 = 0, i4 = 8; i3 < i4; i4--) {
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    let v16 = 255;
    const v17 = new Int8Array(v16);
    for (const v18 in v17) {
        class C19 {
            constructor(a21) {
                const v23 = `
                    switch (C19) {
                        default:
                            v16 = 1433;
                            break;
                        case v23:
                            break;
                    }
                    /\u{12345}/myvis;
                `;
                const v25 = v23.split(a21);
                try { v25.flatMap(eval); } catch (e) {}
            }
        }
        new C19(v18);
    }
}
new F11();
gc();
