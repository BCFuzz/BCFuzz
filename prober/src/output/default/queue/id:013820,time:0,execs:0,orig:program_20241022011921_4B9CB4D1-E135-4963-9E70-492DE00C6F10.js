this.constructor.seal(this);
this.constructor.freeze(this);
for (let v6 = 0; v6 < 5; v6++) {
    for (let i9 = 0, i10 = 10;
        i9 < i10;
        (() => {
            --i10;
            const t0 = Number.isInteger;
            t0();
        })()) {
    }
}
gc();
