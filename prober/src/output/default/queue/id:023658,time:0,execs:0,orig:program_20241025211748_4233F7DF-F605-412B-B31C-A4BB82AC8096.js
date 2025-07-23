for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o11 = {
};
Math.toString = Date;
const v13 = Date();
const o14 = {
    [Math]: v13,
    "h": o11,
};
o14.toJSON = Math;
const v16 = JSON.stringify(o14);
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
for (let i29 = 0, i30 = 10;
    i29 < i30;
    (() => {
        i30--;
        const o43 = {
            n(a36, a37, a38) {
                const v39 = this;
                const t4 = v39.Intl.DateTimeFormat;
                t4(v16);
                return v39;
            },
        };
        const v44 = o43.n;
        try { v44(); } catch (e) {}
    })()) {
}
gc();
