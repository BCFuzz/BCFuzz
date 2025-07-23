for (let [i16, i17] = (() => {
        const v3 = new Uint16Array(3578);
        for (const v4 of v3) {
            delete Date.prototype;
        }
        const v7 = `
            for (let v8 = 0; v8 < 5; v8++) {
                function F9(a11, a12) {
                    if (!new.target) { throw 'must be called with new'; }
                }
            }
        `;
        eval(v7);
        return [0, 10];
    })();
    i16 < i17;
    i17--) {
}
gc();
