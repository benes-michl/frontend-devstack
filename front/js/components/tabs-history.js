import { Tab } from 'bootstrap';

if ($('.nav-tabs--hash').length > 0) {
  // deep linking - load tab on refresh
  let url = location.href.replace(/\/$/, '');
  if (location.hash) {
    const hash = url.split('#');
    const currentTab = document.querySelector('#myTab a[href="#' + hash[1] + '"]');
    const curTab = new Tab(currentTab);
    curTab.show();
    url = location.href.replace(/\/#/, '#');
    history.replaceState(null, null, url);
    setTimeout(() => {
      window.scrollTop = 0;
    }, 400);
  }

  // change url based on selected tab
  const selectableTabList = [].slice.call(document.querySelectorAll('a[data-bs-toggle="tab"]'));
  selectableTabList.forEach((selectableTab) => {
    const selTab = new Tab(selectableTab);
    selectableTab.addEventListener('click', function () {
      var newUrl;
      const hash = selectableTab.getAttribute('href');
      if (hash == '#home-tab') {
        newUrl = url.split('#')[0];
      } else {
        newUrl = url.split('#')[0] + hash;
      }
      history.replaceState(null, null, newUrl);
    });
  });
}