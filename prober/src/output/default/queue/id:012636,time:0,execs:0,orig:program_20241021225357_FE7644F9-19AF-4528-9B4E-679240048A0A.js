const o0 = {
};
const v4 = new Int16Array(3681);
for (const v5 in v4) {
    const v6 = delete o0.f;
    const v8 = new WeakSet();
    try { new WeakSet(...v5, v6, ...v8, v5, ..."65006", ...v6); } catch (e) {}
}
gc();
