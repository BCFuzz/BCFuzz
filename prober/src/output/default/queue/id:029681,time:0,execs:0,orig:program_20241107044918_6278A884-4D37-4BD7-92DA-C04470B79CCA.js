for (let i1 = 0, i2 = 0; i1 < i2;) {
}
function F9() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v11 = 0; v11 < 10; v11++) {
        const v12 = [65536,536870887,9223372036854775807];
        const v13 = `
            /\u{12345}/myvis;
            let v15 = v11();
            for (let v16 = 0; v16 < 5; v16++) {
                ({"b":v16,"length":v15,...F9} = v12);
            }
        `;
        const v17 = v13.split(v11);
        try { WeakSet.constructor(v17); } catch (e) {}
    }
}
new F9();
gc();
