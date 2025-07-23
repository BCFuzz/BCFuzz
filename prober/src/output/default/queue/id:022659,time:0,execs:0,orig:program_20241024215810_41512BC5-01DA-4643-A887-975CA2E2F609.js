function f0(a1, a2, a3) {
    let v4 = 3247;
    for (;
        (() => {
            const v5 = v4--;
            let v6 = -v5;
            v6++;
            return v5;
        })();
        ) {
    }
    return f0;
}
f0();
gc();
