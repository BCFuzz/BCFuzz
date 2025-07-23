const v4 = `
    function f5(a6, a7, a8) {
        const v9 = \`
            const o22 = {
                [2n](a12, a13, a14, a15) {
                    const v18 = \\\`
                        const v19 = new Uint8ClampedArray(128, a12);
                        new Uint8Array(v19);
                        [-3.831162944144455,896.9964877166681,0.0016717892222374298,-1000000000000.0,-1000.0,-5.0,451452.7836685248];
                    \\\`;
                },
            };
        \`;
        eval(v9);
    }
    f5.call();
`;
eval(v4);
gc();
