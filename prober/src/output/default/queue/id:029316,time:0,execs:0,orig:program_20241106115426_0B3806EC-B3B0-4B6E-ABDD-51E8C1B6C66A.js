const v0 = [];
const v1 = `
    /\u{12345}/myvis;
`;
for (let i5 = 0, i6 = 10;
    i5 < i6;
    (() => {
        i6--;
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            const o23 = {
                set b(a19) {
                    ("p" + a16).replace(v1, "");
                },
            };
            o23.b = o23;
        }
        new F11(v1, v0, v0, F11);
    })()) {
}
gc();
