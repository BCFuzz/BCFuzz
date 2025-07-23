let v3 = Int8Array;
class C5 {
    constructor(a7, a8, a9, a10) {
        for (let i = 0; i < 25; i++) {
            let v11 = 9;
            const v13 = new Uint8ClampedArray(v11);
            let v14 = 3;
            ({"b":v14,"buffer":v14,"byteLength":v11,...v3} = v13);
            const v15 = [4.0,Infinity,0.5618997475165836,0.43493627721911254,3.0,NaN,-0.0,4.0];
            const v16 = [0.8137957067341389,0.011353854179586897,1000000000.0,-5.0,Infinity,0.24802319623700397];
            const o17 = {
                __proto__: v15,
                [v16]: v15,
            };
            new Uint8Array(a10);
        }
    }
}
const v19 = new C5();
new C5(1000, -9007199254740991, v19, 4294967296);
gc();
