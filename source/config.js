/* 
 * This defines the namespace for the UCUM classes and provides
 * a place for the definition of global variables and constants.
 *
 * The javascript for this UCUM implementation uses syntax as
 * defined by the ECMAScript 6 standard
 */

//var Utab = require('/home/lmericle/ucum/dist/es5/unitTables.js');
//var Pfx = require('/home/lmericle/ucum/dist/es5/prefix.js');

export var Ucum = {  // Namespace for UCUM classes

  /**
   *  Flag indicating whether or not we're using case sensitive labels
   *  I don't think we need this.  I think we're just going with
   *  case sensitive, per Clem.   Gunther's code has this flag, but I
   *  am removing it, at least for now.  lm, 6/2016
   */
  //caseSensitive_: true ,

  /**
   *  The number of elements in a Dimension array.   Currently this
   *  is set as a configuration variable, but when we get to the point
   *  of loading the unit definitions from a file, this value will be
   *  set from that.
   */
  dimLen_: 7,

  /**
   *  The number of decimal digits to be displayed for a unit amount
   */
  decDigits_ : 4,

  /**
   * The string used to separate a unit code and unit name when they
   * are displayed together
   */
  codeSep_ : ' - '

}


