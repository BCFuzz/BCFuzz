for (let i2 = 0, i3 = 10; i3--, i2 !== i3;) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
function f20() {
    return f20;
}
const v21 = /h/dgis;
Object.defineProperty(v21, "global", { configurable: true, enumerable: true, get: f20 });
for (let i = 0; i < 5; i++) {
    const v23 = Date.call();
    for (let i = 0; i < 10; i++) {
        const o29 = {
            set b(a25) {
                ("symbol" + v23).replace(v21, "symbol");
            },
        };
        o29.b = o29;
    }
}
gc();
