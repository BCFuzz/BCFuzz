function f4(a5, a6) {
    const o10 = {
        __proto__: a6,
        [a6]: null,
        186: a6,
        ["object"]: "bigint",
        valueOf(a8, a9) {
            return a5;
        },
    };
    return o10;
}
f4("number", null);
for (let v12 = 0; v12 < 10; v12++) {
    f4();
}
gc();
