function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        const v3 = /\u{12345}/v;
        v3.exec(v3);
    `;
    eval(v2);
}
new F0();
gc();
