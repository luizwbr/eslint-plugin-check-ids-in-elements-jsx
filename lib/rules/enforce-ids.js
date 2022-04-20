/**
 * @fileoverview Checks that elements have ids
 * @author stwime
 * @author luizwbr
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Checks that elements have ids",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        const defaultTargetNodes = ["input", "select", "textarea","button"];
        let targetNodes = context.options.targetNodes;
        if (!targetNodes){
            targetNodes = defaultTargetNodes;
        }
        
        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            JSXOpeningElement(node) {
              let nodeType = node.name.name;
              if (typeof nodeType === 'undefined') {
                nodeType = `${node.name.object.name}.${node.name.property.name}` || null;
              }

              if (!targetNodes.includes(nodeType)) {
                return;
              }
              //Find "id" field
              const id = node.attributes.find(
                (attr) => attr.type === "JSXAttribute" && attr.name.name === "id"
              );
              if (!id) {
                context.report({
                  node,
                  message: "Elements should have an ID"
                });
              }
              if (id && id.value.value.length === 0){
                context.report({
                  node,
                  message: "Elements should not have empty IDs"
                });
              }
            }
          };
    }
};
