const v1 = [[-2.2250738585072014e-308,-1.147104110257013,85442.05256041023,0.6763111032604103,0.5711606364045693]];
const v2 = `
    /\u{12345}/myvis;
`;
for (let i6 = 0, i7 = 10;
    i6 < i7;
    (() => {
        i7--;
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            const o24 = {
                set b(a20) {
                    ("p" + v1).replace(v2, "");
                },
            };
            o24.b = o24;
        }
        new F12(v2, v1, v1, F12);
    })()) {
}
gc();
