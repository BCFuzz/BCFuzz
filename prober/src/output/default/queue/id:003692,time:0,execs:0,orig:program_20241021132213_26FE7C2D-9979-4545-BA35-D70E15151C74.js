class C0 {
    static set e(a2) {
        let v3 = -4294967296;
        function f4(a5, a6) {
            const o7 = {
                2147483648: a5,
                [v3]: a5,
            };
            return a5;
        }
        f4();
        f4();
        ++v3;
    }
}
for (let v11 = 0; v11 < 5; v11++) {
    C0.e = v11;
}
gc();
