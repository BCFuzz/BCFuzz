const o11 = {
    ["toPrimitive"](a2) {
        for (let i4 = 0; i4 < 21768; i4++) {
        }
        "toPrimitive" in "toPrimitive";
    },
};
try { o11.toPrimitive("toPrimitive", "toPrimitive", o11); } catch (e) {}
gc();
