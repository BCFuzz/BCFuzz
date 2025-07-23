const o3 = {
    get h() {
        undefined.sin();
        return undefined;
    },
};
try { JSON.stringify(o3); } catch (e) {}
gc();
