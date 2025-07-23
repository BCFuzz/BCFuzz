function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        29 === 29;
        /\u{12345}/myvis;
    `;
    eval(v2);
}
new F0();
gc();
