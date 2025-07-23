function f0() {
    return f0;
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v11 = `
    function f12(a13, a14, a15, a16) {
        arguments.then = f0;
        return a14;
    }
    f12();
    /\u{12345}/myvis;
`;
eval(v11);
gc();
