const v0 = `
    const o1 = {
    };
    /\u{12345}/myvis;
`;
for (let v3 = 0; v3 < 10; v3++) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        v0.replace("p", v0);
    }
    new F5();
}
gc();
