let v1 = 4096;
class C2 {
}
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 5; v5++) {
        const v6 = `
            v1 /= 142;
            /\u{12345}/myvis;
        `;
        const v8 = v6.split(v5);
        try { C2.constructor(v8); } catch (e) {}
    }
}
new F3();
gc();
