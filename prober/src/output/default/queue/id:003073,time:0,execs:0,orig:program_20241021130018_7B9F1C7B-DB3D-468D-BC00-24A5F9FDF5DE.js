function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7("-9223372036854775807", "-9223372036854775807"); } catch (e) {}
    try { a6.concat(a5); } catch (e) {}
}
new F3();
new F3(F3, F3);
const v12 = /a\nW/vgi;
function f13(a14, a15, a16, a17) {
    const v18 = a14?.__lookupGetter__;
    try { new v18(a17); } catch (e) {}
    const v21 = a14.toString().link(f13);
    try { v21.endsWith(v21); } catch (e) {}
    for (const v23 of v21) {
        v23.search(v21);
    }
    const o30 = {
        [a14](a26, a27, a28, a29) {
        },
    };
    return f13;
}
f13(v12);
gc();
