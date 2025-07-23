const v1 = /[a-zA-Z0-9]((?<!)(?<a>.)\k<a>+)/mdvgis;
v1[Symbol.toPrimitive] = Date;
v1.exec(v1);
gc();
