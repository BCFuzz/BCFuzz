for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
for (let i22 = 0, i23 = 10; i23--, i22 < i23;) {
}
const o112 = {
    n(a31, a32, a33) {
        function F34(a36, a37, a38, a39) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i42 = 0, i43 = 10;
                (() => {
                    i43--;
                    class C45 {
                        #toString(a47) {
                        }
                        constructor(a49) {
                            try {
                                a49.#toString();
                            } catch(e51) {
                                const v52 = `
                                    async function* f53(a54, a55) {
                                        for (let i58 = 0, i59 = 10; i58 < i59; i59--) {
                                        }
                                        const v67 = JSON.stringify(v52);
                                        for (let [i72, i73] = (() => {
                                                eval(v67);
                                                return [0, 10];
                                            })();
                                            i73--, i72 < i73;
                                            ) {
                                        }
                                        /(9a\D((\xed\xa0\x80))\x02)/dgsu;
                                        return v67;
                                    }
                                    f53();
                                `;
                                for (let i84 = 0, i85 = 10; i84 < i85; i85--) {
                                    for (let i94 = 0, i95 = 10; i94 < i95; i95--) {
                                    }
                                }
                                eval(v52).next();
                            }
                        }
                    }
                    new C45(a33);
                    return i42 < i43;
                })();
                ) {
            }
        }
        const v111 = new F34(a31, a33, F34, a31);
        return v111;
    },
};
const v113 = o112.n;
v113(v113, v113, o112);
gc();
