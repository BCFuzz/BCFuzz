const v0 = [-26987,7,536870888];
const v1 = [v0,v0,v0];
v1[0] = v0;
const v2 = v1.toLocaleString();
for (let i5 = 0, i6 = 10;
    i5 < i6;
    (() => {
        const v10 = i6--;
        const o19 = {
            n(a12, a13, a14) {
                const v15 = this;
                const v17 = v15.Intl.DateTimeFormat;
                v17.hourCycle = v2;
                v17(a13, v17);
                return v10;
            },
        };
        const v20 = o19.n;
        try { v20(v20, v10); } catch (e) {}
    })()) {
}
gc();
