function f3(a4, a5, a6) {
    const o11 = {
        set b(a8) {
            super[a4 == "bigint"];
        },
        ["toStringTag"]: a4,
        "e": "bigint",
        "b": "bigint",
    };
    return o11;
}
for (let v12 = 0; v12 < 100; v12++) {
    f3("bigint");
}
gc();
