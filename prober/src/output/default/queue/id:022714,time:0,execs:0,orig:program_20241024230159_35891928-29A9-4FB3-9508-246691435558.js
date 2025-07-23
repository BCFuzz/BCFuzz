for (let i = 0; i < 10; i++) {
    const o7 = {
        set b(a1) {
            for (let v2 = 0; v2 < 5; v2++) {
                const v4 = "arguments" + v2;
                v4.replace("arguments", v4.small());
            }
        },
    };
    o7.b = o7;
}
gc();
