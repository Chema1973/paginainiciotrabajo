var dataConf = {
    "centralimage": "HomePage_files/death_star_2.jpg",
    "marginbody":"10",
    "iconpath": "HomePage_files/img/",
    "thumbnailspath": "HomePage_files/img/thumbnails/",
    "constbigger": 1.4, // M�nimo 1.0
    "constimgrelwidth": 2000,   // Ancho relativo de la imagen. Mida lo que mida le asignamos 2000
    "constimgrelheight": 1000   // Altura relativa de la imagen. Mida lo que mida le asignamos 1000
};

var dataIco = [
        {
            "id": 1,
            "name": "Lista Links",
            "description": "Listado de todos los links",
            "type": "img",
            "coordinates": "942,685",
            "onclick": "fcn",
            "action": "show_combo_data('help');",
            "icon": "Information-icon.png",
            "titlealt": "Lista Links",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "", // Un combo no tendr� miniatura
            "extra": "",
            "active": "Y"
    },
		{
		    "id": 2,
		    "name": "Buscador",
		    "description": "Buscador de nombres",
		    "type": "img",
		    "coordinates": "970,816",
		    "onclick": "fcn",
		    "action": "help_finder();",
            "icon": "Search-icon.png",
		    "titlealt": "Help",
		    "css": "",
		    "style": "",
		    "height": "32",
            "width":"32",
		    "thumbnails": "",
		    "extra": "",
		    "active": "Y"
    }
    ,

        {
            "id": 3,
            "name": "Coordenadas",
            "description": "Muestra las coordenadas del rat&oacute;n",
            "type": "img",
            "coordinates": "355,380",
            "onclick": "fcn",
            "action": "text_box_coordinates();",
            "icon": "World-icon.png",
            "titlealt": "Coordenadas",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
    ,
		{
		    "id": 4,
		    "name": "Google",
		    "description": "Buscador de internet",
		    "type": "img",
		    "coordinates": "660,400",
		    "onclick": "url",
		    "action": "http://www.google.es",
		    "icon": "google.png",
		    "titlealt": "Google",
		    "css": "",
		    "style": "",
		    "height": "32",
		    "width": "64",
            "thumbnails": "google.png",
		    "extra": "",
		    "active": "Y"
    }
    ,
		{
		    "id": 5,
		    "name": "GMail",
		    "description": "Correo GMail",
		    "type": "img",
		    "coordinates": "587,697",
		    "onclick": "url",
		    "action": "http://mail.google.com/",
		    "icon": "Mail-Gmail-icon.png",
		    "titlealt": "GMail",
		    "css": "",
		    "style": "",
		    "height": "32",
		    "width": "32",
            "thumbnails": "gmail.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
		{
		    "id": 6,
		    "name": "Yahoo Mail",
		    "description": "Correo Yahoo",
		    "type": "img",
		    "coordinates": "587,757",
		    "onclick": "url",
		    "action": "https://login.yahoo.com/",
		    "icon": "email-yahoo-icon.png",
		    "titlealt": "Yahoo",
		    "css": "",
		    "style": "",
		    "height": "32",
		    "width": "32",
            "thumbnails": "yahoomail.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
		{
		    "id": 7,
		    "name": "Google Maps",
		    "description": "",
		    "type": "img",
		    "coordinates": "395,695",
		    "onclick": "url",
		    "action": "http://maps.google.es/?ie=UTF8&ll=40.337941,-3.854485&spn=0.019235,0.054932&t=h&z=15",
            "icon": "earth-icon.png",
		    "titlealt": "Google Maps",
		    "css": "",
		    "style": "",
		    "height": "32",
		    "width": "32",
            "thumbnails": "GoogleMapsFC.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
        {
            "id": 8,
            "name": "Traductor Idiomas",
            "description": "Google Translator",
            "type": "img",
            "coordinates": "620, 480",
            "onclick": "url",
            "action": "http://translate.google.es",
            "icon": "traductor_64.gif",
            "titlealt": "Google Translator",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "traductorgoogle.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 9,
            "name": "R.A.E.",
            "description": "Real Academia Espa&ntilde;ola",
            "type": "img",
            "coordinates": "700,480",
            "onclick": "url",
            "action": "http://www.rae.es/",
            "icon": "Dictionary-Mac-Book-icon.png",
            "titlealt": "Diccionario",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "rae.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 10,
            "name": "Wikipedia",
            "description": "Wikipedia",
            "type": "img",
            "coordinates": "528,486",
            "onclick": "url",
            "action": "https://es.wikipedia.org/wiki/Wikipedia:Portada",
            "icon": "wikipedia_64.png",
            "titlealt": "Wikipedia",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "wikipedia.png",
            "extra": "",
            "active": "Y"
    }

    ,
        {
            "id": 11,
            "name": "Distancias",
            "description": "Medir Distancias",
            "type": "img",
            "coordinates": "706,180",
            "onclick": "url",
            "action": "http://sigpac.mapa.es/fega/visor/",
            "icon": "MedirDistancias.png",
            "titlealt": "Distancias",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "MedirDistancias.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 12,
            "name": "Icon Archive",
            "description": "Icon Archive",
            "type": "img",
            "coordinates": "250,540",
            "onclick": "url",
            "action": "http://www.iconarchive.com/",
            "icon": "Misc-Misc-Box-icon.png",
            "titlealt": "Icon Archive",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "iconarchive.png",
            "extra": "",
            "active": "Y"
        }

    ,
        {
            "id": 13,
            "name": "Combo Url Programaci&oacute;n",
            "description": "Combo con Urls de Programaci&oacute;n",
            "type": "img",
            "coordinates": "176,460",
            "onclick": "fcn",
            "action": "show_combo_data('programacion');",
            "icon": "Apps-Ide-Web-icon.png",
            "titlealt": "Combo Url Programaci&oacute;n",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "", // Un combo no tendr� miniatura
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 14,
            "name": "Combo Recursos OnLine",
            "description": "Combo con recursos online",
            "type": "img",
            "coordinates": "147,534",
            "onclick": "fcn",
            "action": "show_combo_data('recursos');",
            "icon": "Windows-Run-icon.png",
            "titlealt": "Combo Recursos On Line",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "", // Un combo no tendr� miniatura
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 15,
            "name": "Aemet",
            "description": "El tiempo en Aemet",
            "type": "img",
            "coordinates": "884,429",
            "onclick": "url",
            "action": "http://www.aemet.es/es/eltiempo/prediccion/municipios/alcorcon-id28007",
            "icon": "sun-icon.png",
            "titlealt": "Aemet",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "aemet.png",
            "extra": "",
            "active": "Y"
        },
        {
            "id": 16,
            "name": "AccuWeather",
            "description": "El tiempo en AccuWeather",
            "type": "img",
            "coordinates": "930,429",
            "onclick": "url",
            "action": "https://www.accuweather.com/es/es/alcorcon/305882/weather-forecast/305882",
            "icon": "cloudiness-icon.png",
            "titlealt": "AccuWeather",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "eltiempo.png",
            "extra": "",
            "active": "Y"
        },
        {
            "id": 17,
            "name": "Weather",
            "description": "El tiempo en Weather",
            "type": "img",
            "coordinates": "884,488",
            "onclick": "url",
            "action": "https://weather.com/es-ES/tiempo/5dias/l/33fee4ebe9724cd67d2eee16e969f782fe616bdad9ce287575c622f4ef254df7",
            "icon": "thunderstorm-icon.png",
            "titlealt": "Weather",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
        ,
        {
            "id": 18,
            "name": "YouTube",
            "description": "YouTube",
            "type": "img",
            "coordinates": "118, 726",
            "onclick": "url",
            "action": "https://www.youtube.com/?hl=es&gl=ES",
            "icon": "Youtube-icon.png",
            "titlealt": "YouTube",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "youtube.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 19,
            "name": "Portadas Prensa",
            "description": "Portadas Prensa",
            "type": "img",
            "coordinates": "350, 785",
            "onclick": "url",
            "action": "http://kiosko.net/es/",
            "icon": "Newspapers-1-icon.png",
            "titlealt": "Portadas Prensa",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "portadasprensa.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 20,
            "name": "Peri&oacute;dicos OnLine",
            "description": "Combo Peri&oacute;dicos OnLine",
            "type": "img",
            "coordinates": "400, 785",
            "onclick": "fcn",
            "action": "show_combo_data('periodicos');",
            "icon": "Newspapers-2-icon.png",
            "titlealt": "Peri&oacute;dicos OnLine",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 21,
            "name": "El Mundo",
            "description": "Peri&oacute;dico El Mundo",
            "type": "img",
            "coordinates": "350, 850",
            "onclick": "url",
            "action": "http://www.elmundo.es/",
            "icon": "elmundo.jpg",
            "titlealt": "El Mundo",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "elmundo.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 22,
            "name": "Gu&iacute;a TV",
            "description": "Gu&iacute;a TV",
            "type": "img",
            "coordinates": "132, 820",
            "onclick": "url",
            "action": "http://www.elmundo.es/elmundo/television/guiatv/",
            "icon": "GuiaTV.png",
            "titlealt": "Gu&iacute;a TV",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "guiaTV.png",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 23,
            "name": "Miniaturizador",
            "description": "Miniaturas del Urls",
            "type": "img",
            "coordinates": "145, 876",
            "onclick": "url",
            "action": "https://www.thumbalizr.com/",
            "icon": "thumbalizr.png",
            "titlealt": "Miniaturizador",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "thumbalizr.png",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 24,
            "name": "Test de Velocidad",
            "description": "Test de Velocidad",
            "type": "img",
            "coordinates": "145, 635",
            "onclick": "url",
            "action": "http://www.testdevelocidad.es/",
            "icon": "Downloads-1-icon.png",
            "titlealt": "Test de Velocidad",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 25,
            "name": "Google Drive",
            "description": "Google Drive",
            "type": "img",
            "coordinates": "292, 836",
            "onclick": "url",
            "action": "https://drive.google.com/drive/my-drive",
            "icon": "Google-Drive-icon.png",
            "titlealt": "Google Drive",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 26,
            "name": "Google+",
            "description": "Google+",
            "type": "img",
            "coordinates": "530, 910",
            "onclick": "url",
            "action": "https://plus.google.com/u/0/",
            "icon": "google-plus-icon.png",
            "titlealt": "Google+",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 27,
            "name": "Skype",
            "description": "Skype",
            "type": "img",
            "coordinates": "618, 910",
            "onclick": "url",
            "action": "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1524411241&rver=7.0.6730.0&wp=MBI_SSL&wreply=https%3A%2F%2Flw.skype.com%2Flogin%2Foauth%2Fproxy%3Fclient_id%3D578134%26redirect_uri%3Dhttps%253A%252F%252Fweb.skype.com%252F%253FopenPstnPage%253Dtrue%26state%3D1292992f-95a9-4762-2d71-3480cd6d120f%26site_name%3Dlw.skype.com&lc=1033&id=293290&mkt=es-ES&psi=skype&lw=1&cobrandid=90010&client_flight=hsu%2CReservedFlight33%2CReservedFlight67",
            "icon": "skype-icon.png",
            "titlealt": "Skype",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 28,
            "name": "Linkedin",
            "description": "Linkedin",
            "type": "img",
            "coordinates": "708, 910",
            "onclick": "url",
            "action": "https://es.linkedin.com/",
            "icon": "linkedin-icon.png",
            "titlealt": "Linkedin",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 29,
            "name": "Twitter",
            "description": "Twitter",
            "type": "img",
            "coordinates": "794, 910",
            "onclick": "url",
            "action": "https://twitter.com/?lang=es",
            "icon": "twitter-icon.png",
            "titlealt": "Twitter",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 30,
            "name": "Facebook",
            "description": "Facebook",
            "type": "img",
            "coordinates": "884, 910",
            "onclick": "url",
            "action": "https://es-la.facebook.com/",
            "icon": "facebook-icon.png",
            "titlealt": "Facebook",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
    ,
        {
            "id": 31,
            "name": "Rockola",
            "description": "Rockola, radio on line",
            "type": "img",
            "coordinates": "745, 742",
            "onclick": "url",
            "action": "http://www.rockola.fm/",
            "icon": "radio-icon.png",
            "titlealt": "Rockola",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 32,
            "name": "Amazon",
            "description": "Amazon",
            "type": "img",
            "coordinates": "286, 895",
            "onclick": "url",
            "action": "https://www.amazon.es/",
            "icon": "amazon-icon2.png",
            "titlealt": "Amazon",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 33,
            "name": "Saldo Abono Transporte",
            "description": "Consulta de Saldo Abono Transporte",
            "type": "img",
            "coordinates": "220, 895",
            "onclick": "url",
            "action": "https://www.tarjetatransportepublico.es/CRTM-ABONOS/consultaSaldo.aspx",
            "icon": "public-transport-icon.png",
            "titlealt": "Saldo Abono Transporte",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 34,
            "name": "Alkor",
            "description": "Colegio Alkor",
            "type": "img",
            "coordinates": "540, 300",
            "onclick": "url",
            "action": "http://www.colegioalkor.com/",
            "icon": "Alkor.png",
            "titlealt": "Alkor",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "colealkor.png",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 35,
            "name": "Loter&iacute;as del Estado",
            "description": "Loter&iacute;as del Estado",
            "type": "img",
            "coordinates": "100, 940",
            "onclick": "url",
            "action": "https://www.loteriasyapuestas.es/es#",
            "icon": "lottery-folder-icon.png",
            "titlealt": "Loter&iacute;as del Estado",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 36,
            "name": "Radios en idiomas",
            "description": "Radios en idiomas",
            "type": "img",
            "coordinates": "825, 742",
            "onclick": "fcn",
            "action": "show_combo_data('radiosidiomas');",
            "icon": "Radio-icon2.png",
            "titlealt": "Radios en idiomas",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
	,
        {
            "id": 37,
            "name": "Mail Grupo ICA",
            "description": "Mail Grupo ICA",
            "type": "img",
            "coordinates": "1545, 315",
            "onclick": "url",
            "action": "https://outlook.office365.com/mail/",
            "icon": "Mail-icon.png",
            "titlealt": "Mail Grupo ICA",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
	,
        {
            "id": 38,
            "name": "Registro Horas",
            "description": "Registro de horas del portal del empleado",
            "type": "img",
            "coordinates": "1840, 135",
            "onclick": "url",
            "action": "https://portalempleado.grupoica.com/registro-horas",
            "icon": "Actions-player-time-icon.png",
            "titlealt": "Registro Horas",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 39,
            "name": "TimeAndExpense",
            "description": "TimeAndExpense",
            "type": "img",
            "coordinates": "1809, 260",
            "onclick": "url",
            "action": "https://timereport.nubecento.com/imputaciones",
            "icon": "Time-capsule-icon.png",
            "titlealt": "TimeAndExpense",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 40,
            "name": "Citrix",
            "description": "Citrix Aon",
            "type": "img",
            "coordinates": "1543, 226",
            "onclick": "url",
            "action": "https://citrix.aon.es",
            "icon": "citrix-receiver-icon.png",
            "titlealt": "Citrix",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 41,
            "name": "Git Elimper",
            "description": "Git Elimper",
            "type": "img",
            "coordinates": "1750, 405",
            "onclick": "url",
            "action": "https://gogs.intranet.aon.es/",
            "icon": "folder-red-git-icon.png",
            "titlealt": "Git Elimper",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 42,
            "name": "Limper Prueba",
            "description": "Limper Prueba",
            "type": "img",
            "coordinates": "1880, 470",
            "onclick": "url",
            "action": "https://www.aon.es/pruservices/aon",
            "icon": "insurance-icon.png",
            "titlealt": "Limper Prueba",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 43,
            "name": "Cursos Pendientes AON",
            "description": "Cursos Pendientes AON",
            "type": "img",
            "coordinates": "1560, 605",
            "onclick": "url",
            "action": "https://wd5.myworkday.com/aon/learning/discover/viewmore/6964690f7fd810001c749ba92ee68ceb",
            "icon": "Tutorial-icon.png",
            "titlealt": "Cursos Pendientes AON",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 44,
            "name": "Services Desk AON",
            "description": "Services Desk AON",
            "type": "img",
            "coordinates": "1885, 335",
            "onclick": "url",
            "action": "https://emadwnpmgt00004.aonnet.aon.net:8080/",
            "icon": "Apps-preferences-system-time-icon.png",
            "titlealt": "Services Desk AON",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 45,
            "name": "Beneficios Grupo ICA",
            "description": "Beneficios Grupo ICA",
            "type": "img",
            "coordinates": "1625, 60",
            "onclick": "url",
            "action": "https://grupoica.benefitsatwork.es/",
            "icon": "santa-money-icon.png",
            "titlealt": "Beneficios Grupo ICA",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 46,
            "name": "Udemy",
            "description": "Cursos Online",
            "type": "img",
            "coordinates": "413, 484",
            "onclick": "url",
            "action": "https://www.udemy.com/",
            "icon": "Courses-icon2.png",
            "titlealt": "Udemy",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 47,
            "name": "LastQuake",
            "description": "�ltimos Terremotos",
            "type": "img",
            "coordinates": "620, 230",
            "onclick": "url",
            "action": "https://www.emsc-csem.org/#2",
            "icon": "lastQuake.png",
            "titlealt": "LastQuake",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 48,
            "name": "Moovit",
            "description": "Moovit - Plan de Transporte",
            "type": "img",
            "coordinates": "790, 210",
            "onclick": "url",
			"action": "https://moovitapp.com/",
            "icon": "space-ship-3-icon.png",
            "titlealt": "Moovit",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 49,
            "name": "Volcanes",
            "description": "Volcanes Activos",
            "type": "img",
            "coordinates": "680, 270",
            "onclick": "url",
            "action": "https://volcano.si.edu/gvp_currenteruptions.cfm",
            "icon": "volcano-icon.png",
            "titlealt": "Volcanes Activos",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 50,
            "name": "Ereges Publicado",
            "description": "Ereges Publicado",
            "type": "img",
            "coordinates": "1617, 333",
            "onclick": "url",
			"action": "http://172.16.19.232/eReges.Angular7/login",
            "icon": "Judge-icon.png",
            "titlealt": "Ereges Publicado",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "N"
        },
		{
            "id": 51,
            "name": "Utilidades On Line",
            "description": "Utilidades On Line",
            "type": "img",
            "coordinates": "326, 458",
            "onclick": "fcn",
            "action": "show_combo_data('utilidades');",
            "icon": "tool-kit-icon.png",
            "titlealt": "Utilidades On Line",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } ,
        {
            "id": 52,
            "name": "Cursos On Line",
            "description": "Cursos On Line",
            "type": "img",
            "coordinates": "358, 534",
            "onclick": "fcn",
            "action": "show_combo_data('cursosonline');",
            "icon": "Courses-icon.png",
            "titlealt": "Radios en idiomas",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        },
		{
			"id": 53,
            "name": "Intranet Procesia",
            "description": "Intranet Procesia",
            "type": "img",
            "coordinates": "647, 756",
            "onclick": "url",
            "action": "https://intranet.procesia.com/#/login?redirect=%2F",
            "icon": "Categories-applications-internet-icon.png",
            "titlealt": "Intranet Procesia",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "N"
		},
		{
			"id": 54,
            "name": "Prueba P&aacute;gina Inicio",
            "description": "Prueba P&aacute;gina Inicio",
            "type": "img",
            "coordinates": "441, 153",
            "onclick": "url",
            "action": "https://epic-wiles-805f26.netlify.com/",
            "icon": "Home-Server-icon.png",
            "titlealt": "Prueba P&aacute;gina Inicio",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
			"id": 55,
            "name": "Documentaci&oacute;n eReges",
            "description": "Documentaci&oacute;n eReges",
            "type": "img",
            "coordinates": "1836, 136",
            "onclick": "url",
            "action": "https://inecospain.sharepoint.com/sites/DesarrollodeeREGES/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A09cd9bbaa56844f2a87d272cbd8644d6&at=9&CT=1579609155027&OR=OWA%2DNT&CID=da7ee843%2D9f37%2D84e8%2D7b53%2D0ff10a12a2be&RootFolder=%2Fsites%2FDesarrollodeeREGES%2FDocumentos%20compartidos%2FDocumentaci%C3%B3n%20Adicional&FolderCTID=0x012000D909797EF8180548AB7D0C896A35AB1F",
            "icon": "Folder-My-Shared-Pictures-icon.png",
            "titlealt": "Documentaci&oacute;n eReges",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "N"
		}
];

// �APAVISO - FIN Colecci�n Datos principales

//  

// Filter the icons data with "active=Yes"
dataIco = dataIco.filter(function (data) {
    return data.active == "Y";
});

// Colecci�n de combos
// Tiene que estar declarada como m�nimo
//var dataCombos = [];


var dataCombos = [
    {
        "comboid": "programacion",
        "comboname": "Url Programaci&oacute;n",
        "combodescripcion": "Url de sitios de programaci&oacute;n",
        "comboactive": "Y",
        "combosize" : 3,
        "combocoleccion": [
            {
                "text": "Stackoverflow",
                "value": "http://stackoverflow.com",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "Dotnetperls",
                "value": "http://www.dotnetperls.com",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "C-sharpcorner",
                "value": "http://www.c-sharpcorner.com",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp-examples",
                "value": "http://www.csharp-examples.net",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "Bytes",
                "value": "http://bytes.com",
                "orden": 5,
                "active": "Y"
            },
            {
                "text": "Eggheadcafe",
                "value": "http://www.eggheadcafe.com",
                "orden": 6,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp.net-tutorials",
                "value": "http://csharp.net-tutorials.com",
                "orden": 7,
                "active": "Y"
            }
            ,
            {
                "text": "Codeguru",
                "value": "http://www.codeguru.com",
                "orden": 8,
                "active": "Y"
            }
            ,
            {
                "text": "Support.microsoft",
                "value": "http://support.microsoft.com",
                "orden": 9,
                "active": "Y"
            }
            ,
            {
                "text": "Microsoft",
                "value": "http://msdn.microsoft.com",
                "orden": 10,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp-station",
                "value": "http://www.csharp-station.com",
                "orden": 11,
                "active": "Y"
            }
            ,
            {
                "text": "W3schools",
                "value": "http://www.w3schools.com",
                "orden": 12,
                "active": "Y"
            }
            ,
            {
                "text": "W3",
                "value": "http://www.w3.org",
                "orden": 13,
                "active": "Y"
            }
            ,
            {
                "text": "Forosdelweb",
                "value": "http://www.forosdelweb.com",
                "orden": 14,
                "active": "Y"
            }
            ,
            {
                "text": "Java2s",
                "value": "http://www.java2s.com",
                "orden": 15,
                "active": "Y"
            }
            ,
            {
                "text": "Javascripter",
                "value": "http://www.javascripter.net/",
                "orden": 16,
                "active": "Y"
            }
            ,
            {
                "text": "Acens",
                "value": "http://www.acens.com/",
                "orden": 17,
                "active": "Y"
            }
            ,
            {
                "text": "el Guille",
                "value": "https://www.elguille.info/",
                "orden": 18,
                "active": "Y"
            }
			//http://www.tutorialsteacher.com/webapi/create-web-api-project
        ]
    }
    ,
    {
        "comboid": "recursos",
        "comboname": "Recursos On Line",
        "combodescripcion": "Urls de recursos online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "Monitorizaci&oacute;n Internet",
                "value": "http://www.akamai.com/html/technology/dataviz1.html",
                "orden": 1,
                "active": "N"
            },
            {
                "text": "MD5 Encriptaci&oacute;n",
                "value": "http://www.cuwhois.com/herramienta-seo-md5.php",
                "orden": 2,
                "active": "N"
            }
            ,
            {
                "text": "MD5 Desencriptaci&oacute;n",
                "value": "http://md5.rednoize.com/",
                "orden": 3,
                "active": "N"
            }
            ,
            {
                "text": "Calculadora NIF",
                "value": "http://www.calcularletradni.com/",
                "orden": 4,
                "active": "N"
            }
            ,
            {
                "text": "Calculadora NIE",
                "value": "http://www.gabilos.com/textocalculadoranie.htm",
                "orden": 5,
                "active": "Y"
            }
            ,
            {
                "text": "Cod Postal",
                "value": "http://www.correos.es/comun/CodigosPostales/1010_s-CodPostal.asp",
                "orden": 6,
                "active": "Y"
            }
            ,
            {
                "text": "Generador NIF-NIE-CIF",
                "value": "http://niednicifgenerador.appspot.com/",
                "orden": 7,
                "active": "N"
            }
            ,
            {
                "text": "Generador-Validador NIF-NIE-CIF",
                "value": "http://generadordni.es/",
                "orden": 8,
                "active": "Y"
            }
            ,
            {
                "text": "Tarjetas de Cr&eacute;dito - Pruebas",
                "value": "http://modulosdepago.es/Tarjetas-de-cr%C3%A9dito-pruebas",
                "orden": 9,
                "active": "Y"
            }
            ,
            {
                "text": "Validador Cuenta Corriente",
                "value": "http://www.aplicacionesinformaticas.com/programas/gratis/ctabanco.php",
                "orden": 10,
                "active": "Y"
            }
            ,
            {
                "text": "Calcula IBAN-BIC-SWIFT",
                "value": "http://www.calculatuiban.com/",
                "orden": 11,
                "active": "Y"
            }
            ,
            {
                "text": "Convertir Epoch - Tiempo Unix",
                "value": "http://espanol.epochconverter.com/",
                "orden": 12,
                "active": "Y"
            }
            ,
            {
                "text": "Conv Json To C#",
                "value": "http://json2csharp.com/",
                "orden": 13,
                "active": "Y"
            }
            ,
            {
                "text": "Conv Json To C# - Avanzado",
                "value": "https://app.quicktype.io/",
                "orden": 14,
                "active": "Y"
            },
            {
                "text": "Format Json String",
                "value": "https://www.jsonformatter.io/",
                "orden": 15,
                "active": "Y"
                
            }
        ]
    }
    ,
    { 
        "comboid": "periodicos",
        "comboname": "Peri&oacute;dicos online",
        "combodescripcion": "Combo de peri&oacute;dicos online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "El Mundo",
                "value": "http://www.elmundo.es/",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "El Pa&iacute;s",
                "value": "http://www.elpais.com/",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "20 Minutos",
                "value": "http://www.20minutos.es/",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "Heraldo Aragon",
                "value": "http://www.heraldo.es/",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "ABC",
                "value": "http://www.abc.es",
                "orden": 5,
                "active": "Y"
            }
        ]
    }
    ,
    {
        "comboid": "radiosidiomas",
        "comboname": "Radios en Idiomas",
        "combodescripcion": "Combo de radios online en ingl&eacute;s",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "Tunein",
                "value": "https://tunein.com/radio/Learning-English-p51794/?topicId=114633337",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "BBC 4",
                "value": "https://www.bbc.co.uk/radio/player/bbc_radio_fourfm",
                "orden": 2,
                "active": "Y"
            },
            {
                "text": "La Classe Francai�e",
                "value": "https://laclassefran�aise.es/cultura-francesa/radios-francesas/",
                "orden": 4,
                "active": "Y"
            },
			{
				"text": "BBC",
				"value": "https://www.bbc.co.uk/radio/player/bbc_world_service",
				"orden": 3,
				"active": "Y"
			}
			
        ]

    },
    {
        "comboid": "utilidades",
        "comboname": "Utilidades On Line",
        "combodescripcion": "Urls de Utilidades online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "Im&aacute;genes Gratuitas",
                "value": "https://unsplash.com/",
                "orden": 1,
                "active": "Y"
            },
			{
                "text": "Generador Datos Aleatorios",
                "value": "https://www.mockaroo.com/",
                "orden": 2,
                "active": "Y"
            },
			{
                "text": "Componentes, css,...",
                "value": "https://materializecss.com/getting-started.html",
                "orden": 3,
                "active": "Y"
            },
			{
                "text": "jQuery",
                "value": "https://code.jquery.com/",
                "orden": 4,
                "active": "Y"
            },
			{
                "text": "Proyectos en la nube",
                "value": "https://zeit.co/home",
                "orden": 5,
                "active": "Y"
            },
			{
                "text": "Crear aplicaci&oacute;n React",
                "value": "https://github.com/facebook/create-react-app",
                "orden": 6,
                "active": "Y"
            },
			{
                "text": "Gr&aacute;ficos Interactivos",
                "value": "https://www.highcharts.com/",
                "orden": 7,
                "active": "Y"
            },
			{
                "text": "Librer&iacute;a Utilidades Fechas",
                "value": "https://momentjs.com/",
                "orden": 8,
                "active": "Y"
            }
		]
	},
    {
        "comboid": "cursosonline",
        "comboname": "Cursos On Line",
        "combodescripcion": "Cursos Utilidades online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
			{
                "text": "Udemy",
                "value": "https://www.udemy.com/",
                "orden": 1,
                "active": "Y"
            },
			{
                "text": "Freecodecamp",
                "value": "https://www.freecodecamp.org/",
                "orden": 2,
                "active": "Y"
            },
			{
                "text": "LibrosWeb",
                "value": "https://librosweb.es/",
                "orden": 3,
                "active": "Y"
            },
			{
                "text": "Allitebooks",
                "value": "http://www.allitebooks.com/",
                "orden": 4,
                "active": "Y"
            },
			{
                "text": "CursosMegaUp",
                "value": "https://cursosmegaup.bid/",
                "orden": 5,
                "active": "Y"
            },
			{
                "text": "Codebabes",
                "value": "https://codebabes.com/",
                "orden": 6,
                "active": "Y"
            },
			{
                "text": "Edx",
                "value": "https://www.edx.org/",
                "orden": 7,
                "active": "Y"
            }
		]
	}
];


// Filter the combos data with "comboactive=Yes"
dataCombos = dataCombos.filter(function (data) {
    return data.comboactive == "Y";
});

