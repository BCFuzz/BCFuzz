for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o34 = {
    get d() {
        const v11 = `
            /\u{12345}/myvis;
        `;
        const v14 = JSON.stringify(v11);
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i25, i26] = (() => {
                    eval(v14);
                    return [0, 10];
                })();
                i26--, i25 < i26;
                ) {
            }
        }
        const v33 = new F15();
        return v33;
    },
};
const o35 = {
    ...o34,
};
gc();
