for (let v1 = 0; v1 < 5; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = `
            /a(?=b)c/myvis;
        `;
        for (let i9 = 0, i10 = 10 + 10;
            (() => {
                i10--;
                const v12 = i9 < i10;
                v4.replace(v4, "p");
                return v12;
            })();
            ) {
        }
    }
    new F2();
}
gc();
