vektor
---
A robotics-focused linear algebra module

### About
This code was officially presented at JSConf US 2013. There are slides from the talk here: [AI.js: Robots with Brains](https://t.co/6A5cu2JF58)

### Install
`npm install vektor`

### Running Tests
`npm test`

### Vectors

#### initializing a vector
```` js
var v = require('vektor').vector;

var a = new v(1, 0, 0);
// or
var b = new v({x: 1, y: 2, z: 3});
````

Note: Vectors can be initialized with 2 or 3 arguments only.

#### add two vectors
```` js
var c = a.add(b); // [2, 2, 3]
````

#### dot product
```` js
var c = a.dot(b); // 1
````

#### cross product
```` js
var c = a.cross(b); // [0, -3, 2]
````

#### distance between two vectors
```` js
var c = a.distanceFrom(b); // 3.6
````

#### length
```` js
var c = b.length(); // 3.74
````

#### scale
```` js
var c = b.scale(2); // [2, 4, 6]
````

-----

### Matrices

#### initializing a matrix
Note: matrices can be of any size

```` js
var m = require('vektor').matrix;

var A = new m(2); // a 2x2 empty matrix
var B = new m(2, 3); // a 2x3 empty matrix
var I_3 = new m(3, 3, true); // a 3x3 identity matrix
````

#### setting values
```` js
/* our matrices:

    A = [ [1, 2],
          [3, 4] ];

    B = [ [5, 6],
          [7, 8] ];
*/

A.set(0,0,1);
A.set(0,1,2);
A.set(1,0,3);
A.set(1,1,4);

B.set(0,0,5);
B.set(0,1,6);
B.set(1,0,7);
B.set(1,1,8);
````

#### getting values
```` js
var c = A.get(1,1); // 4
````

#### scaling a matrix
```` js
var C = A.scale(-1); // A = [ [-1, -2], [-3, -4] ]
````

#### adding two matrices
```` js
var C = A.add(B); // C = [ [6, 8], [10, 12] ]
````

#### multiplying two matrices
```` js
var C = A.dot(B); // C = [ [19, 22], [43, 50] ]
````

#### getting the transpose
```` js
var C = A.transpose(); // C = [ [1, 3], [2, 4] ]
````

#### calculating the determinant
```` js
var c = A.det(); // c = -2
````

#### calculating the trace
Note: only works with square matrices... for now.
```` js
var c = A.trace(); // c = 5
````

### Homogenous Matrices (aka Transforms)
* Translations

### Rotations

#### initializing a rotation matrix
````js
var r = require('vektor').rotate;

// if the second argument is true, the first argument is in degrees
var a = new r.RotX(90, true); // matrix for a 90 degree rotation about the x axis
var b = new r.RotY(180, true); // matrix for a 180 degree rotation about the y axis
// if the second argument is false or not set, the first argument is in radians
var c = new r.RotZ(2 * Math.PI); // matrix for a 2 Pi radians (360 degrees) rotation about the z axis
assert.deepEqual(new r.RotX(0, true), new r.RotX(360, true));
assert.deepEqual(new r.RotX(0), new r.RotX(2 * Math.PI));
````

#### rotate a vector around axes
````js
var v = require('vektor').vector;
var vector = new v([1,0,0]); // original vector

// Rotate (1, 0, 0) by 90 degrees on the Z axis and then by 45 degrees on the X axis

var rotationMatrix = new r.RotZ(Math.PI/2); // z-axis rotation matrix for Pi/2 radians (90 degrees)
vector = rotationMatrix.dot(vector); // multiply rotation matrix by vector to rotate the vector
rotationMatrix = new r.RotX(45, true); // y-axis rotation matrix for 45 degrees (Pi/4 radians)
vector = rotationMatrix.dot(vector);
var coordinates = vector.v // [ -0.707106781187, -0.500000000001, 0.500000000001 ]
````

### Examples
* [Manny the Manipulator](https://github.com/rockbot/manny)

### Coming Soon
* Tutorials :-)

### Contributions
_Please, please, please help make this module more robust!_

* Send in pull requests (make sure the tests pass)
* Discuss additional features in the Issues section
* Add your name and Github handle here:
    * Rick Waldron - [rwaldron](https://github.com/rwaldron)
    * Forbes Lindsay - [ForbesLindesay](https://github.com/ForbesLindesay)
    * Alexander Beletsky - [alexanderbeletsky](https://github.com/alexanderbeletsky)
    * Bill Mills - [BillMills](https://github.com/BillMills)
