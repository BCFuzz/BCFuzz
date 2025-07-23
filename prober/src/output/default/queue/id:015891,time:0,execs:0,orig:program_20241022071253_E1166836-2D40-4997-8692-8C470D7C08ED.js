for (let i = 0; i < 100; i++) {
    const o6 = {
        set b(a1) {
            for (let v2 = 0; v2 < 5; v2++) {
                ("p" + v2).replace("p", "p");
            }
        },
    };
    o6.b = o6;
}
gc();
