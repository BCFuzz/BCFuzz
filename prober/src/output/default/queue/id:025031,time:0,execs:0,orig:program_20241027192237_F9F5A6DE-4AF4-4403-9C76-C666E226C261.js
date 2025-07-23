function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [-9.9625599334631,-2.220446049250313e-16,-131.7149305221859,3.0,-0.0,2.0,261.88847826137635,0.8232306701458764];
    Uint32Array[1] = [2.0];
    const v5 = new Uint32Array(Uint32Array);
    const v7 = new Uint16Array(v2);
    v7.lastIndexOf(...v5);
}
new F0();
gc();
