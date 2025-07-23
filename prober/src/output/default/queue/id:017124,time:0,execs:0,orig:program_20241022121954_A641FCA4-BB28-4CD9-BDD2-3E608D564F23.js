function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        for (let i4 = 0; i4 < 10;) {
            break;
        }
    `;
    eval(v2);
}
new F0();
gc();
