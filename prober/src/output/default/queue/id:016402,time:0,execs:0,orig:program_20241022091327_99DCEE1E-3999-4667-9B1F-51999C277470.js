const v3 = new SharedArrayBuffer(31968);
v3[1] = 5;
new Map();
new Int8Array();
try { Uint16Array(); } catch (e) {}
function f12() {
}
function f13(a14, a15, a16) {
    Object.defineProperty(arguments, 2, { enumerable: true, get: f12 });
    return arguments;
}
f13()[0];
const o41 = {
    n(a21, a22, a23) {
        for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
        }
        const v34 = this;
        v34.Intl.DisplayNames;
        new SyntaxError();
    },
};
const t21 = o41.n;
t21();
gc();
