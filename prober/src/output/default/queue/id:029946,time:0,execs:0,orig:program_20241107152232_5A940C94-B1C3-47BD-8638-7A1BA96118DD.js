class C0 {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 5; v3++) {
        const v4 = `
            [...[1073741824,-65537],...0.0];
            /\u{12345}/myvis;
        `;
        const v9 = v4.split(v3);
        try { C0.constructor(v9); } catch (e) {}
    }
}
new F1();
gc();
