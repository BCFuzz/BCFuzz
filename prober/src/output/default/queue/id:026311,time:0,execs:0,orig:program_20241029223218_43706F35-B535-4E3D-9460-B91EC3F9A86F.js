for (let v0 = 0; v0 < 5; v0++) {
    for (let i3 = 0, i4 = 10;
        (() => {
            const v5 = i3 !== i4;
            function f6() {
                const o10 = {
                    n() {
                        class C8 {
                        }
                        return delete this.c;
                    },
                };
                return o10;
            }
            const v11 = f6();
            const v12 = f6();
            function f13(a14, a15) {
                try { a14.n(); } catch (e) {}
                Object.defineProperty(a15, "c", { enumerable: true, value: a15 });
                const v19 = new Int16Array(88);
                for (const v20 in v19) {
                }
                a15.n();
                [127,255,16,60779,7226,1217775477,257,-21099,4294967297,9007199254740991];
                return v12;
            }
            f13(f13(v11, v12), v12);
            return v5;
        })();
        i4--) {
    }
}
gc();
