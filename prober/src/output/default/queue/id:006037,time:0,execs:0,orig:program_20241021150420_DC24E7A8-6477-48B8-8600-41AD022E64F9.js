const v3 = Math.trunc();
const v6 = new Uint32Array();
function F7() {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F7();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    function f15(a16) {
        let v17 = [a16,a16,a16,a16,a16];
        function f18() {
            for (let v19 = 0; v19 < 5; v19++) {
                const v20 = delete v6[v17];
                let v21;
                try { v21 = a13(); } catch (e) {}
                `a${v21}255${v3}boolean${v6}symbol${v20}p`;
                v17 *= v21;
                for (let v24 = 0; v24 < 5; v24++) {
                }
            }
            return a13;
        }
        ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f18);
        return v6;
    }
    Object.defineProperty(this, "f", { set: f15 });
    this.f = v9;
}
new F10();
gc();
