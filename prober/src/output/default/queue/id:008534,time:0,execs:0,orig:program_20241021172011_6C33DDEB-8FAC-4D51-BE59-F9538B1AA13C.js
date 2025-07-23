const v1 = `
    for (let i31 = (() => {
            for (let i3 = 0, i4 = Uint16Array;
                (() => {
                    function f5() {
                        function f6(a7, a8, a9, a10) {
                            const o12 = {
                                get f() {
                                    return this;
                                },
                                ...a9,
                            };
                            return o12;
                        }
                        return f6;
                    }
                    i4.valueOf = f5;
                    return i3 < i4;
                })();
                (() => {
                    i3++;
                    function f17(a18, a19, a20, a21) {
                        function f22(a23, a24, a25, a26) {
                            return a20;
                        }
                        f22();
                    }
                })()) {
            }
            return 0;
        })();
        i31 < 2;
        i31++) {
    }
`;
eval(v1);
gc();
