function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        /\u{12345}/myvis;
    `;
    let v4;
    try { v4 = v2.valueOf(); } catch (e) {}
    for (let i8 = 0, i9 = 10 + 10;
        (() => {
            i9--;
            const v11 = i8 < i9;
            v2.replace(v2, v4);
            return v11;
        })();
        ) {
    }
}
new F0();
gc();
