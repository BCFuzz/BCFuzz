for (let i = 0; i < 10; i++) {
    const o5 = {
        set b(a1) {
            ("match")["match"](/\1\2(a(?:\1(b\1\2))\2)\1/mgis);
        },
    };
    o5.b = o5;
}
gc();
