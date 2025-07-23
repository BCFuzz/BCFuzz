for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    class C14 {
        static n(a16, a17) {
            const v19 = URIError();
            function f20() {
                function f21() {
                    new new.target(new.target, a17, URIError, new.target);
                    return a12;
                }
                return f21;
            }
            Object.defineProperty(v19, "valueOf", { enumerable: true, get: f20 });
            v19 + v19;
        }
    }
    try { C14.n(this, a12, a12); } catch (e) {}
}
new F10();
gc();
