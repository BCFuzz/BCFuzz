function f3() {
    return -65536;
}
try { f3.toString(); } catch (e) {}
new Int8Array(257);
try { new Float64Array(-3.0, Float64Array, -3.0); } catch (e) {}
new Float64Array(2494);
new Int8Array(193);
for (let [i38, i39] = (() => {
        let v22 = 3578;
        v22++;
        const v25 = new Uint16Array(v22);
        for (const v26 of v25) {
            v26 * v26;
        }
        const v29 = `
            for (let v30 = 0; v30 < 5; v30++) {
                function F31(a33, a34) {
                    if (!new.target) { throw 'must be called with new'; }
                }
            }
        `;
        eval(v29);
        return [0, 10];
    })();
    i38 < i39;
    i38 - i38, i39--) {
}
gc();
