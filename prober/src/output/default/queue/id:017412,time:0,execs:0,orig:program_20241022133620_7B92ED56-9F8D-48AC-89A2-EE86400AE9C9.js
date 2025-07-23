for (let i = 0; i < 10; i++) {
    const o7 = {
        set b(a1) {
            for (let v2 = 0; v2 < 5; v2++) {
                const v4 = "p" + v2;
                v4.replace("p", v4.small(this, "p", v4));
            }
        },
    };
    o7.b = o7;
}
gc();
