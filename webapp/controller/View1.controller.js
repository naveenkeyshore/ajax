sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("Dev.ajax.controller.View1", {
            onInit: function () {

            },
            onPress: function(){
                var that = this;
                jQuery.ajax({
                    method:"GET",
                    url:"https://coronavirus.m.pipedream.net/",
                    success:function(data){
                        var oModel = new sap.ui.model.json.JSONModel(data);
                        oModel.setSizeLimit(data.rawData.length);
                        that.getView().setModel(oModel,"covid");                      
                    },
                    error:function(error){
                        console.log(error);
                    }

                });
            }
        });
    });
