# eslint-plugin-mirage

mirage 项目定制的Eslint规则

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-mirage`:

```
$ npm install eslint-plugin-mirage --save-dev
```


## Usage

Add `mirage` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": [
        "plugin:mirage/recommended"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "mirage/alias": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





