function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
        }
        /\u{12345}/myvis;
    `;
    eval(v2);
}
new F0();
gc();
