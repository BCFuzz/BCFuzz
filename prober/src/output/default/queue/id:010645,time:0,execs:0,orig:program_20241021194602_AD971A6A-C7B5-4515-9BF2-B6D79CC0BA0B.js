function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = `
        function f4(a5, a6) {
            f4 |= a5;
            return a2;
        }
        f4();
        /\u{12345}/myvis;
    `;
    eval(v3);
}
new F0(F0);
gc();
