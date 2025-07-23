const o9 = {
    [undefined]: -2147483647,
};
function f13(a14, a15, a16) {
    const v17 = `
        const v18 = [256,-65536,1198883244,255,-65536,5];
        function f22(a23, a24) {
            const o32 = {
                ...a23,
                2: 2n,
                [2n](a26, a27, a28, a29) {
                },
            };
            return undefined;
        }
        this[6] = v18;
        for (let v34 = 0; v34 < 100; v34++) {
            f22(this);
        }
        Math.hypot();
    `;
    return eval(v17);
}
f13();
gc();
