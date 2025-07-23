function f3() {
    return f3;
}
const v6 = new Uint8Array(257);
let v7;
try { v7 = v6.slice(v6, 257); } catch (e) {}
try { new Float32Array(f3, v6, 12923); } catch (e) {}
new Float32Array(v7);
-2147483647 - 1827;
const v15 = new Float32Array(1827);
class C16 {
}
v15.length;
const v19 = new Float32Array();
try { v19.keys(); } catch (e) {}
const v22 = Proxy.revocable(v19, C16);
v22.b = v22;
gc();
