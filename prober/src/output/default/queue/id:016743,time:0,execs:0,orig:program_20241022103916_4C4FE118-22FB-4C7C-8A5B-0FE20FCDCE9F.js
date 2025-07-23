function f0(a1, a2) {
    return a2;
}
function f3() {
    function f4(a5, a6) {
        const v7 = `
            /[Z(?<=a)2\u{12345}*]/mu;
        `;
        return v7;
    }
    return f4;
}
Object.defineProperty(f0, "valueOf", { configurable: true, enumerable: true, get: f3 });
f0 != 536870912n;
gc();
