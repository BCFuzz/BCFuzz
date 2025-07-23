const v0 = `
    function f1(a2, a3) {
        let v4 = -1058476893;
        for ((() => {
                for (let v5 = 0; v5 < 5; v5++) {
                }
            })();
            v4--;
            ) {
        }
        return v4;
    }
    /\u{12345}/isu;
`;
eval(v0);
gc();
