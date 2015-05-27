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
## Demo
http://canopytax.github.io/cp-select/
