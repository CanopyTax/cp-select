# cp-select
A consistently styled cross-browser and keyboard friendly select component

## Requirements
 - Angular 1.3
 - Lodash
 - jQuery

## Installation
1. Install through npm `npm install --save cp-select`
2. Make sure your angular app depends upon 'cp-select':
```javascript
angular.module('app', ['cp-select']);
```

## Usage
### Markup:
```html
<cp-select ng-model="model" collection="collection"></cp-select>
```

```javascript
scope.model = {
	value: "Arizona",
	key: "AZ"
};

scope.collection = [{
	"value": "Alabama",
	"key": "AL"
}, {
	"value": "Alaska",
	"key": "AK"
}, {
	"value": "American Samoa",
	"key": "AS"
}, {
	"value": "Arizona",
	"key": "AZ"
}, {
	"value": "Arkansas",
	"key": "AR"
}];

// The collection object can also be an array of strings
scope.collection = [
	"Alabama",
	"Alaska",
	"American Samoa",
	"Arizona",
	"Arkansas",
];

```
## Options
If you would like the selected model to be only the `key` attribute of the selected item, pass `key-model` as an attribute to the directive:

```html
<cp-select key-model ng-model="model" collection="collection"></cp-select>
```

## Demo
http://canopytax.github.io/cp-select/
