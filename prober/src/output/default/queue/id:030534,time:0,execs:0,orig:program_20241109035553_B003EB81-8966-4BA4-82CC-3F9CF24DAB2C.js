for (let i2 = 0, i3 = 10; i2 < i3--;) {
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 10; v13++) {
        const v14 = `
            /\u{12345}/myvis;
            try {
            } catch(e16) {
            }
        `;
        const v17 = v14.split(v13);
        try { WeakSet.constructor(v17); } catch (e) {}
    }
}
new F11();
gc();
