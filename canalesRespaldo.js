/* 
Guía rápida:

    'nombre': {                   (Nombre objeto/canal, no repetir entre señales debe ser único (sin espacios))
        'nombre': 'nombre'        (Nombre del canal a mostrar en botón y barra que dirige a su origen cuando esta activo)

tipos de enlaces posibles [Recordar utilizar solo enlaces https si se aloja en GitHub y solo 1 tipo por canal/señal]:

        'iframe_url': 'url'        (contenido que va dentro de un iframe (un embed directo))
        'm3u8_url': 'url'          (para enlaces ".m3u8", no listas ".m3u". Solo canales individuales)
        'yt_id': 'url'             (ID referente a un canal de Youtube [https://www.youtube.com/channel/"yt_id"]. NO REQUIERE 'fuente' DEBIDO A REDUNDANCIA)
        'yt_embed': 'url'          (se usa para 1 video directamente [https://www.youtube.com/watch?v="yt_embed"])
        'yt_playlist': 'url'       (... [https://www.youtube.com/playlist?list="yt_playlist"])

        'fuente': 'url'           ("fuente" es el enlace de origen de la señal, a modo de transparencia y libertad de abandonar la página si solo se quiere continuar con dicha señal, si se extrae una señal ya sea tipo "iframe" o "m3u8" de www.pagina-ejemplo.cl debe de ponerse www.pagina-ejemplo.cl en "fuente". Si no se obtiene señal desde el emisor oficial como tal, se utiliza el sitio del emisor sobre el de terceros (ejemplo: saque canal de una lista IPTV, por lo que pongo el sitio del canal, no la lista IPTV. Ya que eso va en el listado de canales en archivo README))
        'pais': 'nombre país'     (nombre país es en base a ISO 3166, https://flagcdn.com/en/codes.json (Recomendable en minúsculas))
        'alt_icon': 'icono bootstrap'  (este concepto de icono alternativo se usa mayoritariamente para señales que no pertenece a un país en específico tanto como para quizás segmentar por tipo de señal, si es un canal o una radio. No es obligatorio)
    }

by Alplox 
https://github.com/Alplox/teles
*/

const listaCanalesViejo = {
//Votaciones
    /* 'tips': {
        'nombre': '🗳️ Tips Votaciones',
        'iframe_url': 'https://alplox.github.io/teles/assets/js/archivo.html',
        'fuente': 'https://alplox.github.io/teles/',
        'pais': 'cl'
    },
    'decidechile': {
        'nombre': '🗳️ decidechile.cl',
        'iframe_url': 'https://live.decidechile.cl/',
        'fuente': 'https://live.decidechile.cl/',
        'pais': 'cl'
    },
    'servelelecciones': {
        'nombre': '🗳️ servelelecciones.cl',
        'iframe_url': 'https://servelelecciones.cl/#/votacion/elecciones_constitucion/global/19001',
        'fuente': 'https://servelelecciones.cl/#/votacion/elecciones_constitucion/global/',
        'pais': 'cl'
    },
    'servel': {
        'nombre': '🗳️ Servicio Electoral de Chile',
        'yt_id': 'UCB8s6rETjmWgXrp_BxyXqdg',
        'pais': 'cl'
    }, */
// CHILE
    "24-horas": {
        "nombre": "24 horas",
        "yt_id": "UCTXNz3gjAypWp3EhlIATEJQ",
        "pais": "cl"
    },
    "24-horas-2": {
        "nombre": "24 horas 2",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&volume=0",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "24-horas-3": {
        "nombre": "24 horas 3",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&controls=true&volume=0&mute=true&player=57f4e28f9c53768535d65782&access_token=&custom.preroll=&custom.overlay=",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "24-horas-4": {
        "nombre": "24 horas 4",
        "iframe_url": "https://player.twitch.tv/?channel=24horas_tvn&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/24horas_tvn",
        "pais": "cl"
    },
    "24-horas-5": {
        "nombre": "24 horas 5",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&volume=0",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "24-horas-6": {
        "nombre": "24 horas 6",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&controls=true&volume=0&mute=true&player=57f4e28f9c53768535d65782&access_token=&custom.preroll=&custom.overlay=",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "24-horas-s2": {
        "nombre": "24 horas s2",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&volume=0",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "tvn": {
        "nombre": "TVN",
        "yt_id": "UCaVaCaiG6qRzDiJDuEGKOhQ",
        "pais": "cl"
    },
    "tvn-2": {
        "nombre": "TVN 2",
        "m3u8_url": "https://mdstrm.com/live-stream-playlist-v/555c9a91eb4886825b07ee7b.m3u8",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "meganoticias": {
        "nombre": "Meganoticias",
        "yt_id": "UCkccyEbqhhM3uKOI6Shm-4Q",
        "pais": "cl"
    },
    "meganoticias-2": {
        "nombre": "Meganoticias 2",
        "iframe_url": "https://player.twitch.tv/?channel=meganoticiascl&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/meganoticiascl",
        "pais": "cl"
    },
    "meganoticias-3": {
        "nombre": "Meganoticias 3",
        "iframe_url": "https://mdstrm.com/live-stream/561430ae330428c223687e1e?autoplay=true&volume=0",
        "fuente": "https://www.meganoticias.cl/senal-en-vivo/meganoticias/",
        "pais": "cl"
    },
    "meganoticias-4": {
        "nombre": "Meganoticias 4",
        "iframe_url": "https://rudo.video/live/mega",
        "fuente": "https://www.meganoticias.cl/senal-en-vivo/meganoticias/",
        "pais": "cl"
    },
    "mega": {
        "nombre": "Mega",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/mega/mega.smil/playlist.m3u8",
        "fuente": "https://www.mega.cl/",
        "pais": "cl"
    },
    "mega-2": {
        "nombre": "Mega 2",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/mega/mega.smil/playlist.m3u8",
        "fuente": "https://www.mega.cl/",
        "pais": "cl"
    },
    "t13": {
        "nombre": "T13",
        "yt_id": "UCsRnhjcUCR78Q3Ud6OXCTNg",
        "pais": "cl"
    },
    "t13-2": {
        "nombre": "T13 2",
        "iframe_url": "https://player.twitch.tv/?channel=t13envivo&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/t13envivo",
        "pais": "cl"
    },
    "t13-3": {
        "nombre": "T13 3",
        "m3u8_url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/t13/t13.smil/playlist.m3u8",
        "fuente": "https://www.t13.cl/en-vivo",
        "pais": "cl"
    },
    "t13-4": {
        "nombre": "T13 4",
        "iframe_url": "https://rudo.video/live/t13",
        "fuente": "https://www.t13.cl/en-vivo",
        "pais": "cl"
    },
    "canal-13": {
        "nombre": "Canal 13",
        "iframe_url": "https://rudo.video/live/c13",
        "fuente": "https://www.13.cl/en-vivo",
        "pais": "cl"
    },
    "canal-13-2": {
        "nombre": "Canal 13 2",
        "m3u8_url": "https://jireh-hls-live-video.dpsgo.com/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/c13/playlist.m3u8",
        "fuente": "https://www.13.cl/en-vivo",
        "pais": "cl"
    },
    "canal-13-3": {
        "nombre": "Canal 13 3",
        "m3u8_url": "https://dai.google.com/linear/hls/pa/event/bFL1IVq9RNGlWQaqgiFuNw/stream/529d29eb-8117-44d3-9e21-cdfd68c3c097:MRN2/master.m3u8",
        "fuente": "https://www.13.cl/en-vivo",
        "pais": "cl"
    },
    "canal-13-N": {
        "nombre": "canal 13 N",
        "yt_id": "UCd4D3LfXC_9MY2zSv_3gMgw",
        "fuente": "https://www.13.cl/en-vivo",
        "pais": "cl"
    },
    "cnn-cl": {
        "nombre": "CNN Chile",
        "yt_id": "UCpOAcjJNAp0Y0fhznRrXIJQ",
        "pais": "cl"
    },
    "chv-noticias": {
        "nombre": "CHV Noticias",
        "yt_id": "UCRsUoZYC1ULUspipMRnMhwg",
        "pais": "cl"
    },
    "chv-noticias-2": {
        "nombre": "CHV Noticias 2",
        "m3u8_url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chvn/chvn.smil/playlist.m3u8?DVR",
        "fuente": "https://www.chvnoticias.cl/senal-online/",
        "pais": "cl"
    },
    "chv-noticias-3": {
        "nombre": "CHV Noticias 3",
        "iframe_url": "https://rudo.video/live/chvn",
        "fuente": "https://www.chvnoticias.cl/senal-online/",
        "pais": "cl"
    },
    "chv": {
        "nombre": "CHV",
        "yt_id": "UC8EdTmyUaFIfZvVttJ9lgIA",
        "pais": "cl"
    },
    "chv-noticias-4": {
        "nombre": "CHV Noticias 4",
        "iframe_url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chvn/chvn.smil/playlist.m3u8?DVR",
        "fuente": "https://www.chvnoticias.cl/senal-online/",
        "pais": "cl"
    },
    "chv-noticias-5": {
        "nombre": "CHV Noticias 5",
        "iframe_url": "https://rudo.video/live/chvn",
        "fuente": "https://www.chvnoticias.cl/senal-online/",
        "pais": "cl"
    },
    "la-red": {
        "nombre": "La Red",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/lared/lared.smil/playlist.m3u8",
        "fuente": "https://www.lared.cl/senal-online",
        "pais": "cl"
    },
    "la-red-2": {
        "nombre": "La Red 2",
        "iframe_url": "https://rudo.video/live/lared",
        "fuente": "https://www.lared.cl/senal-online",
        "pais": "cl"
    },
    "la-red-3": {
        "nombre": "La Red 3",
        "iframe_url": "https://alba-cl-lared-lared.stream.mediatiquestream.com/index.m3u8",
        "fuente": "https://www.lared.cl/senal-online",
        "pais": "cl"
    },
    "cooperativa": {
        "nombre": "Radio Cooperativa",
        "iframe_url": "https://rudo.video/live/coopetv?volume=0&mute=1",
        "fuente": "http://programas.cooperativa.cl/showalairelibre/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "bbtv": {
        "nombre": "Radio Biobio TV",
        "iframe_url": "https://rudo.video/live/bbtv?volume=0&mute=1",
        "fuente": "https://www.biobiochile.cl/biobiotv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "bbtv2": {
        "nombre": "Radio Biobio TV 2",
        "iframe_url": "https://rudo.video/live/bbtv?autostart=1&volume=0&streamingLabel=home&tag=eyJwcmUiOiJodHRwczovL3B1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC9nYW1wYWQvYWRzP2l1PS8xMDk4Mzg1L2Jpb2Jpb3R2L2FkX3ZpZGVvJnRmY2Q9MCZucGE9MCZzej02NDB4NDgwJmN1c3RfcGFyYW1zPXRpcG8lM0Rob21lLWJidHYlMjZjYXRlZ29yeS1wcmltYXJ5JTNEcG9ydGFkYS1iYnR2JmdkZnBfcmVxPTEmb3V0cHV0PXZhc3QmdW52aWV3ZWRfcG9zaXRpb25fc3RhcnQ9MSZlbnY9dnAmaW1wbD1zJmNvcnJlbGF0b3I9JnZwbXV0ZT0wJnZwYT1jbGljayZ2cG9zPXByZXJvbGwiLCJwb3N0IjowLCJtaWQiOnsidGFnIjowfSwib3ZlciI6eyJ0YWciOjB9fQ==",
        "fuente": "https://www.biobiochile.cl/biobiotv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "adn": {
        "nombre": "Radio ADN",
        "iframe_url": "https://rudo.video/live/adntv?volume=0&mute=1",
        "fuente": "http://tv.adnradio.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "adn-2": {
        "nombre": "Radio ADN 2",
        "yt_id": "UCczkrFICr0xEgDsk51zZojA",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "adn-3": {
        "nombre": "Radio ADN 3",
        "iframe_url": "https://rudo.video/live/adntv?volume=0&mute=1",
        "fuente": "http://tv.adnradio.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "duna": {
        "nombre": "Radio Duna",
        "iframe_url": "https://rudo.video/live/dunatv?volume=0&mute=1",
        "fuente": "https://www.duna.cl/tv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "infinita": {
        "nombre": "Radio Infinita",
        "iframe_url": "https://mdstrm.com/live-stream/63a066e54ed536087960b550?autoplay=true&player=63af7b6cc5048f0846557764",
        "fuente": "http://www.infinita.cl/home/",
        "pais": "cl"
    },
    "infinita-2": {
        "nombre": "Radio Infinita-2",
        "iframe_url": "https://rudo.video/live/infinitatv?volume=0&mute=1",
        "fuente": "http://www.infinita.cl/home/",
        "pais": "cl"
    },
    "universo": {
        "nombre": "Radio Universo",
        "iframe_url": "https://redirector.dps.live/universo/aac/icecast.audio",
        "fuente": "https://www.universo.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-ae": {
        "nombre": "Radio AE Radio DuocUC",
        "iframe_url": "https://live.grupoz.cl/3e3852b5c1ea7821ab9cdfadbbe735f2?sound=0",
        "fuente": "https://www.aeradio.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "carolina-tv": {
        "nombre": "Radio Carolina TV",
        "iframe_url": "https://mdstrm.com/live-stream/63a06468117f42713374addd?autoplay=true&player=63af7b6cc5048f0846557764",
        "fuente": "https://www.carolina.cl/tv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "carolina-tv2": {
        "nombre": "Radio Carolina TV2",
        "iframe_url": "https://rudo.video/live/carolinatv?volume=0&mute=1",
        "fuente": "https://www.carolina.cl/tv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "romantica-tv": {
        "nombre": "Radio Romántica TV",
        "iframe_url": "https://mdstrm.com/live-stream/63a0674c1137d408b45d4821?autoplay=true&player=63af7b6cc5048f0846557764",
        "fuente": "https://www.romantica.cl/romantica-tv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-genial": {
        "nombre": "Radio Genial 100.5 FM",
        "m3u8_url": "https://v1.tustreaming.cl:19360/genialtv/genialtv.m3u8",
        "fuente": "https://radiogenial.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-la-clave": {
        "nombre": "Radio La Clave",
        "iframe_url": "https://rudo.video/live/laclavetv?volume=0&mute=1",
        "fuente": "https://radiolaclave.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-el-conquistador": {
        "nombre": "Radio El Conquistador FM",
        "m3u8_url": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/elconquistadortv/elconquistadortv.smil/playlist.m3u8",
        "fuente": "https://www.elconquistadorfm.net/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-el-conquistador-2": {
        "nombre": "Radio El Conquistador FM 2",
        "iframe_url": "https://rudo.video/live/elconquistadortv",
        "fuente": "https://www.elconquistadorfm.net/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-el-conquistador-3": {
        "nombre": "Radio El Conquistador FM 3",
        "iframe_url": "https://player.twitch.tv/?channel=elconquistadortv&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/elconquistadortv",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-folclor-chile": {
        "nombre": "Radio Folclor de Chile",
        "yt_id": "UC0Hl8kJe8Xwv8g63Q4qefQg",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "sembrador": {
        "nombre": "Radio El Sembrador",
        "m3u8_url": "https://tv.streaming-chile.com:1936/elsembrador/elsembrador/playlist.m3u8",
        "fuente": "https://tv.radioelsembrador.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-nuble": {
        "nombre": "Radio Ñuble",
        "m3u8_url": "https://live.tvcontrolcp.com:1936/rnuble/rnuble/playlist.m3u8",
        "fuente": "https://radionuble.cl/v1/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "alternativa-fm": {
        "nombre": "Radio Alternativa FM",
        "m3u8_url": "https://5eaccbab48461.streamlock.net:1936/8216/8216/playlist.m3u8",
        "fuente": "https://www.alternativafm.cl/p/alternativa-tv.html",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "stgo-tv": {
        "nombre": "Stgo TV",
        "m3u8_url": "https://stv4.janus.cl/playlist/stream.m3u8",
        "fuente": "https://www.santiagotelevision.cl/",
        "pais": "cl"
    },
    "tv-mas": {
        "nombre": "TV+",
        "m3u8_url": "https://mdstrm.com/live-stream-playlist/5c0e8b19e4c87f3f2d3e6a59.m3u8",
        "fuente": "https://www.tvmas.tv/",
        "pais": "cl"
    },
    "tv-mas-2": {
        "nombre": "TV+ 2",
        "iframe_url": "https://mdstrm.com/live-stream/5c0e8b19e4c87f3f2d3e6a59?autoplay=true&volume=0",
        "fuente": "https://www.tvmas.tv/",
        "pais": "cl"
    },
    "voz-sobran": {
        "nombre": "La Voz De Los Que Sobran",
        "iframe_url": "https://rudo.video/live/lvdlqs",
        "fuente": "https://lavozdelosquesobran.cl/",
        "pais": "cl"
    },
    "puranoticia": {
        "nombre": "Puranoticia TV",
        "m3u8_url": "https://pnt.janusmedia.tv/hls/pnt.m3u8",
        "fuente": "https://puranoticia.pnt.cl/",
        "pais": "cl"
    },
    "holvoet-tv": {
        "nombre": "Holvoet TV",
        "iframe_url": "https://rudo.video/live/holvoettv",
        "fuente": "https://holvoet.cl/en-vivo/",
        "pais": "cl"
    },
    "holvoet-tv-2": {
        "nombre": "Holvoet TV 2",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/holvoettv/holvoettv.smil/playlist.m3u8",
        "fuente": "https://holvoet.cl/en-vivo/",
        "pais": "cl"
    },
    "antofagasta-tv": {
        "nombre": "Antofagasta TV",
        "m3u8_url": "https://unlimited6-cl.dps.live/atv/atv.smil/atv/livestream2/playlist.m3u8",
        "fuente": "https://www.antofagasta.tv/",
        "pais": "cl"
    },
    "antofagasta-tv-2": {
        "nombre": "Antofagasta TV 2",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/atv/atv.smil/playlist.m3u8",
        "fuente": "https://www.antofagasta.tv/",
        "pais": "cl"
    },
    "antofagasta-tv-3": {
        "nombre": "Antofagasta TV 3",
        "m3u8_url": "https://unlimited6-cl.dps.live/atv/atv.smil/playlist.m3u8",
        "fuente": "https://www.antofagasta.tv/",
        "pais": "cl"
    },
    "atacama-tv": {
        "nombre": "Atacama TV",
        "m3u8_url": "https://v2.tustreaming.cl/atacamatv/index.m3u8",
        "fuente": "http://atacamatelevision.com/",
        "pais": "cl"
    },
    "atacama-tv-2": {
        "nombre": "Atacama TV 2",
        "m3u8_url": "https://v2.tustreaming.cl/atacamatv/tracks-v1a1/mono.m3u8",
        "fuente": "http://atacamatelevision.com/",
        "pais": "cl"
    },
    "canal-9": {
        "nombre": "Canal 9",
        "iframe_url": "https://rudo.video/live/c9?volume=0&mute=1",
        "fuente": "https://www.canal9.cl/en-vivo/",
        "pais": "cl"
    },
    "canal-9-2": {
        "nombre": "Canal 9 2",
        "m3u8_url": "https://unlimited6-cl.dps.live/c9/c9.smil/c9/livestream1/chunks.m3u8",
        "fuente": "https://www.canal9.cl/en-vivo/",
        "pais": "cl"
    },
    "tvu": {
        "nombre": "TVU",
        "iframe_url": "https://rudo.video/live/tvu?volume=0&mute=1",
        "fuente": "https://www.tvu.cl/",
        "pais": "cl"
    },
    "tvu-2": {
        "nombre": "TVU 2",
        "m3u8_url": "https://unlimited6-cl.dps.live/tvu/tvu.smil/playlist.m3u8",
        "fuente": "https://www.tvu.cl/",
        "pais": "cl"
    },
    "canal-21": {
        "nombre": "Canal 21",
        "m3u8_url": "https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8",
        "fuente": "https://www.canal21tv.cl/wp/en-vivo/",
        "pais": "cl"
    },
    "canal-21-2": {
        "nombre": "Canal 21 2",
        "m3u8_url": "https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8",
        "fuente": "https://www.canal21tv.cl/wp/en-vivo/",
        "pais": "cl"
    },
    "nublevision": {
        "nombre": "Ñublevision",
        "m3u8_url": "https://v1.tustreaming.cl/nubletv/index.m3u8",
        "fuente": "https://nublevision.cl/",
        "pais": "cl"
    },
    "nuble-RTV": {
        "nombre": "Ñuble RVT",
        "m3u8_url": "https://paneltv.online:1936/8050/8050/playlist.m3u8",
        "fuente": "https://canalrtv.cl/",
        "pais": "cl"
    },
    "pinguino-tv": {
        "nombre": "Pingüino TV",
        "iframe_url": "https://elpinguino.com/reproductor/",
        "fuente": "https://elpinguino.com/reproductor/",
        "pais": "cl"
    },
    "pinguino-tv-2": {
        "nombre": "Pingüino TV 2",
        "m3u8_url": "https://streaming.elpinguino.com:5391/live/EP.smil/playlist.m3u8",
        "fuente": "https://elpinguino.com/reproductor/",
        "pais": "cl"
    },
    "itv-patagonia": {
        "nombre": "ITV Patagonia",
        "iframe_url": "https://rudo.video/live/itv?volume=0&mute=1",
        "fuente": "https://www.itvpatagonia.com/",
        "pais": "cl"
    },
    "itv-patagonia-2": {
        "nombre": "ITV Patagonia 2",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8",
        "fuente": "https://www.itvpatagonia.com/",
        "pais": "cl"
    },
    "ucv": {
        "nombre": "UCV TV",
        "iframe_url": "https://rudo.video/live/ucvtv2?volume=0&mute=1",
        "fuente": "https://pucvmultimedios.cl/senal-online-tv.php",
        "pais": "cl"
    },
    "uatv": {
        "nombre": "UATV",
        "iframe_url": "https://rudo.video/live/uatv?volume=0&mute=1",
        "fuente": "https://uatv.cl/uatv-en-vivo/",
        "pais": "cl"
    },
    "vtv": {
        "nombre": "VTV",
        "iframe_url": "https://rudo.video/live/vtv?volume=0&mute=1",
        "fuente": "http://canalvtv.cl/vtv/",
        "pais": "cl"
    },
    "canal-33": {
        "nombre": "Canal 33",
        "m3u8_url": "https://oracle.streaminghd.cl/eduardo555/eduardo555/playlist.m3u8",
        "fuente": "http://www.canal33.cl/online.php",
        "pais": "cl"
    },
    "contivision": {
        "nombre": "Contivision",
        "iframe_url": "https://rudo.video/live/cm?volume=0&mute=1",
        "fuente": "http://w.contivision.cl/cvn/envivo.php",
        "pais": "cl"
    },
    "osorno-tv": {
        "nombre": "Osorno TV",
        "m3u8_url": "https://panel.tvstream.cl:1936/8036/8036/playlist.m3u8",
        "fuente": "https://www.osornotv.cl/envivo.html",
        "pais": "cl"
    },
    "tv-salud": {
        "nombre": "TV Salud",
        "iframe_url": "https://panel.miplay.cl:8081/tvsalud/embed.html",
        "fuente": "https://tvsalud.cl/",
        "pais": "cl"
    },
    "fm-tiempo": {
        "nombre": "FM Tiempo",
        "iframe_url": "https://rudo.video/live/fmtiempotv?volume=0&mute=1",
        "fuente": "https://www.fmtiempo.cl/",
        "pais": "cl"
    },
    "romantica-tv": {
        "nombre": "Romántica TV",
        "iframe_url": "https://rudo.video/live/romanticatv?volume=0&mute=1",
        "fuente": "https://www.romantica.cl/romantica-tv/",
        "pais": "cl"
    },
    "radio-genial": {
        "nombre": "Radio Genial 100.5 FM",
        "iframe_url": "https://v1.tustreaming.cl:2000/VideoPlayer/genialtv?autoplay=1",
        "fuente": "https://radiogenial.cl/",
        "pais": "cl"
    },
    "alegria-tv": {
        "nombre": "alegria tv",
        "iframe_url": "https://video.compuwebecuador.com/hybrid-stream-video-widget/radioalegriafm",
        "fuente": "https://radioalegriafm.com/alegria-tv/",
        "pais": "cl"
    },
    "mi-radio-es-mas": {
        "nombre": "Mi Radio es Más",
        "yt_id": "UCflUbt1g29kPG-H9SV5QIyw",
        "fuente": "https://www.youtube.com/@MIRADIO_TV/streams",
        "pais": "cl"
    },
    "mi-radio-es-mas2": {
        "nombre": "Mi Radio es Más2",
        "iframe_url": "https://live.grupoz.cl/7228e98d389d9d54ca6d5ab974f2ea15",
        "fuente": "https://www.miradiols.cl/mi-radio-tv/",
        "pais": "cl"
    },
    "radio-la-clave": {
        "nombre": "Radio La Clave",
        "iframe_url": "https://rudo.video/live/laclavetv?volume=0&mute=1",
        "fuente": "https://radiolaclave.cl/",
        "pais": "cl"
    },
    "radio-folclor-chile": {
        "nombre": "Radio Folclor de Chile",
        "yt_id": "UC0Hl8kJe8Xwv8g63Q4qefQg",
        "fuente": "https://radiolaclave.cl/",
        "pais": "cl"
    },
    "radio-maria-chile": {
        "nombre": "Radio María Chile",
        "yt_id": "UClMwb2kCYemWyDIZ2dYttKA",
        "fuente": "https://radiolaclave.cl/",
        "pais": "cl"
    },
    "prensa-presidencia": {
        "nombre": "Prensa Presidencia",
        "iframe_url": "https://mdstrm.com/live-stream/6239f6d008e7ac488826f237?autoplay=false",
        "fuente": "https://prensa.presidencia.cl/streaming.aspx",
        "pais": "cl"
    },
    "derechofacil-tw": {
        "nombre": "DerechoFacil",
        "iframe_url": "https://player.twitch.tv/?channel=derechofacil&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/derechofacil",
        "pais": "cl"
    },
    "copano": {
        "nombre": "Nicolas Copano",
        "yt_id": "UCVTL17ftpqx3lQ_IaGUNgSg",
        "fuente": "https://www.twitch.tv/copano",
        "pais": "cl"
    },
    "copano": {
        "nombre": "Nicolas Copano",
        "iframe_url": "https://player.twitch.tv/?channel=copano&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/copano",
        "pais": "cl"
    },
    "arab-tv": {
        "nombre": "ARAB TV",
        "m3u8_url": "https://livefocamundo.com:8081/arabtv/index.m3u8",
        "fuente": "https://www.arabtv.cl/",
        "pais": "cl"
    },
    "arica-tv": {
        "nombre": "Arica TV",
        "iframe_url": "https://arica.tv/envivo/",
        "fuente": "https://arica.tv/envivo/",
        "pais": "cl"
    },
    "estacion-tv": {
        "nombre": "Estaciontv TV",
        "iframe_url": "https://arica.tv/envivo/",
        "fuente": "https://www.estaciontv.cl/site/",
        "pais": "cl"
    },
    "tv-telenorte": {
        "nombre": "TV Telenorte",
        "m3u8_url": "https://stream.wifiexpert.cl/telenorte/canal-1/playlist.m3u8",
        "fuente": "https://www.telenorte.cl/",
        "pais": "cl"
    },
    "tv-rtctelevision": {
        "nombre": "TV Rtctelevision",
        "iframe_url": "https://stream.skarnetchile.com/live-stream-video-widget/rtciquique",
        "fuente": "https://www.rtctelevision.cl/",
        "pais": "cl"
    },
    "tv-canaltv8": {
        "nombre": "TV canaltv8",
        "m3u8_url": "https://panel.tvstream.cl:1936/8032/8032/playlist.m3u8",
        "fuente": "https://www.canaltv8.cl/",
        "pais": "cl"
    },
    "tv-temuco": {
        "nombre": "TV Temuco",
        "m3u8_url": "https://vdo.streaming-chile.com/p/3994/live/temucotelevisionlive.m3u8",
        "fuente": "https://temucotelevision.cl/web/",
        "pais": "cl"
    },
    "tv-canal5": {
        "nombre": "TV canal5",
        "m3u8_url": "https://stmv5.voxtvhd.com.br/canal5/canal5/playlist.m3u8",
        "fuente": "https://canal5.cl/wp/",
        "pais": "cl"
    },
    "tv-vision": {
        "nombre": "TV vision",
        "m3u8_url": "https://5eaccbab48461.streamlock.net:1936/8260/8260/playlist.m3u8",
        "fuente": "https://visiontv.cl/",
        "pais": "cl"
    },
    "tv-canal11aysen": {
        "nombre": "TV canal11aysen",
        "iframe_url": "https://cdn.jwplayer.com/players/2R4TGXTm-InE6g9DY.html",
        "fuente": "https://canal11aysen.cl/",
        "pais": "cl"
    },
    "tv-sur": {
        "nombre": "TV SUR",
        "iframe_url": "https://rudo.video/live/surtv",
        "fuente": "https://www.surtv.cl/",
        "pais": "cl"
    },
    "tv-canalsurpatagonia": {
        "nombre": "TV canalsurpatagonia",
        "iframe_url": "https://cdn.jwplayer.com/players/CvGZdlJl-InE6g9DY.html",
        "fuente": "https://www.canalsurpatagonia.cl/",
        "pais": "cl"
    },
    "tv-sensacioncosta": {
        "nombre": "TV canasensacioncosta",
        "iframe_url": "https://tv.clientetvstudio.net/hybrid-stream-video-widget/tvcosta2",
        "fuente": "https://sensacioncosta.cl/",
        "pais": "cl"
    },
    "tv-milodoncomunicaciones": {
        "nombre": "tv milodoncomunicaciones",
        "iframe_url": "https://videosenlared.fullstreaming.ar/live-stream-video-widget/ynhpdikj?autoplay=1",
        "fuente": "https://milodoncomunicaciones.com/",
        "pais": "cl"
    },
    "tv-tne": {
        "nombre": "TV tne",
        "iframe_url": "https://cdn.jwplayer.com/players/HBcpA9gx-xpHT0aWt.html",
        "fuente": "https://www.tnetv.cl/",
        "pais": "cl"
    },
    "tv-sabrosonafm": {
        "nombre": "tv sabrosonafm",
        "iframe_url": "https://samson.streamerr.co/VideoPlayer/sabrosonavideo?autoplay=1",
        "fuente": "https://sabrosonafm.cl/",
        "pais": "cl"
    },
    "tv-tvn3": {
        "nombre": "tv tvn3",
        "iframe_url": "https://mdstrm.com/live-stream/5653641561b4eba30a7e4929?jsapi=true&autoplay=false&player=57f40bb4dc5b9f3075c49cfe&custom.ui=%2F317342475%2Ftvn&custom.tvn_demo=&custom.tvn_tipo=EnVivo&custom.tvn_seccion=senal-en-vivo&custom.tvn_articulo=5653641561b4eba30a7e4929&custom.tvn_tags=",
        "fuente": "https://www.tvn.cl/tvn3",
        "pais": "cl"
    },
    "tv-calderavision": {
        "nombre": "TV calderavision",
        "iframe_url": "https://streaming10.zglobalhost.com:2020/VideoPlayer/frknrusdct?autoplay=1",
        "fuente": "https://calderavision.cl/",
        "pais": "cl"
    },
    "tv-lachilena": {
        "nombre": "TV lachilena",
        "iframe_url": "https://vdochile.com/hybrid-stream-video-widget/jeubuffn",
        "fuente": "https://lachilena.tutv.cl/",
        "pais": "cl"
    },
    "tv-terror": {
        "nombre": "tv terror",
        "m3u8_url": "https://tv.streaming-chile.com:1936/8140/8140/playlist.m3u8",
        "fuente": "https://latinartv.com/emisoras/terror-tv",
        "pais": "cl"
    },
    "tv-cine": {
        "nombre": "tv cine",
        "m3u8_url": "https://tv.streaming-chile.com:1936/8142/8142/playlist.m3u8",
        "fuente": "https://latinartv.com/emisoras/cine",
        "pais": "cl"
    },
    "tv-moni": {
        "nombre": "tv moni",
        "m3u8_url": "https://stream.skarnetchile.com:3817/live/monitvlive.m3u8",
        "fuente": "https://monitv.net/",
        "pais": "cl"
    },
    "tv-lachilena": {
        "nombre": "tv lachilena",
        "iframe_url": "https://vdochile.com/hybrid-stream-video-widget/jeubuffn",
        "fuente": "https://lachilena.tutv.cl/",
        "pais": "cl"
    },
    "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "m3u8_url": "https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8",
        "fuente": "https://www.portalfoxmix.cl/web/",
        "pais": "cl"
    },
    "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "m3u8_url": "https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8",
        "fuente": "https://www.portalfoxmix.cl/web/",
        "pais": "cl"
    },
     "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "iframe_url": "https://playerv.logicahost.com.br/video/retroplustv/3/false/false/ZG1sa1pXOHdOaTVzYjJkcFkyRm9iM04wTG1OdmJTNWljZz09K1o=/16:9//nao/",
        "fuente": "https://www.portalfoxmix.cl/web/",
        "pais": "cl"
    },
    "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "iframe_url": "https://playerv.logicahost.com.br/video/retroplussenal2/3/false/false/ZG1sa1pXOHdOaTVzYjJkcFkyRm9iM04wTG1OdmJTNWljZz09K1o=/16:9//nao/",
        "fuente": "https://retroplustv.com/",
        "pais": "cl"
    },
    "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "iframe_url": "https://playerv.logicahost.com.br/video/retroplussenal3/3/false/false/Wkcxc2ExcFhPSGRPYVRWellqSmtjRmt5Um05aU0wNHdURzFPZG1KVE5XbGpaejA5KzM=/16:9//nao/",
        "fuente": "https://retroplustv.com/",
        "pais": "cl"
    },
    "TV-benfertv": {
        "nombre": "TV benfertv",
        "iframe_url": "https://playerv.voxtvhd.com.br/video/benfertv/3/true/true/VjFod1QxVXlVa2hWYmtaWVYwWmFjbGxzVW5KTlJuQkdZVWRHYVUxWVFrVlViR1IzWVZVeGNWRnFSbGhXZWxaTFZVWkZPVkJUYzNvPSta/16:9/nocover/nao",
        "fuente": "https://benfertv.cl//",
        "pais": "cl"
    },
// ARGENTINA
    "tn": {
        "nombre": "Todonoticias",
        "yt_id": "UCj6PcyLvpnIRT_2W_mwa9Aw",
        "pais": "ar"
    },
    "c5n": {
        "nombre": "C5N",
        "yt_id": "UCFgk2Q2mVO1BklRQhSv6p0w",
        "pais": "ar"
    },
    "net-tv": {
        "nombre": "Net TV",
        "iframe_url": "https://rudo.video/live/nettv?volume=0&mute=1",
        "fuente": "https://www.canalnet.tv/page/senal-en-vivo",
        "pais": "ar"
    },
    "tv-publica-arg": {
        "nombre": "Televisión Pública",
        "yt_id": "UCs231K71Bnu5295_x0MB5Pg",
        "pais": "ar"
    },
    "cronica-tv": {
        "nombre": "Crónica TV",
        "yt_id": "UCT7KFGv6s2a-rh2Jq8ZdM1g",
        "pais": "ar"
    },
    "la-nacion": {
        "nombre": "LA NACION",
        "yt_id": "UCba3hpU7EFBSk817y9qZkiA",
        "pais": "ar"
    },
    "canal-26": {
        "nombre": "Canal 26",
        "yt_id": "UCrpMfcQNog595v5gAS-oUsQ",
        "pais": "ar"
    },
    "america-tv": {
        "nombre": "América TV",
        "iframe_url": "https://vmf.edge-apps.net/embed/live.php?streamname=americahls-100056&autoplay=false",
        "fuente": "https://www.americatv.com.ar/vivo",
        "pais": "ar"
    },
    "america-tv": {
        "nombre": "América TV",
        "yt_id": "UC6NVDkuzY2exMOVFw4i9oHw",
        "fuente": "https://www.americatv.com.ar/vivo",
        "pais": "ar"
    },
    "net-tv": {
        "nombre": "Net TV",
        "iframe_url": "https://rudo.video/live/nettv?volume=0&mute=1",
        "fuente": "https://www.canalnet.tv/page/senal-en-vivo",
        "pais": "ar"
    },
    "tv-publica-arg": {
        "nombre": "Televisión Pública",
        "yt_id": "UCs231K71Bnu5295_x0MB5Pg",
        "fuente": "https://www.tvpublica.com.ar/",
        "pais": "ar"
    },
    "tv-publica-arg1": {
        "nombre": "Televisión Pública1",
        "m3u8_url": "https://cntlnk-main-edge-access.secure.footprint.net/entrypoint/c7_vivo01_dai_source-20001_all.m3u8",
        "fuente": "https://www.tvpublica.com.ar/",
        "pais": "ar"
    },
    "tv-publica-arg2": {
        "nombre": "Televisión Pública2",
        "iframe_url": "https://television-libre.online/html/fl2/?get=Q2FuYWw3",
        "fuente": "https://television-libre.online/en-vivo/tv-publica/",
        "pais": "ar"
    },
    "cronica-tv": {
        "nombre": "Crónica TV",
        "yt_id": "UCT7KFGv6s2a-rh2Jq8ZdM1g",
        "fuente": "https://www.cronica.com.ar/cronica-en-vivo/",
        "pais": "ar"
    },
    "cronica-tv1": {
        "nombre": "Crónica TV1",
        "iframe_url": "https://vmf.edge-apps.net/embed/live.php?streamname=cronicatv_video1-100044&autoplay=true",
        "fuente": "https://www.cronica.com.ar/cronica-en-vivo/",
        "pais": "ar"
    },
    "el-siete-tv": {
        "nombre": "El Siete TV",
        "iframe_url": "UC64ZNqX0FQHabP8iIkmnR3A",
        "fuente": "https://www.elsietetv.com.ar/",
        "pais": "ar"
    },
    "el-siete-tv1": {
        "nombre": "El Siete TV1",
        "iframe_url": "https://www.youtube.com/embed/Vh8xmLBJtR8?autoplay=1&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fwww.elsietetv.com.ar%2F&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=https%3A%2F%2Fwww.elsietetv.com.ar&widgetid=1",
        "fuente": "https://www.elsietetv.com.ar/",
        "pais": "ar"
    },
    "a24": {
        "nombre": "A24",
        "yt_id": "UCR9120YBAqMfntqgRTKmkjQ",
        "fuente": "https://www.a24.com/vivo",
        "pais": "ar"
    },
    "a24-1": {
        "nombre": "A24 1",
        "iframe_url": "https://vmf.edge-apps.net/embed/live.php?streamname=a24-100056&autoplay=false",
        "fuente": "https://www.a24.com/vivo",
        "pais": "ar"
    },
    "la-nacion": {
        "nombre": "La Nacion",
        "yt_id": "UCba3hpU7EFBSk817y9qZkiA",
        "fuente": "https://www.lanacion.com.ar/",
        "pais": "ar"
    },
    "ip-digital0": {
        "nombre": "Información Periodistica",
        "iframe_url": "https://player.twitch.tv/?channel=ip_noticias&parent=ipnoticias.ar",
        "fuente": "https://ip.digital/vivo",
        "pais": "ar"
    },
    "ip-digita-l": {
        "nombre": "Información Periodistica 1",
        "yt_id": "UC1bBjOZieJWHbsFA0LwjjJA",
        "fuente": "https://ip.digital/vivo",
        "pais": "ar"
    },
     "extra-tv": {
        "nombre": "EXTRA TV",
        "yt_id": "UCe22LRtJ6sAx3nn2b0SzuRQ",
        "fuente": "https://www.canalextra.com.ar/",
        "pais": "ar"
    },
    "cn5": {
        "nombre": "CN5",
        "yt_id": "UCFgk2Q2mVO1BklRQhSv6p0w",
        "fuente": "https://www.c5n.com/",
        "pais": "ar"
    },
     "canal-22": {
        "nombre": "cana l22",
        "iframe_url": "https://videocloud.instream.audio:2000/VideoPlayer/canal22?autoplay=1",
        "fuente": "https://www.canal22web.com/",
        "pais": "ar"
    },
    "el-9": {
        "nombre": "EL 9",
        "iframe_url": "https://player.twitch.tv/?channel=elnuevevivo&parent=www.elnueve.com.ar",
        "fuente": "https://www.elnueve.com.ar/en-vivo",
        "pais": "ar"
    },
    "el-9-tv": {
        "nombre": "EL 9 TV",
        "iframe_url": "https://playerssl.cdnmedia.tv/embed/20ee166d",
        "fuente": "https://el9nou.cat/el9tv/#google_vignette",
        "pais": "ar"
    },
    "Cadena3-tv": {
        "nombre": "Cadena3 TV",
        "yt_id": "UCNxohbqfDp8YxW_Mji2XMHA",
        "fuente": "https://www.cadena3.com/",
        "pais": "ar"
    },
    "El-Destape": {
        "nombre": "El Destape",
        "iframe_url": "https://www.youtube.com/embed/e94jKJSltu0?autoplay=1&mute=1",
        "fuente": "https://www.eldestapeweb.com/",
        "pais": "ar"
    },
    "Radiomitre-tv": {
        "nombre": "Radiomitre Tv",
        "iframe_url": "UCYvINPByAdCcpA0sWrF3I_w",
        "fuente": "https://www.youtube.com/@Radiomitre",
        "pais": "ar"
    },
    "canal-26": {
        "nombre": "Canal 26",
        "yt_id": "UCrpMfcQNog595v5gAS-oUsQ",
        "fuente": "https://www.diario26.com/canal26_en_vivo",
        "pais": "ar"
    },
    "canal26": {
        "nombre": "Canal26",
        "iframe_url": "https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&enablejsapi=1&origin=https%3A%2F%2Fwww.canal26.com",
        "fuente": "https://www.diario26.com/canal26_en_vivo",
        "pais": "ar"
    },
// COLOMBIA
     "el-tiempo": {
        "nombre": "EL TIEMPO",
        "yt_id": "UCe5-b0fCK3eQCpwS6MT0aNw",
        "pais": "co"
    },
    "noti-caracol": {
        "nombre": "Noticias Caracol",
        "yt_id": "UC2Xq2PK-got3Rtz9ZJ32hLQ",
        "fuente": "https://www.caracoltv.com/senal-vivo",
        "pais": "co"
    },
    "red-mas-noticias": {
        "nombre": "RED MÁS Noticias",
        "yt_id": "UCpcvsK0UAI3MIHsjjj3CgMg",
        "fuente": "https://redmas.com.co/senal-en-vivo/",
        "pais": "co"
    },
// PERU
    "tv-peru": {
        "nombre": "TVPerú Noticias",
        "yt_id": "UCkZCoc42IipR1ucqJmIehsA",
        "pais": "pe"
    },
    "tv-peru-HD": {
        "nombre": "Tv Perú HD",
        "iframe_url": "https://iblups.com/e_tvperuHD",
        "fuente": "https://www.tvperu.gob.pe/play",
        "pais": "pe"
    },
    "tv-peru-73": {
        "nombre": "Tv Perú 73",
        "iframe_url": "https://iblups.com/e_tvperu73",
        "fuente": "https://ntvperu.pe/senal-en-vivo/",
        "pais": "pe"
    },
    "tv-peru-72": {
        "nombre": "Tv Perú 72",
        "iframe_url": "https://iblups.com/e_tvperu72",
        "fuente": "https://ntvperu.pe/senal-en-vivo/",
        "pais": "pe"
    },
    "panamericana-tv": {
        "nombre": "Panamericana TV",
        "iframe_url": "https://geo.dailymotion.com/player/x5poh.html?video=x774s7s&autoplay=true&volume=0",
        "fuente": "https://panamericana.pe/tvenvivo",
        "pais": "pe"
    },
    "onda-digital-tv": {
        "nombre": "Onda Digital TV",
        "m3u8_url": "https://v4.tustreaming.cl:443/odtvgo/index.m3u8",
        "fuente": "https://ondadigitaltv.com",
        "pais": "pe"
    },
    "onda-digital-tv-2": {
        "nombre": "Onda Digital TV 2",
        "m3u8_url": "https://tv.ondadigital.pe:1936/ondatv2/ondatv2/playlist.m3u8",
        "fuente": "https://ondadigitaltv.com",
        "pais": "pe"
    },
    "la-republica": {
        "nombre": "La República",
        "yt_id": "UC-B7Xv56uNRDkj0vC3QW8Cg",
        "pais": "pe"
    },
    "willax": {
        "nombre": "Willax",
        "iframe_url": "https://geo.dailymotion.com/player/x5poh.html?video=x7x4dgx&autoplay=true&volume=0",
        "fuente": "https://willax.tv/en-vivo/",
        "pais": "pe"
    },
    "latina-noticias": {
        "nombre": "Latina Noticias",
        "yt_id": "UCpSJ5fGhmAME9Kx2D3ZvN3Q",
        "pais": "pe"
    },
    "ovacion-tv": {
        "nombre": "Radio Ovación TV",
        "m3u8_url": "https://5c3fb01839654.streamlock.net:1963/iptvovacion1/liveovacion1tv/playlist.m3u8",
        "fuente": "https://ovacion.pe/radio",
        "pais": "pe",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "san-borja": {
        "nombre": "Radio San Borja Tv",
        "m3u8_url": "https://5c3fb01839654.streamlock.net:1963/iptvsanborja/livesanborjatv/playlist.m3u8",
        "fuente": "https://radiosanborjatv.com/",
        "pais": "pe",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-onda-digital": {
        "nombre": "Radio Onda Digital",
        "m3u8_url": "https://tv.ondadigital.pe:1936/ondatv2/ondatv2/playlist.m3u8",
        "fuente": "https://www.ondadigital.pe/",
        "pais": "pe",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-tropical": {
        "nombre": "Radio Tropical",
        "m3u8_url": "https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8",
        "fuente": "https://radiotropical.pe/",
        "pais": "pe",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-uno": {
        "nombre": "Radio Uno",
        "yt_id": "UCK0lpuL9PQb3I5CDcu7Y7bA",
        "fuente": "https://radiouno.pe/",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "nacional-tv": {
        "nombre": "Nacional Tv",
        "iframe_url": "https://iblups.com/e_radionacional",
        "fuente": "https://www.radionacional.gob.pe/alacarta",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "BNBdigital-tv": {
        "nombre": "BNB Digital TV",
        "m3u8_url": "https://vdo.grupolimalive.com:3375/live/bnbdigitallive.m3u8",
        "fuente": "https://www.bnbdigitaltv.com/",
        "pais": "pe"
    },
    "Chincha-Tv": {
        "nombre": "Chincha-Tv",
        "iframe_url": "https://ok.ru/videoembed/5439500131845?nochat=1&autoplay=1",
        "fuente": "https://www.chincha.tv/p/live.html",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "uci": {
        "nombre": "UCI",
        "iframe_url": "",
        "fuente": "https://uci.pe/envivo",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "nativa": {
        "nombre": "Nativa",
        "m3u8_url": "https://ntv.pe/salida/nativa.m3u8",
        "fuente": "https://ntv.pe/",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "nativa-0": {
        "nombre": "Nativa-0",
        "yt_id": "UCdl1ygFwPa6lUdNYPLjoAGg",
        "fuente": "https://ntv.pe/",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "nativa-1": {
        "nombre": "Nativa 1",
        "iframe_url": "https://ntv.pe/vivo.html",
        "fuente": "https://ntv.pe/",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "cable-vision-peru": {
        "nombre": "Cable Visión Perú",
        "iframe_url": "",
        "fuente": "https://www.cablevisionperu.pe/?page_id=1938",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "atv": {
        "nombre": "ATV",
        "m3u8_url": "https://alba-pe-atv-atv.stream.mediatiquestream.com/index.m3u8",
        "fuente": "https://www.atv.pe/envivo-atv",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "atv-mas": {
        "nombre": "ATV MAS",
        "m3u8_url": "https://alba-pe-atv-atvmas.stream.mediatiquestream.com/index.m3u8",
        "fuente": "https://www.atv.pe/envivo-atvmas",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "atv-sur": {
        "nombre": "ATV SUR",
        "m3u8_url": "https://alba-pe-atv-atvsur.stream.mediatiquestream.com/index.m3u8",
        "fuente": "https://www.atv.pe/envivo-atvmas",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "latina-tv": {
        "nombre": "Latina Tv",
        "iframe_url": "https://rudo.video/live/latina",
        "fuente": "https://www.latina.pe/tvenvivo",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Radio-California": {
        "nombre": "Radio California",
        "iframe_url": "https://vdo.grupolimalive.com/live-stream-video-widget/californiatv",
        "fuente": "https://www.radiocalifornia.pe/",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Doble-AA": {
        "nombre": "Doble AA",
        "iframe_url": "https://videoserver.tmcreativos.com:2020/VideoPlayer/yvmgbdpqmp",
        "fuente": "https://dobleaamedios.com/tv",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "mas-cumbia": {
        "nombre": "Mas Cumbia",
        "iframe_url": "https://dattassd.com/player/index.php?puerto=19360&rtmp=mascumbiatvonline&stream=mascumbiatvonline",
        "fuente": "https://bestcableperu.com.pe/tv99.html",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "hatun-tv": {
        "nombre": "Hatun Tv",
        "iframe_url": "https://dattassd.com/player/index.php?puerto=19360&rtmp=bestcablehatuntv&stream=bestcablehatuntv",
        "fuente": "https://bestcableperu.com.pe/tv99.html",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "pbo-radio": {
        "nombre": "Pbo Radio",
        "yt_id": "UCgR0st4ZLABi-LQcWNu3wnQ",
        "fuente": "https://bestcableperu.com.pe/tv99.html",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "santa-rosa": {
        "nombre": "📻 Radio Santa Rosa",
        "yt_id": "UCIGV0oiNkdK2-tnf10DNp2A",
        "fuente": "",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "NOVELAS-tv": {
        "nombre": "NOVELAS Tv",
        "iframe_url": "https://latele-envivo.com/Embed/tbs/op3.php",
        "fuente": "https://tvhd.pe/tnt-novelas-en-vivo/",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "NT": {
        "nombre": "NT",
        "iframe_url": "https://clarovideo.deportesporinternet.com/dash2.html?url=aHR0cHM6Ly9wZWxpdmVjaGFubmVsc2Rhc2gtNS5jbGFyb3ZpZGVvLmNvbS9icGstdHYvVE5USEQvZGFzaF9may9pbmRleC5tcGQ=&k1=Y2MxZGJlNDM1NjRhYzUxYTYwNjQyMTgyOGI5OWQzYWQ=&k2=Mjg3OTc1YTY1ZWIzZjMzN2ExYmRmOWE4ZWVhYmY2MTM=&aut=true&lang=0",
        "fuente": "https://tvhd.pe/tnt-hd-en-vivo/",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "señal-peru": {
        "nombre": "📻 Señal Peru",
        "iframe_url": "https:\/\/livestream.perucast.com\/low\/stream.m3u8",
        "fuente": "https://xn--sealperutv-u9a.pe/",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "sol-tv": {
        "nombre": "Sol Tv",
        "iframe_url": "https://playerv.logicahost.com.br/video/soltv/1/true/false/ZG1sa1pXOHdNeTVzYjJkcFkyRm9iM04wTG1OdmJTNWljZz09K1o=/16:9///",
        "fuente": "https://soltvperu.com/en-vivo/",
        "pais": "pe"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "cnc": {
        "nombre": "CNC",
        "iframe_url": "https://innovatestream.com/tv/v2/player.php?live=cnctv",
        "fuente": "https://www.cnccajamarca.com/",
        "pais": "pe"
    },
//VIETNAM
    "thtv": {
        "nombre": "THTV",
        "m3u8_url": "https://60acee235f4d5.streamlock.net/THTV/travinhtv/playlist.m3u8",
        "fuente": "http://xemtruyenhinh.xyz/kenh-thtv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "HÀ-NỘI-1": {
        "nombre": "HÀ NỘI 1",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/hanoi1.php",
        "fuente": "https://hanoionline.vn/",
        "pais": "vn"
    },
    "atv1": {
        "nombre": "ATV1",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/atv1.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-atv1-an-giang-tv-1-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "btv": {
        "nombre": "BTV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/bltv.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-bltv-bac-lieu-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "btv1": {
        "nombre": "BTV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/binhthuan.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-btv-binh-thuan-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "bptv2": {
        "nombre": "BPTV2",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/bptv2.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-bptv2-binh-phuoc-tv-2-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "crtv": {
        "nombre": "CRTV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/caobang.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-crtv-cao-bang-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "drtv": {
        "nombre": "DRTV",
        "m3u8_url": "https://cdn.drt.vn/live/285a27750861b964c27af22091662a74f2f/chunklist.m3u8",
        "fuente": "http://xemtruyenhinh.xyz/kenh-drt-dak-lak-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "ptd": {
        "nombre": "PTD",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/ptd.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-ptd-dak-nong-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "ltv": {
        "nombre": "LTV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/lamdong.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-ltv-lam-dong-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "drt1": {
        "nombre": "DRT1",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/dn1.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-drt1-da-nang-tv-1-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "drt2": {
        "nombre": "DRT2",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/dn2.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-drt2-da-nang-tv-2-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "dn1": {
        "nombre": "DN1",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/dongnai1.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-dn1-dong-nai-tv-1-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "dn2": {
        "nombre": "DN2",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/dongnai2.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-dn2-dong-nai-tv-2-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "dn3": {
        "nombre": "DN3",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/dongnai3.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-dn3-dong-nai-tv-3-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "dtv": {
        "nombre": "DTV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/dtv.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-dtv-dien-bien-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "thgl": {
        "nombre": "THGL",
        "m3u8_url": "https://tv.gialaitv.vn:8134/hls/gialaitv/gialaitv.m3u8",
        "fuente": "http://xemtruyenhinh.xyz/kenh-thgl-gia-lai-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "ha-nam-THHN": {
        "nombre": "HA NAM THHN",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/hanam.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-thhn-ha-nam-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "hgtv": {
        "nombre": "HGTV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/hagiang.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-hgtv-ha-giang-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "httv": {
        "nombre": "HTTV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/httv.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-httv-ha-tinh-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "thdtv1": {
        "nombre": "THDTV1",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/thdt.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-thdt1-dong-thap-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "thdt2": {
        "nombre": "THDTV2",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/thdt2.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-thdt2-mientay-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "hdtv": {
        "nombre": "HDTV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/hdtv.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-hdtv-hai-duong-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "stv": {
        "nombre": "STV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/sonla.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-stv-sonla-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "hgtv": {
        "nombre": "HGTV",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/hgtv.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-hgtv-hau-giang-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
     "ktv1": {
        "nombre": "KTV1",
        "m3u8_url": "https://tv.ktv.org.vn/hls/ktv1.m3u8",
        "fuente": "http://xemtruyenhinh.xyz/kenh-ktv-khanh-hoa-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "krt": {
        "nombre": "KRT",
        "m3u8_url": "https://tv.kontumtv.vn/live/kontumtv/kontumtv.m3u8",
        "fuente": "http://xemtruyenhinh.xyz/kenh-krt-kontum-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "hbtvhoa": {
        "nombre": "HBTVhoa",
        "iframe_url": "http://xemtruyenhinh.xyz/kenh/hbtv.php",
        "fuente": "http://xemtruyenhinh.xyz/kenh-hbtv-hoa-binh-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "trt1": {
        "nombre": "TRT1",
        "m3u8_url": "https://live.trt.com.vn/TRT-Online/chunklist.m3u8",
        "fuente": "http://xemtruyenhinh.xyz/kenh-trt-thua-thien-hue-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
    "hytv": {
        "nombre": "HYTV",
        "m3u8_url": "https://1253218859.e.cdneverest.net/aTZsLPt6DacIdU6mMkCF-Q/1711598005/live/285f5449d7d7d2946e0bd2d54b7e60f25a4/playlist.m3u8",
        "fuente": "https://hungyentv.vn/truc-tuyen",
        "pais": "vn"
    },
    "kgtv": {
        "nombre": "kgtv",
        "m3u8_url": "https://tv.kgtv.vn/live/kgtv/kgtv.m3u8",
        "fuente": "http://xemtruyenhinh.xyz/kenh-kgtv-kiengiang-tv-truc-tuyen-dia-phuong.html",
        "pais": "vn"
    },
// VENEZUELA
    "globovision": {
        "nombre": "Globovisión En Vivo",
        "yt_id": "UCfJtBtmhnIyfUB6RqXeImMw",
        "pais": "ve"
    },
    "cantina-tv": {
        "nombre": "Cantina Tv",
        "m3u8_url": "https://vcp.myplaytv.com/cantinatv/cantinatv/playlist.m3u8",
        "fuente": "http://www.cantinatv.com/",
        "pais": "ve"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "telesur-tv": {
        "nombre": "Telesur Tv",
        "yt_id": "UCbHFKMtqLYkIBRiPHJwxu_w",
        "fuente": "",
        "pais": "ve"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "vpi-tv": {
        "nombre": "Vpi Tv",
        "yt_id": "UCVFiIRuxJ2GmJLUkHmlmj4w",
        "fuente": "",
        "pais": "ve"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
// MEXICO
    "MILENIO": {
        "nombre": "MILENIO",
        "yt_id": "UCFxHplbcoJK9m70c4VyTIxg",
        "fuente": "",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "TVP-Mexico": {
        "nombre": "TVP Mexico",
        "m3u8_url": "https://5ca3e84a76d30.streamlock.net/gpacifico2/smil:mochis.smil/chunklist_w1799724172_b978000_sleng.m3u8",
        "fuente": "https://tvpacifico.mx/tv-en-linea/mochis",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },  
    "Televisa-Guadalajara": {
        "nombre": "Televisa Guadalajara",
        "yt_id": "UCRujF_YxVVFmTRWURQH-Cww",
        "fuente": "https://www.youtube.com/@televisaguadalajara",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Canal-10-Durango": {
        "nombre": "Canal 10 Durango",
        "iframe_url": "https://conceptoweb-studio.com/radio/video/canal10durango/",
        "fuente": "https://canal10.com.mx/sitio/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Televisa-Morelos": {
        "nombre": "Televisa Morelos",
        "yt_id": "UCcC9ykApQrgl4UxbKg2U4zw",
        'fuente': 'https://www.youtube.com/@televisamorelos',
        "fuente": "",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "tvmar-puerto-vallarta": {
        "nombre": "tvmar puerto vallarta",
        "iframe_url": "https://conceptoweb-studio.com/radio/video/tvmarvallarta/",
        "fuente": "https://tvmar.tv/puerto-vallarta",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Canal-ADN-40": {
        "nombre": "Canal-ADN-40",
        "yt_id": "UC7k--FhnJzhPTrbtldMSoQQ",
        "fuente": "https://www.youtube.com/@ADN40MX",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Canal2-ADN40": {
        "nombre": "Canal2 ADN40",
        "iframe_url": "https://mdstrm.com/live-stream/60b578b060947317de7b57ac?jsapi=true&show_controls_on_ad=true&autoplay=true&player=607868647ef7d607f13d0adb&show_title=false&ads[map]=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Flive%2Fads%3Fiu%3D%2F29782907%2FADN-40%2FEnvivoConstantPage%26description_url%3D%5Bplaceholder%5D%26url%3D%26env%3Dvp%26impl%3Ds%26tfcd%3D0%26npa%3D0%26gdfp_req%3D1%26output%3Dvast%26sz%3D640x480%26unviewed_position_start%3D1%26ad_rule%3D1%26correlator%3D%22",
        "fuente": "https://live.adn40.mx/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },  
        "Telemar-Campeche": {
        "nombre": "Telemar Campeche",
        "iframe_url": "https://www.dailymotion.com/embed/video/x80bl3l?autoplay=1",
        "fuente": "https://telemarcampeche.com/transmision-en-vivo/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Tvt-Mexico": {
        "nombre": "Tvt Mexico",
        "iframe_url": "https://conceptoweb-studio.com/radio/video/tabasco/",
        "fuente": "https://tvt.mx/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },     
    "quierotv-Mexico": {
        "nombre": "Quierotv Mexico",
        "iframe_url": "https://www.dailymotion.com/embed/video/x8lng9k?autoplay=0",
        "fuente": "https://quierotv.mx/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },     
    "canal-66": {
        "nombre": "Canal-66",
        "iframe_url": "https://conceptoweb-studio.com/radio/video/canal66/",
        "fuente": "https://canal66.tv/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },     
    "Canal-33-Tijuan": {
        "nombre": "Canal 33 Tijuana",
        "iframe_url": "https://conceptoweb-studio.com/radio/video/canal66/",
        "fuente": "https://canal66.tv/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },     
    "Ryta": {
        "nombre": "Ryta",
        "m3u8_url": "https://60417ddeaf0d9.streamlock.net/telemetrika3/smil:telemetrika3.smil/playlist.m3u8",
        "fuente": "https://ryta.com.mx/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },     
    "Canal-44": {
        "nombre": "Canal 44",
        "iframe_url": "https://conceptoweb-studio.com/radio/video/canal44/",
        "fuente": "https://canal44.com/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },             
    "Foro-Tv": {
        "nombre": "Foro Tv",
        "m3u8_url": "https://channel02-notusa.akamaized.net/hls/live/2023914/event01/index_4.m3u8",
        "fuente": "https://www.nmas.com.mx/foro-tv/",
        "pais": "mx"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },        
// GUATEMALA
    "canal3-guatemala": {
        "nombre": "Canal3 Guatemala",
        "iframe_url": "https://dy434h3s52eoj.cloudfront.net/Canal3GT/01582b1c46c04a847aa7c4936d1eeba7.sdp/playlist.m3u8?DVR",
        "fuente": "https://www.chapintv.com/envivo-canal-23/",
        "pais": "gt"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Canal7-Guatemala": {
        "nombre": "Canal7 Guatemala",
        "m3u8_url": "https://dy434h3s52eoj.cloudfront.net/Canal7GT/d84b644e13e68dd78dfcb9a0cf0338f1.sdp/Canal7GT/Canal7GT1/chunks.m3u8?DVR",
        "fuente": "https://www.chapintv.com/envivo-canal-23/",
        "pais": "gt"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "TN23-Guatemala": {
        "nombre": "TN23-Guatemala",
        "iframe_url": "",
        "fuente": "https://www.chapintv.com/envivo-canal-23/",
        "pais": "gt"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Canal27-Guatemala": {
        "nombre": "Canal27 Guatemala",
        "m3u8_url": "https://live.canal27.tv:3633/live/canal27live.m3u8",
        "fuente": "https://www.canal27.org/",
        "pais": "gt"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
// HONDURAS
    "HCH-En-Vivo": {
        "nombre": "HCH En Vivo",
        "yt_id": "UCIs6fmAXOI1K2jgkoBdWveg",
        "fuente": "https://hch.tv/live/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },  
    "Televicentro": {
        "nombre": "Televicentro",
        "iframe_url": "https://mdstrm.com/live-stream/6287fda8ea3b8b397d1ca2ed",
        "fuente": "https://www.televicentro.com/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Tencanal-10": {
        "nombre": "Tencanal 10",
        "m3u8_url": "https://62418d5684c12.streamlock.net/TENHD/TENLive.smil/chunklist_w1421547273_b1248000.m3u8",
        "fuente": "https://tencanal10.tv/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Canal-11": {
        "nombre": "Canal-11",
        "m3u8_url": "https://us-b4-p-e-nq15.cdn.mdstrm.com/live-stream/603d4e1fb042ce07c5c8f911/publish/media_200.m3u8?aid=60356e540f843032743f6852&uid=hM3enSvwRarqiVI8eni3rZaaKqsdsQHq&sid=xgZgfXl2xsSVDUPx6DapICZ3ckQIuORI&pid=6Yoq8FehK3oRwhiOyCf8daAtwOqjsNY9&ref=https%3A%2F%2Fcanal11.hn%2F&without_cookies=false&listenerid=&dnt=true&es=us-b4-p-e-nq15.cdn.mdstrm.com&ote=1705447408648&ot=NL2DGzXi_IYuXkXHICIybQ&proto=https&pz=us",
        "fuente": "https://canal11.hn/en-vivo/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Unetv": {
        "nombre": "Unetv",
        "m3u8_url": "https://amixtv.live:3395/live/unetvlive.m3u8",
        "fuente": "http://www.unetvhn.com/en-vivo/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "CHtv": {
        "nombre": "CHtv",
        "iframe_url": "https://gavamultimedios.com/CHTV/index.php",
        "fuente": "https://chtv.hn/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Qhubotv": {
        "nombre": "Qhubotv",
        "iframe_url": "https://worldkast.com/newplayer/sitv.html",
        "fuente": "https://qhubotv.com/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "DEPORTES-TELEVICENTRO": {
        "nombre": "DEPORTES TELEVICENTRO",
        "iframe_url": "https://mdstrm.com/live-stream/6287fdc9303e3008289ab711",
        "fuente": "https://www.deportestvc.com/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "ltv-en-vivo": {
        "nombre": "ltv en vivo",
        "iframe_url": "https://panel.fiberstreams.com:8080/VideoPlayer/6022",
        "fuente": "https://www.ltv.hn/ltv-en-vivo/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Teleprogreso": {
        "nombre": "Teleprogreso",
        "iframe_url": "https://tphonduras.net/TPLIVE/",
        "fuente": "https://www.teleprogreso.tv/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Edntv": {
        "nombre": "Edntv",
        "iframe_url": "https://conceptoweb-studio.com/radio/video/edntv/",
        "fuente": "https://www.ltv.hn/ltv-en-vivo/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Qhubo": {
        "nombre": "Qhubo",
        "iframe_url": "https://tvinsur.com/embed/tv/hn/qhubotv.html?v=1",
        "fuente": "https://qhubotv.com/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Justiciatv": {
        "nombre": "Justiciatv",
        "iframe_url": "https://cloud2.streaminglivehd.com:2000/VideoPlayer/justiciatv",
        "fuente": "https://justiciatv.hn/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Enlace": {
        "nombre": "Enlace",
        "iframe_url": "https://componentes.enlace.org/live#/player?enableInfoAndActivity=false&defaultDrawer=&autoPlay=true&mute=false",
        "fuente": "https://www.enlace.org/honduras/",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Ebenezer": {
        "nombre": "Ebenezer",
        "iframe_url": "https://5e85d90130e77.streamlock.net:443/6010/ngrp:6010_all/playlist.m3u8",
        "fuente": "https://ebenezer.hn/envivo",
        "pais": "hn"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
// ECUADOR   
    "Ecuavisa": {
        "nombre": "Ecuavisa",
        "iframe_url": "https://rudo.video/live/ecuavisa",
        "fuente": "https://www.ecuavisa.com/envivo",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Zaracaytv": {
        "nombre": "Zaracaytv",
        "iframe_url": "https://makrodigital.com/makrostreaming/zaracaytv/",
        "fuente": "http://zaracaytv.com/",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "ABC": {
        "nombre": "ABC",
        "iframe_url": "https://cdn.jwplayer.com/players/0qRytEJD-bL2g5Vmx.html",
        "fuente": "https://www.abc.com.py/tv/",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Canalunoecuador": {
        "nombre": "Canalunoecuador",
        "iframe_url": "https://www.eltelegrafo.com.ec/medios/stream.php",
        "fuente": "https://canalunoecuador.com/",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Ecuadortv7": {
        "nombre": "Ecuadortv7",
        "iframe_url": "https://cp.panelchs.com:2020/VideoPlayer/8122?autoplay=1",
        "fuente": "https://www.ecuadortv.ec/",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Manavision": {
        "nombre": "Manavision",
        "m3u8_url": "https://play.once.net.ec/play/Ily2oYdd3E1fi9wK2zORoRovFU9P5xM0g3CNVK2MT0M/m3u8",
        "fuente": "https://www.eldiario.ec/videos-manavision/",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Multicanalcatamayo": {
        "nombre": "Multicanalcatamayo",
        "iframe_url": "https://playerhd.eu/tv/multicanal/",
        "fuente": "https://www.multicanalcatamayo.com/",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "RTS": {
        "nombre": "RTS",
        "iframe_url": "",
        "fuente": "https://www.rts.com.ec/envivo/",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Ecotel": {
        "nombre": "Ecotel",
        "iframe_url": "https://playerhd.eu/tv/ecotel/",
        "fuente": "https://www.ecotel.tv/",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
    "Telesucesos": {
        "nombre": "Telesucesos",
        "iframe_url": "https://ticsbalancer.ticsecuador.com.ec/TeleSucesos/play.html?name=UIO-HD",
        "fuente": "https://www.telesucesos.net/",
        "pais": "ec"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },    
// ITALIA
    "La7": {
        "nombre": "La7",
        "iframe_url": "https://d15umi5iaezxgx.cloudfront.net/LA7/DRM/DASH/Live.mpd",
        "fuente": "https://www.la7.it/dirette-tv",
        "pais": ""
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Lombardia": {
        "nombre": "Lombardia",
        "m3u8_url": "https://5db313b643fd8.streamlock.net:443/lmbiatv/lmbiatv/playlist.m3u8",
        "fuente": "https://www.lombardiatv.com/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Televenezia": {
        "nombre": "Televenezia",
        "m3u8_url": "https://59d7d6f47d7fc.streamlock.net/televenezia/televenezia/playlist.m3u8",
        "fuente": "https://www.veneziaradiotv.it/streaming-televenezia/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Rtv38": {
        "nombre": "Rtv38",
        "iframe_url": "https://845d8509d2cb4f249dd0b2ae5755b6c2.msvdn.net/rtv38/rtv38_live_main/mainabr/playlist_dvr.m3u8",
        "fuente": "https://www.tg38.it/rtv38/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Milano-Pavia-TV": {
        "nombre": "Milano Pavia TV",
        "iframe_url": "https://player.streamshow.it/hosted/telepavia.php?autoplay=true&muted=true&posterimage=",
        "fuente": "https://www.milanopavia.tv/diretta-tv-milanopaviatv",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "TvModa": {
        "nombre": "TvModa",
        "m3u8_url": "https://585b1526dec74509b4bacb3edfffa885.msvdn.net/live/S34780352/RcBUa84Fth0C/playlist.m3u8",
        "fuente": "https://video.milanofinanza.it/tvmoda/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "TvL": {
        "nombre": "TvL",
        "m3u8_url": "https://live.mariatvcdn.com/mariatvcdn/70564e1c6884c007c76f0c128d679eed.sdp/mono.m3u8",
        "fuente": "https://www.tvl.it/it/diretta-tvl",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Sportvl": {
        "nombre": "Sportvl",
        "m3u8_url": "https://live.mariatvcdn.com/tvlsport/79d485442e700b9ae37c4344c130998d.sdp/mono.m3u8",
        "fuente": "https://www.tvl.it/it/diretta-sportvl",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Canale3": {
        "nombre": "Canale3",
        "iframe_url": "https://play.xdevel.com/13096/video0s976737-1453",
        "fuente": "https://canale3.tv/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Canale10": {
        "nombre": "Canale10",
        "iframe_url": "https://wz4.newradio.it:8080/VideoPlayer/dyrqkgmjqq?autoplay=1",
        "fuente": "https://canaledieci.it/diretta/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Super": {
        "nombre": "Super",
        "m3u8_url": "https://59d7d6f47d7fc.streamlock.net/supertv/supertv/playlist.m3u8",
        "fuente": "https://www.bresciasat.it/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Canaleotto": {
        "nombre": "Canaleotto",
        "iframe_url": "https://player.streamshow.it/hosted/canale8.php?autoplay=false&muted=false&posterimage=https://",
        "fuente": "http://www.canaleotto.it/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Canale-2": {
        "nombre": "Canale 2",
        "m3u8_url": "https://59d7d6f47d7fc.streamlock.net/canale2/canale2/playlist.m3u8",
        "fuente": "http://www.canale2tv.it/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "QVC": {
        "nombre": "QVC",
        "iframe_url": "https://qrg.akamaized.net/hls/live/2017383/lsqvc1it/480p1000/480p1000.m3u8",
        "fuente": "https://www.qvc.it/tv/live.html",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Videolina": {
        "nombre": "Videolina",
        "m3u8_url": "https://7e1cc2454f2242afabe05cc0a2f483cd.msvdn.net/videolina/videolina_live/videolina_live/playlist.m3u8",
        "fuente": "https://www.videolina.it/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Telemolise": {
        "nombre": "Telemolise",
        "m3u8_url": "http://185.202.128.1:1935/Telemolise4K/Telemolise4K/playlist.m3u8",
        "fuente": "http://www.telemolise.com/stream.php",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Reitv": {
        "nombre": "Reitv",
        "m3u8_url": "https://5f22d76e220e1.streamlock.net/reitv/reitv/playlist.m3u8",
        "fuente": "https://www.reitv.it/index2.html",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Telenord": {
        "nombre": "Telenord",
        "m3u8_url": "https://64b16f23efbee.streamlock.net:443/telenord/telenord/playlist.m3u8",
        "fuente": "https://telenord.it/diretta-streaming/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "TG-Norba-24": {
        "nombre": "TG Norba24",
        "iframe_url": "https://play.xdevel.com/13074",
        "fuente": "https://norbaonline.it/live.php?diretta=tgnorba",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Umbriatv": {
        "nombre": "Umbriatv",
        "m3u8_url": "https://umbriatv.stream.rubidia.it:8083/live/umbriatv/playlist.m3u8",
        "fuente": "https://www.umbriatv.com/diretta-tv/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Telelaser": {
        "nombre": "Telelaser",
        "m3u8_url": "https://585b674743bbb.streamlock.net:443/9022/9022/playlist.m3u8",
        "fuente": "http://telelaser.tv/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Tvoggisalerno": {
        "nombre": "Tvoggisalerno",
        "iframe_url": "https://platform.wim.tv/embed/?live=cfb54b0e-b5fb-4ed5-9ae0-bec1dc02e596",
        "fuente": "https://www.tvoggisalerno.it/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Rete8": {
        "nombre": "Rete8",
        "iframe_url": "https://zerounocaststreaming.it:2020/VideoPlayer/rete8?autoplay=1",
        "fuente": "https://www.rete8.it/canali-tv/rete8/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Telebelluno": {
        "nombre": "Telebelluno",
        "m3u8_url": "https://live.mariatvcdn.com/telebelluno/a3b80388da9801906adf885282e73bc3.sdp/mono.m3u8",
        "fuente": "https://www.telebelluno.it/streaming/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "GRP": {
        "nombre": "GRP",
        "iframe_url": "https://players.cdn.enetres.net/live/79CE6A0C6AF94F7EB0F93BD0DE2949EF02204",
        "fuente": "https://grp.it/index.php/diretta-tv/",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Rai-SüdTirol": {
        "nombre": "Rai SüdTirol",
        "m3u8_url": "https://wzstreaming.rai.it/TVlive/smil:liveStream.smil/playlist.m3u8",
        "fuente": "https://www.raibz.rai.it/de/index.php",
        "pais": "it"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
// ESPAÑA
    "CNN-Español": {
        "nombre": "CNN Español",
        "iframe_url": "http://45.166.92.22:58001/play/a036/index.m3u8",
        "fuente": "",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "RTVE RADIOFICIAL": {
        "nombre": "RTVE RADIOFICIAL",
        "iframe_url": "https://www.rtve.es/play/videos/directo/ojo-critico-rne-arco-madrid-2024/",
        "fuente": "https://www.rtve.es/play/videos/directo",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "RTVE-LA1-OFICIAL": {
        "nombre": "RTVE LA1 OFICIAL",
        "iframe_url": "https://www.rtve.es/play/videos/directo/la-1/",
        "fuente": "https://www.rtve.es/play/videos/directo/",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "RTVE-LA2-OFICIAL": {
        "nombre": "RTVE LA2 OFICIAL",
        "iframe_url": "https://www.rtve.es/play/videos/directo/la-2/",
        "fuente": "https://www.rtve.es/play/videos/directo/",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "RTVE-OFICIAL": {
        "nombre": "RTVE OFICIAL",
        "iframe_url": "https://www.rtve.es/play/videos/directo/24h/",
        "fuente": "https://www.rtve.es/play/videos/directo/",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "RTVE-En-Vivo": {
        "nombre": "RTVE En Vivo",
        "yt_id": "UC7QZIf0dta-XPXsp9Hv4dTw",
        "fuente": "https://www.rtve.es/play/videos/directo/",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "RTVE-Noticias": {
        "nombre": "RTVE Noticias",
        "iframe_url": "https://www.youtube.com/embed/mzdfGCdNSHQ?si=flc8T9xScgW4tz7h",
        "fuente": "https://www.rtve.es/play/videos/directo/",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "GALICIA": {
        "nombre": "GALICIA",
        "m3u8_url": "https://crtvg-europa.flumotion.cloud/playlist.m3u8",
        "fuente": "https://www.crtvg.es/portada",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Canalsur": {
        "nombre": "Canalsur",
        "iframe_url": "https://www.youtube.com/embed/live_stream?channel=UChtLgH7ZJLqLGWJpBnzy9Lg&rel=0&modestbranding&enablejsapi=1&origin=https%3A%2F%2Fwww.canalsur.es",
        "fuente": "https://www.canalsur.es/tv_directo-1193.html",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Señal-España": {
        "nombre": "Señal España",
        "iframe_url": "https://playerssl.radioonlinehd.com/tv91/xhunestv/",
        "fuente": "https://senalespana.unes.edu.mx/",
        "pais": "es"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
// BRASIL
    "CNN-Brasil": {
        "nombre": "CNN Brasil",
        "yt_id": "UCvdwhh_fDyWccR42-rReZLw",
        "fuente": "",
        "pais": "br"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
// TAILANDIA
    "Workpointtv": {
        "nombre": "Workpointtv",
        "iframe_url": "https://geo.dailymotion.com/player/x8wpe.html?video=k28IxkHn9OkzvvqoVob",
        "fuente": "https://www.workpointtv.com/live-stream-page/",
        "pais": "th"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "Workpointtv-1": {
        "nombre": "Workpointtv 1",
        "iframe_url": "https://player.twitch.tv/?channel=workpointofficial&parent=www.workpointtv.com&referrer=https%3A%2F%2Fwww.workpointtv.com%2Flive-stream-page%2F",
        "fuente": "https://www.workpointtv.com/live-stream-page/",
        "pais": "th"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
// INDONESIA
    "ANTV": {
        "nombre": "ANTV",
        "iframe_url": "https://www.vidio.com/live/782/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/782",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    }, 
    "TVOne": {
        "nombre": "TVOne",
        "iframe_url": "https://www.vidio.com/live/783/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/783",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Tawaf-TV": {
        "nombre": "Tawaf TV",
        "iframe_url": "https://www.vidio.com/live/874/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/12607",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "TRAX": {
        "nombre": "TRAX",
        "iframe_url": "https://www.vidio.com/live/7055/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/7055",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "DAAI-TV": {
        "nombre": "DAAI TV",
        "iframe_url": "https://www.vidio.com/live/6482/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/6482",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Kompas-TV": {
        "nombre": "Kompas TV",
        "iframe_url": "https://www.vidio.com/live/874/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/6441",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "BTV": {
        "nombre": "BTV",
        "iframe_url": "https://www.vidio.com/live/6165/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/6165",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Metro-TV": {
        "nombre": "Metro TV",
        "iframe_url": "https://www.vidio.com/live/777/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/777",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "TVRI": {
        "nombre": "TVRI",
        "iframe_url": "https://www.vidio.com/live/6441/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/6441",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Trans7": {
        "nombre": "Trans7",
        "iframe_url": "https://www.vidio.com/live/734/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/206",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "TRANS-tv": {
        "nombre": "TRANS Tv",
        "iframe_url": "https://www.vidio.com/live/733/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/733",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Ardan-Radio": {
        "nombre": "Ardan Radio",
        "iframe_url": "https://www.vidio.com/live/7184/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/7184",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "TVN": {
        "nombre": "TVN",
        "iframe_url": "https://www.vidio.com/live/6362/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/6362",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Zee-Bioskop": {
        "nombre": "Zee Bioskop",
        "iframe_url": "https://www.vidio.com/live/6399/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/6399",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "RANS-TV": {
        "nombre": "RANS TV",
        "iframe_url": "https://www.vidio.com/live/8241/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/8241",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "AJWA-TV": {
        "nombre": "AJWA-TV",
        "iframe_url": "https://www.vidio.com/live/7464/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/7464",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "RTV": {
        "nombre": "RTV",
        "iframe_url": "https://www.vidio.com/live/1561/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/5415",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "NETV": {
        "nombre": "NETV",
        "iframe_url": "https://www.vidio.com/live/5415/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/5415",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "JAKTV": {
        "nombre": "JAKTV",
        "iframe_url": "https://www.vidio.com/live/5415/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/5415",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Moji": {
        "nombre": "Moji",
        "iframe_url": "https://www.vidio.com/live/206/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/206",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "SCTV": {
        "nombre": "SCTV",
        "iframe_url": "https://www.vidio.com/live/204-sctv/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/204-sctv?schedule_id=3249308",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Indosiar": {
        "nombre": "Indosiar",
        "iframe_url": "https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/205-indosiar",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "CNN Chile00": {
        "nombre": "CNN Chile00",
        "iframe_url": "https://www.vidio.com/live/733-trans-tv/embed?autoplay=true&player_only=true&mute=false",
        "fuente": "https://www.vidio.com/live/733-trans-tv?schedule_id=3245518",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "CNN-Cl0": {
        "nombre": "CNN-Cl0",
        "m3u8_url": "https://live.cnnindonesia.com/livecnn/smil:cnntv.smil/playlist.m3u8",
        "fuente": "https://www.cnnchile.com/",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "ANTV-l": {
        "nombre": "ANTV l",
        "iframe_url": "https://player.twitch.tv/?channel=antv_digimed&parent=alplox.github.io",
        "fuente": "https://www.antvklik.com/",
        "pais": "id"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
// MALAYSIA
    "Tv1": {
        "nombre": "Tv1",
        "iframe_url": "https://rtm-player.glueapi.io/latest/h/1",
        "fuente": "https://rtmklik.rtm.gov.my/live/tv1",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Tv2": {
        "nombre": "Tv2",
        "iframe_url": "https://rtm-player.glueapi.io/latest/h/2",
        "fuente": "https://rtmklik.rtm.gov.my/live/tv2",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Tv2-live": {
        "nombre": "Tv2 live",
        "iframe_url": "https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv2/",
        "fuente": "https://www.livetvmalaysia.online/2023/12/tv2-live.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Tv3": {
        "nombre": "Tv3",
        "iframe_url": "https://desireevanessen.blogspot.com/2023/06/tvv3.html",
        "fuente": "https://www.livetvmalaysia.online/2019/04/tv3.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Okey": {
        "nombre": "Okey",
        "iframe_url": "https://rtm-player.glueapi.io/latest/h/3",
        "fuente": "https://rtmklik.rtm.gov.my/live/okey",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Okey1": {
        "nombre": "Okey1",
        "iframe_url": "https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv-okey/",
        "fuente": "https://www.livetvmalaysia.online/2018/05/okey.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Beritartm": {
        "nombre": "Beritartm",
        "iframe_url": "https://rtm-player.glueapi.io/latest/h/5",
        "fuente": "https://rtmklik.rtm.gov.my/live/beritartm",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Tv6": {
        "nombre": "Tv6",
        "iframe_url": "https://rtm-player.glueapi.io/latest/h/6",
        "fuente": "https://rtmklik.rtm.gov.my/live/tv6",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Parliament-Live": {
        "nombre": "Parliament Live",
        "iframe_url": "https://rtm-player.glueapi.io/latest/h/7",
        "fuente": "https://www.pmo.gov.my/parliament-live-dewan-rakyat/",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Boraktengahlapar": {
        "nombre": "Boraktengahlapar",
        "iframe_url": "https://rtm-player.glueapi.io/latest/h/13669",
        "fuente": "https://rtmklik.rtm.gov.my/live/boraktengahlapar",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Madani-Urdu-Live": {
        "nombre": "Madani Urdu Live",
        "iframe_url": "https://www.youtube.com/embed/live_stream?channel=UCuUocUAnPTUkwGtC8GuNKow",
        "fuente": "https://www.madanichannel.tv/islam/streaming/watch-live-youtube-madani-channel-urdu.htm",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Bernama-TV-🇲🇾": {
        "nombre": "Bernama TV 🇲🇾",
        "iframe_url": "https://www.youtube.com/embed/-yN2chxbai4?enablejsapi=1&rel=0&showinfo=0&controls=1&html5=1&autoplay=1&mute=1&playsinline=1",
        "fuente": "https://www.youtube.com/channel/UCcZg5r9hBqK_VPUT2I7eYVw",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Astro-AWANI": {
        "nombre": "Astro AWANI",
        "iframe_url": "https://geo.dailymotion.com/player/x7r7w.html?video=x8dbnq6&customConfig[keyvalues]=client_id%3Dnull&actionInfo=false&dmPubtool=new-cdn-ce-v2",
        "fuente": "https://www.astroawani.com/video-terkini",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Tv9": {
        "nombre": "Tv9",
        "iframe_url": "https://desireevanessen.blogspot.com/2023/06/tvv9.html",
        "fuente": "https://www.livetvmalaysia.online/2019/04/tv9.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Sukan": {
        "nombre": "Sukan",
        "iframe_url": "https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/sukan-rtm/",
        "fuente": "https://www.livetvmalaysia.online/2022/06/sukan.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Berita1": {
        "nombre": "Berita1",
        "iframe_url": "https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/berita-rtm/",
        "fuente": "https://www.livetvmalaysia.online/2022/09/berita.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Ikim": {
        "nombre": "Ikim",
        "iframe_url": "https://tvizer.blogspot.com/2023/08/tv-ikim.html",
        "fuente": "https://www.livetvmalaysia.online/2017/12/tv-ikim.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Bernama-Tv1": {
        "nombre": "Bernama Tv1",
        "iframe_url": "https://desireevanessen.blogspot.com/2023/07/bernama.html",
        "fuente": "https://www.livetvmalaysia.online/2017/12/bernama-tv.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Selangor": {
        "nombre": "Selangor",
        "iframe_url": "https://paddlesportsportal.com/tvs.php",
        "fuente": "https://www.livetvmalaysia.online/2017/12/tv-selangor.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Awani-Tv1": {
        "nombre": "Awani Tv1",
        "iframe_url": "https://tvizer.blogspot.com/2023/08/astro-awani.html",
        "fuente": "https://www.livetvmalaysia.online/2018/12/awani.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Didik-ntv7": {
        "nombre": "Didik ntv7",
        "iframe_url": "https://desireevanessen.blogspot.com/2023/07/didik.html",
        "fuente": "https://www.livetvmalaysia.online/2019/04/ntv7.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Alhijrah": {
        "nombre": "Alhijrah",
        "iframe_url": "https://desireevanessen.blogspot.com/2023/07/alhijrah.html",
        "fuente": "https://www.livetvmalaysia.online/2017/12/tv-alhijrah.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Motogp": {
        "nombre": "Motogp",
        "iframe_url": "https://desireevanessen.blogspot.com/2024/03/gp1.html",
        "fuente": "https://www.livetvmalaysia.online/2018/12/motogp.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Bola": {
        "nombre": "Bola",
        "iframe_url": "https://desireevanessen.blogspot.com/2024/03/foot.htm",
        "fuente": "https://www.livetvmalaysia.online/2018/03/bola.html",
        "pais": "my"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
// PHILIPPINES
    "Dzrh": {
        "nombre": "Dzrh",
        "iframe_url": "https://www.youtube.com/embed/rTczxU43uSs?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.dzrh.com.ph&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=3",
        "fuente": "https://www.dzrh.com.ph/",
        "pais": "ph"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "ABS-CBNEntertainment": {
        "nombre": "ABS CBNEntertainment",
        "iframe_url": "https://www.youtube.com/embed/OiVPc54JfFc?si=U6W-SYFCFNuED6oV",
        "fuente": "https://www.youtube.com/watch?v=OiVPc54JfFc&ab_channel=ABS-CBNEntertainment",
        "pais": "ph"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Kapamilya": {
        "nombre": "Kapamilya",
        "iframe_url": "https://www.youtube.com/embed/OiVPc54JfFc?si=zWFP746T0ynRj8ER",
        "fuente": "https://www.youtube.com/@abscbnentertainment",
        "pais": "ph"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Untv": {
        "nombre": "Untv",
        "iframe_url": "https://www.youtube.com/embed/FgW4dJZRIgs?si=_16b64dihIq4A1LO",
        "fuente": "https://www.youtube.com/@UNTVNewsandRescue",
        "pais": "ph"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
// CANADÁ
    "Global-News": {
        "nombre": "Global News",
        "m3u8_url": "https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8",
        "fuente": "https://globalnews.ca/live/national/",
        "pais": "ca"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
// ESTADOS UNIDOS
    "ABC7": {
        "nombre": "ABC7",
        "yt_id": "UCVxBA3Cbu3pm8w8gEIoMEog",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    'abc7-swfl': {
        'nombre': 'ABC7 SWFL',
        'yt_id': 'UCq9e_hCv2jvgck8WowW1NXg',
        'pais': 'us'
    },
    "ABC7-SWFL": {
        "nombre": "ABC7 SWFL",
        "yt_id": "UCq9e_hCv2jvgck8WowW1NXg",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "ABC-News": {
        "nombre": "ABC News",
        "iframe_url": "https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8",
        "fuente": "https://abcnews.go.com/Live",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    'agenda-free-tv': {
        'nombre': 'Agenda-Free TV',
        'yt_id': 'UCshCsg1YVKli8yBai-wa78w',
        'pais': 'us'
    },
    "Agenda-Free-TV": {
        "nombre": "Agenda-Free TV",
        "yt_id": "UCshCsg1YVKli8yBai-wa78w",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "VOA": {
        "nombre": "VOA",
        "m3u8_url": "https://voa-ingest.akamaized.net/hls/live/2033866/tvmc01/playlist.m3u8",
        "fuente": "https://www.vozdeamerica.com/",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Ariana-NEWS": {
        "nombre": "Ariana-NEWS",
        "m3u8_url": "https://d10rltuy0iweup.cloudfront.net/ATNNEWS/myStream/playlist.m3u8",
        "fuente": "https://www.ariananews.af/livetv",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "agenda-free-tv-tw": {
        "nombre": "Agenda Free Tv Tw",
        "iframe_url": "https://player.twitch.tv/?channel=agendafreetv&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/agendafreetv",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Bloomberg-US": {
        "nombre": "Bloomberg US",
        "m3u8_url": "https://www.bloomberg.com/media-manifest/streams/phoenix-us.m3u8",
        "fuente": "https://www.bloomberg.com/",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Bloomberg-Europe": {
        "nombre": "Bloomberg Europe",
        "m3u8_url": "https://www.bloomberg.com/media-manifest/streams/eu.m3u8",
        "fuente": "https://www.bloomberg.com/europe",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Bloomberg-QuickTake": {
        "nombre": "Bloomberg QuickTake",
        "m3u8_url": "https://www.bloomberg.com/media-manifest/streams/qt.m3u8",
        "fuente": "https://www.bloomberg.com/",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Cheddar": {
        "nombre": "Cheddar",
        "m3u8_url": "https://livestream.chdrstatic.com/b93e5b0d43ea306310a379971e384964acbe4990ce193c0bd50078275a9a657d/cheddar-42620/cheddarweblive/cheddar/primary/2.m3u8",
        "fuente": "https://cheddar.com/live",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "CBSN": {
        "nombre": "CBSN",
        "m3u8_url": "https://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master_11.m3u8",
        "fuente": "https://www.cbsnews.com/live/",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "CNN-US": {
        "nombre": "CNN US",
        "iframe_url": "https://cnn-cnninternational-1-de.samsung.wurl.com/manifest/playlist.m3u8",
        "fuente": "https://us.cnn.com",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "CNBC-EU": {
        "nombre": "CNBC EU",
        "iframe_url": "https://vidplus.pc.cdn.bitgravity.com/cnbceu-origin/live/playlist.m3u8",
        "fuente": "https://www.cnbc.com/live-tv/",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "C-SPAN-1": {
        "nombre": "C-SPAN 1",
        "m3u8_url": "https://skystreams-lh.akamaihd.net/i/SkyC1_1@500806/master.m3u8",
        "fuente": "https://www.c-span.org/networks/?channel=c-span",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "C-SPAN-2": {
        "nombre": "C-SPAN 2",
        "m3u8_url": "https://skystreams-lh.akamaihd.net/i/SkyC2_1@500807/master.m3u8",
        "fuente": "https://www.c-span.org/networks/?channel=c-span",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "C-SPAN-3": {
        "nombre": "C-SPAN 3",
        "m3u8_url": "https://skystreams-lh.akamaihd.net/i/SkyC3_1@500808/master.m3u8",
        "fuente": "https://www.c-span.org/networks/?channel=c-span",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Fox-Business": {
        "nombre": "Fox Business",
        "yt_id": "UCCXoCcu9Rp7NPbTzIvogpZg",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Fox-News-Now": {
        "nombre": "Fox News Now",
        "m3u8_url": "https://fox-foxnewsnow-samsungus.amagi.tv/playlist.m3u8",
        "fuente": "https://video.foxnews.com/v/6174103160001",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "LiveNOW-from-FOX": {
        "nombre": "LiveNOW from FOX",
        "yt_id": "UCJg9wBPyKMNA5sRDnvzmkdg",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Newsmax": {
        "nombre": "Newsmax",
        "yt_id": "UCx6h-dWzJ5NpAlja1YsApdg",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "NBCLA": {
        "nombre": "NBCLA",
        "yt_id": "UCSWoppsVL0TLxFQ2qP_DLqQ",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "NBC-News": {
        "nombre": "NBC News",
        "yt_id": "UCeY0bbntWzzVIaj2z3QigXg",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "nbc-now-live-event": {
        "nombre": "NBC Now (Live Event)",
        "m3u8_url": "https://nbcnews-lh.akamaihd.net/i/nbc_live13@187394/master.m3u8",
        "fuente": "https://www.nbcnews.com/now",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "NBC-Now": {
        "nombre": "NBC Now",
        "m3u8_url": "https://nbcnews2.akamaized.net/hls/live/723426/NBCNewsPlaymaker24x7Linear99a3a827-ua/VIDEO_1_4596000.m3u8",
        "fuente": "https://www.nbcnews.com/now",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "PBS-America": {
        "nombre": "PBS America",
        "m3u8_url": "https://pbs-samsunguk.amagi.tv/playlist.m3u8",
        "fuente": "https://www.pbsamerica.co.uk/",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Record-News": {
        "nombre": "Record News",
        "yt_id": "UCuiLR4p6wQ3xLEm15pEn1Xw",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Sky-News": {
        "nombre": "Sky News",
        "yt_id": "UCoMdktPbSTixAyNGwb-UYkQ'",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Telemundo": {
        "nombre": "Telemundo",
        "m3u8_url": "http://45.166.92.22:58001/play/a00r/index.m3u8",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "Noticias-Telemundo": {
        "nombre": "Noticias Telemundo",
        "yt_id": "UCRwA1NUcUnwsly35ikGhp0A",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    "The-Sun": {
        "nombre": "The Sun",
        "yt_id": "UCIzXayRP7-P0ANpq-nD-h5g",
        "fuente": "",
        "pais": "us"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
// FRANCIA        
    'euronews-esp': {
        'nombre': 'euronews (Español)',
        'yt_id': 'UCyoGb3SMlTlB8CLGVH4c8Rw',
        'pais': 'fr'
    },
    "": {
        "nombre": "",
        "iframe_url": "",
        "fuente": "",
        "pais": "fr"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    'euronews-eng': {
        'nombre': 'euronews (English)',
        'yt_id': 'UCSrZ3UV4jOidv8ppoVuvW9Q',
        'pais': 'fr'
    },
    "": {
        "nombre": "",
        "iframe_url": "",
        "fuente": "",
        "pais": "fr"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    'euronews-eng-2': {
        'nombre': 'euronews (English) 2',
        'm3u8_url': 'https://rakuten-euronews-1-gb.samsung.wurl.com/manifest/playlist.m3u8',
        'fuente': 'https://www.euronews.com/live',
        'pais': 'fr'
    },
    "": {
        "nombre": "",
        "iframe_url": "",
        "fuente": "",
        "pais": "fr"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    'euronews-rus': {
        'nombre': 'euronews Русский',
        'yt_id': 'UCFzJjgVicCtFxJ5B0P_ei8A',
        'pais': 'fr'
    },
    'euronews-hun': {
        'nombre': 'euronews (magyarul)',
        'yt_id': 'UC4Ct8gIf9f0n4mdyGsFiZRA',
        'pais': 'fr'
    },
    'france-24-esp': {
        'nombre': 'FRANCE 24 Español',
        'yt_id': 'UCUdOoVWuWmgo1wByzcsyKDQ',
        'pais': 'fr'
    },
    'france-24-eng': {
        'nombre': 'FRANCE 24 English',
        'yt_id': 'UCQfwfsi5VrQ8yKZ-UWmAEFg',
        'pais': 'fr'
    },
    'france-24-fra': {
        'nombre': 'FRANCE 24 French',
        'm3u8_url': 'https://static.france24.com/live/F24_FR_HI_HLS/live_tv.m3u8',
        'fuente': 'https://www.france24.com/fr/direct',
        'pais': 'fr'
    },
    'france-info': {
        'nombre': 'franceinfo',
        'yt_id': 'UCO6K_kkdP-lnSCiO3tPx7WA',
        'pais': 'fr'
    },
    'lci': {
        'nombre': 'LCI',
        'm3u8_url': 'https://lci-hls-live-ssl.tf1.fr/lci/1/hls/live_2328.m3u8',
        'fuente': 'https://www.tf1info.fr/direct/',
        'pais': 'fr'
    },
// ALEMANIA
    'dw-español': {
        'nombre': 'DW Español',
        'm3u8_url': 'https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/stream03/streamPlaylist.m3u8',
        'pais': 'de'
    },
    'dw-deutsch': {
        'nombre': 'DW Deutsch',
        'yt_id': 'UCMIgOXM2JEQ2Pv2d0_PVfcg',
        'pais': 'de'
    },
    'dw-news': {
        'nombre': 'DW News',
        'yt_id': 'UCknLrEdhRCp1aegoMqRaCZg',
        'pais': 'de'
    },
    'dw-arabic': {
        'nombre': 'DW عربية',
        'yt_id': 'UC30ditU5JI16o5NbFsHde_Q',
        'pais': 'de'
    },
    'welt': {
        'nombre': 'WELT',
        'yt_id': 'UCZMsvbAhhRblVGXmEXW8TSA',
        'pais': 'de'
    },
// RUSIA
    '5-канал': {
        'nombre': '5 канал',
        'yt_id': 'UCkyrSWEcjZKpIwMxiPfOcgg',
        'pais': 'ru'
    },
    'Москва-24': {
        'nombre': 'Москва 24',
        'yt_id': 'UCIme7og-uTpdRXRgm0zzA2A',
        'pais': 'ru'
    },
    'Россия-24': {
        'nombre': 'Россия 24',
        'iframe_url': 'https://ok.ru/videoembed/3574052691599?nochat=1&autoplay=1',
        'fuente': 'https://xn--b1agj9af.xn--80aswg/video/rossija-24/',
        'pais': 'ru'
    },
    'РБК': {
        'nombre': 'РБК',
        'yt_id': 'UCWAK-dRtTEjnQnD96L6UMsQ',
        'pais': 'ru'
    },
    'RT-america': {
        'nombre': 'RT America',
        'iframe_url': 'https://actualidad.rt.com/live-embed',
        'pais': 'ru'
    },
    'RT-arabic': {
        'nombre': 'RT Arabic',
        'iframe_url': 'https://rutube.ru/play/embed/1bf2ee9dc3e20b4cb5a7ed4833bd7cb2',
        'pais': 'ru'
    },
    'RT-español': {
        'nombre': 'RT en Español',
        'iframe_url': 'https://actualidad.rt.com/live-embed',
        'pais': 'ru'
    },
    'RT-vivo': {
        'nombre': 'RT en vivo',
        'iframe_url': 'UCEIhICHOQOonjE6V0SLdrHQ',
        'pais': 'ru'
    },
    'RT-france': {
        'nombre': 'RT France',
        'yt_id': 'UCqEVwTnDzlzKOGYNFemqnYA',
        'pais': 'ru'
    },
    'RT-news': {
        'nombre': 'RT News',
        'yt_id': 'UCpwvZwUam-URkxB7g4USKpg',
        'pais': 'ru'
    },
    'RT-uk': {
        'nombre': 'RT UK',
        'yt_id': 'UC_ab7FFA2ACk2yTHgNan8lQ',
        'pais': 'ru'
    },
    'Телеканал-Дождь': {
        'nombre': 'Телеканал Дождь',
        'yt_id': 'UCdubelOloxR3wzwJG9x8YqQ',
        'pais': 'ru'
    },
    'yкраїна-24': {
        'nombre': 'Україна 24',
        'yt_id': 'UCMp5Buw-6LpbbV9r9Sl_5yg',
        'pais': 'ru'
    },
    '1tv': {
        'nombre': '1TV',
        'iframe_url': 'https://static.1tv.ru/eump/embeds/interactive.html?__paranja=yes&embed=..%2Fembeds%2F1tv_live.html&start=auto&muted=no&titleEnabled=yes&interactive=yes&embed_id=aca9762ad9b2e1633c4047c8',
        'fuente': 'https://www.1tv.ru/live',
        'pais': 'ru'
    },
    '24tv': {
        'nombre': '24TV',
        'iframe_url': 'https://rutube.ru/play/embed/261339ca4f1396ea0271d07364bd99dd',
        'fuente': 'https://crimea24.tv/broadcasting/',
        'pais': 'ru'
    },
    'Current-Time-TV': {
        'nombre': 'Current Time TV',
        'iframe_url': 'https://www.currenttime.tv/embed/player/1/92.html?type=video',
        'fuente': 'https://www.currenttime.tv/live/video/92',
        'pais': 'ru'
    },
    'm24': {
        'nombre': 'M24',
        'iframe_url': 'https://www.m24.ru/tv',
        'fuente': 'https://www.m24.ru/live',
        'pais': 'ru'
    },
    'ntv': {
        'nombre': 'NTV',
        'm3u8_url': 'https://cdn2.ntv.ru/ntv0_hd/tracks-v5a1/rewind-7150.m3u8',
        'fuente': 'https://www.ntv.ru/air/ntv/',
        'pais': 'ru'
    },
    'rbc': {
        'nombre': 'RBC',
        'm3u8_url': 'https://online-video.rbc.ru/online/rbctvhd.m3u8',
        'fuente': 'https://tv.rbc.ru/streams/',
        'pais': 'ru'
    },
    'ren': {
        'nombre': 'REN',
        'iframe_url': 'https://player.mediavitrina.ru/rentv/rentv_web/player.html',
        'fuente': 'https://ren.tv/live',
        'pais': 'ru'
    },
    'rtv': {
        'nombre': 'RTV',
        'm3u8_url': 'https://hugh.cdn.rumble.cloud/live/hr6yv36f/slot-4/mxtm-wdfe_1080p/chunklist_DVR.m3u8',
        'fuente': 'https://rumble.com/v35waq4-rt-news-livestream-247.html',
        'pais': 'ru'
    },
    'rtrplaneta': {
        'nombre': 'RTRPlaneta',
        'iframe_url': 'https://player.smotrim.ru/iframe/live/id/63251/showZoomBtn/false/isPlay/true/mute/true/sid/smotrim_rtr/',
        'fuente': 'https://vgtrk.ru/rtrplaneta',
        'pais': 'ru'
    },
    'POCCNЯ1': {
        'nombre': 'POCCNЯ1',
        'iframe_url': 'https://player.smotrim.ru/iframe/live/id/63254/showZoomBtn/false/isPlay/true/mute/true/sid/smotrim_r1/',
        'fuente': 'https://smotrim.ru/live/63254',
        'pais': 'ru'
    },
    'MIR': {
        'nombre': 'MIR',
        'iframe_url': 'https://player.mediavitrina.ru/mir_v2/mir/smotrim_web/player.html',
        'fuente': 'https://smotrim.ru/channel/253',
        'pais': 'ru'
    },
    'TBU': {
        'nombre': 'TBU',
        'iframe_url': 'https://www.tvc.ru/channel/onairiframe/',
        'fuente': 'https://www.tvc.ru/channel/onair',
        'pais': 'ru'
    },
    'tvrain': {
        'nombre': 'TVRain',
        'm3u8_url': 'https://wl.tvrain.tv/transcode/ngrp:ses_all/playlist.m3u8',
        'fuente': 'https://tvrain.tv/live/',
        'pais': 'ru'
    },
    'soyuz': {
        'nombre': 'Soyuz',
        'iframe_url': 'https://playercdn.cdnvideo.ru/aloha/players/tvsoyuz_player.html',
        'fuente': 'https://tv-soyuz.ru/tvprogramma',
        'pais': 'ru'
    },
    'channel-8': {
        'nombre': 'channel 8',
        'm3u8_url': 'https://v4.proofix.ru/8tv-europe/index.m3u8',
        'fuente': 'https://vipotv.com/channel-8/',
        'pais': 'ru'
    },
    'Zvezda': {
        'nombre': 'Zvezda',
        'iframe_url': 'https://rutube.ru/play/embed/5ab908fccfac5bb43ef2b1e4182256b0',
        'fuente': 'https://www.livehdtv.net/zvezda-zvezda-live-stream/',
        'pais': 'ru'
    },
    'iz-ru': {
        'nombre': 'Iz Ru',
        'iframe_url': 'https://www.livehdtv.net/yayin/?kanal=512&yayin=&guvenlik=$2y$10$fDXytyU.EQfeckWFQQwIfeqf2FyUkYCzCslMPDQQIAtGcTE.pUjLG',
        'fuente': 'https://www.livehdtv.net/iz-ru-live-stream-russia/',
        'pais': 'ru'
    },
// UCRANIA
    '24-Канал-онлайн': {
        'nombre': '24 Канал онлайн',
        'yt_id': 'UCja992VI_u2e52c9FHQXw5A',
        'pais': 'ua'
    },
    '34-телеканал': {
        'nombre': '34 телеканал',
        'yt_id': 'UCAxGITqXFNmV7PNCU82D_MA',
        'pais': 'ua'
    },
    'Апостроф-TV': {
        'nombre': 'Апостроф TV',
        'yt_id': 'UC0lnIB2qcArjFJPtq79WGZA',
        'pais': 'ua'
    },
    'FREEДОМ': {
        'nombre': 'UA:FREEДОМ',
        'yt_id': 'UCVEaAWKfv7fE1c-ZuBs7TKQ',
        'pais': 'ua'
    },
    'PJ-Masks': {
        'nombre': 'PJ Masks',
        'yt_id': 'UCY2jUnU118sVkdj2xafiJ0g',
        'pais': 'ua'
    },
    'UA-Перший': {
        'nombre': 'UA:Перший',
        'yt_id': 'UCPY6gj8G7dqwPxg9KwHrj5Q',
        'pais': 'ua'
    },
// CHINA
    'live-chino': {
        'nombre': '民視直播 FTVN Live 53',
        'yt_id': 'UClIfopQZlkkSpM1VgCFLRJA',
        'pais': 'cn'
    },
    'live-chino-2': {
        'nombre': '三立LIVE新聞',
        'yt_id': 'UC2TuODJhC03pLgd6MpWP0iw',
        'pais': 'cn'
    },
    'live-chino-3': {
        'nombre': '三立iNEWS',
        'yt_id': 'UCoNYj9OFHZn3ACmmeRCPwbA',
        'pais': 'cn'
    },
    'live-chino-4': {
        'nombre': '中視新聞 HD直播頻道',
        'yt_id': 'UCmH4q-YjeazayYCVHHkGAMA',
        'pais': 'cn'
    },
    'live-chino-5': {
        'nombre': '華視新聞 CH52',
        'yt_id': 'UCDCJyLpbfgeVE9iZiEam-Kg',
        'pais': 'cn'
    },
    'live-chino-6': {
        'nombre': '中天電視',
        'yt_id': 'UC5l1Yto5oOIgRXlI4p4VKbw',
        'pais': 'cn'
    },
    'live-chino-7': {
        'nombre': '寰宇新聞 頻道',
        'yt_id': 'UC2TuODJhC03pLgd6MpWP0iw',
        'pais': 'cn'
    },
    'thvl-8': {
        'nombre': 'THVL',
        'm3u8_url': 'http://live.tv360.vn/manifest/Vinh_Long_1_HD/playlist_1080p.m3u8',
        'fuente': 'https://www.thvli.vn/live/thvl1-hd',
        'pais': 'cn'
    },
    'cgtn-Español-8': {
        'nombre': 'CGTN Español',
        'yt_id': 'UCd94YCD7yp6d-YZSRYWyeFA',
        'pais': 'cn'
    },
    'cgtn-europe-9': {
        'nombre': 'CGTN Europe',
        'yt_id': 'UCj0TppyxzQWm9JbMg3CP8Rg',
        'pais': 'cn'
    },
    'cgtn-10': {
        'nombre': 'CGTN',
        'm3u8_url': 'https://live.cgtn.com/1000/prog_index.m3u8',
        'fuente': 'https://www.cgtn.com/',
        'pais': 'cn'
    },
// HONG KONG
    'HK-apple-daily': {
        'nombre': 'HK Apple Daily',
        'yt_id': 'UCeqUUXaM75wrK5Aalo6UorQ',
        'pais': 'hk'
    },
// JAPON
    'annnewsch': {
        'nombre': 'ANNnewsCH',
        'yt_id': 'UCGCZAYq5Xxojl_tSXcVJhiQ',
        'pais': 'jp'
    },
    'nhk-world-japan': {
        'nombre': 'NHK WORLD-JAPAN',
        'yt_id': 'UCSPEjw8F2nQDtmUKPFNF7_A',
        'pais': 'jp'
    },
    'nhk-world': {
        'nombre': 'NHK World',
        'm3u8_url': 'https://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-tv/global/2003458/live.m3u8',
        'fuente': 'https://www3.nhk.or.jp/nhkworld/en/live/',
        'pais': 'jp'
    },
// COREA DEL SUR
    'mbcnews': {
        'nombre': 'MBCNEWS',
        'yt_id': 'UCF4Wxdo3inmxP-Y59wXDsFw',
        'pais': 'kr'
    },
//IRAN
    'hispantv-Español': {
        'nombre': 'Hispantv Español',
        'm3u8_url': 'https://cdnlive.presstv.ir/live/smil:live.smil/playlist.m3u8',
        'fuente': 'https://www.hispantv.com/',
        'pais': 'ir'
    },
    'hispan-tv-Español': {
        'nombre': 'Hispan tv Español',
        'fuente': 'https://odysee.com/$/embed/@hispantv:d/live:400?r=7TovasKcQTBH9z9J19ETKk1CrMRiu5WX',
        'fuente': 'https://www.hispantv.com/',
        'pais': 'ir'
    },
    'press-1': {
        'nombre': 'press 1',
        'm3u8_url': 'https://cdnlive.presstv.ir/cdnlive/smil:cdnlive.smil/playlist.m3u8',
        'fuente': 'https://www.presstv.ir/',
        'pais': 'ir'
    },
    'presstv-2': {
        'nombre': 'presstv 2',
        'fuente': 'https://odysee.com/$/embed/@PressTV:2/Live:206?r=7TovasKcQTBH9z9J19ETKk1CrMRiu5WX',
        'fuente': 'https://www.presstv.ir/',
        'pais': 'ir'
    },
    'presstv-3': {
        'nombre': 'presstv 3',
        'fuente': 'https://rumble.com/embed/v4ldkxb/?pub=14mhhj',
        'fuente': 'https://www.presstv.ir/',
        'pais': 'ir'
    },
    'iranintl': {
        'nombre': 'iranintl',
        'fuente': 'https://ott.iranintl.com/tv?lang=en#amp=1',
        'fuente': 'https://www.iranintl.com/en',
        'pais': 'ir'
    },
    'Shabakeh': {
        'nombre': 'Shabakeh',
        'fuente': 'http://www.parsatv.com/embed.php?name=Shabakeh-3&auto=false',
        'fuente': 'https://www.iranintl.com/en',
        'pais': 'ir'
    },
    'Shabakeh 1': {
        'nombre': 'Shabakeh 1',
        'm3u8_url': 'https://sportsleading.online/live/stream_1.m3u8',
        'fuente': 'https://www.parsatv.com/name=Shabakeh-3',
        'pais': 'ir'
    },
    'iFilm': {
        'nombre': 'iFilm',
        'fuente': 'https://www.parsatv.com/embed.php?name=iFilm-Persian&auto=false',
        'fuente': 'http://www.imvbox.tv/es/ifilm/live-channel/play',
        'pais': 'ir'
    },
    'irib-sahand': {
        'nombre': 'irib sahand',
        'fuente': 'https://telewebion.com/embed/live/sahand',
        'fuente': 'http://www.imvbox.tv/es/iribsahand/live-channel/play',
        'pais': 'ir'
    },
    'irib-baran': {
        'nombre': 'irib baran',
        'fuente': 'https://www.parsatv.com/embed.php?name=baran&auto=false',
        'fuente': 'http://www.imvbox.tv/es/iribbaran/live-channel/play',
        'pais': 'ir'
    },
    'irib-khorasan-ravazi': {
        'nombre': 'irib khorasan ravazi',
        'fuente': 'https://telewebion.com/embed/live/khorasanrazavi',
        'fuente': 'http://www.imvbox.tv/es/iribkhorasanravazi/live-channel/play',
        'pais': 'ir'
    },
    'irib-kordestan': {
        'nombre': 'irib kordestan',
        'fuente': 'https://ott.iranintl.com/tv?lang=en#amp=1',
        'fuente': 'http://www.imvbox.tv/es/iribkordestan/live-channel/play',
        'pais': 'ir'
    },
    'iribazarbayjan': {
        'nombre': 'iribazarbayjan',
        'fuente': 'https://telewebion.com/embed/live/azarbayjangharbi',
        'fuente': 'http://www.imvbox.tv/es/iribazarbayjan/live-channel/play',
        'pais': 'ir'
    },
    'khorasan-jonoobi': {
        'nombre': 'khorasan jonoobi',
        'fuente': 'https://telewebion.com/embed/live/khavaran',
        'fuente': 'http://www.imvbox.tv/es/khorasan-jonoobi/live-channel/play',
        'pais': 'ir'
    },
    'khorasan-shomali': {
        'nombre': 'khorasan shomali',
        'm3u8_url': 'https://ncdn.telewebion.com/atrak/live/playlist.m3u8',
        'fuente': 'http://www.imvbox.tv/es/khorasan-shomali/live-channel/play',
        'pais': 'ir'
    },
    'iribtv2': {
        'nombre': 'iribtv2',
        'fuente': 'https://telewebion.com/embed/live/tv2',
        'fuente': 'http://www.imvbox.tv/es/iribtv2/live-channel/play',
        'pais': 'ir'
    },
    'irib-tv2': {
        'nombre': 'irivb tv2',
        'fuente': 'https://sepehrtv.ir/frame/t/tv2',
        'fuente': 'https://tv2.ir/live',
        'pais': 'ir'
    },
    'iribtv1': {
        'nombre': 'iribtv1',
        'fuente': 'https://telewebion.com/embed/live/tv1',
        'fuente': 'http://www.imvbox.tv/es/iribtv1/live-channel/play',
        'pais': 'ir'
    },
    'irinn': {
        'nombre': 'irinn',
        'm3u8_url': 'https://ncdn.telewebion.com/irinn/live/playlist.m3u8',
        'fuente': 'http://www.imvbox.tv/es/irinn/live-channel/play',
        'pais': 'ir'
    },
    'varzeshtv': {
        'nombre': 'varzeshtv',
        'fuente': 'https://sepehrtv.ir/frame/t/varzesh',
        'fuente': 'https://varzeshtv.ir/live#!',
        'pais': 'ir'
    },
    'iribnasim': {
        'nombre': 'iribnasim',
        'fuente': 'https://telewebion.com/embed/live/nasim',
        'fuente': 'http://www.imvbox.tv/es/iribnasim/live-channel/play',
        'pais': 'ir'
    },
    'iribtv5': {
        'nombre': 'iribtv5',
        'fuente': 'https://telewebion.com/embed/live/tehran',
        'fuente': 'http://www.imvbox.tv/es/iribtv5/live-channel/play',
        'pais': 'ir'
    },
    'iribtamasha': {
        'nombre': 'iribtamasha',
        'fuente': 'https://telewebion.com/embed/live/hdtest',
        'fuente': 'http://www.imvbox.tv/es/iribtamasha/live-channel/play',
        'pais': 'ir'
    },
    'iranintl': {
        'nombre': 'iranintl',
        'fuente': 'http://www.parsatv.com/embed.php?name=Namayesh&auto=false',
        'fuente': 'http://www.imvbox.tv/es/iribnamayesh/live-channel/play',
        'pais': 'ir'
    },
    'iribtv4': {
        'nombre': 'iribtv4',
        'fuente': 'https://telewebion.com/embed/live/tv4',
        'fuente': 'http://www.imvbox.tv/es/iribtv4/live-channel/play',
        'pais': 'ir'
    },
// TURQUIA
    'trt-world': {
        'nombre': 'TRT World',
        'yt_id': 'UC7fWeaHhqgM4Ry-RMpM2YYw',
        'fuente': 'https://www.trtworld.com/',
        'pais': 'tr'
    },
    'BFZ-TURK': {
        'nombre': 'BFZ TURK',
        'iframe_url': 'https://www.nimo.tv/embed/5160697995',
        'fuente': 'https://bfzturk.com/',
        'pais': 'tr'
    },
    'trt-Haber': {
        'nombre': 'TRT Haber',
        'm3u8_url': 'https://tv-trthaber.medya.trt.com.tr/master.m3u8',
        'fuente': 'https://www.trthaber.com/',
        'pais': 'tr'
    },
    'CNNTURK': {
        'nombre': 'CNNTURK',
        'm3u8_url': 'https://live.duhnet.tv/S2/HLS_LIVE/cnnturknp/playlist.m3u8',
        'fuente': 'https://www.cnnturk.com/canli-yayin',
        'pais': 'tr'
    },
    'CNNTURK2': {
        'nombre': 'CNNTURK2',
        'm3u8_url': 'https://live.duhnet.tv/S2/HLS_LIVE/cnnturknp/playlist.m3u8',
        'fuente': 'https://www.cnnturk.com/canli-yayin',
        'pais': 'tr'
    },
    'NTV': {
        'nombre': 'NTV',
        'iframe_url': 'https://canlitv.center/yayin/ntv-izle-3',
        'fuente': 'https://www.ntv.com.tr/',
        'pais': 'tr'
    },
    'NTV2': {
        'nombre': 'NTV2',
        'iframe_url': 'https://canlitv.center/yayin/ntv-yt',
        'fuente': 'https://www.ntv.com.tr/',
        'pais': 'tr'
    },
    'startv': {
        'nombre': 'startv',
        'iframe_url': 'https://canlitv.center/yayin/star-tv-izle',
        'fuente': 'https://www.startv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'startv2': {
        'nombre': 'startv2',
        'iframe_url': 'https://canlitv.com/player1/index.php?id=99',
        'fuente': 'https://www.startv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'show-tv': {
        'nombre': 'show-tv',
        'iframe_url': 'https://canlitv.center/yayin/show-tv-izle',
        'fuente': 'https://www.ntv.com.tr/',
        'pais': 'tr'
    },
    'Tv8': {
        'nombre': 'Tv8',
        'iframe_url': 'https://www.canlitv.day/embed/?id=10924',
        'fuente': 'https://www.tv8.com.tr/canli-yayin',
        'pais': 'tr'
    },
    '360-tv': {
        'nombre': '360-tv',
        'iframe_url': 'https://www.canlitv.day/embed/?id=15',
        'fuente': 'https://www.tv360.com.tr/canli-yayin',
        'pais': 'tr'
    },
    '360-tv2': {
        'nombre': '360-tv2',
        'm3u8_url': 'https://turkmedya-live.ercdn.net/tv360/tv360.m3u8',
        'fuente': 'https://www.tv360.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'HaberTURK': {
        'nombre': 'HaberTURK',
        'm3u8_url': 'https://haberturk.ercdn.net/channel01/channel01.m3u8',
        'fuente': 'https://www.haberturk.com/',
        'pais': 'tr'
    },
    'ATV': {
        'nombre': 'ATV',
        'm3u8_url': 'https://trkvz.daioncdn.net/atv/atv_480p.m3u8?e=1709291516&st=Zq85WDdh-nJyXTN__D0e9w&sid=673up4vgcoqb&app=d1ce2d40-5256-4550-b02e-e73c185a314e&ce=3',
        'fuente': 'https://www.atv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'KTR': {
        'nombre': 'KTR',
        'iframe_url': 'https://www.youtube.com/embed/2e0DZuMlU8k',
        'fuente': 'https://www.krttv.com.tr/',
        'pais': 'tr'
    },
    'NOW-TURK': {
        'nombre': 'NOW TURK',
        'm3u8_url': 'https://nowtv-live-ad.ercdn.net/nowtv/playlist.m3u8?st=d0k8DqkgRoO342EjNU3w3A&e=1709252808',
        'fuente': 'https://www.nowtv.com.tr/',
        'pais': 'tr'
    },
     'akittv': {
        'nombre': 'Akittv',
        'm3u8_url': 'https://akittv-live.ercdn.net/akittv/akittv.m3u8',
        'fuente': 'https://www.akittv.com.tr/canli-izle',
        'pais': 'tr'
    },
     'szctv': {
        'nombre': 'Szctv',
         'iframe_url': 'https://www.youtube.com/embed/2i8lfP9oqvk?autoplay=1&enablejsapi=1&playsinline=1',
        'fuente': 'https://www.szctv.com.tr/',
        'pais': 'tr'
    },
     'halk-tv': {
        'nombre': 'Halk tv',
        'iframe_url': 'https://www.youtube.com/embed/-HJwrahoMsQ?autoplay=1',
        'fuente': 'https://halktv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'halk-tv': {
        'nombre': 'Halk tv',
        'm3u8_url': 'https://halktv.daioncdn.net/halktv/halktv.m3u8?app=c86957d3-74a7-44da-9ad2-dc358c769609&ce=3',
        'fuente': 'https://halktv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'kanal-7': {
        'nombre': 'kanal 7',
        'm3u8_url': 'https://kanal7.daioncdn.net/kanal7/kanal7.m3u8?app=f99587ad-1637-494d-8255-da35b09d17a1&ce=3',
        'fuente': 'https://www.kanal7.com/canli-izle',
        'pais': 'tr'
    },
    'beyaz-tv': {
        'nombre': 'Beyaz-tv',
        'm3u8_url': 'https://beyaztv.daioncdn.net/beyaztv/beyaztv.m3u8?app=fcd5c66b-da9d-44ba-a410-4f34805c397d&ce=3',
        'fuente': 'https://m.beyaztv.com.tr/canli-yayin/',
        'pais': 'tr'
    },
    'fox-tv': {
        'nombre': 'Fox tv',
        'iframe_url': 'https://canlitv.com/player/index.php?id=11221',
        'fuente': 'https://canlitv.com/fox-tv',
        'pais': 'tr'
    },
    'tele1': {
        'nombre': 'Tele1',
        'iframe_url': 'https://www.youtube.com/embed/RLEKowJq14U?si=uuGw1Um14YOW9lYk',
        'fuente': 'https://canlitv.com/fox-tv',
        'pais': 'tr'
    },
    'tv24': {
        'nombre': 'tv24',
        'm3u8_url': 'https://turkmedya-live.ercdn.net/tv24/tv24.m3u8',
        'fuente': 'https://www.yirmidort.tv/canli-yayin',
        'pais': 'tr'
    },
    'a2-tv': {
        'nombre': 'a2 tv',
        'm3u8_url': 'https://trkvz.daioncdn.net/a2tv/a2tv.m3u8?ce=3&app=59363a60-be96-4f73-9eff-355d0ff2c758&st=d_r2xhHr-FkdjsZyMfAfFg&e=1709290534&gdpr=0',
        'fuente': 'https://tv8bucuk.com/tv8-5-canli-yayin',
        'pais': 'tr'
    },
// CATAR
    'al-jazeera-english': {
        'nombre': 'Al Jazeera English',
        'yt_id': 'UCNye-wNBqNL5ZzHSJj3l8Bg',
        'pais': 'qa'
    },
    'al-jazeera-english-2': {
        'nombre': 'AlJazeera Channel English 2',
        'm3u8_url': 'https://live-hls-web-aje.getaj.net/AJE/03.m3u8',
        'fuente': 'https://www.aljazeera.com/live/',
        'pais': 'qa'
    },
    'al-jazeera-arabe': {
        'nombre': 'AlJazeera Channel قناة الجزيرة',
        'yt_id': 'UCfiwzLy-8yKzIbsmZTzxDgw',
        'pais': 'qa'
    },
// SINGAPUR
    'cna': {
        'nombre': '📺 CNA',
        'yt_id': 'UC83jt4dlz1Gjl58fzQrrKZg',
        'pais': 'sg'
    },
// NIGERIA
    'news-nigeria': {
        'nombre': '📺 TVC News Nigeria',
        'yt_id': 'UCgp4A6I8LCWrhUzn-5SbKvA',
        'fuente': 'https://www.youtube.com/channel/UCgp4A6I8LCWrhUzn-5SbKvA',
        'pais': 'ng'
    },
    'Silverbird-N24Live': {
        'nombre': '📺 Silverbird N24 Live',
        'yt_id': 'UCNuPuew8lLVB3mMAm9_Qt9w',
        'fuente': 'https://www.youtube.com/@SilverbirdN24Live',
        'pais': 'ng'
    },
    'NTA-News': {
        'nombre': '📺 NTA News',
        'yt_id': 'UCLLWAXn5F415g2kNAcE_T1g',
        'fuente': 'https://www.youtube.com/channel/UCLLWAXn5F415g2kNAcE_T1g',
        'pais': 'ng'
    },
    'Atlantic-Television-(ATN)': {
        'nombre': '📺 Atlantic Television (ATN)',
        'm3u8_url': 'https://tv.ifastekpanel.com:3013/live/atntvlive.m3u8',
        'fuente': 'https://atlanticnetwork.tv/',
        'pais': 'ng'
    },
    'Rave-TV': {
        'nombre': '📺 Rave TV',
        'iframe_url': 'https://watch.avo.tv/pages/discover/e/live-tv?channel=6037efb27384c922683c7d9f',
        'fuente': 'https://atlanticnetwork.tv/',
        'pais': 'ng'
    },
    'TV360-Nigeria': {
        'nombre': '📺 TV360 Nigeria',
        'yt_id': 'UCBzu4YqGiBxBD8pq8NiBuKw',
        'fuente': 'https://www.tv360nigeria.com/',
        'pais': 'ng'
    },
    'Channels-Television': {
        'nombre': '📺 Channels Television',
        'yt_id': 'UCEXGDNclvmg6RW0vipJYsTQ',
        'fuente': 'https://www.youtube.com/@ChannelsTelevision',
        'pais': 'ng'
    },
    'Trust-TV-News': {
        'nombre': '📺 Trust TV News',
        'yt_id': 'UCTlqstA2Wrt4fimd_VWKr8g',
        'fuente': 'https://www.youtube.com/channel/UCTlqstA2Wrt4fimd_VWKr8g',
        'pais': 'ng'
    },
    'News-Central-Africa': {
        'nombre': '📺 News Central Africa',
        'yt_id': 'UCPLKy4Ypb4mfblbjJI8Aljw',
        'fuente': 'https://www.youtube.com/@NewsCentralAfrica/streams',
        'pais': 'ng'
    },
// AUSTRALIA
    'abc-news-au': {
        'nombre': '📺 ABC News AU',
        'm3u8_url': 'https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8',
        'fuente': 'https://www.abc.net.au/news/',
        'pais': 'au'
    },
    'ABC-News-(Australia)': {
        'nombre': '📺 ABC News (Australia)',
        'yt_id': 'UCVgO39Bk5sMo66-6o6Spn6Q',
        'fuente': 'https://www.youtube.com/@abcnewsaustralia/streams',
        'pais': 'au'
    },
    'TVSN': {
        'nombre': '📺 TVSN',
        'yt_id': 'UCo4sch-fwKIeyzyPIWRXjdw',
        'fuente': 'https://www.youtube.com/@ItvsnAuTVSNLIVE/streams',
        'pais': 'au'
    },
    'TVSN-NOW': {
        'nombre': '📺 TVSN NOW',
        'm3u8_url': 'https://tvsnhlslivetest.akamaized.net/hls/live/2034711/TVSN-MSL4/master.m3u8',
        'fuente': 'https://www.itvsn.com.au/tvsnnow/',
        'pais': 'au'
    },
// PAKISTAN
    'bol-news': {
        'nombre': '📺 BOL News',
        'yt_id': 'UCz2yxQJZgiB_5elTzqV7FiQ',
        'fuente': 'https://www.itvsn.com.au/tvsnnow/',
        'pais': 'pk'
    },
    'SAMAA-TV': {
        'nombre': '📺 SAMAA TV',
        'yt_id': 'UCJekW1Vj5fCVEGdye_mBN6Q',
        'fuente': 'https://www.youtube.com/channel/UCJekW1Vj5fCVEGdye_mBN6Q',
        'pais': 'pk'
    },
    'BOL-News': {
        'nombre': '📺 BOL News',
        'yt_id': 'UCz2yxQJZgiB_5elTzqV7FiQ',
        'fuente': 'https://www.youtube.com/channel/UCz2yxQJZgiB_5elTzqV7FiQ',
        'pais': 'pk'
    },
    'Geo-News': {
        'nombre': '📺 Geo News',
        'yt_id': 'UC_vt34wimdCzdkrzVejwX9g',
        'fuente': 'https://www.youtube.com/@geonews/streams',
        'pais': 'pk'
    },
    'ARY-News': {
        'nombre': '📺 ARY News',
        'yt_id': 'UCMmpLL2ucRHAXbNHiCPyIyg',
        'fuente': 'https://www.youtube.com/channel/UCMmpLL2ucRHAXbNHiCPyIyg',
        'pais': 'pk'
    },
// INDIA
    'indiatv': {
        'nombre': '📺 IndiaTV',
        'yt_id': 'UCttspZesZIDEwwpVIgoZtWQ',
        'pais': 'in'
    },
    'Aaj-Tak': {
        'nombre': '📺 Aaj Tak',
        'yt_id': 'UCt4t-jeY85JegMlZ-E5UWtA',
        'pais': 'in'
    },
    'TIMES-NOW': {
        'nombre': '📺 TIMES NOW',
        'yt_id': 'UCMk9Tdc-d1BIcAFaSppiVkw',
        'pais': 'in'
    },
    'TV9-Bharatvarsh': {
        'nombre': '📺 TV9 Bharatvarsh',
        'yt_id': 'UCOutOIcn_oho8pyVN3Ng-Pg',
        'pais': 'in'
    },
    'republic-world': {
        'nombre': 'Republic World',
        'yt_id': 'UCwqusr8YDwM-3mEYTDeJHzw',
        'pais': 'in'
    },
// REINO UNIDO
    'gbnews': {
        'nombre': '📺 GBNews',
        'yt_id': 'UC0vn8ISa4LKMunLbzaXLnOQ',
        'pais': 'gb'
    },
// VARIOS ???
    'naciones-unidas': {
        'nombre': 'Naciones Unidas',
        'yt_id': 'UC5O114-PQNYkurlTg6hekZw',
    },
// MUSICA 24/7
    'lofi-girl': {
        'nombre': '🎵 Lofi Girl',
        'yt_embed': 'jfKfPfyJRdk',
        'fuente': 'https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow'
    },
    'chillhop': {
        'nombre': '🎵 Chillhop',
        'yt_embed': '5yx6BWlEVcY',
        'fuente': 'https://www.youtube.com/channel/UCOxqgCwgOqC2lMqC5PYz_Dg'
    },
    'steezyasfuck': {
        'nombre': '🎵 Steezyasfuck',
        'yt_embed': 'KC_oey5dbmI',
        'fuente': 'https://www.youtube.com/channel/UCsIg9WMfxjZZvwROleiVsQg'
    },
    'imuc-radio-chile': {
        'nombre': '🎵 IMUC Chile',
        'yt_id': 'UCIIDtZoaK9UZi4FaGMmL_hw',
        'pais': 'cl'
    },
    'doom-radio': {
        'nombre': '🎵 Doom Radio',
        'yt_id': 'UCR2D48i5MCMYwVKbgYIAftQ'
    },
    'naxos-japan': {
        'nombre': '🎵 naxos japan',
        'yt_embed': 'qtnxR6y0sT8',
        'fuente': 'https://www.youtube.com/channel/UCwP6-81HmoDyC3nfBAyGPXQ'
    },
    'acidjazz': {
        'nombre': '🎵 AcidJazz',
        'yt_id': 'UC8cRYBn-z6y1EOUeMdJ0VHA'
    },
    'darkwave': {
        'nombre': '🎵 The 80s Guy',
        'yt_id': 'UC6ghlxmJNMd8BE_u1HR-bTg'
    },
    'the-bootleg-boy-1': {
        'nombre': '🎵 the bootleg boy',
        'yt_embed': 'bLlloaA4b4g',
        'fuente': 'https://www.youtube.com/channel/UC0fiLCwTmAukotCXYnqfj0A'
    },
    'the-bootleg-boy-2': {
        'nombre': '🎵 the bootleg boy 2',
        'yt_embed': 'Vo-2noOnBcY',
        'fuente': 'https://www.youtube.com/channel/UCwkTfp14Sj7o6q9_8ADJpnA'
    },
    'chill-with-taiki': {
        'nombre': '🎵 Chill with Taiki',
        'yt_embed': 'qH3fETPsqXU',
        'fuente': 'https://www.youtube.com/channel/UCKdURsjh1xT1vInYBy82n6g'
    },
    'abao-en-tokio': {
        'nombre': '🎵 Abao en Tokio',
        'yt_embed': 'e_Ede7tGgfA',
        'fuente': 'https://www.youtube.com/channel/UC84whx2xxsiA1gXHXXqKGOA'
    },
    'college-music': {
        'nombre': '🎵 College Music',
        'yt_embed': 'QwXHcgZUnFI',
        'fuente': 'https://www.youtube.com/channel/UCWzZ5TIGoZ6o-KtbGCyhnhg'
    },
// CAMARAS MUNDO
// Chile
    'galeria-cima': {
        'nombre': '📷 Galería CIMA',
        'yt_id': 'UC4GOcOKkEefz5NamN4WyMFg',
        'pais': 'cl'
    },
    'parquemet-cumbre': {
        'nombre': '📷 Halcón Parquemet, Cumbre',
        'iframe_url': 'https://g1.ipcamlive.com/player/player.php?alias=5a7084c9e0136&autoplay=true',
        'fuente': 'https://halcon.parquemet.cl/index.html',
        'pais': 'cl'
    },
    'parquemet-terraza': {
        'nombre': '📷 Halcón Parquemet, Terraza',
        'iframe_url': 'https://g1.ipcamlive.com/player/player.php?alias=5a7085fe914c0&autoplay=true',
        'fuente': 'https://halcon.parquemet.cl/index.html',
        'pais': 'cl'
    },
    'ledrium': {
        'nombre': '📷 Providencia, Ledrium',
        'yt_embed': 'mGxX5PfREPA',
        'fuente': 'https://www.youtube.com/channel/UCTDewuGhfwGv6JRNnqa-yXw',
        'pais': 'cl'
    },
    'muni-osorno': {
        'nombre': '📷 Municipalidad Osorno',
        'yt_id': 'UCD7sqegDNyZxmdnCj6xqH6g',
        'pais': 'cl'
    },
    'glaseado-1': {
        'nombre': '📷 glaseado.cl, Huayquique',
        'iframe_url': 'https://g3.ipcamlive.com/player/player.php?alias=huayquique&autoplay=1',
        'fuente': 'https://www.glaseado.cl/surf-cams/huayquique/',
        'pais': 'cl'
    },
    'glaseado-2': {
        'nombre': '📷 glaseado.cl, Las Urracas',
        'iframe_url': 'https://g3.ipcamlive.com/player/player.php?alias=lasurracas&autoplay=1',
        'fuente': 'https://www.glaseado.cl/surf-cams/las-urracas/',
        'pais': 'cl'
    },
    'glaseado-3': {
        'nombre': '📷 glaseado.cl, La Punta',
        'iframe_url': 'https://g3.ipcamlive.com/player/player.php?alias=lapunta&autoplay=1',
        'fuente': 'https://www.glaseado.cl/surf-cams/la-punta/',
        'pais': 'cl'
    },
// Peru
    'av-angamos': {
        'nombre': '📷 Av Angamos',
        'yt_embed': 'jQcotlKaPYY',
        'fuente': 'https://www.youtube.com/channel/UCP9nvEUj8EN-wuOQajPQbAw',
        'pais': 'pe'
    },
    'av-la-marina': {
        'nombre': '📷 Av La Marina',
        'yt_embed': 'Arq2BUHYz9Y',
        'fuente': 'https://www.youtube.com/channel/UCP9nvEUj8EN-wuOQajPQbAw',
        'pais': 'pe'
    },
//  Argentina
    'obelisco': {
        'nombre': '📷 FourSeasons BuenosAires',
        'yt_id': 'UCCkRwmztPEvut3gpsgmCmzw',
        'pais': 'ar'
    },
    'puente-gral-belgrano': {
        'nombre': '📷 SISE Argentina',
        'yt_id': 'UC2RkL2eATR1V6H8g4eNfA5Q',
        'pais': 'ar'
    },
// EEUU
    'times-square': {
        'nombre': '📷 Times Square Live 4K',
        'yt_id': 'UC6qrG3W8SMK0jior2olka3g',
        'pais': 'us'
    },
    'puente-brooklyn': {
        'nombre': '📷 St. George Tower',
        'yt_embed': 'KGuCGd726RA',
        'fuente': 'https://www.youtube.com/channel/UCp1ojgNJ8mNWdMDsdcMRA2Q',
        'pais': 'us'
    },
    'bryant-park': {
        'nombre': '📷 Bryant Park NYC',
        'yt_id': 'UC6AlfoRUeH4B1an_R5YSSTw',
        'pais': 'us'
    },
    'george-washington-bridge': {
        'nombre': '📷 Fort Lee Today On Demand',
        'yt_id': 'UChQ5P-kHBZpH20EnXm9X0YQ',
        'pais': 'us'
    },
    'washington-dc': {
        'nombre': '📷 Washington DC, US Capitol',
        'yt_embed': '_RAjp7A3VDw',
        'fuente': 'https://www.youtube.com/channel/UCRj7u6fmW8RYQl98hcwbwng',
        'pais': 'us'
    },
    'las-vegas': {
        'nombre': '📷 Las Vegas, Treasure Island',
        'yt_embed': 'CUyy8rBnuzY',
        'fuente': 'https://www.youtube.com/channel/UCRj7u6fmW8RYQl98hcwbwng',
        'pais': 'us'
    },
    'san-diego': {
        'nombre': '📷 San Diego, Down Town + Airport',
        'yt_embed': 'fcGDU86DuSo',
        'fuente': 'https://www.youtube.com/channel/UCRj7u6fmW8RYQl98hcwbwng',
        'pais': 'us'
    },
// Francia
    'eiffel-tower': {
        'nombre': '📷 Paris, Eiffel Tower',
        'yt_embed': 'iZipA1LL_sU',
        'fuente': 'https://www.youtube.com/channel/UCRj7u6fmW8RYQl98hcwbwng',
        'pais': 'fr'
    },
// UCRANIA
    'ucrania-multicam-s8': {
        'nombre': '📷 Multi-cam Ucrania, Zabby',
        'yt_id': 'UCxc2Kkmuc8-BXVEQ82ChVow',
        'pais': 'ua'
    },
    'ucrania-multicam-s9': {
        'nombre': '📷 Multi-cam Ucrania, Sloth On Meth',
        'yt_id': 'UCkO2xL-Fx_tYXXxuuAv_j6A',
        'pais': 'ua'
    },
// Japon
    'RailCam': {
        'nombre': '📷 Aoba traffics',
        'yt_id': 'UCynDLZ-YJnrMLSQvwYi-bUA'
    },
    'jerusalem': {
        'nombre': '📷 Steadycamline, Jerusalem',
        'yt_id': 'UC1byT4dOeBAZwVqQ309iAuA'
    },
    'hawaii-livecam': {
        'nombre': '📷 Aqualink Hawaii',
        'yt_id': 'UCTLF36lXVM7uiR-VolWHv0Q'
    },
    'daily-seoul': {
        'nombre': '📷 Daily Seoul Live Camera - Hangang',
        'yt_id': 'UCQKQTgZJo3PlxA-9V1Z51XA'
    },
// aleatorio
    'camaras-aleatorias': {
        'nombre': '📷 Boston and Maine Live',
        'yt_embed': 'cUk-Xvlfs1I',
        'fuente': 'https://www.youtube.com/channel/UC8gbWbcNNyb5-NIXvFklkOA'
    },
    'namibiacam': {
        'nombre': '📷 NamibiaCam',
        'yt_id': 'UC9X6gGKDv2yhMoofoeS7-Gg'
    },
// ESPACIO
    'nasa': {
        'nombre': '🔭 NASA Live',
        'yt_embed': '21X5lGlDOfg',
        'fuente': 'https://www.youtube.com/watch?v=21X5lGlDOfg'
    },
    'space-videos': {
        'nombre': '🔭 NASA ISS Live Stream',
        'yt_embed': '86YLFOog4GM',
        'fuente': 'https://www.youtube.com/watch?v=86YLFOog4GM'
    },
    'space-videos-2': {
        'nombre': '🔭 Space Videos',
        'yt_id': 'UCakgsb0w7QB0VHdnCc-OVEA'
    },
    'nasa-spaceflight': {
        'nombre': '🔭 NASASpaceflight',
        'yt_id': 'UCSUu1lih2RifWkKtDOJdsBA'
    },
    'espacio-tierra': {
        'nombre': '🔭 Earth view from ISS',
        'yt_embed': 'XBPjVzSoepo',
        'fuente': 'https://www.youtube.com/watch?v=XBPjVzSoepo'
    },
    'labpadre': {
        'nombre': '🔭 LabPadre',
        'yt_id': 'UCFwMITSkc1Fms6PoJoh1OUQ'
    },
    'spacex': {
        'nombre': '🔭 SpaceX',
        'yt_id': 'UCtI0Hodo5o5dUb67FeUjDeA'
    },
    'blue-origin': {
        'nombre': '🔭 Blue Origin',
        'yt_id': 'UCVxTHEKKLxNjGcvVaZindlg'
    },
    'virgin-galactic': {
        'nombre': '🔭 Virgin Galactic',
        'yt_id': 'UClcvOr7LV8tlJwJvkNMmnKg'
    },
// COVID
    'corona-pagina': {
        'nombre': '🦠 COVID-19 Dashboard',
        'iframe_url': 'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6',
        'fuente': 'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'
    },
    'corona-live': {
        'nombre': '🦠 COVID-19 Live',
        'yt_embed': 'NMre6IAAAiU',
        'fuente': 'https://www.youtube.com/channel/UCDGiCfCZIV5phsoGiPwIcyQ'
    },
    'corona-pag-chile': {
        'nombre': '🦠 COVID-19 Chile',
        'iframe_url': 'https://bing.com/covid/local/chile',
        'fuente': 'https://bing.com/covid/local/chile'
    },
// SERIES
    'bob-ross': {
        'nombre': 'Bob Ross (Todas las Temporadas)',
        'yt_playlist': 'PLaLOVNqqD-2HgiA-GZyzcfZN9n-YelhB5',
        'fuente': 'https://www.youtube.com/channel/UCxcnsr1R5Ge_fbTu5ajt8DQ'
// EDUCATIVOS
    },
    'tv-educa-cl': {
        'nombre': '📚 TV Educa Chile',
        'm3u8_url': 'https://mdstrm.com/live-stream-playlist-v/5e74e53f1ab4eb073b19ef34.m3u8',
        'fuente': 'https://www.tvn.cl/envivo/tveducachile/',
        'pais': 'cl'
    },
    'puntaje-nacional': {
        'nombre': '📚 Puntaje Nacional Chile',
        'yt_id': 'UCCY6xIXHmGBGZUgUYxtfKSg',
        'pais': 'cl'
    },
// 🏛️ 🏛️ 🏛️ 
    'gob-cl': {
        'nombre': '🏛️ Gobierno de Chile',
        'iframe_url': 'https://mdstrm.com/live-stream/5c12a5c39e03df0795a74d3a?autoplay=true&volume=0',
        'fuente': 'https://www.gob.cl/',
        'pais': 'cl'
    },
    'tv-senado': {
        'nombre': '🏛️ TV Senado',
        'iframe_url': 'https://janus-tv.senado.cl/embed.php',
        'fuente': 'https://tv.senado.cl/',
        'pais': 'cl'
    },
    'tv-senado-2': {
        'nombre': '🏛️ TV Senado 2',
        'm3u8_url': 'https://janus-tv-ply.senado.cl/playlist/playlist.m3u8',
        'fuente': 'https://tv.senado.cl/',
        'pais': 'cl'
    },
    'tv-senado-3': {
        'nombre': '🏛️ TV Senado 3',
        'yt_id': 'UC4GJ43VNn4AYfiYa0RBCHQg',
        'pais': 'cl'
    },
    'convencion-tv': {
        'nombre': '🏛️ Convención Constitucional',
        'iframe_url': 'https://mdstrm.com/live-stream/60d476c14157440829d03cd7?autoplay=true&volume=0',
        'fuente': 'https://www.convencion.tv/',
        'pais': 'cl'
    },
    'convencion-tv-2': {
        'nombre': '🏛️ Convención Constitucional 2',
        'm3u8_url': 'https://mdstrm.com/live-stream-playlist/60d1f10fdacfa008348d71d2.m3u8',
        'fuente': 'https://www.convencion.tv/',
        'pais': 'cl'
    },
    'convencion-tv-3': {
        'nombre': '🏛️ Convención Constitucional 3',
        'yt_id': 'UCRlIWVAxQdAnCl4D4UR9r3Q',
        'pais': 'cl'
    },
    'convencion-tv-01': {
        'nombre': '🏛️ Convención Constitucional YT 01',
        'yt_id': 'UCc3koBbWMyvSyzRbG5eTgvQ',
        'pais': 'cl'
    },
    'convencion-tv-02': {
        'nombre': '🏛️ Convención Constitucional YT 02',
        'yt_id': 'UCKmKUwcjv6HJP7-z9Nnpp2w',
        'pais': 'cl'
    },
    'convencion-tv-03': {
        'nombre': '🏛️ Convención Constitucional YT 03',
        'yt_id': 'UCeIlCkkBplhU0SrWM9B7u7Q',
        'pais': 'cl'
    },
    'convencion-tv-04': {
        'nombre': '🏛️ Convención Constitucional YT 04',
        'yt_id': 'UCkMWMYCPUGzf3UPAxcIaVqA',
        'pais': 'cl'
    },
    'convencion-tv-05': {
        'nombre': '🏛️ Convención Constitucional YT 05',
        'yt_id': 'UChNeKfZ0-wwuOCyUSu6BlcA',
        'pais': 'cl'
    },
    'convencion-tv-06': {
        'nombre': '🏛️ Convención Constitucional YT 06',
        'yt_id': 'UC-HPc8CLoGRSG0dgbzZbDWA',
        'pais': 'cl'
    },
    'convencion-tv-07': {
        'nombre': '🏛️ Convención Constitucional YT 07',
        'yt_id': 'UC9p2Hsom7SXdro9FhN4K59w',
        'pais': 'cl'
    },
    'convencion-tv-08': {
        'nombre': '🏛️ Convención Constitucional YT 08',
        'yt_id': 'UCFkkF0LKUOUOcQEwG4nTrHw',
        'pais': 'cl'
    },
    'convencion-tv-09': {
        'nombre': '🏛️ Convención Constitucional YT 09',
        'yt_id': 'UCEK7dK0jllE0uXMhEQTV6og',
        'pais': 'cl'
    },
    'convencion-tv-10': {
        'nombre': '🏛️ Convención Constitucional YT 10',
        'yt_id': 'UC1qhPKBTpfhjVcTMzmM8mGw',
        'pais': 'cl'
    },
    'convencion-tv-11': {
        'nombre': '🏛️ Convención Constitucional YT 11',
        'yt_id': 'UCRVinYIynLNcn18wHjmI5Vg',
        'pais': 'cl'
    },
    'convencion-tv-12': {
        'nombre': '🏛️ Convención Constitucional YT 12',
        'yt_id': 'UCJerNR157sjR83jMChSocPQ',
        'pais': 'cl'
    },
    'convencion-tv-13': {
        'nombre': '🏛️ Convención Constitucional YT 13',
        'yt_id': 'UCxI0u9BUvXbGHrv200cgFZg',
        'pais': 'cl'
    },
    'convencion-tv-14': {
        'nombre': '🏛️ Convención Constitucional YT 14',
        'yt_id': 'UCxAECnUReRnEwkFThbjtH2Q',
        'pais': 'cl'
    },
    'convencion-tv-15': {
        'nombre': '🏛️ Convención Constitucional YT 15',
        'yt_id': 'UCTGMQgIdFvz3qlD9mKb8v9w',
        'pais': 'cl'
    },
    'tribunal-consti': {
        'nombre': '🏛️ Tribunal Constitucional',
        'yt_id': 'UCZaI-1N1oaGb-U8K2VNztjg',
        'pais': 'cl'
    },
    'poder-judicial': {
        'nombre': '🏛️ Poder Judicial',
        'yt_id': 'UCo0C1-ocUG9a0Yb3iO0V-xg',
        'pais': 'cl'
    },
    'cam-dipu-1': {
        'nombre': '🏛️ Cámara Diputados',
        'm3u8_url': 'https://camara.03.cl.cdnz.cl/camara19/live/playlist.m3u8',
        'fuente': 'http://www.cdtv.cl/',
        'pais': 'cl'
    },
    'cam-dipu-2': {
        'nombre': '🏛️ Cámara Diputados 2',
        'm3u8_url': 'https://camara.02.cl.cdnz.cl/cdndvr/live/playlist.m3u8?DVR',
        'fuente': 'http://webtv.camara.cl/',
        'pais': 'cl'
    },
    'cam-dipu-3': {
        'nombre': '🏛️ Cámara Diputados 3',
        'm3u8_url': 'https://tls-cl.cdnz.cl/camara/live/playlist.m3u8',
        'fuente': 'http://webtv.camara.cl/',
        'pais': 'cl'
    }, 
// CANALES ALTERNATIVOS CAM DIPUTADOS
    'cam-dipu': {
        'nombre': '🏛️ Cámara Diputados YT',
        'yt_id': 'UCYd5k2TyOyOmUJNx0SH17KA',
        'pais': 'cl'
    },
    'cam-dipu-01': {
        'nombre': '🏛️ Cámara Diputados YT 01',
        'yt_id': 'UCcULnWuDzgQG9yF0Dv3DIgg',
        'pais': 'cl'
    },
    'cam-dipu-03': {
        'nombre': '🏛️ Cámara Diputados YT 03',
        'yt_id': 'UCF6KgLfQqQzekn8U1DwVs9g',
        'pais': 'cl'
    },
    'cam-dipu-05': {
        'nombre': '🏛️ Cámara Diputados YT 05',
        'yt_id': 'UC0QKtI8NpeMObauDylsSUDA',
        'pais': 'cl'
    },
    'cam-dipu-06': {
        'nombre': '🏛️ Cámara Diputados YT 06',
        'yt_id': 'UCspWzpGflwb6A8PZqWw49CQ',
        'pais': 'cl'
    },
    'cam-dipu-07': {
        'nombre': '🏛️ Cámara Diputados YT 07',
        'yt_id': 'UCyVjDDBZGDywVGrpGBvGEsw',
        'pais': 'cl'
    },
    'cam-dipu-08': {
        'nombre': '🏛️ Cámara Diputados YT 08',
        'yt_id': 'UCCtDbZzh63vgU_BWHRGsbug',
        'pais': 'cl'
    },
    'cam-dipu-11': {
        'nombre': '🏛️ Cámara Diputados YT 11',
        'yt_id': 'UCYPKjGKq2yLbAnmth5rFZmQ',
        'pais': 'cl'
    },
    'cam-dipu-12': {
        'nombre': '🏛️ Cámara Diputados YT 12',
        'yt_id': 'UCVOWFY-sgbDglBsfOap9okg',
        'pais': 'cl'
    },
    'cam-dipu-13': {
        'nombre': '🏛️ Cámara Diputados YT 13',
        'yt_id': 'UC33MG3YdoQ16a8a3wODh6lw',
        'pais': 'cl'
    },
// PERU
    'congreso-peru': {
        'nombre': '🏛️ Congreso República del Perú',
        'yt_id': 'UCsKiP5cZCYh9YhPGrI6GrkQ',
        'pais': 'pe'
    },
    'justicia-tv': {
        'nombre': '🏛️ Justicia TV',
        'yt_id': 'UCwsURxTXqGqijgu98ndod3A',
        'pais': 'pe'
    }
}
