const v2 = `
    switch ("n") {
        case Float32Array:
            function f3(a4, a5) {
                for (let i9 = 0, i10 = 10;
                    (() => {
                        const v11 = i9 < i10;
                        for (const v12 in arguments) {
                        }
                        return v11;
                    })();
                    ) {
                }
                return "n";
            }
            break;
    }
    /\u{12345}/myvis;
`;
eval(v2);
gc();
