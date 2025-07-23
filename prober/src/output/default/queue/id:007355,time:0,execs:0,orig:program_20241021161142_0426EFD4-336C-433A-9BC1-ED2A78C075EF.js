class C0 {
    static set e(a2) {
        function f4(a5, a6) {
            const o7 = {
                2147483648: a5,
                [-2100861933]: a5,
            };
            return o7;
        }
        f4();
        f4();
    }
}
for (let v10 = 0; v10 < 5; v10++) {
    C0.e = v10;
}
gc();
