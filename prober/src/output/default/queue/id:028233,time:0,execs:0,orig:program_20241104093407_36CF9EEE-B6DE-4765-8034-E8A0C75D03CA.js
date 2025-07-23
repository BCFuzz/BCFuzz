class C0 {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 10; v3++) {
        const v4 = [1336035036,-5326,-1,-2,268435441,10,36374,65536,-795621297,8];
        const v5 = `
            /\u{12345}/myvis;
            let v8 = Uint8Array(C0, v3, v3);
            for (let v9 = 0; v9 < 5; v9++) {
                ({"b":v9,"length":v8,...v9} = v4);
            }
        `;
        const v10 = v5.split(v3);
        try { C0.constructor(v10); } catch (e) {}
    }
}
new F1();
gc();
