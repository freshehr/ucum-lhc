(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ucumPkg = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "prefixes": [
    {
      "code_": "E",
      "ciCode_": "EX",
      "name_": "exa",
      "printSymbol_": "E",
      "value_": 1000000000000000000,
      "exp_": "18"
    },
    {
      "code_": "G",
      "ciCode_": "GA",
      "name_": "giga",
      "printSymbol_": "G",
      "value_": 1000000000,
      "exp_": "9"
    },
    {
      "code_": "Gi",
      "ciCode_": "GIB",
      "name_": "gibi",
      "printSymbol_": "Gi",
      "value_": 1073741824,
      "exp_": null
    },
    {
      "code_": "Ki",
      "ciCode_": "KIB",
      "name_": "kibi",
      "printSymbol_": "Ki",
      "value_": 1024,
      "exp_": null
    },
    {
      "code_": "M",
      "ciCode_": "MA",
      "name_": "mega",
      "printSymbol_": "M",
      "value_": 1000000,
      "exp_": "6"
    },
    {
      "code_": "Mi",
      "ciCode_": "MIB",
      "name_": "mebi",
      "printSymbol_": "Mi",
      "value_": 1048576,
      "exp_": null
    },
    {
      "code_": "P",
      "ciCode_": "PT",
      "name_": "peta",
      "printSymbol_": "P",
      "value_": 1000000000000000,
      "exp_": "15"
    },
    {
      "code_": "T",
      "ciCode_": "TR",
      "name_": "tera",
      "printSymbol_": "T",
      "value_": 1000000000000,
      "exp_": "12"
    },
    {
      "code_": "Ti",
      "ciCode_": "TIB",
      "name_": "tebi",
      "printSymbol_": "Ti",
      "value_": 1099511627776,
      "exp_": null
    },
    {
      "code_": "Y",
      "ciCode_": "YA",
      "name_": "yotta",
      "printSymbol_": "Y",
      "value_": 1e+24,
      "exp_": "24"
    },
    {
      "code_": "Z",
      "ciCode_": "ZA",
      "name_": "zetta",
      "printSymbol_": "Z",
      "value_": 1e+21,
      "exp_": "21"
    },
    {
      "code_": "a",
      "ciCode_": "A",
      "name_": "atto",
      "printSymbol_": "a",
      "value_": 1e-18,
      "exp_": "-18"
    },
    {
      "code_": "c",
      "ciCode_": "C",
      "name_": "centi",
      "printSymbol_": "c",
      "value_": 0.01,
      "exp_": "-2"
    },
    {
      "code_": "d",
      "ciCode_": "D",
      "name_": "deci",
      "printSymbol_": "d",
      "value_": 0.1,
      "exp_": "-1"
    },
    {
      "code_": "da",
      "ciCode_": "DA",
      "name_": "deka",
      "printSymbol_": "da",
      "value_": 10,
      "exp_": "1"
    },
    {
      "code_": "f",
      "ciCode_": "F",
      "name_": "femto",
      "printSymbol_": "f",
      "value_": 1e-15,
      "exp_": "-15"
    },
    {
      "code_": "h",
      "ciCode_": "H",
      "name_": "hecto",
      "printSymbol_": "h",
      "value_": 100,
      "exp_": "2"
    },
    {
      "code_": "k",
      "ciCode_": "K",
      "name_": "kilo",
      "printSymbol_": "k",
      "value_": 1000,
      "exp_": "3"
    },
    {
      "code_": "m",
      "ciCode_": "M",
      "name_": "milli",
      "printSymbol_": "m",
      "value_": 0.001,
      "exp_": "-3"
    },
    {
      "code_": "n",
      "ciCode_": "N",
      "name_": "nano",
      "printSymbol_": "n",
      "value_": 1e-9,
      "exp_": "-9"
    },
    {
      "code_": "p",
      "ciCode_": "P",
      "name_": "pico",
      "printSymbol_": "p",
      "value_": 1e-12,
      "exp_": "-12"
    },
    {
      "code_": "u",
      "ciCode_": "U",
      "name_": "micro",
      "printSymbol_": "μ",
      "value_": 0.000001,
      "exp_": "-6"
    },
    {
      "code_": "y",
      "ciCode_": "YO",
      "name_": "yocto",
      "printSymbol_": "y",
      "value_": 1.0000000000000001e-24,
      "exp_": "-24"
    },
    {
      "code_": "z",
      "ciCode_": "ZO",
      "name_": "zepto",
      "printSymbol_": "z",
      "value_": 1e-21,
      "exp_": "-21"
    }
  ],
  "units": [
    {
      "isBase_": true,
      "name_": "meter",
      "csCode_": "m",
      "ciCode_": "M",
      "property_": "length",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "m",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meters; metres; distance",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "unit of length = 1.09361 yards",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "second - time",
      "csCode_": "s",
      "ciCode_": "S",
      "property_": "time",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "s",
      "class_": null,
      "isMetric_": false,
      "variable_": "T",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "seconds",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram",
      "csCode_": "g",
      "ciCode_": "G",
      "property_": "mass",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "grams; gm",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "radian",
      "csCode_": "rad",
      "ciCode_": "RAD",
      "property_": "plane angle",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          1,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "rad",
      "class_": null,
      "isMetric_": false,
      "variable_": "A",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "radians",
      "source_": "UCUM",
      "loincProperty_": "Angle",
      "category_": "Clinical",
      "guidance_": "unit of angular measure where 1 radian = 1/2π turn =  57.296 degrees. ",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "degree Kelvin",
      "csCode_": "K",
      "ciCode_": "K",
      "property_": "temperature",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          1,
          0,
          0
        ]
      },
      "printSymbol_": "K",
      "class_": null,
      "isMetric_": false,
      "variable_": "C",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Kelvin; degrees",
      "source_": "UCUM",
      "loincProperty_": "Temp",
      "category_": "Clinical",
      "guidance_": "absolute, thermodynamic temperature scale ",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "coulomb",
      "csCode_": "C",
      "ciCode_": "C",
      "property_": "electric charge",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ]
      },
      "printSymbol_": "C",
      "class_": null,
      "isMetric_": false,
      "variable_": "Q",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "coulombs",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "defined as amount of 1 electron charge = 6.2415093×10^18 e, and equivalent to 1 Ampere-second",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "candela",
      "csCode_": "cd",
      "ciCode_": "CD",
      "property_": "luminous intensity",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          1
        ]
      },
      "printSymbol_": "cd",
      "class_": null,
      "isMetric_": false,
      "variable_": "F",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "candelas",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "SI base unit of luminous intensity",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "the number ten for arbitrary powers",
      "csCode_": "10*",
      "ciCode_": "10*",
      "property_": "number",
      "magnitude_": "10",
      "dim_": null,
      "printSymbol_": "10",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^; 10 to the arbitrary powers",
      "source_": "UCUM",
      "loincProperty_": "Num",
      "category_": "Clinical",
      "guidance_": "10* by itself is the same as 10, but users can add digits after the *. For example, 10*3 = 1000. The unit testing conversion all works. ",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "the number ten for arbitrary powers",
      "csCode_": "10^",
      "ciCode_": "10^",
      "property_": "number",
      "magnitude_": "10",
      "dim_": null,
      "printSymbol_": "10",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10*; 10 to the arbitrary power",
      "source_": "UCUM",
      "loincProperty_": "Num",
      "category_": "Clinical",
      "guidance_": "10* by itself is the same as 10, but users can add digits after the *. For example, 10*3 = 1000. The unit testing conversion all works. ",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "the number pi",
      "csCode_": "[pi]",
      "ciCode_": "[PI]",
      "property_": "number",
      "magnitude_": 3.141592653589793,
      "dim_": null,
      "printSymbol_": "π",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "π",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Constant",
      "guidance_": "a mathematical constant; the ratio of a circle's circumference to its diameter ≈ 3.14159",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "3.1415926535897932384626433832795028841971693993751058209749445923",
      "baseFactor_": 3.141592653589793,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "",
      "csCode_": "%",
      "ciCode_": "%",
      "property_": "fraction",
      "magnitude_": 0.01,
      "dim_": null,
      "printSymbol_": "%",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "percents",
      "source_": "UCUM",
      "loincProperty_": "FR; NFR; MFR; CFR; SFR Rto; etc. ",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*-2",
      "ciUnitString_": "10*-2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "parts per thousand",
      "csCode_": "[ppth]",
      "ciCode_": "[PPTH]",
      "property_": "fraction",
      "magnitude_": 0.001,
      "dim_": null,
      "printSymbol_": "ppth",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ppth; 10^-3",
      "source_": "UCUM",
      "loincProperty_": "MCnc; MCnt",
      "category_": "Clinical",
      "guidance_": "[ppth] is often used in solution concentrations as 1 g/L or 1 g/kg. \n\nCan be ambigous and would be better if the metric units was used directly. ",
      "csUnitString_": "10*-3",
      "ciUnitString_": "10*-3",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "parts per million",
      "csCode_": "[ppm]",
      "ciCode_": "[PPM]",
      "property_": "fraction",
      "magnitude_": 0.000001,
      "dim_": null,
      "printSymbol_": "ppm",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ppm; 10^-6",
      "source_": "UCUM",
      "loincProperty_": "MCnt; MCnc; SFr",
      "category_": "Clinical",
      "guidance_": "[ppm] is often used in solution concentrations as 1 mg/L  or 1 mg/kg. Also used to express mole fractions as 1 mmol/mol.\n\n[ppm] is also used in nuclear magnetic resonance (NMR) to represent chemical shift - the difference of a measured frequency in parts per million from the reference frequency. \n\nCan be ambigous and would be better if the metric units was used directly. ",
      "csUnitString_": "10*-6",
      "ciUnitString_": "10*-6",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "parts per billion",
      "csCode_": "[ppb]",
      "ciCode_": "[PPB]",
      "property_": "fraction",
      "magnitude_": 1e-9,
      "dim_": null,
      "printSymbol_": "ppb",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ppb; 10^-9",
      "source_": "UCUM",
      "loincProperty_": "MCnt; MCnc; SFr",
      "category_": "Clinical",
      "guidance_": "[ppb] is often used in solution concentrations as 1 ug/L  or 1 ug/kg. Also used to express mole fractions as 1 umol/mol.\n\nCan be ambigous and would be better if the metric units was used directly. ",
      "csUnitString_": "10*-9",
      "ciUnitString_": "10*-9",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "parts per trillion",
      "csCode_": "[pptr]",
      "ciCode_": "[PPTR]",
      "property_": "fraction",
      "magnitude_": 1e-12,
      "dim_": null,
      "printSymbol_": "pptr",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pptr; 10^-12",
      "source_": "UCUM",
      "loincProperty_": "MCnt; MCnc; SFr",
      "category_": "Clinical",
      "guidance_": "[pptr] is often used in solution concentrations as 1 ng/L or 1 ng/kg. Also used to express mole fractions as 1 nmol/mol.\n\nCan be ambigous and would be better if the metric units was used directly. ",
      "csUnitString_": "10*-12",
      "ciUnitString_": "10*-12",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mole",
      "csCode_": "mol",
      "ciCode_": "MOL",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+23,
      "dim_": null,
      "printSymbol_": "mol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "moles",
      "source_": "UCUM",
      "loincProperty_": "Sub",
      "category_": "Clinical",
      "guidance_": "Measure the number of molecules ",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "steradian - solid angle",
      "csCode_": "sr",
      "ciCode_": "SR",
      "property_": "solid angle",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          2,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "sr",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "square radian; rad2; rad^2",
      "source_": "UCUM",
      "loincProperty_": "Angle",
      "category_": "Clinical",
      "guidance_": "unit of solid angle in three-dimensional geometry analagous to radian; used in photometry which measures the perceived brightness of object by human eye (e.g. radiant intensity = watt/steradian)",
      "csUnitString_": "rad2",
      "ciUnitString_": "RAD2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "hertz",
      "csCode_": "Hz",
      "ciCode_": "HZ",
      "property_": "frequency",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Hz",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Herz; frequency; frequencies",
      "source_": "UCUM",
      "loincProperty_": "Freq; Num",
      "category_": "Clinical",
      "guidance_": "equal to one cycle per second",
      "csUnitString_": "s-1",
      "ciUnitString_": "S-1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "newton",
      "csCode_": "N",
      "ciCode_": "N",
      "property_": "force",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "N",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Newtons",
      "source_": "UCUM",
      "loincProperty_": "Force",
      "category_": "Clinical",
      "guidance_": "unit of force with base units kg.m/s2",
      "csUnitString_": "kg.m/s2",
      "ciUnitString_": "KG.M/S2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picoampere",
      "csCode_": "Pa",
      "ciCode_": "PAL",
      "property_": "pressure",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Pa",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picoamperes",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "equal to 10^-12 amperes",
      "csUnitString_": "N/m2",
      "ciUnitString_": "N/M2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "joule",
      "csCode_": "J",
      "ciCode_": "J",
      "property_": "energy",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "J",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "joules",
      "source_": "UCUM",
      "loincProperty_": "Enrg",
      "category_": "Clinical",
      "guidance_": "unit of energy defined as the work required to move an object 1 m with a force of 1 N (N.m) or an electric charge of 1 C through 1 V (C.V), or to produce 1 W for 1 s (W.s) ",
      "csUnitString_": "N.m",
      "ciUnitString_": "N.M",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "watt",
      "csCode_": "W",
      "ciCode_": "W",
      "property_": "power",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          2,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "W",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "watts",
      "source_": "UCUM",
      "loincProperty_": "EngRat",
      "category_": "Clinical",
      "guidance_": "unit of power equal to 1 Joule per second (J/s) =  kg⋅m2⋅s−3",
      "csUnitString_": "J/s",
      "ciUnitString_": "J/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Ampere",
      "csCode_": "A",
      "ciCode_": "A",
      "property_": "electric current",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          1,
          0
        ]
      },
      "printSymbol_": "A",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Amperes",
      "source_": "UCUM",
      "loincProperty_": "ElpotRat",
      "category_": "Clinical",
      "guidance_": "unit of electric current equal to flow rate of electrons equal to 16.2415×10^18 elementary charges moving past a boundary in one second or 1 Coulomb/second",
      "csUnitString_": "C/s",
      "ciUnitString_": "C/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "volt",
      "csCode_": "V",
      "ciCode_": "V",
      "property_": "electric potential",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "V",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "volts",
      "source_": "UCUM",
      "loincProperty_": "Elpot",
      "category_": "Clinical",
      "guidance_": "unit of electric potential (voltage) = 1 Joule per Coulomb (J/C)",
      "csUnitString_": "J/C",
      "ciUnitString_": "J/C",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "farad",
      "csCode_": "F",
      "ciCode_": "F",
      "property_": "electric capacitance",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -2,
          2,
          -1,
          0,
          0,
          2,
          0
        ]
      },
      "printSymbol_": "F",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "farads; electric capacitance",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "CGS unit of electric capacitance with base units C/V (Coulomb per Volt)",
      "csUnitString_": "C/V",
      "ciUnitString_": "C/V",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "ohm",
      "csCode_": "Ohm",
      "ciCode_": "OHM",
      "property_": "electric resistance",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          2,
          -1,
          1,
          0,
          0,
          -2,
          0
        ]
      },
      "printSymbol_": "Ω",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Ω; resistance; ohms",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of electrical resistance with units of Volt per Ampere",
      "csUnitString_": "V/A",
      "ciUnitString_": "V/A",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "siemens",
      "csCode_": "S",
      "ciCode_": "SIE",
      "property_": "electric conductance",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -2,
          1,
          -1,
          0,
          0,
          2,
          0
        ]
      },
      "printSymbol_": "S",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Reciprocal ohm; mho; Ω−1; conductance",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of electric conductance (the inverse of electrical resistance) equal to ohm^-1",
      "csUnitString_": "Ohm-1",
      "ciUnitString_": "OHM-1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "weber",
      "csCode_": "Wb",
      "ciCode_": "WB",
      "property_": "magnetic flux",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          2,
          -1,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "Wb",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "magnetic flux; webers",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of magnetic flux equal to Volt second",
      "csUnitString_": "V.s",
      "ciUnitString_": "V.S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "degree Celsius",
      "csCode_": "Cel",
      "ciCode_": "CEL",
      "property_": "temperature",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          1,
          0,
          0
        ]
      },
      "printSymbol_": "°C",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "Cel",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "°C; degrees",
      "source_": "UCUM",
      "loincProperty_": "Temp",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "K",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "tesla",
      "csCode_": "T",
      "ciCode_": "T",
      "property_": "magnetic flux density",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "T",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Teslas; magnetic field",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "SI unit of magnetic field strength for magnetic field B equal to 1 Weber/square meter =  1 kg/(s2*A)",
      "csUnitString_": "Wb/m2",
      "ciUnitString_": "WB/M2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "henry",
      "csCode_": "H",
      "ciCode_": "H",
      "property_": "inductance",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          2,
          0,
          1,
          0,
          0,
          -2,
          0
        ]
      },
      "printSymbol_": "H",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "henries; inductance",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of electrical inductance; usually expressed in millihenrys (mH) or microhenrys (uH).",
      "csUnitString_": "Wb/A",
      "ciUnitString_": "WB/A",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "lumen",
      "csCode_": "lm",
      "ciCode_": "LM",
      "property_": "luminous flux",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          2,
          0,
          0,
          1
        ]
      },
      "printSymbol_": "lm",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "luminous flux; lumens",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of luminous flux defined as 1 lm = 1 cd⋅sr (candela times sphere)",
      "csUnitString_": "cd.sr",
      "ciUnitString_": "CD.SR",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "lux",
      "csCode_": "lx",
      "ciCode_": "LX",
      "property_": "illuminance",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          0,
          2,
          0,
          0,
          1
        ]
      },
      "printSymbol_": "lx",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "illuminance; luxes",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of illuminance equal to one lumen per square meter. ",
      "csUnitString_": "lm/m2",
      "ciUnitString_": "LM/M2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "becquerel",
      "csCode_": "Bq",
      "ciCode_": "BQ",
      "property_": "radioactivity",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Bq",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "activity; radiation; becquerels",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "measure of the atomic radiation rate with units s^-1",
      "csUnitString_": "s-1",
      "ciUnitString_": "S-1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "gray",
      "csCode_": "Gy",
      "ciCode_": "GY",
      "property_": "energy dose",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Gy",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "absorbed doses; ionizing radiation doses; kerma; grays",
      "source_": "UCUM",
      "loincProperty_": "EngCnt",
      "category_": "Clinical",
      "guidance_": "unit of ionizing radiation dose with base units of 1 joule of radiation energy per kilogram of matter",
      "csUnitString_": "J/kg",
      "ciUnitString_": "J/KG",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "sievert",
      "csCode_": "Sv",
      "ciCode_": "SV",
      "property_": "dose equivalent",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Sv",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "sieverts; radiation dose quantities; equivalent doses; effective dose; operational dose; committed dose",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "SI unit for radiation dose equivalent equal to 1 Joule/kilogram.",
      "csUnitString_": "J/kg",
      "ciUnitString_": "J/KG",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "degree - plane angle",
      "csCode_": "deg",
      "ciCode_": "DEG",
      "property_": "plane angle",
      "magnitude_": 0.017453292519943295,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          1,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "°",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "°; degree of arc; arc degree; arcdegree; angle",
      "source_": "UCUM",
      "loincProperty_": "Angle",
      "category_": "Clinical",
      "guidance_": "one degree is equivalent to π/180 radians.",
      "csUnitString_": "[pi].rad/360",
      "ciUnitString_": "[PI].RAD/360",
      "baseFactorStr_": "2",
      "baseFactor_": "2",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "gon",
      "csCode_": "gon",
      "ciCode_": "GON",
      "property_": "plane angle",
      "magnitude_": 0.015707963267948967,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          1,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "□<sup>g</sup>",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gon (grade); gons",
      "source_": "UCUM",
      "loincProperty_": "Angle",
      "category_": "Nonclinical",
      "guidance_": "unit of plane angle measurement equal to 1/400 circle",
      "csUnitString_": "deg",
      "ciUnitString_": "DEG",
      "baseFactorStr_": "0.9",
      "baseFactor_": "0.9",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "arc minute",
      "csCode_": "'",
      "ciCode_": "'",
      "property_": "plane angle",
      "magnitude_": 0.0002908882086657216,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          1,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "'",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "arcminutes; arcmin; arc minutes; arc mins",
      "source_": "UCUM",
      "loincProperty_": "Angle",
      "category_": "Clinical",
      "guidance_": "equal to 1/60 degree; used in optometry and opthamology (e.g. visual acuity tests)",
      "csUnitString_": "deg/60",
      "ciUnitString_": "DEG/60",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "arc second",
      "csCode_": "''",
      "ciCode_": "''",
      "property_": "plane angle",
      "magnitude_": 0.00000484813681109536,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          1,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "''",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "arcseconds; arcsecs",
      "source_": "UCUM",
      "loincProperty_": "Angle",
      "category_": "Clinical",
      "guidance_": "equal to 1/60 arcminute = 1/3600 degree; used in optometry and opthamology (e.g. visual acuity tests)",
      "csUnitString_": "'/60",
      "ciUnitString_": "'/60",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters",
      "csCode_": "l",
      "ciCode_": "L",
      "property_": "volume",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "l",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cubic decimeters; decimeters cubed; decimetres; dm3; dm^3; litres; liters, LT ",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "Because lower case \"l\" can be read as the number \"1\", though this is a valid UCUM units. UCUM strongly reccomends using  \"L\"",
      "csUnitString_": "dm3",
      "ciUnitString_": "DM3",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters",
      "csCode_": "L",
      "ciCode_": "L",
      "property_": "volume",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cubic decimeters; decimeters cubed; decimetres; dm3; dm^3; litres; liters, LT ",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "Because lower case \"l\" can be read as the number \"1\", though this is a valid UCUM units. UCUM strongly reccomends using  \"L\"",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "are",
      "csCode_": "ar",
      "ciCode_": "AR",
      "property_": "area",
      "magnitude_": 100,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "a",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "100 m2; 100 m^2; 100 square meter; meters squared; metres",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "metric base unit for area defined as 100 m^2",
      "csUnitString_": "m2",
      "ciUnitString_": "M2",
      "baseFactorStr_": "100",
      "baseFactor_": "100",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "minute",
      "csCode_": "min",
      "ciCode_": "MIN",
      "property_": "time",
      "magnitude_": 60,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "min",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "minutes",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "s",
      "ciUnitString_": "S",
      "baseFactorStr_": "60",
      "baseFactor_": "60",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "hour",
      "csCode_": "h",
      "ciCode_": "HR",
      "property_": "time",
      "magnitude_": 3600,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "h",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "hours; hrs; age",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "min",
      "ciUnitString_": "MIN",
      "baseFactorStr_": "60",
      "baseFactor_": "60",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "day",
      "csCode_": "d",
      "ciCode_": "D",
      "property_": "time",
      "magnitude_": 86400,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "d",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "days; age; dy; 24 hours; 24 hrs",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "h",
      "ciUnitString_": "HR",
      "baseFactorStr_": "24",
      "baseFactor_": "24",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "tropical year",
      "csCode_": "a_t",
      "ciCode_": "ANN_T",
      "property_": "time",
      "magnitude_": 31556925.216,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "a<sub>t</sub>",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "solar years; a tropical; years",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "has an average of 365.242181 days but is constantly changing.",
      "csUnitString_": "d",
      "ciUnitString_": "D",
      "baseFactorStr_": "365.24219",
      "baseFactor_": "365.24219",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mean Julian year",
      "csCode_": "a_j",
      "ciCode_": "ANN_J",
      "property_": "time",
      "magnitude_": 31557600,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "a<sub>j</sub>",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mean Julian yr; a julian; years",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "has an average of 365.25 days, and in everyday use, has been replaced by the Gregorian year. However, this unit is used in astronomy to calculate light year. ",
      "csUnitString_": "d",
      "ciUnitString_": "D",
      "baseFactorStr_": "365.25",
      "baseFactor_": "365.25",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mean Gregorian year",
      "csCode_": "a_g",
      "ciCode_": "ANN_G",
      "property_": "time",
      "magnitude_": 31556952,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "a<sub>g</sub>",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mean Gregorian yr; a gregorian; years",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "has an average of 365.2425 days and is the most internationally used civil calendar.",
      "csUnitString_": "d",
      "ciUnitString_": "D",
      "baseFactorStr_": "365.2425",
      "baseFactor_": "365.2425",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "year",
      "csCode_": "a",
      "ciCode_": "ANN",
      "property_": "time",
      "magnitude_": 31557600,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "a",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "years; a; yr, yrs; annum",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "a_j",
      "ciUnitString_": "ANN_J",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "week",
      "csCode_": "wk",
      "ciCode_": "WK",
      "property_": "time",
      "magnitude_": 604800,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "wk",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "weeks; wks",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "d",
      "ciUnitString_": "D",
      "baseFactorStr_": "7",
      "baseFactor_": "7",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "synodal month",
      "csCode_": "mo_s",
      "ciCode_": "MO_S",
      "property_": "time",
      "magnitude_": 2551442.976,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mo<sub>s</sub>",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Moon; synodic month; lunar month; mo-s; mo s; months; moons",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Nonclinical",
      "guidance_": "has an average of 29.53 days per month, unit used in astronomy",
      "csUnitString_": "d",
      "ciUnitString_": "D",
      "baseFactorStr_": "29.53059",
      "baseFactor_": "29.53059",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mean Julian month",
      "csCode_": "mo_j",
      "ciCode_": "MO_J",
      "property_": "time",
      "magnitude_": 2629800,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mo<sub>j</sub>",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mo-julian; mo Julian; months",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "has an average of 30.435 days per month",
      "csUnitString_": "a_j/12",
      "ciUnitString_": "ANN_J/12",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mean Gregorian month",
      "csCode_": "mo_g",
      "ciCode_": "MO_G",
      "property_": "time",
      "magnitude_": 2629746,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mo<sub>g</sub>",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "months; month-gregorian; mo-gregorian",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "has an average 30.436875 days per month and is from the most internationally used civil calendar.",
      "csUnitString_": "a_g/12",
      "ciUnitString_": "ANN_G/12",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "month",
      "csCode_": "mo",
      "ciCode_": "MO",
      "property_": "time",
      "magnitude_": 2629800,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mo",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "months; duration",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "based on Julian calendar which has an average of 30.435 days per month (this unit is used in astronomy but not in everyday life - see mo_g)",
      "csUnitString_": "mo_j",
      "ciUnitString_": "MO_J",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "metric ton",
      "csCode_": "t",
      "ciCode_": "TNE",
      "property_": "mass",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "t",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "tonnes; megagrams; tons",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Nonclinical",
      "guidance_": "equal to 1000 kg used in the US (recognized by NIST as metric ton), and internationally (recognized as tonne)",
      "csUnitString_": "kg",
      "ciUnitString_": "KG",
      "baseFactorStr_": "1e3",
      "baseFactor_": 1000,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bar",
      "csCode_": "bar",
      "ciCode_": "BAR",
      "property_": "pressure",
      "magnitude_": 100000000,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "bar",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "bars",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Nonclinical",
      "guidance_": "unit of pressure equal to 10^5 Pascals, primarily used by meteorologists and in weather forecasting",
      "csUnitString_": "Pa",
      "ciUnitString_": "PAL",
      "baseFactorStr_": "1e5",
      "baseFactor_": 100000,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "unified atomic mass unit",
      "csCode_": "u",
      "ciCode_": "AMU",
      "property_": "mass",
      "magnitude_": 1.6605402e-24,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "u",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "unified atomic mass units; amu; Dalton; Da",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "the mass of 1/12 of an unbound Carbon-12 atom nuclide equal to 1.6606x10^-27 kg ",
      "csUnitString_": "g",
      "ciUnitString_": "G",
      "baseFactorStr_": "1.6605402e-24",
      "baseFactor_": 1.6605402e-24,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "astronomic unit",
      "csCode_": "AU",
      "ciCode_": "ASU",
      "property_": "length",
      "magnitude_": 149597870691,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "AU",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "AU; units",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "unit of length used in astronomy for measuring distance in Solar system",
      "csUnitString_": "Mm",
      "ciUnitString_": "MAM",
      "baseFactorStr_": "149597.870691",
      "baseFactor_": "149597.870691",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "parsec",
      "csCode_": "pc",
      "ciCode_": "PRS",
      "property_": "length",
      "magnitude_": 30856780000000000,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pc",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "parsecs",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "unit of length equal to 3.26 light years, nad used to measure large distances to objects outside our Solar System",
      "csUnitString_": "m",
      "ciUnitString_": "M",
      "baseFactorStr_": "3.085678e16",
      "baseFactor_": 30856780000000000,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "velocity of light in a vacuum",
      "csCode_": "[c]",
      "ciCode_": "[C]",
      "property_": "velocity",
      "magnitude_": 299792458,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "<i>c</i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "speed of light",
      "source_": "UCUM",
      "loincProperty_": "Vel",
      "category_": "Constant",
      "guidance_": "equal to 299792458 m/s (approximately 3 x 10^8 m/s)",
      "csUnitString_": "m/s",
      "ciUnitString_": "M/S",
      "baseFactorStr_": "299792458",
      "baseFactor_": "299792458",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Planck constant",
      "csCode_": "[h]",
      "ciCode_": "[H]",
      "property_": "action",
      "magnitude_": 6.6260755e-31,
      "dim_": {
        "dimVec_": [
          2,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "<i>h</i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Planck's constant",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Constant",
      "guidance_": "constant = 6.62607004 × 10-34 m2.kg/s; defined as quantum of action",
      "csUnitString_": "J.s",
      "ciUnitString_": "J.S",
      "baseFactorStr_": "6.6260755e-34",
      "baseFactor_": 6.6260755e-34,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Boltzmann constant",
      "csCode_": "[k]",
      "ciCode_": "[K]",
      "property_": "(unclassified)",
      "magnitude_": 1.380658e-20,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          -1,
          0,
          0
        ]
      },
      "printSymbol_": "<i>k</i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "k; kB",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Constant",
      "guidance_": "physical constant relating energy at the individual particle level with temperature = 1.38064852 ×10^−23 J/K",
      "csUnitString_": "J/K",
      "ciUnitString_": "J/K",
      "baseFactorStr_": "1.380658e-23",
      "baseFactor_": 1.380658e-23,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "permittivity of vacuum - electric",
      "csCode_": "[eps_0]",
      "ciCode_": "[EPS_0]",
      "property_": "electric permittivity",
      "magnitude_": 8.854187817000001e-15,
      "dim_": {
        "dimVec_": [
          -3,
          2,
          -1,
          0,
          0,
          2,
          0
        ]
      },
      "printSymbol_": "<i>ε<sub><r>0</r></sub></i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ε0; Electric Constant; vacuum permittivity; permittivity of free space ",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Constant",
      "guidance_": "approximately equal to 8.854 × 10^−12 F/m (farads per meter)",
      "csUnitString_": "F/m",
      "ciUnitString_": "F/M",
      "baseFactorStr_": "8.854187817e-12",
      "baseFactor_": 8.854187817e-12,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "permeability of vacuum - magnetic",
      "csCode_": "[mu_0]",
      "ciCode_": "[MU_0]",
      "property_": "magnetic permeability",
      "magnitude_": 0.0012566370614359172,
      "dim_": {
        "dimVec_": [
          1,
          0,
          1,
          0,
          0,
          -2,
          0
        ]
      },
      "printSymbol_": "<i>μ<sub><r>0</r></sub></i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "μ0; vacuum permeability; permeability of free space; magnetic constant",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Constant",
      "guidance_": "equal to 4π×10^−7 N/A2 (Newtons per square ampere) ≈ 1.2566×10^−6 H/m (Henry per meter)",
      "csUnitString_": "N/A2",
      "ciUnitString_": "4.[PI].10*-7.N/A2",
      "baseFactorStr_": "1",
      "baseFactor_": 0.0000012566370614359173,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "elementary charge",
      "csCode_": "[e]",
      "ciCode_": "[E]",
      "property_": "electric charge",
      "magnitude_": 1.60217733e-19,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ]
      },
      "printSymbol_": "<i>e</i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "e; q; electric charges",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Constant",
      "guidance_": "the magnitude of the electric charge carried by a single electron or proton ≈ 1.60217×10^-19 Coulombs",
      "csUnitString_": "C",
      "ciUnitString_": "C",
      "baseFactorStr_": "1.60217733e-19",
      "baseFactor_": 1.60217733e-19,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "electronvolt",
      "csCode_": "eV",
      "ciCode_": "EV",
      "property_": "energy",
      "magnitude_": 1.60217733e-16,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "eV",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Electron Volts; electronvolts",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Clinical",
      "guidance_": "unit of kinetic energy = 1 V * 1.602×10^−19 C = 1.6×10−19 Joules",
      "csUnitString_": "[e].V",
      "ciUnitString_": "[E].V",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "electron mass",
      "csCode_": "[m_e]",
      "ciCode_": "[M_E]",
      "property_": "mass",
      "magnitude_": 9.1093897e-28,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "<i>m<sub><r>e</r></sub></i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "electron rest mass; me",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Constant",
      "guidance_": "approximately equal to 9.10938356 × 10-31 kg; defined as the mass of a stationary electron",
      "csUnitString_": "g",
      "ciUnitString_": "g",
      "baseFactorStr_": "9.1093897e-28",
      "baseFactor_": 9.1093897e-28,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "proton mass",
      "csCode_": "[m_p]",
      "ciCode_": "[M_P]",
      "property_": "mass",
      "magnitude_": 1.6726231e-24,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "<i>m<sub><r>p</r></sub></i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mp; masses",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Constant",
      "guidance_": "approximately equal to 1.672622×10−27 kg",
      "csUnitString_": "g",
      "ciUnitString_": "g",
      "baseFactorStr_": "1.6726231e-24",
      "baseFactor_": 1.6726231e-24,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Newtonian constant of gravitation",
      "csCode_": "[G]",
      "ciCode_": "[GC]",
      "property_": "(unclassified)",
      "magnitude_": 6.67259e-14,
      "dim_": {
        "dimVec_": [
          3,
          -2,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "<i>G</i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "G; gravitational constant; Newton's constant",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Constant",
      "guidance_": "gravitational constant = 6.674×10−11 N⋅m2/kg2",
      "csUnitString_": "m3.kg-1.s-2",
      "ciUnitString_": "M3.KG-1.S-2",
      "baseFactorStr_": "6.67259e-11",
      "baseFactor_": 6.67259e-11,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "standard acceleration of free fall",
      "csCode_": "[g]",
      "ciCode_": "[G]",
      "property_": "acceleration",
      "magnitude_": 9.80665,
      "dim_": {
        "dimVec_": [
          1,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "<i>g<sub>n</sub></i>",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "standard gravity; g; ɡ0; ɡn",
      "source_": "UCUM",
      "loincProperty_": "Accel",
      "category_": "Constant",
      "guidance_": "defined by standard = 9.80665 m/s2",
      "csUnitString_": "m/s2",
      "ciUnitString_": "M/S2",
      "baseFactorStr_": "980665e-5",
      "baseFactor_": "9.80665",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Torr",
      "csCode_": "Torr",
      "ciCode_": "Torr",
      "property_": "pressure",
      "magnitude_": 133322,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Torr",
      "class_": "const",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "torrs",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "1 torr = 1 mmHg; unit used to measure blood pressure",
      "csUnitString_": "Pa",
      "ciUnitString_": "PAL",
      "baseFactorStr_": "133.322",
      "baseFactor_": "133.322",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "standard atmosphere",
      "csCode_": "atm",
      "ciCode_": "ATM",
      "property_": "pressure",
      "magnitude_": 101325000,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "atm",
      "class_": "const",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "reference pressure; atmos; std atmosphere",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "defined as being precisely equal to 101,325 Pa",
      "csUnitString_": "Pa",
      "ciUnitString_": "PAL",
      "baseFactorStr_": "101325",
      "baseFactor_": "101325",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "light-year",
      "csCode_": "[ly]",
      "ciCode_": "[LY]",
      "property_": "length",
      "magnitude_": 9460730472580800,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "l.y.",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "light years; ly",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Constant",
      "guidance_": "unit of astronomal distance = 5.88×10^12 mi",
      "csUnitString_": "[c].a_j",
      "ciUnitString_": "[C].ANN_J",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "gram-force",
      "csCode_": "gf",
      "ciCode_": "GF",
      "property_": "force",
      "magnitude_": 9.80665,
      "dim_": {
        "dimVec_": [
          1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "gf",
      "class_": "const",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Newtons; gram forces",
      "source_": "UCUM",
      "loincProperty_": "Force",
      "category_": "Clinical",
      "guidance_": "May be specific to unit related to cardiac output",
      "csUnitString_": "g.[g]",
      "ciUnitString_": "G.[G]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Kayser",
      "csCode_": "Ky",
      "ciCode_": "KY",
      "property_": "lineic number",
      "magnitude_": 100,
      "dim_": {
        "dimVec_": [
          -1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "K",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "wavenumbers; kaysers",
      "source_": "UCUM",
      "loincProperty_": "InvLen",
      "category_": "Clinical",
      "guidance_": "unit of wavelength equal to cm^-1",
      "csUnitString_": "cm-1",
      "ciUnitString_": "CM-1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Gal",
      "csCode_": "Gal",
      "ciCode_": "GL",
      "property_": "acceleration",
      "magnitude_": 0.01,
      "dim_": {
        "dimVec_": [
          1,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Gal",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "galileos; Gals",
      "source_": "UCUM",
      "loincProperty_": "Accel",
      "category_": "Clinical",
      "guidance_": "unit of acceleration used in gravimetry; equivalent to cm/s2 ",
      "csUnitString_": "cm/s2",
      "ciUnitString_": "CM/S2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "dyne",
      "csCode_": "dyn",
      "ciCode_": "DYN",
      "property_": "force",
      "magnitude_": 0.01,
      "dim_": {
        "dimVec_": [
          1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "dyn",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "dynes",
      "source_": "UCUM",
      "loincProperty_": "Force",
      "category_": "Clinical",
      "guidance_": "unit of force equal to 10^-5 Newtons",
      "csUnitString_": "g.cm/s2",
      "ciUnitString_": "G.CM/S2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "erg",
      "csCode_": "erg",
      "ciCode_": "ERG",
      "property_": "energy",
      "magnitude_": 0.0001,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "erg",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^-7 Joules, 10-7 Joules; 100 nJ; 100 nanoJoules; 1 dyne cm; 1 g.cm2/s2",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Clinical",
      "guidance_": "unit of energy = 1 dyne centimeter = 10^-7 Joules",
      "csUnitString_": "dyn.cm",
      "ciUnitString_": "DYN.CM",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Poise",
      "csCode_": "P",
      "ciCode_": "P",
      "property_": "dynamic viscosity",
      "magnitude_": 100,
      "dim_": {
        "dimVec_": [
          -1,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "P",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "dynamic viscosity; poises",
      "source_": "UCUM",
      "loincProperty_": "Visc",
      "category_": "Clinical",
      "guidance_": "unit of dynamic viscosity where 1 Poise = 1/10 Pascal second",
      "csUnitString_": "dyn.s/cm2",
      "ciUnitString_": "DYN.S/CM2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Biot",
      "csCode_": "Bi",
      "ciCode_": "BI",
      "property_": "electric current",
      "magnitude_": 10,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          1,
          0
        ]
      },
      "printSymbol_": "Bi",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Bi; abamperes; abA",
      "source_": "UCUM",
      "loincProperty_": "ElpotRat",
      "category_": "Clinical",
      "guidance_": "equal to 10 amperes",
      "csUnitString_": "A",
      "ciUnitString_": "A",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Stokes",
      "csCode_": "St",
      "ciCode_": "ST",
      "property_": "kinematic viscosity",
      "magnitude_": 0.0001,
      "dim_": {
        "dimVec_": [
          2,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "St",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kinematic viscosity",
      "source_": "UCUM",
      "loincProperty_": "Visc",
      "category_": "Clinical",
      "guidance_": "unit of kimematic viscosity with units cm2/s",
      "csUnitString_": "cm2/s",
      "ciUnitString_": "CM2/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Maxwell",
      "csCode_": "Mx",
      "ciCode_": "MX",
      "property_": "flux of magnetic induction",
      "magnitude_": 0.00001,
      "dim_": {
        "dimVec_": [
          2,
          -1,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "Mx",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "magnetix flux; Maxwells",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of magnetic flux",
      "csUnitString_": "Wb",
      "ciUnitString_": "WB",
      "baseFactorStr_": "1e-8",
      "baseFactor_": 1e-8,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Gauss",
      "csCode_": "G",
      "ciCode_": "GS",
      "property_": "magnetic flux density",
      "magnitude_": 0.1,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "Gs",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "magnetic fields; magnetic flux density; induction; B",
      "source_": "UCUM",
      "loincProperty_": "magnetic",
      "category_": "Clinical",
      "guidance_": "CGS unit of magnetic flux density, known as magnetic field B; defined as one maxwell unit per square centimeter (see Oersted for CGS unit for H field)",
      "csUnitString_": "T",
      "ciUnitString_": "T",
      "baseFactorStr_": "1e-4",
      "baseFactor_": 0.0001,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Oersted",
      "csCode_": "Oe",
      "ciCode_": "OE",
      "property_": "magnetic field intensity",
      "magnitude_": 79.57747154594767,
      "dim_": {
        "dimVec_": [
          -1,
          -1,
          0,
          0,
          0,
          1,
          0
        ]
      },
      "printSymbol_": "Oe",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "H magnetic B field; Oersteds",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "CGS unit of the auxiliary magnetic field H defined as 1 dyne per unit pole = 1000/4π amperes per meter (see Gauss for CGS unit for B field)",
      "csUnitString_": "A/m",
      "ciUnitString_": "/[PI].A/M",
      "baseFactorStr_": "250",
      "baseFactor_": 79.57747154594767,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Gilbert",
      "csCode_": "Gb",
      "ciCode_": "GB",
      "property_": "magnetic tension",
      "magnitude_": 0.7957747154594768,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          1,
          0
        ]
      },
      "printSymbol_": "Gb",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Gi; magnetomotive force; Gilberts",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of magnetomotive force (magnetic potential)",
      "csUnitString_": "Oe.cm",
      "ciUnitString_": "OE.CM",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "stilb",
      "csCode_": "sb",
      "ciCode_": "SB",
      "property_": "lum. intensity density",
      "magnitude_": 10000,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          0,
          0,
          0,
          0,
          1
        ]
      },
      "printSymbol_": "sb",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "stilbs",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Obsolete",
      "guidance_": "unit of luminance; equal to and replaced by unit candela per square centimeter (cd/cm2)",
      "csUnitString_": "cd/cm2",
      "ciUnitString_": "CD/CM2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Lambert",
      "csCode_": "Lmb",
      "ciCode_": "LMB",
      "property_": "brightness",
      "magnitude_": 3183.098861837907,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          0,
          0,
          0,
          0,
          1
        ]
      },
      "printSymbol_": "L",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "luminance; lamberts",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of luminance defined as 1 lambert = 1/ π candela per square meter",
      "csUnitString_": "cd/cm2/[pi]",
      "ciUnitString_": "CD/CM2/[PI]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "phot",
      "csCode_": "ph",
      "ciCode_": "PHT",
      "property_": "illuminance",
      "magnitude_": 0.0001,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          0,
          2,
          0,
          0,
          1
        ]
      },
      "printSymbol_": "ph",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "phots",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "CGS photometric unit of illuminance, or luminous flux through an area equal to 10000 lumens per square meter = 10000 lux",
      "csUnitString_": "lx",
      "ciUnitString_": "LX",
      "baseFactorStr_": "1e-4",
      "baseFactor_": 0.0001,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Curie",
      "csCode_": "Ci",
      "ciCode_": "CI",
      "property_": "radioactivity",
      "magnitude_": 37000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Ci",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "curies",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Obsolete",
      "guidance_": "unit for measuring atomic disintegration rate; replaced by the Bequerel (Bq) unit",
      "csUnitString_": "Bq",
      "ciUnitString_": "BQ",
      "baseFactorStr_": "37e9",
      "baseFactor_": 37000000000,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Roentgen",
      "csCode_": "R",
      "ciCode_": "ROE",
      "property_": "ion dose",
      "magnitude_": 2.58e-7,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          1,
          0
        ]
      },
      "printSymbol_": "R",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "röntgen; Roentgens",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of exposure of X-rays and gamma rays in air; unit used primarily in the US but strongly discouraged by NIST",
      "csUnitString_": "C/kg",
      "ciUnitString_": "C/KG",
      "baseFactorStr_": "2.58e-4",
      "baseFactor_": 0.000258,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "radiation absorbed dose",
      "csCode_": "RAD",
      "ciCode_": "[RAD]",
      "property_": "energy dose",
      "magnitude_": 0.01,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "RAD",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "doses",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of radiation absorbed dose used primarily in the US with base units 100 ergs per gram of material. Also see the SI unit Gray (Gy).",
      "csUnitString_": "erg/g",
      "ciUnitString_": "ERG/G",
      "baseFactorStr_": "100",
      "baseFactor_": "100",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "radiation equivalent man",
      "csCode_": "REM",
      "ciCode_": "[REM]",
      "property_": "dose equivalent",
      "magnitude_": 0.01,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "REM",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Roentgen Equivalent in Man; rems; dose equivalents",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of equivalent dose which measures the effect of radiation on humans equal to 0.01 sievert. Used primarily in the US. Also see SI unit Sievert (Sv)",
      "csUnitString_": "RAD",
      "ciUnitString_": "[RAD]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "inch",
      "csCode_": "[in_i]",
      "ciCode_": "[IN_I]",
      "property_": "length",
      "magnitude_": 0.025400000000000002,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "in",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "inches; in; international inch; body height",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "standard unit for inch in the US and internationally",
      "csUnitString_": "cm",
      "ciUnitString_": "CM",
      "baseFactorStr_": "254e-2",
      "baseFactor_": "2.54",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "foot",
      "csCode_": "[ft_i]",
      "ciCode_": "[FT_I]",
      "property_": "length",
      "magnitude_": 0.3048,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ft",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ft; fts; foot; international foot; feet; international feet; height",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "unit used in the US and internationally",
      "csUnitString_": "[in_i]",
      "ciUnitString_": "[IN_I]",
      "baseFactorStr_": "12",
      "baseFactor_": "12",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "yard",
      "csCode_": "[yd_i]",
      "ciCode_": "[YD_I]",
      "property_": "length",
      "magnitude_": 0.9144000000000001,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "yd",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "international yards; yds; distance",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "[ft_i]",
      "ciUnitString_": "[FT_I]",
      "baseFactorStr_": "3",
      "baseFactor_": "3",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mile",
      "csCode_": "[mi_i]",
      "ciCode_": "[MI_I]",
      "property_": "length",
      "magnitude_": 1609.344,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mi",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "international miles; mi I; statute mile",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "[ft_i]",
      "ciUnitString_": "[FT_I]",
      "baseFactorStr_": "5280",
      "baseFactor_": "5280",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "fathom",
      "csCode_": "[fth_i]",
      "ciCode_": "[FTH_I]",
      "property_": "depth of water",
      "magnitude_": 1.8288000000000002,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "fth",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "international fathoms",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "unit used in the US and internationally to measure depth of water; same length as the US fathom",
      "csUnitString_": "[ft_i]",
      "ciUnitString_": "[FT_I]",
      "baseFactorStr_": "6",
      "baseFactor_": "6",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nautical mile",
      "csCode_": "[nmi_i]",
      "ciCode_": "[NMI_I]",
      "property_": "length",
      "magnitude_": 1852,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "n.mi",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nautical mile; nautical miles; international nautical mile; international nautical miles; nm; n.m.; nmi",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "m",
      "ciUnitString_": "M",
      "baseFactorStr_": "1852",
      "baseFactor_": "1852",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "knot",
      "csCode_": "[kn_i]",
      "ciCode_": "[KN_I]",
      "property_": "velocity",
      "magnitude_": 0.5144444444444445,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "knot",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kn; kt; international knots",
      "source_": "UCUM",
      "loincProperty_": "Vel",
      "category_": "Nonclinical",
      "guidance_": "defined as equal to one nautical mile (1.852 km) per hour",
      "csUnitString_": "[nmi_i]/h",
      "ciUnitString_": "[NMI_I]/H",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "square inch",
      "csCode_": "[sin_i]",
      "ciCode_": "[SIN_I]",
      "property_": "area",
      "magnitude_": 0.0006451600000000001,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "in2; in^2; inches squared; sq inch; inches squared; international",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "[in_i]2",
      "ciUnitString_": "[IN_I]2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "square foot",
      "csCode_": "[sft_i]",
      "ciCode_": "[SFT_I]",
      "property_": "area",
      "magnitude_": 0.09290304,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ft2; ft^2; ft squared; sq ft; feet; international",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "[ft_i]2",
      "ciUnitString_": "[FT_I]2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "square yard",
      "csCode_": "[syd_i]",
      "ciCode_": "[SYD_I]",
      "property_": "area",
      "magnitude_": 0.8361273600000002,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "yd2; yd^2; sq. yds; yards squared; international",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "[yd_i]2",
      "ciUnitString_": "[YD_I]2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "cubic inch",
      "csCode_": "[cin_i]",
      "ciCode_": "[CIN_I]",
      "property_": "volume",
      "magnitude_": 0.000016387064000000003,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "in3; in^3; in*3; inches^3; inches*3; cu. in; cu in; cubic inches; inches cubed; cin",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "[in_i]3",
      "ciUnitString_": "[IN_I]3",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "cubic foot",
      "csCode_": "[cft_i]",
      "ciCode_": "[CFT_I]",
      "property_": "volume",
      "magnitude_": 0.028316846592000004,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ft3; ft^3; ft*3; cu. ft; cubic feet; cubed; [ft_i]3; international",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "[ft_i]3",
      "ciUnitString_": "[FT_I]3",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "cubic yard",
      "csCode_": "[cyd_i]",
      "ciCode_": "[CYD_I]",
      "property_": "volume",
      "magnitude_": 0.7645548579840002,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cu.yd",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cubic yards; cubic yds; cu yards; CYs; yards^3; yd^3; yds^3; yd3; yds3",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "[yd_i]3",
      "ciUnitString_": "[YD_I]3",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "board foot",
      "csCode_": "[bf_i]",
      "ciCode_": "[BF_I]",
      "property_": "volume",
      "magnitude_": 0.002359737216,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "BDFT; FBM; BF; board feet; international",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "unit of volume used to measure lumber",
      "csUnitString_": "[in_i]3",
      "ciUnitString_": "[IN_I]3",
      "baseFactorStr_": "144",
      "baseFactor_": "144",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "cord",
      "csCode_": "[cr_i]",
      "ciCode_": "[CR_I]",
      "property_": "volume",
      "magnitude_": 3.6245563637760005,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "crd I; international cords",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "unit of measure of dry volume used to measure firewood equal 128 ft3",
      "csUnitString_": "[ft_i]3",
      "ciUnitString_": "[FT_I]3",
      "baseFactorStr_": "128",
      "baseFactor_": "128",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mil",
      "csCode_": "[mil_i]",
      "ciCode_": "[MIL_I]",
      "property_": "length",
      "magnitude_": 0.000025400000000000004,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mil",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "thou, thousandth; mils; international",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "equal to 0.001 international inch",
      "csUnitString_": "[in_i]",
      "ciUnitString_": "[IN_I]",
      "baseFactorStr_": "1e-3",
      "baseFactor_": 0.001,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "circular mil",
      "csCode_": "[cml_i]",
      "ciCode_": "[CML_I]",
      "property_": "area",
      "magnitude_": 5.067074790974979e-10,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "circ.mil",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "circular mils; cml I; international",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "[pi]/4.[mil_i]2",
      "ciUnitString_": "[PI]/4.[MIL_I]2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "hand",
      "csCode_": "[hd_i]",
      "ciCode_": "[HD_I]",
      "property_": "height of horses",
      "magnitude_": 0.10160000000000001,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "hd",
      "class_": "intcust",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "hands; international",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "used to measure horse height",
      "csUnitString_": "[in_i]",
      "ciUnitString_": "[IN_I]",
      "baseFactorStr_": "4",
      "baseFactor_": "4",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "foot - US",
      "csCode_": "[ft_us]",
      "ciCode_": "[FT_US]",
      "property_": "length",
      "magnitude_": 0.3048006096012192,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ft<sub>us</sub>",
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US foot; foot US; us ft; ft us; height; visual distance; feet",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "Better to use [ft_i] which refers to the length used worldwide, including in the US;  [ft_us] may be confused with land survey units. ",
      "csUnitString_": "m/3937",
      "ciUnitString_": "M/3937",
      "baseFactorStr_": "1200",
      "baseFactor_": "1200",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "yard - US",
      "csCode_": "[yd_us]",
      "ciCode_": "[YD_US]",
      "property_": "length",
      "magnitude_": 0.9144018288036575,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US yards; us yds; distance",
      "source_": "UCUM",
      "loincProperty_": "Len; Nrat",
      "category_": "Obsolete",
      "guidance_": "Better to use [yd_i] which refers to the length used worldwide, including in the US; [yd_us] refers to unit used in land surveys in the US",
      "csUnitString_": "[ft_us]",
      "ciUnitString_": "[FT_US]",
      "baseFactorStr_": "3",
      "baseFactor_": "3",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "inch - US",
      "csCode_": "[in_us]",
      "ciCode_": "[IN_US]",
      "property_": "length",
      "magnitude_": 0.0254000508001016,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US inches; in us; us in; inch US",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "Better to use [in_i] which refers to the length used worldwide, including in the US",
      "csUnitString_": "[ft_us]/12",
      "ciUnitString_": "[FT_US]/12",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "rod - US",
      "csCode_": "[rd_us]",
      "ciCode_": "[RD_US]",
      "property_": "length",
      "magnitude_": 5.029210058420117,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US rod; US rods; rd US; US rd",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[ft_us]",
      "ciUnitString_": "[FT_US]",
      "baseFactorStr_": "16.5",
      "baseFactor_": "16.5",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Gunter's chain - US",
      "csCode_": "[ch_us]",
      "ciCode_": "[CH_US]",
      "property_": "length",
      "magnitude_": 20.116840233680467,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "surveyor's chain; Surveyor's chain USA; Gunter’s measurement; surveyor’s measurement; Gunter's Chain USA",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "historical unit used for land survey used only in the US",
      "csUnitString_": "[rd_us]",
      "ciUnitString_": "[RD_US]",
      "baseFactorStr_": "4",
      "baseFactor_": "4",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "link for Gunter's chain - US",
      "csCode_": "[lk_us]",
      "ciCode_": "[LK_US]",
      "property_": "length",
      "magnitude_": 0.20116840233680466,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Links for Gunter's Chain USA",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[ch_us]/100",
      "ciUnitString_": "[CH_US]/100",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Ramden's chain - US",
      "csCode_": "[rch_us]",
      "ciCode_": "[RCH_US]",
      "property_": "length",
      "magnitude_": 30.480060960121918,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Ramsden's chain; engineer's chains",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "distance measuring device used for land survey",
      "csUnitString_": "[ft_us]",
      "ciUnitString_": "[FT_US]",
      "baseFactorStr_": "100",
      "baseFactor_": "100",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "link for Ramden's chain - US",
      "csCode_": "[rlk_us]",
      "ciCode_": "[RLK_US]",
      "property_": "length",
      "magnitude_": 0.3048006096012192,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "links for Ramsden's chain",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[rch_us]/100",
      "ciUnitString_": "[RCH_US]/100",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "fathom - US",
      "csCode_": "[fth_us]",
      "ciCode_": "[FTH_US]",
      "property_": "length",
      "magnitude_": 1.828803657607315,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US fathoms; fathom USA; fth us",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "same length as the international fathom - better to use international fathom ([fth_i])",
      "csUnitString_": "[ft_us]",
      "ciUnitString_": "[FT_US]",
      "baseFactorStr_": "6",
      "baseFactor_": "6",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "furlong - US",
      "csCode_": "[fur_us]",
      "ciCode_": "[FUR_US]",
      "property_": "length",
      "magnitude_": 201.16840233680466,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US furlongs; fur us",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "distance unit in horse racing",
      "csUnitString_": "[rd_us]",
      "ciUnitString_": "[RD_US]",
      "baseFactorStr_": "40",
      "baseFactor_": "40",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mile - US",
      "csCode_": "[mi_us]",
      "ciCode_": "[MI_US]",
      "property_": "length",
      "magnitude_": 1609.3472186944373,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U.S. Survey Miles; US statute miles; survey mi; US mi; distance",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "Better to use [mi_i] which refers to the length used worldwide, including in the US",
      "csUnitString_": "[fur_us]",
      "ciUnitString_": "[FUR_US]",
      "baseFactorStr_": "8",
      "baseFactor_": "8",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "acre - US",
      "csCode_": "[acr_us]",
      "ciCode_": "[ACR_US]",
      "property_": "area",
      "magnitude_": 4046.872609874252,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Acre USA Survey; Acre USA; survey acres",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Nonclinical",
      "guidance_": "an older unit based on pre 1959 US statute lengths that is still sometimes used in the US only for land survey purposes. ",
      "csUnitString_": "[rd_us]2",
      "ciUnitString_": "[RD_US]2",
      "baseFactorStr_": "160",
      "baseFactor_": "160",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "square rod - US",
      "csCode_": "[srd_us]",
      "ciCode_": "[SRD_US]",
      "property_": "area",
      "magnitude_": 25.292953811714074,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "rod2; rod^2; sq. rod; rods squared",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Nonclinical",
      "guidance_": "Used only in the US to measure land area, based on US statute land survey length units",
      "csUnitString_": "[rd_us]2",
      "ciUnitString_": "[RD_US]2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "square mile - US",
      "csCode_": "[smi_us]",
      "ciCode_": "[SMI_US]",
      "property_": "area",
      "magnitude_": 2589998.470319521,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mi2; mi^2; sq mi; miles squared",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Nonclinical",
      "guidance_": "historical unit used only in the US for land survey purposes (based on the US survey mile), not the internationally recognized [mi_i]",
      "csUnitString_": "[mi_us]2",
      "ciUnitString_": "[MI_US]2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "section",
      "csCode_": "[sct]",
      "ciCode_": "[SCT]",
      "property_": "area",
      "magnitude_": 2589998.470319521,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "sct; sections",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Nonclinical",
      "guidance_": "tract of land approximately equal to 1 mile square containing 640 acres",
      "csUnitString_": "[mi_us]2",
      "ciUnitString_": "[MI_US]2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "township",
      "csCode_": "[twp]",
      "ciCode_": "[TWP]",
      "property_": "area",
      "magnitude_": 93239944.93150276,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "twp; townships",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Nonclinical",
      "guidance_": "land measurement equal to 6 mile square",
      "csUnitString_": "[sct]",
      "ciUnitString_": "[SCT]",
      "baseFactorStr_": "36",
      "baseFactor_": "36",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mil - US",
      "csCode_": "[mil_us]",
      "ciCode_": "[MIL_US]",
      "property_": "length",
      "magnitude_": 0.0000254000508001016,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "thou, thousandth; mils",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "better to use [mil_i] which is based on the internationally recognized inch",
      "csUnitString_": "[in_us]",
      "ciUnitString_": "[IN_US]",
      "baseFactorStr_": "1e-3",
      "baseFactor_": 0.001,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "inch - British",
      "csCode_": "[in_br]",
      "ciCode_": "[IN_BR]",
      "property_": "length",
      "magnitude_": 0.025399980000000003,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "imperial inches; imp in; br in; british inches",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "cm",
      "ciUnitString_": "CM",
      "baseFactorStr_": "2.539998",
      "baseFactor_": "2.539998",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "foot - British",
      "csCode_": "[ft_br]",
      "ciCode_": "[FT_BR]",
      "property_": "length",
      "magnitude_": 0.30479976000000003,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British Foot; Imperial Foot; feet; imp fts; br fts",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[in_br]",
      "ciUnitString_": "[IN_BR]",
      "baseFactorStr_": "12",
      "baseFactor_": "12",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "rod - British",
      "csCode_": "[rd_br]",
      "ciCode_": "[RD_BR]",
      "property_": "length",
      "magnitude_": 5.02919604,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British rods; br rd",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[ft_br]",
      "ciUnitString_": "[FT_BR]",
      "baseFactorStr_": "16.5",
      "baseFactor_": "16.5",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Gunter's chain - British",
      "csCode_": "[ch_br]",
      "ciCode_": "[CH_BR]",
      "property_": "length",
      "magnitude_": 20.11678416,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Gunter's Chain British; Gunters Chain British; Surveyor's Chain British",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "historical unit used for land survey used only in Great Britain",
      "csUnitString_": "[rd_br]",
      "ciUnitString_": "[RD_BR]",
      "baseFactorStr_": "4",
      "baseFactor_": "4",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "link for Gunter's chain - British",
      "csCode_": "[lk_br]",
      "ciCode_": "[LK_BR]",
      "property_": "length",
      "magnitude_": 0.2011678416,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Links for Gunter's Chain British",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[ch_br]/100",
      "ciUnitString_": "[CH_BR]/100",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "fathom - British",
      "csCode_": "[fth_br]",
      "ciCode_": "[FTH_BR]",
      "property_": "length",
      "magnitude_": 1.82879856,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British fathoms; imperial fathoms; br fth; imp fth",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[ft_br]",
      "ciUnitString_": "[FT_BR]",
      "baseFactorStr_": "6",
      "baseFactor_": "6",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pace - British",
      "csCode_": "[pc_br]",
      "ciCode_": "[PC_BR]",
      "property_": "length",
      "magnitude_": 0.7619994000000001,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British paces; br pc",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "traditional unit of length equal to 152.4 centimeters, or 1.52 meter. ",
      "csUnitString_": "[ft_br]",
      "ciUnitString_": "[FT_BR]",
      "baseFactorStr_": "2.5",
      "baseFactor_": "2.5",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "yard - British",
      "csCode_": "[yd_br]",
      "ciCode_": "[YD_BR]",
      "property_": "length",
      "magnitude_": 0.91439928,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British yards; Br yds; distance",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[ft_br]",
      "ciUnitString_": "[FT_BR]",
      "baseFactorStr_": "3",
      "baseFactor_": "3",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mile - British",
      "csCode_": "[mi_br]",
      "ciCode_": "[MI_BR]",
      "property_": "length",
      "magnitude_": 1609.3427328000002,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "imperial miles; British miles; English statute miles; imp mi, br mi",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[ft_br]",
      "ciUnitString_": "[FT_BR]",
      "baseFactorStr_": "5280",
      "baseFactor_": "5280",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nautical mile - British",
      "csCode_": "[nmi_br]",
      "ciCode_": "[NMI_BR]",
      "property_": "length",
      "magnitude_": 1853.1825408000002,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British nautical miles; Imperial nautical miles; Admiralty miles; n.m. br; imp nm",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[ft_br]",
      "ciUnitString_": "[FT_BR]",
      "baseFactorStr_": "6080",
      "baseFactor_": "6080",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "knot - British",
      "csCode_": "[kn_br]",
      "ciCode_": "[KN_BR]",
      "property_": "velocity",
      "magnitude_": 0.5147729280000001,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British knots; kn br; kt",
      "source_": "UCUM",
      "loincProperty_": "Vel",
      "category_": "Obsolete",
      "guidance_": "based on obsolete British nautical mile ",
      "csUnitString_": "[nmi_br]/h",
      "ciUnitString_": "[NMI_BR]/H",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "acre",
      "csCode_": "[acr_br]",
      "ciCode_": "[ACR_BR]",
      "property_": "area",
      "magnitude_": 4046.850049400269,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-length",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Imperial acres; British; a; ac; ar; acr",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Nonclinical",
      "guidance_": "the standard unit for acre used in the US and internationally",
      "csUnitString_": "[yd_br]2",
      "ciUnitString_": "[YD_BR]2",
      "baseFactorStr_": "4840",
      "baseFactor_": "4840",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "gallon - US",
      "csCode_": "[gal_us]",
      "ciCode_": "[GAL_US]",
      "property_": "fluid volume",
      "magnitude_": 0.0037854117840000006,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US gallons; US liquid gallon; gal us; Queen Anne's wine gallon",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "only gallon unit used in the US; [gal_us] is only used in some other countries in South American and Africa to measure gasoline volume",
      "csUnitString_": "[in_i]3",
      "ciUnitString_": "[IN_I]3",
      "baseFactorStr_": "231",
      "baseFactor_": "231",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "barrel - US",
      "csCode_": "[bbl_us]",
      "ciCode_": "[BBL_US]",
      "property_": "fluid volume",
      "magnitude_": 0.158987294928,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "bbl",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "[bbl_us] is the standard unit for oil barrel, which is a unit only used in the US to measure the volume oil. ",
      "csUnitString_": "[gal_us]",
      "ciUnitString_": "[GAL_US]",
      "baseFactorStr_": "42",
      "baseFactor_": "42",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "quart - US",
      "csCode_": "[qt_us]",
      "ciCode_": "[QT_US]",
      "property_": "fluid volume",
      "magnitude_": 0.0009463529460000001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US quarts; us qts",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "Used only in the US",
      "csUnitString_": "[gal_us]/4",
      "ciUnitString_": "[GAL_US]/4",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pint - US",
      "csCode_": "[pt_us]",
      "ciCode_": "[PT_US]",
      "property_": "fluid volume",
      "magnitude_": 0.00047317647300000007,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US pints; pint US; liquid pint; pt us; us pt",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "Used only in the US",
      "csUnitString_": "[qt_us]/2",
      "ciUnitString_": "[QT_US]/2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "gill - US",
      "csCode_": "[gil_us]",
      "ciCode_": "[GIL_US]",
      "property_": "fluid volume",
      "magnitude_": 0.00011829411825000002,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US gills; gil us",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "only used in the context of alcohol volume in the US",
      "csUnitString_": "[pt_us]/4",
      "ciUnitString_": "[PT_US]/4",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "fluid ounce - US",
      "csCode_": "[foz_us]",
      "ciCode_": "[FOZ_US]",
      "property_": "fluid volume",
      "magnitude_": 0.000029573529562500005,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "oz fl",
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US fluid ounces; fl ozs; FO; fl. oz.; foz us",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "unit used only in the US",
      "csUnitString_": "[gil_us]/4",
      "ciUnitString_": "[GIL_US]/4",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "fluid dram - US",
      "csCode_": "[fdr_us]",
      "ciCode_": "[FDR_US]",
      "property_": "fluid volume",
      "magnitude_": 0.0000036966911953125006,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US fluid drams; fdr us",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "equal to 1/8 US fluid ounce = 3.69 mL; used informally to mean small amount of liquor, especially Scotch whiskey",
      "csUnitString_": "[foz_us]/8",
      "ciUnitString_": "[FOZ_US]/8",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "minim - US",
      "csCode_": "[min_us]",
      "ciCode_": "[MIN_US]",
      "property_": "fluid volume",
      "magnitude_": 6.1611519921875e-8,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "min US; US min; ♏ US",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[fdr_us]/60",
      "ciUnitString_": "[FDR_US]/60",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "cord - US",
      "csCode_": "[crd_us]",
      "ciCode_": "[CRD_US]",
      "property_": "fluid volume",
      "magnitude_": 3.6245563637760005,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US cord; US cords; crd us; us crd",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "unit of measure of dry volume used to measure firewood equal 128 ft3 (the same as international cord [cr_i])",
      "csUnitString_": "[ft_i]3",
      "ciUnitString_": "[FT_I]3",
      "baseFactorStr_": "128",
      "baseFactor_": "128",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bushel - US",
      "csCode_": "[bu_us]",
      "ciCode_": "[BU_US]",
      "property_": "dry volume",
      "magnitude_": 0.03523907016688001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US bushels; US bsh; US bu",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Obsolete",
      "guidance_": "Historical unit of dry volume that is rarely used today",
      "csUnitString_": "[in_i]3",
      "ciUnitString_": "[IN_I]3",
      "baseFactorStr_": "2150.42",
      "baseFactor_": "2150.42",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "gallon - historical",
      "csCode_": "[gal_wi]",
      "ciCode_": "[GAL_WI]",
      "property_": "dry volume",
      "magnitude_": 0.004404883770860001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Corn Gallon British; Dry Gallon US; Gallons Historical; Grain Gallon British; Winchester Corn Gallon; historical winchester gallons; wi gal",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Obsolete",
      "guidance_": "historical unit of dry volume no longer used",
      "csUnitString_": "[bu_us]/8",
      "ciUnitString_": "[BU_US]/8",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "peck - US",
      "csCode_": "[pk_us]",
      "ciCode_": "[PK_US]",
      "property_": "dry volume",
      "magnitude_": 0.008809767541720002,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "US pecks; US pk",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "unit of dry volume rarely used today (can be used to measure volume of apples)",
      "csUnitString_": "[bu_us]/4",
      "ciUnitString_": "[BU_US]/4",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "dry quart - US",
      "csCode_": "[dqt_us]",
      "ciCode_": "[DQT_US]",
      "property_": "dry volume",
      "magnitude_": 0.0011012209427150002,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "dry quarts; dry quart US; US dry quart; dry qt; us dry qt; dqt; dqt us",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "historical unit of dry volume only in the US, but is rarely used today",
      "csUnitString_": "[pk_us]/8",
      "ciUnitString_": "[PK_US]/8",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "dry pint - US",
      "csCode_": "[dpt_us]",
      "ciCode_": "[DPT_US]",
      "property_": "dry volume",
      "magnitude_": 0.0005506104713575001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "dry pints; dry pint US; US dry pint; dry pt; dpt; dpt us",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "historical unit of dry volume only in the US, but is rarely used today",
      "csUnitString_": "[dqt_us]/2",
      "ciUnitString_": "[DQT_US]/2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "tablespoon - US",
      "csCode_": "[tbs_us]",
      "ciCode_": "[TBS_US]",
      "property_": "volume",
      "magnitude_": 0.000014786764781250002,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Tbs; tbsp; tbs us; US tablespoons",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "unit defined as 0.5 US fluid ounces or 3 teaspoons - used only in the US. See [tbs_m] for the unit used internationally and in the US for nutrional labelling. ",
      "csUnitString_": "[foz_us]/2",
      "ciUnitString_": "[FOZ_US]/2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "teaspoon - US",
      "csCode_": "[tsp_us]",
      "ciCode_": "[TSP_US]",
      "property_": "volume",
      "magnitude_": 0.0000049289215937500005,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "tsp; t; US teaspoons",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "unit defined as 1/6 US fluid ounces - used only in the US. See [tsp_m] for the unit used internationally and in the US for nutrional labelling. ",
      "csUnitString_": "[tbs_us]/3",
      "ciUnitString_": "[TBS_US]/3",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "cup - US customary",
      "csCode_": "[cup_us]",
      "ciCode_": "[CUP_US]",
      "property_": "volume",
      "magnitude_": 0.00023658823650000004,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cup us; us cups",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "Unit defined as 1/2 US pint or 16 US tablespoons ≈ 236.59 mL, which is not the standard unit defined by the FDA of 240 mL - see [cup_m] (metric cup)",
      "csUnitString_": "[tbs_us]",
      "ciUnitString_": "[TBS_US]",
      "baseFactorStr_": "16",
      "baseFactor_": "16",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "fluid ounce - metric",
      "csCode_": "[foz_m]",
      "ciCode_": "[FOZ_M]",
      "property_": "fluid volume",
      "magnitude_": 0.000029999999999999997,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "oz fl",
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "metric fluid ounces; fozs m; fl ozs m",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "unit used only in the US for nutritional labelling, as set by the FDA",
      "csUnitString_": "mL",
      "ciUnitString_": "ML",
      "baseFactorStr_": "30",
      "baseFactor_": "30",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "cup - US legal",
      "csCode_": "[cup_m]",
      "ciCode_": "[CUP_M]",
      "property_": "volume",
      "magnitude_": 0.00023999999999999998,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cup m; metric cups",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "standard unit equal to 240 mL used in the US for nutritional labelling, as defined by the FDA. Note that this is different from the US customary cup (236.59 mL) and the metric cup used in Commonwealth nations (250 mL).",
      "csUnitString_": "mL",
      "ciUnitString_": "ML",
      "baseFactorStr_": "240",
      "baseFactor_": "240",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "teaspoon - metric",
      "csCode_": "[tsp_m]",
      "ciCode_": "[TSP_M]",
      "property_": "volume",
      "magnitude_": 0.0000049999999999999996,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "tsp; t; metric teaspoons",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "mL",
      "ciUnitString_": "mL",
      "baseFactorStr_": "5",
      "baseFactor_": "5",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "tablespoon - metric",
      "csCode_": "[tbs_m]",
      "ciCode_": "[TBS_M]",
      "property_": "volume",
      "magnitude_": 0.000014999999999999999,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "us-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "metric tablespoons; Tbs; tbsp; T; tbs m",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "mL",
      "ciUnitString_": "mL",
      "baseFactorStr_": "15",
      "baseFactor_": "15",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "gallon- British",
      "csCode_": "[gal_br]",
      "ciCode_": "[GAL_BR]",
      "property_": "volume",
      "magnitude_": 0.004546090000000001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "imperial gallons, UK gallons; British gallons; br gal; imp gal",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "Used only in Great Britain and other Commonwealth countries",
      "csUnitString_": "l",
      "ciUnitString_": "L",
      "baseFactorStr_": "4.54609",
      "baseFactor_": "4.54609",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "peck - British",
      "csCode_": "[pk_br]",
      "ciCode_": "[PK_BR]",
      "property_": "volume",
      "magnitude_": 0.009092180000000002,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "imperial pecks; British pecks; br pk; imp pk",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "unit of dry volume rarely used today (can be used to measure volume of apples)",
      "csUnitString_": "[gal_br]",
      "ciUnitString_": "[GAL_BR]",
      "baseFactorStr_": "2",
      "baseFactor_": "2",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bushel - British",
      "csCode_": "[bu_br]",
      "ciCode_": "[BU_BR]",
      "property_": "volume",
      "magnitude_": 0.03636872000000001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British bushels; imperial; br bsh; br bu; imp",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Obsolete",
      "guidance_": "Historical unit of dry volume that is rarely used today",
      "csUnitString_": "[pk_br]",
      "ciUnitString_": "[PK_BR]",
      "baseFactorStr_": "4",
      "baseFactor_": "4",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "quart - British",
      "csCode_": "[qt_br]",
      "ciCode_": "[QT_BR]",
      "property_": "volume",
      "magnitude_": 0.0011365225000000002,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British quarts; imperial quarts; br qts",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "Used only in Great Britain and other Commonwealth countries",
      "csUnitString_": "[gal_br]/4",
      "ciUnitString_": "[GAL_BR]/4",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pint - British",
      "csCode_": "[pt_br]",
      "ciCode_": "[PT_BR]",
      "property_": "volume",
      "magnitude_": 0.0005682612500000001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British pints; imperial pints; pt br; br pt; imp pt; pt imp",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "Used only in Great Britain and other Commonwealth countries",
      "csUnitString_": "[qt_br]/2",
      "ciUnitString_": "[QT_BR]/2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "gill - British",
      "csCode_": "[gil_br]",
      "ciCode_": "[GIL_BR]",
      "property_": "volume",
      "magnitude_": 0.00014206531250000003,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "imperial gills; British gills; imp gill, br gill",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "only used in the context of alcohol volume in Great Britain",
      "csUnitString_": "[pt_br]/4",
      "ciUnitString_": "[PT_BR]/4",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "fluid ounce - British",
      "csCode_": "[foz_br]",
      "ciCode_": "[FOZ_BR]",
      "property_": "volume",
      "magnitude_": 0.000028413062500000005,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British fluid ounces; Imperial fluid ounces; br fozs; imp fozs; br fl ozs",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "Used only in Great Britain and other Commonwealth countries",
      "csUnitString_": "[gil_br]/5",
      "ciUnitString_": "[GIL_BR]/5",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "fluid dram - British",
      "csCode_": "[fdr_br]",
      "ciCode_": "[FDR_BR]",
      "property_": "volume",
      "magnitude_": 0.0000035516328125000006,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British fluid drams; fdr br",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "equal to 1/8 Imperial fluid ounce = 3.55 mL; used informally to mean small amount of liquor, especially Scotch whiskey",
      "csUnitString_": "[foz_br]/8",
      "ciUnitString_": "[FOZ_BR]/8",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "minim - British",
      "csCode_": "[min_br]",
      "ciCode_": "[MIN_BR]",
      "property_": "volume",
      "magnitude_": 5.919388020833334e-8,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "brit-volumes",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "min br; br min; ♏ br",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[fdr_br]/60",
      "ciUnitString_": "[FDR_BR]/60",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "grain",
      "csCode_": "[gr]",
      "ciCode_": "[GR]",
      "property_": "mass",
      "magnitude_": 0.06479891,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "avoirdupois",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gr; grains",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Nonclinical",
      "guidance_": "an apothecary measure of mass rarely used today",
      "csUnitString_": "mg",
      "ciUnitString_": "MG",
      "baseFactorStr_": "64.79891",
      "baseFactor_": "64.79891",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pound",
      "csCode_": "[lb_av]",
      "ciCode_": "[LB_AV]",
      "property_": "mass",
      "magnitude_": 453.59237,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "lb",
      "class_": "avoirdupois",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "avoirdupois pounds, international pounds; av lbs; pounds",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "[gr]",
      "ciUnitString_": "[GR]",
      "baseFactorStr_": "7000",
      "baseFactor_": "7000",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pound force - US",
      "csCode_": "[lbf_av]",
      "ciCode_": "[LBF_AV]",
      "property_": "force",
      "magnitude_": 4448.2216152605,
      "dim_": {
        "dimVec_": [
          1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "lbf",
      "class_": "const",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "lbfs; US lbf; US pound forces",
      "source_": "UCUM",
      "loincProperty_": "Force",
      "category_": "Clinical",
      "guidance_": "only rarely needed in health care - see [lb_av] which is the more common unit to express weight",
      "csUnitString_": "[lb_av].[g]",
      "ciUnitString_": "[LB_AV].[G]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "ounce",
      "csCode_": "[oz_av]",
      "ciCode_": "[OZ_AV]",
      "property_": "mass",
      "magnitude_": 28.349523125,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "oz",
      "class_": "avoirdupois",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ounces; international ounces; avoirdupois ounces; av ozs",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally",
      "csUnitString_": "[lb_av]/16",
      "ciUnitString_": "[LB_AV]/16",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Dram mass unit",
      "csCode_": "[dr_av]",
      "ciCode_": "[DR_AV]",
      "property_": "mass",
      "magnitude_": 1.7718451953125,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "avoirdupois",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Dram; drams avoirdupois; avoidupois dram; international dram",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "unit from the avoirdupois system, which is used in the US and internationally",
      "csUnitString_": "[oz_av]/16",
      "ciUnitString_": "[OZ_AV]/16",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "short hundredweight",
      "csCode_": "[scwt_av]",
      "ciCode_": "[SCWT_AV]",
      "property_": "mass",
      "magnitude_": 45359.237,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "avoirdupois",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "hundredweights; s cwt; scwt; avoirdupois",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Nonclinical",
      "guidance_": "Used only in the US to equal 100 pounds",
      "csUnitString_": "[lb_av]",
      "ciUnitString_": "[LB_AV]",
      "baseFactorStr_": "100",
      "baseFactor_": "100",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "long hundredweight",
      "csCode_": "[lcwt_av]",
      "ciCode_": "[LCWT_AV]",
      "property_": "mass",
      "magnitude_": 50802.345440000005,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "avoirdupois",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "imperial hundredweights; imp cwt; lcwt; avoirdupois",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[lb_av]",
      "ciUnitString_": "[LB_AV]",
      "baseFactorStr_": "112",
      "baseFactor_": "112",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "short ton - US",
      "csCode_": "[ston_av]",
      "ciCode_": "[STON_AV]",
      "property_": "mass",
      "magnitude_": 907184.74,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "avoirdupois",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ton; US tons; avoirdupois tons",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "Used only in the US",
      "csUnitString_": "[scwt_av]",
      "ciUnitString_": "[SCWT_AV]",
      "baseFactorStr_": "20",
      "baseFactor_": "20",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "long ton - British",
      "csCode_": "[lton_av]",
      "ciCode_": "[LTON_AV]",
      "property_": "mass",
      "magnitude_": 1016046.9088000001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "avoirdupois",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "imperial tons; weight tons; British long tons; long ton avoirdupois",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Nonclinical",
      "guidance_": "Used only in Great Britain and other Commonwealth countries",
      "csUnitString_": "[lcwt_av]",
      "ciUnitString_": "[LCWT_AV]",
      "baseFactorStr_": "20",
      "baseFactor_": "20",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "stone - British",
      "csCode_": "[stone_av]",
      "ciCode_": "[STONE_AV]",
      "property_": "mass",
      "magnitude_": 6350.293180000001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "avoirdupois",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British stones; avoirdupois",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Nonclinical",
      "guidance_": "Used primarily in the UK and Ireland to measure body weight",
      "csUnitString_": "[lb_av]",
      "ciUnitString_": "[LB_AV]",
      "baseFactorStr_": "14",
      "baseFactor_": "14",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pennyweight - troy",
      "csCode_": "[pwt_tr]",
      "ciCode_": "[PWT_TR]",
      "property_": "mass",
      "magnitude_": 1.5551738400000001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "troy",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "dwt; denarius weights",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Obsolete",
      "guidance_": "historical unit used to measure mass and cost of precious metals",
      "csUnitString_": "[gr]",
      "ciUnitString_": "[GR]",
      "baseFactorStr_": "24",
      "baseFactor_": "24",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "ounce - troy",
      "csCode_": "[oz_tr]",
      "ciCode_": "[OZ_TR]",
      "property_": "mass",
      "magnitude_": 31.103476800000003,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "troy",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "troy ounces; tr ozs",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Nonclinical",
      "guidance_": "unit of mass for precious metals and gemstones only",
      "csUnitString_": "[pwt_tr]",
      "ciUnitString_": "[PWT_TR]",
      "baseFactorStr_": "20",
      "baseFactor_": "20",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pound - troy",
      "csCode_": "[lb_tr]",
      "ciCode_": "[LB_TR]",
      "property_": "mass",
      "magnitude_": 373.2417216,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "troy",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "troy pounds; tr lbs",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Nonclinical",
      "guidance_": "only used for weighing precious metals",
      "csUnitString_": "[oz_tr]",
      "ciUnitString_": "[OZ_TR]",
      "baseFactorStr_": "12",
      "baseFactor_": "12",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "scruple",
      "csCode_": "[sc_ap]",
      "ciCode_": "[SC_AP]",
      "property_": "mass",
      "magnitude_": 1.2959782,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "apoth",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "scruples; sc ap",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[gr]",
      "ciUnitString_": "[GR]",
      "baseFactorStr_": "20",
      "baseFactor_": "20",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "dram - apothecary",
      "csCode_": "[dr_ap]",
      "ciCode_": "[DR_AP]",
      "property_": "mass",
      "magnitude_": 3.8879346,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "apoth",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ʒ; drachm; apothecaries drams; dr ap; dram ap",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Nonclinical",
      "guidance_": "unit still used in the US occasionally to measure amount of drugs in pharmacies",
      "csUnitString_": "[sc_ap]",
      "ciUnitString_": "[SC_AP]",
      "baseFactorStr_": "3",
      "baseFactor_": "3",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "ounce - apothecary",
      "csCode_": "[oz_ap]",
      "ciCode_": "[OZ_AP]",
      "property_": "mass",
      "magnitude_": 31.1034768,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "apoth",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "apothecary ounces; oz ap; ap ozs; ozs ap",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[dr_ap]",
      "ciUnitString_": "[DR_AP]",
      "baseFactorStr_": "8",
      "baseFactor_": "8",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pound - apothecary",
      "csCode_": "[lb_ap]",
      "ciCode_": "[LB_AP]",
      "property_": "mass",
      "magnitude_": 373.2417216,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "apoth",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "apothecary pounds; apothecaries pounds; ap lb; lb ap; ap lbs; lbs ap",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[oz_ap]",
      "ciUnitString_": "[OZ_AP]",
      "baseFactorStr_": "12",
      "baseFactor_": "12",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "ounce - metric",
      "csCode_": "[oz_m]",
      "ciCode_": "[OZ_M]",
      "property_": "mass",
      "magnitude_": 28,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "apoth",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "metric ounces; m ozs",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "see [oz_av] (the avoirdupois ounce) for the standard ounce used internationally; [oz_m] is equal to 28 grams and is based on the apothecaries' system of mass units which is used in some US pharmacies. ",
      "csUnitString_": "g",
      "ciUnitString_": "g",
      "baseFactorStr_": "28",
      "baseFactor_": "28",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "line",
      "csCode_": "[lne]",
      "ciCode_": "[LNE]",
      "property_": "length",
      "magnitude_": 0.002116666666666667,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "British lines; br L; L; l",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[in_i]/12",
      "ciUnitString_": "[IN_I]/12",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "point (typography)",
      "csCode_": "[pnt]",
      "ciCode_": "[PNT]",
      "property_": "length",
      "magnitude_": 0.0003527777777777778,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "DTP points; desktop publishing point; pt; pnt",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "typography unit for typesetter's length",
      "csUnitString_": "[lne]/6",
      "ciUnitString_": "[LNE]/6",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pica (typography)",
      "csCode_": "[pca]",
      "ciCode_": "[PCA]",
      "property_": "length",
      "magnitude_": 0.004233333333333334,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picas",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "typography unit for typesetter's length",
      "csUnitString_": "[pnt]",
      "ciUnitString_": "[PNT]",
      "baseFactorStr_": "12",
      "baseFactor_": "12",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Printer's point (typography)",
      "csCode_": "[pnt_pr]",
      "ciCode_": "[PNT_PR]",
      "property_": "length",
      "magnitude_": 0.00035145980000000004,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pnt pr",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "typography unit for typesetter's length",
      "csUnitString_": "[in_i]",
      "ciUnitString_": "[IN_I]",
      "baseFactorStr_": "0.013837",
      "baseFactor_": "0.013837",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Printer's pica  (typography)",
      "csCode_": "[pca_pr]",
      "ciCode_": "[PCA_PR]",
      "property_": "length",
      "magnitude_": 0.004217517600000001,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pca pr; Printer's picas",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "typography unit for typesetter's length",
      "csUnitString_": "[pnt_pr]",
      "ciUnitString_": "[PNT_PR]",
      "baseFactorStr_": "12",
      "baseFactor_": "12",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pied",
      "csCode_": "[pied]",
      "ciCode_": "[PIED]",
      "property_": "length",
      "magnitude_": 0.3248,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pieds du roi; Paris foot; royal; French; feet",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "cm",
      "ciUnitString_": "CM",
      "baseFactorStr_": "32.48",
      "baseFactor_": "32.48",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pouce",
      "csCode_": "[pouce]",
      "ciCode_": "[POUCE]",
      "property_": "length",
      "magnitude_": 0.027066666666666666,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "historical French inches; French royal inches",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[pied]/12",
      "ciUnitString_": "[PIED]/12",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "ligne",
      "csCode_": "[ligne]",
      "ciCode_": "[LIGNE]",
      "property_": "length",
      "magnitude_": 0.0022555555555555554,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Paris lines; lignes",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "",
      "csUnitString_": "[pouce]/12",
      "ciUnitString_": "[POUCE]/12",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "didot",
      "csCode_": "[didot]",
      "ciCode_": "[DIDOT]",
      "property_": "length",
      "magnitude_": 0.0003759259259259259,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Didot point; dd; Didots Point; didots; points",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "typography unit for typesetter's length",
      "csUnitString_": "[ligne]/6",
      "ciUnitString_": "[LIGNE]/6",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "cicero",
      "csCode_": "[cicero]",
      "ciCode_": "[CICERO]",
      "property_": "length",
      "magnitude_": 0.004511111111111111,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "typeset",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Didot's pica; ciceros; picas",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Obsolete",
      "guidance_": "typography unit for typesetter's length",
      "csUnitString_": "[didot]",
      "ciUnitString_": "[DIDOT]",
      "baseFactorStr_": "12",
      "baseFactor_": "12",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "degrees Fahrenheit",
      "csCode_": "[degF]",
      "ciCode_": "[DEGF]",
      "property_": "temperature",
      "magnitude_": 0.5555555555555556,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          1,
          0,
          0
        ]
      },
      "printSymbol_": "°F",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "degF",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "°F; deg F",
      "source_": "UCUM",
      "loincProperty_": "Temp",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "K",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 0.5555555555555556,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "degrees Rankine",
      "csCode_": "[degR]",
      "ciCode_": "[degR]",
      "property_": "temperature",
      "magnitude_": 0.5555555555555556,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          1,
          0,
          0
        ]
      },
      "printSymbol_": "°R",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "°R; °Ra; Rankine",
      "source_": "UCUM",
      "loincProperty_": "Temp",
      "category_": "Obsolete",
      "guidance_": "Replaced by Kelvin",
      "csUnitString_": "K/9",
      "ciUnitString_": "K/9",
      "baseFactorStr_": "5",
      "baseFactor_": "5",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "degrees Réaumur",
      "csCode_": "[degRe]",
      "ciCode_": "[degRe]",
      "property_": "temperature",
      "magnitude_": 1.25,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          1,
          0,
          0
        ]
      },
      "printSymbol_": "°Ré",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "degRe",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "°Ré, °Re, °r; Réaumur; degree Reaumur; Reaumur",
      "source_": "UCUM",
      "loincProperty_": "Temp",
      "category_": "Obsolete",
      "guidance_": "replaced by Celsius",
      "csUnitString_": "K",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 1.25,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "calorie at 15°C",
      "csCode_": "cal_[15]",
      "ciCode_": "CAL_[15]",
      "property_": "energy",
      "magnitude_": 4185.8,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cal<sub>15°C</sub>",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "calorie 15 C; cals 15 C; calories at 15 C",
      "source_": "UCUM",
      "loincProperty_": "Enrg",
      "category_": "Nonclinical",
      "guidance_": "equal to 4.1855 joules; calorie most often used in engineering",
      "csUnitString_": "J",
      "ciUnitString_": "J",
      "baseFactorStr_": "4.18580",
      "baseFactor_": "4.18580",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "calorie at 20°C",
      "csCode_": "cal_[20]",
      "ciCode_": "CAL_[20]",
      "property_": "energy",
      "magnitude_": 4181.9,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cal<sub>20°C</sub>",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "calorie 20 C; cal 20 C; calories at 20 C",
      "source_": "UCUM",
      "loincProperty_": "Enrg",
      "category_": "Clinical",
      "guidance_": "equal to 4.18190  joules. ",
      "csUnitString_": "J",
      "ciUnitString_": "J",
      "baseFactorStr_": "4.18190",
      "baseFactor_": "4.18190",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mean calorie",
      "csCode_": "cal_m",
      "ciCode_": "CAL_M",
      "property_": "energy",
      "magnitude_": 4190.0199999999995,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cal<sub>m</sub>",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mean cals; mean calories",
      "source_": "UCUM",
      "loincProperty_": "Enrg",
      "category_": "Clinical",
      "guidance_": "equal to 4.19002 joules. ",
      "csUnitString_": "J",
      "ciUnitString_": "J",
      "baseFactorStr_": "4.19002",
      "baseFactor_": "4.19002",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international table calorie",
      "csCode_": "cal_IT",
      "ciCode_": "CAL_IT",
      "property_": "energy",
      "magnitude_": 4186.8,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cal<sub>IT</sub>",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "calories IT; IT cals; international steam table calories",
      "source_": "UCUM",
      "loincProperty_": "Enrg",
      "category_": "Nonclinical",
      "guidance_": "used in engineering steam tables and defined as 1/860 international watt-hour; equal to 4.1868 joules",
      "csUnitString_": "J",
      "ciUnitString_": "J",
      "baseFactorStr_": "4.1868",
      "baseFactor_": "4.1868",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "thermochemical calorie",
      "csCode_": "cal_th",
      "ciCode_": "CAL_TH",
      "property_": "energy",
      "magnitude_": 4184,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cal<sub>th</sub>",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "thermochemical calories; th cals",
      "source_": "UCUM",
      "loincProperty_": "Enrg",
      "category_": "Clinical",
      "guidance_": "equal to 4.184 joules; used as the unit in medicine and biochemistry (equal to cal)",
      "csUnitString_": "J",
      "ciUnitString_": "J",
      "baseFactorStr_": "4.184",
      "baseFactor_": "4.184",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "calorie",
      "csCode_": "cal",
      "ciCode_": "CAL",
      "property_": "energy",
      "magnitude_": 4184,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cal",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gram calories; small calories",
      "source_": "UCUM",
      "loincProperty_": "Enrg",
      "category_": "Clinical",
      "guidance_": "equal to 4.184 joules (the same value as the thermochemical calorie, which is the most common calorie used in medicine and biochemistry)",
      "csUnitString_": "cal_th",
      "ciUnitString_": "CAL_TH",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nutrition label Calories",
      "csCode_": "[Cal]",
      "ciCode_": "[CAL]",
      "property_": "energy",
      "magnitude_": 4184000,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Cal",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "food calories; Cal; kcal",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "kcal_th",
      "ciUnitString_": "KCAL_TH",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "British thermal unit at 39°F",
      "csCode_": "[Btu_39]",
      "ciCode_": "[BTU_39]",
      "property_": "energy",
      "magnitude_": 1059670,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Btu<sub>39°F</sub>",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "BTU 39F; BTU 39 F; B.T.U. 39 F; B.Th.U. 39 F; BThU 39 F; British thermal units",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Nonclinical",
      "guidance_": "equal to 1.05967 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries",
      "csUnitString_": "kJ",
      "ciUnitString_": "kJ",
      "baseFactorStr_": "1.05967",
      "baseFactor_": "1.05967",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "British thermal unit at 59°F",
      "csCode_": "[Btu_59]",
      "ciCode_": "[BTU_59]",
      "property_": "energy",
      "magnitude_": 1054800,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Btu<sub>59°F</sub>",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "BTU 59 F; BTU 59F; B.T.U. 59 F; B.Th.U. 59 F; BThU 59F; British thermal units",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Nonclinical",
      "guidance_": "equal to  1.05480 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries",
      "csUnitString_": "kJ",
      "ciUnitString_": "kJ",
      "baseFactorStr_": "1.05480",
      "baseFactor_": "1.05480",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "British thermal unit at 60°F",
      "csCode_": "[Btu_60]",
      "ciCode_": "[BTU_60]",
      "property_": "energy",
      "magnitude_": 1054680,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Btu<sub>60°F</sub>",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "BTU 60 F; BTU 60F; B.T.U. 60 F; B.Th.U. 60 F; BThU 60 F; British thermal units 60 F",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Nonclinical",
      "guidance_": "equal to 1.05468 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries",
      "csUnitString_": "kJ",
      "ciUnitString_": "kJ",
      "baseFactorStr_": "1.05468",
      "baseFactor_": "1.05468",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mean British thermal unit",
      "csCode_": "[Btu_m]",
      "ciCode_": "[BTU_M]",
      "property_": "energy",
      "magnitude_": 1055870,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Btu<sub>m</sub>",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "BTU mean; B.T.U. mean; B.Th.U. mean; BThU mean; British thermal units mean; ",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Nonclinical",
      "guidance_": "equal to 1.05587 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries",
      "csUnitString_": "kJ",
      "ciUnitString_": "kJ",
      "baseFactorStr_": "1.05587",
      "baseFactor_": "1.05587",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international table British thermal unit",
      "csCode_": "[Btu_IT]",
      "ciCode_": "[BTU_IT]",
      "property_": "energy",
      "magnitude_": 1055055.85262,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Btu<sub>IT</sub>",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "BTU IT; B.T.U. IT; B.Th.U. IT; BThU IT; British thermal units IT",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Nonclinical",
      "guidance_": "equal to 1.055 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries",
      "csUnitString_": "kJ",
      "ciUnitString_": "kJ",
      "baseFactorStr_": "1.05505585262",
      "baseFactor_": "1.05505585262",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "thermochemical British thermal unit",
      "csCode_": "[Btu_th]",
      "ciCode_": "[BTU_TH]",
      "property_": "energy",
      "magnitude_": 1054350,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Btu<sub>th</sub>",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "BTU Th; B.T.U. Th; B.Th.U. Th; BThU Th; thermochemical British thermal units",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Nonclinical",
      "guidance_": "equal to 1.054350 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries",
      "csUnitString_": "kJ",
      "ciUnitString_": "kJ",
      "baseFactorStr_": "1.054350",
      "baseFactor_": "1.054350",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "British thermal unit",
      "csCode_": "[Btu]",
      "ciCode_": "[BTU]",
      "property_": "energy",
      "magnitude_": 1054350,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "btu",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "BTU; B.T.U. ; B.Th.U.; BThU; British thermal units",
      "source_": "UCUM",
      "loincProperty_": "Eng",
      "category_": "Nonclinical",
      "guidance_": "equal to the thermochemical British thermal unit equal to 1.054350 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries",
      "csUnitString_": "[Btu_th]",
      "ciUnitString_": "[BTU_TH]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "horsepower - mechanical",
      "csCode_": "[HP]",
      "ciCode_": "[HP]",
      "property_": "power",
      "magnitude_": 745699.8715822703,
      "dim_": {
        "dimVec_": [
          2,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "imperial horsepowers",
      "source_": "UCUM",
      "loincProperty_": "EngRat",
      "category_": "Nonclinical",
      "guidance_": "refers to mechanical horsepower, which is unit used to measure engine power primarily in the US. ",
      "csUnitString_": "[ft_i].[lbf_av]/s",
      "ciUnitString_": "[FT_I].[LBF_AV]/S",
      "baseFactorStr_": "550",
      "baseFactor_": "550",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "tex",
      "csCode_": "tex",
      "ciCode_": "TEX",
      "property_": "linear mass density (of textile thread)",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -1,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "tex",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "linear mass density; texes",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of linear mass density for fibers equal to gram per 1000 meters",
      "csUnitString_": "g/km",
      "ciUnitString_": "G/KM",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Denier (linear mass density)",
      "csCode_": "[den]",
      "ciCode_": "[DEN]",
      "property_": "linear mass density (of textile thread)",
      "magnitude_": 0.0001111111111111111,
      "dim_": {
        "dimVec_": [
          -1,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "den",
      "class_": "heat",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "den; deniers",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Nonclinical",
      "guidance_": "equal to the mass in grams per 9000 meters of the fiber (1 denier = 1 strand of silk)",
      "csUnitString_": "g/9/km",
      "ciUnitString_": "G/9/KM",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "meter of water column",
      "csCode_": "m[H2O]",
      "ciCode_": "M[H2O]",
      "property_": "pressure",
      "magnitude_": 9806650,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "m HO<sub><r>2</r></sub>",
      "class_": "clinical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mH2O; m H2O; meters of water column; metres; pressure",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "kPa",
      "ciUnitString_": "KPAL",
      "baseFactorStr_": "980665e-5",
      "baseFactor_": "9.80665",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "meter of mercury column",
      "csCode_": "m[Hg]",
      "ciCode_": "M[HG]",
      "property_": "pressure",
      "magnitude_": 133322000,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "m Hg",
      "class_": "clinical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mHg; m Hg; meters of mercury column; metres; pressure",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "kPa",
      "ciUnitString_": "KPAL",
      "baseFactorStr_": "133.3220",
      "baseFactor_": "133.3220",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "inch of water column",
      "csCode_": "[in_i'H2O]",
      "ciCode_": "[IN_I'H2O]",
      "property_": "pressure",
      "magnitude_": 249088.91000000003,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "in HO<sub><r>2</r></sub>",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "inches WC; inAq; in H2O; inch of water gauge; iwg; pressure",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "unit of pressure, especially in respiratory and ventilation care",
      "csUnitString_": "m[H2O].[in_i]/m",
      "ciUnitString_": "M[H2O].[IN_I]/M",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "inch of mercury column",
      "csCode_": "[in_i'Hg]",
      "ciCode_": "[IN_I'HG]",
      "property_": "pressure",
      "magnitude_": 3386378.8000000003,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "in Hg",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "inHg; in Hg; pressure; inches",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "unit of pressure used in US to measure barometric pressure and occasionally blood pressure (see mm[Hg] for unit used internationally)",
      "csUnitString_": "m[Hg].[in_i]/m",
      "ciUnitString_": "M[HG].[IN_I]/M",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "peripheral vascular resistance unit",
      "csCode_": "[PRU]",
      "ciCode_": "[PRU]",
      "property_": "fluid resistance",
      "magnitude_": 133322000000,
      "dim_": {
        "dimVec_": [
          -4,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "P.R.U.",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "peripheral vascular resistance units; peripheral resistance unit; peripheral resistance units; PRU",
      "source_": "UCUM",
      "loincProperty_": "FldResist",
      "category_": "Clinical",
      "guidance_": "used to assess blood flow in the capillaries; equal to 1 mmH.min/mL = 133.3 Pa·min/mL",
      "csUnitString_": "mm[Hg].s/ml",
      "ciUnitString_": "MM[HG].S/ML",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Wood unit",
      "csCode_": "[wood'U]",
      "ciCode_": "[WOOD'U]",
      "property_": "fluid resistance",
      "magnitude_": 7999320000,
      "dim_": {
        "dimVec_": [
          -4,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Wood U.",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "hybrid reference units; HRU; mmHg.min/L; vascular resistance",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "simplified unit of measurement for for measuring pulmonary vascular resistance that uses pressure; equal to mmHg.min/L",
      "csUnitString_": "mm[Hg].min/L",
      "ciUnitString_": "MM[HG].MIN/L",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "diopter (lens)",
      "csCode_": "[diop]",
      "ciCode_": "[DIOP]",
      "property_": "refraction of a lens",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "dpt",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "inv",
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "diopters; diop; dioptre; dpt; refractive power",
      "source_": "UCUM",
      "loincProperty_": "InvLen",
      "category_": "Clinical",
      "guidance_": "unit of optical power of lens represented by inverse meters (m^-1)",
      "csUnitString_": "m",
      "ciUnitString_": "/M",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "prism diopter (magnifying power)",
      "csCode_": "[p'diop]",
      "ciCode_": "[P'DIOP]",
      "property_": "refraction of a prism",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          1,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "PD",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "tanTimes100",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "diopters; dioptres; p diops; pdiop; dpt; pdptr; Δ; cm/m; centimeter per meter; centimetre; metre",
      "source_": "UCUM",
      "loincProperty_": "Angle",
      "category_": "Clinical",
      "guidance_": "unit for prism correction in eyeglass prescriptions",
      "csUnitString_": "rad",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "percent of slope",
      "csCode_": "%[slope]",
      "ciCode_": "%[SLOPE]",
      "property_": "slope",
      "magnitude_": 0.017453292519943295,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          1,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "%",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "100tan",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "% slope; %slope; percents slopes",
      "source_": "UCUM",
      "loincProperty_": "VelFr; ElpotRatFr; VelRtoFr; AccelFr",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "deg",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mesh",
      "csCode_": "[mesh_i]",
      "ciCode_": "[MESH_I]",
      "property_": "lineic number",
      "magnitude_": 0.025400000000000002,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "inv",
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meshes",
      "source_": "UCUM",
      "loincProperty_": "NLen (lineic number)",
      "category_": "Clinical",
      "guidance_": "traditional unit of length defined as the number of strands or particles per inch",
      "csUnitString_": "[in_i]",
      "ciUnitString_": "/[IN_I]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "French (catheter gauge) ",
      "csCode_": "[Ch]",
      "ciCode_": "[CH]",
      "property_": "gauge of catheters",
      "magnitude_": 0.0003333333333333333,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Ch",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Charrières, French scales; French gauges; Fr, Fg, Ga, FR, Ch",
      "source_": "UCUM",
      "loincProperty_": "Len; Circ; Diam",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "mm/3",
      "ciUnitString_": "MM/3",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "drop - metric (1/20 mL)",
      "csCode_": "[drp]",
      "ciCode_": "[DRP]",
      "property_": "volume",
      "magnitude_": 5e-8,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "drp",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "drop dosing units; metric drops; gtt",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "standard unit used in the US and internationally for clinical medicine but note that although [drp] is defined as 1/20 milliliter, in practice, drop sizes will vary due to external factors",
      "csUnitString_": "ml/20",
      "ciUnitString_": "ML/20",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Hounsfield unit",
      "csCode_": "[hnsf'U]",
      "ciCode_": "[HNSF'U]",
      "property_": "x-ray attenuation",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "HF",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "HU; units",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "used to measure X-ray attenuation, especially in CT scans.",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Metabolic Equivalent of Task ",
      "csCode_": "[MET]",
      "ciCode_": "[MET]",
      "property_": "metabolic cost of physical activity",
      "magnitude_": 5.833333333333334e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "MET",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "metabolic equivalents",
      "source_": "UCUM",
      "loincProperty_": "RelEngRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure rate of energy expenditure per power in treadmill and other functional tests",
      "csUnitString_": "mL/min/kg",
      "ciUnitString_": "ML/MIN/KG",
      "baseFactorStr_": "3.5",
      "baseFactor_": "3.5",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of decimal series (retired)",
      "csCode_": "[hp'_X]",
      "ciCode_": "[HP'_X]",
      "property_": "homeopathic potency (retired)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "X",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "hpX",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 1,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of centesimal series (retired)",
      "csCode_": "[hp'_C]",
      "ciCode_": "[HP'_C]",
      "property_": "homeopathic potency (retired)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "C",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "hpC",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 1,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of millesimal series (retired)",
      "csCode_": "[hp'_M]",
      "ciCode_": "[HP'_M]",
      "property_": "homeopathic potency (retired)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "M",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "hpM",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 1,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of quintamillesimal series (retired)",
      "csCode_": "[hp'_Q]",
      "ciCode_": "[HP'_Q]",
      "property_": "homeopathic potency (retired)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "Q",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "hpQ",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 1,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of decimal hahnemannian series",
      "csCode_": "[hp_X]",
      "ciCode_": "[HP_X]",
      "property_": "homeopathic potency (Hahnemann)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "X",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of centesimal hahnemannian series",
      "csCode_": "[hp_C]",
      "ciCode_": "[HP_C]",
      "property_": "homeopathic potency (Hahnemann)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "C",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of millesimal hahnemannian series",
      "csCode_": "[hp_M]",
      "ciCode_": "[HP_M]",
      "property_": "homeopathic potency (Hahnemann)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "M",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of quintamillesimal hahnemannian series",
      "csCode_": "[hp_Q]",
      "ciCode_": "[HP_Q]",
      "property_": "homeopathic potency (Hahnemann)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "Q",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of decimal korsakovian series",
      "csCode_": "[kp_X]",
      "ciCode_": "[KP_X]",
      "property_": "homeopathic potency (Korsakov)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "X",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of centesimal korsakovian series",
      "csCode_": "[kp_C]",
      "ciCode_": "[KP_C]",
      "property_": "homeopathic potency (Korsakov)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "C",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of millesimal korsakovian series",
      "csCode_": "[kp_M]",
      "ciCode_": "[KP_M]",
      "property_": "homeopathic potency (Korsakov)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "M",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "homeopathic potency of quintamillesimal korsakovian series",
      "csCode_": "[kp_Q]",
      "ciCode_": "[KP_Q]",
      "property_": "homeopathic potency (Korsakov)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "Q",
      "class_": "clinical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "equivalent",
      "csCode_": "eq",
      "ciCode_": "EQ",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+23,
      "dim_": null,
      "printSymbol_": "eq",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "equivalents",
      "source_": "UCUM",
      "loincProperty_": "Sub",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "osmole",
      "csCode_": "osm",
      "ciCode_": "OSM",
      "property_": "amount of substance (dissolved particles)",
      "magnitude_": 6.0221367e+23,
      "dim_": null,
      "printSymbol_": "osm",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "osmoles; osmols",
      "source_": "UCUM",
      "loincProperty_": "Osmol",
      "category_": "Clinical",
      "guidance_": "the number of moles of solute that contribute to the osmotic pressure of a solution",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pH",
      "csCode_": "[pH]",
      "ciCode_": "[PH]",
      "property_": "acidity",
      "magnitude_": 6.0221366999999994e+26,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pH",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "pH",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "pH scale",
      "source_": "UCUM",
      "loincProperty_": "LogCnc",
      "category_": "Clinical",
      "guidance_": "Log concentration of H+",
      "csUnitString_": "mol/l",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "gram percent",
      "csCode_": "g%",
      "ciCode_": "G%",
      "property_": "mass concentration",
      "magnitude_": 10000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g%",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gram %; gram%; grams per deciliter; g/dL; gm per dL; gram percents",
      "source_": "UCUM",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "equivalent to unit gram per deciliter (g/dL), a unit often used in medical tests to represent solution concentrations",
      "csUnitString_": "g/dl",
      "ciUnitString_": "G/DL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Svedberg unit",
      "csCode_": "[S]",
      "ciCode_": "[S]",
      "property_": "sedimentation coefficient",
      "magnitude_": 1e-13,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "S",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Sv; 10^-13 seconds; 100 fs; 100 femtoseconds",
      "source_": "UCUM",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "unit of time used in measuring particle's sedimentation rate, usually after centrifugation. ",
      "csUnitString_": "s",
      "ciUnitString_": "10*-13.S",
      "baseFactorStr_": "1",
      "baseFactor_": 1e-13,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "high power field (microscope)",
      "csCode_": "[HPF]",
      "ciCode_": "[HPF]",
      "property_": "view area in microscope",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "HPF",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "HPF",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "area visible under the maximum magnification power of the objective in microscopy (usually 400x)\n",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "low power field (microscope)",
      "csCode_": "[LPF]",
      "ciCode_": "[LPF]",
      "property_": "view area in microscope",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "LPF",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "LPF; fields",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "area visible under the low magnification of the objective in microscopy (usually 100 x)\n",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "100",
      "baseFactor_": "100",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "katal",
      "csCode_": "kat",
      "ciCode_": "KAT",
      "property_": "catalytic activity",
      "magnitude_": 6.0221367e+23,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kat",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mol/secs; moles per second; mol*sec-1; mol*s-1; mol.s-1; katals; catalytic activity; enzymatic; enzyme units; activities",
      "source_": "UCUM",
      "loincProperty_": "CAct",
      "category_": "Clinical",
      "guidance_": "kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.",
      "csUnitString_": "mol/s",
      "ciUnitString_": "MOL/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit",
      "csCode_": "U",
      "ciCode_": "U",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "micromoles per minute; umol/min; umol per minute; umol min-1; enzymatic activity; enzyme activity",
      "source_": "UCUM",
      "loincProperty_": "CAct",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit - arbitrary",
      "csCode_": "[iU]",
      "ciCode_": "[IU]",
      "property_": "arbitrary",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "IU",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "international units; IE; F2",
      "source_": "UCUM",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit - arbitrary",
      "csCode_": "[IU]",
      "ciCode_": "[IU]",
      "property_": "arbitrary",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "i.U.",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "international units; IE; F2",
      "source_": "UCUM",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "arbitary unit",
      "csCode_": "[arb'U]",
      "ciCode_": "[ARB'U]",
      "property_": "arbitrary",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "arb. U",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "arbitary units; arb units; arbU",
      "source_": "UCUM",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "relative unit of measurement to show the ratio of test measurement to reference measurement",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "United States Pharmacopeia unit",
      "csCode_": "[USP'U]",
      "ciCode_": "[USP'U]",
      "property_": "arbitrary",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "U.S.P.",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "USP U; USP'U",
      "source_": "UCUM",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "a dose unit to express potency of drugs and vitamins defined by the United States Pharmacopoeia; usually 1 USP = 1 IU",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "GPL unit",
      "csCode_": "[GPL'U]",
      "ciCode_": "[GPL'U]",
      "property_": "biologic activity of anticardiolipin IgG",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "GPL Units; GPL U; IgG anticardiolipin units; IgG Phospholipid",
      "source_": "UCUM",
      "loincProperty_": "ACnc; AMass",
      "category_": "Clinical",
      "guidance_": "Units for an antiphospholipid test",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "MPL unit",
      "csCode_": "[MPL'U]",
      "ciCode_": "[MPL'U]",
      "property_": "biologic activity of anticardiolipin IgM",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "MPL units; MPL U; MPL'U; IgM anticardiolipin units; IgM Phospholipid Units ",
      "source_": "UCUM",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "units for antiphospholipid test",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "APL unit",
      "csCode_": "[APL'U]",
      "ciCode_": "[APL'U]",
      "property_": "biologic activity of anticardiolipin IgA",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "APL units; APL U; IgA anticardiolipin; IgA Phospholipid; biologic activity of",
      "source_": "UCUM",
      "loincProperty_": "AMass; ACnc",
      "category_": "Clinical",
      "guidance_": "Units for an anti phospholipid syndrome test",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Bethesda unit",
      "csCode_": "[beth'U]",
      "ciCode_": "[BETH'U]",
      "property_": "biologic activity of factor VIII inhibitor",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "BU",
      "source_": "UCUM",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "measures of blood coagulation inhibitior for many blood factors",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "anti factor Xa unit",
      "csCode_": "[anti'Xa'U]",
      "ciCode_": "[ANTI'XA'U]",
      "property_": "biologic activity of factor Xa inhibitor (heparin)",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "units",
      "source_": "UCUM",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "[anti'Xa'U] unit is equivalent to and can be converted to IU/mL. ",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Todd unit",
      "csCode_": "[todd'U]",
      "ciCode_": "[TODD'U]",
      "property_": "biologic activity antistreptolysin O",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "units",
      "source_": "UCUM",
      "loincProperty_": "InvThres; RtoThres",
      "category_": "Clinical",
      "guidance_": "the unit for the results of the testing for antistreptolysin O (ASO)",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Dye unit",
      "csCode_": "[dye'U]",
      "ciCode_": "[DYE'U]",
      "property_": "biologic activity of amylase",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "units",
      "source_": "UCUM",
      "loincProperty_": "CCnc",
      "category_": "Obsolete",
      "guidance_": "equivalent to the Somogyi unit, which is an enzyme unit for amylase but better to use U, the standard enzyme unit for measuring catalytic activity",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Somogyi unit",
      "csCode_": "[smgy'U]",
      "ciCode_": "[SMGY'U]",
      "property_": "biologic activity of amylase",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "Somogyi units; smgy U",
      "source_": "UCUM",
      "loincProperty_": "CAct",
      "category_": "Clinical",
      "guidance_": "measures the enzymatic activity of amylase in blood serum - better to use base units mg/mL ",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Bodansky unit",
      "csCode_": "[bdsk'U]",
      "ciCode_": "[BDSK'U]",
      "property_": "biologic activity of phosphatase",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "",
      "source_": "UCUM",
      "loincProperty_": "ACnc",
      "category_": "Obsolete",
      "guidance_": "Enzyme unit specific to alkaline phosphatase - better to use standard enzyme unit of U",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "King-Armstrong unit",
      "csCode_": "[ka'U]",
      "ciCode_": "[KA'U]",
      "property_": "biologic activity of phosphatase",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "King-Armstrong Units; King units",
      "source_": "UCUM",
      "loincProperty_": "AMass",
      "category_": "Obsolete",
      "guidance_": "enzyme units for acid phosphatase - better to use enzyme unit [U]",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Kunkel unit",
      "csCode_": "[knk'U]",
      "ciCode_": "[KNK'U]",
      "property_": "arbitrary biologic activity",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": null,
      "source_": "UCUM",
      "loincProperty_": null,
      "category_": null,
      "guidance_": null,
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Mac Lagan unit",
      "csCode_": "[mclg'U]",
      "ciCode_": "[MCLG'U]",
      "property_": "arbitrary biologic activity",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "galactose index; galactose tolerance test; thymol turbidity test unit; mclg U; units; indexes",
      "source_": "UCUM",
      "loincProperty_": "ACnc",
      "category_": "Obsolete",
      "guidance_": "unit for liver tests - previously used in thymol turbidity tests for liver disease diagnoses, and now is sometimes referred to in the oral galactose tolerance test",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "tuberculin unit",
      "csCode_": "[tb'U]",
      "ciCode_": "[TB'U]",
      "property_": "biologic activity of tuberculin",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "TU; units",
      "source_": "UCUM",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "amount of tuberculin antigen -usually in reference to a TB skin test ",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "50% cell culture infectious dose",
      "csCode_": "[CCID_50]",
      "ciCode_": "[CCID_50]",
      "property_": "biologic activity (infectivity) of an infectious agent preparation",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "CCID<sub>50</sub>",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "CCID50; 50% cell culture infective doses",
      "source_": "UCUM",
      "loincProperty_": "NumThres",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "50% tissue culture infectious dose",
      "csCode_": "[TCID_50]",
      "ciCode_": "[TCID_50]",
      "property_": "biologic activity (infectivity) of an infectious agent preparation",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "TCID<sub>50</sub>",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "TCID50; 50% tissue culture infective dose",
      "source_": "UCUM",
      "loincProperty_": "NumThres",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "50% embryo infectious dose",
      "csCode_": "[EID_50]",
      "ciCode_": "[EID_50]",
      "property_": "biologic activity (infectivity) of an infectious agent preparation",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "EID<sub>50</sub>",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "EID50; 50% embryo infective doses; EID50 Egg Infective Dosage",
      "source_": "UCUM",
      "loincProperty_": "thresNum",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "plaque forming units",
      "csCode_": "[PFU]",
      "ciCode_": "[PFU]",
      "property_": "amount of an infectious agent",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "PFU",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "PFU",
      "source_": "UCUM",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "tests usually report unit as number of PFU per unit volume",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "focus forming units (cells)",
      "csCode_": "[FFU]",
      "ciCode_": "[FFU]",
      "property_": "amount of an infectious agent",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "FFU",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "FFU",
      "source_": "UCUM",
      "loincProperty_": "EntNum",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "colony forming units",
      "csCode_": "[CFU]",
      "ciCode_": "[CFU]",
      "property_": "amount of a proliferating organism",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "CFU",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "CFU",
      "source_": "UCUM",
      "loincProperty_": "Num",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "index of reactivity (allergen)",
      "csCode_": "[IR]",
      "ciCode_": "[IR]",
      "property_": "amount of an allergen callibrated through in-vivo testing using the Stallergenes® method.",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "IR",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IR; indexes",
      "source_": "UCUM",
      "loincProperty_": "Acnc",
      "category_": "Clinical",
      "guidance_": "amount of an allergen callibrated through in-vivo testing using the Stallergenes method. Usually reported in tests as IR/mL",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bioequivalent allergen unit",
      "csCode_": "[BAU]",
      "ciCode_": "[BAU]",
      "property_": "amount of an allergen callibrated through in-vivo testing based on the ID50EAL method of (intradermal dilution for 50mm sum of erythema diameters",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "BAU",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "BAU; Bioequivalent Allergy Units; bioequivalent allergen units",
      "source_": "UCUM",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "allergy unit",
      "csCode_": "[AU]",
      "ciCode_": "[AU]",
      "property_": "procedure defined amount of an allergen using some reference standard",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "AU",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "allergy units; allergen units; AU",
      "source_": "UCUM",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "Most standard test allergy units are reported as [IU] or as %. ",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "allergen unit for Ambrosia artemisiifolia",
      "csCode_": "[Amb'a'1'U]",
      "ciCode_": "[AMB'A'1'U]",
      "property_": "procedure defined amount of the major allergen of ragweed.",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "Amb a 1 U",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "Amb a 1 unit; Antigen E; AgE U; allergen units",
      "source_": "UCUM",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "Amb a 1 is the major allergen in short ragweed, and can be converted Bioequivalent allergen units (BAU) where 350 Amb a 1 U/mL = 100,000 BAU/mL",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "protein nitrogen unit (allergen testing)",
      "csCode_": "[PNU]",
      "ciCode_": "[PNU]",
      "property_": "procedure defined amount of a protein substance",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "PNU",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "protein nitrogen units; PNU",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "defined as 0.01 ug of phosphotungstic acid-precipitable protein nitrogen. Being replaced by bioequivalent allergy units (BAU).",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Limit of flocculation",
      "csCode_": "[Lf]",
      "ciCode_": "[LF]",
      "property_": "procedure defined amount of an antigen substance",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "Lf",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "Lf doses",
      "source_": "UCUM",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "the antigen content  forming 1:1 ratio against 1 unit of antitoxin",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "D-antigen unit (polio)",
      "csCode_": "[D'ag'U]",
      "ciCode_": "[D'AG'U]",
      "property_": "procedure defined amount of a poliomyelitis d-antigen substance",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "DAgU; units",
      "source_": "UCUM",
      "loincProperty_": "Acnc",
      "category_": "Clinical",
      "guidance_": "unit of potency of poliovirus vaccine used for poliomyelitis prevention reported as D antigen units/mL. The unit is poliovirus type-specific.",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "fibrinogen equivalent units",
      "csCode_": "[FEU]",
      "ciCode_": "[FEU]",
      "property_": "amount of fibrinogen broken down into the measured d-dimers",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "FEU",
      "source_": "UCUM",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "Note both the FEU and DDU units are used to report D-dimer measurements. 1 DDU = 1/2 FFU",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "ELISA unit",
      "csCode_": "[ELU]",
      "ciCode_": "[ELU]",
      "property_": "arbitrary ELISA unit",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "Enzyme-Linked Immunosorbent Assay Units; ELU; EL. U",
      "source_": "UCUM",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Ehrlich units (urobilinogen)",
      "csCode_": "[EU]",
      "ciCode_": "[EU]",
      "property_": "Ehrlich unit",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "EU/dL; mg{urobilinogen}/dL",
      "source_": "UCUM",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "neper",
      "csCode_": "Np",
      "ciCode_": "NEP",
      "property_": "level",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "Np",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "ln",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "nepers",
      "source_": "UCUM",
      "loincProperty_": "LogRto",
      "category_": "Clinical",
      "guidance_": "logarithmic unit for ratios of measurements of physical field and power quantities, such as gain and loss of electronic signals",
      "csUnitString_": "1",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 1,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bel",
      "csCode_": "B",
      "ciCode_": "B",
      "property_": "level",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "B",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "lg",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "bels",
      "source_": "UCUM",
      "loincProperty_": "LogRto",
      "category_": "Clinical",
      "guidance_": "Logarithm of the ratio of power- or field-type quantities; usually expressed in decibels ",
      "csUnitString_": "1",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 1,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bel sound pressure",
      "csCode_": "B[SPL]",
      "ciCode_": "B[SPL]",
      "property_": "pressure level",
      "magnitude_": 0.02,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "B(SPL)",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "lgTimes2",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "bel SPL; B SPL; sound pressure bels",
      "source_": "UCUM",
      "loincProperty_": "LogRto",
      "category_": "Clinical",
      "guidance_": "used to measure sound level in acoustics",
      "csUnitString_": "Pa",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 0.00002,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bel volt",
      "csCode_": "B[V]",
      "ciCode_": "B[V]",
      "property_": "electric potential level",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "B(V)",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "lgTimes2",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "bel V; B V; volts bels",
      "source_": "UCUM",
      "loincProperty_": "LogRtoElp",
      "category_": "Clinical",
      "guidance_": "used to express power gain in electrical circuits",
      "csUnitString_": "V",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bel millivolt",
      "csCode_": "B[mV]",
      "ciCode_": "B[MV]",
      "property_": "electric potential level",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "B(mV)",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "lgTimes2",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "bel mV; B mV; millivolt bels; 10^-3V bels; 10*-3V ",
      "source_": "UCUM",
      "loincProperty_": "LogRtoElp",
      "category_": "Clinical",
      "guidance_": "used to express power gain in electrical circuits",
      "csUnitString_": "mV",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bel microvolt",
      "csCode_": "B[uV]",
      "ciCode_": "B[UV]",
      "property_": "electric potential level",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "B(μV)",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "lgTimes2",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "bel uV; B uV; microvolts bels; 10^-6V bel; 10*-6V bel",
      "source_": "UCUM",
      "loincProperty_": "LogRto",
      "category_": "Clinical",
      "guidance_": "used to express power gain in electrical circuits",
      "csUnitString_": "uV",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bel 10 nanovolt",
      "csCode_": "B[10.nV]",
      "ciCode_": "B[10.NV]",
      "property_": "electric potential level",
      "magnitude_": 0.000010000000000000003,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "B(10 nV)",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "lgTimes2",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "bel 10 nV; B 10 nV; 10 nanovolts bels",
      "source_": "UCUM",
      "loincProperty_": "LogRtoElp",
      "category_": "Clinical",
      "guidance_": "used to express power gain in electrical circuits",
      "csUnitString_": "nV",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bel watt",
      "csCode_": "B[W]",
      "ciCode_": "B[W]",
      "property_": "power level",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          2,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "B(W)",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "lg",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "bel W; b W; b Watt; Watts bels",
      "source_": "UCUM",
      "loincProperty_": "LogRto",
      "category_": "Clinical",
      "guidance_": "used to express power",
      "csUnitString_": "W",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bel kilowatt",
      "csCode_": "B[kW]",
      "ciCode_": "B[KW]",
      "property_": "power level",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          2,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "B(kW)",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "lg",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "bel kW; B kW; kilowatt bel; kW bel; kW B",
      "source_": "UCUM",
      "loincProperty_": "LogRto",
      "category_": "Clinical",
      "guidance_": "used to express power",
      "csUnitString_": "kW",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "stere",
      "csCode_": "st",
      "ciCode_": "STR",
      "property_": "volume",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "st",
      "class_": "misc",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "stère; m3; cubic meter; m^3; meters cubed; metre",
      "source_": "UCUM",
      "loincProperty_": "Vol",
      "category_": "Nonclinical",
      "guidance_": "equal to one cubic meter, usually used for measuring firewoord",
      "csUnitString_": "m3",
      "ciUnitString_": "M3",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Ångström",
      "csCode_": "Ao",
      "ciCode_": "AO",
      "property_": "length",
      "magnitude_": 1.0000000000000002e-10,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Å",
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Å; Angstroms; Ao; Ångströms",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "equal to 10^-10 meters; used to express wave lengths and atom scaled differences ",
      "csUnitString_": "nm",
      "ciUnitString_": "NM",
      "baseFactorStr_": "0.1",
      "baseFactor_": "0.1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "barn",
      "csCode_": "b",
      "ciCode_": "BRN",
      "property_": "action area",
      "magnitude_": 9.999999999999999e-29,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "b",
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "barns",
      "source_": "UCUM",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "used in high-energy physics to express cross-sectional areas",
      "csUnitString_": "fm2",
      "ciUnitString_": "FM2",
      "baseFactorStr_": "100",
      "baseFactor_": "100",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "technical atmosphere",
      "csCode_": "att",
      "ciCode_": "ATT",
      "property_": "pressure",
      "magnitude_": 98066499.99999999,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "at",
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "at; tech atm; tech atmosphere; kgf/cm2; atms; atmospheres",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Obsolete",
      "guidance_": "non-SI unit of pressure equal to one kilogram-force per square centimeter",
      "csUnitString_": "kgf/cm2",
      "ciUnitString_": "KGF/CM2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mho",
      "csCode_": "mho",
      "ciCode_": "MHO",
      "property_": "electric conductance",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -2,
          1,
          -1,
          0,
          0,
          2,
          0
        ]
      },
      "printSymbol_": "mho",
      "class_": "misc",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "siemens; ohm reciprocals; Ω^−1; Ω-1 ",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Obsolete",
      "guidance_": "unit of electric conductance (the inverse of electrical resistance) equal to ohm^-1",
      "csUnitString_": "S",
      "ciUnitString_": "S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "pound per square inch",
      "csCode_": "[psi]",
      "ciCode_": "[PSI]",
      "property_": "pressure",
      "magnitude_": 6894757.293168359,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "psi",
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "psi; lb/in2; lb per in2",
      "source_": "UCUM",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "[lbf_av]/[in_i]2",
      "ciUnitString_": "[LBF_AV]/[IN_I]2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "circle - plane angle",
      "csCode_": "circ",
      "ciCode_": "CIRC",
      "property_": "plane angle",
      "magnitude_": 6.283185307179586,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          1,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "circ",
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "angles; circles",
      "source_": "UCUM",
      "loincProperty_": "Angle",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "[pi].rad",
      "ciUnitString_": "[PI].RAD",
      "baseFactorStr_": "2",
      "baseFactor_": "2",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "spere - solid angle",
      "csCode_": "sph",
      "ciCode_": "SPH",
      "property_": "solid angle",
      "magnitude_": 12.566370614359172,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          2,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "sph",
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "speres",
      "source_": "UCUM",
      "loincProperty_": "Angle",
      "category_": "Clinical",
      "guidance_": "equal to the solid angle of an entire sphere = 4πsr (sr = steradian) ",
      "csUnitString_": "[pi].sr",
      "ciUnitString_": "[PI].SR",
      "baseFactorStr_": "4",
      "baseFactor_": "4",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "metric carat",
      "csCode_": "[car_m]",
      "ciCode_": "[CAR_M]",
      "property_": "mass",
      "magnitude_": 0.2,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ct<sub>m</sub>",
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "carats; ct; car m",
      "source_": "UCUM",
      "loincProperty_": "Mass",
      "category_": "Nonclinical",
      "guidance_": "unit of mass for gemstones",
      "csUnitString_": "g",
      "ciUnitString_": "G",
      "baseFactorStr_": "2e-1",
      "baseFactor_": "0.2",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "carat of gold alloys",
      "csCode_": "[car_Au]",
      "ciCode_": "[CAR_AU]",
      "property_": "mass fraction",
      "magnitude_": 0.041666666666666664,
      "dim_": null,
      "printSymbol_": "ct<sub><r>Au</r></sub>",
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "karats; k; kt; car au; carats",
      "source_": "UCUM",
      "loincProperty_": "MFr",
      "category_": "Nonclinical",
      "guidance_": "unit of purity for gold alloys",
      "csUnitString_": "/24",
      "ciUnitString_": "/24",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Smoot",
      "csCode_": "[smoot]",
      "ciCode_": "[SMOOT]",
      "property_": "length",
      "magnitude_": 1.7018000000000002,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "",
      "source_": "UCUM",
      "loincProperty_": "Len",
      "category_": "Nonclinical",
      "guidance_": "prank unit of length from MIT",
      "csUnitString_": "[in_i]",
      "ciUnitString_": "[IN_I]",
      "baseFactorStr_": "67",
      "baseFactor_": "67",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "meter per square seconds per square root of hertz",
      "csCode_": "[m/s2/Hz^(1/2)]",
      "ciCode_": "[M/S2/HZ^(1/2)]",
      "property_": "amplitude spectral density",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          2,
          -3,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": null,
      "class_": "misc",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "sqrt",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "m/s2/(Hz^.5); m/s2/(Hz^(1/2)); m per s2 per Hz^1/2",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Constant",
      "guidance_": "measures amplitude spectral density, and is equal to the square root of power spectral density\n ",
      "csUnitString_": "m2/s4/Hz",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bit - logarithmic",
      "csCode_": "bit_s",
      "ciCode_": "BIT_S",
      "property_": "amount of information",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "bit<sub>s</sub>",
      "class_": "infotech",
      "isMetric_": false,
      "variable_": null,
      "cnv_": "ld",
      "cnvPfx_": 1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "bit-s; bit s; bit logarithmic",
      "source_": "UCUM",
      "loincProperty_": "LogA",
      "category_": "Nonclinical",
      "guidance_": "defined as the log base 2 of the number of distinct signals; cannot practically be used to express more than 1000 bits\n\nIn information theory, the definition of the amount of self-information and information entropy is often expressed with the binary logarithm (log base 2)",
      "csUnitString_": "1",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 1,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "bit",
      "csCode_": "bit",
      "ciCode_": "BIT",
      "property_": "amount of information",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "bit",
      "class_": "infotech",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "bits",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Nonclinical",
      "guidance_": "dimensionless information unit of 1 used in computing and digital communications",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "byte",
      "csCode_": "By",
      "ciCode_": "BY",
      "property_": "amount of information",
      "magnitude_": 8,
      "dim_": null,
      "printSymbol_": "B",
      "class_": "infotech",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "bytes",
      "source_": "UCUM",
      "loincProperty_": "",
      "category_": "Nonclinical",
      "guidance_": "equal to 8 bits",
      "csUnitString_": "bit",
      "ciUnitString_": "bit",
      "baseFactorStr_": "8",
      "baseFactor_": "8",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "baud",
      "csCode_": "Bd",
      "ciCode_": "BD",
      "property_": "signal transmission rate",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Bd",
      "class_": "infotech",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "inv",
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Bd; bauds",
      "source_": "UCUM",
      "loincProperty_": "Freq",
      "category_": "Nonclinical",
      "guidance_": "unit to express rate in symbols per second or pulses per second. ",
      "csUnitString_": "s",
      "ciUnitString_": "/s",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per twelve hour",
      "csCode_": "/(12.h)",
      "ciCode_": "/12.HR",
      "property_": "time",
      "magnitude_": 0.000023148148148148147,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/12.h",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "per 12 hours; 12hrs; 12 hrs; /12hrs",
      "source_": "LOINC",
      "loincProperty_": "Rat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "min",
      "ciUnitString_": "MIN",
      "baseFactorStr_": "60",
      "baseFactor_": "60",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per arbitrary unit",
      "csCode_": "/[arb'U]",
      "ciCode_": "/[ARB'U]",
      "property_": "arbitrary",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "/arb. U",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "/arbU",
      "source_": "LOINC",
      "loincProperty_": "InvA ",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per high power field",
      "csCode_": "/[HPF]",
      "ciCode_": "/[HPF]",
      "property_": "view area in microscope",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "/HPF",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/HPF; per HPF",
      "source_": "LOINC",
      "loincProperty_": "Naric",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per international unit",
      "csCode_": "/[IU]",
      "ciCode_": "/[IU]",
      "property_": "arbitrary",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "/i.U.",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "international units; /IU; per IU",
      "source_": "LOINC",
      "loincProperty_": "InvA",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per low power field",
      "csCode_": "/[LPF]",
      "ciCode_": "/[LPF]",
      "property_": "view area in microscope",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "/LPF",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/LPF; per LPF",
      "source_": "LOINC",
      "loincProperty_": "Naric",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "100",
      "baseFactor_": "100",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per 10 billion  ",
      "csCode_": "/10*10",
      "ciCode_": "/10*10",
      "property_": "number",
      "magnitude_": 1e-10,
      "dim_": null,
      "printSymbol_": "/10<sup>10</sup>",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/10^10; per 10*10",
      "source_": "LOINC",
      "loincProperty_": "NFr",
      "category_": "Clinical",
      "guidance_": "used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per trillion ",
      "csCode_": "/10*12",
      "ciCode_": "/10*12",
      "property_": "number",
      "magnitude_": 1e-12,
      "dim_": null,
      "printSymbol_": "/10<sup>12</sup>",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/10^12; per 10*12",
      "source_": "LOINC",
      "loincProperty_": "NFr",
      "category_": "Clinical",
      "guidance_": "used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per thousand",
      "csCode_": "/10*3",
      "ciCode_": "/10*3",
      "property_": "number",
      "magnitude_": 0.001,
      "dim_": null,
      "printSymbol_": "/10<sup>3</sup>",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/10^3; per 10*3",
      "source_": "LOINC",
      "loincProperty_": "NFr",
      "category_": "Clinical",
      "guidance_": "used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per million",
      "csCode_": "/10*6",
      "ciCode_": "/10*6",
      "property_": "number",
      "magnitude_": 0.000001,
      "dim_": null,
      "printSymbol_": "/10<sup>6</sup>",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/10^6; per 10*6;",
      "source_": "LOINC",
      "loincProperty_": "NFr",
      "category_": "Clinical",
      "guidance_": "used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per billion",
      "csCode_": "/10*9",
      "ciCode_": "/10*9",
      "property_": "number",
      "magnitude_": 1e-9,
      "dim_": null,
      "printSymbol_": "/10<sup>9</sup>",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/10^9; per 10*9",
      "source_": "LOINC",
      "loincProperty_": "NFr",
      "category_": "Clinical",
      "guidance_": "used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per 100",
      "csCode_": "/100",
      "ciCode_": "",
      "property_": "",
      "magnitude_": 0.01,
      "dim_": null,
      "printSymbol_": null,
      "class_": null,
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "per hundred; 10^2; 10*2",
      "source_": "LOINC",
      "loincProperty_": "NFr",
      "category_": "Clinical",
      "guidance_": "used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per 100 cells",
      "csCode_": "/100{cells}",
      "ciCode_": "",
      "property_": "",
      "magnitude_": 0.01,
      "dim_": null,
      "printSymbol_": null,
      "class_": null,
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/100 cells; /100cells; per hundred",
      "source_": "LOINC",
      "loincProperty_": "EntMass; EntNum; NFr",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per 100 neutrophils",
      "csCode_": "/100{neutrophils}",
      "ciCode_": "",
      "property_": "",
      "magnitude_": 0.01,
      "dim_": null,
      "printSymbol_": null,
      "class_": null,
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/100 neutrophils; /100neutrophils; per hundred",
      "source_": "LOINC",
      "loincProperty_": "EntMass; EntNum; NFr",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per 100 spermatozoa",
      "csCode_": "/100{spermatozoa}",
      "ciCode_": "",
      "property_": "",
      "magnitude_": 0.01,
      "dim_": null,
      "printSymbol_": null,
      "class_": null,
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/100 spermatozoa; /100spermatozoa; per hundred",
      "source_": "LOINC",
      "loincProperty_": "NFr",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per 100 white blood cells",
      "csCode_": "/100{WBCs}",
      "ciCode_": "",
      "property_": "",
      "magnitude_": 0.01,
      "dim_": null,
      "printSymbol_": null,
      "class_": null,
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/100 WBCs; /100WBCs; per hundred",
      "source_": "LOINC",
      "loincProperty_": "Ratio; NFr",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per year",
      "csCode_": "/a",
      "ciCode_": "/ANN",
      "property_": "time",
      "magnitude_": 3.168808781402895e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/a",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/Years; /yrs; yearly",
      "source_": "LOINC",
      "loincProperty_": "NRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "a_j",
      "ciUnitString_": "ANN_J",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per centimeter of water",
      "csCode_": "/cm[H2O]",
      "ciCode_": "/CM[H2O]",
      "property_": "pressure",
      "magnitude_": 0.000010197162129779282,
      "dim_": {
        "dimVec_": [
          1,
          2,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/cm HO<sub><r>2</r></sub>",
      "class_": "clinical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/cmH2O; /cm H2O; centimeters; centimetres",
      "source_": "LOINC",
      "loincProperty_": "InvPress",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "kPa",
      "ciUnitString_": "KPAL",
      "baseFactorStr_": "980665e-5",
      "baseFactor_": "9.80665",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per day",
      "csCode_": "/d",
      "ciCode_": "/D",
      "property_": "time",
      "magnitude_": 0.000011574074074074073,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/d",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/dy; per day",
      "source_": "LOINC",
      "loincProperty_": "NRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "h",
      "ciUnitString_": "HR",
      "baseFactorStr_": "24",
      "baseFactor_": "24",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per deciliter",
      "csCode_": "/dL",
      "ciCode_": "/DL",
      "property_": "volume",
      "magnitude_": 10000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/dL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "per dL; /deciliter; decilitre",
      "source_": "LOINC",
      "loincProperty_": "NCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "per gram",
      "csCode_": "/g",
      "ciCode_": "/G",
      "property_": "mass",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/g",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/gm; /gram; per g",
      "source_": "LOINC",
      "loincProperty_": "NCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per hour",
      "csCode_": "/h",
      "ciCode_": "/HR",
      "property_": "time",
      "magnitude_": 0.0002777777777777778,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/h",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/hr; /hour; per hr",
      "source_": "LOINC",
      "loincProperty_": "NRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "min",
      "ciUnitString_": "MIN",
      "baseFactorStr_": "60",
      "baseFactor_": "60",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "per kilogram",
      "csCode_": "/kg",
      "ciCode_": "/KG",
      "property_": "mass",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/kg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "per kg; per kilogram",
      "source_": "LOINC",
      "loincProperty_": "NCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per liter",
      "csCode_": "/L",
      "ciCode_": "/L",
      "property_": "volume",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/L",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/liter; litre",
      "source_": "LOINC",
      "loincProperty_": "NCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "per square meter",
      "csCode_": "/m2",
      "ciCode_": "/M2",
      "property_": "length",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/m<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/m^2; /m*2; /sq. m; per square meter; meter squared; metre",
      "source_": "LOINC",
      "loincProperty_": "Naric",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "per cubic meter",
      "csCode_": "/m3",
      "ciCode_": "/M3",
      "property_": "length",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/m<sup>3</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/m^3; /m*3; /cu. m; per cubic meter; meter cubed; per m3; metre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "per milligram",
      "csCode_": "/mg",
      "ciCode_": "/MG",
      "property_": "mass",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/mg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/milligram; per mg",
      "source_": "LOINC",
      "loincProperty_": "NCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per minute",
      "csCode_": "/min",
      "ciCode_": "/MIN",
      "property_": "time",
      "magnitude_": 0.016666666666666666,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/min",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/minute; per mins; breaths beats per minute",
      "source_": "LOINC",
      "loincProperty_": "NRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "s",
      "ciUnitString_": "S",
      "baseFactorStr_": "60",
      "baseFactor_": "60",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per milliliter",
      "csCode_": "/mL",
      "ciCode_": "/ML",
      "property_": "volume",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/mL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/milliliter; per mL; millilitre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "per millimeter",
      "csCode_": "/mm",
      "ciCode_": "/MM",
      "property_": "length",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          -1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/mm",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/millimeter; per mm; millimetre",
      "source_": "LOINC",
      "loincProperty_": "InvLen",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per month",
      "csCode_": "/mo",
      "ciCode_": "/MO",
      "property_": "time",
      "magnitude_": 3.802570537683474e-7,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/mo",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/month; per mo; monthly; month",
      "source_": "LOINC",
      "loincProperty_": "NRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "mo_j",
      "ciUnitString_": "MO_J",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "per second",
      "csCode_": "/s",
      "ciCode_": "/S",
      "property_": "time",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/s",
      "class_": null,
      "isMetric_": false,
      "variable_": "T",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/second; /sec; per sec; frequency; Hertz; Herz; Hz; becquerels; Bq; s-1; s^-1",
      "source_": "LOINC",
      "loincProperty_": "NRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per enzyme unit",
      "csCode_": "/U",
      "ciCode_": "/U",
      "property_": "catalytic activity",
      "magnitude_": 9.963241120049633e-17,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/U",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/enzyme units; per U",
      "source_": "LOINC",
      "loincProperty_": "InvC; NCat",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per microliter",
      "csCode_": "/uL",
      "ciCode_": "/UL",
      "property_": "volume",
      "magnitude_": 999999999.9999999,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/μL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/microliter; microlitre; /mcl; per uL",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "per week",
      "csCode_": "/wk",
      "ciCode_": "/WK",
      "property_": "time",
      "magnitude_": 0.0000016534391534391535,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "/wk",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "/week; per wk; weekly, weeks",
      "source_": "LOINC",
      "loincProperty_": "NRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "d",
      "ciUnitString_": "D",
      "baseFactorStr_": "7",
      "baseFactor_": "7",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "APL unit per milliliter",
      "csCode_": "[APL'U]/mL",
      "ciCode_": "[APL'U]/ML",
      "property_": "biologic activity of anticardiolipin IgA",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "APL/mL; APL'U/mL; APL U/mL; APL/milliliter; IgA anticardiolipin units per milliliter; IgA Phospholipid Units; millilitre; biologic activity of",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "Units for an anti phospholipid syndrome test",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "arbitrary unit per milliliter",
      "csCode_": "[arb'U]/mL",
      "ciCode_": "[ARB'U]/ML",
      "property_": "arbitrary",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "arb. U/mL",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "arb'U/mL; arbU/mL; arb U/mL; arbitrary units per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "relative unit of measurement to show the ratio of test measurement to reference measurement",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "colony forming units per liter",
      "csCode_": "[CFU]/L",
      "ciCode_": "[CFU]/L",
      "property_": "amount of a proliferating organism",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "CFU/L",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "CFU per Liter; CFU/L",
      "source_": "LOINC",
      "loincProperty_": "NCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "colony forming units per milliliter",
      "csCode_": "[CFU]/mL",
      "ciCode_": "[CFU]/ML",
      "property_": "amount of a proliferating organism",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "CFU/mL",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "CFU per mL; CFU/mL",
      "source_": "LOINC",
      "loincProperty_": "NCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "foot per foot - US",
      "csCode_": "[ft_us]/[ft_us]",
      "ciCode_": "[FT_US]/[FT_US]",
      "property_": "length",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ft<sub>us</sub>/ft<sub>us</sub>",
      "class_": "us-lengths",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ft/ft; ft per ft; feet per feet; visual acuity",
      "source_": "",
      "loincProperty_": "LenRto",
      "category_": "Clinical",
      "guidance_": "distance ratio to measure 20:20 vision",
      "csUnitString_": "m/3937",
      "ciUnitString_": "M/3937",
      "baseFactorStr_": "1200",
      "baseFactor_": "1200",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "GPL unit per milliliter",
      "csCode_": "[GPL'U]/mL",
      "ciCode_": "[GPL'U]/ML",
      "property_": "biologic activity of anticardiolipin IgG",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "GPL U/mL; GPL'U/mL; GPL/mL; GPL U per mL; IgG Phospholipid Units per milliliters; IgG anticardiolipin units; millilitres ",
      "source_": "LOINC",
      "loincProperty_": "ACnc; AMass",
      "category_": "Clinical",
      "guidance_": "Units for an antiphospholipid test",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per 2 hour",
      "csCode_": "[IU]/(2.h)",
      "ciCode_": "[IU]/2.HR",
      "property_": "arbitrary",
      "magnitude_": 0.0001388888888888889,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./2.h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/2hrs; IU/2 hours; IU per 2 hrs; international units per 2 hours",
      "source_": "LOINC",
      "loincProperty_": "ARat",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per 24 hour",
      "csCode_": "[IU]/(24.h)",
      "ciCode_": "[IU]/24.HR",
      "property_": "arbitrary",
      "magnitude_": 0.000011574074074074073,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./24.h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/24hr; IU/24 hours; IU per 24 hrs; international units per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "ARat",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per day",
      "csCode_": "[IU]/d",
      "ciCode_": "[IU]/D",
      "property_": "arbitrary",
      "magnitude_": 0.000011574074074074073,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./d",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/dy; IU/days; IU per dys; international units per day",
      "source_": "LOINC",
      "loincProperty_": "ARat",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per deciliter",
      "csCode_": "[IU]/dL",
      "ciCode_": "[IU]/DL",
      "property_": "arbitrary",
      "magnitude_": 10000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./dL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/dL; IU per dL; international units per deciliters; decilitres",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per gram",
      "csCode_": "[IU]/g",
      "ciCode_": "[IU]/G",
      "property_": "arbitrary",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./g",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/gm; IU/gram; IU per gm; IU per g; international units per gram",
      "source_": "LOINC",
      "loincProperty_": "ACnt",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per hour",
      "csCode_": "[IU]/h",
      "ciCode_": "[IU]/HR",
      "property_": "arbitrary",
      "magnitude_": 0.0002777777777777778,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/hrs; IU per hours; international units per hour",
      "source_": "LOINC",
      "loincProperty_": "ARat",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per kilogram",
      "csCode_": "[IU]/kg",
      "ciCode_": "[IU]/KG",
      "property_": "arbitrary",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./kg",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/kg; IU/kilogram; IU per kg; units",
      "source_": "LOINC",
      "loincProperty_": "ACnt",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per kilogram per day",
      "csCode_": "[IU]/kg/d",
      "ciCode_": "[IU]/KG/D",
      "property_": "arbitrary",
      "magnitude_": 1.1574074074074074e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./kg/d",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/kg/dy; IU/kg/day; IU/kilogram/day; IU per kg per day; units",
      "source_": "LOINC",
      "loincProperty_": "ACntRat",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per liter",
      "csCode_": "[IU]/L",
      "ciCode_": "[IU]/L",
      "property_": "arbitrary",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/L; IU/liter; IU per liter; units; litre",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per minute",
      "csCode_": "[IU]/min",
      "ciCode_": "[IU]/MIN",
      "property_": "arbitrary",
      "magnitude_": 0.016666666666666666,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./min",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/min; IU/minute; IU per minute; international units",
      "source_": "LOINC",
      "loincProperty_": "ARat",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "international unit per milliliter",
      "csCode_": "[IU]/mL",
      "ciCode_": "[IU]/ML",
      "property_": "arbitrary",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "i.U./mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "IU/mL; IU per mL; international units per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "MPL unit per milliliter",
      "csCode_": "[MPL'U]/mL",
      "ciCode_": "[MPL'U]/ML",
      "property_": "biologic activity of anticardiolipin IgM",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "MPL/mL; MPL U/mL; MPL'U/mL; IgM anticardiolipin units; IgM Phospholipid Units; millilitre ",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "units for antiphospholipid test\n",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "number per high power field",
      "csCode_": "{#}/[HPF]",
      "ciCode_": "1/[HPF]",
      "property_": "view area in microscope",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "1/HPF",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "#/HPF; # per HPF; number/HPF; numbers per high power field",
      "source_": "LOINC",
      "loincProperty_": "Naric",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "number per low power field",
      "csCode_": "{#}/[LPF]",
      "ciCode_": "1/[LPF]",
      "property_": "view area in microscope",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "1/LPF",
      "class_": "chemical",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "#/LPF; # per LPF; number/LPF; numbers per low power field",
      "source_": "LOINC",
      "loincProperty_": "Naric",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "100",
      "baseFactor_": "100",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "IgA antiphosphatidylserine unit ",
      "csCode_": "{APS'U}",
      "ciCode_": "",
      "property_": "",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": null,
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "APS Unit; Phosphatidylserine Antibody IgA Units",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "unit for antiphospholipid test",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "EIA index",
      "csCode_": "{EIA_index}",
      "ciCode_": "",
      "property_": "",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": null,
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "enzyme immunoassay index",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kaolin clotting time",
      "csCode_": "{KCT'U}",
      "ciCode_": "",
      "property_": "",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": null,
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "KCT",
      "source_": "LOINC",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "sensitive test to detect lupus anticoagulants; measured in seconds",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "IgM antiphosphatidylserine unit",
      "csCode_": "{MPS'U}",
      "ciCode_": "",
      "property_": "",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": null,
      "class_": null,
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Phosphatidylserine Antibody IgM Measurement ",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "trillion per liter",
      "csCode_": "10*12/L",
      "ciCode_": "10*12/L",
      "property_": "number",
      "magnitude_": 1000000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>12</sup>/L",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^12/L; 10*12 per Liter; trillion per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "10^3 (used for cell count)",
      "csCode_": "10*3",
      "ciCode_": "10*3",
      "property_": "number",
      "magnitude_": 1000,
      "dim_": null,
      "printSymbol_": "10<sup>3</sup>",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^3; thousand",
      "source_": "LOINC",
      "loincProperty_": "Num",
      "category_": "Clinical",
      "guidance_": "usually used for counting entities (e.g. blood cells) per volume",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "thousand per liter",
      "csCode_": "10*3/L",
      "ciCode_": "10*3/L",
      "property_": "number",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>3</sup>/L",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^3/L; 10*3 per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "thousand per milliliter",
      "csCode_": "10*3/mL",
      "ciCode_": "10*3/ML",
      "property_": "number",
      "magnitude_": 1000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>3</sup>/mL",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^3/mL; 10*3 per mL; thousand per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "thousand per microliter",
      "csCode_": "10*3/uL",
      "ciCode_": "10*3/UL",
      "property_": "number",
      "magnitude_": 999999999999.9999,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>3</sup>/μL",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^3/uL; 10*3 per uL; thousand per microliter; microlitre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "10 thousand per microliter",
      "csCode_": "10*4/uL",
      "ciCode_": "10*4/UL",
      "property_": "number",
      "magnitude_": 10000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>4</sup>/μL",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^4/uL; 10*4 per uL; microlitre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "10^5 ",
      "csCode_": "10*5",
      "ciCode_": "10*5",
      "property_": "number",
      "magnitude_": 100000,
      "dim_": null,
      "printSymbol_": "10<sup>5</sup>",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "one hundred thousand",
      "source_": "LOINC",
      "loincProperty_": "Num",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "10^6",
      "csCode_": "10*6",
      "ciCode_": "10*6",
      "property_": "number",
      "magnitude_": 1000000,
      "dim_": null,
      "printSymbol_": "10<sup>6</sup>",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "",
      "source_": "LOINC",
      "loincProperty_": "Num",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "million colony forming unit per liter",
      "csCode_": "10*6.[CFU]/L",
      "ciCode_": "10*6.[CFU]/L",
      "property_": "number",
      "magnitude_": 1000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>6</sup>.CFU/L",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10*6 CFU/L; 10^6 CFU/L; 10^6CFU; 10^6 CFU per liter; million colony forming units; litre",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "million international unit",
      "csCode_": "10*6.[IU]",
      "ciCode_": "10*6.[IU]",
      "property_": "number",
      "magnitude_": 1000000,
      "dim_": null,
      "printSymbol_": "10<sup>6</sup>.i.U.",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10*6 IU; 10^6 IU; international units",
      "source_": "LOINC",
      "loincProperty_": "arb",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "million per 24 hour",
      "csCode_": "10*6/(24.h)",
      "ciCode_": "10*6/24.HR",
      "property_": "number",
      "magnitude_": 11.574074074074074,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>6</sup>/24.h",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10*6/24hrs; 10^6/24 hrs; 10*6 per 24 hrs; 10^6 per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "NRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "million per kilogram",
      "csCode_": "10*6/kg",
      "ciCode_": "10*6/KG",
      "property_": "number",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>6</sup>/kg",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^6/kg; 10*6 per kg; 10*6 per kilogram; millions",
      "source_": "LOINC",
      "loincProperty_": "NCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "million per liter",
      "csCode_": "10*6/L",
      "ciCode_": "10*6/L",
      "property_": "number",
      "magnitude_": 1000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>6</sup>/L",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^6/L; 10*6 per Liter; 10^6 per Liter; litre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "million per milliliter",
      "csCode_": "10*6/mL",
      "ciCode_": "10*6/ML",
      "property_": "number",
      "magnitude_": 1000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>6</sup>/mL",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^6/mL; 10*6 per mL; 10*6 per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "million per microliter",
      "csCode_": "10*6/uL",
      "ciCode_": "10*6/UL",
      "property_": "number",
      "magnitude_": 1000000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>6</sup>/μL",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^6/uL; 10^6 per uL; 10^6/mcl; 10^6 per mcl; 10^6 per microliter; microlitre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "10^8",
      "csCode_": "10*8",
      "ciCode_": "10*8",
      "property_": "number",
      "magnitude_": 100000000,
      "dim_": null,
      "printSymbol_": "10<sup>8</sup>",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "100 million; one hundred million; 10^8",
      "source_": "LOINC",
      "loincProperty_": "Num",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "billion per liter",
      "csCode_": "10*9/L",
      "ciCode_": "10*9/L",
      "property_": "number",
      "magnitude_": 1000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>9</sup>/L",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^9/L; 10*9 per Liter; litre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "billion per milliliter",
      "csCode_": "10*9/mL",
      "ciCode_": "10*9/ML",
      "property_": "number",
      "magnitude_": 1000000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>9</sup>/mL",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^9/mL; 10*9 per mL; 10^9 per mL; 10*9 per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "billion per microliter",
      "csCode_": "10*9/uL",
      "ciCode_": "10*9/UL",
      "property_": "number",
      "magnitude_": 1000000000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10<sup>9</sup>/μL",
      "class_": "dimless",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10^9/uL; 10^9 per uL; 10^9/mcl; 10^9 per mcl; 10*9 per uL; 10*9 per mcl; 10*9/mcl; 10^9 per microliter; microlitre",
      "source_": "LOINC",
      "loincProperty_": "NCncn",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "1",
      "ciUnitString_": "1",
      "baseFactorStr_": "10",
      "baseFactor_": "10",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "10 liter per minute per square meter",
      "csCode_": "10.L/(min.m2)",
      "ciCode_": "10.L/MIN.M2",
      "property_": "volume",
      "magnitude_": 0.00016666666666666666,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10.L/min.m<sup>2</sup>",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10 liters per minutes per square meter; 10 L per min per m2; m^2; 10 L/(min*m2); 10L/(min*m^2); litres; sq. meter; metre; meters squared",
      "source_": "LOINC",
      "loincProperty_": "ArVRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "10 liter per minute",
      "csCode_": "10.L/min",
      "ciCode_": "10.L/MIN",
      "property_": "volume",
      "magnitude_": 0.00016666666666666666,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10.L/min",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "10 liters per minute; 10 L per min; 10L; 10 L/min; litre",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "10 micronewton second per centimeter to the fifth power per square meter",
      "csCode_": "10.uN.s/(cm5.m2)",
      "ciCode_": "10.UN.S/CM5.M2",
      "property_": "force",
      "magnitude_": 100000000,
      "dim_": {
        "dimVec_": [
          -6,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "10.μN.s/cm<sup>5</sup>.m<sup>2</sup>",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "dyne seconds per centimeter5 and square meter; dyn.s/(cm5.m2); dyn.s/cm5/m2; cm^5; m^2",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit to measure systemic vascular resistance per body surface area",
      "csUnitString_": "kg.m/s2",
      "ciUnitString_": "KG.M/S2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "24 hour",
      "csCode_": "24.h",
      "ciCode_": "24.HR",
      "property_": "time",
      "magnitude_": 86400,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "24.h",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "24hrs; 24 hrs; 24 hours; days; dy",
      "source_": "LOINC",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "min",
      "ciUnitString_": "MIN",
      "baseFactorStr_": "60",
      "baseFactor_": "60",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "ampere per meter",
      "csCode_": "A/m",
      "ciCode_": "A/M",
      "property_": "electric current",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -1,
          -1,
          0,
          0,
          0,
          1,
          0
        ]
      },
      "printSymbol_": "A/m",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "A/m; amp/meter; magnetic field strength; H; B; amperes per meter; metre",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of magnetic field strength",
      "csUnitString_": "C/s",
      "ciUnitString_": "C/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "centigram",
      "csCode_": "cg",
      "ciCode_": "CG",
      "property_": "mass",
      "magnitude_": 0.01,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "centigrams; cg; cgm",
      "source_": "LOINC",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "centiliter",
      "csCode_": "cL",
      "ciCode_": "CL",
      "property_": "volume",
      "magnitude_": 0.00001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "centiliters; centilitres",
      "source_": "LOINC",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "centimeter",
      "csCode_": "cm",
      "ciCode_": "CM",
      "property_": "length",
      "magnitude_": 0.01,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cm",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "centimeters; centimetres",
      "source_": "LOINC",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "centimeter of water",
      "csCode_": "cm[H2O]",
      "ciCode_": "CM[H2O]",
      "property_": "pressure",
      "magnitude_": 98066.5,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cm HO<sub><r>2</r></sub>",
      "class_": "clinical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cm H2O; cmH2O; centimetres; pressure",
      "source_": "LOINC",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "unit of pressure mostly applies to blood pressure",
      "csUnitString_": "kPa",
      "ciUnitString_": "KPAL",
      "baseFactorStr_": "980665e-5",
      "baseFactor_": "9.80665",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "centimeter of water per liter per second",
      "csCode_": "cm[H2O]/L/s",
      "ciCode_": "CM[H2O]/L/S",
      "property_": "pressure",
      "magnitude_": 98066500,
      "dim_": {
        "dimVec_": [
          -4,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cm HO<sub><r>2</r></sub>/L/s",
      "class_": "clinical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cm[H2O]/(L/s); cm[H2O].s/L; cm H2O/L/sec; cmH2O/L/sec; cmH2O/Liter; cmH2O per L per secs; centimeters of water per liters per second; centimetres; litres; cm[H2O]/(L/s)",
      "source_": "LOINC",
      "loincProperty_": "PresRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure mean pulmonary resistance",
      "csUnitString_": "kPa",
      "ciUnitString_": "KPAL",
      "baseFactorStr_": "980665e-5",
      "baseFactor_": "9.80665",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "centimeter of water per second per meter",
      "csCode_": "cm[H2O]/s/m",
      "ciCode_": "CM[H2O]/S/M",
      "property_": "pressure",
      "magnitude_": 98066.5,
      "dim_": {
        "dimVec_": [
          -2,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cm HO<sub><r>2</r></sub>/s/m",
      "class_": "clinical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cm[H2O]/(s.m); cm H2O/s/m; cmH2O; cmH2O/sec/m; cmH2O per secs per meters; centimeters of water per seconds per meter; centimetres; metre",
      "source_": "LOINC",
      "loincProperty_": "PresRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure pulmonary pressure time product",
      "csUnitString_": "kPa",
      "ciUnitString_": "KPAL",
      "baseFactorStr_": "980665e-5",
      "baseFactor_": "9.80665",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "centimeter of mercury",
      "csCode_": "cm[Hg]",
      "ciCode_": "CM[HG]",
      "property_": "pressure",
      "magnitude_": 1333220,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cm Hg",
      "class_": "clinical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "centimeters of mercury; centimetres; cmHg; cm Hg",
      "source_": "LOINC",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "unit of pressure where 1 cmHg = 10 torr",
      "csUnitString_": "kPa",
      "ciUnitString_": "KPAL",
      "baseFactorStr_": "133.3220",
      "baseFactor_": "133.3220",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "square centimeter",
      "csCode_": "cm2",
      "ciCode_": "CM2",
      "property_": "length",
      "magnitude_": 0.0001,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cm<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cm^2; sq cm; centimeters squared; square centimeters; centimetre; area",
      "source_": "LOINC",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "square centimeter per second",
      "csCode_": "cm2/s",
      "ciCode_": "CM2/S",
      "property_": "length",
      "magnitude_": 0.0001,
      "dim_": {
        "dimVec_": [
          2,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cm<sup>2</sup>/s",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cm^2/sec; square centimeters per second; sq cm per sec; cm2; centimeters squared; centimetres",
      "source_": "LOINC",
      "loincProperty_": "AreaRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "centipoise",
      "csCode_": "cP",
      "ciCode_": "CP",
      "property_": "dynamic viscosity",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -1,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cP",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "cps; centiposes",
      "source_": "LOINC",
      "loincProperty_": "Visc",
      "category_": "Clinical",
      "guidance_": "unit of dynamic viscosity in the CGS system with base units: 10^−3 Pa.s = 1 mPa·.s (1 millipascal second)",
      "csUnitString_": "dyn.s/cm2",
      "ciUnitString_": "DYN.S/CM2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "centistoke",
      "csCode_": "cSt",
      "ciCode_": "CST",
      "property_": "kinematic viscosity",
      "magnitude_": 0.0000010000000000000002,
      "dim_": {
        "dimVec_": [
          2,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "cSt",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "centistokes",
      "source_": "LOINC",
      "loincProperty_": "Visc",
      "category_": "Clinical",
      "guidance_": "unit for kinematic viscosity with base units of mm^2/s (square millimeter per second)",
      "csUnitString_": "cm2/s",
      "ciUnitString_": "CM2/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "dekaliter per minute",
      "csCode_": "daL/min",
      "ciCode_": "DAL/MIN",
      "property_": "volume",
      "magnitude_": 0.00016666666666666666,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "daL/min",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "dekalitres; dekaliters per minute; per min",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "dekaliter per minute per square meter",
      "csCode_": "daL/min/m2",
      "ciCode_": "DAL/MIN/M2",
      "property_": "volume",
      "magnitude_": 0.00016666666666666666,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "daL/min/m<sup>2</sup>",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "daL/min/m^2; daL/minute/m2; sq. meter; dekaliters per minutes per square meter; meter squared; dekalitres; metre",
      "source_": "LOINC",
      "loincProperty_": "ArVRat",
      "category_": "Clinical",
      "guidance_": "The area usually is the body surface area used to normalize cardiovascular measures for patient's size",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "decibel",
      "csCode_": "dB",
      "ciCode_": "DB",
      "property_": "level",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "dB",
      "class_": "levels",
      "isMetric_": true,
      "variable_": null,
      "cnv_": "lg",
      "cnvPfx_": 0.1,
      "isSpecial_": true,
      "isArbitrary_": false,
      "synonyms_": "decibels",
      "source_": "LOINC",
      "loincProperty_": "LogRto",
      "category_": "Clinical",
      "guidance_": "unit most commonly used in acoustics as unit of sound pressure level. (also see B[SPL] or bel sound pressure level). ",
      "csUnitString_": "1",
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": 1,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "degree per second",
      "csCode_": "deg/s",
      "ciCode_": "DEG/S",
      "property_": "plane angle",
      "magnitude_": 0.017453292519943295,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          1,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "°/s",
      "class_": "iso1000",
      "isMetric_": false,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "deg/sec; deg per sec; °/sec; twist rate; angular speed; rotational speed",
      "source_": "LOINC",
      "loincProperty_": "ARat",
      "category_": "Clinical",
      "guidance_": "unit of angular (rotational) speed used to express turning rate",
      "csUnitString_": "[pi].rad/360",
      "ciUnitString_": "[PI].RAD/360",
      "baseFactorStr_": "2",
      "baseFactor_": "2",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "decigram",
      "csCode_": "dg",
      "ciCode_": "DG",
      "property_": "mass",
      "magnitude_": 0.1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "dg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "decigrams; dgm; 0.1 grams; 1/10 gm",
      "source_": "LOINC",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "equal to 1/10 gram",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "deciliter",
      "csCode_": "dL",
      "ciCode_": "DL",
      "property_": "volume",
      "magnitude_": 0.0001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "dL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "deciliters; decilitres; 0.1 liters; 1/10 L",
      "source_": "LOINC",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "equal to 1/10 liter",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "decimeter",
      "csCode_": "dm",
      "ciCode_": "DM",
      "property_": "length",
      "magnitude_": 0.1,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "dm",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "decimeters; decimetres; 0.1 meters; 1/10 m; 10 cm; centimeters",
      "source_": "LOINC",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "equal to 1/10 meter or 10 centimeters",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "square decimeter per square second",
      "csCode_": "dm2/s2",
      "ciCode_": "DM2/S2",
      "property_": "length",
      "magnitude_": 0.010000000000000002,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "dm<sup>2</sup>/s<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "dm2 per s2; dm^2/s^2; decimeters squared per second squared; sq dm; sq sec",
      "source_": "LOINC",
      "loincProperty_": "EngMass (massic energy)",
      "category_": "Clinical",
      "guidance_": "units for energy per unit mass or Joules per kilogram (J/kg = kg.m2/s2/kg = m2/s2) ",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "dyne second per centimeter per square meter",
      "csCode_": "dyn.s/(cm.m2)",
      "ciCode_": "DYN.S/CM.M2",
      "property_": "force",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -2,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "dyn.s/cm.m<sup>2</sup>",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "(dyn*s)/(cm*m2); (dyn*s)/(cm*m^2); dyn s per cm per m2; m^2; dyne seconds per centimeters per square meter; centimetres; sq. meter; squared",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "g.cm/s2",
      "ciUnitString_": "G.CM/S2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "dyne second per centimeter",
      "csCode_": "dyn.s/cm",
      "ciCode_": "DYN.S/CM",
      "property_": "force",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "dyn.s/cm",
      "class_": "cgs",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "(dyn*s)/cm; dyn sec per cm; seconds; centimetre; dyne seconds",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "g.cm/s2",
      "ciUnitString_": "G.CM/S2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "equivalent per liter",
      "csCode_": "eq/L",
      "ciCode_": "EQ/L",
      "property_": "amount of substance",
      "magnitude_": 6.0221366999999994e+26,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "eq/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "eq/liter; eq/litre; eqs; equivalents per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "equivalent per milliliter",
      "csCode_": "eq/mL",
      "ciCode_": "EQ/ML",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+29,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "eq/mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "equivalent/milliliter; equivalents per milliliter; eq per mL; millilitre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "equivalent per millimole",
      "csCode_": "eq/mmol",
      "ciCode_": "EQ/MMOL",
      "property_": "amount of substance",
      "magnitude_": 1000,
      "dim_": null,
      "printSymbol_": "eq/mmol",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "equivalent/millimole; equivalents per millimole; eq per mmol",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "equivalent per micromole",
      "csCode_": "eq/umol",
      "ciCode_": "EQ/UMOL",
      "property_": "amount of substance",
      "magnitude_": 1000000,
      "dim_": null,
      "printSymbol_": "eq/μmol",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "equivalent/micromole; equivalents per micromole; eq per umol",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "femtogram",
      "csCode_": "fg",
      "ciCode_": "FG",
      "property_": "mass",
      "magnitude_": 1e-15,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "fg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "fg; fgm; femtograms; weight",
      "source_": "LOINC",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "equal to 10^-15 grams",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "femtoliter",
      "csCode_": "fL",
      "ciCode_": "FL",
      "property_": "volume",
      "magnitude_": 1e-18,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "fL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "femtolitres; femtoliters",
      "source_": "LOINC",
      "loincProperty_": "Vol; EntVol",
      "category_": "Clinical",
      "guidance_": "equal to 10^-15 liters",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "femtometer",
      "csCode_": "fm",
      "ciCode_": "FM",
      "property_": "length",
      "magnitude_": 1e-15,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "fm",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "femtometres; femtometers",
      "source_": "LOINC",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "equal to 10^-15 meters",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "femtomole",
      "csCode_": "fmol",
      "ciCode_": "FMOL",
      "property_": "amount of substance",
      "magnitude_": 602213670,
      "dim_": null,
      "printSymbol_": "fmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "femtomoles",
      "source_": "LOINC",
      "loincProperty_": "EntSub",
      "category_": "Clinical",
      "guidance_": "equal to 10^-15 moles",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "femtomole per gram",
      "csCode_": "fmol/g",
      "ciCode_": "FMOL/G",
      "property_": "amount of substance",
      "magnitude_": 602213670,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "fmol/g",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "femtomoles; fmol/gm; fmol per gm",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "femtomole per liter",
      "csCode_": "fmol/L",
      "ciCode_": "FMOL/L",
      "property_": "amount of substance",
      "magnitude_": 602213670000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "fmol/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "femtomoles; fmol per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "femtomole per milligram",
      "csCode_": "fmol/mg",
      "ciCode_": "FMOL/MG",
      "property_": "amount of substance",
      "magnitude_": 602213670000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "fmol/mg",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "fmol per mg; femtomoles",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "femtomole per milliliter",
      "csCode_": "fmol/mL",
      "ciCode_": "FMOL/ML",
      "property_": "amount of substance",
      "magnitude_": 602213670000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "fmol/mL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "femtomoles; millilitre; fmol per mL; fmol per milliliter",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram meter",
      "csCode_": "g.m",
      "ciCode_": "G.M",
      "property_": "mass",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          1,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g.m",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g*m; gxm; meters; metres",
      "source_": "LOINC",
      "loincProperty_": "Enrg",
      "category_": "Clinical",
      "guidance_": "Unit for measuring stroke work (heart work)",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per 100 gram",
      "csCode_": "g/(100.g)",
      "ciCode_": "G/100.G",
      "property_": "mass",
      "magnitude_": 0.01,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/100.g",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g/100 gm; 100gm; grams per 100 grams; gm per 100 gm",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per 12 hour",
      "csCode_": "g/(12.h)",
      "ciCode_": "G/12.HR",
      "property_": "mass",
      "magnitude_": 0.000023148148148148147,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/12.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/12hrs; 12 hrs; gm per 12 hrs; 12hrs; grams per 12 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per 24 hour",
      "csCode_": "g/(24.h)",
      "ciCode_": "G/24.HR",
      "property_": "mass",
      "magnitude_": 0.000011574074074074073,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/24.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/24hrs; gm/24 hrs; gm per 24 hrs; 24hrs; grams per 24 hours; gm/dy; gm per dy; grams per day",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per 3 days",
      "csCode_": "g/(3.d)",
      "ciCode_": "G/3.D",
      "property_": "mass",
      "magnitude_": 0.000003858024691358025,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/3.d",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/3dy; gm/3 dy; gm per 3 days; grams",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per 4 hour",
      "csCode_": "g/(4.h)",
      "ciCode_": "G/4.HR",
      "property_": "mass",
      "magnitude_": 0.00006944444444444444,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/4.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/4hrs; gm/4 hrs; gm per 4 hrs; 4hrs; grams per 4 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per 48 hour",
      "csCode_": "g/(48.h)",
      "ciCode_": "G/48.HR",
      "property_": "mass",
      "magnitude_": 0.000005787037037037037,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/48.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/48hrs; gm/48 hrs; gm per 48 hrs; 48hrs; grams per 48 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per 5 hour",
      "csCode_": "g/(5.h)",
      "ciCode_": "G/5.HR",
      "property_": "mass",
      "magnitude_": 0.00005555555555555556,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/5.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/5hrs; gm/5 hrs; gm per 5 hrs; 5hrs; grams per 5 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per 6 hour",
      "csCode_": "g/(6.h)",
      "ciCode_": "G/6.HR",
      "property_": "mass",
      "magnitude_": 0.000046296296296296294,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/6.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/6hrs; gm/6 hrs; gm per 6 hrs; 6hrs; grams per 6 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per 72 hour",
      "csCode_": "g/(72.h)",
      "ciCode_": "G/72.HR",
      "property_": "mass",
      "magnitude_": 0.000003858024691358025,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/72.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/72hrs; gm/72 hrs; gm per 72 hrs; 72hrs; grams per 72 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per cubic centimeter",
      "csCode_": "g/cm3",
      "ciCode_": "G/CM3",
      "property_": "mass",
      "magnitude_": 999999.9999999999,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/cm<sup>3</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g/cm^3; gm per cm3; g per cm^3; grams per centimeter cubed; cu. cm; centimetre; g/mL; gram per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "g/cm3 = g/mL",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per day",
      "csCode_": "g/d",
      "ciCode_": "G/D",
      "property_": "mass",
      "magnitude_": 0.000011574074074074073,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/d",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/dy; gm per dy; grams per day; gm/24hrs; gm/24 hrs; gm per 24 hrs; 24hrs; grams per 24 hours; serving",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per deciliter",
      "csCode_": "g/dL",
      "ciCode_": "G/DL",
      "property_": "mass",
      "magnitude_": 10000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/dL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/dL; gm per dL; grams per deciliter; decilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per gram",
      "csCode_": "g/g",
      "ciCode_": "G/G",
      "property_": "mass",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/g",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm; grams",
      "source_": "LOINC",
      "loincProperty_": "MRto ",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per hour",
      "csCode_": "g/h",
      "ciCode_": "G/HR",
      "property_": "mass",
      "magnitude_": 0.0002777777777777778,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/hr; gm per hr; grams; intake; output",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per hour per square meter",
      "csCode_": "g/h/m2",
      "ciCode_": "G/HR/M2",
      "property_": "mass",
      "magnitude_": 0.0002777777777777778,
      "dim_": {
        "dimVec_": [
          -2,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/h/m<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm/hr/m2; gm/h/m2; /m^2; sq. m; g per hr per m2; grams per hours per square meter; meter squared; metre",
      "source_": "LOINC",
      "loincProperty_": "ArMRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per kilogram",
      "csCode_": "g/kg ",
      "ciCode_": "G/KG",
      "property_": "mass",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/kg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g per kg; gram per kilograms",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per kilogram per 8 hour ",
      "csCode_": "g/kg/(8.h)",
      "ciCode_": "G/KG/8.HR",
      "property_": "mass",
      "magnitude_": 3.472222222222222e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/kg/8.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g/(8.kg.h); gm/kg/8hrs; 8 hrs; g per kg per 8 hrs; 8hrs; grams per kilograms per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "MCntRat; RelMRat",
      "category_": "Clinical",
      "guidance_": "unit often used to describe mass in grams of protein consumed in a 8 hours, divided by the subject's body weight in kilograms. Also used to measure mass dose rate per body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per kilogram per day",
      "csCode_": "g/kg/d",
      "ciCode_": "G/KG/D",
      "property_": "mass",
      "magnitude_": 1.1574074074074074e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/kg/d",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g/(kg.d); gm/kg/dy; gm per kg per dy; grams per kilograms per day",
      "source_": "LOINC",
      "loincProperty_": "RelMRat",
      "category_": "Clinical",
      "guidance_": "unit often used to describe mass in grams of protein consumed in a day, divided by the subject's body weight in kilograms. Also used to measure mass dose rate per body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per kilogram per hour",
      "csCode_": "g/kg/h",
      "ciCode_": "G/KG/HR",
      "property_": "mass",
      "magnitude_": 2.7777777777777776e-7,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/kg/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g/(kg.h); g/kg/hr; g per kg per hrs; grams per kilograms per hour",
      "source_": "LOINC",
      "loincProperty_": "MCntRat; RelMRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per kilogram per minute",
      "csCode_": "g/kg/min",
      "ciCode_": "G/KG/MIN",
      "property_": "mass",
      "magnitude_": 0.000016666666666666667,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/kg/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g/(kg.min); g/kg/min; g per kg per min; grams per kilograms per minute",
      "source_": "LOINC",
      "loincProperty_": "MCntRat; RelMRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per liter",
      "csCode_": "g/L",
      "ciCode_": "G/L",
      "property_": "mass",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/L",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "gm per liter; g/liter; grams per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per square meter",
      "csCode_": "g/m2",
      "ciCode_": "G/M2",
      "property_": "mass",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/m<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g/m^2; gram/square meter; g/sq m; g per m2; g per m^2; grams per square meter; meters squared; metre",
      "source_": "LOINC",
      "loincProperty_": "ArMass",
      "category_": "Clinical",
      "guidance_": "Tests measure myocardial mass (heart ventricle system) per body surface area; unit used to measure mass dose per body surface area",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per milligram",
      "csCode_": "g/mg",
      "ciCode_": "G/MG",
      "property_": "mass",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/mg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g per mg; grams per milligram",
      "source_": "LOINC",
      "loincProperty_": "MCnt; MRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per minute",
      "csCode_": "g/min",
      "ciCode_": "G/MIN",
      "property_": "mass",
      "magnitude_": 0.016666666666666666,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g per min; grams per minute; gram/minute",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per milliliter",
      "csCode_": "g/mL",
      "ciCode_": "G/ML",
      "property_": "mass",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/mL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "g per mL; grams per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "gram per millimole",
      "csCode_": "g/mmol",
      "ciCode_": "G/MMOL",
      "property_": "mass",
      "magnitude_": 1.6605401866749388e-21,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "g/mmol",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "grams per millimole; g per mmol",
      "source_": "LOINC",
      "loincProperty_": "Ratio",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "joule per liter",
      "csCode_": "J/L",
      "ciCode_": "J/L",
      "property_": "energy",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "J/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "joules per liter; litre; J per L",
      "source_": "LOINC",
      "loincProperty_": "EngCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "N.m",
      "ciUnitString_": "N.M",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "degree Kelvin per Watt",
      "csCode_": "K/W",
      "ciCode_": "K/W",
      "property_": "temperature",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -2,
          3,
          -1,
          0,
          1,
          0,
          0
        ]
      },
      "printSymbol_": "K/W",
      "class_": null,
      "isMetric_": false,
      "variable_": "C",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "degree Kelvin/Watt; K per W; thermal ohm; thermal resistance; degrees",
      "source_": "LOINC",
      "loincProperty_": "TempEngRat",
      "category_": "Clinical",
      "guidance_": "unit for absolute thermal resistance equal to the reciprocal of thermal conductance. Unit used for tests to measure work of breathing",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilo international unit per liter",
      "csCode_": "k[IU]/L",
      "ciCode_": "K[IU]/L",
      "property_": "arbitrary",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ki.U./L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "kIU/L; kIU per L; kIU per liter; kilo international units; litre; allergens; allergy units",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "IgE has an WHO reference standard so IgE allergen testing can be reported as k[IU]/L",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilo international unit per milliliter",
      "csCode_": "k[IU]/mL",
      "ciCode_": "K[IU]/ML",
      "property_": "arbitrary",
      "magnitude_": 1000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ki.U./mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "kIU/mL; kIU per mL; kIU per milliliter; kilo international units; millilitre; allergens; allergy units",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "IgE has an WHO reference standard so IgE allergen testing can be reported as k[IU]/mL",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "katal per kilogram",
      "csCode_": "kat/kg",
      "ciCode_": "KAT/KG",
      "property_": "catalytic activity",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kat/kg",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kat per kg; katals per kilogram; mol/s/kg; moles per seconds per kilogram",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.",
      "csUnitString_": "mol/s",
      "ciUnitString_": "MOL/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "katal per liter",
      "csCode_": "kat/L",
      "ciCode_": "KAT/L",
      "property_": "catalytic activity",
      "magnitude_": 6.0221366999999994e+26,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kat/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kat per L; katals per liter; litre; mol/s/L; moles per seconds per liter",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.",
      "csUnitString_": "mol/s",
      "ciUnitString_": "MOL/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilocalorie",
      "csCode_": "kcal",
      "ciCode_": "KCAL",
      "property_": "energy",
      "magnitude_": 4184000,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kcal",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kilogram calories; large calories; food calories; kcals",
      "source_": "LOINC",
      "loincProperty_": "EngRat",
      "category_": "Clinical",
      "guidance_": "It is equal to 1000 calories (equal to 4.184 kJ). But in practical usage, kcal refers to food calories which excludes caloric content in fiber and other constitutes that is not digestible by humans. Also see nutrition label Calories ([Cal])",
      "csUnitString_": "cal_th",
      "ciUnitString_": "CAL_TH",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilocalorie per 24 hour",
      "csCode_": "kcal/(24.h)",
      "ciCode_": "KCAL/24.HR",
      "property_": "energy",
      "magnitude_": 48.425925925925924,
      "dim_": {
        "dimVec_": [
          2,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kcal/24.h",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kcal/24hrs; kcal/24 hrs; kcal per 24hrs; kilocalories per 24 hours; kilojoules; kJ/24hr; kJ/(24.h); kJ/dy; kilojoules per days; intake; calories burned; metabolic rate; food calories",
      "source_": "",
      "loincProperty_": "EngRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "cal_th",
      "ciUnitString_": "CAL_TH",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilocalorie per ounce",
      "csCode_": "kcal/[oz_av]",
      "ciCode_": "KCAL/[OZ_AV]",
      "property_": "energy",
      "magnitude_": 147586.25679704445,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kcal/oz",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kcal/oz; kcal per ozs; large calories per ounces; food calories; servings; international",
      "source_": "LOINC",
      "loincProperty_": "EngCnt",
      "category_": "Clinical",
      "guidance_": "used in nutrition to represent calorie of food",
      "csUnitString_": "cal_th",
      "ciUnitString_": "CAL_TH",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilocalorie per day",
      "csCode_": "kcal/d",
      "ciCode_": "KCAL/D",
      "property_": "energy",
      "magnitude_": 48.425925925925924,
      "dim_": {
        "dimVec_": [
          2,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kcal/d",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kcal/dy; kcal per day; kilocalories per days; kilojoules; kJ/dy; kilojoules per days; intake; calories burned; metabolic rate; food calories",
      "source_": "LOINC",
      "loincProperty_": "EngRat",
      "category_": "Clinical",
      "guidance_": "unit in nutrition for food intake (measured in calories) in a day",
      "csUnitString_": "cal_th",
      "ciUnitString_": "CAL_TH",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilocalorie per hour",
      "csCode_": "kcal/h",
      "ciCode_": "KCAL/HR",
      "property_": "energy",
      "magnitude_": 1162.2222222222222,
      "dim_": {
        "dimVec_": [
          2,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kcal/h",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kcal/hrs; kcals per hr; intake; kilocalories per hours; kilojoules",
      "source_": "LOINC",
      "loincProperty_": "EngRat",
      "category_": "Clinical",
      "guidance_": "used in nutrition to represent caloric requirement or consumption",
      "csUnitString_": "cal_th",
      "ciUnitString_": "CAL_TH",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilocalorie per kilogram per 24 hour",
      "csCode_": "kcal/kg/(24.h)",
      "ciCode_": "KCAL/KG/24.HR",
      "property_": "energy",
      "magnitude_": 0.04842592592592593,
      "dim_": {
        "dimVec_": [
          2,
          -3,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kcal/kg/24.h",
      "class_": "heat",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kcal/kg/24hrs; 24 hrs; kcal per kg per 24hrs; kilocalories per kilograms per 24 hours; kilojoules",
      "source_": "LOINC",
      "loincProperty_": "EngCntRat",
      "category_": "Clinical",
      "guidance_": "used in nutrition to represent caloric requirement per day based on subject's body weight in kilograms",
      "csUnitString_": "cal_th",
      "ciUnitString_": "CAL_TH",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram",
      "csCode_": "kg",
      "ciCode_": "KG",
      "property_": "mass",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kilograms; kgs",
      "source_": "LOINC",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram meter per second",
      "csCode_": "kg.m/s",
      "ciCode_": "KG.M/S",
      "property_": "mass",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg.m/s",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kg*m/s; kg.m per sec; kg*m per sec; p; momentum",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit for momentum =  mass times velocity",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram per second per square meter",
      "csCode_": "kg/(s.m2)",
      "ciCode_": "KG/S.M2",
      "property_": "mass",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          -2,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg/s.m<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kg/(s*m2); kg/(s*m^2); kg per s per m2; per sec; per m^2; kilograms per seconds per square meter; meter squared; metre",
      "source_": "LOINC",
      "loincProperty_": "ArMRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram per hour",
      "csCode_": "kg/h",
      "ciCode_": "KG/HR",
      "property_": "mass",
      "magnitude_": 0.2777777777777778,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kg/hr; kg per hr; kilograms per hour",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram per liter",
      "csCode_": "kg/L",
      "ciCode_": "KG/L",
      "property_": "mass",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg/L",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kg per liter; litre; kilograms",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram per square meter",
      "csCode_": "kg/m2",
      "ciCode_": "KG/M2",
      "property_": "mass",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg/m<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kg/m^2; kg/sq. m; kg per m2; per m^2; per sq. m; kilograms; meter squared; metre; BMI",
      "source_": "LOINC",
      "loincProperty_": "Ratio",
      "category_": "Clinical",
      "guidance_": "units for body mass index (BMI)",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram per cubic meter",
      "csCode_": "kg/m3",
      "ciCode_": "KG/M3",
      "property_": "mass",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg/m<sup>3</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kg/m^3; kg/cu. m; kg per m3; per m^3; per cu. m; kilograms; meters cubed; metre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram per minute",
      "csCode_": "kg/min",
      "ciCode_": "KG/MIN",
      "property_": "mass",
      "magnitude_": 16.666666666666668,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kilogram/minute; kg per min; kilograms per minute",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram per mole",
      "csCode_": "kg/mol",
      "ciCode_": "KG/MOL",
      "property_": "mass",
      "magnitude_": 1.6605401866749388e-21,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg/mol",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kilogram/mole; kg per mol; kilograms per mole",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilogram per second",
      "csCode_": "kg/s",
      "ciCode_": "KG/S",
      "property_": "mass",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kg/s",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kg/sec; kilogram/second; kg per sec; kilograms; second",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kiloliter",
      "csCode_": "kL",
      "ciCode_": "KL",
      "property_": "volume",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kiloliters; kilolitres; m3; m^3; meters cubed; metre",
      "source_": "LOINC",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilometer",
      "csCode_": "km",
      "ciCode_": "KM",
      "property_": "length",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "km",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kilometers; kilometres; distance",
      "source_": "LOINC",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilopascal",
      "csCode_": "kPa",
      "ciCode_": "KPAL",
      "property_": "pressure",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kPa",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kilopascals; pressure",
      "source_": "LOINC",
      "loincProperty_": "Pres; PPresDiff",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "N/m2",
      "ciUnitString_": "N/M2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "kilosecond",
      "csCode_": "ks",
      "ciCode_": "KS",
      "property_": "time",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ks",
      "class_": null,
      "isMetric_": false,
      "variable_": "T",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kiloseconds; ksec",
      "source_": "LOINC",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilo enzyme unit",
      "csCode_": "kU",
      "ciCode_": "KU",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kU",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "units; mmol/min; millimoles per minute",
      "source_": "LOINC",
      "loincProperty_": "CAct",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 kU = 1 mmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilo enzyme unit per gram",
      "csCode_": "kU/g",
      "ciCode_": "KU/G",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kU/g",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "units per grams; kU per gm",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 kU = 1 mmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilo enzyme unit per liter",
      "csCode_": "kU/L",
      "ciCode_": "KU/L",
      "property_": "catalytic activity",
      "magnitude_": 1.00368945e+22,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kU/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "units per liter; litre; enzymatic activity; enzyme activity per volume; activities",
      "source_": "LOINC",
      "loincProperty_": "ACnc; CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 kU = 1 mmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "kilo enzyme unit per milliliter",
      "csCode_": "kU/mL",
      "ciCode_": "KU/ML",
      "property_": "catalytic activity",
      "magnitude_": 1.00368945e+25,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "kU/mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "kU per mL; units per milliliter; millilitre; enzymatic activity per volume; enzyme activities",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 kU = 1 mmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per 24 hour",
      "csCode_": "L/(24.h)",
      "ciCode_": "L/24.HR",
      "property_": "volume",
      "magnitude_": 1.1574074074074074e-8,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/24.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L/24hrs; L/24 hrs; L per 24hrs; liters per 24 hours; day; dy; litres; volume flow rate",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per 8 hour",
      "csCode_": "L/(8.h)",
      "ciCode_": "L/8.HR",
      "property_": "volume",
      "magnitude_": 3.472222222222222e-8,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/8.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L/8hrs; L/8 hrs; L per 8hrs; liters per 8 hours; litres; volume flow rate; shift",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per minute per square meter",
      "csCode_": "L/(min.m2) ",
      "ciCode_": "L/MIN.M2",
      "property_": "volume",
      "magnitude_": 0.000016666666666666667,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/min.m<sup>2</sup>",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L/(min.m2); L/min/m^2; L/min/sq. meter; L per min per m2; m^2; liters per minutes per square meter; meter squared; litres; metre ",
      "source_": "LOINC",
      "loincProperty_": "ArVRat",
      "category_": "Clinical",
      "guidance_": "unit for tests that measure cardiac output per body surface area (cardiac index)",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per day",
      "csCode_": "L/d",
      "ciCode_": "L/D",
      "property_": "volume",
      "magnitude_": 1.1574074074074074e-8,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/d",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L/dy; L per day; 24hrs; 24 hrs; 24 hours; liters; litres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per hour",
      "csCode_": "L/h",
      "ciCode_": "L/HR",
      "property_": "volume",
      "magnitude_": 2.7777777777777776e-7,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L/hr; L per hr; litres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per kilogram",
      "csCode_": "L/kg",
      "ciCode_": "L/KG",
      "property_": "volume",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/kg",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L per kg; litre",
      "source_": "LOINC",
      "loincProperty_": "VCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per liter",
      "csCode_": "L/L",
      "ciCode_": "L/L",
      "property_": "volume",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/L",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L per L; liter/liter; litre",
      "source_": "LOINC",
      "loincProperty_": "VFr",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per minute",
      "csCode_": "L/min",
      "ciCode_": "L/MIN",
      "property_": "volume",
      "magnitude_": 0.000016666666666666667,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/min",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "liters per minute; litre",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per minute per square meter",
      "csCode_": "L/min/m2",
      "ciCode_": "L/MIN/M2",
      "property_": "volume",
      "magnitude_": 0.000016666666666666667,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/min/m<sup>2</sup>",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L/(min.m2); L/min/m^2; L/min/sq. meter; L per min per m2; m^2; liters per minutes per square meter; meter squared; litres; metre ",
      "source_": "",
      "loincProperty_": "ArVRat",
      "category_": "Clinical",
      "guidance_": "unit for tests that measure cardiac output per body surface area (cardiac index)",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per second",
      "csCode_": "L/s",
      "ciCode_": "L/S",
      "property_": "volume",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/s",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L per sec; litres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "unit used often to measure gas flow and peak expiratory flow",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Liters per second per square second",
      "csCode_": "L/s/s2",
      "ciCode_": "L/S/S2",
      "property_": "volume",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          3,
          -3,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "L/s/s<sup>2</sup>",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "L/s/s^2; L/sec/sec2; L/sec/sec^2; L/sec/sq. sec; L per s per s2; L per sec per sec2; s^2; sec^2; liters per seconds per square second; second squared; litres ",
      "source_": "LOINC",
      "loincProperty_": "ArVRat",
      "category_": "Clinical",
      "guidance_": "unit for tests that measure cardiac output/body surface area",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "lumen square meter",
      "csCode_": "lm.m2",
      "ciCode_": "LM.M2",
      "property_": "luminous flux",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          2,
          0,
          0,
          1
        ]
      },
      "printSymbol_": "lm.m<sup>2</sup>",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "lm*m2; lm*m^2; lumen meters squared; lumen sq. meters; metres",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "cd.sr",
      "ciUnitString_": "CD.SR",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "meter per second",
      "csCode_": "m/s",
      "ciCode_": "M/S",
      "property_": "length",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "m/s",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meter/second; m per sec; meters per second; metres; velocity; speed",
      "source_": "LOINC",
      "loincProperty_": "Vel",
      "category_": "Clinical",
      "guidance_": "unit of velocity",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "meter per square second",
      "csCode_": "m/s2",
      "ciCode_": "M/S2",
      "property_": "length",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          1,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "m/s<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "m/s^2; m/sq. sec; m per s2; per s^2; meters per square second; second squared; sq second; metres; acceleration",
      "source_": "LOINC",
      "loincProperty_": "Accel",
      "category_": "Clinical",
      "guidance_": "unit of acceleration",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milli international unit per liter",
      "csCode_": "m[IU]/L",
      "ciCode_": "M[IU]/L",
      "property_": "arbitrary",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mi.U./L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "mIU/L; m IU/L; mIU per liter; units; litre",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milli  international unit per milliliter",
      "csCode_": "m[IU]/mL",
      "ciCode_": "M[IU]/ML",
      "property_": "arbitrary",
      "magnitude_": 1000.0000000000001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mi.U./mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "mIU/mL; m IU/mL; mIU per mL; milli international units per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "square meter",
      "csCode_": "m2",
      "ciCode_": "M2",
      "property_": "length",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "m<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "m^2; sq m; square meters; meters squared; metres",
      "source_": "LOINC",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "unit often used to represent body surface area",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "square meter per second",
      "csCode_": "m2/s",
      "ciCode_": "M2/S",
      "property_": "length",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          2,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "m<sup>2</sup>/s",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "m^2/sec; m2 per sec; m^2 per sec; sq m/sec; meters squared/seconds; sq m per sec; meters squared; metres",
      "source_": "LOINC",
      "loincProperty_": "ArRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "cubic meter per second",
      "csCode_": "m3/s",
      "ciCode_": "M3/S",
      "property_": "length",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "m<sup>3</sup>/s",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "m^3/sec; m3 per sec; m^3 per sec; cu m/sec; cubic meters per seconds; meters cubed; metres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliampere",
      "csCode_": "mA",
      "ciCode_": "MA",
      "property_": "electric current",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          1,
          0
        ]
      },
      "printSymbol_": "mA",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mamp; milliamperes",
      "source_": "LOINC",
      "loincProperty_": "ElpotRat",
      "category_": "Clinical",
      "guidance_": "unit of electric current",
      "csUnitString_": "C/s",
      "ciUnitString_": "C/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millibar",
      "csCode_": "mbar",
      "ciCode_": "MBAR",
      "property_": "pressure",
      "magnitude_": 100000,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mbar",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "millibars",
      "source_": "LOINC",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "unit of pressure",
      "csUnitString_": "Pa",
      "ciUnitString_": "PAL",
      "baseFactorStr_": "1e5",
      "baseFactor_": 100000,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millibar second per liter",
      "csCode_": "mbar.s/L",
      "ciCode_": "MBAR.S/L",
      "property_": "pressure",
      "magnitude_": 100000000,
      "dim_": {
        "dimVec_": [
          -4,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mbar.s/L",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mbar*s/L; mbar.s per L; mbar*s per L; millibar seconds per liter; millibar second per litre",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit to measure expiratory resistance",
      "csUnitString_": "Pa",
      "ciUnitString_": "PAL",
      "baseFactorStr_": "1e5",
      "baseFactor_": 100000,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millibar per liter per second",
      "csCode_": "mbar/L/s",
      "ciCode_": "MBAR/L/S",
      "property_": "pressure",
      "magnitude_": 100000000,
      "dim_": {
        "dimVec_": [
          -4,
          -3,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mbar/L/s",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mbar/(L.s); mbar/L/sec; mbar/liter/second; mbar per L per sec; mbar per liter per second; millibars per liters per seconds; litres",
      "source_": "LOINC",
      "loincProperty_": "PresCncRat",
      "category_": "Clinical",
      "guidance_": "unit to measure expiratory resistance",
      "csUnitString_": "Pa",
      "ciUnitString_": "PAL",
      "baseFactorStr_": "1e5",
      "baseFactor_": 100000,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent",
      "csCode_": "meq",
      "ciCode_": "MEQ",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": null,
      "printSymbol_": "meq",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "milliequivalents; meqs",
      "source_": "LOINC",
      "loincProperty_": "Sub",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per 2 hour",
      "csCode_": "meq/(2.h)",
      "ciCode_": "MEQ/2.HR",
      "property_": "amount of substance",
      "magnitude_": 83640787500000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/2.h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq/2hrs; meq/2 hrs; meq per 2 hrs; milliequivalents per 2 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per 24 hour",
      "csCode_": "meq/(24.h)",
      "ciCode_": "MEQ/24.HR",
      "property_": "amount of substance",
      "magnitude_": 6970065625000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/24.h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq/24hrs; meq/24 hrs; meq per 24 hrs; milliequivalents per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per 8 hour",
      "csCode_": "meq/(8.h)",
      "ciCode_": "MEQ/8.HR",
      "property_": "amount of substance",
      "magnitude_": 20910196875000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/8.h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq/8hrs; meq/8 hrs; meq per 8 hrs; milliequivalents per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per day",
      "csCode_": "meq/d",
      "ciCode_": "MEQ/D",
      "property_": "amount of substance",
      "magnitude_": 6970065625000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/d",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq/dy; meq per day; milliquivalents per days; meq/24hrs; meq/24 hrs; meq per 24 hrs; milliequivalents per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per deciliter",
      "csCode_": "meq/dL",
      "ciCode_": "MEQ/DL",
      "property_": "amount of substance",
      "magnitude_": 6.022136699999999e+24,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/dL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq per dL; milliequivalents per deciliter; decilitre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per gram",
      "csCode_": "meq/g",
      "ciCode_": "MEQ/G",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/g",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mgq/gm; meq per gm; milliequivalents per gram",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per hour",
      "csCode_": "meq/h",
      "ciCode_": "MEQ/HR",
      "property_": "amount of substance",
      "magnitude_": 167281575000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq/hrs; meq per hrs; milliequivalents per hour",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per kilogram",
      "csCode_": "meq/kg",
      "ciCode_": "MEQ/KG",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/kg",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq per kg; milliequivalents per kilogram",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence; used to measure dose per patient body mass",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per kilogram per hour",
      "csCode_": "meq/kg/h",
      "ciCode_": "MEQ/KG/HR",
      "property_": "amount of substance",
      "magnitude_": 167281575000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/kg/h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq/(kg.h); meq/kg/hr; meq per kg per hr; milliequivalents per kilograms per hour",
      "source_": "LOINC",
      "loincProperty_": "SCntRat",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence; unit used to measure dose rate per patient body mass",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per liter",
      "csCode_": "meq/L",
      "ciCode_": "MEQ/L",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+23,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "milliequivalents per liter; litre; meq per l; acidity",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per square meter",
      "csCode_": "meq/m2",
      "ciCode_": "MEQ/M2",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/m<sup>2</sup>",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq/m^2; meq/sq. m; milliequivalents per square meter; meter squared; metre",
      "source_": "LOINC",
      "loincProperty_": "ArSub",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence; note that the use of m2 in clinical units ofter refers to body surface area",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per minute",
      "csCode_": "meq/min",
      "ciCode_": "MEQ/MIN",
      "property_": "amount of substance",
      "magnitude_": 10036894500000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/min",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq per min; milliequivalents per minute",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliequivalent per milliliter",
      "csCode_": "meq/mL",
      "ciCode_": "MEQ/ML",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+26,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "meq/mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "meq per mL; milliequivalents per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "equivalence equals moles per valence",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram",
      "csCode_": "mg",
      "ciCode_": "MG",
      "property_": "mass",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "milligrams",
      "source_": "LOINC",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per 10 hour",
      "csCode_": "mg/(10.h)",
      "ciCode_": "MG/10.HR",
      "property_": "mass",
      "magnitude_": 2.7777777777777777e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/10.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/10hrs; mg/10 hrs; mg per 10 hrs; milligrams per 10 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per 12 hour",
      "csCode_": "mg/(12.h)",
      "ciCode_": "MG/12.HR",
      "property_": "mass",
      "magnitude_": 2.3148148148148148e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/12.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/12hrs; mg/12 hrs; per 12 hrs; 12hrs; milligrams per 12 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "units used for tests in urine",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per 2 hour",
      "csCode_": "mg/(2.h)",
      "ciCode_": "MG/2.HR",
      "property_": "mass",
      "magnitude_": 1.3888888888888888e-7,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/2.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/2hrs; mg/2 hrs; mg per 2 hrs; 2hrs; milligrams per 2 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "units used for tests in urine",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per 24 hour",
      "csCode_": "mg/(24.h)",
      "ciCode_": "MG/24.HR",
      "property_": "mass",
      "magnitude_": 1.1574074074074074e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/24.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/24hrs; mg/24 hrs; milligrams per 24 hours; mg/kg/dy; mg per kg per day; milligrams per kilograms per days",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per 6 hour",
      "csCode_": "mg/(6.h)",
      "ciCode_": "MG/6.HR",
      "property_": "mass",
      "magnitude_": 4.6296296296296295e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/6.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/6hrs; mg/6 hrs; mg per 6 hrs; 6hrs; milligrams per 6 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per 72 hour",
      "csCode_": "mg/(72.h)",
      "ciCode_": "MG/72.HR",
      "property_": "mass",
      "magnitude_": 3.858024691358025e-9,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/72.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/72hrs; mg/72 hrs; 72 hrs; 72hrs; milligrams per 72 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per 8 hour",
      "csCode_": "mg/(8.h)",
      "ciCode_": "MG/8.HR",
      "property_": "mass",
      "magnitude_": 3.472222222222222e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/8.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/8hrs; mg/8 hrs; milligrams per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per day",
      "csCode_": "mg/d",
      "ciCode_": "MG/D",
      "property_": "mass",
      "magnitude_": 1.1574074074074074e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/d",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/24hrs; mg/24 hrs; milligrams per 24 hours; mg/dy; mg per day; milligrams",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per deciliter",
      "csCode_": "mg/dL",
      "ciCode_": "MG/DL",
      "property_": "mass",
      "magnitude_": 10,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/dL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg per dL; milligrams per deciliter; decilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per gram",
      "csCode_": "mg/g",
      "ciCode_": "MG/G",
      "property_": "mass",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/g",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg per gm; milligrams per gram",
      "source_": "LOINC",
      "loincProperty_": "MCnt; MRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per hour",
      "csCode_": "mg/h",
      "ciCode_": "MG/HR",
      "property_": "mass",
      "magnitude_": 2.7777777777777776e-7,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/hr; mg per hr; milligrams",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per kilogram",
      "csCode_": "mg/kg",
      "ciCode_": "MG/KG",
      "property_": "mass",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/kg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg per kg; milligrams per kilograms",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per kilogram per 8 hour",
      "csCode_": "mg/kg/(8.h)",
      "ciCode_": "MG/KG/8.HR",
      "property_": "mass",
      "magnitude_": 3.472222222222222e-11,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/kg/8.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/(8.h.kg); mg/kg/8hrs; mg/kg/8 hrs; mg per kg per 8hrs; 8 hrs; milligrams per kilograms per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "RelMRat; MCntRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per kilogram per day",
      "csCode_": "mg/kg/d",
      "ciCode_": "MG/KG/D",
      "property_": "mass",
      "magnitude_": 1.1574074074074074e-11,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/kg/d",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/(kg.d); mg/(kg.24.h)mg/kg/dy; mg per kg per day; milligrams per kilograms per days; mg/kg/(24.h); mg/kg/24hrs; 24 hrs; 24 hours",
      "source_": "LOINC",
      "loincProperty_": "RelMRat ",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per kilogram per hour",
      "csCode_": "mg/kg/h",
      "ciCode_": "MG/KG/HR",
      "property_": "mass",
      "magnitude_": 2.7777777777777777e-10,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/kg/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/(kg.h); mg/kg/hr; mg per kg per hr; milligrams per kilograms per hour",
      "source_": "LOINC",
      "loincProperty_": "RelMRat; MCntRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per kilogram per minute",
      "csCode_": "mg/kg/min",
      "ciCode_": "MG/KG/MIN",
      "property_": "mass",
      "magnitude_": 1.6666666666666667e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/kg/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/(kg.min); mg per kg per min; milligrams per kilograms per minute",
      "source_": "LOINC",
      "loincProperty_": "RelMRat; MCntRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per liter",
      "csCode_": "mg/L",
      "ciCode_": "MG/L",
      "property_": "mass",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/L",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg per l; milligrams per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per square meter",
      "csCode_": "mg/m2",
      "ciCode_": "MG/M2",
      "property_": "mass",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/m<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/m^2; mg/sq. m; mg per m2; mg per m^2; mg per sq. milligrams; meter squared; metre",
      "source_": "LOINC",
      "loincProperty_": "ArMass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per cubic meter",
      "csCode_": "mg/m3",
      "ciCode_": "MG/M3",
      "property_": "mass",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/m<sup>3</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/m^3; mg/cu. m; mg per m3; milligrams per cubic meter; meter cubed; metre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per milligram",
      "csCode_": "mg/mg",
      "ciCode_": "MG/MG",
      "property_": "mass",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/mg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg per mg; milligrams; milligram/milligram",
      "source_": "LOINC",
      "loincProperty_": "MRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per minute",
      "csCode_": "mg/min",
      "ciCode_": "MG/MIN",
      "property_": "mass",
      "magnitude_": 0.000016666666666666667,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg per min; milligrams per minutes; milligram/minute",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per milliliter",
      "csCode_": "mg/mL",
      "ciCode_": "MG/ML",
      "property_": "mass",
      "magnitude_": 1000.0000000000001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/mL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg per mL; milligrams per milliliters; millilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per millimole",
      "csCode_": "mg/mmol",
      "ciCode_": "MG/MMOL",
      "property_": "mass",
      "magnitude_": 1.660540186674939e-24,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/mmol",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg per mmol; milligrams per millimole; ",
      "source_": "LOINC",
      "loincProperty_": "Ratio",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "milligram per week",
      "csCode_": "mg/wk",
      "ciCode_": "MG/WK",
      "property_": "mass",
      "magnitude_": 1.6534391534391535e-9,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mg/wk",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mg/week; mg per wk; milligrams per weeks; milligram/week",
      "source_": "LOINC",
      "loincProperty_": "Mrat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter",
      "csCode_": "mL",
      "ciCode_": "ML",
      "property_": "volume",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "milliliters; millilitres",
      "source_": "LOINC",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 10 hour",
      "csCode_": "mL/(10.h)",
      "ciCode_": "ML/10.HR",
      "property_": "volume",
      "magnitude_": 2.7777777777777777e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/10.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/10hrs; ml/10 hrs; mL per 10hrs; 10 hrs; milliliters per 10 hours; millilitres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 12 hour",
      "csCode_": "mL/(12.h)",
      "ciCode_": "ML/12.HR",
      "property_": "volume",
      "magnitude_": 2.3148148148148147e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/12.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/12hrs; ml/12 hrs; mL per 12hrs; 12 hrs; milliliters per 12 hours; millilitres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 2 hour",
      "csCode_": "mL/(2.h)",
      "ciCode_": "ML/2.HR",
      "property_": "volume",
      "magnitude_": 1.3888888888888888e-10,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/2.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/2hrs; ml/2 hrs; mL per 2hrs; 2 hrs; milliliters per 2 hours; millilitres ",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 24 hour",
      "csCode_": "mL/(24.h)",
      "ciCode_": "ML/24.HR",
      "property_": "volume",
      "magnitude_": 1.1574074074074074e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/24.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/24hrs; ml/24 hrs; mL per 24hrs; 24 hrs; milliliters per 24 hours; millilitres; ml/dy; /day; ml per dy; days; fluid outputs; fluid inputs; flow rate",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 4 hour",
      "csCode_": "mL/(4.h)",
      "ciCode_": "ML/4.HR",
      "property_": "volume",
      "magnitude_": 6.944444444444444e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/4.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/4hrs; ml/4 hrs; mL per 4hrs; 4 hrs; milliliters per 4 hours; millilitres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 5 hour",
      "csCode_": "mL/(5.h)",
      "ciCode_": "ML/5.HR",
      "property_": "volume",
      "magnitude_": 5.5555555555555553e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/5.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/5hrs; ml/5 hrs; mL per 5hrs; 5 hrs; milliliters per 5 hours; millilitres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 6 hour",
      "csCode_": "mL/(6.h)",
      "ciCode_": "ML/6.HR",
      "property_": "volume",
      "magnitude_": 4.6296296296296294e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/6.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/6hrs; ml/6 hrs; mL per 6hrs; 6 hrs; milliliters per 6 hours; millilitres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 72 hour",
      "csCode_": "mL/(72.h)",
      "ciCode_": "ML/72.HR",
      "property_": "volume",
      "magnitude_": 3.8580246913580245e-12,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/72.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/72hrs; ml/72 hrs; mL per 72hrs; 72 hrs; milliliters per 72 hours; millilitres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 8 hour",
      "csCode_": "mL/(8.h)",
      "ciCode_": "ML/8.HR",
      "property_": "volume",
      "magnitude_": 3.472222222222222e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/8.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/8hrs; ml/8 hrs; mL per 8hrs; 8 hrs; milliliters per 8 hours; millilitres; shift",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per 8 hour per kilogram",
      "csCode_": "mL/(8.h)/kg",
      "ciCode_": "ML/8.HR/KG",
      "property_": "volume",
      "magnitude_": 3.472222222222222e-14,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/8.h/kg",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL/kg/(8.h); ml/8h/kg; ml/8 h/kg; ml/8hr/kg; ml/8 hr/kgr; mL per 8h per kg; 8 h; 8hr; 8 hr; milliliters per 8 hours per kilogram; millilitres; shift",
      "source_": "LOINC",
      "loincProperty_": "VRatCnt",
      "category_": "Clinical",
      "guidance_": "unit used to measure renal excretion volume rate per body mass",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per square inch (international)",
      "csCode_": "mL/[sin_i]",
      "ciCode_": "ML/[SIN_I]",
      "property_": "volume",
      "magnitude_": 0.0015500031000061998,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL/sin; mL/in2; mL/in^2; mL per sin; in2; in^2; sq. in; milliliters per square inch; inch squared",
      "source_": "LOINC",
      "loincProperty_": "ArVol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per centimeter of water",
      "csCode_": "mL/cm[H2O]",
      "ciCode_": "ML/CM[H2O]",
      "property_": "volume",
      "magnitude_": 1.0197162129779282e-11,
      "dim_": {
        "dimVec_": [
          4,
          2,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/cm HO<sub><r>2</r></sub>",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "milliliters per centimeter of water; millilitre per centimetre of water; millilitres per centimetre of water; mL/cmH2O; mL/cm H2O; mL per cmH2O; mL per cm H2O",
      "source_": "LOINC",
      "loincProperty_": "Compli",
      "category_": "Clinical",
      "guidance_": "unit used to measure dynamic lung compliance",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per day",
      "csCode_": "mL/d",
      "ciCode_": "ML/D",
      "property_": "volume",
      "magnitude_": 1.1574074074074074e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/d",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/day; ml per day; milliliters per day; 24 hours; 24hrs; millilitre;",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "usually used to measure fluid output or input; flow rate",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per deciliter",
      "csCode_": "mL/dL",
      "ciCode_": "ML/DL",
      "property_": "volume",
      "magnitude_": 0.009999999999999998,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/dL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL per dL; millilitres; decilitre; milliliters",
      "source_": "LOINC",
      "loincProperty_": "VFr; VFrDiff",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per hour",
      "csCode_": "mL/h",
      "ciCode_": "ML/HR",
      "property_": "volume",
      "magnitude_": 2.7777777777777777e-10,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL/hr; mL per hr; milliliters per hour; millilitres; fluid intake; fluid output",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per kilogram",
      "csCode_": "mL/kg",
      "ciCode_": "ML/KG",
      "property_": "volume",
      "magnitude_": 9.999999999999999e-10,
      "dim_": {
        "dimVec_": [
          3,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/kg",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL per kg; milliliters per kilogram; millilitres",
      "source_": "LOINC",
      "loincProperty_": "VCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per kilogram per 8 hour",
      "csCode_": "mL/kg/(8.h)",
      "ciCode_": "ML/KG/8.HR",
      "property_": "volume",
      "magnitude_": 3.472222222222222e-14,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/kg/8.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL/(8.h.kg); mL/kg/8hrs; mL/kg/8 hrs; mL per kg per 8hrs; 8 hrs; milliliters per kilograms per 8 hours; millilitres; shift",
      "source_": "LOINC",
      "loincProperty_": "VCntRat; RelEngRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure renal excretion volume rate per body mass",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per kilogram per day",
      "csCode_": "mL/kg/d",
      "ciCode_": "ML/KG/D",
      "property_": "volume",
      "magnitude_": 1.1574074074074072e-14,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/kg/d",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL/(kg.d); mL/kg/dy; mL per kg per day; milliliters per kilograms per day; mg/kg/24hrs; 24 hrs; per 24 hours millilitres",
      "source_": "LOINC",
      "loincProperty_": "VCntRat; RelEngRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure renal excretion volume rate per body mass",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per kilogram per hour",
      "csCode_": "mL/kg/h",
      "ciCode_": "ML/KG/HR",
      "property_": "volume",
      "magnitude_": 2.7777777777777774e-13,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/kg/h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL/(kg.h); mL/kg/hr; mL per kg per hr; milliliters per kilograms per hour; millilitres",
      "source_": "LOINC",
      "loincProperty_": "VCntRat; RelEngRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure renal excretion volume rate per body mass",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per kilogram per minute",
      "csCode_": "mL/kg/min",
      "ciCode_": "ML/KG/MIN",
      "property_": "volume",
      "magnitude_": 1.6666666666666664e-11,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/kg/min",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL/(kg.min); mL/kg/dy; mL per kg per day; milliliters per kilograms per day; millilitres",
      "source_": "LOINC",
      "loincProperty_": "RelEngRat",
      "category_": "Clinical",
      "guidance_": "used for tests that measure activity metabolic rate compared to standard resting metabolic rate ",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per square meter",
      "csCode_": "mL/m2",
      "ciCode_": "ML/M2",
      "property_": "volume",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/m<sup>2</sup>",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL/m^2; mL/sq. meter; mL per m2; m^2; sq. meter; milliliters per square meter; millilitres; meter squared",
      "source_": "LOINC",
      "loincProperty_": "ArVol",
      "category_": "Clinical",
      "guidance_": "used for tests that relate to heart work - e.g. ventricular stroke volume; atrial volume per body surface area",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per millibar",
      "csCode_": "mL/mbar",
      "ciCode_": "ML/MBAR",
      "property_": "volume",
      "magnitude_": 1e-11,
      "dim_": {
        "dimVec_": [
          4,
          2,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/mbar",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL per mbar; milliliters per millibar; millilitres",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit used to measure dynamic lung compliance",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per minute",
      "csCode_": "mL/min",
      "ciCode_": "ML/MIN",
      "property_": "volume",
      "magnitude_": 1.6666666666666667e-8,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/min",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL per min; milliliters; millilitres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per minute per square meter",
      "csCode_": "mL/min/m2",
      "ciCode_": "ML/MIN/M2",
      "property_": "volume",
      "magnitude_": 1.6666666666666667e-8,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/min/m<sup>2</sup>",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/min/m^2; ml/min/sq. meter; mL per min per m2; m^2; sq. meter; milliliters per minutes per square meter; millilitres; metre; meter squared",
      "source_": "LOINC",
      "loincProperty_": "ArVRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure volume per body surface area; oxygen consumption index",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per millimeter",
      "csCode_": "mL/mm",
      "ciCode_": "ML/MM",
      "property_": "volume",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/mm",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mL per mm; milliliters per millimeter; millilitres; millimetre",
      "source_": "LOINC",
      "loincProperty_": "Lineic Volume",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliliter per second",
      "csCode_": "mL/s",
      "ciCode_": "ML/S",
      "property_": "volume",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mL/s",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ml/sec; mL per sec; milliliters per second; millilitres",
      "source_": "LOINC",
      "loincProperty_": "Vel; VelRat; VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "millimeter",
      "csCode_": "mm",
      "ciCode_": "MM",
      "property_": "length",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mm",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "millimeters; millimetres; height; length; diameter; thickness; axis; curvature; size",
      "source_": "LOINC",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "millimeter per hour",
      "csCode_": "mm/h",
      "ciCode_": "MM/HR",
      "property_": "length",
      "magnitude_": 2.7777777777777776e-7,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mm/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mm/hr; mm per hr; millimeters per hour; millimetres",
      "source_": "LOINC",
      "loincProperty_": "Vel",
      "category_": "Clinical",
      "guidance_": "unit to measure sedimentation rate",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "millimeter per minute",
      "csCode_": "mm/min",
      "ciCode_": "MM/MIN",
      "property_": "length",
      "magnitude_": 0.000016666666666666667,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mm/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mm per min; millimeters per minute; millimetres",
      "source_": "LOINC",
      "loincProperty_": "Vel",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimeter of water",
      "csCode_": "mm[H2O]",
      "ciCode_": "MM[H2O]",
      "property_": "pressure",
      "magnitude_": 9806.65,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mm HO<sub><r>2</r></sub>",
      "class_": "clinical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmH2O; mm H2O; millimeters of water; millimetres",
      "source_": "LOINC",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "kPa",
      "ciUnitString_": "KPAL",
      "baseFactorStr_": "980665e-5",
      "baseFactor_": "9.80665",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimeter of mercury",
      "csCode_": "mm[Hg]",
      "ciCode_": "MM[HG]",
      "property_": "pressure",
      "magnitude_": 133322,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mm Hg",
      "class_": "clinical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmHg; mm Hg; millimeters of mercury; millimetres",
      "source_": "LOINC",
      "loincProperty_": "Pres; PPres; Ratio",
      "category_": "Clinical",
      "guidance_": "1 mm[Hg] = 1 torr; unit to measure blood pressure",
      "csUnitString_": "kPa",
      "ciUnitString_": "KPAL",
      "baseFactorStr_": "133.3220",
      "baseFactor_": "133.3220",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "square millimeter",
      "csCode_": "mm2",
      "ciCode_": "MM2",
      "property_": "length",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mm<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mm^2; sq. mm.; sq. millimeters; millimeters squared; millimetres",
      "source_": "LOINC",
      "loincProperty_": "Area",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole",
      "csCode_": "mmol",
      "ciCode_": "MMOL",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": null,
      "printSymbol_": "mmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "millimoles",
      "source_": "LOINC",
      "loincProperty_": "Sub",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per 12 hour",
      "csCode_": "mmol/(12.h)",
      "ciCode_": "MMOL/12.HR",
      "property_": "amount of substance",
      "magnitude_": 13940131250000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/12.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/12hrs; mmol/12 hrs; mmol per 12 hrs; 12hrs; millimoles per 12 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "unit for tests related to urine",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per 2 hour",
      "csCode_": "mmol/(2.h)",
      "ciCode_": "MMOL/2.HR",
      "property_": "amount of substance",
      "magnitude_": 83640787500000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/2.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/2hrs; mmol/2 hrs; mmol per 2 hrs; 2hrs; millimoles per 2 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "unit for tests related to urine",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per 24 hour",
      "csCode_": "mmol/(24.h)",
      "ciCode_": "MMOL/24.HR",
      "property_": "amount of substance",
      "magnitude_": 6970065625000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/24.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/24hrs; mmol/24 hrs; mmol per 24 hrs; 24hrs; millimoles per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per 5 hour",
      "csCode_": "mmol/(5.h)",
      "ciCode_": "MMOL/5.HR",
      "property_": "amount of substance",
      "magnitude_": 33456315000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/5.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/5hrs; mmol/5 hrs; mmol per 5 hrs; 5hrs; millimoles per 5 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "unit for tests related to doses",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per 6 hour",
      "csCode_": "mmol/(6.h)",
      "ciCode_": "MMOL/6.HR",
      "property_": "amount of substance",
      "magnitude_": 27880262500000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/6.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/6hrs; mmol/6 hrs; mmol per 6 hrs; 6hrs; millimoles per 6 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "unit for tests related to urine",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per 8 hour",
      "csCode_": "mmol/(8.h)",
      "ciCode_": "MMOL/8.HR",
      "property_": "amount of substance",
      "magnitude_": 20910196875000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/8.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/8hrs; mmol/8 hrs; mmol per 8 hrs; 8hrs; millimoles per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per day",
      "csCode_": "mmol/d",
      "ciCode_": "MMOL/D",
      "property_": "amount of substance",
      "magnitude_": 6970065625000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/d",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/24hrs; mmol/24 hrs; mmol per 24 hrs; 24hrs; millimoles per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per deciliter",
      "csCode_": "mmol/dL",
      "ciCode_": "MMOL/DL",
      "property_": "amount of substance",
      "magnitude_": 6.022136699999999e+24,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/dL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol per dL; millimoles; decilitre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per gram",
      "csCode_": "mmol/g",
      "ciCode_": "MMOL/G",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/g",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol per gram; millimoles",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per hour",
      "csCode_": "mmol/h",
      "ciCode_": "MMOL/HR",
      "property_": "amount of substance",
      "magnitude_": 167281575000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/hr; mmol per hr; millimoles per hour",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "unit for tests related to urine",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per kilogram",
      "csCode_": "mmol/kg",
      "ciCode_": "MMOL/KG",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/kg",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol per kg; millimoles per kilogram",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "unit for tests related to stool",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per kilogram per 8 hour",
      "csCode_": "mmol/kg/(8.h)",
      "ciCode_": "MMOL/KG/8.HR",
      "property_": "amount of substance",
      "magnitude_": 20910196875000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/kg/8.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/(8.h.kg); mmol/kg/8hrs; mmol/kg/8 hrs; mmol per kg per 8hrs; 8 hrs; millimoles per kilograms per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "unit used to measure molar dose rate per patient body mass",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per kilogram per day",
      "csCode_": "mmol/kg/d",
      "ciCode_": "MMOL/KG/D",
      "property_": "amount of substance",
      "magnitude_": 6970065625000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/kg/d",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/kg/dy; mmol/kg/day; mmol per kg per dy; millimoles per kilograms per day",
      "source_": "LOINC",
      "loincProperty_": "RelSRat",
      "category_": "Clinical",
      "guidance_": "unit used to measure molar dose rate per patient body mass",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per kilogram per hour",
      "csCode_": "mmol/kg/h",
      "ciCode_": "MMOL/KG/HR",
      "property_": "amount of substance",
      "magnitude_": 167281575000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/kg/h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/kg/hr; mmol per kg per hr; millimoles per kilograms per hour",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "unit used to measure molar dose rate per patient body mass",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per kilogram per minute",
      "csCode_": "mmol/kg/min",
      "ciCode_": "MMOL/KG/MIN",
      "property_": "amount of substance",
      "magnitude_": 10036894500000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/kg/min",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/(kg.min); mmol/kg/min; mmol per kg per min; millimoles per kilograms per minute",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "unit used to measure molar dose rate per patient body mass; note that the unit for the enzyme unit U = umol/min. mmol/kg/min = kU/kg; ",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per liter",
      "csCode_": "mmol/L",
      "ciCode_": "MMOL/L",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+23,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol per L; millimoles per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "unit for tests related to doses",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per square meter",
      "csCode_": "mmol/m2",
      "ciCode_": "MMOL/M2",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/m<sup>2</sup>",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/m^2; mmol/sq. meter; mmol per m2; m^2; sq. meter; millimoles; meter squared; metre",
      "source_": "LOINC",
      "loincProperty_": "ArSub",
      "category_": "Clinical",
      "guidance_": "unit used to measure molar dose per patient body surface area",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per minute",
      "csCode_": "mmol/min",
      "ciCode_": "MMOL/MIN",
      "property_": "amount of substance",
      "magnitude_": 10036894500000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/min",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol per min; millimoles per minute",
      "source_": "LOINC",
      "loincProperty_": "Srat; CAct",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min. mmol/min = kU",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per millimole",
      "csCode_": "mmol/mmol",
      "ciCode_": "MMOL/MMOL",
      "property_": "amount of substance",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "mmol/mmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol per mmol; millimoles per millimole",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per mole",
      "csCode_": "mmol/mol",
      "ciCode_": "MMOL/MOL",
      "property_": "amount of substance",
      "magnitude_": 0.001,
      "dim_": null,
      "printSymbol_": "mmol/mol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol per mol; millimoles per mole",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millimole per second per liter",
      "csCode_": "mmol/s/L",
      "ciCode_": "MMOL/S/L",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+23,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mmol/s/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mmol/sec/L; mmol per s per L; per sec; millimoles per seconds per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "CCnc ",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mole per kilogram",
      "csCode_": "mol/kg",
      "ciCode_": "MOL/KG",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mol/kg",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mol per kg; moles; mols",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "unit for tests related to stool",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mole per kilogram per second",
      "csCode_": "mol/kg/s",
      "ciCode_": "MOL/KG/S",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mol/kg/s",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mol/kg/sec; mol per kg per sec; moles per kilograms per second; mols",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "unit of catalytic activity (mol/s) per mass (kg)",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mole per liter",
      "csCode_": "mol/L",
      "ciCode_": "MOL/L",
      "property_": "amount of substance",
      "magnitude_": 6.0221366999999994e+26,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mol/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mol per L; moles per liter; litre; moles; mols",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "unit often used in tests measuring oxygen content",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mole per cubic meter",
      "csCode_": "mol/m3",
      "ciCode_": "MOL/M3",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+23,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mol/m<sup>3</sup>",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mol/m^3; mol/cu. m; mol per m3; m^3; cu. meter; mols; moles; meters cubed; metre; mole per kiloliter; kilolitre; mol/kL",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mole per milliliter",
      "csCode_": "mol/mL",
      "ciCode_": "MOL/ML",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+29,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mol/mL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mol per mL; moles; millilitre; mols",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mole per mole",
      "csCode_": "mol/mol",
      "ciCode_": "MOL/MOL",
      "property_": "amount of substance",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "mol/mol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mol per mol; moles per mol; mols",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "mole per second",
      "csCode_": "mol/s",
      "ciCode_": "MOL/S",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+23,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mol/s",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mol per sec; moles per second; mols",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliosmole",
      "csCode_": "mosm",
      "ciCode_": "MOSM",
      "property_": "amount of substance (dissolved particles)",
      "magnitude_": 602213670000000000000,
      "dim_": null,
      "printSymbol_": "mosm",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "milliosmoles",
      "source_": "LOINC",
      "loincProperty_": "Osmol",
      "category_": "Clinical",
      "guidance_": "equal to 1/1000 of an osmole",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliosmole per kilogram",
      "csCode_": "mosm/kg",
      "ciCode_": "MOSM/KG",
      "property_": "amount of substance (dissolved particles)",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mosm/kg",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mosm per kg; milliosmoles per kilogram",
      "source_": "LOINC",
      "loincProperty_": "Osmol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milliosmole per liter",
      "csCode_": "mosm/L",
      "ciCode_": "MOSM/L",
      "property_": "amount of substance (dissolved particles)",
      "magnitude_": 6.0221367e+23,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mosm/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mosm per liter; litre; milliosmoles",
      "source_": "LOINC",
      "loincProperty_": "Osmol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millipascal",
      "csCode_": "mPa",
      "ciCode_": "MPAL",
      "property_": "pressure",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -1,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mPa",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "millipascals",
      "source_": "LOINC",
      "loincProperty_": "Pres",
      "category_": "Clinical",
      "guidance_": "unit of pressure",
      "csUnitString_": "N/m2",
      "ciUnitString_": "N/M2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millipascal second",
      "csCode_": "mPa.s",
      "ciCode_": "MPAL.S",
      "property_": "pressure",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -1,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mPa.s",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mPa*s; millipoise; mP; dynamic viscosity",
      "source_": "LOINC",
      "loincProperty_": "Visc",
      "category_": "Clinical",
      "guidance_": "base units for millipoise, a measurement of dynamic viscosity",
      "csUnitString_": "N/m2",
      "ciUnitString_": "N/M2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "millisecond",
      "csCode_": "Ms",
      "ciCode_": "MAS",
      "property_": "time",
      "magnitude_": 1000000,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "Ms",
      "class_": null,
      "isMetric_": false,
      "variable_": "T",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "milliseconds; duration",
      "source_": "LOINC",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milli enzyme unit per gram",
      "csCode_": "mU/g",
      "ciCode_": "MU/G",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mU/g",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mU per gm; milli enzyme units per gram; enzyme activity; enzymatic activity per mass",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milli enzyme unit per liter",
      "csCode_": "mU/L",
      "ciCode_": "MU/L",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mU/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mU per liter; litre; milli enzyme units enzymatic activity per volume; enzyme activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milli enzyme unit per milligram",
      "csCode_": "mU/mg",
      "ciCode_": "MU/MG",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mU/mg",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mU per mg; milli enzyme units per milligram",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milli enzyme unit per milliliter",
      "csCode_": "mU/mL",
      "ciCode_": "MU/ML",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mU/mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mU per mL; milli enzyme units per milliliter; millilitre; enzymatic activity per volume; enzyme activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "milli enzyme unit per milliliter per minute",
      "csCode_": "mU/mL/min",
      "ciCode_": "MU/ML/MIN",
      "property_": "catalytic activity",
      "magnitude_": 167281575000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "mU/mL/min",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mU per mL per min; mU per milliliters per minute; millilitres; milli enzyme units; enzymatic activity; enzyme activity",
      "source_": "LOINC",
      "loincProperty_": "CCncRat",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "millivolt",
      "csCode_": "mV",
      "ciCode_": "MV",
      "property_": "electric potential",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "mV",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "millivolts",
      "source_": "LOINC",
      "loincProperty_": "Elpot",
      "category_": "Clinical",
      "guidance_": "unit of electric potential (voltage)",
      "csUnitString_": "J/C",
      "ciUnitString_": "J/C",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Newton centimeter",
      "csCode_": "N.cm",
      "ciCode_": "N.CM",
      "property_": "force",
      "magnitude_": 10,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "N.cm",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "N*cm; Ncm; N cm; Newton*centimeters; Newton* centimetres; torque; work",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "as a measurement of work, N.cm = 1/100 Joules;\nnote that N.m is the standard unit of measurement for torque (although dimensionally equivalent to Joule), and N.cm can also be thought of as a torqe unit",
      "csUnitString_": "kg.m/s2",
      "ciUnitString_": "KG.M/S2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Newton second",
      "csCode_": "N.s",
      "ciCode_": "N.S",
      "property_": "force",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "N.s",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "Newton*seconds; N*s; N s; Ns; impulse; imp",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "standard unit of impulse",
      "csUnitString_": "kg.m/s2",
      "ciUnitString_": "KG.M/S2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram",
      "csCode_": "ng",
      "ciCode_": "NG",
      "property_": "mass",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nanograms",
      "source_": "LOINC",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per 24 hour",
      "csCode_": "ng/(24.h)",
      "ciCode_": "NG/24.HR",
      "property_": "mass",
      "magnitude_": 1.1574074074074075e-14,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/24.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/24hrs; ng/24 hrs; nanograms per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per 8 hour",
      "csCode_": "ng/(8.h)",
      "ciCode_": "NG/8.HR",
      "property_": "mass",
      "magnitude_": 3.4722222222222224e-14,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/8.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/8hrs; ng/8 hrs; nanograms per 8 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per million",
      "csCode_": "ng/10*6",
      "ciCode_": "NG/10*6",
      "property_": "mass",
      "magnitude_": 1e-15,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/10<sup>6</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/10^6; ng per 10*6; 10^6; nanograms",
      "source_": "LOINC",
      "loincProperty_": "MNum",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per day",
      "csCode_": "ng/d",
      "ciCode_": "NG/D",
      "property_": "mass",
      "magnitude_": 1.1574074074074075e-14,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/d",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/dy; ng per day; nanograms ",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per deciliter",
      "csCode_": "ng/dL",
      "ciCode_": "NG/DL",
      "property_": "mass",
      "magnitude_": 0.00001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/dL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng per dL; nanograms per deciliter; decilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per gram",
      "csCode_": "ng/g",
      "ciCode_": "NG/G",
      "property_": "mass",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/g",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/gm; ng per gm; nanograms per gram",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per hour",
      "csCode_": "ng/h",
      "ciCode_": "NG/HR",
      "property_": "mass",
      "magnitude_": 2.777777777777778e-13,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/hr; ng per hr; nanograms per hour",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per kilogram",
      "csCode_": "ng/kg",
      "ciCode_": "NG/KG",
      "property_": "mass",
      "magnitude_": 1e-12,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/kg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng per kg; nanograms per kilogram",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per kilogram per 8 hour",
      "csCode_": "ng/kg/(8.h)",
      "ciCode_": "NG/KG/8.HR",
      "property_": "mass",
      "magnitude_": 3.472222222222222e-17,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/kg/8.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/(8.h.kg); ng/kg/8hrs; ng/kg/8 hrs; ng per kg per 8hrs; 8 hrs; nanograms per kilograms per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "MRtoRat ",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per kilogram per hour",
      "csCode_": "ng/kg/h",
      "ciCode_": "NG/KG/HR",
      "property_": "mass",
      "magnitude_": 2.7777777777777775e-16,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/kg/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/(kg.h); ng/kg/hr; ng per kg per hr; nanograms per kilograms per hour",
      "source_": "LOINC",
      "loincProperty_": "MRtoRat ",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per kilogram per minute",
      "csCode_": "ng/kg/min",
      "ciCode_": "NG/KG/MIN",
      "property_": "mass",
      "magnitude_": 1.6666666666666667e-14,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/kg/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/(kg.min); ng per kg per min; nanograms per kilograms per minute",
      "source_": "LOINC",
      "loincProperty_": "MRtoRat ",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per liter",
      "csCode_": "ng/L",
      "ciCode_": "NG/L",
      "property_": "mass",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/L",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng per L; nanograms per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per square meter",
      "csCode_": "ng/m2",
      "ciCode_": "NG/M2",
      "property_": "mass",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/m<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/m^2; ng/sq. m; ng per m2; m^2; sq. meter; nanograms; meter squared; metre",
      "source_": "LOINC",
      "loincProperty_": "ArMass",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose per patient body surface area",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per milligram",
      "csCode_": "ng/mg",
      "ciCode_": "NG/MG",
      "property_": "mass",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/mg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng per mg; nanograms",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per milligram per hour",
      "csCode_": "ng/mg/h",
      "ciCode_": "NG/MG/HR",
      "property_": "mass",
      "magnitude_": 2.7777777777777777e-10,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/mg/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/mg/hr; ng per mg per hr; nanograms per milligrams per hour",
      "source_": "LOINC",
      "loincProperty_": "MRtoRat ",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per minute",
      "csCode_": "ng/min",
      "ciCode_": "NG/MIN",
      "property_": "mass",
      "magnitude_": 1.6666666666666667e-11,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng per min; nanograms",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per millliiter",
      "csCode_": "ng/mL",
      "ciCode_": "NG/ML",
      "property_": "mass",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/mL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng per mL; nanograms; millilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per milliliter per hour",
      "csCode_": "ng/mL/h",
      "ciCode_": "NG/ML/HR",
      "property_": "mass",
      "magnitude_": 2.7777777777777776e-7,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/mL/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/mL/hr; ng per mL per mL; nanograms per milliliter per hour; nanogram per millilitre per hour; nanograms per millilitre per hour; enzymatic activity per volume; enzyme activity per milliliters",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "tests that measure enzymatic activity",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per second",
      "csCode_": "ng/s",
      "ciCode_": "NG/S",
      "property_": "mass",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/s",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng/sec; ng per sec; nanograms per second",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanogram per enzyme unit",
      "csCode_": "ng/U",
      "ciCode_": "NG/U",
      "property_": "mass",
      "magnitude_": 9.963241120049634e-26,
      "dim_": {
        "dimVec_": [
          0,
          1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ng/U",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ng per U; nanograms per enzyme unit",
      "source_": "LOINC",
      "loincProperty_": "CMass",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanokatal",
      "csCode_": "nkat",
      "ciCode_": "NKAT",
      "property_": "catalytic activity",
      "magnitude_": 602213670000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nkat",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nanokatals",
      "source_": "LOINC",
      "loincProperty_": "CAct",
      "category_": "Clinical",
      "guidance_": "kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.",
      "csUnitString_": "mol/s",
      "ciUnitString_": "MOL/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanoliter",
      "csCode_": "nL",
      "ciCode_": "NL",
      "property_": "volume",
      "magnitude_": 1.0000000000000002e-12,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nanoliters; nanolitres",
      "source_": "LOINC",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanometer",
      "csCode_": "nm",
      "ciCode_": "NM",
      "property_": "length",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nm",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nanometers; nanometres",
      "source_": "LOINC",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanometer per second per liter",
      "csCode_": "nm/s/L",
      "ciCode_": "NM/S/L",
      "property_": "length",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          -2,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nm/s/L",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nm/sec/liter; nm/sec/litre; nm per s per l; nm per sec per l; nanometers per second per liter; nanometre per second per litre; nanometres per second per litre",
      "source_": "LOINC",
      "loincProperty_": "VelCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole",
      "csCode_": "nmol",
      "ciCode_": "NMOL",
      "property_": "amount of substance",
      "magnitude_": 602213670000000,
      "dim_": null,
      "printSymbol_": "nmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nanomoles",
      "source_": "LOINC",
      "loincProperty_": "Sub",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per 24 hour",
      "csCode_": "nmol/(24.h)",
      "ciCode_": "NMOL/24.HR",
      "property_": "amount of substance",
      "magnitude_": 6970065625,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/24.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol/24hr; nmol/24 hr; nanomoles per 24 hours; nmol/day; nanomoles per day; nmol per day; nanomole/day; nanomol/day",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per day",
      "csCode_": "nmol/d",
      "ciCode_": "NMOL/D",
      "property_": "amount of substance",
      "magnitude_": 6970065625,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/d",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol/day; nanomoles per day; nmol per day; nanomole/day; nanomol/day; nmol/24hr; nmol/24 hr; nanomoles per 24 hours; ",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per deciliter",
      "csCode_": "nmol/dL",
      "ciCode_": "NMOL/DL",
      "property_": "amount of substance",
      "magnitude_": 6022136700000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/dL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per dL; nanomoles per deciliter; nanomole per decilitre; nanomoles per decilitre; nanomole/deciliter; nanomole/decilitre; nanomol/deciliter; nanomol/decilitre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per gram",
      "csCode_": "nmol/g",
      "ciCode_": "NMOL/G",
      "property_": "amount of substance",
      "magnitude_": 602213670000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/g",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per gram; nanomoles per gram; nanomole/gram",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per hour per liter",
      "csCode_": "nmol/h/L",
      "ciCode_": "NMOL/HR/L",
      "property_": "amount of substance",
      "magnitude_": 167281575000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/h/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol/hrs/L; nmol per hrs per L; nanomoles per hours per liter; litre; enzymatic activity per volume; enzyme activities",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per liter",
      "csCode_": "nmol/L",
      "ciCode_": "NMOL/L",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per L; nanomoles per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per milligram",
      "csCode_": "nmol/mg",
      "ciCode_": "NMOL/MG",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/mg",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per mg; nanomoles per milligram",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per milligram per hour",
      "csCode_": "nmol/mg/h",
      "ciCode_": "NMOL/MG/HR",
      "property_": "amount of substance",
      "magnitude_": 167281575000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/mg/h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol/mg/hr; nmol per mg per hr; nanomoles per milligrams per hour",
      "source_": "LOINC",
      "loincProperty_": "SCntRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole of 1/2 cystine per milligram of protein",
      "csCode_": "nmol/mg{prot}",
      "ciCode_": "NMOL/MG",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/mg",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nanomoles; half cystine; nmol per 1/2 cys per mg prot",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per minute",
      "csCode_": "nmol/min",
      "ciCode_": "NMOL/MIN",
      "property_": "amount of substance",
      "magnitude_": 10036894500000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/min",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per min; nanomoles per minute; milli enzyme units; enzyme activity per volume; enzymatic activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min. nmol/min = mU (milli enzyme unit)",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per minute per milliliter",
      "csCode_": "nmol/min/mL",
      "ciCode_": "NMOL/MIN/ML",
      "property_": "amount of substance",
      "magnitude_": 10036894500000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/min/mL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per min per mL; nanomoles per minutes per milliliter; millilitre; milli enzyme units per volume; enzyme activity; enzymatic activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min. nmol/mL/min = mU/mL",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per milliliter",
      "csCode_": "nmol/mL",
      "ciCode_": "NMOL/ML",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/mL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per mL; nanomoles per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per milliliter per hour",
      "csCode_": "nmol/mL/h",
      "ciCode_": "NMOL/ML/HR",
      "property_": "amount of substance",
      "magnitude_": 167281575000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/mL/h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol/mL/hr; nmol per mL per hr; nanomoles per milliliters per hour; millilitres; milli enzyme units per volume; enzyme activity; enzymatic activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min.",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per milliliter per minute",
      "csCode_": "nmol/mL/min",
      "ciCode_": "NMOL/ML/MIN",
      "property_": "amount of substance",
      "magnitude_": 10036894500000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/mL/min",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per mL per min; nanomoles per milliliters per min; millilitres; milli enzyme units per volume; enzyme activity; enzymatic activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min. nmol/mL/min = mU/mL",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per millimole",
      "csCode_": "nmol/mmol",
      "ciCode_": "NMOL/MMOL",
      "property_": "amount of substance",
      "magnitude_": 0.000001,
      "dim_": null,
      "printSymbol_": "nmol/mmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per mmol; nanomoles per millimole",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per millimole of creatinine",
      "csCode_": "nmol/mmol{creat}",
      "ciCode_": "NMOL/MMOL",
      "property_": "amount of substance",
      "magnitude_": 0.000001,
      "dim_": null,
      "printSymbol_": "nmol/mmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nanomoles",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per mole",
      "csCode_": "nmol/mol",
      "ciCode_": "NMOL/MOL",
      "property_": "amount of substance",
      "magnitude_": 1e-9,
      "dim_": null,
      "printSymbol_": "nmol/mol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per mole; nanomoles",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per nanomole",
      "csCode_": "nmol/nmol",
      "ciCode_": "NMOL/NMOL",
      "property_": "amount of substance",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "nmol/nmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol per nmol; nanomoles",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per second",
      "csCode_": "nmol/s",
      "ciCode_": "NMOL/S",
      "property_": "amount of substance",
      "magnitude_": 602213670000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/s",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol/sec; nmol per sec; nanomoles per sercond; milli enzyme units; enzyme activity; enzymatic activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min.",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanomole per second per liter",
      "csCode_": "nmol/s/L",
      "ciCode_": "NMOL/S/L",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nmol/s/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nmol/sec/L; nmol per s per L; nmol per sec per L; nanomoles per seconds per liter; litre; milli enzyme units per volume; enzyme activity; enzymatic activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min.",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "nanosecond",
      "csCode_": "ns",
      "ciCode_": "NS",
      "property_": "time",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ns",
      "class_": null,
      "isMetric_": false,
      "variable_": "T",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nanoseconds",
      "source_": "LOINC",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "nanoenzyme unit per milliliter",
      "csCode_": "nU/mL",
      "ciCode_": "NU/ML",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "nU/mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "nU per mL; nanoenzyme units per milliliter; millilitre; enzymatic activity per volume; enzyme activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 fU = pmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "Ohm meter",
      "csCode_": "Ohm.m",
      "ciCode_": "OHM.M",
      "property_": "electric resistance",
      "magnitude_": 1000,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          1,
          0,
          0,
          -2,
          0
        ]
      },
      "printSymbol_": "Ω.m",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "electric resistivity; meters; metres",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of electric resistivity",
      "csUnitString_": "V/A",
      "ciUnitString_": "V/A",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "osmole per kilogram",
      "csCode_": "osm/kg",
      "ciCode_": "OSM/KG",
      "property_": "amount of substance (dissolved particles)",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "osm/kg",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "osm per kg; osmoles per kilogram; osmols",
      "source_": "LOINC",
      "loincProperty_": "Osmol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "osmole per liter",
      "csCode_": "osm/L",
      "ciCode_": "OSM/L",
      "property_": "amount of substance (dissolved particles)",
      "magnitude_": 6.0221366999999994e+26,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "osm/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "osm per L; osmoles per liter; litre; osmols",
      "source_": "LOINC",
      "loincProperty_": "Osmol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "picogram",
      "csCode_": "pg",
      "ciCode_": "PG",
      "property_": "mass",
      "magnitude_": 1e-12,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picograms",
      "source_": "LOINC",
      "loincProperty_": "Mass; EntMass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "picogram per deciliter",
      "csCode_": "pg/dL",
      "ciCode_": "PG/DL",
      "property_": "mass",
      "magnitude_": 9.999999999999999e-9,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pg/dL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pg per dL; picograms; decilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "picogram per liter",
      "csCode_": "pg/L",
      "ciCode_": "PG/L",
      "property_": "mass",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pg/L",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pg per L; picograms; litre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "picogram per milligram",
      "csCode_": "pg/mg",
      "ciCode_": "PG/MG",
      "property_": "mass",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pg/mg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pg per mg; picograms",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "picogram per milliliter",
      "csCode_": "pg/mL",
      "ciCode_": "PG/ML",
      "property_": "mass",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pg/mL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pg per mL; picograms per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "picogram per millimeter",
      "csCode_": "pg/mm",
      "ciCode_": "PG/MM",
      "property_": "mass",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          -1,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pg/mm",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pg per mm; picogram/millimeter; picogram/millimetre; picograms per millimeter; millimetre",
      "source_": "LOINC",
      "loincProperty_": "Lineic Mass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picokatal",
      "csCode_": "pkat",
      "ciCode_": "PKAT",
      "property_": "catalytic activity",
      "magnitude_": 602213670000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pkat",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pkats; picokatals",
      "source_": "LOINC",
      "loincProperty_": "CAct",
      "category_": "Clinical",
      "guidance_": "kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.",
      "csUnitString_": "mol/s",
      "ciUnitString_": "MOL/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picoliter",
      "csCode_": "pL",
      "ciCode_": "PL",
      "property_": "volume",
      "magnitude_": 1e-15,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picoliters; picolitres",
      "source_": "LOINC",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "picometer",
      "csCode_": "pm",
      "ciCode_": "PM",
      "property_": "length",
      "magnitude_": 1e-12,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pm",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picometers; picometres",
      "source_": "LOINC",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole",
      "csCode_": "pmol",
      "ciCode_": "PMOL",
      "property_": "amount of substance",
      "magnitude_": 602213670000,
      "dim_": null,
      "printSymbol_": "pmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picomoles; pmols",
      "source_": "LOINC",
      "loincProperty_": "Sub",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole per 24 hour",
      "csCode_": "pmol/(24.h)",
      "ciCode_": "PMOL/24.HR",
      "property_": "amount of substance",
      "magnitude_": 6970065.625,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pmol/24.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pmol/24hrs; pmol/24 hrs; pmol per 24 hrs; 24hrs; days; dy; picomoles per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole per day",
      "csCode_": "pmol/d",
      "ciCode_": "PMOL/D",
      "property_": "amount of substance",
      "magnitude_": 6970065.625,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pmol/d",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pmol/dy; pmol per day; 24 hours; 24hrs; 24 hrs; picomoles",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole per deciliter",
      "csCode_": "pmol/dL",
      "ciCode_": "PMOL/DL",
      "property_": "amount of substance",
      "magnitude_": 6022136700000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pmol/dL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pmol per dL; picomoles per deciliter; decilitre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole per gram",
      "csCode_": "pmol/g",
      "ciCode_": "PMOL/G",
      "property_": "amount of substance",
      "magnitude_": 602213670000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pmol/g",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pmol per gm; picomoles per gram; picomole/gram",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole per hour per milliliter ",
      "csCode_": "pmol/h/mL",
      "ciCode_": "PMOL/HR/ML",
      "property_": "amount of substance",
      "magnitude_": 167281575000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pmol/h/mL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pmol/hrs/mL; pmol per hrs per mL; picomoles per hour per milliliter; millilitre; micro enzyme units per volume; enzymatic activity; enzyme activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min. ",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole per liter",
      "csCode_": "pmol/L",
      "ciCode_": "PMOL/L",
      "property_": "amount of substance",
      "magnitude_": 602213670000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pmol/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picomole/liter; pmol per L; picomoles; litre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole per minute",
      "csCode_": "pmol/min",
      "ciCode_": "PMOL/MIN",
      "property_": "amount of substance",
      "magnitude_": 10036894500,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pmol/min",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picomole/minute; pmol per min; picomoles per minute; micro enzyme units; enzymatic activity; enzyme activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min. pmol/min = uU (micro enzyme unit)",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole per milliliter",
      "csCode_": "pmol/mL",
      "ciCode_": "PMOL/ML",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "pmol/mL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picomole/milliliter; picomole/millilitre; pmol per mL; picomoles; millilitre; picomols; pmols",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picomole per micromole",
      "csCode_": "pmol/umol",
      "ciCode_": "PMOL/UMOL",
      "property_": "amount of substance",
      "magnitude_": 0.000001,
      "dim_": null,
      "printSymbol_": "pmol/μmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "pmol/mcgmol; picomole/micromole; pmol per umol; pmol per mcgmol; picomoles ",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "picosecond",
      "csCode_": "ps",
      "ciCode_": "PS",
      "property_": "time",
      "magnitude_": 1e-12,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "ps",
      "class_": null,
      "isMetric_": false,
      "variable_": "T",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picoseconds; psec",
      "source_": "LOINC",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "picotesla",
      "csCode_": "pT",
      "ciCode_": "PT",
      "property_": "magnetic flux density",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "pT",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "picoteslas",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "SI unit of magnetic field strength for magnetic field B",
      "csUnitString_": "Wb/m2",
      "ciUnitString_": "WB/M2",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per 12 hour",
      "csCode_": "U/(12.h)",
      "ciCode_": "U/12.HR",
      "property_": "catalytic activity",
      "magnitude_": 232335520833.33334,
      "dim_": {
        "dimVec_": [
          0,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/12.h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U/12hrs; U/ 12hrs; U per 12 hrs; 12hrs; enzyme units per 12 hours; enzyme activity; enzymatic activity per time; umol per min per 12 hours; micromoles per minute per 12 hours; umol/min/12hr",
      "source_": "LOINC",
      "loincProperty_": "CRat",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per 2 hour",
      "csCode_": "U/(2.h)",
      "ciCode_": "U/2.HR",
      "property_": "catalytic activity",
      "magnitude_": 1394013125000,
      "dim_": {
        "dimVec_": [
          0,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/2.h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U/2hrs; U/ 2hrs; U per 2 hrs; 2hrs; enzyme units per 2 hours; enzyme activity; enzymatic activity per time; umol per minute per 2 hours; micromoles per minute; umol/min/2hr; umol per min per 2hr",
      "source_": "LOINC",
      "loincProperty_": "CRat",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per 24 hour",
      "csCode_": "U/(24.h)",
      "ciCode_": "U/24.HR",
      "property_": "catalytic activity",
      "magnitude_": 116167760416.66667,
      "dim_": {
        "dimVec_": [
          0,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/24.h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U/24hrs; U/ 24hrs; U per 24 hrs; 24hrs; enzyme units per 24 hours; enzyme activity; enzymatic activity per time; micromoles per minute per 24 hours; umol/min/24hr; umol per min per 24hr",
      "source_": "LOINC",
      "loincProperty_": "CRat",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per 10",
      "csCode_": "U/10",
      "ciCode_": "U",
      "property_": "catalytic activity",
      "magnitude_": 1003689450000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "enzyme unit/10; U per 10; enzyme units per 10; enzymatic activity; enzyme activity; micromoles per minute; umol/min/10",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per 10 billion",
      "csCode_": "U/10*10",
      "ciCode_": "U/10*10",
      "property_": "catalytic activity",
      "magnitude_": 1003689.45,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/10<sup>10</sup>",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U per 10*10; enzyme units per 10*10; U per 10 billion; enzyme units; enzymatic activity; micromoles per minute per 10 billion; umol/min/10*10",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per trillion",
      "csCode_": "U/10*12",
      "ciCode_": "U/10*12",
      "property_": "catalytic activity",
      "magnitude_": 10036.8945,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/10<sup>12</sup>",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "enzyme unit/10*12; U per 10*12; enzyme units per 10*12; enzyme units per trillion; enzymatic activity; micromoles per minute per trillion; umol/min/10*12; umol per min per 10*12",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per million",
      "csCode_": "U/10*6",
      "ciCode_": "U/10*6",
      "property_": "catalytic activity",
      "magnitude_": 10036894500,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/10<sup>6</sup>",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "enzyme unit/10*6; U per 10*6; enzyme units per 10*6; enzyme units; enzymatic activity per volume; micromoles per minute per million; umol/min/10*6; umol per min per 10*6",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per billion",
      "csCode_": "U/10*9",
      "ciCode_": "U/10*9",
      "property_": "catalytic activity",
      "magnitude_": 10036894.5,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/10<sup>9</sup>",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "enzyme unit/10*9; U per 10*9; enzyme units per 10*9; enzymatic activity per volume; micromoles per minute per billion; umol/min/10*9; umol per min per 10*9",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per day",
      "csCode_": "U/d",
      "ciCode_": "U/D",
      "property_": "catalytic activity",
      "magnitude_": 116167760416.66667,
      "dim_": {
        "dimVec_": [
          0,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/d",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U/dy; enzyme units per day; enzyme units; enzyme activity; enzymatic activity per time; micromoles per minute per day; umol/min/day; umol per min per day",
      "source_": "LOINC",
      "loincProperty_": "CRat",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per deciliter",
      "csCode_": "U/dL",
      "ciCode_": "U/DL",
      "property_": "catalytic activity",
      "magnitude_": 100368945000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/dL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U per dL; enzyme units per deciliter; decilitre; micromoles per minute per deciliter; umol/min/dL; umol per min per dL",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per gram",
      "csCode_": "U/g",
      "ciCode_": "U/G",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/g",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U/gm; U per gm; enzyme units per gram; micromoles per minute per gram; umol/min/g; umol per min per g",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per hour",
      "csCode_": "U/h",
      "ciCode_": "U/HR",
      "property_": "catalytic activity",
      "magnitude_": 2788026250000,
      "dim_": {
        "dimVec_": [
          0,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/h",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U/hr; U per hr; enzyme units per hour; micromoles per minute per hour; umol/min/hr; umol per min per hr",
      "source_": "LOINC",
      "loincProperty_": "CRat",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per liter",
      "csCode_": "U/L",
      "ciCode_": "U/L",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "enzyme unit/liter; enzyme unit/litre; U per L; enzyme units per liter; enzyme unit per litre; micromoles per minute per liter; umol/min/L; umol per min per L",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per minute",
      "csCode_": "U/min",
      "ciCode_": "U/MIN",
      "property_": "catalytic activity",
      "magnitude_": 167281575000000,
      "dim_": {
        "dimVec_": [
          0,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/min",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "enzyme unit/minute; U per min; enzyme units; umol/min/min; micromoles per minute per minute; micromoles per min per min; umol",
      "source_": "LOINC",
      "loincProperty_": "CRat",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per milliliter",
      "csCode_": "U/mL",
      "ciCode_": "U/ML",
      "property_": "catalytic activity",
      "magnitude_": 1.00368945e+22,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U per mL; enzyme units per milliliter; millilitre; micromoles per minute per milliliter; umol/min/mL; umol per min per mL",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "enzyme unit per second",
      "csCode_": "U/s",
      "ciCode_": "U/S",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000,
      "dim_": {
        "dimVec_": [
          0,
          -2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "U/s",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "U/sec; U per second; enzyme units per second; micromoles per minute per second; umol/min/sec; umol per min per sec",
      "source_": "LOINC",
      "loincProperty_": "CRat",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micro international unit",
      "csCode_": "u[IU]",
      "ciCode_": "U[IU]",
      "property_": "arbitrary",
      "magnitude_": 0.000001,
      "dim_": null,
      "printSymbol_": "μi.U.",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "uIU; u IU; microinternational units",
      "source_": "LOINC",
      "loincProperty_": "Arb",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micro international unit per liter",
      "csCode_": "u[IU]/L",
      "ciCode_": "U[IU]/L",
      "property_": "arbitrary",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μi.U./L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "uIU/L; u IU/L; uIU per L; microinternational units per liter; litre; ",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micro international unit per milliliter",
      "csCode_": "u[IU]/mL",
      "ciCode_": "U[IU]/ML",
      "property_": "arbitrary",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μi.U./mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": true,
      "synonyms_": "uIU/mL; u IU/mL; uIU per mL; microinternational units per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "ACnc",
      "category_": "Clinical",
      "guidance_": "International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",
      "csUnitString_": "[iU]",
      "ciUnitString_": "[IU]",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "microequivalent",
      "csCode_": "ueq",
      "ciCode_": "UEQ",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": null,
      "printSymbol_": "μeq",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "microequivalents; 10^-6 equivalents; 10-6 equivalents",
      "source_": "LOINC",
      "loincProperty_": "Sub",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "microequivalent per liter",
      "csCode_": "ueq/L",
      "ciCode_": "UEQ/L",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μeq/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ueq per liter; litre; microequivalents",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "microequivalent per milliliter",
      "csCode_": "ueq/mL",
      "ciCode_": "UEQ/ML",
      "property_": "amount of substance",
      "magnitude_": 6.0221367000000003e+23,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μeq/mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ueq per milliliter; millilitre; microequivalents",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "mol",
      "ciUnitString_": "MOL",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram",
      "csCode_": "ug",
      "ciCode_": "UG",
      "property_": "mass",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mcg; micrograms; 10^-6 grams; 10-6 grams",
      "source_": "LOINC",
      "loincProperty_": "Mass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per 100 gram",
      "csCode_": "ug/(100.g)",
      "ciCode_": "UG/100.G",
      "property_": "mass",
      "magnitude_": 1e-8,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/100.g",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/100gm; ug/100 gm; mcg; ug per 100g; 100 gm; mcg per 100g; micrograms per 100 grams",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per 24 hour",
      "csCode_": "ug/(24.h)",
      "ciCode_": "UG/24.HR",
      "property_": "mass",
      "magnitude_": 1.1574074074074074e-11,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/24.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/24hrs; ug/24 hrs; mcg/24hrs; ug per 24hrs; mcg per 24hrs; 24 hrs; micrograms per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per 8 hour",
      "csCode_": "ug/(8.h)",
      "ciCode_": "UG/8.HR",
      "property_": "mass",
      "magnitude_": 3.472222222222222e-11,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/8.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/8hrs; ug/8 hrs; mcg/8hrs; ug per 8hrs; mcg per 8hrs; 8 hrs; micrograms per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per square foot (international)",
      "csCode_": "ug/[sft_i]",
      "ciCode_": "UG/[SFT_I]",
      "property_": "mass",
      "magnitude_": 0.000010763910416709721,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/sft; ug/ft2; ug/ft^2; ug/sq. ft; micrograms; sq. foot; foot squared",
      "source_": "LOINC",
      "loincProperty_": "ArMass",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per day",
      "csCode_": "ug/d",
      "ciCode_": "UG/D",
      "property_": "mass",
      "magnitude_": 1.1574074074074074e-11,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/d",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/dy; mcg/dy; ug per day; mcg; micrograms per day",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per deciliter",
      "csCode_": "ug/dL",
      "ciCode_": "UG/DL",
      "property_": "mass",
      "magnitude_": 0.009999999999999998,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/dL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug per dL; mcg/dl; mcg per dl; micrograms per deciliter; decilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per gram",
      "csCode_": "ug/g",
      "ciCode_": "UG/G",
      "property_": "mass",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/g",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug per gm; mcg/gm; mcg per g; micrograms per gram",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per hour",
      "csCode_": "ug/h",
      "ciCode_": "UG/HR",
      "property_": "mass",
      "magnitude_": 2.7777777777777777e-10,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/hr; mcg/hr; mcg per hr; ug per hr; ug per hour; micrograms",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per kilogram",
      "csCode_": "ug/kg",
      "ciCode_": "UG/KG",
      "property_": "mass",
      "magnitude_": 9.999999999999999e-10,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/kg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug per kg; mcg/kg; mcg per kg; micrograms per kilogram",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per kilogram per 8 hour",
      "csCode_": "ug/kg/(8.h)",
      "ciCode_": "UG/KG/8.HR",
      "property_": "mass",
      "magnitude_": 3.472222222222222e-14,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/kg/8.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/kg/8hrs; mcg/kg/8hrs; ug/kg/8 hrs; mcg/kg/8 hrs; ug per kg per 8hrs; 8 hrs; mcg per kg per 8hrs; micrograms per kilograms per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per kilogram per day",
      "csCode_": "ug/kg/d",
      "ciCode_": "UG/KG/D",
      "property_": "mass",
      "magnitude_": 1.1574074074074072e-14,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/kg/d",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/(kg.d); ug/kg/dy; mcg/kg/day; ug per kg per dy; 24 hours; 24hrs; mcg; kilograms; microgram per kilogram and day",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per kilogram per hour",
      "csCode_": "ug/kg/h",
      "ciCode_": "UG/KG/HR",
      "property_": "mass",
      "magnitude_": 2.7777777777777774e-13,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/kg/h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/(kg.h); ug/kg/hr; mcg/kg/hr; ug per kg per hr; mcg per kg per hr; kilograms",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per kilogram per minute",
      "csCode_": "ug/kg/min",
      "ciCode_": "UG/KG/MIN",
      "property_": "mass",
      "magnitude_": 1.6666666666666664e-11,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/kg/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/kg/min; ug/kg/min; mcg/kg/min; ug per kg per min; mcg; micrograms per kilograms per minute ",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per liter",
      "csCode_": "ug/L",
      "ciCode_": "UG/L",
      "property_": "mass",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/L",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "mcg/L; ug per L; mcg; micrograms per liter; litre ",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per liter per 24 hour",
      "csCode_": "ug/L/(24.h)",
      "ciCode_": "UG/L/24.HR",
      "property_": "mass",
      "magnitude_": 1.1574074074074074e-8,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/L/24.h",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/L/24hrs; ug/L/24 hrs; mcg/L/24hrs; ug per L per 24hrs; 24 hrs; day; dy mcg; micrograms per liters per 24 hours; litres",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose rate per patient body mass",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per square meter",
      "csCode_": "ug/m2",
      "ciCode_": "UG/M2",
      "property_": "mass",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          -2,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/m<sup>2</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/m^2; ug/sq. m; mcg/m2; mcg/m^2; mcg/sq. m; ug per m2; m^2; sq. meter; mcg; micrograms per square meter; meter squared; metre",
      "source_": "LOINC",
      "loincProperty_": "ArMass",
      "category_": "Clinical",
      "guidance_": "unit used to measure mass dose per patient body surface area",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per cubic meter",
      "csCode_": "ug/m3",
      "ciCode_": "UG/M3",
      "property_": "mass",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/m<sup>3</sup>",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug/m^3; ug/cu. m; mcg/m3; mcg/m^3; mcg/cu. m; ug per m3; ug per m^3; ug per cu. m; mcg; micrograms per cubic meter; meter cubed; metre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per milligram",
      "csCode_": "ug/mg",
      "ciCode_": "UG/MG",
      "property_": "mass",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/mg",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug per mg; mcg/mg; mcg per mg; micromilligrams per milligram",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per minute",
      "csCode_": "ug/min",
      "ciCode_": "UG/MIN",
      "property_": "mass",
      "magnitude_": 1.6666666666666667e-8,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/min",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug per min; mcg/min; mcg per min; microminutes per minute",
      "source_": "LOINC",
      "loincProperty_": "MRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per milliliter",
      "csCode_": "ug/mL",
      "ciCode_": "UG/ML",
      "property_": "mass",
      "magnitude_": 1,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/mL",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug per mL; mcg/mL; mcg per mL; micrograms per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "MCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per millimole",
      "csCode_": "ug/mmol",
      "ciCode_": "UG/MMOL",
      "property_": "mass",
      "magnitude_": 1.660540186674939e-27,
      "dim_": {
        "dimVec_": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/mmol",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug per mmol; mcg/mmol; mcg per mmol; micrograms per millimole",
      "source_": "LOINC",
      "loincProperty_": "Ratio",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microgram per nanogram",
      "csCode_": "ug/ng",
      "ciCode_": "UG/NG",
      "property_": "mass",
      "magnitude_": 999.9999999999999,
      "dim_": {
        "dimVec_": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μg/ng",
      "class_": null,
      "isMetric_": false,
      "variable_": "M",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "ug per ng; mcg/ng; mcg per ng; micrograms per nanogram",
      "source_": "LOINC",
      "loincProperty_": "MCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "microkatal",
      "csCode_": "ukat",
      "ciCode_": "UKAT",
      "property_": "catalytic activity",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μkat",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "microkatals; ukats",
      "source_": "LOINC",
      "loincProperty_": "CAct",
      "category_": "Clinical",
      "guidance_": "kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.",
      "csUnitString_": "mol/s",
      "ciUnitString_": "MOL/S",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "microliter",
      "csCode_": "uL",
      "ciCode_": "UL",
      "property_": "volume",
      "magnitude_": 1e-9,
      "dim_": {
        "dimVec_": [
          3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μL",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "microliters; microlitres; mcl",
      "source_": "LOINC",
      "loincProperty_": "Vol",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "microliter per 2 hour",
      "csCode_": "uL/(2.h)",
      "ciCode_": "UL/2.HR",
      "property_": "volume",
      "magnitude_": 1.388888888888889e-13,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μL/2.h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "uL/2hrs; uL/2 hrs; mcg/2hr; mcg per 2hr; uL per 2hr; uL per 2 hrs; microliters per 2 hours; microlitres ",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "microliter per hour",
      "csCode_": "uL/h",
      "ciCode_": "UL/HR",
      "property_": "volume",
      "magnitude_": 2.777777777777778e-13,
      "dim_": {
        "dimVec_": [
          3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μL/h",
      "class_": "iso1000",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "uL/hr; mcg/hr; mcg per hr; uL per hr; microliters per hour; microlitres",
      "source_": "LOINC",
      "loincProperty_": "VRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "l",
      "ciUnitString_": null,
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "micrometer",
      "csCode_": "um",
      "ciCode_": "UM",
      "property_": "length",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μm",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "micrometers; micrometres; μm; microns",
      "source_": "LOINC",
      "loincProperty_": "Len",
      "category_": "Clinical",
      "guidance_": "Unit of length that is usually used in tests related to the eye",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microns per second",
      "csCode_": "um/s",
      "ciCode_": "UM/S",
      "property_": "length",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          1,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μm/s",
      "class_": null,
      "isMetric_": false,
      "variable_": "L",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "um/sec; micron/second; microns/second; um per sec; micrometers per second; micrometres",
      "source_": "LOINC",
      "loincProperty_": "Vel",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole",
      "csCode_": "umol",
      "ciCode_": "UMOL",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": null,
      "printSymbol_": "μmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "micromoles; umols",
      "source_": "LOINC",
      "loincProperty_": "Sub",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per 2 hour",
      "csCode_": "umol/(2.h)",
      "ciCode_": "UMOL/2.HR",
      "property_": "amount of substance",
      "magnitude_": 83640787500000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/2.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol/2hrs; umol/2 hrs; umol per 2 hrs; 2hrs; micromoles per 2 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per 24 hour",
      "csCode_": "umol/(24.h)",
      "ciCode_": "UMOL/24.HR",
      "property_": "amount of substance",
      "magnitude_": 6970065625000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/24.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol/24hrs; umol/24 hrs; umol per 24 hrs; per 24hrs; micromoles per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per 8 hour",
      "csCode_": "umol/(8.h)",
      "ciCode_": "UMOL/8.HR",
      "property_": "amount of substance",
      "magnitude_": 20910196875000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/8.h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol/8hr; umol/8 hr; umol per 8 hr; umol per 8hr; umols per 8hr; umol per 8 hours; micromoles per 8 hours; shift",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per day",
      "csCode_": "umol/d",
      "ciCode_": "UMOL/D",
      "property_": "amount of substance",
      "magnitude_": 6970065625000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/d",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol/day; umol per day; umols per day; umol per days; micromoles per days; umol/24hr; umol/24 hr; umol per 24 hr; umol per 24hr; umols per 24hr; umol per 24 hours; micromoles per 24 hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per deciliter",
      "csCode_": "umol/dL",
      "ciCode_": "UMOL/DL",
      "property_": "amount of substance",
      "magnitude_": 6.0221367e+21,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/dL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "micromole/deciliter; micromole/decilitre; umol per dL; micromoles per deciliters; micromole per decilitres",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per gram",
      "csCode_": "umol/g",
      "ciCode_": "UMOL/G",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/g",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "micromole/gram; umol per g; micromoles per gram",
      "source_": "LOINC",
      "loincProperty_": "SCnt; Ratio",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per hour",
      "csCode_": "umol/h",
      "ciCode_": "UMOL/HR",
      "property_": "amount of substance",
      "magnitude_": 167281575000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol/hr; umol per hr; umol per hour; micromoles per hours",
      "source_": "LOINC",
      "loincProperty_": "SRat",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per kilogram",
      "csCode_": "umol/kg",
      "ciCode_": "UMOL/KG",
      "property_": "amount of substance",
      "magnitude_": 602213670000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/kg",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol per kg; micromoles per kilogram",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per liter",
      "csCode_": "umol/L",
      "ciCode_": "UMOL/L",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "micromole/liter; micromole/litre; umol per liter; micromoles per liter; litre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per liter per hour",
      "csCode_": "umol/L/h",
      "ciCode_": "UMOL/L/HR",
      "property_": "amount of substance",
      "magnitude_": 167281575000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/L/h",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol/liter/hr; umol/litre/hr; umol per L per hr; umol per liter per hour; micromoles per liters per hour; litre",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min; umol/L/h is a derived unit of enzyme units",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per milligram",
      "csCode_": "umol/mg",
      "ciCode_": "UMOL/MG",
      "property_": "amount of substance",
      "magnitude_": 602213670000000000000,
      "dim_": {
        "dimVec_": [
          0,
          0,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/mg",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "micromole/milligram; umol per mg; micromoles per milligram",
      "source_": "LOINC",
      "loincProperty_": "SCnt",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per minute",
      "csCode_": "umol/min",
      "ciCode_": "UMOL/MIN",
      "property_": "amount of substance",
      "magnitude_": 10036894500000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/min",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "micromole/minute; umol per min; micromoles per minute; enzyme units",
      "source_": "LOINC",
      "loincProperty_": "CAct",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per minute per gram",
      "csCode_": "umol/min/g",
      "ciCode_": "UMOL/MIN/G",
      "property_": "amount of substance",
      "magnitude_": 10036894500000000,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/min/g",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol/min/gm; umol per min per gm; micromoles per minutes per gram; U/g; enzyme units",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min. umol/min/g = U/g",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per minute per liter",
      "csCode_": "umol/min/L",
      "ciCode_": "UMOL/MIN/L",
      "property_": "amount of substance",
      "magnitude_": 10036894500000000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/min/L",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol/min/liter; umol/minute/liter; micromoles per minutes per liter; litre; enzyme units; U/L",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min. umol/min/L = U/L",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per milliliter",
      "csCode_": "umol/mL",
      "ciCode_": "UMOL/ML",
      "property_": "amount of substance",
      "magnitude_": 6.0221367000000003e+23,
      "dim_": {
        "dimVec_": [
          -3,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/mL",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol per mL; micromoles per milliliter; millilitre",
      "source_": "LOINC",
      "loincProperty_": "SCnc",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per milliliter per minute",
      "csCode_": "umol/mL/min",
      "ciCode_": "UMOL/ML/MIN",
      "property_": "amount of substance",
      "magnitude_": 1.00368945e+22,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μmol/mL/min",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol per mL per min; micromoles per milliliters per minute; millilitres",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "unit for the enzyme unit U = umol/min. umol/mL/min = U/mL",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per millimole",
      "csCode_": "umol/mmol",
      "ciCode_": "UMOL/MMOL",
      "property_": "amount of substance",
      "magnitude_": 0.001,
      "dim_": null,
      "printSymbol_": "μmol/mmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol per mmol; micromoles per millimole",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per mole",
      "csCode_": "umol/mol",
      "ciCode_": "UMOL/MOL",
      "property_": "amount of substance",
      "magnitude_": 0.000001,
      "dim_": null,
      "printSymbol_": "μmol/mol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol per mol; micromoles per mole",
      "source_": "LOINC",
      "loincProperty_": "SRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micromole per micromole",
      "csCode_": "umol/umol",
      "ciCode_": "UMOL/UMOL",
      "property_": "amount of substance",
      "magnitude_": 1,
      "dim_": null,
      "printSymbol_": "μmol/μmol",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "umol per umol; micromoles per micromole",
      "source_": "LOINC",
      "loincProperty_": "Srto; SFr; EntSRto",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": "10*23",
      "ciUnitString_": "10*23",
      "baseFactorStr_": "6.0221367",
      "baseFactor_": "6.0221367",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "microOhm",
      "csCode_": "uOhm",
      "ciCode_": "UOHM",
      "property_": "electric resistance",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          2,
          -1,
          1,
          0,
          0,
          -2,
          0
        ]
      },
      "printSymbol_": "μΩ",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "microOhms; µΩ",
      "source_": "LOINC",
      "loincProperty_": "",
      "category_": "Clinical",
      "guidance_": "unit of electric resistance",
      "csUnitString_": "V/A",
      "ciUnitString_": "V/A",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": true,
      "name_": "microsecond",
      "csCode_": "us",
      "ciCode_": "US",
      "property_": "time",
      "magnitude_": 0.000001,
      "dim_": {
        "dimVec_": [
          0,
          1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μs",
      "class_": null,
      "isMetric_": false,
      "variable_": "T",
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "microseconds",
      "source_": "LOINC",
      "loincProperty_": "Time",
      "category_": "Clinical",
      "guidance_": "",
      "csUnitString_": null,
      "ciUnitString_": null,
      "baseFactorStr_": null,
      "baseFactor_": null,
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micro enzyme unit per gram",
      "csCode_": "uU/g",
      "ciCode_": "UU/G",
      "property_": "catalytic activity",
      "magnitude_": 10036894500,
      "dim_": {
        "dimVec_": [
          0,
          -1,
          -1,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μU/g",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "uU per gm; micro enzyme units per gram; micro enzymatic activity per mass; enzyme activity",
      "source_": "LOINC",
      "loincProperty_": "CCnt",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 uU = 1pmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micro enzyme unit per liter",
      "csCode_": "uU/L",
      "ciCode_": "UU/L",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μU/L",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "uU per L; micro enzyme units per liter; litre; enzymatic activity per volume; enzyme activity ",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 uU = 1pmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "micro enzyme unit per milliliter",
      "csCode_": "uU/mL",
      "ciCode_": "UU/ML",
      "property_": "catalytic activity",
      "magnitude_": 10036894500000000,
      "dim_": {
        "dimVec_": [
          -3,
          -1,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "printSymbol_": "μU/mL",
      "class_": "chemical",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "uU per mL; micro enzyme units per milliliter; millilitre; enzymatic activity per volume; enzyme activity",
      "source_": "LOINC",
      "loincProperty_": "CCnc",
      "category_": "Clinical",
      "guidance_": "1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 uU = 1pmol/min",
      "csUnitString_": "umol/min",
      "ciUnitString_": "UMOL/MIN",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    },
    {
      "isBase_": false,
      "name_": "microvolt",
      "csCode_": "uV",
      "ciCode_": "UV",
      "property_": "electric potential",
      "magnitude_": 0.001,
      "dim_": {
        "dimVec_": [
          2,
          -2,
          1,
          0,
          0,
          -1,
          0
        ]
      },
      "printSymbol_": "μV",
      "class_": "si",
      "isMetric_": true,
      "variable_": null,
      "cnv_": null,
      "cnvPfx_": 1,
      "isSpecial_": false,
      "isArbitrary_": false,
      "synonyms_": "microvolts",
      "source_": "LOINC",
      "loincProperty_": "Elpot",
      "category_": "Clinical",
      "guidance_": "unit of electric potential (voltage)",
      "csUnitString_": "J/C",
      "ciUnitString_": "J/C",
      "baseFactorStr_": "1",
      "baseFactor_": "1",
      "defError_": false
    }
  ]
}

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
'use strict';
var numberIsNan = require('number-is-nan');

module.exports = Number.isFinite || function (val) {
	return !(typeof val !== 'number' || numberIsNan(val) || val === Infinity || val === -Infinity);
};

},{"number-is-nan":5}],4:[function(require,module,exports){
// https://github.com/paulmillr/es6-shim
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
var isFinite = require("is-finite");
module.exports = Number.isInteger || function(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};

},{"is-finite":3}],5:[function(require,module,exports){
'use strict';
module.exports = Number.isNaN || function (x) {
	return x !== x;
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* 
 * This defines the namespace for the UCUM classes and provides
 * a place for the definition of global variables and constants.
 *
 * The javascript for this UCUM implementation uses syntax as
 * defined by the ECMAScript 6 standard
 */

var Ucum = exports.Ucum = {

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
  decDigits_: 2,

  /**
   * The string used to separate a unit code and unit name when they
   * are displayed together
   */
  codeSep_: ': ',

  /**
   * Default opening string used to emphasize portions of error messages.
   * Used when NOT displaying messages on a web site, i.e., for output
   * from the library methods or to a file.
   */
  openEmph_: ' ->',

  /**
   * Default closing string used to emphasize portions of error messages.
   * Used when NOT displaying messages on a web site, i.e., for output
   * from the library methods or to a file.
   */
  closeEmph_: '<- ',

  /**
   * Opening HTML used to emphasize portions of error messages.  Used when
   * displaying messages on a web site; should be blank when output is
   * to a file.
   */
  openEmphHTML_: '<span class="emphSpan">',

  /**
   * Closing HTML used to emphasize portions of error messages.  Used when
   * displaying messages on a web site; should be blank when output is
   * to a file.
   */
  closeEmphHTML_: '</span>',

  /**
   * Message that is displayed when annotations are included in a unit
   * string, to let the user know how they are interpreted.
   */
  bracesMsg_: 'Annotations (text in curley braces {}) have no influence ' + 'on the processing of a unit string.',

  /**
   * Hash that matches unit column names to names used in the csv file
   * that is submitted to the data updater.
   */
  csvCols_: {
    'case-sensitive code': 'csCode_',
    'LOINC property': 'loincProperty_',
    'name (display)': 'name_',
    'synonyms': 'synonyms_',
    'source': 'source_',
    'category': 'category_',
    'Guidance': 'guidance_'
  },

  /**
   * Name of the column in the csv file that serves as the key
   */
  inputKey_: 'case-sensitive code'

  /// ^[0-9]*$
};


},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements an object containing the vector of exponents for
 * a unit and its operations for addition, subtraction, and multiplication
 * with a scalar.
 *
 * This object should exist for each unit that can be expressed as a
 * vector of numbers.   This excludes arbitrary units, e.g., (10*23), and
 * units that are not numbers but are an expression based solely on numbers,
 * e.g., mol (mole) which is based on 10*23.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 */
var UC = require('./config.js');
var isInteger = require("is-integer");

var Dimension = exports.Dimension = function () {

  /**
   * Constructor.
   *
   * @param dimSetting an optional parameter that may be:
   *  null, which means that the dimVec_ attribute for this object will be null; or
   *  an array, which must be the length defined by Ucum.dimLen_, and
   *    whose contents will be copied to this new object's vector; or
   *  an integer, which must be between 0 and 1 less than the vector length
   *    defined by Ucum.dimLen_.  This new object's vector will be
   *    initialized to zero for all elements except the one whose index
   *    matches the number passed in.  That element will be set to one.
    * @throws an error if the dimSetting parameter does not meet the types
   *  listed above.
   *  An error will also be thrown if Ucum.dimLen_ has not been set yet,
   *  i.e., is still zero.   Currently that won't happen, because the
   *  value is set in the config.js file.  But further down the road
   *  the setting will come from a definitions input file, so we check
   *  here anyway.
   *
   */
  function Dimension(dimSetting) {
    _classCallCheck(this, Dimension);

    if (UC.Ucum.dimLen_ === 0) {
      throw new Error('Dimension.setDimensionLen must be called before ' + 'Dimension constructor');
    }
    if (dimSetting === undefined || dimSetting === null) {
      this.dimVec_ = null;
    } else if (dimSetting instanceof Array) {
      if (dimSetting.length !== UC.Ucum.dimLen_) {
        throw new Error('Parameter error, incorrect length of vector passed to ' + ('Dimension constructor, vector = ' + JSON.stringify(dimSetting)));
      }
      this.dimVec_ = [];
      for (var d = 0; d < UC.Ucum.dimLen_; d++) {
        this.dimVec_[d] = dimSetting[d];
      }
    }

    // In es6 this should be Number.isInteger(dimSetting).  But Babel
    // doesn't transpile that correctly, so we need to use the isInteger
    // module.  :0
    else if (isInteger(dimSetting)) {
        if (dimSetting < 0 || dimSetting >= UC.Ucum.dimLen_) {
          throw new Error('Parameter error, invalid element number specified for ' + 'Dimension constructor');
        }
        this.dimVec_ = new Array(UC.Ucum.dimLen_);
        this.assignZero();
        this.dimVec_[dimSetting] = 1;
      }
  } // end constructor


  /**
   * Sets the element at the specified position to 1.  If the dimension vector
   * is null when this is called a zero-filled vector is created and then the
   * indicated position is set to 1.
   *
   * @param indexPos the index of the element to be set
   * @throws an exception if the specified position is invalid, i.e., not a
   *   number or is less than 0 or greater than Ucum.dimLen_
   **/


  _createClass(Dimension, [{
    key: 'setElementAt',
    value: function setElementAt(indexPos) {

      if (!Number.isInteger(indexPos) || indexPos < 0 || indexPos >= UC.Ucum.dimLen_) {
        throw new Error('Dimension.setElementAt called with an invalid index ' + ('position (' + indexPos + ')'));
      }

      if (!this.dimVec_) {
        this.assignZero();
      }
      this.dimVec_[indexPos] = 1;
    }

    /**
     * Gets the value of the element at the specified position
     *
     * @param indexPos the index of the element whose value is to be returned
     * @return the value of the element at indexPos, or null if the dimension
     *  vector is null
     * @throws an exception if the specified position is invalid, i.e., not a
     *   number or is less than 0 or greater than Ucum.dimLen_
     **/

  }, {
    key: 'getElementAt',
    value: function getElementAt(indexPos) {
      if (!Number.isInteger(indexPos) || indexPos < 0 || indexPos >= UC.Ucum.dimLen_) {
        throw new Error('Dimension.getElementAt called with an invalid index ' + ('position (' + indexPos + ')'));
      }
      var ret = null;
      if (this.dimVec_) ret = this.dimVec_[indexPos];
      return ret;
    }

    /**
     * This returns the value of the property named by the parameter
     * passed in.  Although we currently only have one property, dimVec_,
     * that this will get, it's possible that we'll have additional
     * properties.   If we don't this could just be replaced by a
     * getVector function.
     *
     * @param propertyName name of the property to be returned, with
     *        or without the trailing underscore.
     * @return the requested property, if found for this Dimension
     * @throws an error if the property is not found for this Dimension
     */

  }, {
    key: 'getProperty',
    value: function getProperty(propertyName) {
      var uProp = !propertyName.endsWith('_') ? propertyName + '_' : propertyName;
      return this[uProp];
    } // end getProperty


    /**
     * Return a string that represents the dimension vector.  Returns null if
     * the dimension vector is null.
     *
     * @return the string that represents the dimension vector.  The
     *         values are enclosed in square brackets, each separated
     *         by a comma and a space
     **/

  }, {
    key: 'toString',
    value: function toString() {
      var ret = null;
      if (this.dimVec_) ret = '[' + this.dimVec_.join(', ') + ']';
      return ret;
    }

    /**
     * Adds the vector of the dimension object passed in to this
     * dimension object's vector.  This object's vector is changed.
     * If either dimension vector is null, no changes are made to this object.
     *
     *
     * @param dim2 the dimension whose vector is to be added to this one
     * @return this object
     * @throws an exception if dim2 is not a Dimension object
     **/

  }, {
    key: 'add',
    value: function add(dim2) {
      if (!dim2 instanceof Dimension) {
        throw new Error('Dimension.add called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a Dimension object'));
      }
      if (this.dimVec_ && dim2.dimVec_) {
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] += dim2.dimVec_[i];
        }
      }
      return this;
    }

    /**
     * Subtracts the vector of the dimension object passed in from this
     * dimension object's vector.  This object's vector is changed.
     * If either dimension vector is null, no changes are made to this object.
     *
     * @param dim2 the dimension whose vector is to be subtraced from this one
     * @return this object
     * @throws an exception if dim2 is not a Dimension object
     **/

  }, {
    key: 'sub',
    value: function sub(dim2) {
      if (!dim2 instanceof Dimension) {
        throw new Error('Dimension.sub called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a Dimension object'));
      }
      if (this.dimVec_ && dim2.dimVec_) {
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] -= dim2.dimVec_[i];
        }
      }
      return this;
    }

    /**
     * Inverts this dimension object's vector (by multiplying each element
     * by negative 1).  This object's vector is changed - unless it is null,
     * in which case it stays that way.
     *
     * @return this object
     **/

  }, {
    key: 'minus',
    value: function minus() {
      if (this.dimVec_) {
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] = -this.dimVec_[i];
        }
      }
      return this;
    }

    /**
     * Multiplies this dimension object's vector with a scalar.  This is used
     * when a unit is raised to a power.  This object's vector is changed unless
     * the vector is null, in which case it stays that way.
     *
     * @param s the scalar to use
     * @return this object
     * @throws an exception if s is not a number
     */

  }, {
    key: 'mul',
    value: function mul(s) {
      if (!isInteger(s)) {
        throw new Error('Dimension.sub called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a number'));
      }
      if (this.dimVec_) {
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] *= s;
        }
      }
      return this;
    }

    /**
     * Tests for equality of this dimension object's vector and that of
     * the dimension object passed in.  If the dimension vector for one of
     * the objects is null, the dimension vector for the other object must
     * also be null for the two to be equal.  (I know - duh.  still)
     *
     * @param dim2 the dimension object whose vector is to be compared to this one
     * @return true if the two vectors are equal; false otherwise.
     * @throws an exception if dim2 is not a Dimension object
     */

  }, {
    key: 'equals',
    value: function equals(dim2) {
      if (!dim2 instanceof Dimension) {
        throw new Error('Dimension.equals called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a Dimension object'));
      }
      var isEqual = true;
      var dimVec2 = dim2.dimVec_;
      if (this.dimVec_ && dimVec2) {
        for (var i = 0; isEqual && i < UC.Ucum.dimLen_; i++) {
          isEqual = this.dimVec_[i] === dimVec2[i];
        }
      } else {
        isEqual = this.dimVec_ === null && dimVec2 === null;
      }
      return isEqual;
    }

    /**
     * Assigns the contents of the vector belonging to the dimension object
     * passed in to this dimension's vector.  If this dimension vector is null
     * and the other is not, this one will get the contents of the other.  If
     * this dimension vector is not null but the one passed in is null, this
     * one will be set to null.
     *
     * @param dim2 the dimension object with the vector whose contents are
     *  to be assigned to this dimension's vector
     * @return this object (not sure why)
     * @throws an exception if dim2 is not a Dimension object
     */

  }, {
    key: 'assignDim',
    value: function assignDim(dim2) {

      if (!dim2 instanceof Dimension) {
        throw new Error('Dimension.assignDim called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a Dimension object'));
      }
      if (dim2.dimVec_ === null) this.dimVec_ = null;else {
        if (this.dimVec_ === null) {
          this.dimVec_ = [];
        }
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] = dim2.dimVec_[i];
        }
      }
      return this;
    }

    /**
     * Sets all elements of this dimension object's vector to zero.
     * If this object's vector is null, it is created as a zero-filled vector.
     *
     * @return this object (not sure why)
     */

  }, {
    key: 'assignZero',
    value: function assignZero() {
      if (this.dimVec_ === null) this.dimVec_ = [];

      for (var i = 0; i < UC.Ucum.dimLen_; i++) {
        this.dimVec_[i] = 0;
      }
      return this;
    }

    /**
     * Tests for a dimension vector set to all zeroes.
     *
     * @return true if exponents (elements) of this dimension's vector are all
     * zero; false otherwise (including if the current vector is null).
     *
     */

  }, {
    key: 'isZero',
    value: function isZero() {
      var allZero = this.dimVec_ !== null;
      if (this.dimVec_) {
        for (var i = 0; allZero && i < UC.Ucum.dimLen_; i++) {
          allZero = this.dimVec_[i] === 0;
        }
      }
      return allZero;
    }

    /**
     * Tests for a Dimension object with no dimension vector (dimVec_ is null).
     *
     * @return true the dimension vector is null; false if it is not
     *
     */

  }, {
    key: 'isNull',
    value: function isNull() {
      return this.dimVec_ === null;
    }

    /**
     * Creates and returns a clone of this Dimension object
     *
     * @return the clone
     */

  }, {
    key: 'clone',
    value: function clone() {
      var that = new Dimension();
      that.assignDim(this);
      return that;
    }
  }]);

  return Dimension;
}(); // end Dimension class


},{"./config.js":6,"is-integer":4}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Prefix objects are defined in this file.
 */

/**
 * This class implements the prefix object.  Prefixes are used as multipliers
 * for units, e.g., km for kilometers
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
var Ucum = require('./config.js');

var Prefix = exports.Prefix = function () {

  /**
   * Creates a single prefix object.
   *
   * @param attrs a hash of the values to use in creating the prefix object.
   *  They should be:
   *   code_ - which is the case-sensitive code used for the prefix,
   *    e.g., k for kilo
   *   ciCode_ - which is the case-insensitive code used for the prefix,
   *    e.g., K for kilo
   *   name_ - which is the name of the prefix, e.g., kilo
   *   printSymbol_ - which is the print symbol for the prefix, e.g., k for kilo
   *   value_ - which is teh value to use in multiplying the magnitude of
   *    a unit, e.g., for a prefix of c the value will be .01.
   *   exp_ - which is the exponent used to get the value. For decimal based
   *    prefixes the base is 10 and the exp_ is applied to 10, e.g., for a
   *    prefix of c, the exponent will be -2.  For prefixes that are not
   *    decimal based, this will be null (but must not be undefined).
   *
   * @throws an error if the not all required parameters are provided
   */
  function Prefix(attrs) {
    _classCallCheck(this, Prefix);

    if (attrs['code_'] === undefined || attrs['code_'] === null || attrs['name_'] === undefined || attrs['name_'] === null || attrs['value_'] === undefined || attrs['value_'] === null || attrs['exp_'] === undefined) {
      throw new Error('Prefix constructor called missing one or more parameters.  ' + 'Prefix codes (cs or ci), name, value and exponent must all be specified ' + 'and all but the exponent must not be null.');
    }

    /**
     * The prefix code, e.g., k for kilo.  This should be the case-sensitive
     * code.  Since there's no way to check to see if it's the case-sensitive
     * one as opposed to the case-insensitive one (because although
     * case-insensitive codes all seem to be uppercase, some case-sensitive
     * codes are also all uppercase), we'll just have to believe that the
     * right one was passed in.
     */
    this.code_ = attrs['code_'];

    /**
     * The case-insensitive code, e.g., K for kilo
     */
    this.ciCode_ = attrs['ciCode_'];

    /**
     * The prefix name, e.g., kilo
     */
    this.name_ = attrs['name_'];

    /**
     * The printSymbol for the prefix, e.g., k for kilo
     */
    this.printSymbol_ = attrs['printSymbol_'];

    /**
     * The value to use in multiplying the magnitude of a unit
     */
    if (typeof attrs['value_'] === 'string') this.value_ = parseFloat(attrs['value_']);else this.value_ = attrs['value_'];

    /**
     * The exponent used to create the value from 10.  For prefixes that are
     * not based on 10, this will be null.
     */
    this.exp_ = attrs['exp_'];
  } // end constructor


  /**
   * Returns the value for the current prefix object
   * @return the value for the prefix object with the specified code
   * */


  _createClass(Prefix, [{
    key: 'getValue',
    value: function getValue() {
      return this.value_;
    }

    /**
     * Returns the prefix code for the current prefix object
     * @return the code for the current prefix object
     */

  }, {
    key: 'getCode',
    value: function getCode() {
      return this.code_;
    }

    /**
     * Returns the case-insensitive code for the current prefix object
     * @return the case_insensitive code for the current prefix object
     */

  }, {
    key: 'getCiCode',
    value: function getCiCode() {
      return this.ciCode_;
    }

    /**
     * Returns the prefix name for the current prefix object
     * @return the name for the current prefix object
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name_;
    }

    /**
     * Returns the print symbol for the current prefix object
     * @return the print symbol for the current prefix object
     */

  }, {
    key: 'getPrintSymbol',
    value: function getPrintSymbol() {
      return this.printSymbol_;
    }

    /**
     * Returns the exponent for the current prefix object
     * @return the exponent for the current prefix object
     */

  }, {
    key: 'getExp',
    value: function getExp() {
      return this.exp_;
    }

    /**
     * Provides way to tell if one prefix equals another.  The second prefix
     * must match all attribute values.
     *
     * @param prefix2 prefix object to check for a match
     * @return true for a match; false if one or more attributes don't match
     */

  }, {
    key: 'equals',
    value: function equals(prefix2) {
      return this.code_ === prefix2.code_ && this.ciCode_ === prefix2.ciCode_ && this.name_ === prefix2.name_ && this.printSymbol_ === prefix2.printSymbol_ && this.value_ === prefix2.value_ && this.exp_ === prefix2.exp_;
    }
  }]);

  return Prefix;
}(); // end Prefix class


},{"./config.js":6}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The tables of defined prefixes is defined in this file.
 */

/**
 * This class implements the table of multiplier prefixes.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
var PrefixTables = exports.PrefixTables = function () {

  /**
   * Constructor.  This creates the empty PrefixTable hashes once.
   * There is one hash whose key is the prefix code and one whose
   * key is the prefix value.
   *
   * Implementation of this as a singleton is based on the UnitTables
   * implementation.  See that class for details.
   */
  function PrefixTables() {
    _classCallCheck(this, PrefixTables);

    this.byCode_ = {};
    this.byValue_ = {};

    // Make this a singleton.  See UnitTables constructor for details.

    var holdThis = PrefixTables.prototype;
    PrefixTables = function PrefixTables() {
      throw new Error('PrefixTables is a Singleton. ' + 'Use PrefixTables.getInstance() instead.');
    };
    if (exports) exports.PrefixTables = PrefixTables;
    PrefixTables.prototype = holdThis;
    var self = this;
    PrefixTables.getInstance = function () {
      return self;
    };
  }

  /**
   * Provides the number of prefix objects in each table
   * @returns count of the number of prefix objects in each table
   */


  _createClass(PrefixTables, [{
    key: 'prefixCount',
    value: function prefixCount() {
      return Object.keys(this.byCode_).length;
    }

    /**
     * This is used to get all prefix objects by value.  Currently it is used
     * to create a csv file with all prefixes and units.
     * @returns csv string containing all prefix objects, ordered by value.
     */

  }, {
    key: 'allPrefixesByValue',
    value: function allPrefixesByValue() {
      var prefixBuff = '';
      var pList = Object.keys(this.byValue_);
      //pList.sort() ;
      var pLen = pList.length;
      for (var p = 0; p < pLen; p++) {
        var pfx = this.getPrefixByValue(pList[p]);
        prefixBuff += pfx.code_ + ',' + pfx.name_ + ',,' + pfx.value_ + '\r\n';
      }
      return prefixBuff;
    }

    /**
     * This is used to get all prefix objects.  Currently it is used
     * to get the objects to write to the json ucum definitions file
     * that is used to provide prefix and unit definition objects for
     * conversions and validations.
     *
     * @returns an array containing all prefix objects, ordered by code.
     */

  }, {
    key: 'allPrefixesByCode',
    value: function allPrefixesByCode() {
      var prefixList = [];
      var pList = Object.keys(this.byCode_);
      pList.sort();
      var pLen = pList.length;
      for (var p = 0; p < pLen; p++) {
        prefixList.push(this.getPrefixByCode(pList[p]));
      }
      return prefixList;
    }

    /**
     * Adds a prefix object to the tables
     *
     * @param prefixObj the object to be added to the tables
     */

  }, {
    key: 'add',
    value: function add(prefixObj) {
      this.byCode_[prefixObj.getCode()] = prefixObj;
      this.byValue_[prefixObj.getValue()] = prefixObj;
    }

    /**
     * Tests whether a prefix object is found for a specified code.  This
     * is used to determine whether or not a prefix object has been created
     * for the code.
     *
     * @param code the code to be used to find the prefix object
     * @return boolean indicating whether or not a prefix object was found
     *  for the specified code
     */

  }, {
    key: 'isDefined',
    value: function isDefined(code) {
      return this.byCode_[code] !== null && this.byCode_[code] !== undefined;
    }

    /**
     * Obtains a prefix object for a specified code.
     *
     * @param code the code to be used to find the prefix object
     * @return the prefix object found, or null if nothing was found
     */

  }, {
    key: 'getPrefixByCode',
    value: function getPrefixByCode(code) {
      return this.byCode_[code];
    }

    /**
     * Obtains a prefix object for a specified value.
     *
     * @param value the value to be used to find the prefix object
     * @return the prefix object found, or null if nothing was found
     */

  }, {
    key: 'getPrefixByValue',
    value: function getPrefixByValue(value) {
      return this.byValue_[value];
    }
  }]);

  return PrefixTables;
}(); // end PrefixTables class


/**
 *  This function exists ONLY until the original PrefixTables constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton PrefixTable object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton PrefixTables object.
 */


PrefixTables.getInstance = function () {
  return new PrefixTables();
};

// Perform the first request for the tables object, to get the
// getInstance method set.
PrefixTables.getInstance();


},{}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * This class manages the special functions used by some units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var UcumFunctions = function () {

  /**
   * Constructor
   *
   * Creates the singleton object that contains the list of functions used
   * to convert special units.
   */
  function UcumFunctions() {
    _classCallCheck(this, UcumFunctions);

    // Create the hash containing the function pairs
    this.funcs = {};

    // Celsius - convert to Celsius from kelvin and from Celsius to kelvin
    // where kelvin is the base unit for temperature
    this.funcs['cel'] = { cnvTo: function cnvTo(x) {
        return x - 273.15;
      },
      cnvFrom: function cnvFrom(x) {
        return x + 273.15;
      } };

    // Fahrenheit - convert to Fahrenheit from kelvin and from Fahrenheit to
    // kelvin - which is the base unit for temperature
    this.funcs['degf'] = { cnvTo: function cnvTo(x) {
        return x - 459.67;
      },
      cnvFrom: function cnvFrom(x) {
        return x + 459.67;
      } };

    // Reaumur - convert between Reaumur and Kelvin.   Because of the way the
    // calling code in the Units class is set up (in the convertFrom method),
    // what is given here as the convertTo function is actually the convert
    // from method and vice versa.
    //this.funcs['degre'] = {cnvTo   : function(x){return x + 273.15;},
    //                    cnvFrom : function(x){return x - 273.15;}};
    this.funcs['degre'] = { cnvTo: function cnvTo(x) {
        return x - 273.15;
      },
      cnvFrom: function cnvFrom(x) {
        return x + 273.15;
      } };

    // pH - convert to pH from moles per liter and from moles per liter to pH
    // where a mole is an amount of a substance (a count of particles)
    this.funcs['ph'] = { cnvTo: function cnvTo(x) {
        return -Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, -x);
      } };

    // ln - natural logarithm (base e 2.71828) - apply (cnvTo) and invert (cnvFrom)
    // and 2ln - two times the natural logarithm
    this.funcs['ln'] = { cnvTo: function cnvTo(x) {
        return Math.log(x);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.exp(x);
      } };
    this.funcs['2ln'] = { cnvTo: function cnvTo(x) {
        return 2 * Math.log(x);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.exp(x / 2);
      } };

    // lg - the decadic logarithm (base 10)
    this.funcs['lg'] = { cnvTo: function cnvTo(x) {
        return Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x);
      } };
    this.funcs['10lg'] = { cnvTo: function cnvTo(x) {
        return 10 * Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x / 10);
      } };
    this.funcs['20lg'] = { cnvTo: function cnvTo(x) {
        return 20 * Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x / 20);
      } };
    // The plain text ucum units file uses '2lg'
    this.funcs['2lg'] = { cnvTo: function cnvTo(x) {
        return 2 * Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x / 2);
      } };
    // The xml essence ucum file uses lgTimes2
    this.funcs['lgtimes2'] = this.funcs['2lg'];

    // ld - dual logarithm (base 2)
    this.funcs['ld'] = { cnvTo: function cnvTo(x) {
        return Math.log(x) / Math.LN2;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(2, x);
      } };

    // tan - tangent
    this.funcs['100tan'] = { cnvTo: function cnvTo(x) {
        return Math.tan(x) * 100;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.atan(x / 100);
      } };
    // the xml essence ucum file uses both 100tan and tanTimes100
    this.funcs['tanTimes100'] = this.funcs['100tan'];

    // sqrt - square root
    this.funcs['sqrt'] = { cnvTo: function cnvTo(x) {
        return Math.sqrt(x);
      },
      cnvFrom: function cnvFrom(x) {
        return x * x;
      } };

    // inv - inverse
    this.funcs['inv'] = { cnvTo: function cnvTo(x) {
        return 1.0 / x;
      },
      cnvFrom: function cnvFrom(x) {
        return 1.0 / x;
      } };

    // homeopathic potency functions
    this.funcs['hpX'] = { cnvTo: function cnvTo(x) {
        return -this.funcs['lg'](x);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, -x);
      } };

    this.funcs['hpC'] = { cnvTo: function cnvTo(x) {
        return -this.func['ln'](x) / this.funcs['ln'](100);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(100, -x);
      } };

    this.funcs['hpM'] = { cnvTo: function cnvTo(x) {
        return -this.funcs['ln'](x) / this.funcs['ln'](1000);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(1000, -x);
      } };

    this.funcs['hpQ'] = { cnvTo: function cnvTo(x) {
        return -this.funcs['ln'](x) / this.funcs['ln'](50000);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(50000, -x);
      } };

    // Make this a singleton.  See UnitTables constructor for details.
    var holdThis = UcumFunctions.prototype;
    if (exports) exports.UcumFunctions = UcumFunctions;
    UcumFunctions = function UcumFunctions() {
      throw new Error('UcumFunctions is a Singleton. ' + 'Use UcumFunctions.getInstance() instead.');
    };
    UcumFunctions.prototype = holdThis;
    var self = this;
    UcumFunctions.getInstance = function () {
      return self;
    };
  } // end of constructor


  /**
   * Returns the function with the name specified
   *
   * @param fname name of the function to be returned
   * @return the function with the specified name
   * @throws an error message if the function is not found
   */


  _createClass(UcumFunctions, [{
    key: 'forName',
    value: function forName(fname) {
      fname = fname.toLowerCase();

      var f = this.funcs[fname];
      if (f === null) throw new Error('Requested function ' + fname + ' is not defined');
      return f;
    }

    /**
     * Returns a flag indicating whether or not the function has been
     * defined.
     *
     * @param fname name of the function in question
     * @return true if it has been defined; false if not
     */

  }, {
    key: 'isDefined',
    value: function isDefined(fname) {
      fname = fname.toLowerCase();
      return this.funcs[fname] !== null;
    }
  }]);

  return UcumFunctions;
}(); // end of UcumFunctions class


/**
 *  This function exists ONLY until the original UcumFunctions constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumFunctions object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton Functions object.
 */


UcumFunctions.getInstance = function () {
  return new UcumFunctions();
};
UcumFunctions.getInstance();


},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumericString = isNumericString;
exports.getSynonyms = getSynonyms;
/**
 * Internal utilities used by multiple UCUM classes.  For example,
 * isNumericString is used by both the UnitString and UcumLhcUtils
 * classes.  If it's in the UnitString class the UcumLhcUtils class
 * needs to require the UnitString class.  But the checkSynonyms
 * class is used by the UnitString class - but was in the UcumLhcUtils
 * class.  Requiring the UcumLhcUtils class from the UnitString class
 * made everything break (cyclical requires).
 *
 * So now they're here.
 */

/**
 * This module implements internal ucum utilities.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var UnitTables = require('./unitTables.js').UnitTables;

/**
 * This function tests a string to see if it contains only numbers (digits,
 * a period, leading - or +).  This code was taken from a stackoverflow
 * solution:
 * https://stackoverflow.com/questions/175739/is-there-a-built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number/42356340#42356340
 *
 * @params theString
 * @returns true if the string contains only numbers; false otherwise
 */
function isNumericString(theString) {
  var num = "" + theString; //coerce num to be a string
  return !isNaN(num) && !isNaN(parseFloat(num));
} // end isNumericString


/**
 * This method accepts a term and looks for units that include it as
 * a synonym - or that include the term in its name.
 *
 * @param theSyn the term to search for.  This is assumed to be
 *  a string and not undefined.  The calling method should do any
 *  necessary checking before calling this.
 * @returns a hash with up to three elements:
 *  'status' contains the status of the request, which can be 'error',
 *    'failed' or succeeded';
 *  'msg' which contains a message for an error or if no units were found; and
 *  'units' which is an array that contains one array for each unit found:
 *    the unit's csCode_, the unit's name_, and the unit's guidance_
 *
 */
function getSynonyms(theSyn) {

  var retObj = {};
  var utab = UnitTables.getInstance();
  var resp = {};
  resp = utab.getUnitBySynonym(theSyn);

  // If we didn't get any units, transfer the status and message
  if (!resp['units']) {
    retObj['status'] = resp['status'];
    retObj['msg'] = resp['msg'];
  } else {
    retObj['status'] = 'succeeded';
    var aLen = resp['units'].length;
    retObj['units'] = [];
    for (var a = 0; a < aLen; a++) {
      var theUnit = resp['units'][a];
      retObj['units'][a] = {
        'code': theUnit.csCode_,
        'name': theUnit.name_,
        'guidance': theUnit.guidance_ };
    } // end do for all units returned
  } // end if we got a units list
  return retObj;
} // end getSynonyms


},{"./unitTables.js":17}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class handles opening, reading and loading the JSON file of ucum
 * definitions (prefixes, base units, and unit atoms).
 *
 * @author Lee Mericle
 *
 */

var Pfx = require("./prefix.js");
var PfxT = require("./prefixTables.js");
var Un = require("./unit.js");
var Utab = require('./unitTables.js');

// requiring the file will take care of opening it for use
var jsonDefs_ = require('../dist/data/ucumDefs.json');

var UcumJsonDefs = exports.UcumJsonDefs = function () {

  /**
   * Constructor.  This reads the json file (essenceFile_) into the
   * jsonDefs hash and makes this a singlton object.
   *
   */
  function UcumJsonDefs() {
    _classCallCheck(this, UcumJsonDefs);

    // Make this a singleton.  See UnitTables constructor for details.

    var holdThis = UcumJsonDefs.prototype;
    UcumJsonDefs = function UcumJsonDefs() {
      throw new Error('UcumJsonDefs is a Singleton. ' + 'Use UcumJsonDefs.getInstance() instead.');
    };
    if (exports) exports.UcumJsonDefs = UcumJsonDefs;
    UcumJsonDefs.prototype = holdThis;
    var self = this;
    UcumJsonDefs.getInstance = function () {
      return self;
    };
  } // end constructor


  /**
   * This method loads the JSON prefix and unit objects into the prefix and
   * unit tables.
   *
   * @returns nothing
   */


  _createClass(UcumJsonDefs, [{
    key: "loadJsonDefs",
    value: function loadJsonDefs() {

      if (Utab.UnitTables.getInstance().unitsCount() === 0) {

        var pTab = PfxT.PrefixTables.getInstance();
        var prefixes = jsonDefs_["prefixes"];
        var plen = prefixes.length;

        for (var p = 0; p < plen; p++) {
          var newPref = new Pfx.Prefix(prefixes[p]);
          pTab.add(newPref);
        }

        var uTab = Utab.UnitTables.getInstance();
        var units = jsonDefs_["units"];
        var ulen = units.length;

        for (var u = 0; u < ulen; u++) {
          var newUnit = new Un.Unit(units[u]);
          uTab.addUnit(newUnit);
        }
      } // end if the data has not already been loaded
    } // end loadJsonDefs

  }]);

  return UcumJsonDefs;
}(); // end UcumJsonDefs class

/**
 *  This function exists ONLY until the original UcumJsonDefs constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumJsonDefs object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumJsonDefs object.
 */


UcumJsonDefs.getInstance = function () {
  return new UcumJsonDefs();
};


},{"../dist/data/ucumDefs.json":1,"./prefix.js":8,"./prefixTables.js":9,"./unit.js":15,"./unitTables.js":17}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UcumLhcUtils = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ucumInternalUtils = require('./ucumInternalUtils.js');

var intUtils_ = _interopRequireWildcard(_ucumInternalUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class provides a single point of access to the LHC UCUM utilities
 *
 * @author Lee Mericle
 *
 */
var Ucum = require('./config.js').Ucum;
var UcumJsonDefs = require('./ucumJsonDefs.js').UcumJsonDefs;
var UnitTables = require('./unitTables.js').UnitTables;
var UnitString = require('./unitString.js').UnitString;
var Unit = require('./unit.js').Unit;
var Prefix = require('./prefix.js').Prefix;
var fs = require('fs');

/**
 * UCUM external utilities class
 */
var UcumLhcUtils = exports.UcumLhcUtils = function () {

  /**
   * Constructor.  This loads the json prefix and unit definitions if
   * they haven't been loaded already and creates itself as a singleton object.
   *
   */
  function UcumLhcUtils() {
    _classCallCheck(this, UcumLhcUtils);

    if (UnitTables.getInstance().unitsCount() === 0) {

      // Load the prefix and unit objects
      var uDefs = UcumJsonDefs.getInstance();
      uDefs.loadJsonDefs();
    }

    // Get the UnitString parser that will be used with this instance
    // of the LHC Utilities
    this.uStrParser_ = UnitString.getInstance();

    // Make this a singleton.  See UnitTables constructor for details.
    /*     let holdThis = UcumLhcUtils.prototype;
         UcumLhcUtils = function () {
           throw (new Error('UcumLhcUtils is a Singleton. ' +
           'Use UcumLhcUtils.getInstance() instead.'));
         };
         if (exports)
           exports.UcumLhcUtils = UcumLhcUtils;
         UcumLhcUtils.prototype = holdThis;
        let self = this ;
       UcumLhcUtils.getInstance = function(){return self} ;*/
  } // end constructor


  /**
   * This method calls the useHTMLInMessages method on the UnitString
   * object.  It should be called by web applications that use
   * these utilities.
   *
   * @param use flag indicating whether or not to use the braces message;
   *  defaults to true
   */


  _createClass(UcumLhcUtils, [{
    key: 'useHTMLInMessages',
    value: function useHTMLInMessages(use) {
      if (use === undefined) use = true;
      this.uStrParser_.useHTMLInMessages(use);
    }

    /**
     * This method calls the useBraceMsgForEachString method on the UnitString
     * object.  It should be called by web applications where unit
     * strings are validated individually (as opposed to validating a whole
     * file of unit strings).
     *
     * @param use flag indicating whether or not to use the braces message;
     *  defaults to true
     */

  }, {
    key: 'useBraceMsgForEachString',
    value: function useBraceMsgForEachString(use) {
      if (use === undefined) use = true;
      this.uStrParser_.useBraceMsgForEachString(use);
    }

    /**
     * This method validates a unit string.  It first checks to see if the
     * string passed in is a unit code that is found in the unit codes table.
     * If it is not found it parses the string to see if it resolves to a
     * valid unit string.
     *
     * If a valid unit cannot be found, the string is tested for some common
     * errors, such as missing brackets or a missing multiplication operator.
     * If found, the error is reported in the messages array that is returned.
     *
     * If a valid unit cannot be found and an error cannot be discerned, this
     * may return, if requested, a list of suggested units in the messages
     * array that is returned.  Suggestions are based on matching the expression
     * with unit names and synonyms.
     *
     * @param uStr the string to be validated
     * @param suggest a boolean to indicate whether or not suggestions are
     *  requested for a string that cannot be resolved to a valid unit;
     *  true indicates suggestions are wanted; false indicates they are not,
     *  and is the default if the parameter is not specified;
     * @returns an object with five properties:
     *  'status' will be 'valid' (the uStr is a valid UCUM code), 'invalid'
     *     (the uStr is not a valid UCUM code, and substitutions or
     *     suggestions may or may not be returned, depending on what was
     *     requested and found); or 'error' (an input or programming error
     *     occurred);
     *  'ucumCode' the valid ucum code, which may differ from what was passed
     *    in (e.g., if 'Gauss' is passed in, this will contain 'G') OR null if
     *    the string was flagged as invalid or an error occurred;
     *  'msg' is an array of one or more messages, if the string is invalid or
     *        an error occurred, indicating the problem, or an explanation of a
     *        substitution such as the substitution of 'G' for 'Gauss', or
     *        an empty array if no messages were generated;
     *  'unit' which is null if no unit is found, or a hash for a unit found:
     *    'code' is the unit's ucum code (G in the above example;
     *    'name' is the unit's name (Gauss in the above example); and
     *    'guidance' is the unit's guidance/description data; and
     *  'suggestions' if suggestions were requested and found, this is an array
     *     of one or more hash objects.  Each hash contains three elements:
     *     'msg' which is a message indicating what part of the uStr input
     *        parameter the suggestions are for;
     *     'invalidUnit' which is the unit expression the suggestions are
     *        for; and
     *     'units' which is an array of data for each suggested unit found.
     *        Each array will contain the unit code, the unit name and the
     *        unit guidance (if any).
     *     If no suggestions were requested and found, this property is not
     *     returned.
     */

  }, {
    key: 'validateUnitString',
    value: function validateUnitString(uStr, suggest) {

      if (suggest === undefined) suggest = false;

      var resp = this.getSpecifiedUnit(uStr, 'validate', suggest);
      var theUnit = resp['unit'];
      var retObj = {};
      if (!theUnit) {
        retObj = { 'status': !resp['origString'] || resp['origString'] === null ? 'error' : 'invalid',
          'ucumCode': null };
      } else if (resp['origString'] !== uStr) {
        retObj = { 'status': 'invalid' };
      } else {
        retObj = { 'status': 'valid',
          'ucumCode': resp['origString'],
          'unit': { 'code': theUnit.csCode_,
            'name': theUnit.name_,
            'guidance': theUnit.guidance_ } };
      }
      if (resp['suggestions']) {
        retObj['suggestions'] = resp['suggestions'];
      }
      retObj['msg'] = resp['retMsg'];
      return retObj;
    } // end validateUnitString


    /**
     * This method converts one unit to another
     *
     * @param fromUnitCode the unit code/expression/string of the unit to be converted
     * @param fromVal the number of "from" units to be converted to "to" units
     * @param toUnitCode the unit code/expression/string of the unit that the from
     *  field is to be converted to
     * @param suggest a boolean to indicate whether or not suggestions are
     *  requested for a string that cannot be resolved to a valid unit;
     *  true indicates suggestions are wanted; false indicates they are not,
     *  and is the default if the parameter is not specified;
     * @returns a hash with six elements:
     *  'status' that will be: 'succeeded' if the conversion was successfully
     *     calculated; 'failed' if the conversion could not be made, e.g., if
     *     the units are not commensurable; or 'error' if an error occurred;
     *  'toVal' the numeric value indicating the conversion amount, or null
     *     if the conversion failed (e.g., if the units are not commensurable);
     *  'msg' is an array message, if the string is invalid or an error occurred,
     *        indicating the problem, or an explanation of a substitution such as
     *        the substitution of 'G' for 'Gauss', or an empty array if no
     *        messages were generated;
     *  'suggestions' if suggestions were requested and found, this is a hash
     *     that contains at most two elements:
     *     'from' which, if the fromUnitCode input parameter or one or more of
     *       its components could not be found, is an array one or more hash
     *       objects.  Each hash contains three elements:
     *         'msg' which is a message indicating what unit expression the
     *            suggestions are for;
     *         'invalidUnit' which is the unit expression the suggestions
     *            are for; and
     *         'units' which is an array of data for each suggested unit found.
     *            Each array will contain the unit code, the unit name and the
     *            unit guidance (if any).
     *       If no suggestions were found for the fromUnitCode this element
     *       will not be included.
     *     'to' which, if the "to" unit expression or one or more of its
     *       components could not be found, is an array one or more hash objects.  Each hash
     *       contains three elements:
     *         'msg' which is a message indicating what toUnitCode input
     *            parameter the suggestions are for;
     *         'invalidUnit' which is the unit expression the suggestions
     *            are for; and
     *         'units' which is an array of data for each suggested unit found.
     *            Each array will contain the unit code, the unit name and the
     *            unit guidance (if any).
     *       If no suggestions were found for the toUnitCode this element
     *       will not be included.
     *    No 'suggestions' element will be included in the returned hash
     *    object if none were found, whether or not they were requested.
     *  'fromUnit' the unit object for the fromUnitCode passed in; returned
     *     in case it's needed for additional data from the object; and
     *  'toUnit' the unit object for the toUnitCode passed in; returned
     *     in case it's needed for additional data from the object.
     */

  }, {
    key: 'convertUnitTo',
    value: function convertUnitTo(fromUnitCode, fromVal, toUnitCode, suggest) {

      if (suggest === undefined) suggest = false;

      var returnObj = { 'status': 'failed',
        'toVal': null,
        'msg': [] };

      if (fromUnitCode) {
        fromUnitCode = fromUnitCode.trim();
      }
      if (!fromUnitCode || fromUnitCode == '') {
        returnObj['status'] = 'error';
        returnObj['msg'].push('No "from" unit expression specified.');
      }
      if (!fromVal || typeof fromVal !== 'number' && !intUtils_.isNumericString(fromVal)) {
        returnObj['status'] = 'error';
        returnObj['msg'].push('No "from" value, or an invalid "from" value, ' + 'was specified.');
      }
      if (toUnitCode) {
        toUnitCode = toUnitCode.trim();
      }
      if (!toUnitCode || toUnitCode == '') {
        returnObj['status'] = 'error';
        returnObj['msg'].push('No "to" unit expression specified.');
      }
      if (returnObj['status'] !== 'error') {
        try {
          var fromUnit = null;

          var parseResp = this.getSpecifiedUnit(fromUnitCode, 'convert', suggest);
          fromUnit = parseResp['unit'];
          if (parseResp['retMsg']) returnObj['msg'] = returnObj['msg'].concat(parseResp['retMsg']);
          if (parseResp['suggestions']) {
            returnObj['suggestions'] = {};
            returnObj['suggestions']['from'] = parseResp['suggestions'];
          }
          if (!fromUnit) {
            returnObj['msg'].push('Unable to find a unit for ' + fromUnitCode + ', ' + 'so no conversion could be performed.');
          }

          var toUnit = null;
          parseResp = this.getSpecifiedUnit(toUnitCode, 'convert', suggest);
          toUnit = parseResp['unit'];
          if (parseResp['retMsg']) returnObj['msg'] = returnObj['msg'].concat(parseResp['retMsg']);
          if (parseResp['suggestions']) {
            if (!returnObj['suggestions']) returnObj['suggestions'] = {};
            returnObj['suggestions']['to'] = parseResp['suggestions'];
          }
          if (!toUnit) {
            returnObj['msg'].push('Unable to find a unit for ' + toUnitCode + ', ' + 'so no conversion could be performed.');
          }

          if (fromUnit && toUnit) {
            try {
              returnObj['toVal'] = toUnit.convertFrom(fromVal, fromUnit);
              returnObj['status'] = 'succeeded';
              returnObj['fromUnit'] = fromUnit;
              returnObj['toUnit'] = toUnit;
            } catch (err) {
              returnObj['status'] = 'failed';
              returnObj['msg'].push(err.message);
            }
          } // end if we have the from and to units
        } catch (err) {
          returnObj['status'] = 'error';
          returnObj['msg'].push(err.message);
        }
      }

      return returnObj;
    } // end convertUnitTo


    /**
     * This method accepts a term and looks for units that include it as
     * a synonym - or that include the term in its name.
     *
     * @param theSyn the term to search for
     * @returns a hash with up to three elements:
     *  'status' contains the status of the request, which can be 'error',
     *    'failed' or succeeded';
     *  'msg' which contains a message for an error or if no units were found; and
     *  'units' which is an array that contains one hash for each unit found:
     *    'code' is the unit's csCode_
     *    'name' is the unit's name_
     *    'guidance' is the unit's guidance_
     *
     */

  }, {
    key: 'checkSynonyms',
    value: function checkSynonyms(theSyn) {
      var retObj = {};
      if (theSyn === undefined || theSyn === null) {
        retObj['status'] = 'error';
        retObj['msg'] = 'No term specified for synonym search.';
      } else {
        retObj = intUtils_.getSynonyms(theSyn);
      } // end if a search synonym was supplied

      return retObj;
    } // end checkSynonyms


    /**
     * This method parses a unit string to get (or try to get) the unit
     * represented by the string.  It returns an error message if no string was specified
     * or if any errors were encountered trying to get the unit.
     *
     * @param uName the expression/string representing the unit
     * @param valConv indicates what type of request this is for - a request to
     *  validate (pass in 'validate') or a request to convert (pass in 'convert')
     * @param suggest a boolean to indicate whether or not suggestions are
     *  requested for a string that cannot be resolved to a valid unit;
     *  true indicates suggestions are wanted; false indicates they are not,
     *  and is the default if the parameter is not specified;
     * @returns a hash containing:
     *   'unit' the unit object (or null if there were problems creating the
     *     unit);
     *   'origString' the possibly updated unit string passed in;
     *   'retMsg' an array of user messages (informational, error or warning) if
     *     any were generated (IF any were generated, otherwise will be an
     *     empty array); and
     *  'suggestions' is an array of 1 or more hash objects.  Each hash
     *     contains three elements:
     *       'msg' which is a message indicating what unit expression the
     *          suggestions are for;
     *       'invalidUnit' which is the unit expression the suggestions are
     *          for; and
     *       'units' which is an array of data for each suggested unit found.
     *          Each array will contain the unit code, the unit name and the
     *          unit guidance (if any).
     *   The return hash will not contain a suggestions array if a valid unit
     *   was found or if suggestions were not requested and found.
     */

  }, {
    key: 'getSpecifiedUnit',
    value: function getSpecifiedUnit(uName, valConv, suggest) {

      if (suggest === undefined) suggest = false;

      var retObj = {};
      retObj['retMsg'] = [];

      if (!uName) {
        retObj['retMsg'].push('No unit string specified.');
      } else {
        var utab = UnitTables.getInstance();
        uName = uName.trim();

        // go ahead and just try using the name as the code.  This may or may not
        // work, but if it does, it cuts out a lot of parsing.
        var theUnit = utab.getUnitByCode(uName);

        // If we found it, set the returned unit string to what was passed in;
        // otherwise try parsing as a unit string
        if (theUnit) {
          retObj['unit'] = theUnit;
          retObj['origString'] = uName;
        } else {
          try {
            var resp = this.uStrParser_.parseString(uName, valConv, suggest);
            retObj['unit'] = resp[0];
            retObj['origString'] = resp[1];
            if (resp[2]) retObj['retMsg'] = resp[2];
            retObj['suggestions'] = resp[3];
          } catch (err) {
            console.log('Unit requested for unit string ' + uName + '.' + 'request unsuccessful; error thrown = ' + err.message);
            retObj['retMsg'].unshift(uName + ' is not a valid unit.  ' + ('' + err.message));
          }
        } // end if the unit was not found as a unit name
      } // end if a unit expression was specified

      return retObj;
    } // end getSpecifiedUnit


    /**
     * This method retrieves a list of units commensurable, i.e., that can be
     * converted from and to, a specified unit.  Returns an error if the "from"
     * unit cannot be found.
     *
     * @param fromName the name/unit string of the "from" unit
     * @returns an array containing two elements;
     *   first element is the list of commensurable units if any were found
     *   second element is an error message if the "from" unit is not found
     */

  }, {
    key: 'commensurablesList',
    value: function commensurablesList(fromName) {

      var retMsg = [];
      var commUnits = null;
      var parseResp = this.getSpecifiedUnit(fromName, 'validate', false);
      var fromUnit = parseResp['unit'];
      if (parseResp['retMsg'].length > 0) retMsg = parseResp['retMsg'];
      if (!fromUnit) {
        retMsg.push('Could not find unit ' + fromName + '.');
      } else {
        var dimVec = null;
        var fromDim = fromUnit.getProperty('dim_');
        try {
          dimVec = fromDim.getProperty('dimVec_');
        } catch (err) {
          if (err.message === "Dimension does not have requested property(dimVec_)") dimVec = null;
        }
        if (dimVec) {
          var utab = UnitTables.getInstance();
          commUnits = utab.getUnitsByDimension(dimVec);
        }
      } // end if we found a "from" unit
      return [commUnits, retMsg];
    } // end commensurablesList


    /**
     * Creates a file containing a list of the units.  The file is created
     * in the current directory.
     */

  }, {
    key: 'printUnits',
    value: function printUnits() {

      // for now, create a list of the units created and save it to a file
      // for debugging.  This is a temporary file.
      var utab = UnitTables.getInstance();
      var uct = utab.unitsCount();
      var uList = utab.printUnits(true);
      fs.writeFileSync('JsonUnitsList.txt', uList, { encoding: 'utf8', mode: 438, flag: 'w' });
    }
  }]);

  return UcumLhcUtils;
}(); // end UcumLhcUtils class


/**
 *  This function exists ONLY until the original UcumLhcUtils constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumLhcUtils object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumLhcUtils object.
 */


UcumLhcUtils.getInstance = function () {
  return new UcumLhcUtils();
};

// Perform the first request for the utils object, to get the
// getInstance method set.
//UcumLhcUtils.getInstance();


},{"./config.js":6,"./prefix.js":8,"./ucumInternalUtils.js":11,"./ucumJsonDefs.js":12,"./unit.js":15,"./unitString.js":16,"./unitTables.js":17,"fs":2}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This exports definitions for ucum classes that need references to them
 * available to the demo code.  The actual code will be in the ucumPkg
 * library found in the dist directory.  This file provides the hooks to
 * those classes within the library.
 */

var Ucum = exports.Ucum = require("./config.js").Ucum;
var UcumLhcUtils = exports.UcumLhcUtils = require("./ucumLhcUtils.js").UcumLhcUtils;
var UnitTables = exports.UnitTables = require("./unitTables.js").UnitTables;
//export var UcumFileValidator = require("./ucumFileValidator.js").UcumFileValidator;


},{"./config.js":6,"./ucumLhcUtils.js":13,"./unitTables.js":17}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class represents one unit of measure.  It includes
 * functions to cover constructor, accessor, and assignment tasks as
 * well as operators to calculate multiplication, division and raising
 * to a power.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
var Dimension = require('./dimension.js').Dimension;
var UcumFunctions = require("./ucumFunctions.js").UcumFunctions;
var isInteger = require("is-integer");

var Unit = exports.Unit = function () {

  /**
   * Constructor.
   *
   * @param attrs an optional parameter that may be:
   *  a string, which is parsed by the unit parser, which creates
   *  the unit from the parsed string; or
   *  a hash containing all or some values for the attributes of
   *  the unit, where the keys are the attribute names, without a
   *  trailing underscore, e.g., name instead of name_; or
   *  null, in which case an empty hash is created and used to
   *  set the values forthe attributes.
   *  If a hash (empty or not) is used, attributes for which no value
   *  is specified are assigned a default value.
   *
   */
  function Unit() {
    var attrs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Unit);

    // Process the attrs hash passed in, which may be empty.
    // Create and assign values (from the attrs hash or defaults) to all
    // attributes.  From Class Declarations in Understanding ECMAScript,
    // https://leanpub.com/understandinges6/read/#leanpub-auto-class-declarations,
    //   "Own properties, properties that occur on the instance rather than the
    //    prototype, can only be created inside of a class constructor or method.
    //    It's recommended to create all possible own properties inside of the
    //    constructor function so there's a single place that's responsible for
    //    all of them."

    /*
     * Flag indicating whether or not this is a base unit
     */
    this.isBase_ = attrs['isBase_'] || false;

    /*
     * The unit name, e.g., meter
     */
    this.name_ = attrs['name_'] || '';

    /*
     * The unit's case-sensitive code, e.g., m
     */
    this.csCode_ = attrs['csCode_'] || '';

    /*
     * The unit's case-insensitive code, e.g., M
     */
    this.ciCode_ = attrs['ciCode_'] || '';

    /*
     * The unit's property, e.g., length
     */
    this.property_ = attrs['property_'] || '';

    /*
     * The magnitude of the unit, e.g., 3600/3937 for a yard,
     * where a yard - 3600/3973 * m(eter).  The Dimension
     * property specifies the meter - which is the unit on which
     * a yard is based, and this magnitude specifies how to figure
     * this unit based on the base unit.
     */
    this.magnitude_ = attrs['magnitude_'] || 1;

    /*
     * The Dimension object of the unit
     */
    if (attrs['dim_'] === undefined || attrs['dim_'] === null) {
      this.dim_ = null;
    }
    // When the unit data stored in json format is reloaded, the dimension data
    // is recognized as a a hash, not as a Dimension object.
    else if (attrs['dim_']['dimVec_'] !== undefined) {
        this.dim_ = new Dimension(attrs['dim_']['dimVec_']);
      } else if (attrs['dim_'] instanceof Dimension) {
        this.dim_ = attrs['dim_'];
      } else if (attrs['dim_'] instanceof Array || isInteger(attrs['dim_'])) {
        this.dim_ = new Dimension(attrs['dim_']);
      } else {
        this.dim_ = null;
      }
    /*
     * The print symbol of the unit, e.g., m
     */
    this.printSymbol_ = attrs['printSymbol_'] || null;

    /*
     * The class of the unit, where given, e.g., dimless
     */
    this.class_ = attrs['class_'] || null;

    /*
     * A flag indicating whether or not the unit is metric
     */
    this.isMetric_ = attrs['isMetric_'] || false;

    /*
     * The "variable" - which I think is used only for base units
     * The symbol for the variable as used in equations, e.g., s for distance
     */
    this.variable_ = attrs['variable_'] || null; // comes from 'dim' in XML

    /*
     * The conversion function
     */
    this.cnv_ = attrs['cnv_'] || null;

    /*
     * The conversion prefix
     */
    this.cnvPfx_ = attrs['cnvPfx_'] || 1;

    /*
     * Flag indicating whether or not this is a "special" unit, i.e., is
     * constructed using a function specific to the measurement, e.g.,
     * fahrenheit and celsius
     */
    this.isSpecial_ = attrs['isSpecial_'] || false;

    /*
     * Flag indicating whether or not this is an arbitrary unit
     */
    this.isArbitrary_ = attrs['isArbitrary_'] || false;

    /*
     * Added when added LOINC list of units
     * synonyms are used by the autocompleter to enhance lookup capabilities
     * while source says where the unit first shows up.  Current sources are
     * UCUM - which are units from the unitsofmeasure.org list and LOINC -
     * which are units from the LOINC data.
     */
    this.synonyms_ = attrs['synonyms_'] || null;
    this.source_ = attrs['source_'] || null;
    this.loincProperty_ = attrs['loincProperty_'] || null;
    this.category_ = attrs['category_'] || null;
    this.guidance_ = attrs['guidance_'] || null;

    /*
     * Used to compute dimension; storing for now until I complete
     * unit definition parsing
     */
    /*
     * Case sensitive (cs) and case insensitive (ci) base unit strings,
     * includes exponent and prefix if applicable - specified in
     * <value Unit=x UNIT=X value="nnn">nnn</value> -- the unit part --
     * in the ucum-essence.xml file, and may be specified by a user
     * when requesting conversion or validation of a unit string.  The
     * magnitude (base factor) is used with this to determine the new unit.
     * For example, a Newton (unit code N) is created from the string
     * kg.m/s2, and the value of 1 (base factor defined below). An hour
     * (unit code h) is created from the unit min (minute) with a value
     * of 60.
     */
    this.csUnitString_ = attrs['csUnitString_'] || null;
    this.ciUnitString_ = attrs['ciUnitString_'] || null;

    /*
     * String and numeric versions of factor applied to unit specified in
     * <value Unit=x UNIT=X value="nnn">nnn</value> -- the value part
     */
    this.baseFactorStr_ = attrs['baseFactorStr_'] || null;
    this.baseFactor_ = attrs['baseFactor_'] || null;

    /*
     * Flag used to indicate units where the definition process failed
     * when parsing units from the official units definitions file
     * (currently using the ucum-essence.xml file).  We keep these
     * so that we can use them to at least validate them as valid
     * units, but we don't try to convert them.   This is temporary
     * and only to account for instances where the code does not
     * take into account various special cases in the xml file.
     *
     * This is NOT used when trying to validate a unit string
     * submitted during a conversion or validation attempt.
     */
    this.defError_ = attrs['defError_'] || false;
  } // end constructor


  /**
   * Assign the unity (= dimensionless unit 1) to this unit.
   *
   * @return this unit
   */


  _createClass(Unit, [{
    key: "assignUnity",
    value: function assignUnity() {
      this.name_ = "";
      this.magnitude_ = 1;
      if (!this.dim_) this.dim_ = new Dimension();
      this.dim_.assignZero();
      this.cnv_ = null;
      this.cnvPfx_ = 1;
      return this;
    } // end assignUnity


    /**
     * This assigns one or more values, as provided in the hash passed in,
     * to this unit.
     *
     * @param vals hash of values to be assigned to the attributes
     *        specified by the key(s), which should be the attribute
     *        name without the trailing underscore, e.g., name instead
     *        of name_.
     * @return nothing
     */

  }, {
    key: "assignVals",
    value: function assignVals(vals) {
      for (var key in vals) {
        var uKey = !key.charAt(key.length - 1) === '_' ? key + '_' : key;
        if (this.hasOwnProperty(uKey)) this[uKey] = vals[key];else throw new Error("Parameter error; " + key + " is not a property of a Unit");
      }
    } // end assignVals


    /**
     * This creates a clone of this unit.
     *
     * @return the clone
     */

  }, {
    key: "clone",
    value: function clone() {
      var _this = this;

      var retUnit = new Unit();
      Object.getOwnPropertyNames(this).forEach(function (val) {
        if (val === 'dim_') {
          if (_this['dim_']) retUnit['dim_'] = _this['dim_'].clone();else retUnit['dim_'] = null;
        } else retUnit[val] = _this[val];
      });
      return retUnit;
    } // end clone


    /**
     * This assigns all properties of a unit passed to it to this unit.
     *
     * @param the unit whose properties are to be assigned to this one.
     * @return nothing; this unit is updated
     */

  }, {
    key: "assign",
    value: function assign(unit2) {
      var _this2 = this;

      Object.getOwnPropertyNames(unit2).forEach(function (val) {
        if (val === 'dim_') {
          if (unit2['dim_']) _this2['dim_'] = unit2['dim_'].clone();else _this2['dim_'] = null;
        } else {
          _this2[val] = unit2[val];
        }
      });
    } // end assign


    /**
     * This determines whether or not object properties of the unit
     * passed in are equal to the corresponding properties in this unit.
     * The following properties are the only ones checked:
     *   magnitude_, dim_, cnv_ and cnvPfx_
     *
     * @param unit2 the unit whose properties are to be checked.
     * @return boolean indicating whether or not they match
     */

  }, {
    key: "equals",
    value: function equals(unit2) {

      return this.magnitude_ === unit2.magnitude_ && this.cnv_ === unit2.cnv_ && this.cnvPfx_ === unit2.cnvPfx_ && (this.dim_ === null && unit2.dim_ === null || this.dim_.equals(unit2.dim_));
    } // end equals


    /**
     * This method compares every attribute of two objects to determine
     * if they all match.
     *
     * @param unit2 the unit that is to be compared to this unit
     * @return boolean indicating whether or not every attribute matches
     */

  }, {
    key: "fullEquals",
    value: function fullEquals(unit2) {

      var match = true;
      var thisAttr = Object.keys(this).sort();
      var u2Attr = Object.keys(unit2).sort();

      var keyLen = thisAttr.length;
      match = keyLen === u2Attr.length;

      // check each attribute.   Dimension objects have to checked using
      // the equals function of the Dimension class.
      for (var k = 0; k < keyLen && match; k++) {
        if (thisAttr[k] === u2Attr[k]) {
          if (thisAttr[k] === 'dim_') match = this.dim_.equals(unit2.dim_);else match = this[thisAttr[k]] === unit2[thisAttr[k]];
        } else match = false;
      } // end do for each key and attribute
      return match;
    } // end of fullEquals

    /**
     * This returns the value of the property named by the parameter
     * passed in.
     *
     * @param propertyName name of the property to be returned, with
     *        or without the trailing underscore.
     * @return the requested property, if found for this unit
     * @throws an error if the property is not found for this unit
     */

  }, {
    key: "getProperty",
    value: function getProperty(propertyName) {
      var uProp = propertyName.charAt(propertyName.length - 1) === '_' ? propertyName : propertyName + '_';
      return this[uProp];
    } // end getProperty


    /**
     * Takes a measurement consisting of a number of units and a unit and returns
     * the equivalent number of this unit.  So, 15 mL would translate
     * to 1 tablespoon if this object is a tablespoon.
     *
     * Note that the number returned may not be what is normally expected.
     * For example, converting 10 Celsius units to Fahrenheit would "normally"
     * return a value of 50.   But in this case you'll get back something like
     * 49.99999999999994.
     *
     * @param num the magnitude for the unit to be translated (e.g. 15 for 15 mL)
     * @param fromUnit the unit to be translated to one of this type (e.g. a mL unit)
     *
     * @return the number of converted units (e.g. 1 for 1 tablespoon)
     * @throws an error if the dimension of the fromUnit differs from this unit's
     * dimension
     */

  }, {
    key: "convertFrom",
    value: function convertFrom(num, fromUnit) {
      var newNum = 0.0;

      // reject request if the dimensions are not equal
      if (fromUnit.dim_ && this.dim_ && !fromUnit.dim_.equals(this.dim_)) {
        throw new Error("Sorry.  " + fromUnit.csCode_ + " cannot be converted " + ("to " + this.csCode_ + "."));
      }
      var fromCnv = fromUnit.cnv_;
      var fromMag = fromUnit.magnitude_;

      // If the same conversion function is specified for both units, which
      // includes neither unit having a conversion function, multiply the
      // "from" unit's magnitude by the number passed in and then divide
      // that result by this unit's magnitude.  Do this for units with
      // and without dimension vectors.  PROBLEM with 2 non-commensurable
      // units with no dimension vector or function, e.g., byte to mol
      if (fromCnv === this.cnv_) {
        newNum = num * fromMag / this.magnitude_;
      }
      // else use a function to get the number to be returned
      else {
          var x = 0.0;
          var funcs = UcumFunctions.getInstance();
          if (fromCnv != null) {
            // turn num * fromUnit.magnitude into its ratio scale equivalent,
            // e.g., convert Celsius to Kelvin
            var fromFunc = funcs.forName(fromCnv);
            x = fromFunc.cnvFrom(num * fromUnit.cnvPfx_) * fromMag;
            //x = fromFunc.cnvFrom(num * fromMag) * fromUnit.cnvPfx_;
          } else {
            x = num * fromMag;
          }

          if (this.cnv_ != null) {
            // turn mag * origUnit on ratio scale into a non-ratio unit,
            // e.g. convert Kelvin to Fahrenheit
            var toFunc = funcs.forName(this.cnv_);
            newNum = toFunc.cnvTo(x / this.magnitude_) / this.cnvPfx_;
          } else {
            newNum = x / this.magnitude_;
          }
        } // end if either unit has a conversion function

      return newNum;
    } // end convertFrom


    /**
     * Takes a number and a target unit and returns the number for a measurement
     * of this unit that corresponds to the number of the target unit passed in.
     * So, 1 tablespoon (where this unit represents a tablespoon) would translate
     * to 15 mL.
     *
     * See the note on convertFrom about return values.
     *
     * @param mag the magnitude for this unit (e.g. 1 for 1 tablespoon)
     * @param toUnit the unit to which this unit is to be translated
     *  (e.g. an mL unit)
     *
     * @return the converted number value (e.g. 15 mL)
     * @throws an error if the dimension of the toUnit differs from this unit's
     *   dimension
     */

  }, {
    key: "convertTo",
    value: function convertTo(num, toUnit) {

      return toUnit.convertFrom(num, this);
    } // end convertTo


    /**
     * Takes a given number of this unit returns the number of this unit
     * if it is converted into a coherent unit.  Does not change this unit.
     *
     * If this is a coherent unit already, just gives back the number
     * passed in.
     *
     * @param num the number for the coherent version of this unit
     * @return the number for the coherent version of this unit
     */

  }, {
    key: "convertCoherent",
    value: function convertCoherent(num) {

      // convert mag' * u' into canonical number * u on ratio scale
      if (this.cnv_ !== null) num = this.cnv_.f_from(num / this.cnvPfx_) * this.magnitude_;

      return num;
    } // end convertCoherent


    /**
     * Mutates this unit into a coherent unit and converts a given number of
     * units to the appropriate value for this unit as a coherent unit
     *
     * @param num the number for this unit before conversion
     * @return the number of this unit after conversion
     * @throws an error if the dimensions differ
     */

  }, {
    key: "mutateCoherent",
    value: function mutateCoherent(num) {

      // convert mu' * u' into canonical mu * u on ratio scale
      num = this.convertCoherent(num);

      // mutate to coherent unit
      this.magnitude_ = 1;
      this.cnv_ = null;
      this.cnvPfx_ = 1;
      this.name_ = "";

      // build a name as a term of coherent base units
      // This is probably ALL WRONG and a HORRIBLE MISTAKE
      // but until we figure out what the heck the name being
      // built here really is, it will have to stay.
      for (var i = 0, max = Dimension.getMax(); i < max; i++) {
        var elem = this.dim_.getElementAt(i);
        var uA = UnitTables.getUnitsByDimension(new Dimension(i));
        if (uA == null) throw new Error("Can't find base unit for dimension " + i);
        this.name_ = uA.name + elem;
      }
      return num;
    } // end mutateCoherent


    /**
     * Mutates this unit into a unit on a ratio scale and converts a specified
     * number of units to an appropriate value for this converted unit
     *
     * @param num the number of this unit before it's converted
     * @return the magnitude of this unit after it's converted
     * @throw an error if the dimensions differ
     */

  }, {
    key: "mutateRatio",
    value: function mutateRatio(num) {
      if (this.cnv_ == null) return this.mutateCoherent(num);else return num;
    } // end mutateRatio


    /**
     * Multiplies this unit with a scalar. Special meaning for
     * special units so that (0.1*B) is 1 dB.
     *
     * This function modifies this unit.
     *
     * @param s the value by which this unit is to be multiplied
     * @return this unit after multiplication
     */

  }, {
    key: "multiplyThis",
    value: function multiplyThis(s) {

      if (this.cnv_ != null) this.cnvPfx_ *= s;else this.magnitude_ *= s;
      var mulVal = s.toString();
      this.name_ = this.mulString(mulVal, this.name_);
      this.csCode_ = this.mulString(mulVal, this.csCode_);
      this.ciCode_ = this.mulString(mulVal, this.ciCode_);
      this.printSymbol_ = this.mulString(mulVal, this.printSymbol_);

      return this;
    } // end multiplyThis


    /**
     * Multiplies this unit with another unit. If one of the
     * units is a non-ratio unit the other must be dimensionless or
     * else an exception is thrown. This special case treatment allows
     * us to scale non-ratio units.
     *
     * This function modifies this unit
     * @param unit2 the unit to be multiplied with this one
     * @return this unit after it is multiplied
     * @throws an error if one of the units is not on a ratio-scale
     *         and the other is not dimensionless.
     */

  }, {
    key: "multiplyThese",
    value: function multiplyThese(unit2) {

      if (this.cnv_ != null) {
        if (unit2.cnv_ == null && (!unit2.dim_ || unit2.dim_.isZero())) this.cnvPfx_ *= unit2.magnitude_;else throw new Error("Attempt to multiply non-ratio unit " + this.name_ + " " + 'failed.');
      } else {
        if (unit2.cnv_ != null) {
          if (this.cnv_ == null && (!this.dim_ || this.dim_.isZero())) {
            var cp = this.magnitude_;
            assign(unit2);
            this.cnvPfx_ *= cp;
          } else throw new Error("Attempt to multiply non-ratio unit " + unit2.name_);
        } else {
          this.name_ = this.mulString(this.name_, unit2.name_);
          this.csCode_ = this.mulString(this.csCode_, unit2.csCode_);
          if (this.ciCode_ && unit2.ciCode_) this.ciCode_ = this.mulString(this.ciCode_, unit2.ciCode_);else if (unit2.ciCode_) this.ciCode_ = unit2.ciCode_;
          if (this.guidance_ && unit2.guidance_) this.guidance_ = this.mulString(this.guidance_, unit2.guidance_);else if (unit2.guidance_) this.guidance_ = unit2.guidance_;
          this.magnitude_ *= unit2.magnitude_;
          if (this.printSymbol_ && unit2.printSymbol_) this.printSymbol_ = this.mulString(this.printSymbol_, unit2.printSymbol_);else if (unit2.printSymbol_) this.printSymbol_ = unit2.printSymbol_;

          // If this.dim_ isn't there, clone the dimension in unit2 - if dimVec_
          // is a dimension in unit2.dim_; else just transfer it to this dimension
          if (!this.dim_ || this.dim_ && !this.dim_.dimVec_) {
            if (unit2.dim_ && unit2.dim_ instanceof Dimension) this.dim_ = unit2.dim_.clone();else this.dim_ = unit2.dim_;
          }

          // Else this.dim_ is there.  If there is a dimension for unit2,
          // add it to this one.
          else if (unit2.dim_ && unit2.dim_ instanceof Dimension) {
              this.dim_.add(unit2.dim_);
            }
        }
      }
      return this;
    } // end multiplyThese


    /**
     * Divides this unit by another unit. If this unit is not on a ratio
     * scale an exception is raised. Mutating to a ratio scale unit
     * is not possible for a unit, only for a measurement.
     *
     * This unit is modified by this function.
     * @param unit2 the unit by which to divide this one
     * @return this unit after it is divided by unit2
     * @throws an error if either of the units is not on a ratio scale.
     * */

  }, {
    key: "divide",
    value: function divide(unit2) {

      if (this.cnv_ != null) throw new Error("Attempt to divide non-ratio unit " + this.name_);
      if (unit2.cnv_ != null) throw new Error("Attempt to divide by non-ratio unit " + unit2.name_);

      if (this.name_ && unit2.name_) this.name_ = this.divString(this.name_, unit2.name_);else if (unit2.name_) this.name_ = unit2.invertString(unit2.name_);

      this.csCode_ = this.divString(this.csCode_, unit2.csCode_);

      if (this.ciCode_ && unit2.ciCode_) this.ciCode_ = this.divString(this.ciCode_, unit2.ciCode_);else if (unit2.ciCode_) this.ciCode_ = unit2.invertString(unit2.ciCode_);

      if (this.guidance_ && unit2.guidance_) this.guidance_ = this.divString(this.guidance_, unit2.guidance_);else if (unit2.guidance_) this.guidance_ = unit2.guidance_;

      this.magnitude_ /= unit2.magnitude_;

      if (this.printSymbol_ && unit2.printSymbol_) this.printSymbol_ = this.divString(this.printSymbol_, unit2.printSymbol_);else if (unit2.printSymbol_) this.printSymbol_ = unit2.printSymbol_;

      // Continue if unit2 has a dimension object.
      // If this object has a dimension object, subtract unit2's dim_ object from
      // this one. The sub method will take care of cases where the dimVec_ arrays
      // are missing on one or both dim_ objects.
      if (unit2.dim_) {
        if (this.dim_) {
          if (this.dim_.isNull()) this.dim_.assignZero();
          this.dim_ = this.dim_.sub(unit2.dim_);
        } // end if this.dim_ exists

        // Else if this dim_ object is missing, clone unit2's dim_ object
        // and give the inverted clone to this unit.
        else this.dim_ = unit2.dim_.clone().minus();
      } // end if unit2 has a dimension object
      return this;
    } // end divide


    /**
     * Invert this unit with respect to multiplication. If this unit is not
     * on a ratio scale an exception is thrown. Mutating to a ratio scale unit
     * is not possible for a unit, only for a measurement (the magnitude and
     * dimension).
     *
     *  This unit is modified by this function.
     * @return this unit after being inverted
     * @throws and error if this unit is not on a ratio scale
     */

  }, {
    key: "invert",
    value: function invert() {

      if (this.cnv_ != null) throw new Error("Attempt to invert a non-ratio unit - " + this.name_);

      this.name_ = this.invertString(this.name_);
      this.magnitude_ = 1 / this.magnitude_;
      this.dim_.minus();
      return this;
    } // end invert


    /**
     * Inverts a string, where the string is assumed to be a code or a name
     * of a division operation where the string is the divisor and the dividend
     * is blank.
     *
     * @param the string to be inverted
     * @return the inverted string
     */

  }, {
    key: "invertString",
    value: function invertString(theString) {

      if (theString.length > 0) {
        var stringRep = theString.replace('/', "!").replace('.', '/').replace("!", '.');
        switch (stringRep.charAt(0)) {
          case '.':
            theString = stringRep.substr(1);break;
          case '/':
            theString = stringRep;break;
          default:
            theString = "/" + stringRep;
        }
      }
      return theString;
    } // end invertString


    /**
     * Raises the unit to a power.  For example
     *  kg.m/s2 raised to the -2 power would be kg-2.m-2/s-4
     *
     * If this unit is not on a ratio scale an error is thrown. Mutating
     * to a ratio scale unit is not possible for a unit, only for a
     * measurement (magnitude and dimension).
     *
     * This is based on the pow method in Gunter Schadow's java version,
     * although it uses javascript capabilities to simplify the processing.
     *
     * This unit is modified by this function
     *
     * @param p the power to with this unit is to be raise
     * @return this unit after it is raised
     * @throws an error if this unit is not on a ratio scale.
     */

  }, {
    key: "power",
    value: function power(p) {

      if (this.cnv_ != null) throw new Error("Attempt to raise a non-ratio unit, " + this.name_ + ", " + 'to a power.');

      //this.name_ = UnitString.pow(this.name_, p);
      // the above line is replaced with the code below, as the pow method
      // never actually existing in the UnitString class.  (Tried to use
      // Schadow java code but this way ended up being a lot easier).
      var uStr = this.csCode_;
      var uArray = uStr.match(/([./]|[^./]+)/g);
      var arLen = uArray.length;

      for (var i = 0; i < arLen; i++) {
        var un = uArray[i];
        if (un !== '/' && un !== '.') {
          var nun = parseInt(un);
          if (isInteger(nun)) uArray[i] = Math.pow(nun, p).toString();else {
            var uLen = un.length;
            for (var u = uLen - 1; u >= 0; u--) {
              var uChar = parseInt(un[u]);
              if (!isInteger(uChar)) {
                if (un[u] === '-' || un[u] === '+') {
                  u--;
                }
                if (u < uLen - 1) {
                  var exp = parseInt(un.substr(u));
                  exp = Math.pow(exp, p);
                  uArray[i] = un.substr(0, u) + exp.toString();
                  u = -1;
                } else {
                  uArray[i] += p.toString();
                  u = -1;
                } // end if there are/aren't some numbers at the end
                u = -1;
              } // end if this character is not a number
            } // end searching backwards for start of exponent
          } // end if this element is not a number
        } // end if the current element is not an operator
      } // end do for each element of the units array

      // reassemble the updated units array to a string
      this.csCode_ = uArray.join('');

      this.magnitude_ = Math.pow(this.magnitude_, p);
      if (this.dim_) {
        this.dim_.mul(p);
      }
      return this;
    } // end power


    /**
     * Creates a unit string that indicates multiplication of the two
     * units referenced by the codes passed in.
     *
     * @params s1 string representing the first unit
     * @params s2 string representing the second unit
     * @returns a string representing the two units multiplied
     */

  }, {
    key: "mulString",
    value: function mulString(s1, s2) {
      return s1 + "." + s2;
    }

    /**
     * Creates a unit string that indicates division of the first unit by
     * the second unit, as referenced by the codes passed in.
     *
     * @params s1 string representing the first unit
     * @params s2 string representing the second unit
     * @returns a string representing the division of the first unit by the
     * second unit
     */

  }, {
    key: "divString",
    value: function divString(s1, s2) {
      return s1 + '/' + s2;
    } // end divString

  }]);

  return Unit;
}(); // end Unit class


},{"./dimension.js":7,"./ucumFunctions.js":10,"is-integer":4}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitString = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ' is invalid.\n'], ['', ' is invalid.\\n']);

var _ucumInternalUtils = require('./ucumInternalUtils.js');

var intUtils_ = _interopRequireWildcard(_ucumInternalUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class handles the parsing of a unit string into a unit object
 */

var Ucum = require('./config.js').Ucum;
var Unit = require('./unit.js').Unit;
var UnitTables = require('./unitTables.js').UnitTables;
var PrefixTables = require('./prefixTables.js').PrefixTables;

var UnitString = exports.UnitString = function () {

  /**
   * Constructor
   */
  function UnitString() {
    _classCallCheck(this, UnitString);

    // Get instances of the unit and prefix tables and the utilities
    this.utabs_ = UnitTables.getInstance();
    this.pfxTabs_ = PrefixTables.getInstance();

    // Set emphasis characters to defaults.  These are used to emphasize
    // certain characters or strings in user messages.  They can be reset in
    // the useHTMLInMessages method.
    this.openEmph_ = Ucum.openEmph_;
    this.closeEmph_ = Ucum.closeEmph_;

    // Set the braces message to blank.  This message is displayed for each
    // validation request on the web page, but is included separately as
    // a note on the validation spreadsheet.  The useBraceMsgForEachString
    // method should be used to set the message to be displayed for each
    // unit string.
    this.bracesMsg_ = '';

    // Set the flags used, with indices, as place holders in unit strings
    // for parenthetical strings and strings within braces.
    this.parensFlag_ = "parens_placeholder"; // in lieu of Jehoshaphat
    this.pFlagLen_ = this.parensFlag_.length;
    this.braceFlag_ = "braces_placeholder"; // in lieu of Nebuchadnezzar
    this.bFlagLen_ = this.braceFlag_.length;

    // Message text variations for validation methods and conversion methods
    this.valMsgStart_ = "Did you mean ";
    this.valMsgEnd_ = "?";
    this.cnvMsgStart_ = "We assumed you meant ";
    this.cnvMsgEnd_ = ".";

    // Initialize the message start/end strings, which will be set when
    // parseString is called.
    this.vcMsgStart_ = null;
    this.vcMsgEnd_ = null;

    // Arrays used by multiple methods within this class to hold persistent
    // data.  Just gets too bulky to pass these guys around.

    // Messages to be returned to the calling function
    this.retMsg_ = [];

    // Units for parenthetical unit strings
    this.parensUnits_ = [];

    // annotation text for annotations found in unit strings
    this.annotations_ = [];

    // suggestions for unit strings that for which no unit was found
    this.suggestions = [];

    // Make this a singleton.  See UnitTables constructor for details.
    /*
    let holdThis = UnitString.prototype;
    UnitString = function () {
      throw (new Error('UnitString is a Singleton. ' +
        'Use UnitString.getInstance() instead.'));
    };
    if (exports)
      exports.UnitString = UnitString;
    UnitString.prototype = holdThis;
     let self = this;
    UnitString.getInstance = function () {
      return self
    };
    */
  } // end constructor


  /**
   * Sets the emphasis strings to the HTML used in the webpage display - or
   * blanks them out, depending on the use parameter.
   *
   * @param use flag indicating whether or not to use the html message format;
   *  defaults to true
   */


  _createClass(UnitString, [{
    key: 'useHTMLInMessages',
    value: function useHTMLInMessages(use) {
      if (use === undefined || use) {
        this.openEmph_ = Ucum.openEmphHTML_;
        this.closeEmph_ = Ucum.closeEmphHTML_;
      } else {
        this.openEmph_ = Ucum.openEmph_;
        this.closeEmph_ = Ucum.closeEmph_;
      }
    } // end useHTMLInMessages


    /**
     * Sets the braces message to be displayed for each unit string validation
     * requested, as appropriate.
     *
     * @param use flag indicating whether or not to use the braces message;
     *  defaults to true
     */

  }, {
    key: 'useBraceMsgForEachString',
    value: function useBraceMsgForEachString(use) {
      if (use === undefined || use) this.bracesMsg_ = Ucum.bracesMsg_;else this.bracesMsg_ = '';
    }

    /**
     * Parses a unit string, returns a unit, a possibly updated version of
     * the string passed in, and messages and suggestions where appropriate.
     *
     * The string returned may be updated if the input string contained unit
     * names, e.g., "pound".  The unit code ([lb_av] for pound) is placed in
     * the string returned, a the returned messages array includes a note
     * explaining the substitution.
     *
     * @param uStr the string defining the unit
     * @param valConv indicates what type of request this is for - a request to
     *  validate (pass in 'validate') or a request to convert (pass in 'convert');
     *  optional, defaults to 'validate'
     * @param suggest a boolean to indicate whether or not suggestions are
     *  requested for a string that cannot be resolved to a valid unit;
     *  true indicates suggestions are wanted; false indicates they are not,
     *  and is the default if the parameter is not specified;
     * @returns an array containing:
     *   the unit object (or null if there were problems creating the unit);
     *   the possibly updated unit string passed in;
     *   an array of any user messages (informational, error or warning)
     *     generated (or an empty array); and
     *   a suggestions array of hash objects (1 or more).  Each hash contains
     *   three elements:
     *     'msg' which is a message indicating what unit expression the
     *       suggestions are for;
     *     'invalidUnit' which is the unit expression the suggestions are
     *       for; and
     *     'units' which is an array of data for each suggested unit found.
     *        Each array will contain the unit code, the unit name and the
     *        unit guidance (if any).
     *   The return array will not contain a suggestions array if a valid unit
     *   was found or if suggestions were not requested.
     * @throws an error if nothing was specified.
     */

  }, {
    key: 'parseString',
    value: function parseString(uStr, valConv, suggest) {

      uStr = uStr.trim();
      // Make sure we have something to work with
      if (uStr === '' || uStr === null) {
        throw new Error('Please specify a unit expression to be validated.');
      }

      if (valConv === 'validate') {
        this.vcMsgStart_ = this.valMsgStart_;
        this.vcMsgEnd_ = this.valMsgEnd_;
      } else {
        this.vcMsgStart_ = this.cnvMsgStart_;
        this.vcMsgEnd_ = this.cnvMsgEnd_;
      }

      if (suggest === undefined || suggest === false) {
        this.suggestions_ = null;
      } else {
        this.suggestions_ = [];
      }
      this.retMsg_ = [];
      this.parensUnits_ = [];
      this.annotations_ = [];

      var origString = uStr;
      var retObj = [];

      // Extract any annotations, i.e., text enclosed in braces ({}) from the
      // string before further processing.  Store each one in this.annotations_
      // array and put a placeholder in the string for the annotation.  Do
      // this before other processing in case an annotation contains characters
      // that will be interpreted as parenthetical markers or operators in
      // subsequent processing.

      uStr = this._getAnnotations(uStr);
      if (this.retMsg_.length > 0) {
        retObj[0] = null;
        retObj[1] = null;
      } else {
        // Flag used to block further processing on an unrecoverable error
        var endProcessing = this.retMsg_.length > 0;

        // Check for spaces and throw an error if any are found.  The spec
        // explicitly forbids spaces except in annotations, which is why any
        // annotations are extracted before this check is made.
        if (uStr.indexOf(' ') > -1) {
          throw new Error('Blank spaces are not allowed in unit expressions.');
        } // end if blanks were found in the string

        // assign the array returned to retObj.  It will contain 2 elements:
        //  the unit returned in position 0; and the origString (possibly
        //  modified in position 1.  The origString in position 1 will not
        //  be changed by subsequent processing.
        retObj = this._parseTheString(uStr, origString);
        var finalUnit = retObj[0];

        // Do a final check to make sure that finalUnit is a unit and not
        // just a number.  Something like "1/{HCP}" will return a "unit" of 1
        // - which is not a unit.
        if (intUtils_.isNumericString(finalUnit) && finalUnit !== 1) {
          var newUnit = new Unit({ 'csCode_': origString });
          if (newUnit) {
            newUnit['magnitude_'] = finalUnit;
          } else {
            throw new Error('error processing numerical unit');
          }
          retObj[0] = newUnit;
        } // end final check
      } // end if no annotation errors were found
      retObj[2] = this.retMsg_;
      if (this.suggestions_ && this.suggestions_.length > 0) retObj[3] = this.suggestions_;
      return retObj;
    } // end parseString


    /**
     * Parses a unit string, returns a unit, a possibly updated version of
     * the string passed in, and messages where appropriate.  This should
     * only be called from within this class (or by test code).
     *
     * The string returned may be updated if the input string contained unit
     * names, e.g., "pound".  The unit code ([lb_av] for pound) is placed in
     * the string returned, a the returned messages array includes a note
     * explaining the substitution.
     *
     * @param uStr the string defining the unit
     * @param origString the original unit string passed in
     * @returns
     *  an array containing:
     *    the unit object (or null if there were problems creating the unit); and
     *    the possibly updated unit string passed in.
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     * the this.parensUnits_ array is referenced and possibly populated by
     *   methods called within this one
     * the this.annotations_ array is referenced by methods called within
     *   this one
     * the this.suggestions_ array may be populated by methods called within
     *   this one
     */

  }, {
    key: '_parseTheString',
    value: function _parseTheString(uStr, origString) {

      // Unit to be returned
      var finalUnit = null;

      // Flag used to block further processing on an unrecoverable error
      var endProcessing = this.retMsg_.length > 0;

      // Call _processParens to search for and process any/all parenthetical
      // strings in uStr.  Units created for parenthetical strings will be
      // stored in the this.parensUnits_ array.
      var parensResp = this._processParens(uStr, origString);
      endProcessing = parensResp[2];

      // The array used to hold the units and their operators.
      var uArray = [];

      // Continue if we didn't hit a problem
      if (!endProcessing) {
        uStr = parensResp[0];
        origString = parensResp[1];

        // Call _makeUnitsArray to convert the string to an array of unit
        // descriptors with operators.
        var mkUArray = this._makeUnitsArray(uStr, origString);

        endProcessing = mkUArray[2];
        if (!endProcessing) {
          uArray = mkUArray[0];
          origString = mkUArray[1];
          // Create a unit object out of each un element
          var uLen = uArray.length;
          for (var u1 = 0; u1 < uLen && !endProcessing; u1++) {
            var curCode = uArray[u1]['un'];

            // Determine the type of the "un" attribute of the current array element

            // Check to see if it's a number.  If so write the number version of
            // the number back to the "un" attribute and move on
            if (intUtils_.isNumericString(curCode)) {
              uArray[u1]['un'] = Number(curCode);
            } else {
              // The current unit array element is a string.  Check now to see
              // if it is or contains a parenthesized unit from this.parensUnits_.
              // If so, call _getParens to process the string and get the unit.

              if (curCode.indexOf(this.parensFlag_) >= 0) {
                var parenUnit = this._getParensUnit(curCode, origString);
                // if we couldn't process the string, set the end flag and bypass
                // further processing.
                endProcessing = parenUnit[1];

                // If we're good, put the unit in the uArray and replace the
                // curCode, which contains the parentheses placeholders, etc.,
                // with the unit's code - including any substitutions.
                if (!endProcessing) {
                  uArray[u1]['un'] = parenUnit[0];
                }
              } // end if the curCode contains a parenthesized unit

              // Else it's not a parenthetical unit and not a number. Call
              // _makeUnit to create a unit for it.
              else {
                  var uRet = this._makeUnit(curCode, origString);
                  if (uRet[0] === null) endProcessing = true;else {
                    uArray[u1]['un'] = uRet[0];
                    origString = uRet[1];
                  }
                } // end if the curCode is not a parenthetical expression
            } // end if the "un" array is a not a number
          } // end do for each element in the units array
        } // end if _makeUnitsArray did not return an error
      } // end if _processParens did not find an error that causes a stop

      // If we're still good, continue
      if (!endProcessing) {
        // Process the units (and numbers) to create one final unit object
        if ((uArray[0] === null || uArray[0] === ' ' || uArray[0]['un'] === undefined || uArray[0]['un'] === null) && this.retMsg_.length === 0) {
          // not sure what this might be, but this is a safeguard
          this.retMsg_.push('Unit string (' + origString + ') did not contain ' + 'anything that could be used to create a unit, or else something ' + 'that is not handled yet by this package.  Sorry');
          endProcessing = true;
        }
      }
      if (!endProcessing) finalUnit = this._performUnitArithmetic(uArray, origString);

      return [finalUnit, origString];
    } // end _parseTheString


    /**
     * Extracts all annotations from a unit string, replacing them with
     * placeholders for later evaluation.  The annotations are stored in the
     * this.annotations_ array.  This should only be called from within this
     * class (or by test code).
     *
     * @param uString the unit string being parsed
     * @returns the string after the annotations are replaced with placeholders
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     * the this.annotations_ array is populated by this method
     */

  }, {
    key: '_getAnnotations',
    value: function _getAnnotations(uString) {
      var openBrace = uString.indexOf('{');
      while (openBrace >= 0) {

        var _closeBrace = uString.indexOf('}');
        if (_closeBrace < 0) {
          this.retMsg_.push('Missing closing brace for annotation starting at ' + this.openEmph_ + uString.substr(openBrace) + this.closeEmph_);
          openBrace = -1;
        } else {
          var braceStr = uString.substring(openBrace, _closeBrace + 1);
          var aIdx = this.annotations_.length.toString();
          uString = uString.replace(braceStr, this.braceFlag_ + aIdx + this.braceFlag_);
          this.annotations_.push(braceStr);
          openBrace = uString.indexOf('{');
        }
      } // end do while we have an opening brace

      // check for a stray/unmatched closing brace
      var closeBrace = uString.indexOf('}');
      if (closeBrace >= 0) this.retMsg_.push('Missing opening brace for closing brace found at ' + this.openEmph_ + uString.substring(0, closeBrace + 1) + this.closeEmph_);
      return uString;
    } // end _getAnnotations


    /**
     * Finds and processes any/all parenthesized unit strings. This should only
     * be called from within this class (or by test code).
     *
     * Nested parenthesized strings are processed from the inside out.  The
     * parseString function is called from within this one for each parenthesized
     * unit string, and the resulting unit object is stored in this.parensUnits_,
     * to be processed after all strings are translated to units.
     *
     * A placeholder is placed in the unit string returned to indicate that the
     * unit object should be obtained from the this.parensUnits_ array.  The
     * placeholder consists of the parenthesis flag (this.parensFlag_) followed
     * by the index of the unit in this.parensUnits_ followed by this.parensFlag_.
     *
     * @param uString the unit string being parsed, where this will be the full
     *  string the first time this is called and parenthesized strings on any
     *  subsequent calls
     * @param origString the original string first passed in to parseString
     * @returns
     *  an array containing:
     *   the string after the parentheses are replaced;
     *   the original string; and
     *   a boolean flag indicating whether or not an error occurred that
     *     should stop processing.
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     * this this.parensUnits_ array will be populated with units found for
     *   parenthetical unit strings
     */

  }, {
    key: '_processParens',
    value: function _processParens(uString, origString) {

      // Unit strings array and index
      var uStrArray = [];
      var uStrAryPos = 0;
      var stopProcessing = false;

      var pu = this.parensUnits_.length;

      // Count of characters trimmed off the beginning of the unit string (uString)
      // as units are removed from it; used for error messages to provide
      // context.
      var trimmedCt = 0;

      // Break the unit string into pieces that consist of text outside of
      // parenthetical strings and placeholders for the parenthetical units.
      // This method is called recursively for parenthetical strings and the units
      // returned are stored in the this.parensUnits_ array.
      while (uString !== "" && !stopProcessing) {
        var openCt = 0;
        var closeCt = 0;
        var openPos = uString.indexOf('(');

        // If an opening parenthesis was not found, check for an unmatched
        // close parenthesis.  If one was found report the error and end
        // processing.
        if (openPos < 0) {
          var closePos = uString.indexOf(')');
          if (closePos >= 0) {
            var theMsg = 'Missing open parenthesis for close ' + ('parenthesis at ' + uString.substring(0, closePos + trimmedCt)) + ('' + this.openEmph_ + uString.substr(closePos, 1) + this.closeEmph_);
            if (closePos < uString.length - 1) {
              theMsg += '' + uString.substr(closePos + 1);
            }
            this.retMsg_.push(theMsg);
            uStrArray[uStrAryPos] = uString;
            stopProcessing = true;
          } // end if a close parenthesis was found

          // If no parentheses were found in the current unit string, transfer
          // it to the units array and blank out the string, which will end
          // the search for parenthetical units.
          else {
              uStrArray[uStrAryPos] = uString;
              uString = "";
            } // end if no close parenthesis was found
        } // end if no open parenthesis was found

        // Otherwise an open parenthesis was found. Process the string that
        // includes the parenthetical group
        else {
            openCt += 1;
            // Write the text before the parentheses (if any) to the unit strings array
            var uLen = uString.length;
            if (openPos > 0) {
              uStrArray[uStrAryPos++] = uString.substr(0, openPos);
            }

            // Find the matching closePos, i.e., the one that closes the
            // parenthetical group that this one opens.  Look also for
            // another open parenthesis, in case this includes nested parenthetical
            // strings.  This continues until it finds the same number of close
            // parentheses as open parentheses, or runs out of string to check.
            // In the case of nested parentheses this will identify the outer set
            // of parentheses.
            var _closePos = 0;
            var c = openPos + 1;
            for (; c < uLen && openCt != closeCt; c++) {
              if (uString[c] === '(') openCt += 1;else if (uString[c] === ')') closeCt += 1;
            }

            // Put a placeholder for the group in the unit strings array and recursively
            // call this method for the parenthetical group.  Put the unit returned
            // in this.parensUnits_.  Set the unit string to whatever follows
            // the position of the closing parenthesis for this group, to be
            // processed by the next iteration of this loop.  If there's nothing
            // left uString is set to "".
            if (openCt === closeCt) {
              _closePos = c;
              uStrArray[uStrAryPos++] = this.parensFlag_ + pu.toString() + this.parensFlag_;
              var parseResp = this._parseTheString(uString.substring(openPos + 1, _closePos - 1), origString);
              if (parseResp[0] === null) stopProcessing = true;else {
                origString = parseResp[1];
                this.parensUnits_[pu++] = parseResp[0];
                uString = uString.substr(_closePos);
                trimmedCt = _closePos;
              }
            } // end if the number of open and close parentheses matched

            // If the number of open and close parentheses doesn't match, indicate
            // an error.
            else {
                uStrArray.push(origString.substr(openPos));
                this.retMsg_.push('Missing close parenthesis for open parenthesis at ' + ('' + origString.substring(0, openPos + trimmedCt)) + ('' + this.openEmph_ + origString.substr(openPos, 1)) + ('' + this.closeEmph_ + origString.substr(openPos + 1)));
                stopProcessing = true;
              }
          } // end if an open parenthesis was found
      } // end do while the input string is not empty
      if (stopProcessing) this.parensUnits_ = [];
      return [uStrArray.join(''), origString, stopProcessing];
    } // end _processParens


    /**
     * Breaks the unit string into an array of unit descriptors and operators.
     * If a unit descriptor consists of a number preceding a unit code, with
     * no multiplication operator, e.g., 2mg instead of 2.mg, it is handled
     * as if it were a parenthetical expression.
     *
     * This should only be called from within this class (or by test code).
     *
     * @param uStr the unit string being parsed
     * @param origString the original string passed to parseString
     * @returns
     *  an array containing:
     *    the array representing the unit string;
     *    the original string passed in, possibly updated with corrections; and
     *    and a flag indicating whether or not processing can continue.
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     */

  }, {
    key: '_makeUnitsArray',
    value: function _makeUnitsArray(uStr, origString) {

      // Separate the string into pieces based on delimiters / (division) and .
      // (multiplication).  The idea is to get an array of units on which we
      // can then perform any operations (prefixes, multiplication, division).

      var uArray1 = uStr.match(/([./]|[^./]+)/g);
      var endProcessing = false;
      var startNumCheck = /(^[0-9]+)(\[?[a-zA-Z\_0-9a-zA-Z\_]+\]?$)/;

      // If the first element in the array is a division operator (/), the
      // string started with '/'.  Add a first element containing 1 to the
      // array, which will cause the correct computation to be performed (inversion).
      if (uArray1[0] === "/") {
        uArray1.unshift("1");
      } else {
        // Check to see if there is a number preceding a unit code, e.g., 2mg
        // If so, update the first element to remove the number (2mg -> mg) and
        // add two elements to the beginning of the array - the number and the
        // multiplication operator.

        if (!intUtils_.isNumericString(uArray1[0])) {
          var numRes = uArray1[0].match(startNumCheck);
          if (numRes && numRes.length === 3 && numRes[1] !== '' && numRes[2] !== '' && numRes[2].indexOf(this.braceFlag_) !== 0) {
            this.retMsg_.push(uArray1[0] + ' is not a valid UCUM code.  ' + this.vcMsgStart_ + (numRes[1] + '.' + numRes[2]) + this.vcMsgEnd_);
            origString = origString.replace(uArray1[0], numRes[1] + '.' + numRes[2]);
            uArray1[0] = numRes[2];
            uArray1.unshift(numRes[1], '.');
          }
        } // end if the first element is not a number (only)
      }
      // Create an array of unit/operator objects.  The unit is, for now, the
      // string containing the unit code (e.g., Hz for hertz) including
      // a possible prefix and exponent.   The operator is the operator to be
      // applied to that unit and the one preceding it.  So, a.b would give
      // us two objects.  The first will have a unit of a, and a blank operator
      // (because it's the first unit).  The second would have a unit of b
      // and the multiplication operator (.).
      var u1 = uArray1.length;
      var uArray = [{ op: "", un: uArray1[0] }];
      for (var n = 1; n < u1; n++) {
        var theOp = uArray1[n++];

        // Check to see if a number precedes a unit code.
        // If so, send the element to _processParens, inserting the multiplication
        // operator where it belongs.  Treating it as parenthetical keeps it from
        // being interpreted incorrectly because of operator parentheses.  For
        // example, if the whole string is mg/2kJ we don't want to rewrite it as
        // mg/2.kJ - because mg/2 would be performed, followed by .kJ.  Instead,
        // handling 2kJ as a parenthesized unit will make sure mg is divided by
        // 2.kJ.
        if (!intUtils_.isNumericString(uArray1[n])) {
          var numRes2 = uArray1[n].match(startNumCheck);
          if (numRes2 && numRes2.length === 3 && numRes2[1] !== '' && numRes2[2] !== '' && numRes2[2].indexOf(this.braceFlag_) !== 0) {
            var parensStr = '(' + numRes2[1] + '.' + numRes2[2] + ')';
            var parensResp = this._processParens(parensStr, parensStr);
            // if a "stop processing" flag was returned, set the n index to end
            // the loop and set the endProcessing flag
            if (parensResp[2]) {
              n = u1;
              endProcessing = true;
            }
            // Otherwise let the user know about the problem and what we did
            else {
                parensResp[1] = parensResp[1].substring(1, parensResp[1].length - 1);
                this.retMsg_.push(numRes2[0] + ' is not a valid UCUM code.\n' + this.vcMsgStart_ + (numRes2[1] + '.' + numRes2[2]) + this.vcMsgEnd_);
                origString = origString.replace(uArray1[n], parensResp[1]);
                uArray.push({ op: theOp, un: parensResp[0] });
              }
          } else {
            uArray.push({ op: theOp, un: uArray1[n] });
          }
        } else {
          uArray.push({ op: theOp, un: uArray1[n] });
        }
      }
      return [uArray, origString, endProcessing];
    } // end _makeUnitsArray


    /**
     * Takes a unit string containing parentheses flags and returns the unit they
     * represent.  Any text found before and/or after the parenthetical
     * expression is checked to see if we can tell what the user meant and
     * let them know what it should have been.  For example, 2(mg), which
     * would resolve to 2mg, should be 2.mg.
     *
     * This should only be called from within this class (or by test code).
     *
     * @param pStr the string being parsed
     * @param origString the original unit string passed in; passed through
     *  to _getAnnonText if annotation flags are found in any text preceding
     *  or following the parenthetical unit
     * @returns
     *   an array containing
     *     the unit object; and
     *     a flag indicating whether or not processing should be ended.
     *       True indicates that the string was invalid and no corrections
     *         (substitutions or suggestions) could be found;
     *       False indicates that it was either valid or substitutions/suggestions
     *          were made.
     *   the this.retMsg_ array will be updated with any user messages
     *     (informational, error or warning) generated by this or called methods
     *   this this.parensUnits_ array contains the units that are acquired by
     *     this method
     * @throws an error if an invalid parensUnit index was found.  This is
     *    a processing error.
     */

  }, {
    key: '_getParensUnit',
    value: function _getParensUnit(pStr, origString) {
      var endProcessing = false;
      var retAry = [];
      var retUnit = null;
      var befAnnoText = null;
      var aftAnnoText = null;

      // Get the location of the flags.  We're assuming there are only two
      // because _processParens takes care of nesting.  By the time we get
      // here we should not be looking a nested parens.  Also get any text
      // before and after the parentheses.  Once we get the unit we update
      // the input string with the unit's csCode_, which will wipe out any
      // before and after text
      var psIdx = pStr.indexOf(this.parensFlag_);
      var befText = null;
      if (psIdx > 0) {
        var _befText = pStr.substr(0, psIdx - 1);
      }
      var peIdx = pStr.lastIndexOf(this.parensFlag_);
      var aftText = null;
      if (peIdx + this.pFlagLen_ < pStr.length) {
        aftText = pStr.substr(peIdx + this.pFlagLen_);
      }

      // Get the text between the flags
      var pNumText = pStr.substring(psIdx + this.pFlagLen_, peIdx);

      // Make sure the index is a number, and if it is, get the unit from the
      // this.parensUnits_ array
      if (intUtils_.isNumericString(pNumText)) {
        retUnit = this.parensUnits_[Number(pNumText)];
        if (!intUtils_.isNumericString(retUnit)) {
          pStr = retUnit.csCode_;
        } else {
          pStr = retUnit;
        }
      }
      // If it's not a number, it's a programming error.  Throw a fit.
      else {
          throw new Error('Processing error - invalid parens number ' + pNumText + ' ' + ('found in ' + pStr + '.'));
        }

      // If there's something in front of the starting parentheses flag, check to
      // see if it's a number or an annotation.
      if (befText) {
        // If it's a number, assume that multiplication was assumed
        if (intUtils_.isNumericString(befText)) {
          var nMag = retUnit.getProperty('magnitude_');
          nMag *= Number(befText);
          retUnit.assignVals({ 'magnitude_': nMag });
          pStr = befText + '.' + pStr;
          this.retMsg_.push('' + befText + pStr + ' is not a valid UCUM code.\n' + this.vcMsgStart_ + pStr + this.vcMsgEnd_);
        } else {
          if (befText.indexOf(this.braceFlag_) >= 0) {
            var annoRet = this._getAnnoText(befText, origString);
            // if we found not only an annotation, but text before or after
            // the annotation (remembering that this is all before the
            // parentheses) throw an error - because we don't know what
            // to do with it.  Could it be missing an operator?
            if (annoRet[1] || annoRet[2]) {
              throw new Error('Text found before the parentheses (' + (befText + ') included an annotation along with other text ') + ('for parenthetical unit ' + retUnit.csCode_));
            }
            // Otherwise put the annotation after the unit string and note
            // the misplacement.
            pStr += annoRet[0];
            this.retMsg_.push('The annotation ' + annoRet[0] + ' before the unit ' + 'code is invalid.\n' + this.vcMsgStart_ + pStr + this.vcMsgEnd_);
          }
          // else the text before the parentheses is neither a number nor
          // an annotation.  If suggestions were NOT requested, record an
          // error.
          else if (!this.suggestions_) {
              this.retMsg_.push(befText + ' preceding the unit code ' + pStr + ' ' + 'is invalid.  Unable to make a substitution.');
              endProcessing = true;
            }
            // otherwise try for suggestions
            else {
                var suggestStat = this._getSuggestions(befText);
                endProcessing = suggestStat !== 'succeeded';
              } // end if a brace was found or, if not, suggestions were not or
          // were requested
        } // end if text preceding the parentheses was not a number
      } // end if there was text before the parentheses

      // Process any text after the parentheses
      if (aftText) {
        // if it's an annotation, get it and add it to the pStr
        if (aftText.indexOf(this.braceFlag_) >= 0) {
          var _annoRet = this._getAnnoText(aftText, origString);
          // if we found not only an annotation, but text before or after
          // the annotation (remembering that this is all after the
          // parentheses) throw an error - because we don't know what
          // to do with it.  Could it be missing an operator?
          if (_annoRet[1] || _annoRet[2]) {
            throw new Error('Text found after the parentheses (' + (aftText + ') included an annotation along with other text ') + ('for parenthetical unit ' + retUnit.csCode_));
          }
          // Otherwise put the annotation after the unit string - no message
          // needed.
          pStr += _annoRet[0];
        }
        // Otherwise check to see if it's an exponent.  If so, warn the
        // user that it's not valid - but try it anyway
        else {

            if (intUtils_.isNumericString(aftText)) {
              pStr += aftText;
              retUnit = retUnit.power(Number(aftText));
              this.retMsg_.push('An exponent (' + aftText + ') following a parenthesis ' + 'is invalid as of revision 1.9 of the UCUM Specification.\n  ' + this.vcMsgStart_ + pStr + this.vcMsgEnd_);
            }
            // else the text after the parentheses is neither a number nor
            // an annotation.  If suggestions were NOT requested, record an
            // error.
            else if (!this.suggestions_) {
                this.retMsg_.push('Text ' + aftText + ' following the unit code ' + pStr + ' ' + 'is invalid.  Unable to make a substitution.');
                endProcessing = true;
              }
              // otherwise try for suggestions
              else {
                  var _suggestStat = this._getSuggestions(befText);
                  endProcessing = _suggestStat !== 'succeeded';
                } // end if text following the parentheses not an exponent
          } // end if text following the parentheses is not an annotation
      } // end if there is text following the parentheses
      retUnit.csCode_ = pStr;
      return [retUnit, endProcessing];
    } // end _getParensUnit

    /**
     * Takes a unit string containing annotation flags and returns the
     * annotation they represent.  This also returns any text found before
     * the annotation and any found after the annotation.
     *
     * This should only be called from within this class (or by test code).
     * NEEDS FIX in next branch to handle string with multiple annotations.
     *
     * @param pStr the string being parsed
     * @param origString the original string being parsed; used in error msg
     *  thrown for an invalid index to the annotations array
     * @returns
     *  an array containing
     *    the annotation for the pStr;
     *    any text found before the annotation; and
     *    any text found after the annotation.
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     * the this.annotations_ array is used as the source for the annotations text
     * @throws an error if for a processing error - an invalid annotation index.
     */

  }, {
    key: '_getAnnoText',
    value: function _getAnnoText(pStr, origString) {

      // if the starting braces flag is not at index 0, get the starting
      // text and the adjust the pStr to omit it.
      var asIdx = pStr.indexOf(this.braceFlag_);
      var startText = asIdx > 0 ? pStr.substring(0, asIdx) : null;
      if (asIdx !== 0) {
        pStr = pStr.substr(asIdx);
      }

      // Get the location of the end flag and, if text follows it, get the text
      var aeIdx = pStr.indexOf(this.braceFlag_, 1);
      var endText = aeIdx + this.bFlagLen_ < pStr.length ? pStr.substr(aeIdx + this.bFlagLen_) : null;

      // Get the index of the annotation in this.annotations_.
      // Check it to make sure it's valid, and if not, throw an error
      var idx = pStr.substring(this.bFlagLen_, aeIdx);
      var idxNum = Number(idx);
      if (!intUtils_.isNumericString(idx) || idxNum >= this.annotations_.length) {
        throw new Error('Processing Error - invalid annotation index ' + idx + ' found ' + ('in ' + pStr + ' that was created from ' + origString));
      }

      // Replace the flags and annotation index with the annotation expression
      pStr = this.annotations_[idxNum];
      return [pStr, startText, endText];
    } // end _getAnnoText


    /**
     * Takes a unit string and looks for suggested units.  This should be
     * called for unit strings that cannot be resolved to unit codes.  The
     * string is searched for in the synonyms table found in the UnitTables
     * class.  That table includes all synonyms and unit names for the units
     * in the unit data table.
     *
     * @param pStr the string being parsed
     * @returns an object that contains an element named 'status', whose
     *  value indicates the status of the request:
     *   'succeeded' indicates that synonyms were found;
     *   'failed' indicates that no synonyms were found; or
     *   'error' which indicates that an error occurred
     *
     * the this.retMsg_ array will be updated with a message indicating whether
     *  or not synonyms/suggestions  were found
     * the this.suggestions_ array will be updated with a hash (added to the
     *   array if it already contains others) that contains three elements:
     *   'msg' which is a message indicating what unit expression the
     *      suggestions are for;
     *   'invalidUnit' which is the unit expression the suggestions are for; and
     *   'units' which is an array of data for each suggested unit found.
     *       Each array will contain the unit code, the unit name and the
     *       unit guidance (if any).
     */

  }, {
    key: '_getSuggestions',
    value: function _getSuggestions(pStr) {

      var retObj = intUtils_.getSynonyms(pStr);
      if (retObj['status'] === 'succeeded') {
        var suggSet = {};
        suggSet['msg'] = pStr + ' is not a valid UCUM code.  We found possible ' + 'units that might be what was meant:';
        suggSet['invalidUnit'] = pStr;
        var synLen = retObj['units'].length;
        suggSet['units'] = [];
        for (var s = 0; s < synLen; s++) {
          var unit = retObj['units'][s];
          var unitArray = [unit['code'], unit['name'], unit['guidance']];

          suggSet['units'].push(unitArray);
        }
        this.suggestions_.push(suggSet);
      } else {
        this.retMsg_.push(pStr + ' is not a valid UCUM code.  No alternatives ' + 'were found.');
      }
      return retObj['status'];
    } // end getSuggestions


    /**
     * Creates a unit object from a string defining one unit.  The string
     * should consist of a unit code for a unit already defined (base or
     * otherwise).  It may include a prefix and an exponent, e.g., cm2
     * (centimeter squared).  This should only be called from within this
     * class (or by test code).
     *
     * @params uCode the string defining the unit
     * @param origString the original string to be parsed; used to provide
     *  context for messages
     * @returns
     *  an array containing:
     *    a unit object, or null if there were problems creating the unit; and
     *    the origString passed in, which may be updated if a unit name was
     *    translated to a unit code.
     *
     *  the this.retMsg_ array will be updated with any user messages
     *    (informational, error or warning) generated by this or called methods
     *  the this.suggestions_ array will be populated if no unit (with or without
     *    substitutions) could be found and suggestions were requested
     */

  }, {
    key: '_makeUnit',
    value: function _makeUnit(uCode, origString) {

      // First try the code just as is, without looking for annotations,
      // prefixes, exponents, or elephants.
      var retUnit = this.utabs_.getUnitByCode(uCode);
      if (retUnit) {
        retUnit = retUnit.clone();
      }

      // If we found it, we're done.  No need to parse for those elephants (or
      // other stuff).
      else if (uCode.indexOf(this.braceFlag_) >= 0) {
          var getAnnoRet = this._getUnitWithAnnotation(uCode, origString);
          retUnit = getAnnoRet[0];
          if (retUnit) {
            origString = getAnnoRet[1];
          }
          // If a unit is not found, retUnit will be returned null and
          // the this.retMsg_ array will contain a message describing the problem.
          // If a unit is found, of course, all is good. So ... nothing left
          // to see here, move along.
        } // end if the uCode includes an annotation

        else {

            // So we didn't find a unit for the full uCode or for one with
            // annotations.  Try looking for a unit that uses a carat (^)
            // instead of an asterisk (*)

            if (uCode.indexOf('^') > -1) {
              var tryCode = uCode.replace('^', '*');
              retUnit = this.utabs_.getUnitByCode(tryCode);
              if (retUnit) {
                retUnit = retUnit.clone();
                retUnit.csCode_ = retUnit.csCode_.replace('*', '^');
                retUnit.ciCode_ = retUnit.ciCode_.replace('*', '^');
              }
            }
            // If that didn't work, check to see if it should have brackets
            // around it (uCode = degF when it should be [degF]
            if (!retUnit) {
              var addBrackets = '[' + uCode + ']';
              retUnit = this.utabs_.getUnitByCode(addBrackets);
              if (retUnit) {
                retUnit = retUnit.clone();
                origString = origString.replace(uCode, addBrackets);
                this.retMsg_.push(uCode + ' is not a valid unit expression, but ' + (addBrackets + ' is.\n') + this.vcMsgStart_ + addBrackets + this.vcMsgEnd_);
              } // end if we found the unit after adding brackets
            } // end trying to add brackets

            // If we didn't find it, try it as a name
            if (!retUnit) {
              var retUnitAry = this.utabs_.getUnitByName(uCode);
              if (retUnitAry && retUnitAry.length > 0) {
                retUnit = retUnitAry[0].clone();
                var mString = 'The UCUM code for ' + uCode + ' is ' + retUnit.csCode_ + '.\n' + this.vcMsgStart_ + retUnit.csCode_ + this.vcMsgEnd_;
                var dupMsg = false;
                for (var r = 0; r < this.retMsg_.length && !dupMsg; r++) {
                  dupMsg = this.retMsg_[r] === mString;
                }if (!dupMsg) this.retMsg_.push(mString);
                var rStr = new RegExp('(^|[.\/({])(' + uCode + ')($|[.\/)}])');
                var res = origString.match(rStr);
                origString = origString.replace(rStr, res[1] + retUnit.csCode_ + res[3]);
                uCode = retUnit.csCode_;
              }
            }

            // If we still don't have a unit, try assuming a modifier (prefix and/or
            // exponent) and look for a unit without the modifier
            if (!retUnit) {

              var origCode = uCode;
              var origUnit = null;
              var exp = null;
              var pfxCode = null;
              var pfxObj = null;
              var pfxVal = null;
              var pfxExp = null;

              // Look first for an exponent.  If we got one, separate it out and
              // try to get the unit again
              var codeAndExp = this._isCodeWithExponent(uCode);
              if (codeAndExp) {
                uCode = codeAndExp[0];
                exp = codeAndExp[1];
                origUnit = this.utabs_.getUnitByCode(uCode);
              }

              // If we still don't have a unit, separate out the prefix, if any,
              // and try without it.
              if (!origUnit) {
                // Try for a single character prefix first.
                pfxCode = uCode.charAt(0);
                pfxObj = this.pfxTabs_.getPrefixByCode(pfxCode);

                // if we got a prefix, get its info and remove it from the unit code
                if (pfxObj) {
                  pfxVal = pfxObj.getValue();
                  pfxExp = pfxObj.getExp();
                  var pCodeLen = pfxCode.length;
                  uCode = uCode.substr(pCodeLen);

                  // try again for the unit
                  origUnit = this.utabs_.getUnitByCode(uCode);

                  // If we still don't have a unit, see if the prefix could be the
                  // two character "da" (deka) prefix.  That's the only prefix with
                  // two characters, and without this check it's interpreted as "d"
                  // (deci) and the "a" is considered part of the unit code.

                  if (!origUnit && pfxCode == 'd' && uCode.substr(0, 1) == 'a') {
                    pfxCode = 'da';
                    pfxObj = this.pfxTabs_.getPrefixByCode(pfxCode);
                    pfxVal = pfxObj.getValue();
                    uCode = uCode.substr(1);

                    // try one more time for the unit
                    origUnit = this.utabs_.getUnitByCode(uCode);
                  }
                } // end if we found a prefix
              } // end if we didn't get a unit after removing an exponent

              // If we still haven't found anything, we're done looking.
              // (We tried with the full unit string, with the unit string
              // without the exponent, the unit string without a prefix,
              // common errors, etc. That's all we can try).
              if (!origUnit) {
                retUnit = null;
                // BUT if the user asked for suggestions, at least look for them
                if (this.suggestions_) {
                  var suggestStat = this._getSuggestions(origCode);
                } else {
                  this.retMsg_.push(origCode + ' is not a valid UCUM code.');
                }
              } else {
                // Otherwise we found a unit object.  Clone it and then apply the
                // prefix and exponent, if any, to it.
                retUnit = origUnit.clone();
                var theDim = retUnit.getProperty('dim_');
                var theMag = retUnit.getProperty('magnitude_');
                var theName = retUnit.getProperty('name_');
                var theCiCode = retUnit.getProperty('ciCode_');
                var thePrintSymbol = retUnit.getProperty('printSymbol_');
                // If there is an exponent for the unit, apply it to the dimension
                // and magnitude now
                if (exp) {
                  exp = parseInt(exp);
                  var expMul = exp;
                  if (theDim) theDim = theDim.mul(exp);
                  theMag = Math.pow(theMag, exp);
                  retUnit.assignVals({ 'magnitude_': theMag });

                  // If there is also a prefix, apply the exponent to the prefix.
                  if (pfxObj) {

                    // if the prefix base is 10 it will have an exponent.  Multiply
                    // the current prefix exponent by the exponent for the unit
                    // we're working with.  Then raise the prefix value to the level
                    // defined by the exponent.
                    if (pfxExp) {
                      expMul *= pfxObj.getExp();
                      pfxVal = Math.pow(10, expMul);
                    }
                    // If the prefix base is not 10, it won't have an exponent.
                    // At the moment I don't see any units using the prefixes
                    // that aren't base 10.   But if we get one the prefix value
                    // will be applied to the magnitude (below) if the unit does
                    // not have a conversion function, and to the conversion prefix
                    // if it does.
                  } // end if there's a prefix as well as the exponent
                } // end if there's an exponent

                // Now apply the prefix, if there is one, to the conversion
                // prefix or the magnitude
                if (pfxObj) {
                  if (retUnit.cnv_) {
                    retUnit.assignVals({ 'cnvPfx_': pfxVal });
                  } else {
                    theMag *= pfxVal;
                    retUnit.assignVals({ 'magnitude_': theMag });
                  }
                }
                // if we have a prefix and/or an exponent, add them to the unit
                // attributes - name, csCode, ciCode and print symbol
                var theCode = retUnit.csCode_;
                if (pfxObj) {
                  theName = pfxObj.getName() + theName;
                  theCode = pfxCode + theCode;
                  theCiCode = pfxObj.getCiCode() + theCiCode;
                  thePrintSymbol = pfxObj.getPrintSymbol() + thePrintSymbol;
                  retUnit.assignVals({
                    'name_': theName,
                    'csCode_': theCode,
                    'ciCode_': theCiCode,
                    'printSymbol_': thePrintSymbol
                  });
                }
                if (exp) {
                  var expStr = exp.toString();
                  retUnit.assignVals({
                    'name_': theName + '<sup>' + expStr + '</sup>',
                    'csCode_': theCode + expStr,
                    'ciCode_': theCiCode + expStr,
                    'printSymbol_': thePrintSymbol + '<sup>' + expStr + '</sup>'
                  });
                }
              } // end if an original unit was found (without prefix and/or exponent)
            } // end if we didn't get a unit for the full unit code (w/out modifiers)
          } // end if we didn't find the unit on the first try, before parsing
      return [retUnit, origString];
    } // end _makeUnit


    /**
     * This method handles unit creation when an annotation is included
     * in the unit string.  This basically isolates and retrieves the
     * annotation and then calls _makeUnit to try to get a unit from
     * any text that precedes or follows the annotation.
     *
     * @param uCode the string defining the unit
     * @param origString the original full string submitted to parseString
     * @returns the unit object found, or null if one could not be found
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     */

  }, {
    key: '_getUnitWithAnnotation',
    value: function _getUnitWithAnnotation(uCode, origString) {

      var retUnit = null;

      // Get the annotation and anything that precedes or follows it.
      var annoRet = this._getAnnoText(uCode, origString);
      var annoText = annoRet[0];
      var befAnnoText = annoRet[1];
      var aftAnnoText = annoRet[2];

      // If there's no text before or after the annotation, it's probably
      // something that should be interpreted as a 1, e.g., {KCT'U}.
      // HOWEVER, it could also be a case where someone used braces instead
      // of brackets, e.g., {degF} instead of [degF].  Check for that before
      // we assume it should be a 1.
      if (!befAnnoText && !aftAnnoText) {
        var tryBrackets = '[' + annoText.substring(1, annoText.length - 1) + ']';
        var mkUnitRet = this._makeUnit(tryBrackets, origString);

        // If we got back a unit, assign it to the returned unit, and add
        // a message to advise the user that brackets should enclose the code
        if (mkUnitRet[0]) {
          retUnit = mkUnitRet[0];
          origString = origString.replace(annoText, tryBrackets);
          this.retMsg_.push(annoText + ' is not a valid unit expression, but ' + (tryBrackets + ' is.\n') + this.vcMsgStart_ + tryBrackets + this.vcMsgEnd_);
        }
        // Otherwise assume that this should be interpreted as a 1
        else {
            uCode = 1;
            if (this.bracesMsg_) {
              var dup = false;
              for (var r = 0; !dup && r < this.retMsg_.length; r++) {
                dup = this.retMsg_[r] === this.bracesMsg_;
              }
              if (!dup) this.retMsg_.push(this.bracesMsg_);
            }
            retUnit = 1;
          }
      } // end if it's only an annotation

      else {
          // if there's text before and no text after, assume the text before
          // the annotation is the unit code (with an annotation following it).
          // Call _makeUnit for the text before the annotation.
          if (befAnnoText && !aftAnnoText) {
            // make sure that what's before the annoText is not a number, e.g.,
            // /100{cells}.  But f it is a number, just set the return unit to
            // the number.
            if (intUtils_.isNumericString(befAnnoText)) {
              retUnit = befAnnoText;
            }
            // Otherwise try to find a unit
            else {
                var _mkUnitRet = this._makeUnit(befAnnoText, origString);

                // if a unit was returned
                if (_mkUnitRet[0]) {
                  retUnit = _mkUnitRet[0];
                  retUnit.csCode_ += annoText;
                  origString = _mkUnitRet[1];
                }
                // Otherwise add a not found message
                else {
                    this.retMsg_.push('Unable to find a unit for ' + befAnnoText + ' that ' + ('precedes the annotation ' + annoText + '.'));
                  }
              }
          }
          // else if there's only text after the annotation, try for a unit
          // from the after text and assume the user put the annotation in
          // the wrong place (and tell them)
          else if (!befAnnoText && aftAnnoText) {

              // Again, test for a number and if it is a number, set the return
              // unit to the number.
              if (intUtils_.isNumericString(aftAnnoText)) {
                retUnit = aftAnnoText + annoText;
                this.retMsg_.push(('The annotation ' + annoText + ' before the ')(_templateObject, aftAnnoText) + this.vcMsgStart_ + retUnit + this.vcMsgEnd_);
              } else {
                var _mkUnitRet2 = this._makeUnit(aftAnnoText, origString);
                if (_mkUnitRet2[0]) {
                  retUnit = _mkUnitRet2[0];
                  retUnit.csCode_ += annoText;
                  origString = retUnit.csCode_;
                  this.retMsg_.push('The annotation ' + annoText + ' before the unit ' + 'code is invalid.\n' + this.vcMsgStart_ + retUnit.csCode_ + this.vcMsgEnd_);
                }
                // Otherwise add a not found message
                else {
                    this.retMsg_.push('Unable to find a unit for ' + befAnnoText + ' that ' + ('follows the annotation ' + annoText + '.'));
                  }
              }
            }
            // else it's got text before AND after the annotation.  Now what?
            // For now this is an error.  This may be a case of a missing
            // operator but that is not handled yet.
            else {
                this.retMsg_.push('Unable to find a unit for ' + befAnnoText + annoText + (aftAnnoText + '.\nWe are not sure how to interpret text both before ') + 'and after the annotation.  Sorry');
              }
        } // else if there's text before/and or after the annotation

      return [retUnit, origString];
    } // end _getUnitWithAnnotations


    /**
     * Performs unit arithmetic for the units in the units array.  That array
     * contains units/numbers and the operators (division or multiplication) to
     * be performed on each unit/unit or unit/number pair in the array.  This
     * should only be called from within this class (or by test code).
     *
     * @params uArray the array that contains the units, numbers and operators
     *  derived from the unit string passed in to parseString
     * @param origString the original string to be parsed; used to provide
     *  context for messages
     * @returns a single unit object that is the result of the unit arithmetic
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     */

  }, {
    key: '_performUnitArithmetic',
    value: function _performUnitArithmetic(uArray, origString) {

      var finalUnit = uArray[0]['un'];
      var uLen = uArray.length;
      var endProcessing = false;
      // Perform the arithmetic for the units, starting with the first 2 units.
      // We only need to do the arithmetic if we have more than one unit.
      for (var u2 = 1; u2 < uLen && !endProcessing; u2++) {
        var nextUnit = uArray[u2]['un'];
        if (intUtils_.isNumericString(nextUnit)) {
          nextUnit = Number(nextUnit);
        }
        if (nextUnit === null || typeof nextUnit !== 'number' && !nextUnit.getProperty) {
          var msgString = 'Unit string (' + origString + ') contains unrecognized ' + 'element';
          if (nextUnit) {
            msgString += ' (' + this.openEmph_ + nextUnit.toString() + (this.closeEmph_ + ')');
          }
          msgString += '; could not parse full string.  Sorry';
          this.retMsg_.push(msgString);
          endProcessing = true;
        } else {
          try {
            // Is the operation division?
            var thisOp = uArray[u2]['op'];
            var isDiv = thisOp === '/';

            // Perform the operation based on the type(s) of the operands

            // A.  nextUnit is a unit object:
            if (typeof nextUnit !== 'number') {

              // both are unit objects
              if (typeof finalUnit !== 'number') {
                isDiv ? finalUnit = finalUnit.divide(nextUnit) : finalUnit = finalUnit.multiplyThese(nextUnit);
              }
              // finalUnit is a number; nextUnit is a unit object
              else {
                  var nMag = nextUnit.getProperty('magnitude_');
                  isDiv ? nMag = finalUnit / nMag : nMag *= finalUnit;
                  var uString = finalUnit.toString();
                  // if the original string was something like /xyz, the string was
                  // processed as if it was 1/xyz, to make sure the unit arithmetic
                  // is performed correctly.   Remove it from the string used to
                  // create the name, as it is no longer needed.  Note that this
                  // does not happen if the string is something like 7/xyz.
                  if (u2 === 1 && isDiv && finalUnit === 1 && origString[0] === '/') {
                    uString = '';
                  }
                  var theName = uString + thisOp + nextUnit.getProperty('name_');

                  var theCode = uString + thisOp + nextUnit.getProperty('csCode_');
                  var ciCode = uString + thisOp + nextUnit.getProperty('ciCode_');
                  var printSym = uString + thisOp + nextUnit.getProperty('printSymbol_');
                  var theDim = nextUnit.getProperty('dim_');
                  if (isDiv && theDim) {
                    theDim = theDim.minus();
                  }
                  finalUnit = nextUnit;
                  finalUnit.assignVals({ 'csCode_': theCode,
                    'ciCode_': ciCode,
                    'name_': theName,
                    'printSymbol_': printSym,
                    'dim_': theDim,
                    'magnitude_': nMag });
                }
            } // end if nextUnit is not a number

            // B.  nextUnit is a number
            else {
                // nextUnit is a number; finalUnit is a unit object
                if (typeof finalUnit !== 'number') {
                  var fMag = finalUnit.getProperty('magnitude_');
                  isDiv ? fMag /= nextUnit : fMag *= nextUnit;
                  var _theName = finalUnit.getProperty('name_') + thisOp + nextUnit.toString();
                  var _theCode = finalUnit.getProperty('csCode_') + thisOp + nextUnit.toString();
                  finalUnit.assignVals({ 'csCode_': _theCode,
                    'name_': _theName,
                    'magnitude_': fMag });
                }
                // both are numbers
                else {
                    isDiv ? finalUnit /= nextUnit : finalUnit *= nextUnit;
                  }
              } // end if nextUnit is a number
          } catch (err) {
            this.retMsg_.unshift(err.message);
            endProcessing = true;
            finalUnit = null;
          }
        } // end if we have another valid unit/number to process
      } // end do for each unit after the first one
      return finalUnit;
    } // end _performUnitArithmetic


    /**
     * This tests a string to see if it starts with characters and ends with
     * digits.  This is used to test for an exponent on a UCUM code (or what
     * we think might be a UCUM code).  This is broken out to a separate
     * function so that the regular expression can be verified to provide the
     * results we expect, in case someone changes it.  (Per Paul Lynch)
     * See "Test _isCodeWithExponent method" in testUnitString.spec.js
     *
     * This particular regex has been tweaked several times.  This one
     * works with the following test strings:
     * "m[H2O]-21 gives ["m[H2O]-21", "m[H2O]", "-21"]
     * "m[H2O]+21 gives ["m[H2O]+21", "m[H2O]", "+21"]
     * "m[H2O]21 gives ["m[H2O]-21", "m[H2O]", "21"]
     * "s2" gives ["s2", "s, "2"]
     * "kg" gives null
     * "m[H2O]" gives null
     * "m[H2O]23X" gives null
     *
     * @params uCode the code being tested
     * @returns an array containing: (1) the code without the exponent (or
     *  trailing number); and (2) the exponent/trailing number.  Returns null
     *  if there is no trailing number or something follows the trailing
     *  number, or if the first part is not characters.
     */

  }, {
    key: '_isCodeWithExponent',
    value: function _isCodeWithExponent(uCode) {

      var ret = [];
      var res = uCode.match(/(^[^\-\+]+?)([\-\+\d]+)$/);

      // If we got a return with an exponent, separate the exponent from the
      // unit and return both (as separate values)
      if (res && res[2] && res[2] !== "") {
        ret.push(res[1]);
        ret.push(res[2]);
      } // end if we got an exponent
      else {
          ret = null;
        }
      return ret;
    } // end _isCodeWithExponent

  }]);

  return UnitString;
}(); // end class UnitString


/**
 *  This function exists ONLY until the original UnitString constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UnitString object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UnitString object.
 */


UnitString.getInstance = function () {
  return new UnitString();
};

/*
// Perform the first request for the object, to set the getInstance method.
UnitString.getInstance();

*/


},{"./config.js":6,"./prefixTables.js":9,"./ucumInternalUtils.js":11,"./unit.js":15,"./unitTables.js":17}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class manages Hashtables that provide references to
 * defined units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var Ucum = require('./config.js').Ucum;
var UcumJsonDefs = require('./ucumJsonDefs.js').UcumJsonDefs;
var fs = require('fs');

var UnitTables = exports.UnitTables = function () {

  /**
   * Constructor.  This creates the empty unit tables (hashes) once. After the
   * tables are created, it redefines this constructor to throw an error
   * stating that the constructor is no longer available and that the
   * getInstance function must be used.   Here's a description of the first
   * and then all subsequent calls to this constructor.
   *
   * First call to constructor:
   * 1. creates  OBJECT1
   * 2. initializes attributes of OBJECT1
   * 3. stores reference to OBJECT1.prototype in holdthis local variable
   * 4. redefines OBJECT1 as a function that throws an error
   * 5. defines the getInstance function (which is also defined outside of
   *    the class definition - see below).
   *
   * All subsequent calls to constructor:
   * 1. throw error message referring to getInstance
   * 2. call getInstance, returns this - which is OBJECT1.
   */
  function UnitTables() {
    _classCallCheck(this, UnitTables);

    /**
     * Tracks units by name
     * @type hash - key is the name;
     *              value is an array of references to the Unit objects
     *              with the name.  More than one unit may have the same
     *              name, e.g., "second", which is shared by the base unit
     *              with the code = "s" and the unit with code = "'".
     */
    this.unitNames_ = {};

    /**
     * Tracks units by code using case-sensitive version.
     *
     * @type hash - key is the code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitCodes_ = {};

    /**
     * Tracks units by code using an uppercase version, e.g., MG instead of
     * mg.  Searched if the code is not found in the unitCodes_ table.
     *
     * @type hash - key is the uppercase version of code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitUcCodes_ = {};

    /**
     * Tracks units by code using an lowercase version, e.g., [ph] instead of
     * [pH].  Searched if the code is not found in the unitCodes_ table.
     *
     * @type hash - key is the lowercase version of code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitLcCodes_ = {};

    /**
     * Keeps track of the order in which units are defined.  The order is
     * important because unit definitions build on previous definitions.
     *
     * @type {Array}
     */
    this.codeOrder_ = [];

    /**
     * Tracks units by unit strings, e.g., cm-1
     *
     * @type hash - key is the unit string
     *              value is an array of unit objects with that ciUnitString.
     */
    this.unitStrings_ = {};

    /**
     * Tracks units by Dimension vector
     *
     * @type hash - key is the dimension vector (not the object, just the
     *              vector);
     *              value is an array of references to the Unit objects
     *              with that vector.  More than one unit may have the same
     *              unit vector, and this can be used to provide a list
     *              of commensurable units.
     */
    this.unitDimensions_ = {};

    /**
     * Maps synonyms to units.   Not built until first requested.
     *
     * @type hash - key is the synonym
     *              value is an array of references to Unit objects that
     *              include that synonym.
     */
    this.unitSynonyms_ = {};

    // Make this a singleton - from mrme44 May 18 comment on
    // on GitHub Gist page of SanderLi/Singleton.js.  Modified
    // for this class.

    var holdThis = UnitTables.prototype;
    UnitTables = function UnitTables() {
      throw new Error("UnitTables is a Singleton.  " + 'Use UnitTables.getInstance() instead.');
    };
    if (exports) exports.UnitTables = UnitTables;
    UnitTables.prototype = holdThis;
    var self = this;
    UnitTables.getInstance = function () {
      return self;
    };
  }

  /**
   * Provides the number of unit objects written to the tables, using the
   * codes table since codes must be unique.
   *
   * @returns count of the number of unit objects in the unitCodes_ table.
   */


  _createClass(UnitTables, [{
    key: 'unitsCount',
    value: function unitsCount() {
      return Object.keys(this.unitCodes_).length;
    }

    /**
     * Adds a Unit object to the tables.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws passes on an error if one is thrown by the called functions for
     *  a problem with the unit code or unit name
     */

  }, {
    key: 'addUnit',
    value: function addUnit(theUnit) {

      var uName = theUnit['name_'];
      if (uName) {
        this.addUnitName(theUnit);
      }

      this.addUnitCode(theUnit);
      this.addUnitString(theUnit);

      try {
        if (theUnit['dim_'].getProperty('dimVec_')) this.addUnitDimension(theUnit);
      } catch (err) {
        // do nothing - throws error if the property is null
        // and that's OK here.
      }
    } // end addUnit


    /**
     * Adds a Unit object to the unitNames_ table.  More than one unit
     * can have the same name, e.g., the two units with the name "second",
     * where the code for one of them is 's' and the code for the other is
     * "'".  Because of this, an array of unit objects is stored for the
     * name.  In most cases it will be an array of one object, but this
     * clarifies that there may be more than one.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if the unit has no name
     */

  }, {
    key: 'addUnitName',
    value: function addUnitName(theUnit) {

      var uName = theUnit['name_'];

      if (uName) {
        if (this.unitNames_[uName]) this.unitNames_[uName].push(theUnit);else this.unitNames_[uName] = [theUnit];
      } else throw new Error('UnitTables.addUnitName called for a unit with no name.  ' + ('Unit code = ' + theUnit['csCode_'] + '.'));
    } // end addUnitName


    /**
     * Adds a Unit object to the unitCodes_, unitUcCodes_, unitLcCodes_ and
     * codeOrder_ tables.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if theunitCodes_ table already contains a unit with the code
     */

  }, {
    key: 'addUnitCode',
    value: function addUnitCode(theUnit) {

      var uCode = theUnit['csCode_'];
      if (uCode) {

        var upCode = uCode.toUpperCase();
        var downCode = uCode.toLowerCase();

        if (this.unitCodes_[uCode]) throw new Error('UnitTables.addUnitCode called, already contains entry for ' + ('unit with code = ' + uCode));else {
          this.unitCodes_[uCode] = theUnit;
          this.unitUcCodes_[upCode] = theUnit;
          this.unitLcCodes_[downCode] = theUnit;
          this.codeOrder_.push(uCode);
        }
      } else throw new Error('UnitAtomsTable.addUnitCode called for unit that has ' + 'no code.');
    } // end addUnitCode


    /**
     * Adds a unit object to the unitStrings_ table.  More than one unit
     * can have the same string, so an array of unit objects is stored
     * for the string.  The unit string is the string that creates a non-base
     * unit, e.g., a Newton has a unit code of N, a name of Newton, and a
     * unitString of kg.m/s2.
     *
     * If the unit has no string, nothing is stored and no error is reported.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     */

  }, {
    key: 'addUnitString',
    value: function addUnitString(theUnit) {

      var uString = null;
      if (Ucum.caseSensitive_ == true) uString = theUnit['csUnitString_'];else uString = theUnit['ciUnitString_'];

      if (uString) {
        var uEntry = { mag: theUnit['baseFactorStr_'], unit: theUnit };
        if (this.unitStrings_[uString]) this.unitStrings_[uString].push(uEntry);else this.unitStrings_[uString] = [uEntry];
      }
    } // end addUnitString


    /**
     * Adds a Unit object to the unitDimensions_ table.  More than one unit
     * can have the same dimension (commensurable units have the same dimension).
     * Because of this, an array of unit objects is stored for the
     * dimension.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if the unit has no dimension
     */

  }, {
    key: 'addUnitDimension',
    value: function addUnitDimension(theUnit) {

      var uDim = theUnit['dim_'].getProperty('dimVec_');

      if (uDim) {
        if (this.unitDimensions_[uDim]) this.unitDimensions_[uDim].push(theUnit);else this.unitDimensions_[uDim] = [theUnit];
      } else throw new Error('UnitTables.addUnitDimension called for a unit with no dimension.  ' + ('Unit code = ' + theUnit['csCode_'] + '.'));
    } // end addUnitDimension


    /**
     * Builds the unitSynonyms_ table. This is called the first time the
     * getUnitsBySynonym method is called.  The table/hash contains each word
     * (once) from each synonym as well as each word from each unit name.
     *
     * Hash keys are the words.  Hash values are an array of unit codes for
     * each unit that has that word in its synonyms or name.
     *
     * @returns nothing
     */

  }, {
    key: 'buildUnitSynonyms',
    value: function buildUnitSynonyms() {

      for (var code in this.unitCodes_) {
        var theUnit = this.unitCodes_[code];
        var uSyns = theUnit.synonyms_;

        // If the current unit has synonyms, process each synonym (often multiples)
        if (uSyns) {
          var synsAry = uSyns.split(';');
          if (synsAry[0] !== '') {
            var aLen = synsAry.length;
            for (var a = 0; a < aLen; a++) {
              var theSyn = synsAry[a].trim();

              // call addSynonymCodes to process each word in the
              // synonym, e.g., "British fluid ounces"
              this.addSynonymCodes(code, theSyn);
            } // end do for each synonym
          } // end if the current unit has a non-null synonym attribute
        } // end if the unit has any synonyms

        // Now call addSynonymCodes to process each word in the unit's name
        this.addSynonymCodes(code, theUnit.name_);
      } // end do for each unit
    } // end buildUnitSynonyms


    /**
     * Adds unit code entries to the synonyms table for a string containing
     * one or more words to be considered as synonyms.
     *
     * @param theCode the unit code to be connected to the synonyms
     * @param theSynonyms a string containing one or more words to be
     *  considered synonyms (and thus to be added to the unitSynonyms hash).
     */

  }, {
    key: 'addSynonymCodes',
    value: function addSynonymCodes(theCode, theSynonyms) {

      var words = theSynonyms.split(' ');
      var wLen = words.length;

      for (var w = 0; w < wLen; w++) {
        var word = words[w];

        // if there is already a synonyms entry for the word,
        // get the array of unit codes currently assigned to
        // the word and add the code for the current word to
        // the synonyms array if it's not already there.
        if (this.unitSynonyms_[word]) {
          var synCodes = this.unitSynonyms_[word];
          if (synCodes.indexOf(theCode) === -1) {
            this.unitSynonyms_[word].push(theCode);
          }
        }
        // else there are no synonyms entry for the word.  Create a
        // synonyms array for the word, setting it to contain the unit code.
        else {
            this.unitSynonyms_[word] = [theCode];
          }
      } // end do for each word in the synonyms being processed
    } // end addSynonymCodes


    /**
     *  Returns a unit object based on the unit's code.  Tries first on
     *  the code as passed in and then, if the unit is not found, on a
     *  lower case version of the code and then an upper case version.
     *
     *  @param uCode the code of the unit to be returned
     *  @returns the unit object or null if it is not found
     */

  }, {
    key: 'getUnitByCode',
    value: function getUnitByCode(uCode) {
      var retUnit = null;
      if (uCode) {
        retUnit = this.unitCodes_[uCode];
        if (!retUnit) {
          retUnit = this.unitLcCodes_[uCode.toLowerCase()];
          if (!retUnit) {
            retUnit = this.unitUcCodes_[uCode.toUpperCase()];
          } // if not found in unitLcCodes_
        } // if not found in unitCodes_
      } // if we got a unit code
      return retUnit;
    }

    /**
     *  Returns a array of unit objects based on the unit's name.  Usually this
     *  will be an array of one, but there may be more, since unit names are
     *  not necessarily unique.
     *
     *  @param uName the name of the unit to be returned.  If more than one
     *  unit has the same name and you only want one specific unit, append the
     *  csCode of the unit you want to the end of the name, separated by the
     *  Ucum.codeSep_ value, e.g., inch - [in_i] vs. inch - [in_us].
     *  @returns null if no unit was found for the specified name OR an array of
     *  unit objects with the specified name.  Normally this will be an array
     *  of one object.
     *  @throws an error if no name is provided to search on
     */

  }, {
    key: 'getUnitByName',
    value: function getUnitByName(uName) {

      if (uName === null || uName === undefined) {
        throw new Error('Unable to find unit by name because no name was provided.');
      }
      var sepPos = uName.indexOf(Ucum.codeSep_);
      var uCode = null;
      if (sepPos >= 1) {
        uCode = uName.substr(sepPos + Ucum.codeSep_.length);
        uName = uName.substr(0, sepPos);
      }
      var retUnits = this.unitNames_[uName];
      if (retUnits) {
        var uLen = retUnits.length;

        if (uCode && uLen > 1) {
          var i = 0;
          for (; retUnits[i].csCode_ !== uCode && i < uLen; i++) {}
          if (i < uLen) retUnits = [retUnits[i]];else {
            retUnits = null;
          }
        } // end if we need to find both a name and a code
      } // end if we got an array of units
      return retUnits;
    } // end getUnitByName


    /**
     *  Returns an array of unit objects with the specified unit string.
     *  The array may contain one or more unit reference objects.
     *  Or none, if no units have a matching unit string (which is not
     *  considered an error)
     *
     *  @param name the name of the unit to be returned
     *  @returns the array of unit references or null if none were found
     */

  }, {
    key: 'getUnitByString',
    value: function getUnitByString(uString) {
      var retAry = null;
      if (uString) {
        retAry = this.unitStrings_[uString];
        if (retAry === undefined) retAry = null;
      }
      return retAry;
    }

    /**
     *  Returns a array of unit objects based on the unit's dimension vector.
     *
     *  @param uName the dimension vector of the units to be returned.
     *
     *  @returns null if no unit was found for the specified vector OR an array of
     *  one or more unit objects with the specified vector.
     *  @throws an error if no vector is provided to search on
     *  logs an error to the console if no unit is found
     */

  }, {
    key: 'getUnitsByDimension',
    value: function getUnitsByDimension(uDim) {

      var unitsArray = null;
      if (uDim === null || uDim === undefined) {
        throw new Error('Unable to find unit by because no dimension ' + 'vector was provided.');
      }

      unitsArray = this.unitDimensions_[uDim];
      if (unitsArray === undefined || unitsArray === null) {
        console.log('Unable to find unit with dimension = ' + uDim);
      }

      return unitsArray;
    } // end getUnitsByDimension


    /**
     *  Returns a array of unit objects that include the specified synonym.
     *
     *  @param uSyn the synonym of the units to be returned.
     *
     *  @returns an object with two of the following three elements:
     *   'status' will be error, failed or succeeded
     *   'msg' will be included for returns with status = error or failed and
     *     will explain why the request did not return any units
     *   'units' any array of unit objects with the specified synonym will be
     *     returned for requests with status = succeeded
     */

  }, {
    key: 'getUnitBySynonym',
    value: function getUnitBySynonym(uSyn) {

      var retObj = {};
      var unitsArray = [];

      try {
        if (uSyn === null || uSyn === undefined) {
          retObj['status'] = 'error';
          throw new Error('Unable to find unit by synonym because no synonym ' + 'was provided.');
        }
        // If this is the first request for a unit by synonym, build the hash map
        if (Object.keys(this.unitSynonyms_).length === 0) {
          this.buildUnitSynonyms();
        }
        var foundCodes = [];
        foundCodes = this.unitSynonyms_[uSyn];
        if (foundCodes) {
          retObj['status'] = 'succeeded';
          var fLen = foundCodes.length;
          for (var f = 0; f < fLen; f++) {
            unitsArray.push(this.unitCodes_[foundCodes[f]]);
          }
          retObj['units'] = unitsArray;
        }
        if (unitsArray.length === 0) {
          retObj['status'] = 'failed';
          retObj['msg'] = 'Unable to find any units with synonym = ' + uSyn;
        }
      } catch (err) {
        retObj['msg'] = err.message;
      }
      return retObj;
    } // end getUnitBySynonym


    /**
     * Gets a list of all unit names in the Unit tables
     *
     * @returns an array of the unit names
     */

  }, {
    key: 'getAllUnitNames',
    value: function getAllUnitNames() {
      return Object.keys(this.unitNames_);
    } // end getAllUnitNames


    /**
     * Gets a list of all unit names in the tables.  Where more than one
     * unit has the same name, the unit code, in parentheses, is appended
     * to the end of the name.
     *
     * @returns {Array}
     */

  }, {
    key: 'getUnitNamesList',
    value: function getUnitNamesList() {
      var nameList = [];
      var codes = Object.keys(this.unitCodes_);
      codes.sort(this.compareCodes);
      var uLen = codes.length;
      for (var i = 0; i < uLen; i++) {
        nameList[i] = codes[i] + Ucum.codeSep_ + this.unitCodes_[codes[i]].name_;
      } // end do for each code
      return nameList;
    }

    /**
     * This provides a sort function for unit codes so that sorting ignores
     * square brackets and case.
     *
     * @param a first value
     * @param b second value
     * @returns -1 if a is should fall before b; otherwise 1.
     */

  }, {
    key: 'compareCodes',
    value: function compareCodes(a, b) {
      a = a.replace(/[\[\]]/g, '');
      a = a.toLowerCase();
      b = b.replace(/[\[\]]/g, '');
      b = b.toLowerCase();
      return a < b ? -1 : 1;
    }

    /**
     * Gets a list of all unit codes in the Unit tables
     *
     * @returns an array of the unit names
     */

  }, {
    key: 'getAllUnitCodes',
    value: function getAllUnitCodes() {
      return Object.keys(this.unitCodes_);
    } // end getAllUnitNames


    /**
     * This is used to get all unit objects.  Currently it is used
     * to get the objects to write to the json ucum definitions file
     * that is used to provide prefix and unit definition objects for
     * conversions and validations.
     *
     * @returns an array containing all unit objects, ordered by definition
     * order
     */

  }, {
    key: 'allUnitsByDef',
    value: function allUnitsByDef() {

      var unitsList = [];
      var uLen = this.codeOrder_.length;
      for (var u = 0; u < uLen; u++) {
        unitsList.push(this.getUnitByCode(this.codeOrder_[u]));
      }
      return unitsList;
    } // end allUnitsByDef


    /**
     * This is used to get all unit objects, ordered by unit name.  Currently it
     * is used to create a csv list of all units.
     * @param sep separator character (or string) to be used to separate each
     *  column in the output.  Optional, defaults to '|' if not specified.
     *  (Used to use ; but the synonyms use that extensively).  Don't use a
     *  comma or any other punctuation found in the output data.
     * @returns a buffer containing all unit objects, ordered by name
     * order
     */

  }, {
    key: 'allUnitsByName',
    value: function allUnitsByName(cols, sep) {
      if (sep === undefined || sep === null) sep = '|';
      var unitBuff = '';
      var unitsList = this.getAllUnitNames();
      var uLen = unitsList.length;
      var cLen = cols.length;
      for (var i = 0; i < uLen; i++) {
        var nameRecs = this.getUnitByName(unitsList[i]);
        for (var u = 0; u < nameRecs.length; u++) {
          var rec = nameRecs[u];
          for (var c = 0; c < cLen; c++) {
            if (c > 0) unitBuff += sep;
            if (cols[c] === 'dim_') {
              if (rec.dim_ !== null && rec.dim_ !== undefined && rec.dim_.dimVec_ instanceof Array) unitBuff += '[' + rec.dim_.dimVec_.join(',') + ']';else unitBuff += '';
            } else {
              var cbuf = rec[cols[c]];
              if (typeof cbuf === 'string') unitBuff += cbuf.replace(/[\n\r]/g, ' ');else unitBuff += cbuf;
            }
          } // end do for each column requested
          unitBuff += '\r\n';
        } // end do for each unit in the unit names array
      }
      return unitBuff;
    } // end allUnitsByName


    /**
     * This creates a list of all units in the tables.  It uses the byCode
     * table, and uses the codeOrder_ array to determine the order in which
     * the units are listed.
     *
     * @param doLong boolean indicating how much to output.  If true, all data
     *  from the unit objects is included.   If false, only a few major values
     *  are included.
     * @param sep separator character (or string) to be used to separate each
     *  column in the output.  Optional, defaults to '|' if not specified.
     *  (Used to use ; but the synonyms use that extensively).
     * @returns {string} buffer containing all the listings
     */

  }, {
    key: 'printUnits',
    value: function printUnits(doLong, sep) {
      if (doLong === undefined) doLong = false;
      if (sep === undefined) sep = '|';
      var codeList = '';
      var uLen = this.codeOrder_.length;
      var unitString = 'csCode' + sep;
      if (doLong) {
        unitString += 'ciCode' + sep;
      }
      unitString += 'name' + sep;
      if (doLong) unitString += 'isBase' + sep;
      unitString += 'magnitude' + sep + 'dimension' + sep + 'from unit(s)' + sep + 'value' + sep + 'function' + sep;
      if (doLong) unitString += 'property' + sep + 'printSymbol' + sep + 'synonyms' + sep + 'source' + sep + 'class' + sep + 'isMetric' + sep + 'variable' + sep + 'isSpecial' + sep + 'isAbitrary' + sep;
      unitString += 'comment';
      codeList = unitString + '\n';

      for (var u = 0; u < uLen; u++) {
        var curUnit = this.getUnitByCode(this.codeOrder_[u]);
        unitString = this.codeOrder_[u] + sep;
        if (doLong) {
          unitString += curUnit.getProperty('ciCode_') + sep;
        }
        unitString += curUnit.getProperty('name_') + sep;
        if (doLong) {
          if (curUnit.getProperty('isBase_')) unitString += 'true' + sep;else unitString += 'false' + sep;
        }
        unitString += curUnit.getProperty('magnitude_') + sep;
        var curDim = curUnit.getProperty('dim_');
        if (curDim) {
          unitString += curDim.dimVec_ + sep;
        } else {
          unitString += 'null' + sep;
        }
        if (curUnit.csUnitString_) unitString += curUnit.csUnitString_ + sep + curUnit.baseFactor_ + sep;else unitString += 'null' + sep + 'null' + sep;

        if (curUnit.cnv_) unitString += curUnit.cnv_ + sep;else unitString += 'null' + sep;

        if (doLong) {
          unitString += curUnit.getProperty('property_') + sep + curUnit.getProperty('printSymbol_') + sep + curUnit.getProperty('synonyms_') + sep + curUnit.getProperty('source_') + sep + curUnit.getProperty('class_') + sep + curUnit.getProperty('isMetric_') + sep + curUnit.getProperty('variable_') + sep + curUnit.getProperty('isSpecial_') + sep + curUnit.getProperty('isArbitrary_') + sep;
        }
        if (curUnit.defError_) unitString += 'problem parsing this one, deferred to later.';
        codeList += unitString + '\n';
      }
      return codeList;
    }

    /**
     * This creates a list of the synonyms in the unitSynonyms hash.  It writes
     * it in synonym order and in csv format, and includes the synonym, the number
     * of units for the synonym, and the list of unit codes for the synonym.
     * It uses | as a separator rather than a comma, to keep from interfering
     * with the JSON output for the unit code arrays kept for each synonym.
     *
     * @returns outputs to a file named "SynonymsList.txt'
     */

  }, {
    key: 'printSynonyms',
    value: function printSynonyms() {
      var sList = 'synonym|unit count|unit codes\n';
      var sKeys = Object.keys(this.unitSynonyms_).sort();
      var sLen = sKeys.length;
      for (var s = 0; s < sLen; s++) {
        var sKey = sKeys[s];
        var kLen = this.unitSynonyms_[sKey].length;
        var codes = JSON.stringify(this.unitSynonyms_[sKey]);
        codes = codes.substring(1, codes.length - 2);
        sList += sKey + '|' + kLen + '|' + codes + '\n';
      }
      fs.writeFileSync('SynonymsList.txt', sList, { encoding: 'utf8', mode: 438, flag: 'w' });
    } // printSynonyms

  }]);

  return UnitTables;
}(); // end UnitTables


/**
 *  This function exists ONLY until the original UnitTables constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UnitTables object.  See more detail in the constructor
 *  description.
 *
 *  @returns the singleton UnitTables object.
 */


UnitTables.getInstance = function () {
  return new UnitTables();
};

// Perform the first request for the tables object, to get the
// getInstance method set.
UnitTables.getInstance();


},{"./config.js":6,"./ucumJsonDefs.js":12,"fs":2}]},{},[14])(14)
});