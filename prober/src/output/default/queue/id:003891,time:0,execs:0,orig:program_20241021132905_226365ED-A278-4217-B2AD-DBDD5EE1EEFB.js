for (let i1 = 0;
    (() => {
        const v3 = i1 < 8;
        const v4 = `
            function f5() {
                return f5;
            }
        `;
        eval(v4);
        return v3;
    })();
    i1++) {
}
gc();
