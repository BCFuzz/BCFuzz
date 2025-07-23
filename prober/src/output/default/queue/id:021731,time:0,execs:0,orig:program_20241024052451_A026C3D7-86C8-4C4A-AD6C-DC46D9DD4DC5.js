const o6 = {
    get a() {
        super[4] = 4 ^ this;
    },
    get h() {
        return undefined.sin();
    },
};
try { JSON.stringify(o6); } catch (e) {}
gc();
