const v0 = [-9223372036854775807,-256,220721231,4096];
function f1(a2, a3, a4, a5) {
    const v6 = a2.toString(v0, a3);
    const v7 = v6.link(v6);
    const v9 = Math.log10(f1);
    for (const v10 of v7) {
        const o11 = {
            [v10]: v0,
        };
        o11.a = v9;
    }
    return v9;
}
f1(f1);
gc();
