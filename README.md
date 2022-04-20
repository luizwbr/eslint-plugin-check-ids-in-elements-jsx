# eslint-plugin-check-ids-in-elements-jsx

Ensures all configured elements have IDs set

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-check-ids-in-elements-jsx`:

```
$ npm install eslint-plugin-check-ids-in-elements-jsx --save-dev
```


## Usage

Add `check-ids-in-elements` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "check-ids-in-elements"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "check-ids-in-elements-jsx/enforce-ids": 2
    }
}
```

## Supported Rules


### check-ids-in-elements

Configuration:

```json
{
    "rules": {
        "check-ids-in-elements-jsx/enforce-ids": [
             "error",
            {
                /* Specify which nodes should be forced to have IDs */
                "targetNodes": ["input", "select", "textarea","button","Bx.Input"] 
            },
        ]
    }
}
```




