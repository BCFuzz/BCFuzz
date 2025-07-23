for (let v1 = 0; v1 < 5; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = `
            /\u{12345}/myvis;
        `;
        for (let i9 = 0, i10 = 10 + 10; i10--, v4.replace(v4, "p"), i10;) {
        }
    }
    new F2();
}
gc();
