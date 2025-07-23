for (let [i24, i25] = (() => {
        const v2 = `
            const o11 = {
                toString(a4) {
                    function f5(a6) {
                        new Map();
                        return arguments;
                    }
                    f5(0);
                },
            };
            function f13(a14, a15, a16, a17) {
                a17 / a17;
                return f13;
            }
            for (let v19 = 0; v19 < 5; v19++) {
                const t15 = f13(v19, 0, v19, f13);
                t15(o11, 2, v19, o11);
            }
        `;
        eval(v2);
        return [0, 10];
    })();
    i24 != i25;
    i25--) {
}
gc();
