const v4 = [4];
const v5 = [4,-1928354747];
try { v5.entries(); } catch (e) {}
const v7 = [v5];
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    try { a11.flatMap(F8); } catch (e) {}
    this.b = 4;
    this.g = a11;
    this.a = a10;
}
const v13 = new F8(-1928354747, v7);
v13.c = v13;
new F8(4, v4);
new F8(4, v5);
try { Int32Array(v13, v13, Int32Array); } catch (e) {}
const v19 = new Int32Array(681);
try { v19.toString(); } catch (e) {}
function f21(a22, a23, a24, a25) {
    const v26 = a22--;
    try { a24.every(true); } catch (e) {}
    function f29() {
        const o31 = {
            get g() {
            },
        };
        return o31;
    }
    f29();
    let v33 = 0;
    do {
        const v34 = v19.g;
        arguments[1] <<= v33;
        function F35(a37, a38) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = v26;
            this.f = v26;
        }
        new F35(v7, Int32Array);
        new F35(v34, true);
        v33++;
    } while (v33 < 3)
    const v45 = -Float32Array;
    v45 * v45;
    return a22;
}
v19.map(f21);
gc();
