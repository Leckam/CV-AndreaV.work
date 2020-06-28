function hide_requirements_not_met() {
  var ids_to_skip = ['186040',"190254","191314","191315","191316","191317","191318","191319","191321","191320","191322","191323","191324","191325","191326","191327","192581","193734"]
  var document_id = document
    .getElementsByClassName('coursebar__close hint hint--bottom-right')[0]
    .href.match(/\/student\/activity\/(\d*?)-/)[1];

  if (ids_to_skip.includes(document_id)) {
    function hide(element){
      element.style.setProperty('display', 'none');
    }
    var result_rows = document.querySelectorAll('.assessment__resultcallout');
    result_rows.forEach(function(element) {
        hide(element);
    });
  
    document.querySelectorAll('.question__weight').forEach(function(div){hide(div);});
  }; 
};
hide_requirements_not_met();
//catchall, just in case
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',1):f()};
r(function(){
  hide_requirements_not_met();
});
