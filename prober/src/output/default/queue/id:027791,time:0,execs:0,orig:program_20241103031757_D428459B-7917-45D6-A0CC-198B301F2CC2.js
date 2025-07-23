class C0 {
}
const v1 = C0.bind(C0, C0, C0, C0, C0);
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        const v9 = i5--;
        for (let i12 = 0, i13 = 10;
            (() => {
                i13--;
                const v15 = i12 < i13;
                v9 instanceof v1;
                return v15;
            })();
            ) {
        }
    })()) {
}
gc();
