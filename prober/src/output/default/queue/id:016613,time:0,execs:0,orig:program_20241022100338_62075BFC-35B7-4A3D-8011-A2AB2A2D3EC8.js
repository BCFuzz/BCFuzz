for (let [i14, i15] = (() => {
        function f3() {
            function f4(a5, a6) {
                return 7;
            }
            return f4;
        }
        Object.defineProperty(Date, Symbol.toPrimitive, { get: f3 });
        const v9 = new Date();
        const o10 = {
            [Date]: v9,
        };
        JSON.stringify(o10);
        return [0, 10];
    })();
    i14 < i15;
    i15--) {
}
for (let i24 = -3, i25 = 10; i24 < i25; i25--) {
}
gc();
