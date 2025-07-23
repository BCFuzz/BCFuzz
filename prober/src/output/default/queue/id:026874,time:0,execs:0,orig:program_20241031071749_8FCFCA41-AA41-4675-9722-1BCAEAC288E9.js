const v0 = `
    /\u{12345}/myvis;
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    RegExp.$3;
    const o8 = {
        set f(a7) {
        },
    };
`;
for (let v9 = 0; v9 < 10; v9++) {
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
        v0.replace("function", v0);
    }
    new F11();
}
for (let i17 = -3, i18 = 10; i17 < i18; i18--) {
}
gc();
