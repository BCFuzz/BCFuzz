const v1 = new BigInt64Array();
for (let i4 = 0, i5 = 10;
    i4 !== i5;
    (() => {
        const v10 = ([-2147483648,-1024]).includes();
        for (let i13 = 0, i14 = 10; v10 < i14; i14--) {
            function f21(a22, a23) {
                return v1[v10];
            }
            new Promise(f21);
        }
        i5--;
    })()) {
}
gc();
