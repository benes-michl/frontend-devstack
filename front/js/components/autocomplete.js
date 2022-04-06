import 'devbridge-autocomplete';

if ($('#search').length > 0) {
  var options = {
    serviceUrl: homelang_url + '/ajax/search/',     // eslint-disable-line
    groupBy: 'category',
    minChars: 3,
    paramName: 'q',
    appendTo: '.search',
    onSelect: function (suggestion) {
      window.location.href = suggestion.data.url;
    }
  };
  $('#search').autocomplete(options);
}
