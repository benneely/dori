/**
 * main.js
 *
 * js classes and procedures for the main demo interface
 */




/**
 * whole_interface
 * 
 * class to write and maintain the main div of the doirisks interface
 **/

function whole_interface(own_div_id, init_riskfactors = []) {
    // the id of the div where the interface will be placed
    this.own_div_id = own_div_id;
    
    // the left side of the interface - models
    this.modellist  =  new model_list(this);
    this.modelfinder = new model_finder(this);
    // the right side of the interface - risk factors
    this.CUIlist  =  new riskfactor_list(this);
    this.CUIfinder = new riskfactor_finder(this);
    
    // the base text of the interface
    this.base = document.createElement("div");
    var left  = document.createElement("div");
    var right = document.createElement("div");
    this.base.setAttribute("style","width:800px;overflow:hidden;");
    left.setAttribute("style", "width:400px;overflow:hidden;border:1px solid;float:left;");
    right.setAttribute("style","width:400px;overflow:hidden;border:1px solid;");
    
    var modeltitle = document.createElement('h4')
    modeltitle.appendChild(document.createTextNode("Models"));
    left.appendChild(modeltitle);
    left.appendChild(this.modellist.base);
    left.appendChild(this.modelfinder.base);
    var rftitle = document.createElement('h4')
    rftitle.appendChild(document.createTextNode("Risk Factors"));
    right.appendChild(rftitle);
    right.appendChild(this.CUIlist.base);
    right.appendChild(this.CUIfinder.base);
    
    // add a CUI
    this.fetchCUI = function (CUI, vis = true) {
        this.CUIlist.fetchCUI(CUI, vis);
    }
    
    this.fetchmodels = function () {
        this.modellist.fetchmodels(this.getInputData());
    }
    
    // returns data from risk factor inputs
    this.getInputData = function() {
        return(this.CUIlist.getInputData());
    }
    
    this.base.appendChild(left);
    this.base.appendChild(right);
    $('#'+own_div_id).append(this.base);
    
    // iterate through given risk factors and add them
    for (CUI in init_riskfactors) {
        this.fetchCUI(CUI);
    }
}



// document.ready
$(document).ready( function () {
    the_interface = new whole_interface("main", riskfactors);
});
