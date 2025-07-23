function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    static toString(a4, a5) {
        for (let i8 = -3, i9 = 10;
            (() => {
                const v12 = new Int32Array(681);
                function f13(a14, a15, a16, a17) {
                    function f18(a19) {
                        const v22 = new Map();
                        v22.set(a19, v22);
                        return arguments;
                    }
                    f18(a17);
                    return i9;
                }
                v12.map(f13);
                return i8 < i9;
            })();
            i9--) {
        }
    }
}
C2.toString();
gc();
