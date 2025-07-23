function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        const v3 = \`
            /\x01/mdgiu;
        \`;
        /\u{12345}/myvis;
        for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        }
    `;
    eval(v2);
}
new F0();
gc();
