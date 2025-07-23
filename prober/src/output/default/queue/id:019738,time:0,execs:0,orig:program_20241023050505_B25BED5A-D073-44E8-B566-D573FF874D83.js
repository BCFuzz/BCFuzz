const o2 = {
    __proto__: null,
    [null]() {
        super[null] = this;
    },
};
try { o2.null(null, null, o2); } catch (e) {}
gc();
