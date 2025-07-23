function f1() {
    const o2 = {
    };
    return o2;
}
const v3 = f1();
const v4 = f1();
function f5(a6) {
    a6.length = a6;
    return v4;
}
let v7;
try { v7 = f5.call(); } catch (e) {}
f5(f1);
const v10 = f5(v3).__defineSetter__;
try { v10(v10, v10); } catch (e) {}
const v12 = f5("w");
try { Float32Array(v12, v7, 1024); } catch (e) {}
const v16 = new Float32Array(1024);
for (const v17 in v16) {
}
gc();
