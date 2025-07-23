const v0 = `
    /\u{12345}/myvis;
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    RegExp.$3;
    /^xxx$(?:ab)|cdeTfoo(?<=bar)baz(Ysa\sc)/dgu;
`;
function F8() {
    if (!new.target) { throw 'must be called with new'; }
    v0.replace("function", v0);
}
new F8();
for (let i14 = -3, i15 = 10; i14 < i15; i15--) {
}
gc();
