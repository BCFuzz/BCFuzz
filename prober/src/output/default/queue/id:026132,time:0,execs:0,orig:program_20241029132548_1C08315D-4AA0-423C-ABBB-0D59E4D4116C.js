function f0(a1, a2) {
    const v4 = new Map();
    const v5 = v4.has;
    function f6(a7) {
        const v8 = `
            const v9 = [v4,v4,v4];
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                a13.search(v9);
            }
            /\u{12345}/myvis;
        `;
        return v8;
    }
    v5.toString = f6;
    eval("p" + v5);
    return Map;
}
try { f0(); } catch (e) {}
gc();
