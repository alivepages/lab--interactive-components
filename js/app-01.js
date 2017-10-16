var tabCurrent = 'tab1';
var tabs = document.querySelectorAll('.tabs li');
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function changeTab(evt){
    // eliminar activo
    var tab = document.querySelector('#' + tabCurrent);
    tab.classList.remove('active');
    // marcar nuevo activo
    tabCurrent = this.className;
    var tab = document.querySelector('#' + tabCurrent);
    tab.classList.add('active');
  })
}
