var angular = require('angular');
var _ = require('lodash');
var template = require('./select.html');

require('./select.css');

angular.module('cp-select').directive('cpSelect', [
  '$timeout',
  function($timeout) {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        collection: '=',
        placeholder: '@',
        keyModel: '@',
        transparent: '@',
        appendText: '@',
        autosizeInput: '@',
        allowClear: '@',
        linkText: '@?', // Puts a link at the bottom of the menu with this text
        linkHref: '@?', // The url for the link
      },
      require: 'ngModel',
      template: template,
      link: function(scope, el, attr, ngModelCtrl) {
        var keyTimeout;
        var searchString = '';
        scope.placeholder = scope.placeholder || '';
        var keyModel = !_.isUndefined(attr.keyModel);
        scope.appendText = scope.appendText ? scope.appendText + ' ' : '';

        scope.showDialog = false;
        scope.selectedIndex = null;
        scope.isString = _.isString;

        ngModelCtrl.$render = function() {
          var viewValue = ngModelCtrl.$viewValue
            ? getViewValue(ngModelCtrl.$viewValue)
            : '';

          if (keyModel) {
            viewValue = getOptionFromKey(viewValue);
            viewValue = viewValue ? viewValue.value : '';
          }

          viewValue =
            _.isString(viewValue) && viewValue.length > 0
              ? viewValue
              : scope.placeholder;

          el
            .find('.cp-select__selected')
            .text(scope.appendText + '' + viewValue);
        };

        scope.updateModel = function(item) {
          if (keyModel && !!item) item = item.key;
          ngModelCtrl.$setViewValue(item);
          ngModelCtrl.$render();
          scope.closeDialog();
          setTimeout(function() {
            el.find('input').focus();
          });
        };

        scope.goToHref = function(href) {
          window.location = href;
        };

        scope.isEmpty = function() {
          return !ngModelCtrl.$viewValue;
        };

        scope.clear = function(event) {
          scope.updateModel(null);
        };

        scope.focusSelect = function() {
          el.find('.cp-select').addClass('+focus');
        };

        attr.$observe('disabled', function(value) {
          if (_.has(attr, 'ngDisabled')) {
            scope.disabled = value;
          } else {
            scope.disabled = _.has(attr, 'disabled');
          }
        });

        scope.keyDown = function(e) {
          var key = e.which;
          var item = ngModelCtrl.$viewValue;

          if (key !== 9) {
            e.preventDefault();
          }

          if (key === 13) {
            // enter key

            scope.updateModel(scope.collection[scope.selectedIndex]);
          } else if (key === 38) {
            // up key

            scope.showDialog = true;
            scope.selectedIndex = _.isNull(scope.selectedIndex)
              ? getItemIndex(item)
              : scope.selectedIndex - 1;
            if (scope.selectedIndex < 0) scope.selectedIndex = 0;
            positionDialog(scope.collection[scope.selectedIndex]);
          } else if (key === 40) {
            // down key

            scope.showDialog = true;
            scope.selectedIndex = _.isNull(scope.selectedIndex)
              ? getItemIndex(item)
              : scope.selectedIndex + 1;
            if (scope.selectedIndex > scope.collection.length - 1)
              scope.selectedIndex = scope.collection.length - 1;
            positionDialog(scope.collection[scope.selectedIndex]);
          } else if (key === 27) {
            // escape key

            scope.closeDialog();
          } else {
            // all other keys

            highlightByText(e.which);
          }
        };

        scope.toggleDialog = function() {
          var item = ngModelCtrl.$viewValue;

          if (scope.showDialog) {
            scope.showDialog = false;
            el.find('input').focus();
          } else {
            scope.selectedIndex = null;
            if (item) {
              positionDialog(item);
            }
            scope.showDialog = true;
            el.find('input').focus();
          }
        };

        scope.onBlur = function(e) {
          el.find('.cp-select').removeClass('+focus');
          scope.closeDialog();
        };

        scope.closeDialog = function(e) {
          scope.showDialog = false;
        };

        function getOptionFromKey(key) {
          return _.find(scope.collection, { key: key });
        }

        function highlightByText(charCode) {
          searchString += String.fromCharCode(charCode);
          var i = getIndexFromString(searchString);

          if (i > -1) {
            scope.selectedIndex = i;
            if (scope.showDialog) {
              positionDialog(scope.collection[scope.selectedIndex]);
            } else {
              scope.updateModel(scope.collection[scope.selectedIndex]);
            }
          }

          keyTimeout = setTimeout(function() {
            searchString = '';
          }, 1000);
        }

        function getItemIndex(item) {
          if (!item) return -1;
          var isObject = _.has(item, 'value');
          return _.findIndex(scope.collection, function(iItem) {
            return isObject ? item.key === iItem.key : item === iItem;
          });
        }

        function getIndexFromString(searchString) {
          searchString = searchString.toLowerCase();
          return _.findIndex(scope.collection, function(iItem) {
            return (
              getViewValue(iItem)
                .toLowerCase()
                .indexOf(searchString) === 0
            );
          });
        }

        function getViewValue(option) {
          return _.isString(option.value) ? option.value : option;
        }

        function positionDialog(item) {
          var i = getItemIndex(item);

          var distanceFromEnd = scope.collection.length - i;

          if (i > 5 && distanceFromEnd < 6) {
            // Bottom 5
            if (scope.collection.length < 11) {
              // Dialog doesn't have a scroll
              scope.dialogStyle = {
                top: -2 + (36 * i * -1 - 20) + 'px',
              };
            } else {
              // Dialog has a scroll
              scope.dialogStyle = {
                top: -226 - (5 - distanceFromEnd) * 36 + 'px',
              };
              setTimeout(function() {
                el.find('.cp-select__menu').scrollTop(36 * i - 180);
              });
            }
          } else if (i > 5) {
            // Middle
            scope.dialogStyle = {
              top: '-203px',
            };
            setTimeout(function() {
              el.find('.cp-select__menu').scrollTop(36 * i - 180);
            });
          } else {
            // Top 5
            scope.dialogStyle = {
              top: -2 + (36 * i * -1 - 20) + 'px',
            };
          }
        }
      },
    };
  },
]);
