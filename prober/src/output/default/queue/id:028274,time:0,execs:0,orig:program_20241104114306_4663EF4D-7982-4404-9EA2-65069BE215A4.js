class C0 {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 10; v3++) {
        const v4 = [65536,536870887,9223372036854775807];
        const v5 = `
            let v7 = ensureArrayStorage();
            for (let v8 = 0; v8 < 5; v8++) {
                ({"b":v8,"length":v7,...v8} = v4);
            }
        `;
        const v9 = v5.split(v3);
        try { C0.constructor(v9); } catch (e) {}
    }
}
new F1();
gc();
