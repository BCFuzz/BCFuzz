let v0 = -4294967295;
const o18 = {
    get d() {
        for (let v2 = 0; v2 < 25; v2++) {
            for (let i5 = 0, i6 = 10;
                (() => {
                    const v8 = v0--;
                    const v9 = i6 ** v0;
                    Math.hypot(v2, v8, v2, v0);
                    Math.hypot(v9);
                    i6--;
                    return i5 < i6;
                })();
                ) {
            }
        }
        return v0;
    },
};
const o19 = {
    ...o18,
};
gc();
