for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 5; v13++) {
        const v14 = `
            [...[1024,-16,64721,45076,45108,-1092154416,-2147483648,-12,47328]];
            /\u{12345}/myvis;
        `;
        const v18 = v14.split(v13);
        try { C10.constructor(v18); } catch (e) {}
    }
}
new F11();
gc();
