const t0 = ("matchAll").toLocaleLowerCase().constructor;
const v4 = t0().replace();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const o9 = {
    };
    Object.defineProperty(o9, "toJSON", { enumerable: true, value: v4 });
    const v12 = Date(a7);
    const o13 = {
        [Math]: v12,
        "h": o9,
    };
    JSON.stringify(o13);
}
new F5();
gc();
