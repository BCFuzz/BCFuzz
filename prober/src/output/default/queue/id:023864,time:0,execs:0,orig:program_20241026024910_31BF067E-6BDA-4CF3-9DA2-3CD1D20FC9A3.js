function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v5 = `
    const o6 = {
        __proto__: v4,
    };
    /\u{12345}/myvis;
`;
for (let v8 = 0; v8 < 10; v8++) {
    function F10() {
        if (!new.target) { throw 'must be called with new'; }
        v5.replace("p", v5);
    }
    new F10();
}
gc();
