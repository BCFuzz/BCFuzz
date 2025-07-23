for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        for (let i7 = 0, i8 = 10; i7 != i8; i8--) {
        }
        return v4;
    })();
    (() => {
        function f17() {
            function f18(a19) {
                function f20() {
                    const o27 = {
                        toString(a22) {
                            return Math.cbrt(28330 % a22);
                        },
                    };
                    return o27;
                }
                const v28 = f20();
                const v29 = f20();
                const v32 = [i3,i3];
                const v33 = [8,40632n,v29];
                v32 | v33;
                v28 + v33;
                return f18;
            }
            f18(f18(f18));
            return i2;
        }
        f17();
        f17();
        i3--;
    })()) {
}
gc();
