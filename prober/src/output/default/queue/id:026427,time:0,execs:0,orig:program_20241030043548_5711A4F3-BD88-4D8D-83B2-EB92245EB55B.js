for (let v0 = 0; v0 < 5; v0++) {
    const o4 = {
        __proto__: null,
        [null]() {
            super[v0];
        },
    };
    try { o4.null(); } catch (e) {}
}
gc();
