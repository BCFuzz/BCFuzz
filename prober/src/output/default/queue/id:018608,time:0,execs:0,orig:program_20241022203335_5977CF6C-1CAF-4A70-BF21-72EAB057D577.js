const v1 = new SharedArrayBuffer();
let v2 = 60240;
const v5 = new Uint32Array(1000);
for (const v6 in v5) {
    function f7(a8, a9, a10, a11) {
        const o20 = {
            set b(a14) {
                try { v1(); } catch (e) {}
                v2++;
                function F17() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let v19 = 0; v19 < 5; v19++) {
                }
            },
        };
        o20.b = o20;
        return arguments;
    }
    f7();
}
gc();
