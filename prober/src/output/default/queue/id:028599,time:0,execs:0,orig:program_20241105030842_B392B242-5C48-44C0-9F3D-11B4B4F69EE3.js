class C0 {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 10; v3++) {
        const v4 = [65536,536870887,9223372036854775807];
        const v5 = `
            let v6 = v3();
            for (let v7 = 0; v7 < 5; v7++) {
                ({"b":v7,"length":v6,...F1} = v4);
            }
        `;
        const v8 = v5.split(v3);
        try { C0.constructor(v8); } catch (e) {}
    }
}
new F1();
gc();
