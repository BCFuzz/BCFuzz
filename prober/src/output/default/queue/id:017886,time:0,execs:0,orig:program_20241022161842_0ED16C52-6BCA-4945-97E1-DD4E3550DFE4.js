for (let i = 0; i < 10; i++) {
    const o6 = {
        set b(a1) {
            for (let v2 = 0; v2 < 5; v2++) {
                const v4 = "p" + v2;
                v4.replace(v4, "p");
            }
        },
    };
    o6.b = o6;
}
gc();
