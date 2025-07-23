const v1 = `
    for (let i30 = (() => {
            for (let i3 = 0, i4 = Uint16Array;
                (() => {
                    i3++;
                    i4.e = i4;
                    function f6() {
                        function f7(a8, a9, a10, a11) {
                            const o13 = {
                                get f() {
                                    return this;
                                },
                                ...a10,
                            };
                            return o13;
                        }
                        return f7;
                    }
                    f6.name = f6;
                    i4.valueOf = f6;
                    return i3 < i4;
                })();
                (() => {
                    function f17(a18, a19, a20, a21) {
                        function f22(a23, a24, a25, a26) {
                            return a20;
                        }
                        return v1;
                    }
                })()) {
            }
            return 0;
        })();
        i30 < 2;
        i30++) {
    }
`;
eval(v1);
gc();
