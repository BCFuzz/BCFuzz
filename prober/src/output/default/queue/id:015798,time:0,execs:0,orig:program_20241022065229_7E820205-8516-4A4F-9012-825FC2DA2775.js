function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -651166471;
    this.e = -651166471;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
v5.c = v5;
function f6(a7) {
    const o15 = {
        __proto__: v4,
        "d": a7,
        [F0](a9, a10) {
            delete a10[a9];
            super[v3] = v3;
            return a10;
        },
        "h": v4,
        [F0]: v4,
    };
    o15.g = o15;
    return o15;
}
const v16 = f6(f6);
const v17 = v16?.d;
try { new v17(v16); } catch (e) {}
f6(f6);
f6(v16);
try { new Int16Array(10, v16, F0); } catch (e) {}
new Int16Array(10);
new Uint32Array(97);
9 & 9;
new Uint8ClampedArray(9);
const v32 = [];
const v33 = [5.0,0.15731719625813334];
try { v33.copyWithin(Uint8ClampedArray, v33); } catch (e) {}
v33.minimum = v32;
const v37 = this.WebAssembly.Memory;
try { new v37(v3); } catch (e) {}
const v39 = new v37(v33);
v39.buffer;
const v41 = v39.type(v39, this, v39, v39);
v41.d = v41;
gc();
