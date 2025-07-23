const v0 = `
    let v1 = \`
        let v4 = ++v1;
        const v5 = v4++;
        const v6 = ~v5;
        Math.log10(v6);
        ++v4;
        v5 * v6;
        v4 ^ -15;
    \`;
    function f11() {
        return v0;
    }
    for (let v12 = 0; v12 < 5; v12++) {
    }
    /\u{12345}/myvis;
`;
for (let i16 = 0, i17 = 10;
    i16 < i17;
    (() => {
        i17--;
        function F22(a24, a25, a26, a27) {
            if (!new.target) { throw 'must be called with new'; }
            const o34 = {
                set b(a30) {
                    for (let v31 = 0; v31 < 5; v31++) {
                        (v0 + v31).replace(v0, "");
                    }
                },
            };
            o34.b = o34;
        }
        new F22();
    })()) {
}
for (let i40 = 0, i41 = 10; i41--, i40 < i41;) {
}
gc();
