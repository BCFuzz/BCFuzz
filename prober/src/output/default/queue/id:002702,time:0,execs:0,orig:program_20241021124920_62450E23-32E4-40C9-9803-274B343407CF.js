const v1 = [268435439];
const v2 = /\u{12345}OhEC/dys;
const v3 = v2.toString;
try { v3(v2, v3, v1, v2, "c"); } catch (e) {}
for (let v5 = 0; v5 < 10; v5++) {
    for (const v6 of "c") {
        v6.concat(v1);
    }
}
gc();
