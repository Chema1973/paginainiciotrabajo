
$(document).ready(function () {

    // jQuery methods go here...

    // Set central image
    $('#imgHome').attr('src', dataConf.centralimage);

    // Set margin for body
    $('#theBody').css('margin', dataConf.marginbody + 'px');

    // Set central image size
    $(window).bind('resize', set_image_size);
    set_image_size();


    // Relocate Icons on resize
    $(window).bind('resize', relocate_dataIco);

    // Drawn the icons
    set_icon_place();

    $("#divSearchBoxContainer").draggable({ containment: "#imgHome" });

    $("#divParentComboBoxContainer").draggable({ containment: "#imgHome" });
    // Crear los combos con los datos
    paint_combos();

    //$("#txtPrueba").val($(window).height() + "::" + $(window).width() + "-" + $(document).height() + "::" + $(document).width());

});


/*INI::Funciones Imagen Central */

/**
 * Readjust central image to available space in navigator window
 */
function set_image_size() {

    try {
        // At the moment are only one value for margin
        var margin = parseInt(dataConf.marginbody, 10) * 2;

        // ÑAPAQUI
        // Redimensionar correctamente la imagen
        //$("#txtPrueba").val("hoal");
        //$("#txtPrueba").val("H:" + $('#imgHome').outerHeight() + " - W: " + $('#imgHome').outerWidth());
        //alert($('#imgHome').height() + " - " + $('#imgHome').width());
        $('#imgHome').height($(window).height() - margin); // less margin top and bottom
        $('#imgHome').width($(window).width() - margin); // less margin left and right
        //$('#imgHome').css("height","auto");
        // --> Esto ajusta el tamaño, pero deja la imagen ajustada a la pantalla y se expande por un lado
        // --> Lo mejor es dejar proporcionada la imagen
    }
    catch (ex)
    {
        alert_paginicio("set_image_size", ex);
    }
}


/**
 * Return central image size
 */
function get_image_size() {
    var iHeight = $('#imgHome').height();
    var iWidth = $('#imgHome').width();

    return {iHeight:iHeight,iWidth:iWidth};
}

/*FIN::Funciones Imagen Central */


/*INI::Funciones Iconos */

/*  INI::Funciones Colocación Iconos */

/**
 * Pintamos los iconos
 */
function set_icon_place() {

    for (var a = 0; a < dataIco.length; a++) {
        try {

            switch (dataIco[a].type)
            {
                case "img":
                    var iIconX = dataIco[a].coordinates.split(',')[0];
                    var iIconY = dataIco[a].coordinates.split(',')[1];

                    var sTopLeft = get_ico_position(dataIco[a]).sTopLeft;

                    $('body').append('<img id="img_' + dataIco[a].id + '" class="icoClass" src="' + dataConf.iconpath + dataIco[a].icon + '" style="' + sTopLeft + '"/>');

                    $('#img_' + dataIco[a].id).height(dataIco[a].height);
                    $('#img_' + dataIco[a].id).width(dataIco[a].width);

                    $('#img_' + dataIco[a].id).attr('onClick', get_action_click(dataIco[a]));

                    $('#img_' + dataIco[a].id).attr('onmouseover', "show_info_icon('" + dataIco[a].name + "');resize_ico_over('" + dataIco[a].id + "')"); // bigger

                    if (dataIco[a].thumbnails != "") {
                        $('#img_' + dataIco[a].id).attr('onmousemove', "move_thumbnails_img('" + dataIco[a].id + "',event)"); // regular
                        $('#img_' + dataIco[a].id).attr('onmouseout', "hide_thumbnails_img();resize_ico_out('" + dataIco[a].id + "');hide_info_icon()"); // regular
                    }
                    else {
                        $('#img_' + dataIco[a].id).attr('onmouseout', "resize_ico_out('" + dataIco[a].id + "');hide_info_icon()"); // regular
                    }
                    break;
                case "map":
                    var sCoordinates = get_map_position(dataIco[a]);

                    $('map').append('<area id="map_' + dataIco[a].id + '" shape="' + dataIco[a].icon + '" coords="' + sCoordinates + '" class="mapClass" alt="">');

                    $('#map_' + dataIco[a].id).attr('onclick', get_action_click(dataIco[a]));

                    $('#map_' + dataIco[a].id).attr('onmouseover', "show_info_icon('" + dataIco[a].name + "');show_map_border('" + dataIco[a].id + "')");
                    if (dataIco[a].thumbnails != "") {
                        $('#map_' + dataIco[a].id).attr('onmousemove', "move_thumbnails_img('" + dataIco[a].id + "',event)"); // regular
                        $('#map_' + dataIco[a].id).attr('onmouseout', "hide_info_icon();hide_div_border('" + dataIco[a].id + "');hide_thumbnails_img()");
                    }
                    else {
                        $('#map_' + dataIco[a].id).attr('onmouseout', "hide_info_icon();hide_div_border('" + dataIco[a].id + "')");
                    }
                    break;
                default:
                    alert("set_icon_place::NOTICE::dataIco.type " + dataIco[a].type + " is not defined");
                    break;
            }
        }
        catch (ex) {
            alert_paginicio("set_icon_place",ex);
        }
    }
}

/**
 * Recolocamos los iconos si ha habido redimensionamiento de la ventana
 */
function relocate_dataIco() {
    
    for (var a = 0; a < dataIco.length; a++) {
        switch(dataIco[a].type)
        {
            case "img":
                $('#img_' + dataIco[a].id).css('top', get_ico_position(dataIco[a]).iTop + 'px');
                $('#img_' + dataIco[a].id).css('left', get_ico_position(dataIco[a]).iLeft + 'px');
                break;
            case "map":
                $('#map_' + dataIco[a].id).attr('coords', get_map_position(dataIco[a]));
                break;
            default:
                alert("relocate_dataIco::NOTICE::oIco.type " + oIco.type + " is not defined");
                break;
        }
    }
}

/**
 * Devuelve la posición de un icono que tiene que tener
 * Traduce coordenadas 2000*1000 a lo que mide realmente la imagen central
 * Se corrige si con el tamaño del icono se sale fuera
 * @param {any} oIco
 */
function get_ico_position(oIco) {

    var iIcoLeft = parseInt(oIco.coordinates.split(',')[0],10);
    var iIcoTop = parseInt(oIco.coordinates.split(',')[1],10);

    var oImg = $("#img_" + oIco.id);

    var iIcoWidth = 0;
    var iIcoHeight = 0;

    if (oImg.width() == undefined)
        iIcoWidth = parseInt(oIco.width, 10);
    else
        iIcoWidth = oImg.width();

    if (oImg.height() == undefined)
        iIcoHeight = parseInt(oIco.height, 10);
    else
        iIcoHeight = oImg.height();

    var imageSize = get_image_size();

    var iTempLeft = (imageSize.iWidth * iIcoLeft) / dataConf.constimgrelwidth;
    var iTempTop = (imageSize.iHeight * iIcoTop) / dataConf.constimgrelheight;

    var margin = parseInt(dataConf.marginbody, 10);

    var iLeft = iTempLeft + margin + 1 - (iIcoWidth / 2);
    var iTop = iTempTop + margin + 1 - (iIcoHeight / 2);

    // Corrección de la posición si está fuera de la imagen central (pantalla)
    var oImgHome = $('#imgHome').position();

    if (iLeft <= oImgHome.left + (iIcoWidth / 2))
        iLeft = (iIcoWidth / 2) - (oImgHome.left/2);

    if (iTop <= oImgHome.top + (iIcoHeight / 2))
        iTop = (iIcoHeight / 2) - (oImgHome.top/2);

    if ((iLeft + (iIcoWidth/2)) >= imageSize.iWidth)
        iLeft = imageSize.iWidth - (iIcoWidth / 2) - (oImgHome.left/2);

    if ((iTop + (iIcoHeight/2)) >= imageSize.iHeight)
        iTop = imageSize.iHeight - (iIcoHeight / 2) - (oImgHome.top/2);
    
    return {iLeft:iLeft,iTop:iTop,sTopLeft:"top:" + iTop + "px;left:" + iLeft + "px;"}
}

/**
 * Devuelve la posición de un <area> que tiene que tener
 * Traduce coordenadas 2000*1000 a lo que mide realmente la imagen central
 * No se tiene en cuenta si sale de la pantalla. Las <areas> no aplican aumento, sólo muestra su "border"
 * @param {any} oIco
 */
function get_map_position(oIco) {
    // This expects four coordinates. The horizontal position of the top-left corner, 
    // the vertical position (from the top of the image) of the top-left corner, 
    // the horizontal position of the bottom-right corner and the vertical position of the bottom-right corner.

    var arrPoints = oIco.coordinates.split(',');

    var imageSize = get_image_size();

    var iMapTopLefX = (parseInt(imageSize.iWidth,10) * parseInt(arrPoints[0],10)) / dataConf.constimgrelwidth;       // Top-Left-Corner --> left or width
    var iMapTopLefY = (parseInt(imageSize.iHeight, 10) * parseInt(arrPoints[1], 10)) / dataConf.constimgrelheight;  // Top-Left-Corner --> top or height
    var iMapBotRigX = (parseInt(imageSize.iWidth, 10) * parseInt(arrPoints[2], 10)) / dataConf.constimgrelwidth;    // Bottom-Right --> left or width
    var iMapBotRigY = (parseInt(imageSize.iHeight, 10) * parseInt(arrPoints[3], 10)) / dataConf.constimgrelheight;  // Bottom-Right --> top or height

    var sNewCoordinates = iMapTopLefX + "," + iMapTopLefY + "," + iMapBotRigX + "," + iMapBotRigY;

    return sNewCoordinates;

}

/**
 * Pinta la acción que se ejecutará en el evento onclick de icono o del <area>
 * @param {any} oIco
 */
function get_action_click(oIco) {
    
    var sClick = "";

    // ÑAPA AVISO
    // REVISAR CON FUNCTION EN MAP

    //if (oIco.type == "img") {
        switch (oIco.onclick) {
            case "url":
                sClick = "window.open(\'" + oIco.action + "\')";
                break;
            case "fcn":
                sClick = oIco.action;
                break;
            default:
                alert("get_action_click::NOTICE::img::oIco.onclick " + oIco.onclick + " is not defined");
                break;
    }
    /*
    }
    else if (oIco.type = "map") {
        switch (oIco.onclick) {
            case "url":
                //sClick = oIco.action;
                sClick = "window.open(\'" + oIco.action + "\')";
                break;
            case "fcn":
                sClick = oIco.action;
                break;
            default:
                alert("get_action_click::NOTICE::map::oIco.onclick " + oIco.onclick + " is not defined");
                break;
        }
    }
    else {
        alert("get_action_click::NOTICE::oIco.type " + oIco.type + " is not defined");
    }*/

    return sClick;

}

/*  FIN::Funciones Colocación Iconos */

/*  INI::Funciones Eventos Iconos */

/**
 * Mouse Over Ico resize to bigger
 * @param {any} sId
 */
function resize_ico_over(sId) {
    resize_ico(sId, dataConf.constbigger);
}

/**
 * Mouse Out Ico resize to normal size
 * @param {any} sId
 */
function resize_ico_out(sId) {
    resize_ico(sId, 1);
}

/**
 * Redimensiona el icono a la proporción definida (1=Tamaño Normal)
 * @param {any} sId
 * @param {any} constBigger
 */
function resize_ico(sId, constBigger) {
    var oIco = get_item_array(sId)[0];

    var iIcoWidth = parseInt(oIco.width, 10);
    var iIcoHeight = parseInt(oIco.height, 10);

    $('#img_' + oIco.id).css({ "width": (iIcoWidth * constBigger), "height": (iIcoHeight * constBigger) });
    // css en una línea
    $('#img_' + oIco.id).css('top', get_ico_position(oIco).iTop + 'px');
    $('#img_' + oIco.id).css('left', get_ico_position(oIco).iLeft + 'px');
}

/**
 * Muestra el "border" del icono
 * @param {any} sId
 */
function border_ico_over(sId)
{
    border_ico(sId, "1px solid red");
}

/**
 * Oculta el "border" del icono
 * @param {any} sId
 */
function border_ico_out(sId) {
    border_ico(sId, "");
}

/**
 * Aplica "border" o no al icono
 * @param {any} sId
 * @param {any} sBorder
 */
function border_ico(sId, sBorder)
{
    $('#img_' + sId).css('border', sBorder);
}


/**
 * Mouse Over <area> to show a "false" border
 * @param {any} sId
 */
function show_map_border(sId) {

    var oIco = get_item_array(sId)[0];
    var oImgHome = $('#imgHome').position();
    var arrCoords = $('#map_' + oIco.id).attr("coords").split(',');

    var iMapTopLefX = (parseInt(arrCoords[0], 10)); // Top-Left-Corner --> left or width
    var iMapTopLefY = (parseInt(arrCoords[1], 10)); // Top-Left-Corner --> top or height
    var iMapBotRigX = (parseInt(arrCoords[2], 10)); // Bottom-Right --> left or width
    var iMapBotRigY = (parseInt(arrCoords[3], 10)); // Bottom-Right --> top or height

    $('#dvLeft').css({ "width": "1px", "position": "absolute", "display": "", "left": (iMapTopLefX + oImgHome.left) + "px", "top": (iMapTopLefY + oImgHome.top) + "px", "height": (iMapBotRigY - iMapTopLefY) + "px"});

    $('#dvTop').css({ "width": (iMapBotRigX - iMapTopLefX) + "px", "position": "absolute", "display": "", "left": (iMapTopLefX + oImgHome.left) + "px", "top": (iMapTopLefY + oImgHome.top) + "px", "height": "1px" });

    $('#dvRight').css({ "width": "1px", "position": "absolute", "display": "", "left": (iMapBotRigX + oImgHome.left) + "px", "top": (iMapTopLefY + oImgHome.top) + "px", "height": (iMapBotRigY - iMapTopLefY) + "px" });

    $('#dvBottom').css({ "width": (iMapBotRigX - iMapTopLefX) + "px", "position": "absolute", "display": "", "left": (iMapTopLefX + oImgHome.left) + "px", "top": (iMapBotRigY + oImgHome.top) + "px", "height": "1px" });
}

/*  FIN::Funciones Eventos Iconos */

/*FIN::Funciones Iconos */

/*INI:Funciones de Objetos */

/*  INI:Funciones de Objetos - Búsqueda */

/**
 * Esta función es la principal de la búsqueda
 * al pasar el ratón sobre el resultado
 * @param {any} sId
 */
function result_search_over(sId)
{
    // Resaltar la línea 
    helpfinder_line_over(sId);

    var oIco = get_item_array(sId)[0];

    if (oIco.type == "img") {
        // Aumentar tamaño del icono
        resize_ico_over(sId);
        // Mostrar los <div> como diana
        show_diana_divs(sId);
    }
    else
    {
        // map
        show_map_border(sId);
    }
}

/**
 * Esta función es la principal de la búsqueda
 * al salir el ratón del resultado
 * @param {any} sId
 */
function result_search_out(sId)
{
    // Quitar el 'resalto' a la líneacomb
    helpfinder_line_out(sId);

    var oIco = get_item_array(sId)[0];

    if (oIco.type == "img")
    {
        // Icono a tamaño normal
        resize_ico_out(sId, 1);
        // Quitar el <div> diana
        hide_div_border(sId);
    }
    else
    {
        // map
        hide_div_border();
    }
}

/**
 * Resalta la línea del resultado de la búsqueda
 * @param {any} sId
 */
function helpfinder_line_over(sId) {
    try {
        $('#divResult_' + sId).css('background-color', 'red');
    }
    catch (ex) {
        alert_paginicio("helpfinder_line_over", ex);
    }
}

/**
 * Quita el 'resalto' del resultado de la búsqueda
 * @param {any} sId
 */
function helpfinder_line_out(sId) {
    try {
        $('#divResult_' + sId).css('background-color', 'white');
    }
    catch (ex)
    {
        alert_paginicio("helpfinder_line_out", ex);
    }
}

/**
 * Muestra/Oculta el buscador de ayuda
 */
function help_finder() {
    var oDiv = $('#divSearchBoxContainer');

    if (oDiv.css('display') == 'block') {
        oDiv.css('display', 'none');
    }
    else {
        oDiv.css('display', 'block');
    }
}

/**
 * De momento no hace nada
 */
function search_keypress(evt) {
}

/**
 * Realiza la búsqueda entre los iconos
 * @param {any} evt
 */
function search_keyup(evt) {

    var sText = $('#txtSearch').val().toUpperCase();

    $('#divSearchResult').empty();

    if (sText.length > 1) {

        $('#divSearchResult').empty();

        var arrText = sText.split(' ');

        var sNameIco = "";
        var sIdIco = "";
        for (var a = 0; a < dataIco.length; a++) {
            sIcoName = dataIco[a].name.toUpperCase();
            sIdIco = dataIco[a].id;

            for (var b = 0; b < arrText.length; b++) {
                if (arrText[b] != '') {
                    if (sIcoName.indexOf(arrText[b]) != -1) {
                        // Is in the result

                        if ($('#divResult_' + sIdIco).length == 0) {
                            $('#divSearchResult').append('<div id="divResult_' + sIdIco + '" class="resultSearch">' + dataIco[a].name + '</div>');

                            $('#divResult_' + sIdIco).attr('onmouseover', "result_search_over('" + sIdIco + "');"); // bigger
                            $('#divResult_' + sIdIco).attr('onmouseout', "result_search_out('" + sIdIco + "');"); // regular
                        }
                    }

                }
            }
        }
    }

}

/*  FIN:Funciones de Objetos - Búsqueda */

/*  INI:Funciones de Objetos - Combo Help (Listado) */


/*  FIN:Funciones de Objetos - Combo Help (Listado) */

/*  INI::Funciones de Colecciones-Combos-DivContenedor */

/**
 * Crea los combos de colecciones de datos si los hubiera
 * Crea el combo de Help (Listado) como mínimo
 */
function paint_combos() {
    try {

        if (dataCombos.length > 0) {

            // Hay colección de combos
            // Se devuelven las colecciones activas
            // El <select> tiene "display:none" debido a que cuando se pintan
            // se ven en pantalla un momento y "desaparecen" (por el z-index)
            for (var a = 0; a < dataCombos.length; a++) {
                // text-overflow: ellipsis
                // --> Hace que el texto de una opción, si es muy largo, se vea sólo
                //     completo cuando se despliega y mantiene su tamaño normal
                var comboData = $("<select style='display:none;width:100%;text-overflow: ellipsis;'></select>").attr("id", "cmb" + dataCombos[a].comboid).attr("size", dataCombos[a].combosize).attr("ondblclick", "window.open(this.value)");

                //dataCombos[a].combocoleccion.sort(orderByOrdenComboData);
                // --> Ordenación por el nº de orden
                dataCombos[a].combocoleccion.sort(orderByTextComboData);
                // --> Ordenación por el texto

                $.each(dataCombos[a].combocoleccion, function (i, el) {
                    // ÑAPAVISO
                    // Intentar recuperar la colección filtrada directamente
                    // usando LINQ a otro objeto 
                    if(el.active == "Y")
                        comboData.append("<option value='" + el.value + "'>" + el.text + "</option>");
                });

                $("#theBody").append(comboData);
            }
        }

        // Un combo por defecto tiene que ser el de todos los iconos
        // los hacemos después para añadirlo en la colección de datos de combos y actúe como todos
        var objHelpCombo = { "comboid": "help", "comboname": "Ayuda", "combodescripcion": "Listado de todas las opciones", "comboactive": "Y", "combosize": 3 };

        dataCombos.push(objHelpCombo);

        var comboHelp = $("<select style='display:none;width:100%;text-overflow: ellipsis;' onmouseout='combo_help_out(this.value);' onclick='combo_help_click(this.value);' size='" + objHelpCombo.combosize + "'></select>").attr("id", "cmbhelp"); //.attr("name", "cmbhelp");
        // var comboHelp = $("<select></select>").attr("id", "cmbhelp").attr("name", "cmbhelp");
        // --> en jQuery se pueden añadir varios atributos al mismo tiempo

        dataIco.sort(orderByNameComboHelp);

        $.each(dataIco, function (i, el) {
            comboHelp.append("<option value='" + el.id + "'>" + el.name + "</option>");
        });

        $("#theBody").append(comboHelp);

    }
    catch (ex) {
        alert("Error:" + ex.message);
    }

}


/**
 * Función estandar para cualquier combo de datos definido
 * Muestra/Oculta el mismo combo (mismo icono) o cambia el combo si es otro icono
 * Ejemplo de como llamarla en "data.js" "action": "show_combo_data('utiles');",
 * @param {any} sId
 */
function show_combo_data(sId) {
    try {

        if ($("#divComboBoxResult").children("select").attr("id") == "cmb" + sId) {
            // Se llama desde el mismo ico
            combo_data();
        }
        else {
            // Es otro ico
            $("#spTitleComboBox").text(dataCombos.find(x => x.comboid == sId).comboname);
            // --> Por LINQ ponemos el texto del combo con el nombre del combo

            $("#divComboBoxResult").children("select").css("display", "none");
            // ---> El combo actual lo ocultamos
            $("#theBody").append($("#divComboBoxResult").children("select"));
            // --> Quitamos el <select> del <div> "divComboBoxResult" y lo volvemos a añadir al <body>
            $("#divComboBoxResult").append($("#cmb" + sId));
            // --> Al <div> "divComboBoxResult" le añadimos el combo seleccionado
            $("#cmb" + sId).css("display", "block");
            // ---> Mostramos el combo

            // Tenemos que modificar el tamaño del div para help y el resto
            // Usamos LINQ sobre la colección "dataCombos" y obtenemos el tamaño
            switch (dataCombos.find(x => x.comboid == sId).combosize) {
                case 1:
                    // Todos los combos menos el de Help
                    $(".divComboBox").css("height", "50px");
                    $(".divComboBoxContainer").css("height", "50px");
                    break
                case 3:
                    // Combo de Hep
                    $(".divComboBox").css("height", "80px");
                    $(".divComboBoxContainer").css("height", "80px");
                    break;
                default:
                    // Por si acaso
                    alert("show_combo_data::default::" + sId);
                    break;
            }

            if ($('#divParentComboBoxContainer').css("display") != "block") {
                $('#divParentComboBoxContainer').css("display", "block");
            }
        }
    }
    catch (ex) {
        alert(ex.message);
    }

}

/**
 * Muestra/Oculta el <div> de las colecciones de combos
 * Se le llama desde la "X" del div de combos
 * y desde el propio icono si pulsa dos veces
 */
function combo_data() {
    var oDiv = $('#divParentComboBoxContainer');

    if (oDiv.css('display') == 'block') {
        oDiv.css('display', 'none');
    }
    else {
        oDiv.css('display', 'block');
    }
}

/*      INI::Funciones Colecciones-Combos-DivContenedor - ComboHelp */

function combo_help_out(sId)
{
    var oIco = get_item_array(sId)[0];

    if (oIco.type == "img") {
        // Icono a tamaño normal
        resize_ico_out(sId, 1);
        // Quitar el <div> diana
        hide_div_border(sId);
    }
    else
    {
        // map
        hide_div_border();
    }
}

function combo_help_click(sId) {

    var oIco = get_item_array(sId)[0];

    if (oIco.type == "img") {
        // Aumentar tamaño del icono
        resize_ico_over(sId);
        // Mostrar los <div> como diana
        show_diana_divs(sId);
    }
    else {
        // map
        show_map_border(sId);
    }
}

/*      FIN::Funciones Colecciones-Combos-DivContenedor - ComboHelp */

/*  FIN::Funciones Colecciones-Combos-DivContenedor */

/*FIN:Funciones de Objetos */


/*
INI::Funciones Coordenadas del ratón a escala 2000 * 1000
*/

/**
 * Muestra/Oculta la caja de coordenadas
 */
function text_box_coordinates()
{
    if ($("#txtMouse").css("display") == "none")
    {
        $("#txtMouse").css("display", "block");
        // Aunque lo haga sobre "#imgHome" el resultado es el mismo
        $("body").mousemove(function (event) {
            get_mouse_coordinates(event);
        });
    }
    else
    {
        $("#txtMouse").css("display", "none");
        $("body").off("mousemove");
    }
    
}

/**
 * Calcula la la posición 2000 * 1000 en base a la posición del ratón
 * @param {any} event
 */
function get_mouse_coordinates(event) {

    try {

        var iPosLeft = 0;
        var iPosTop = 0;

        var iMouseLeft = event.pageX;
        var iMouseTop = event.pageY;

        var imageSize = get_image_size();

        iPosLeft = iMouseLeft - dataConf.marginbody;
        iPosTop = iMouseTop - dataConf.marginbody;

        if (iPosLeft <= 0)
            iPosLeft = 0;
        else
        {
            iPosLeft = ((dataConf.constimgrelwidth * (iMouseLeft - dataConf.marginbody)) / imageSize.iWidth);
            if (iPosLeft >= dataConf.constimgrelwidth) iPosLeft = dataConf.constimgrelwidth;
        }

        if (iPosTop <= 0)
            iPosTop = 0;
        else
        {
            iPosTop = ((dataConf.constimgrelheight * (iMouseTop - dataConf.marginbody)) / imageSize.iHeight);
            if (iPosTop >= dataConf.constimgrelheight) iPosTop = dataConf.constimgrelheight;
        }

        $("#txtMouse").val("Left:" + parseInt(iPosLeft,10) + " - Top:" + parseInt(iPosTop,10));
    }
    catch (ex) {
        alert("get_mouse_coordinates::ERROR::" + ex.message);
    }
}  

/*
FIN::Funciones Coordenadas del ratón a escala 2000 * 1000
*/


/*
INI::Funciones Info de los Iconos para sustituir "window.status"
*/

/**
 * Muestra el div con el nombre
 * @param {any} sName
 */
function show_info_icon(sName)
{
    $("#dvInfo").html("&nbsp;" + sName + "&nbsp;");
    $("#dvInfo").addClass("show");
}

/**
 * Oculta el div con el nombre
 */
function hide_info_icon()
{
    $("#dvInfo").removeClass("show");
}

/*
FIN::Funciones Info de los Iconos para sustituir "window.status"
*/


/*
INI::Funciones De miniaturas de los iconos
*/

/**
 * Muestra la miniatura del link del icono
 * @param {any} sId
 * @param {any} event
 */
function move_thumbnails_img(sId, event) {

    try {

        var oIco = get_item_array(sId)[0];

        var cteSeparation = 20;

        $('#imgThumbImage').attr("src", dataConf.thumbnailspath + oIco.thumbnails);

        var iLeft = 0;
        var iTop = 0;

        iLeft = cteSeparation + event.pageX;

        iTop = cteSeparation + event.pageY;

        $('#imgThumbImage').css({ "top": iTop + "px", "left": iLeft + "px", "position": "absolute", "z-index": "101" });

        if ((5 + $('#imgThumbImage').width() + $('#imgThumbImage').position().left) >= $(window).width()) {
            $('#imgThumbImage').css("left", (event.pageX - cteSeparation - $('#imgThumbImage').width()) + "px");
            // --> Si la miniatura se sale por la izquierda del navegador la movemos a la derecha 
        }

        if ((5 + $('#imgThumbImage').height() + $('#imgThumbImage').position().top) >= $(window).height()) {
            $('#imgThumbImage').css("top", (event.pageY - cteSeparation - $('#imgThumbImage').height()) + "px");
            // --> Si la miniatura se sale por abajo del navegador la movemos arriba
        }

        $('#imgThumbImage').fadeIn('fast');
    }
    catch (ex)
    {
        alert_paginicio("move_thumbnails_img", ex);
    }
}

/**
 * Oculta la miniatura
 */
function hide_thumbnails_img()
{
    $('#imgThumbImage').fadeOut('fast');
}

/*
FIN::Funciones De miniaturas de los iconos
*/


/* INI::Funciones Ordenación */

/**
 * Ordena todos los iconos por nombres
 * para el combo de Help (Listado)
 * @param {any} a
 * @param {any} b
 */
function orderByNameComboHelp(a, b)
{
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

/**
 * Ordena los datos de las colecciones
 * para los combos por su número de orden
 * @param {any} a
 * @param {any} b
 */
function orderByOrdenComboData(a, b) {
    if (a.orden < b.orden)
        return -1;
    if (a.orden > b.orden)
        return 1;
    return 0;
}

/**
 * Ordena por el texto del combo (Nombre)
 * OJO: Es case sensitive y primero van ordenadas las
 * mayúsculas y luego las minúsculas
 * @param {any} a
 * @param {any} b
 */
function orderByTextComboData(a, b) {
    
    if (a.text < b.text)
        return -1;
    if (a.text > b.text)
        return 1;
    return 0;
    
}

/* FIN::Funciones Ordenación */


/* INI::Funciones Utiles */
/**
 * Devuelve todo el objeto con los datos del icono en base a su "id"
 * @param {any} sId
 */
function get_item_array(sId) {

    // se podría usar "filter" en lugar de "grep":
    //  The filter function is intended to be used with html elements, and that is why it is a chainable function
    //  that returns a jQuery object and it accepts filters like ":even", ":odd" or ":visible" etc.You can't do that
    //  with the grep function, which is intended to be a utility function for arrays. 

    var item = $.grep(dataIco, function (e) {
        return e.id == sId;
    });

    return item;

    // var item = dataIco.find(x => x.id == sId);
    // return item;
    // --> Otra manera de devolver lo mismo
}

function alert_paginicio(sMethod, oEx)
{
    try
    {
        alert(sMethod + "::ERROR::" + oEx.message);
    }
    catch (ex)
    {
        alert("alert_paginicio::ERROR::" + ex.message);
    }
}

/* FIN::Funciones Utiles */

/* INI::Funciones Diana Divs */

/**
 * Muestra los divs como si fueran una diana
 * Tiene que llevar implícito que muestre el borde del icono/<area>
 * @param {any} sId
 */
function show_diana_divs(sId) {
    var oDivLeft = $("#dvLeft");
    var oDivTop = $("#dvTop");
    var oDivRight = $("#dvRight");
    var oDivBottom = $("#dvBottom");

    var oObjIco = $("#img_" + sId);

    var iIcoHeight = oObjIco.height();      //parseInt(oObjIco.style.height, 10);
    var iIcoWidth = oObjIco.width();        //parseInt(oObjIco.style.width, 10);
    var iIcoLeft = oObjIco.position().left; //parseInt(oObjIco.style.left, 10);
    var iIcoTop = oObjIco.position().top;   //parseInt(oObjIco.style.top, 10);

    border_ico_over(sId);
    // Quitamos el borde al icono

    oDivLeft.css({ "left": "0px", "top": (iIcoTop + (iIcoHeight / 2)) + "px", "height": "1px", "width": iIcoLeft + "px", "position": "absolute", "display": "" }); //.style.left = 0; // + iWidthDif;

    oDivTop.css({ "left": (iIcoLeft + (iIcoWidth / 2)) + "px", "top": "0px", "height": iIcoTop + "px", "width": "1px", "position": "absolute", "display": "" });

    oDivRight.css({ "left": (iIcoLeft + iIcoWidth + 1) + "px", "top": (iIcoTop + (iIcoHeight / 2)) + "px", "height": "1px", "width": "100%", "position": "absolute", "display": "" });
                                              
    oDivBottom.css({ "left": (iIcoLeft + (iIcoWidth / 2)) + "px", "top": (iIcoTop + iIcoHeight + 1) + "px", "height": "100%", "width": "1px", "position": "absolute", "display": "" });
    
}

/**
 * Oculta los 4 <div> que simulan ser border para las <area> 
 */
function hide_div_border(sId)
{
    border_ico_out(sId);

    $("#dvLeft").css("display", "none");
    $("#dvTop").css("display", "none");
    $("#dvRight").css("display", "none");
    $("#dvBottom").css("display", "none");
}

/* FIN::Funciones Diana Divs */

