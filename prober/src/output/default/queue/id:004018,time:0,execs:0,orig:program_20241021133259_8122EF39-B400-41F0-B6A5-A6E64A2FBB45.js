function f0() {
}
new Float32Array(46);
new Float64Array(512);
const v10 = [-2.220446049250313e-16,[-256,2,-13,-50424,536870887,-256],0.4545490646025385];
for (const v11 in v10) {
    v10.length = v11;
}
new BigUint64Array(1536);
class C15 extends Float32Array {
    #valueOf(a17, a18, a19, a20) {
        const v21 = [this,512];
        const v22 = [512];
        [Float32Array,v22,v22] < 46;
        return v21;
    }
    static e = Float64Array;
}
new C15();
const v30 = new C15();
new C15();
function F33(a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
}
const v38 = new F33();
const v39 = new F33();
const v43 = `
    const v45 = ("-13")[undefined];
    const o46 = {
    };
    o46.h = v45;
    const o47 = {
    };
    o47.h = v45;
    o47.e = v45;
    const o48 = {
    };
    class C49 {
        #o(a51) {
        }
    }
    const v53 = Symbol.toPrimitive;
    o48.h = v45;
    function f55(a56, a57) {
        const o58 = {
            "e": a57,
        };
    }
    const v59 = f55(v45, v38);
    f55(undefined, v39);
    f55(v59, v38);
    const v64 = Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect,Reflect]);
    const o67 = {
        "maxByteLength": 3411385984,
    };
    const v69 = new ArrayBuffer(9, o67);
    new Uint8ClampedArray(v69);
    v64.reverse();
    o48.e = v45;
    o48.a = v43;
    const o73 = {
    };
    o73.h = v45;
    o73.e = v45;
    o73.d = 512;
    class C74 {
        static #a;
        #toString(a76, a77, a78) {
            f55(this, v53);
            return v30;
        }
    }
`;
eval(v43);
gc();
