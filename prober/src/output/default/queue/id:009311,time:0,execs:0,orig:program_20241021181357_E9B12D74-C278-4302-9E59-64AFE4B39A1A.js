const v1 = [9,-2147483648,2147483649,5276,-2005945745,1024,65535];
const o2 = {
};
function f3() {
    return 1.6059130891089935e+308;
}
o2.constructor = f3;
const t7 = o2.constructor;
t7().toExponential(v1);
gc();
