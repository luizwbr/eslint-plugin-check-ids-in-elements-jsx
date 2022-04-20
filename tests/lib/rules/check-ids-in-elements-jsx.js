/**
 * @fileoverview Checks that common form elements have ids
 * @author stwime
 * @author luizwbr
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/check-ids-in-elements-jsx"),

RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true,
      },
    }
  });
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("elements-have-ids", rule, {

    valid: [
        {
            code: '<button id="button1"></button>',
        },
        {
            code: '<button id="button1" />',
        },
        {
            code: '<input id="button1"></input>',
        },
        {
            code: '<div></div>',
        },
        {
            code: '<Bx.Input id="input2"></Bx.Input>'
        }
      ],

    invalid: [
        {
            code: '<button></button>',
            errors: [{
                message: "Elements should have an ID",
                type: "JSXOpeningElement"
            }]
        },
        {
            code: '<button id=""></button>',
            errors: [{
                message: "Elements should not have empty IDs",
                type: "JSXOpeningElement"
            }]
        },
        {
            code: '<Bx.Input></Bx.Input>',
            errors: [{
                message: "Elements should have an ID",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
