describe('multi-selector', function() {
  var elm, scope, input, cpSelect;

  beforeEach(module('cp-select'));
  beforeEach(function() {
    jasmine.clock().install();
  });

  beforeEach(
    inject(function($rootScope, $compile, $filter) {
      elm = angular.element(
        '<div style="margin:200px">' +
          '<cp-select placeholder="Select a state" ng-model="model" collection="collection"></cp-select>' +
          '<div>{{model}}</div>' +
          '</div>'
      );

      $('body').append(elm);

      scope = $rootScope.$new();
      // scope.collection = ["a", 'b', "c", "d", "e", "f", "g", "h", "i", "j"];

      scope.collection = [
        {
          value: '',
          key: '',
        },
        {
          value: 'Alabama',
          key: 'AL',
        },
        {
          value: 'Alaska',
          key: 'AK',
        },
        {
          value: 'American Samoa',
          key: 'AS',
        },
        {
          value: 'Arizona',
          key: 'AZ',
        },
        {
          value: 'Arkansas',
          key: 'AR',
        },
        {
          value: 'California',
          key: 'CA',
        },
        {
          value: 'Colorado',
          key: 'CO',
        },
        {
          value: 'Connecticut',
          key: 'CT',
        },
        {
          value: 'Delaware',
          key: 'DE',
        },
        {
          value: 'District Of Columbia',
          key: 'DC',
        },
        {
          value: 'Federated States Of Micronesia',
          key: 'FM',
        },
        {
          value: 'Florida',
          key: 'FL',
        },
        {
          value: 'Georgia',
          key: 'GA',
        },
        {
          value: 'Guam',
          key: 'GU',
        },
        {
          value: 'Hawaii',
          key: 'HI',
        },
        {
          value: 'Idaho',
          key: 'ID',
        },
        {
          value: 'Illinois',
          key: 'IL',
        },
        {
          value: 'Indiana',
          key: 'IN',
        },
        {
          value: 'Iowa',
          key: 'IA',
        },
        {
          value: 'Kansas',
          key: 'KS',
        },
        {
          value: 'Kentucky',
          key: 'KY',
        },
        {
          value: 'Louisiana',
          key: 'LA',
        },
        {
          value: 'Maine',
          key: 'ME',
        },
        {
          value: 'Marshall Islands',
          key: 'MH',
        },
        {
          value: 'Maryland',
          key: 'MD',
        },
        {
          value: 'Massachusetts',
          key: 'MA',
        },
        {
          value: 'Michigan',
          key: 'MI',
        },
        {
          value: 'Minnesota',
          key: 'MN',
        },
        {
          value: 'Mississippi',
          key: 'MS',
        },
        {
          value: 'Missouri',
          key: 'MO',
        },
        {
          value: 'Montana',
          key: 'MT',
        },
        {
          value: 'Nebraska',
          key: 'NE',
        },
        {
          value: 'Nevada',
          key: 'NV',
        },
        {
          value: 'New Hampshire',
          key: 'NH',
        },
        {
          value: 'New Jersey',
          key: 'NJ',
        },
        {
          value: 'New Mexico',
          key: 'NM',
        },
        {
          value: 'New York',
          key: 'NY',
        },
        {
          value: 'North Carolina',
          key: 'NC',
        },
        {
          value: 'North Dakota',
          key: 'ND',
        },
        {
          value: 'Northern Mariana Islands',
          key: 'MP',
        },
        {
          value: 'Ohio',
          key: 'OH',
        },
        {
          value: 'Oklahoma',
          key: 'OK',
        },
        {
          value: 'Oregon',
          key: 'OR',
        },
        {
          value: 'Palau',
          key: 'PW',
        },
        {
          value: 'Pennsylvania',
          key: 'PA',
        },
        {
          value: 'Puerto Rico',
          key: 'PR',
        },
        {
          value: 'Rhode Island',
          key: 'RI',
        },
        {
          value: 'South Carolina',
          key: 'SC',
        },
        {
          value: 'South Dakota',
          key: 'SD',
        },
        {
          value: 'Tennessee',
          key: 'TN',
        },
        {
          value: 'Texas',
          key: 'TX',
        },
        {
          value: 'Utah',
          key: 'UT',
        },
        {
          value: 'Vermont',
          key: 'VT',
        },
        {
          value: 'Virgin Islands',
          key: 'VI',
        },
        {
          value: 'Virginia',
          key: 'VA',
        },
        {
          value: 'Washington',
          key: 'WA',
        },
        {
          value: 'West Virginia',
          key: 'WV',
        },
        {
          value: 'Wisconsin',
          key: 'WI',
        },
        {
          value: 'Wyoming',
          key: 'WY',
        },
      ];

      scope.model = scope.collection[20];

      $compile(elm)(scope);
      scope.$digest();
      input = elm.find('.cp-select__hidden-input');
      cpSelect = elm.find('cp-select');
    })
  );

  afterEach(function() {
    jasmine.clock().uninstall();
    scope.$broadcast('$destroy');
    //elm.remove();
  });

  it('Should boot', function() {
    expect(1).toBe(1);
  });

  it('should jump Hawaii on "h" key press', function() {
    cpSelect.click();
    input.trigger({ type: 'keydown', which: 72, keyCode: 72 }); //'h'
    input.trigger({ type: 'keydown', which: 13, keyCode: 13 }); //Enter
    expect(elm.find('.cp-select__selected').text()).toBe('Hawaii');
  });

  it("should show placeholder text, 'Select a state', when toggled to the empty string", function() {
    cpSelect.click();
    input.trigger({ type: 'keydown', which: 65, keyCode: 65 }); //'a'
    input.trigger({ type: 'keydown', which: 38, keyCode: 38 }); //Up Arrow
    input.trigger({ type: 'keydown', which: 13, keyCode: 13 }); //Enter
    expect(elm.find('.cp-select__selected').text()).toBe('Select a state');
  });
});
