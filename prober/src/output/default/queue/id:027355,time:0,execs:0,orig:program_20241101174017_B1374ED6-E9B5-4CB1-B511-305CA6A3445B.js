class C0 {
}
const v1 = new C0();
const v2 = `
    const v3 = [v2,v1];
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        a6.localeCompare(v3);
    }
    new F4(v2);
    /\u{12345}/myvis;
`;
eval(v2);
gc();
