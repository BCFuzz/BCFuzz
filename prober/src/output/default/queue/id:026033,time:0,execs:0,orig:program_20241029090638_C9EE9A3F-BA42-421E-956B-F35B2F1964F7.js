for (let i3 = 0, i4 = 10 + 10; i4--, i3 < i4;) {
}
for (let i13 = 0, i14 = 10;
    i14;
    (() => {
        i14--;
        const v18 = -Infinity;
        const v21 = new Uint32Array(1000);
        for (const v22 in v21) {
            let v25 = v22 ** -1;
            --v25;
            Math.pow(v18, v25);
        }
    })()) {
}
gc();
