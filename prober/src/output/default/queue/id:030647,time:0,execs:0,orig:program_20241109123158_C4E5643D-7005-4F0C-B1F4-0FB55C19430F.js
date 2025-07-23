for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f11() {
    for (let [i19, i20] = (() => {
            const v17 = createGlobalObject().WebAssembly.instantiate();
            v17.then(v17, createGlobalObject);
            return [0, 10];
        })();
        i19 != i20;
        i20--) {
    }
}
const v28 = Symbol.toPrimitive;
for (let [i81, i82] = (() => {
        for (let i31 = 0, i32 = 10;
            i31 < i32;
            (() => {
                for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
                }
                for (let i48 = 0, i49 = 10; i48 < i49; i49--) {
                }
                i32--;
            })()) {
        }
        for (let i61 = 0, i62 = 10; i61 < i62; i62--) {
        }
        for (let i73 = -3, i74 = 10; i73 < i74; i74--) {
        }
        return [0, 10];
    })();
    i81 < i82;
    i82--) {
}
for (let i91 = 0, i92 = 10; i91 < i92; i92--) {
}
for (let i101 = -3, i102 = 10; i101 < i102; i102--) {
}
for (let [i131, i132] = (() => {
        for (let i112 = 0, i113 = 10; i112 < i113; i113--) {
        }
        for (let i121 = 16, i122 = 16; -13369 !== i122; i122--) {
        }
        return [-3, 10];
    })();
    i131 < i132;
    i132--) {
}
Uint32Array[v28] = f11;
const v141 = `
    let v142 = 1851;
    for (let v143 = 0; v143 < 5; v143++) {
        v142 = v143;
    }
`;
const v144 = v141.split(8);
v144[1] = Uint32Array;
const v145 = [2.0,-4.0];
function f146(a147, a148, a149) {
    return a148;
}
const v150 = f146();
function F151(a153, a154, a155, a156) {
    if (!new.target) { throw 'must be called with new'; }
    try { a156.constructor(v144); } catch (e) {}
}
Object.defineProperty(F151, "constructor", { enumerable: true, value: runString });
new F151(v145, f146, v150, F151);
gc();
