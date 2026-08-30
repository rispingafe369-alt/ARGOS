const KEY="argos_services",THEME_KEY="argos_theme";
const stations=[{"code":"01003","name":"ARAHAL","aliases":["SEVILLA"]},{"code":"01005","name":"MARCHENA","aliases":["SEVILLA"]},{"code":"01007","name":"OSUNA","aliases":["SEVILLA"]},{"code":"01009","name":"PEDRERA","aliases":["SEVILLA"]},{"code":"02002","name":"PUENTE GENIL-HERRERA","aliases":["PUENTE GENIL","CÓRDOBA"]},{"code":"02003","name":"ANTEQUERA-SANTA ANA","aliases":["ANTEQUERA","MÁLAGA"]},{"code":"02030","name":"ANTEQUERA AV","aliases":["ANTEQUERA","MÁLAGA"]},{"code":"03001","name":"MENGÍBAR-ARTICHUELA","aliases":["MENGÍBAR","JAÉN"]},{"code":"03100","name":"JAÉN","aliases":[]},{"code":"03208","name":"CUENCA-FERNANDO ZÓBEL","aliases":["CUENCA"]},{"code":"03213","name":"REQUENA-UTIEL","aliases":["REQUENA","VALENCIA/VALÈNCIA"]},{"code":"03216","name":"VALÈNCIA-JOAQUÍN SOROLLA","aliases":["VALENCIA","VALENCIA/VALÈNCIA"]},{"code":"03309","name":"VILLENA ALTA VELOCIDAD","aliases":["VILLENA","ALICANTE/ALACANT"]},{"code":"03410","name":"ELCHE/ELX AV","aliases":["ELCHE/ELX","ALICANTE/ALACANT"]},{"code":"03412","name":"CALLOSA DE SEGURA-COX","aliases":["CALLOSA DE SEGURA","ALICANTE/ALACANT"]},{"code":"04007","name":"GUADALAJARA-YEBES","aliases":["YEBES","GUADALAJARA"]},{"code":"04040","name":"ZARAGOZA DELICIAS","aliases":["ZARAGOZA"]},{"code":"04104","name":"CAMP DE TARRAGONA","aliases":["TARRAGONA"]},{"code":"04307","name":"FIGUERES-VILAFANT","aliases":["VILAFANT","GIRONA"]},{"code":"05000","name":"GRANADA","aliases":[]},{"code":"05012","name":"LOJA","aliases":["GRANADA"]},{"code":"05019","name":"Antequera","aliases":[]},{"code":"05102","name":"SAN XOÁN","aliases":["FERROL","CORUÑA, A"]},{"code":"05103","name":"SANTA ICÍA","aliases":["NARÓN","CORUÑA, A"]},{"code":"05104","name":"VIRXE DO MAR","aliases":["NARÓN","CORUÑA, A"]},{"code":"05105","name":"PIÑEIROS","aliases":["NARÓN","CORUÑA, A"]},{"code":"05106","name":"O PONTO","aliases":["NARÓN","CORUÑA, A"]},{"code":"05107","name":"XUVIA","aliases":["NARÓN","CORUÑA, A"]},{"code":"05108","name":"O ALTO DO CASTIÑEIRO","aliases":["NARÓN","CORUÑA, A"]},{"code":"05109","name":"FERRERÍAS","aliases":["NARÓN","CORUÑA, A"]},{"code":"05111","name":"SEDES","aliases":["NARÓN","CORUÑA, A"]},{"code":"05113","name":"PEDROSO DE NARÓN","aliases":["NARÓN","CORUÑA, A"]},{"code":"05115","name":"SAN SADURNIÑO","aliases":["CORUÑA, A"]},{"code":"05117","name":"LAMAS","aliases":["SAN SADURNIÑO","CORUÑA, A"]},{"code":"05119","name":"APALLA","aliases":["SAN SADURNIÑO","CORUÑA, A"]},{"code":"05121","name":"MOECHE","aliases":["CORUÑA, A"]},{"code":"05123","name":"LABACENGOS","aliases":["MOECHE","CORUÑA, A"]},{"code":"05125","name":"ENTRAMBARRÍAS","aliases":["MOECHE","CORUÑA, A"]},{"code":"05127","name":"CERDIDO","aliases":["CORUÑA, A"]},{"code":"05129","name":"A CUQUEIRA","aliases":["CERDIDO","CORUÑA, A"]},{"code":"05131","name":"SANTA MARÍA DE MERA","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05133","name":"PONTE MERA","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05135","name":"SAN CLODIO","aliases":["RIBAS DE SIL","CORUÑA, A"]},{"code":"05137","name":"SENRA","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05139","name":"ORTIGUEIRA","aliases":["CORUÑA, A"]},{"code":"05141","name":"ESPASANTE","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05143","name":"LOIBA","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05145","name":"O BARQUEIRO","aliases":["MAÑÓN","CORUÑA, A"]},{"code":"05147","name":"O VICEDO","aliases":["VICEDO (O)","LUGO"]},{"code":"05149","name":"MOSENDE","aliases":["VICEDO (O)","LUGO"]},{"code":"05151","name":"FOLGUEIRO","aliases":["VICEDO (O)","LUGO"]},{"code":"05153","name":"COVAS DE VIVEIRO","aliases":["VIVEIRO","LUGO"]},{"code":"05155","name":"VIVEIRO","aliases":["LUGO"]},{"code":"05156","name":"VIVEIRO APEADERO","aliases":["VIVEIRO","LUGO"]},{"code":"05157","name":"XUANCES","aliases":["XOVE","LUGO"]},{"code":"05159","name":"XOVE POBO","aliases":["XOVE","LUGO"]},{"code":"05161","name":"XOVE","aliases":["LUGO"]},{"code":"05163","name":"LAGO","aliases":["XOVE","LUGO"]},{"code":"05165","name":"BIDUEIROS","aliases":["CERVO","LUGO"]},{"code":"05167","name":"SAN CIBRAO","aliases":["CERVO","LUGO"]},{"code":"05169","name":"MADEIRO","aliases":["CERVO","LUGO"]},{"code":"05171","name":"BURELA","aliases":["LUGO"]},{"code":"05173","name":"CANGAS DE FOZ","aliases":["FOZ","LUGO"]},{"code":"05175","name":"NOIS","aliases":["FOZ","LUGO"]},{"code":"05177","name":"FAZOURO","aliases":["FOZ","LUGO"]},{"code":"05179","name":"MARZÁN","aliases":["FOZ","LUGO"]},{"code":"05181","name":"FOZ","aliases":["LUGO"]},{"code":"05183","name":"BARREIROS","aliases":["LUGO"]},{"code":"05185","name":"REINANTE","aliases":["BARREIROS","LUGO"]},{"code":"05187","name":"ESTEIRO","aliases":["RIBADEO","LUGO"]},{"code":"05189","name":"OS CASTROS","aliases":["RIBADEO","LUGO"]},{"code":"05191","name":"RINLO","aliases":["RIBADEO","LUGO"]},{"code":"05193","name":"RIBADEO","aliases":["LUGO"]},{"code":"05197","name":"VEGADEO PUEBLO","aliases":["VEGADEO","ASTURIAS"]},{"code":"05199","name":"VILAVEDELLE","aliases":["CASTROPOL","ASTURIAS"]},{"code":"05239","name":"SANTIANES","aliases":["PRAVIA","ASTURIAS"]},{"code":"05241","name":"LOS CABOS","aliases":["PRAVIA","ASTURIAS"]},{"code":"05243","name":"MUROS DEL NALÓN","aliases":["MUROS DE NALÓN","ASTURIAS"]},{"code":"05244","name":"EL PITO PIÑERA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05245","name":"CUDILLERO","aliases":["ASTURIAS"]},{"code":"05247","name":"VILLADEMAR","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05249","name":"LA MAGDALENA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05251","name":"SAN MARTÍN DE LUIÑA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05253","name":"SAN COSME","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05255","name":"SOTO DE LUIÑA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05257","name":"VALDREDO","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05259","name":"NOVELLANA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05261","name":"SANTA MARINA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05263","name":"BALLOTA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05265","name":"TABLIZO","aliases":["VALDÉS","ASTURIAS"]},{"code":"05267","name":"CADAVEDO","aliases":["VALDÉS","ASTURIAS"]},{"code":"05269","name":"SAN CRISTÓBAL","aliases":["VALDÉS","ASTURIAS"]},{"code":"05271","name":"CANERO","aliases":["VALDÉS","ASTURIAS"]},{"code":"05273","name":"BARCIA","aliases":["VALDÉS","ASTURIAS"]},{"code":"05275","name":"LUARCA","aliases":["VALDÉS","ASTURIAS"]},{"code":"05277","name":"OTUR","aliases":["VALDÉS","ASTURIAS"]},{"code":"05279","name":"VILLAPEDRE","aliases":["NAVIA","ASTURIAS"]},{"code":"05281","name":"PIÑERA-VILLAORIL","aliases":["NAVIA","ASTURIAS"]},{"code":"05283","name":"NAVIA","aliases":["ASTURIAS"]},{"code":"05285","name":"MEDAL","aliases":["COAÑA","ASTURIAS"]},{"code":"05287","name":"LOZA","aliases":["COAÑA","ASTURIAS"]},{"code":"05289","name":"CARTAVIO","aliases":["COAÑA","ASTURIAS"]},{"code":"05291","name":"LA CARIDAD","aliases":["FRANCO (EL)","ASTURIAS"]},{"code":"05293","name":"TAPIA","aliases":["TAPIA DE CASARIEGO","ASTURIAS"]},{"code":"05295","name":"TOL","aliases":["CASTROPOL","ASTURIAS"]},{"code":"05297","name":"LAS CAMPAS DE CASTROPOL","aliases":["CASTROPOL","ASTURIAS"]},{"code":"05299","name":"CASTROPOL","aliases":["ASTURIAS"]},{"code":"05300","name":"VALLOBÍN","aliases":["OVIEDO","ASTURIAS"]},{"code":"05301","name":"ARGAÑOSA-LAVAPIÉS","aliases":["OVIEDO","ASTURIAS"]},{"code":"05302","name":"LAS CAMPAS","aliases":["OVIEDO","ASTURIAS"]},{"code":"05303","name":"LAS MAZAS","aliases":["OVIEDO","ASTURIAS"]},{"code":"05304","name":"SAN CLAUDIO","aliases":["OVIEDO","ASTURIAS"]},{"code":"05306","name":"SAN PEDRO DE NORA","aliases":["OVIEDO","ASTURIAS"]},{"code":"05308","name":"SOTO UDRIÓN","aliases":["OVIEDO","ASTURIAS"]},{"code":"05311","name":"TRUBIA","aliases":["OVIEDO","ASTURIAS"]},{"code":"05313","name":"SANTA MARÍA DE GRADO","aliases":["GRADO","ASTURIAS"]},{"code":"05315","name":"VEGA DE ANZO","aliases":["GRADO","ASTURIAS"]},{"code":"05316","name":"PEÑAFLOR DE GRADO","aliases":["GRADO","ASTURIAS"]},{"code":"05317","name":"GRADO","aliases":["ASTURIAS"]},{"code":"05319","name":"SANDICHE","aliases":["CANDAMO","ASTURIAS"]},{"code":"05320","name":"ACES","aliases":["CANDAMO","ASTURIAS"]},{"code":"05321","name":"SAN ROMÁN","aliases":["CANDAMO","ASTURIAS"]},{"code":"05323","name":"BEIFAR","aliases":["PRAVIA","ASTURIAS"]},{"code":"05325","name":"PRAVIA","aliases":["ASTURIAS"]},{"code":"05451","name":"BILBAO LA CONCORDIA","aliases":["BILBAO","BIZKAIA"]},{"code":"05455","name":"BASURTO HOSPITAL","aliases":["BILBAO","BIZKAIA"]},{"code":"05457","name":"ZORROTZA ZORROZGOITI","aliases":["BILBAO","BIZKAIA"]},{"code":"05459","name":"SANTA ÁGUEDA","aliases":["BILBAO","BIZKAIA"]},{"code":"05460","name":"KASTREXANA","aliases":["BILBAO","BIZKAIA"]},{"code":"05461","name":"IRAUREGUI","aliases":["ALONSOTEGI","BIZKAIA"]},{"code":"05463","name":"ZARAMILLO","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05465","name":"LA QUADRA","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05467","name":"SODUPE","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05469","name":"ARTXUBE","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05470","name":"LAMBARRI","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05471","name":"GÜEÑES","aliases":["BIZKAIA"]},{"code":"05473","name":"ARANGUREN","aliases":["ZALLA","BIZKAIA"]},{"code":"05474","name":"ARANGUREN-APEADERO","aliases":["ZALLA","BIZKAIA"]},{"code":"05475","name":"ZALLA","aliases":["BIZKAIA"]},{"code":"05477","name":"COLEGIO","aliases":["ZALLA","BIZKAIA"]},{"code":"05479","name":"IBARRA","aliases":["ZALLA","BIZKAIA"]},{"code":"05481","name":"LA HERRERA","aliases":["ZALLA","BIZKAIA"]},{"code":"05483","name":"BALMASEDA","aliases":["BIZKAIA"]},{"code":"05484","name":"MIMETIZ","aliases":["ZALLA","BIZKAIA"]},{"code":"05487","name":"TRASLAVIÑA","aliases":["ARTZENTALES","BIZKAIA"]},{"code":"05489","name":"ARTZENTALES","aliases":["ERRIBERAGOITIA/RIBERA ALTA","BIZKAIA"]},{"code":"05493","name":"VILLAVERDE DE TRUCIOS","aliases":["TRUCIOS-TURTZIOZ","BIZKAIA"]},{"code":"05497","name":"KARRANTZA","aliases":["KARRANTZA HARANA/VALLE DE CARRANZA","BIZKAIA"]},{"code":"05504","name":"PARQUE PRINCIPADO","aliases":["OVIEDO","ASTURIAS"]},{"code":"05505","name":"COLLOTO","aliases":["SIERO","ASTURIAS"]},{"code":"05507","name":"MERES","aliases":["SIERO","ASTURIAS"]},{"code":"05508","name":"FONCIELLO","aliases":["SIERO","ASTURIAS"]},{"code":"05509","name":"EL BERRÓN","aliases":["SIERO","ASTURIAS"]},{"code":"05511","name":"LA CARRERA DE SIERO","aliases":["SIERO","ASTURIAS"]},{"code":"05513","name":"POLA DE SIERO","aliases":["SIERO","ASTURIAS"]},{"code":"05515","name":"LOS CORROS","aliases":["SIERO","ASTURIAS"]},{"code":"05517","name":"LIERES","aliases":["SIERO","ASTURIAS"]},{"code":"05521","name":"EL REMEDIO","aliases":["NAVA","ASTURIAS"]},{"code":"05522","name":"LLAMES","aliases":["NAVA","ASTURIAS"]},{"code":"05523","name":"NAVA","aliases":["ASTURIAS"]},{"code":"05525","name":"FUENTE SANTA DE NAVA","aliases":["NAVA","ASTURIAS"]},{"code":"05527","name":"CECEDA","aliases":["NAVA","ASTURIAS"]},{"code":"05529","name":"CARANCOS","aliases":["NAVA","ASTURIAS"]},{"code":"05531","name":"PINTUELES","aliases":["PILOÑA","ASTURIAS"]},{"code":"05533","name":"INFIESTO","aliases":["PILOÑA","ASTURIAS"]},{"code":"05534","name":"INFIESTO APEADERO","aliases":["PILOÑA","ASTURIAS"]},{"code":"05535","name":"VILLAMAYOR","aliases":["PILOÑA","ASTURIAS"]},{"code":"05537","name":"SEBARES","aliases":["PILOÑA","ASTURIAS"]},{"code":"05539","name":"SOTO DE DUEÑAS","aliases":["PARRES","ASTURIAS"]},{"code":"05541","name":"OZANES","aliases":["PARRES","ASTURIAS"]},{"code":"05542","name":"POLICLÍNICO","aliases":["PARRES","ASTURIAS"]},{"code":"05543","name":"ARRIONDAS","aliases":["PARRES","ASTURIAS"]},{"code":"05545","name":"FUENTES","aliases":["PARRES","ASTURIAS"]},{"code":"05547","name":"TORAÑO","aliases":["PARRES","ASTURIAS"]},{"code":"05549","name":"CUEVAS","aliases":["RIBADESELLA","ASTURIAS"]},{"code":"05551","name":"LLOVIO","aliases":["RIBADESELLA","ASTURIAS"]},{"code":"05553","name":"RIBADESELLA","aliases":["ASTURIAS"]},{"code":"05555","name":"CAMANGO","aliases":["RIBADESELLA","ASTURIAS"]},{"code":"05557","name":"BELMONTE DE PRÍA","aliases":["LLANES","ASTURIAS"]},{"code":"05559","name":"NUEVA","aliases":["LLANES","ASTURIAS"]},{"code":"05561","name":"VILLAHORMES","aliases":["LLANES","ASTURIAS"]},{"code":"05563","name":"POSADA","aliases":["LLANES","ASTURIAS"]},{"code":"05565","name":"BALMORI","aliases":["LLANES","ASTURIAS"]},{"code":"05567","name":"CELORIO","aliases":["LLANES","ASTURIAS"]},{"code":"05569","name":"POO","aliases":["LLANES","ASTURIAS"]},{"code":"05571","name":"LLANES","aliases":["ASTURIAS"]},{"code":"05573","name":"SAN ROQUE DEL ACEBAL","aliases":["LLANES","ASTURIAS"]},{"code":"05575","name":"VIDIAGO","aliases":["LLANES","ASTURIAS"]},{"code":"05577","name":"PENDUELES","aliases":["LLANES","ASTURIAS"]},{"code":"05579","name":"COLOMBRES","aliases":["RIBADEDEVA","ASTURIAS"]},{"code":"05602","name":"VALDECILLA LA MARGA","aliases":["SANTANDER","CANTABRIA"]},{"code":"05621","name":"TORRELAVEGA-CENTRO","aliases":["TORRELAVEGA","CANTABRIA"]},{"code":"05623","name":"PUENTE SAN MIGUEL","aliases":["REOCÍN","CANTABRIA"]},{"code":"05637","name":"CABEZÓN DE LA SAL","aliases":["CANTABRIA"]},{"code":"05641","name":"TRECEÑO","aliases":["VALDÁLIGA","CANTABRIA"]},{"code":"05643","name":"ROIZ","aliases":["VALDÁLIGA","CANTABRIA"]},{"code":"05644","name":"EL BARCENAL","aliases":["SAN VICENTE DE LA BARQUERA","CANTABRIA"]},{"code":"05645","name":"SAN VICENTE DE LA BARQUERA","aliases":["CANTABRIA"]},{"code":"05647","name":"PESUÉS","aliases":["VAL DE SAN VICENTE","CANTABRIA"]},{"code":"05649","name":"UNQUERA","aliases":["VAL DE SAN VICENTE","CANTABRIA"]},{"code":"05651","name":"NUEVA MONTAÑA","aliases":["SANTANDER","CANTABRIA"]},{"code":"05652","name":"VALLE REAL","aliases":["SANTANDER","CANTABRIA"]},{"code":"05655","name":"MALIAÑO VIDRIERA","aliases":["CAMARGO","CANTABRIA"]},{"code":"05657","name":"ASTILLERO","aliases":["ASTILLERO (EL)","CANTABRIA"]},{"code":"05661","name":"HERAS","aliases":["MEDIO CUDEYO","CANTABRIA"]},{"code":"05663","name":"OREJO","aliases":["MARINA DE CUDEYO","CANTABRIA"]},{"code":"05672","name":"PUENTE AGÜERO","aliases":["ENTRAMBASAGUAS","CANTABRIA"]},{"code":"05673","name":"VILLAVERDE DE PONTONES","aliases":["RIBAMONTÁN AL MONTE","CANTABRIA"]},{"code":"05675","name":"HOZ DE ANERO","aliases":["RIBAMONTÁN AL MONTE","CANTABRIA"]},{"code":"05677","name":"BERANGA","aliases":["HAZAS DE CESTO","CANTABRIA"]},{"code":"05679","name":"GAMA","aliases":["BÁRCENA DE CICERO","CANTABRIA"]},{"code":"05681","name":"CICERO","aliases":["BÁRCENA DE CICERO","CANTABRIA"]},{"code":"05683","name":"TRETO","aliases":["BÁRCENA DE CICERO","CANTABRIA"]},{"code":"05685","name":"LIMPIAS","aliases":["CANTABRIA"]},{"code":"05687","name":"MARRÓN","aliases":["AMPUERO","CANTABRIA"]},{"code":"05689","name":"UDALLA","aliases":["RASINES","CANTABRIA"]},{"code":"05691","name":"GIBAJA","aliases":["RAMALES DE LA VICTORIA","CANTABRIA"]},{"code":"05721","name":"ARLA BERRÓN","aliases":["VALLE DE MENA","BURGOS"]},{"code":"05722","name":"UNGO NAVA","aliases":["VALLE DE MENA","BURGOS"]},{"code":"05724","name":"MERCADILLO VILLASANA","aliases":["CEREZO DE RÍO TIRÓN","BURGOS"]},{"code":"05727","name":"CADAGUA","aliases":["VALLE DE MENA","BURGOS"]},{"code":"05730","name":"BERCEDO-MONTIJA","aliases":["MERINDAD DE SOTOSCUEVA","BURGOS"]},{"code":"05731","name":"QUINTANA DE LOS PRADOS","aliases":["ESPINOSA DE LOS MONTEROS","BURGOS"]},{"code":"05732","name":"ESPINOSA DE LOS MONTEROS","aliases":["BURGOS"]},{"code":"05733","name":"REDONDO","aliases":["MERINDAD DE SOTOSCUEVA","BURGOS"]},{"code":"05734","name":"SOTOSCUEVA","aliases":["MERINDAD DE SOTOSCUEVA","BURGOS"]},{"code":"05735","name":"PEDROSA","aliases":["MERINDAD DE VALDEPORRES","BURGOS"]},{"code":"05736","name":"DOSANTE CIDAD","aliases":["MERINDAD DE VALDEPORRES","BURGOS"]},{"code":"05737","name":"ROBREDO AHEDO","aliases":["MERINDAD DE VALDEPORRES","BURGOS"]},{"code":"05738","name":"SONCILLO","aliases":["VALLE DE VALDEBEZANA","BURGOS"]},{"code":"05739","name":"CABAÑAS DE VIRTUS","aliases":["VALLE DE VALDEBEZANA","BURGOS"]},{"code":"05740","name":"ARIJA","aliases":["BURGOS"]},{"code":"05741","name":"LLANO","aliases":["ROZAS DE VALDEARROYO (LAS)","CANTABRIA"]},{"code":"05742","name":"LAS ROZAS DE VALDEARROYO","aliases":["ROZAS DE VALDEARROYO (LAS)","CANTABRIA"]},{"code":"05743","name":"MONTES CLAROS","aliases":["VALDEPRADO DEL RÍO","CANTABRIA"]},{"code":"05744","name":"LOS CARABEOS","aliases":["VALDEPRADO DEL RÍO","CANTABRIA"]},{"code":"05747","name":"CILLAMAYOR","aliases":["BARRUELO DE SANTULLÁN","PALENCIA"]},{"code":"05748","name":"SALINAS DE PISUERGA","aliases":["PALENCIA"]},{"code":"05749","name":"VADO-CERVERA","aliases":["DEHESA DE MONTEJO","PALENCIA"]},{"code":"05750","name":"CASTREJÓN DE LA PEÑA","aliases":["PALENCIA"]},{"code":"05751","name":"VILLAVERDE TARILONTE","aliases":["SANTIBÁÑEZ DE LA PEÑA","PALENCIA"]},{"code":"05752","name":"SANTIBÁÑEZ DE LA PEÑA","aliases":["PALENCIA"]},{"code":"05753","name":"GUARDO APEADERO","aliases":["GUARDO","PALENCIA"]},{"code":"05754","name":"GUARDO","aliases":["PALENCIA"]},{"code":"05755","name":"LA LLAMA DE LA GUZPEÑA","aliases":["PRADO DE LA GUZPEÑA","LEÓN"]},{"code":"05756","name":"LA ESPINA","aliases":["VALDERRUEDA","LEÓN"]},{"code":"05757","name":"VALCUENDE","aliases":["VALDERRUEDA","LEÓN"]},{"code":"05758","name":"PUENTE ALMUHEY","aliases":["VALDERRUEDA","LEÓN"]},{"code":"05759","name":"PRADO DE LA GUZPEÑA","aliases":["LEÓN"]},{"code":"05760","name":"VALLE DE LAS CASAS","aliases":["CEBANICO","LEÓN"]},{"code":"05761","name":"CISTIERNA","aliases":["LEÓN"]},{"code":"05763","name":"LA ERCINA","aliases":["ERCINA (LA)","LEÓN"]},{"code":"05766","name":"BOÑAR","aliases":["LEÓN"]},{"code":"05767","name":"LA VECILLA","aliases":["VECILLA (LA)","LEÓN"]},{"code":"05770","name":"MATALLANA","aliases":["MATALLANA DE TORÍO","LEÓN"]},{"code":"05776","name":"SAN FELIZ","aliases":["GARRAFE DE TORÍO","LEÓN"]},{"code":"05778","name":"FEVE-LEÓN","aliases":["LEÓN"]},{"code":"05790","name":"SORRIBA","aliases":["VALVERDE DE LA VIRGEN","LEÓN"]},{"code":"05799","name":"CEREZAL DE LA GUZPEÑA","aliases":["PRADO DE LA GUZPEÑA","LEÓN"]},{"code":"05803","name":"LA ASUNCIÓN UNIVERSIDAD","aliases":["LEÓN"]},{"code":"06002","name":"ALHAMA DE MURCIA","aliases":["MURCIA"]},{"code":"06003","name":"TOTANA","aliases":["MURCIA"]},{"code":"06006","name":"LORCA-SUTULLENA","aliases":["LORCA","MURCIA"]},{"code":"07004","name":"ÁGUILAS","aliases":["MURCIA"]},{"code":"08004","name":"SEGOVIA-GUIOMAR","aliases":["SEGOVIA"]},{"code":"08223","name":"VIGO URZAIZ","aliases":["VIGO","PONTEVEDRA"]},{"code":"08224","name":"REDONDELA AV","aliases":["REDONDELA","PONTEVEDRA"]},{"code":"08240","name":"MEDINA DEL CAMPO AV","aliases":["MEDINA DEL CAMPO","VALLADOLID"]},{"code":"08247","name":"SANABRIA AV","aliases":["PUEBLA DE SANABRIA","ZAMORA"]},{"code":"08251","name":"A GUDIÑA-PORTA DE GALICIA","aliases":["GUDIÑA (A)","OURENSE"]},{"code":"10000","name":"Madrid-Príncipe Pío","aliases":["MADRID","principe pio","príncipe pío"]},{"code":"10001","name":"Aravaca","aliases":["MADRID"]},{"code":"10002","name":"Pozuelo","aliases":["POZUELO DE ALARCÓN","MADRID"]},{"code":"10005","name":"Las Rozas","aliases":["ROZAS DE MADRID (LAS)","MADRID"]},{"code":"10007","name":"Majadahonda","aliases":[]},{"code":"10100","name":"Pinar de Las Rozas","aliases":["ROZAS DE MADRID (LAS)","MADRID","pinar"]},{"code":"10101","name":"Las Matas","aliases":["ROZAS DE MADRID (LAS)","MADRID"]},{"code":"10103","name":"Torrelodones","aliases":["MADRID"]},{"code":"10104","name":"Galapagar-La Navata","aliases":["GALAPAGAR","MADRID","galapagar","la navata","galapagar la navata"]},{"code":"10200","name":"Villalba de Guadarrama","aliases":["COLLADO VILLALBA","MADRID","villalba"]},{"code":"10201","name":"San Yago","aliases":["GALAPAGAR","MADRID"]},{"code":"10202","name":"Las Zorreras-Navalquejigo","aliases":["SAN LORENZO DE EL ESCORIAL","MADRID","las zorreras","navalquejigo"]},{"code":"10203","name":"El Escorial","aliases":["SAN LORENZO DE EL ESCORIAL","MADRID","escorial"]},{"code":"10204","name":"ZARZALEJO","aliases":["MADRID"]},{"code":"10205","name":"ROBLEDO DE CHAVELA","aliases":["MADRID"]},{"code":"10206","name":"SANTA MARÍA DE LA ALAMEDA-PEGUERINOS","aliases":["SANTA MARÍA DE LA ALAMEDA","MADRID","santa maría de la alameda"]},{"code":"10207","name":"LAS NAVAS DEL MARQUÉS","aliases":["NAVAS DEL MARQUÉS (LAS)","ÁVILA"]},{"code":"10208","name":"NAVALPERAL","aliases":["NAVALPERAL DE PINARES","ÁVILA"]},{"code":"10209","name":"EL PIMPOLLAR","aliases":["SANTA MARÍA DE LA ALAMEDA","MADRID"]},{"code":"10300","name":"HERRADÓN-LA CAÑADA","aliases":["HERRADÓN DE PINARES","ÁVILA"]},{"code":"10302","name":"GUIMORCONDO","aliases":["ÁVILA"]},{"code":"10400","name":"ÁVILA","aliases":[]},{"code":"10409","name":"ARÉVALO","aliases":["ÁVILA"]},{"code":"10500","name":"MEDINA DEL CAMPO","aliases":["VALLADOLID"]},{"code":"10501","name":"POZALDEZ","aliases":["VALLADOLID"]},{"code":"10502","name":"MATAPOZUELOS","aliases":["VALLADOLID"]},{"code":"10503","name":"VALDESTILLAS","aliases":["VALLADOLID"]},{"code":"10504","name":"VIANA","aliases":["VIANA DE CEGA","VALLADOLID"]},{"code":"10600","name":"VALLADOLID-CAMPO GRANDE","aliases":["VALLADOLID"]},{"code":"10602","name":"CABEZÓN DEL PISUERGA","aliases":["CABEZÓN DE PISUERGA","VALLADOLID","cabezón de pisuerga"]},{"code":"10603","name":"CORCOS-AGUILAREJO","aliases":["CORCOS","VALLADOLID"]},{"code":"10604","name":"CUBILLAS DE SANTA MARTA","aliases":["VALLADOLID"]},{"code":"10605","name":"DUEÑAS","aliases":["PALENCIA"]},{"code":"10610","name":"VALLADOLID UNIVERSIDAD","aliases":["VALLADOLID"]},{"code":"11000","name":"VENTA DE BAÑOS","aliases":["PALENCIA"]},{"code":"11004","name":"MAGAZ","aliases":["MAGAZ DE PISUERGA","PALENCIA"]},{"code":"11006","name":"QUINTANA DEL PUENTE","aliases":["PALENCIA"]},{"code":"11009","name":"VILLAQUIRÁN","aliases":["VILLAQUIRÁN DE LOS INFANTES","BURGOS"]},{"code":"11014","name":"BURGOS-ROSA MANZANO","aliases":["BURGOS"]},{"code":"11109","name":"BRIVIESCA","aliases":["BURGOS"]},{"code":"11111","name":"PANCORBO","aliases":["BURGOS"]},{"code":"11200","name":"MIRANDA DE EBRO","aliases":["BURGOS"]},{"code":"11203","name":"MANZANOS","aliases":["RIBERA BAJA/ERRIBERA BEITIA","ARABA/ÁLAVA"]},{"code":"11204","name":"LA PUEBLA DE ARGANZÓN","aliases":["PUEBLA DE ARGANZÓN (LA)","BURGOS"]},{"code":"11205","name":"NANCLARES-LANGRAIZ","aliases":["IRUÑA OKA/IRUÑA DE OCA","ARABA/ÁLAVA"]},{"code":"11208","name":"VITORIA-GASTEIZ","aliases":["ARABA/ÁLAVA"]},{"code":"11210","name":"ALEGRÍA-DULANTZI","aliases":["ARABA/ÁLAVA"]},{"code":"11212","name":"AGURAIN-SALVATIERRA DE ÁLAVA","aliases":["SALVATIERRA/AGURAIN","ARABA/ÁLAVA"]},{"code":"11213","name":"ARAIA","aliases":["ZALDUONDO","ARABA/ÁLAVA"]},{"code":"11300","name":"ALTSASU","aliases":["ALTSASU/ALSASUA","NAVARRA"]},{"code":"11305","name":"BRINKOLA","aliases":["LEGAZPI","GIPUZKOA"]},{"code":"11306","name":"LEGAZPI","aliases":["GIPUZKOA"]},{"code":"11400","name":"ZUMARRAGA","aliases":["GIPUZKOA"]},{"code":"11402","name":"ORMÁIZTEGUI","aliases":["ORMAIZTEGI","GIPUZKOA"]},{"code":"11404","name":"BEASAIN","aliases":["GIPUZKOA"]},{"code":"11405","name":"ORDIZIA","aliases":["GIPUZKOA"]},{"code":"11500","name":"TOLOSA","aliases":["GIPUZKOA"]},{"code":"11501","name":"TOLOSA-CENTRO","aliases":["TOLOSA","GIPUZKOA"]},{"code":"11503","name":"BILLABONA-ZIZURKIL","aliases":["VILLABONA","GIPUZKOA"]},{"code":"11504","name":"ANDOAIN-CENTRO","aliases":["ANDOAIN","GIPUZKOA"]},{"code":"11507","name":"HERNANI-ERDIA","aliases":["HERNANI","GIPUZKOA"]},{"code":"11511","name":"SAN SEBASTIÁN-DONOSTIA","aliases":["DONOSTIA/SAN SEBASTIÁN","GIPUZKOA"]},{"code":"11515","name":"PASAIA","aliases":["GIPUZKOA"]},{"code":"11516","name":"LEZO-RENTERÍA","aliases":["LEZO","GIPUZKOA"]},{"code":"11600","name":"IRUN","aliases":["GIPUZKOA"]},{"code":"12001","name":"Los Negrales","aliases":["ALPEDRETE","MADRID"]},{"code":"12002","name":"ALPEDRETE","aliases":["MADRID"]},{"code":"12004","name":"Collado Mediano","aliases":["MADRID"]},{"code":"12005","name":"Los Molinos","aliases":["MOLINOS (LOS)","MADRID"]},{"code":"12006","name":"Cercedilla","aliases":["MADRID"]},{"code":"12009","name":"SAN RAFAEL","aliases":["CASTRO DEL RÍO","SEGOVIA"]},{"code":"12010","name":"EL ESPINAR","aliases":["CASTRO DEL RÍO","SEGOVIA"]},{"code":"12011","name":"LOS ÁNGELES DE SAN RAFAEL","aliases":["CASTRO DEL RÍO","SEGOVIA"]},{"code":"12012","name":"OTERO-HERREROS","aliases":["OTERO DE HERREROS","SEGOVIA"]},{"code":"12013","name":"ORTIGOSA DEL MONTE","aliases":["SEGOVIA"]},{"code":"12014","name":"NAVAS DE RIOFRÍO-LA LOSA","aliases":["NAVAS DE RIOFRÍO","SEGOVIA"]},{"code":"12020","name":"Puerto de Navacerrada","aliases":["CERCEDILLA","MADRID","puerto navacerrada","navacerrada"]},{"code":"12023","name":"Cotos","aliases":["REAL SITIO DE SAN ILDEFONSO","SEGOVIA"]},{"code":"12100","name":"SEGOVIA","aliases":[]},{"code":"13100","name":"Orduña","aliases":[]},{"code":"13106","name":"LLODIO","aliases":["LAUDIO/LLODIO","ARABA/ÁLAVA"]},{"code":"13200","name":"BILBAO-INTERMOD. ABANDO INDALECIO PRIETO","aliases":["BILBAO","BIZKAIA","intermodal abando indalecio prieto"]},{"code":"13206","name":"AMETZOLA","aliases":["BILBAO","BIZKAIA"]},{"code":"13405","name":"Santurtzi","aliases":[]},{"code":"13506","name":"Muskiz","aliases":[]},{"code":"14100","name":"PALENCIA","aliases":[]},{"code":"14103","name":"PIÑA","aliases":["PIÑA DE CAMPOS","PALENCIA"]},{"code":"14104","name":"FRÓMISTA","aliases":["PALENCIA"]},{"code":"14107","name":"OSORNO","aliases":["OSORNO LA MAYOR","PALENCIA"]},{"code":"14108","name":"ESPINOSA DE VILLAGONZALO","aliases":["PALENCIA"]},{"code":"14111","name":"HERRERA DE PISUERGA","aliases":["PALENCIA"]},{"code":"14112","name":"ALAR DEL REY","aliases":["PALENCIA"]},{"code":"14113","name":"MAVE","aliases":["AGUILAR DE CAMPOO","PALENCIA"]},{"code":"14114","name":"AGUILAR DE CAMPOO","aliases":["PALENCIA"]},{"code":"14115","name":"QUINTANILLA DE LAS TORRES","aliases":["POMAR DE VALDIVIA","PALENCIA"]},{"code":"14117","name":"EL CARRIÓN","aliases":["MONZÓN DE CAMPOS","PALENCIA"]},{"code":"14200","name":"MATAPORQUERA","aliases":["VALDEOLEA","CANTABRIA"]},{"code":"14202","name":"REINOSA","aliases":["CANTABRIA"]},{"code":"14206","name":"BÁRCENA","aliases":["BÁRCENA DE PIE DE CONCHA","CANTABRIA"]},{"code":"14210","name":"LOS CORRALES DE BUELNA","aliases":["CORRALES DE BUELNA (LOS)","CANTABRIA"]},{"code":"14213","name":"TORRELAVEGA","aliases":["CANTABRIA"]},{"code":"14216","name":"RENEDO","aliases":["PIÉLAGOS","CANTABRIA"]},{"code":"14220","name":"MALIAÑO","aliases":["CAMARGO","CANTABRIA"]},{"code":"14223","name":"SANTANDER","aliases":["CANTABRIA"]},{"code":"14230","name":"VALDECILLA","aliases":["SANTANDER","CANTABRIA"]},{"code":"15001","name":"GRIJOTA","aliases":["PALENCIA"]},{"code":"15003","name":"BECERRIL","aliases":["BECERRIL DE CAMPOS","PALENCIA"]},{"code":"15004","name":"PAREDES DE NAVA","aliases":["PALENCIA"]},{"code":"15006","name":"CISNEROS","aliases":["PALENCIA"]},{"code":"15007","name":"VILLADA","aliases":["PALENCIA"]},{"code":"15008","name":"GRAJAL","aliases":["GRAJAL DE CAMPOS","LEÓN"]},{"code":"15009","name":"SAHAGÚN","aliases":["LEÓN"]},{"code":"15012","name":"EL BURGO RANERO","aliases":["BURGO RANERO (EL)","LEÓN"]},{"code":"15014","name":"SANTAS MARTAS","aliases":["LEÓN"]},{"code":"15015","name":"PALANQUINOS","aliases":["VILLANUEVA DE LAS MANZANAS","LEÓN"]},{"code":"15100","name":"LEÓN","aliases":[]},{"code":"15106","name":"LA ROBLA","aliases":["ROBLA (LA)","LEÓN"]},{"code":"15108","name":"LA POLA DE GORDÓN","aliases":["POLA DE GORDÓN (LA)","LEÓN"]},{"code":"15109","name":"SANTA LUCÍA","aliases":["POLA DE GORDÓN (LA)","LEÓN"]},{"code":"15112","name":"VILLAMANÍN","aliases":["LEÓN"]},{"code":"15113","name":"BUSDONGO","aliases":["VILLAMANÍN","LEÓN"]},{"code":"15116","name":"LINARES-CONGOSTINAS","aliases":["LENA","ASTURIAS"]},{"code":"15118","name":"PUENTE DE LOS FIERROS","aliases":["LENA","ASTURIAS"]},{"code":"15120","name":"CAMPOMANES","aliases":["LENA","ASTURIAS"]},{"code":"15122","name":"POLA DE LENA","aliases":["LENA","ASTURIAS"]},{"code":"15200","name":"UJO","aliases":["MIERES","ASTURIAS"]},{"code":"15203","name":"MIERES-PUENTE","aliases":["MIERES","ASTURIAS"]},{"code":"15205","name":"Ablaña","aliases":[]},{"code":"15208","name":"Soto de Rey","aliases":[]},{"code":"15211","name":"OVIEDO","aliases":["ASTURIAS"]},{"code":"15217","name":"LA CORREDORIA","aliases":["OVIEDO","ASTURIAS"]},{"code":"15218","name":"LLAMAQUIQUE","aliases":["OVIEDO","ASTURIAS"]},{"code":"15300","name":"Lugo de Llanera","aliases":["llanera"]},{"code":"15401","name":"CALZADA DE ASTURIAS","aliases":["GIJÓN","ASTURIAS"]},{"code":"15410","name":"GIJÓN-SANZ CRESPO","aliases":["GIJÓN","ASTURIAS"]},{"code":"16008","name":"La Felguera","aliases":[]},{"code":"16403","name":"AVILÉS","aliases":["ASTURIAS"]},{"code":"16405","name":"San Juan de Nieva","aliases":[]},{"code":"17000","name":"MADRID-CHAMARTÍN-CLARA CAMPOAMOR","aliases":["MADRID","chamartin","chamartín","madrid chamartin","madrid chamartín","chamartín cercanías","chamartin cercanias","madrid chamartín clara campoamor"]},{"code":"17001","name":"Fuencarral","aliases":[]},{"code":"17003","name":"El Goloso","aliases":["goloso"]},{"code":"17004","name":"Tres Cantos","aliases":["trescantos"]},{"code":"17005","name":"Colmenar Viejo","aliases":["colmenar"]},{"code":"17009","name":"Universidad-Cantoblanco","aliases":["cantoblanco","universidad cantoblanco","universidad"]},{"code":"18000","name":"Madrid-Atocha Cercanías","aliases":["atocha cercanias","atocha cercanías","madrid atocha cercanias","madrid atocha cercanías"]},{"code":"18001","name":"Madrid-Recoletos","aliases":["MADRID","chamartin","chamartín","madrid chamartin","madrid chamartín","recoletos"]},{"code":"18002","name":"Madrid-Nuevos Ministerios","aliases":["MADRID","nuevos ministerios"]},{"code":"18004","name":"Madrid-Delicias","aliases":["delicias"]},{"code":"18005","name":"Madrid-Pirámides","aliases":["piramides","pirámides"]},{"code":"18101","name":"Madrid-Sol","aliases":["sol"]},{"code":"19001","name":"Universidad P. Comillas","aliases":["universidad comillas","comillas"]},{"code":"19002","name":"Valdelasfuentes","aliases":[]},{"code":"19003","name":"Alcobendas-San Sebastián de los Reyes","aliases":["alcobendas","san sebastian","san sebastian de los reyes","alcobendas/san sebastián"]},{"code":"20002","name":"QUINTANA-RANEROS","aliases":["SANTOVENIA DE LA VALDONCINA","LEÓN"]},{"code":"20005","name":"VEGUELLINA","aliases":["VILLAREJO DE ÓRBIGO","LEÓN"]},{"code":"20006","name":"BARRIENTOS","aliases":["VALDERREY","LEÓN"]},{"code":"20007","name":"NISTAL","aliases":["SAN JUSTO DE LA VEGA","LEÓN"]},{"code":"20008","name":"VILLAVANTE","aliases":["SANTA MARINA DEL REY","LEÓN"]},{"code":"20100","name":"ASTORGA","aliases":["LEÓN"]},{"code":"20102","name":"VEGA-MAGAZ","aliases":["MAGAZ DE CEPEDA","LEÓN"]},{"code":"20103","name":"PORQUEROS","aliases":["MAGAZ DE CEPEDA","LEÓN"]},{"code":"20104","name":"BRAÑUELAS","aliases":["VILLAGATÓN","LEÓN"]},{"code":"20106","name":"LA GRANJA","aliases":["TORRE DEL BIERZO","LEÓN"]},{"code":"20109","name":"TORRE DEL BIERZO","aliases":["LEÓN"]},{"code":"20111","name":"BEMBIBRE","aliases":["LEÓN"]},{"code":"20113","name":"SAN MIGUEL DE LAS DUEÑAS","aliases":["CONGOSTO","LEÓN"]},{"code":"20200","name":"PONFERRADA","aliases":["LEÓN"]},{"code":"20203","name":"VILLADEPALOS","aliases":["CARRACEDELO","LEÓN"]},{"code":"20204","name":"TORAL DE LOS VADOS","aliases":["LEÓN"]},{"code":"20207","name":"COVAS","aliases":["RUBIÁ","OURENSE"]},{"code":"20208","name":"QUEREÑO","aliases":["RUBIÁ","OURENSE"]},{"code":"20210","name":"SOBRADELO","aliases":["CARBALLEDA DE VALDEORRAS","OURENSE"]},{"code":"20211","name":"O BARCO DE VALDEORRAS","aliases":["BARCO DE VALDEORRAS (O)","OURENSE"]},{"code":"20212","name":"VILAMARTÍN DE VALDEORRAS","aliases":["OURENSE"]},{"code":"20213","name":"A RÚA-PETÍN","aliases":["RÚA (A)","OURENSE"]},{"code":"20214","name":"MONTEFURADO","aliases":["QUIROGA","LUGO"]},{"code":"20216","name":"SAN CLODIO-QUIROGA","aliases":["RIBAS DE SIL","LUGO"]},{"code":"20218","name":"A POBRA DO BROLLÓN","aliases":["POBRA DO BROLLÓN (A)","LUGO","pobra de brollon","pobra de brollón"]},{"code":"20300","name":"MONFORTE DE LEMOS","aliases":["LUGO"]},{"code":"20305","name":"SARRIA","aliases":["LUGO"]},{"code":"20306","name":"PEDRELO-CÉLTIGOS","aliases":["SARRIA","LUGO"]},{"code":"20309","name":"LUGO","aliases":[]},{"code":"20310","name":"RÁBADE","aliases":["LUGO"]},{"code":"20312","name":"BAAMONDE","aliases":["BEGONTE","LUGO"]},{"code":"20313","name":"PARGA","aliases":["GUITIRIZ","LUGO"]},{"code":"20314","name":"GUITIRIZ","aliases":["LUGO"]},{"code":"20316","name":"TEIXEIRO","aliases":["CURTIS","CORUÑA, A"]},{"code":"20317","name":"CURTIS","aliases":["CORUÑA, A"]},{"code":"20318","name":"PIÑOI","aliases":["CESURAS","CORUÑA, A"]},{"code":"20319","name":"CESURAS","aliases":["CORUÑA, A"]},{"code":"20320","name":"OZA DOS RÍOS","aliases":["CORUÑA, A"]},{"code":"20400","name":"BETANZOS-INFESTA","aliases":["BETANZOS","CORUÑA, A"]},{"code":"20402","name":"CECEBRE","aliases":["CAMBRE","CORUÑA, A"]},{"code":"20403","name":"CAMBRE","aliases":["CORUÑA, A"]},{"code":"20404","name":"O BURGO-SANTIAGO","aliases":["CULLEREDO","CORUÑA, A"]},{"code":"20410","name":"ELVIÑA-UNIVERSIDADE","aliases":["CORUÑA (A)","CORUÑA, A"]},{"code":"21001","name":"BETANZOS-CIDADE","aliases":["BETANZOS","CORUÑA, A"]},{"code":"21002","name":"MIÑO","aliases":["CORUÑA, A"]},{"code":"21003","name":"PERBES","aliases":["MIÑO","CORUÑA, A"]},{"code":"21004","name":"PONTEDEUME","aliases":["CORUÑA, A"]},{"code":"21005","name":"CABANAS","aliases":["CORUÑA, A"]},{"code":"21007","name":"BARALLOBRE","aliases":["FENE","CORUÑA, A"]},{"code":"21008","name":"PERLÍO","aliases":["FENE","CORUÑA, A"]},{"code":"21009","name":"NEDA","aliases":["CORUÑA, A"]},{"code":"21010","name":"FERROL","aliases":["CORUÑA, A"]},{"code":"21913","name":"POLIGON INDUSTRIAL DEL SEGRE","aliases":["LLEIDA"]},{"code":"22001","name":"CANAVAL","aliases":["SOBER","LUGO"]},{"code":"22002","name":"AREAS","aliases":["SOBER","LUGO"]},{"code":"22003","name":"SANTO ESTEVO DO SIL","aliases":["PANTÓN","LUGO"]},{"code":"22004","name":"SAN PEDRO DO SIL","aliases":["PANTÓN","LUGO"]},{"code":"22005","name":"OS PEARES","aliases":["PEROXA (A)","OURENSE"]},{"code":"22006","name":"BARRA DE MIÑO","aliases":["COLES","OURENSE"]},{"code":"22100","name":"OURENSE","aliases":[]},{"code":"22101","name":"BARBANTES","aliases":["CENLLE","OURENSE"]},{"code":"22102","name":"RIBADAVIA","aliases":["OURENSE"]},{"code":"22103","name":"FILGUEIRA","aliases":["CRECENTE","PONTEVEDRA"]},{"code":"22104","name":"FRIEIRA","aliases":["CRECENTE","PONTEVEDRA"]},{"code":"22105","name":"POUSA-CRECENTE","aliases":["CRECENTE","PONTEVEDRA"]},{"code":"22106","name":"ARBO","aliases":["PONTEVEDRA"]},{"code":"22107","name":"SELA","aliases":["ARBO","PONTEVEDRA"]},{"code":"22108","name":"AS NEVES","aliases":["NEVES (AS)","PONTEVEDRA"]},{"code":"22109","name":"SALVATERRA","aliases":["SALVATERRA DE MIÑO","PONTEVEDRA"]},{"code":"22110","name":"CALDELAS","aliases":["TUI","PONTEVEDRA"]},{"code":"22200","name":"GUILLAREI","aliases":["TUI","PONTEVEDRA"]},{"code":"22201","name":"O PORRIÑO","aliases":["PORRIÑO (O)","PONTEVEDRA"]},{"code":"22300","name":"REDONDELA","aliases":["PONTEVEDRA"]},{"code":"22308","name":"VIGO-GUIXAR","aliases":["VIGO","PONTEVEDRA"]},{"code":"22401","name":"TUI","aliases":["PONTEVEDRA"]},{"code":"22402","name":"VALENÇA DO MINHO","aliases":["TUI","PONTEVEDRA"]},{"code":"23000","name":"REDONDELA-PICOTA","aliases":["REDONDELA","PONTEVEDRA"]},{"code":"23001","name":"CESANTES","aliases":["REDONDELA","PONTEVEDRA"]},{"code":"23002","name":"ARCADE","aliases":["SOUTOMAIOR","PONTEVEDRA"]},{"code":"23004","name":"PONTEVEDRA","aliases":[]},{"code":"23005","name":"PORTELA","aliases":["BARRO","PONTEVEDRA"]},{"code":"23008","name":"VILAGARCÍA DE AROUSA","aliases":["PONTEVEDRA"]},{"code":"23009","name":"CATOIRA","aliases":["PONTEVEDRA"]},{"code":"23010","name":"PONTECESURES","aliases":["PONTEVEDRA"]},{"code":"23011","name":"PADRÓN","aliases":["CORUÑA, A"]},{"code":"23013","name":"OSEBE","aliases":["TEO","CORUÑA, A"]},{"code":"23018","name":"PONTEVEDRA UNIVERSIDAD","aliases":["PONTEVEDRA"]},{"code":"23021","name":"PADRÓN BARBANZA","aliases":["PADRÓN","CORUÑA, A"]},{"code":"30000","name":"MONFRAGÜE","aliases":["MALPARTIDA DE PLASENCIA","CÁCERES"]},{"code":"30002","name":"PLASENCIA","aliases":["CÁCERES"]},{"code":"30100","name":"SALAMANCA","aliases":[]},{"code":"30110","name":"SALAMANCA-LA ALAMEDILLA","aliases":["SALAMANCA"]},{"code":"30200","name":"ZAMORA","aliases":[]},{"code":"31002","name":"NAVA DEL REY","aliases":["VALLADOLID"]},{"code":"31006","name":"TORO","aliases":["ZAMORA"]},{"code":"31104","name":"CARBAJALES DE ALBA","aliases":["ZAMORA"]},{"code":"31106","name":"FERRERUELA DE TÁBARA","aliases":["FERRERUELA DE HUERVA","ZAMORA"]},{"code":"31107","name":"ABEJERA","aliases":["RIOFRÍO DE ALISTE","ZAMORA"]},{"code":"31108","name":"SARRACÍN DE ALISTE","aliases":["RIOFRÍO DE ALISTE","ZAMORA"]},{"code":"31109","name":"CABAÑAS DE ALISTE","aliases":["SAN VICENTE DE LA CABEZA","ZAMORA"]},{"code":"31112","name":"LINAREJOS-PEDROSO","aliases":["MANZANAL DE ARRIBA","ZAMORA"]},{"code":"31200","name":"PUEBLA DE SANABRIA","aliases":["ZAMORA"]},{"code":"31303","name":"A FRIELA-MASIDE","aliases":["MASIDE","OURENSE"]},{"code":"31304","name":"O CARBALLIÑO","aliases":["CARBALLIÑO (O)","OURENSE"]},{"code":"31306","name":"O IRIXO","aliases":["IRIXO (O)","OURENSE"]},{"code":"31308","name":"LALÍN","aliases":["PONTEVEDRA"]},{"code":"31400","name":"SANTIAGO DE COMPOSTELA-DANIEL CASTELAO","aliases":["SANTIAGO DE COMPOSTELA","CORUÑA, A"]},{"code":"31411","name":"UXES","aliases":["ARTEIXO","CORUÑA, A"]},{"code":"31412","name":"A CORUÑA","aliases":["CORUÑA (A)","CORUÑA, A"]},{"code":"31415","name":"ORDES","aliases":["CORUÑA, A"]},{"code":"31416","name":"CERCEDA-MEIRAMA","aliases":["CERCEDA","CORUÑA, A"]},{"code":"32001","name":"CAMPILLO","aliases":["CAMPILLO (EL)","VALLADOLID"]},{"code":"32002","name":"EL CARPIO","aliases":["CARPIO","VALLADOLID"]},{"code":"32003","name":"FRESNO EL VIEJO","aliases":["VALLADOLID"]},{"code":"32004","name":"CANTALAPIEDRA","aliases":["SALAMANCA"]},{"code":"32006","name":"EL PEDROSO DE LA ARMUÑA","aliases":["PEDROSO DE LA ARMUÑA (EL)","SALAMANCA"]},{"code":"32007","name":"PITIEGUA","aliases":["SALAMANCA"]},{"code":"32008","name":"GOMECELLO","aliases":["SALAMANCA"]},{"code":"32009","name":"MORISCOS","aliases":["SALAMANCA"]},{"code":"33013","name":"Ciudad Rodrigo","aliases":[]},{"code":"33016","name":"Fuentes de Oñoro","aliases":[]},{"code":"34002","name":"CARDEÑOSA DE ÁVILA","aliases":["CARDEÑOSA","ÁVILA"]},{"code":"34005","name":"SAN PEDRO DEL ARROYO","aliases":["ÁVILA"]},{"code":"34007","name":"CRESPOS","aliases":["ÁVILA"]},{"code":"34008","name":"NARROS DEL CASTILLO","aliases":["ÁVILA"]},{"code":"34010","name":"PEÑARANDA DE BRACAMONTE","aliases":["SALAMANCA"]},{"code":"34011","name":"VILLAR DE GALLIMAZO","aliases":["SALAMANCA"]},{"code":"34012","name":"BABILAFUENTE","aliases":["SALAMANCA"]},{"code":"34013","name":"SAN MORALES","aliases":["SALAMANCA"]},{"code":"34014","name":"ALDEALENGUA","aliases":["SALAMANCA"]},{"code":"35001","name":"Leganés","aliases":["MADRID","leganes"]},{"code":"35002","name":"FUENLABRADA","aliases":["fuenla"]},{"code":"35005","name":"ILLESCAS","aliases":["TOLEDO"]},{"code":"35009","name":"Zarzaquemada","aliases":[]},{"code":"35010","name":"La Serna-Fuenlabrada","aliases":["la serna","la serna fuenlabrada"]},{"code":"35011","name":"Parque Polvoranca","aliases":["polvoranca"]},{"code":"35012","name":"Humanes","aliases":["HUMANES DE MADRID","MADRID"]},{"code":"35105","name":"TORRIJOS","aliases":["TOLEDO"]},{"code":"35109","name":"MONTEARAGÓN","aliases":["TOLEDO"]},{"code":"35200","name":"TALAVERA DE LA REINA","aliases":["TOLEDO"]},{"code":"35203","name":"OROPESA DE TOLEDO","aliases":["OROPESA","TOLEDO"]},{"code":"35206","name":"NAVALMORAL DE LA MATA","aliases":["CÁCERES"]},{"code":"35207","name":"CASATEJADA","aliases":["CÁCERES"]},{"code":"35301","name":"MIRABEL","aliases":["CÁCERES"]},{"code":"35302","name":"CASAS DE MILLÁN","aliases":["CÁCERES"]},{"code":"35303","name":"CAÑAVERAL","aliases":["CÁCERES"]},{"code":"35400","name":"CÁCERES","aliases":[]},{"code":"35402","name":"ARROYO DE MALPARTIDA","aliases":["CÁCERES"]},{"code":"35405","name":"SAN VICENTE DE ALCÁNTARA","aliases":["BADAJOZ"]},{"code":"35406","name":"VALENCIA DE ALCÁNTARA","aliases":["CÁCERES"]},{"code":"35600","name":"Aluche","aliases":[]},{"code":"35601","name":"Fanjul","aliases":[]},{"code":"35602","name":"Las Águilas","aliases":["las aguilas","águilas"]},{"code":"35603","name":"Cuatro Vientos","aliases":[]},{"code":"35604","name":"San José de Valderas","aliases":["san jose de valderas","san jose"]},{"code":"35605","name":"Alcorcón","aliases":["alcorcon"]},{"code":"35606","name":"Móstoles","aliases":["mostoles"]},{"code":"35607","name":"Móstoles-El Soto","aliases":["mostoles el soto","el soto"]},{"code":"35608","name":"Laguna","aliases":[]},{"code":"35609","name":"Embajadores","aliases":[]},{"code":"35610","name":"Las Retamas","aliases":[]},{"code":"35701","name":"Méndez Álvaro","aliases":["mendez alvaro"]},{"code":"35702","name":"Doce de Octubre","aliases":[]},{"code":"35703","name":"Orcasitas","aliases":[]},{"code":"35704","name":"Puente Alcocer","aliases":[]},{"code":"37001","name":"Villaverde Alto","aliases":[]},{"code":"37002","name":"Getafe-Centro","aliases":["getafe centro","getafe"]},{"code":"37010","name":"Las Margaritas-Universidad","aliases":["las margaritas","las margaritas universidad"]},{"code":"37011","name":"Getafe-Sector 3","aliases":["getafe sector 3","sector 3"]},{"code":"37012","name":"Parla","aliases":[]},{"code":"37200","name":"CIUDAD REAL","aliases":[]},{"code":"37300","name":"PUERTOLLANO","aliases":["CIUDAD REAL"]},{"code":"37302","name":"BRAZATORTAS-VEREDAS","aliases":["BRAZATORTAS","CIUDAD REAL"]},{"code":"37305","name":"ALMADENEJOS-ALMADÉN","aliases":["ALMADENEJOS","CIUDAD REAL"]},{"code":"37308","name":"GUADALMEZ-LOS PEDROCHES","aliases":["GUADALMEZ","CIUDAD REAL"]},{"code":"37311","name":"CABEZA DEL BUEY","aliases":["BADAJOZ"]},{"code":"37400","name":"ALMORCHÓN","aliases":["CABEZA DEL BUEY","BADAJOZ"]},{"code":"37402","name":"CASTUERA","aliases":["BADAJOZ"]},{"code":"37404","name":"CAMPANARIO","aliases":["BADAJOZ"]},{"code":"37406","name":"VILLANUEVA DE LA SERENA","aliases":["BADAJOZ"]},{"code":"37407","name":"DON BENITO","aliases":["BADAJOZ"]},{"code":"37409","name":"VALDETORRES","aliases":["BADAJOZ"]},{"code":"37410","name":"GUAREÑA","aliases":["BADAJOZ"]},{"code":"37500","name":"MÉRIDA","aliases":["BADAJOZ"]},{"code":"37603","name":"MONTIJO","aliases":["BADAJOZ"]},{"code":"37604","name":"GUADIANA","aliases":["GUADIANA DEL CAUDILLO","BADAJOZ"]},{"code":"37606","name":"BADAJOZ","aliases":[]},{"code":"37608","name":"MONTIJO-EL MOLINO","aliases":["MONTIJO","BADAJOZ"]},{"code":"37611","name":"GARROVILLA-LAS VEGAS","aliases":["GARROVILLA (LA)","BADAJOZ"]},{"code":"37704","name":"VILLANUEVA DE CÓRDOBA","aliases":["CÓRDOBA"]},{"code":"40002","name":"CALAMONTE","aliases":["BADAJOZ"]},{"code":"40004","name":"ALMENDRALEJO","aliases":["BADAJOZ"]},{"code":"40005","name":"VILLAFRANCA DE LOS BARROS","aliases":["BADAJOZ"]},{"code":"40006","name":"LOS SANTOS DE MAIMONA","aliases":["SANTOS DE MAIMONA (LOS)","BADAJOZ"]},{"code":"40008","name":"ZAFRA FERIA","aliases":["ZAFRA","BADAJOZ"]},{"code":"40100","name":"ZAFRA","aliases":["BADAJOZ"]},{"code":"40105","name":"LLERENA","aliases":["BADAJOZ"]},{"code":"40107","name":"FUENTE DEL ARCO","aliases":["BADAJOZ"]},{"code":"40108","name":"GUADALCANAL","aliases":["SEVILLA"]},{"code":"40113","name":"CAZALLA-CONSTANTINA","aliases":["CONSTANTINA","SEVILLA"]},{"code":"40115","name":"PEDROSO","aliases":["PEDROSO (EL)","SEVILLA"]},{"code":"40119","name":"VILLANUEVA DEL RÍO-MINAS","aliases":["VILLANUEVA DEL RÍO Y MINAS","SEVILLA"]},{"code":"40122","name":"TOCINA","aliases":["SEVILLA"]},{"code":"42005","name":"FREGENAL DE LA SIERRA","aliases":["BADAJOZ"]},{"code":"42006","name":"CUMBRES MAYORES","aliases":["HUELVA"]},{"code":"42008","name":"JABUGO-GALAROZA","aliases":["JABUGO","HUELVA"]},{"code":"42009","name":"ALMONASTER-CORTEGANA","aliases":["ALMONASTER LA REAL","HUELVA"]},{"code":"42012","name":"VALDELAMUSA","aliases":["CORTEGANA","HUELVA"]},{"code":"42013","name":"EL TAMUJOSO","aliases":["CERRO DE ANDÉVALO (EL)","HUELVA"]},{"code":"42015","name":"CALAÑAS","aliases":["HUELVA"]},{"code":"42016","name":"LOS MILANOS","aliases":["CALAÑAS","HUELVA"]},{"code":"42018","name":"EL COBUJÓN","aliases":["CALAÑAS","HUELVA"]},{"code":"42019","name":"BELMONTE","aliases":["GIBRALEÓN","HUELVA"]},{"code":"42020","name":"GIBRALEÓN","aliases":["HUELVA"]},{"code":"43003","name":"Villanueva del Ariscal y Olivares","aliases":[]},{"code":"43005","name":"BENACAZÓN","aliases":["SEVILLA"]},{"code":"43008","name":"CARRIÓN DE LOS CÉSPEDES","aliases":["SEVILLA"]},{"code":"43009","name":"ESCACENA","aliases":["ESCACENA DEL CAMPO","HUELVA"]},{"code":"43011","name":"LA PALMA DEL CONDADO","aliases":["PALMA DEL CONDADO (LA)","HUELVA"]},{"code":"43012","name":"VILLARRASA","aliases":["HUELVA"]},{"code":"43015","name":"NIEBLA-PUERTA DEL BUEY","aliases":["NIEBLA","HUELVA"]},{"code":"43019","name":"HUELVA","aliases":["huelva-término"]},{"code":"43021","name":"SAN JUAN DEL PUERTO","aliases":["HUELVA"]},{"code":"50002","name":"CINCO CASAS","aliases":["ALCÁZAR DE SAN JUAN","CIUDAD REAL"]},{"code":"50100","name":"MANZANARES","aliases":["CIUDAD REAL"]},{"code":"50102","name":"VALDEPEÑAS","aliases":["CIUDAD REAL"]},{"code":"50200","name":"SANTA CRUZ DE MUDELA","aliases":["CIUDAD REAL"]},{"code":"50202","name":"ALMURADIEL-VISO DEL MARQUÉS","aliases":["ALMURADIEL","CIUDAD REAL"]},{"code":"50207","name":"VILCHES","aliases":["JAÉN"]},{"code":"50300","name":"LINARES-BAEZA","aliases":["LINARES","JAÉN"]},{"code":"50400","name":"ESPELÚY","aliases":["JAÉN"]},{"code":"50403","name":"ANDÚJAR","aliases":["JAÉN"]},{"code":"50407","name":"VILLA DEL RÍO","aliases":["CÓRDOBA"]},{"code":"50413","name":"ALCOLEA DE CÓRDOBA","aliases":["CÓRDOBA"]},{"code":"50417","name":"CAMPUS UNIVERSITARIO DE RABANALES","aliases":["CÓRDOBA"]},{"code":"50500","name":"CÓRDOBA-JULIO ANGUITA","aliases":["CÓRDOBA"]},{"code":"50501","name":"EL HIGUERÓN","aliases":["CÓRDOBA"]},{"code":"50502","name":"VILLARRUBIA DE CÓRDOBA","aliases":["CÓRDOBA"]},{"code":"50504","name":"POSADAS","aliases":["CÓRDOBA"]},{"code":"50506","name":"PALMA DEL RÍO","aliases":["CÓRDOBA"]},{"code":"50507","name":"PEÑAFLOR","aliases":["SEVILLA"]},{"code":"50600","name":"LORA DEL RÍO","aliases":["SEVILLA"]},{"code":"50700","name":"LOS ROSALES","aliases":["TOCINA","SEVILLA"]},{"code":"50702","name":"Brenes","aliases":[]},{"code":"51003","name":"SEVILLA-SANTA JUSTA","aliases":["SEVILLA"]},{"code":"51050","name":"Cartuja","aliases":[]},{"code":"51100","name":"SAN BERNARDO","aliases":["SEVILLA"]},{"code":"51103","name":"DOS HERMANAS","aliases":["SEVILLA"]},{"code":"51110","name":"VIRGEN DEL ROCÍO","aliases":["SEVILLA"]},{"code":"51111","name":"BELLAVISTA","aliases":["SEVILLA"]},{"code":"51200","name":"UTRERA","aliases":["SEVILLA"]},{"code":"51202","name":"LAS CABEZAS DE SAN JUAN","aliases":["CABEZAS DE SAN JUAN (LAS)","SEVILLA"]},{"code":"51203","name":"LEBRIJA","aliases":["SEVILLA"]},{"code":"51205","name":"AEROPUERTO DE JEREZ","aliases":["JEREZ DE LA FRONTERA","CÁDIZ"]},{"code":"51300","name":"JEREZ DE LA FRONTERA","aliases":["CÁDIZ","jerez"]},{"code":"51400","name":"Puerto de Santa María","aliases":[]},{"code":"51401","name":"Puerto Real","aliases":["puerto real","cadiz","cercanias cadiz"]},{"code":"51402","name":"San Fernando-Centro","aliases":["san fernando","san fernando centro","san fernando-cadiz","cadiz","cercanias cadiz"]},{"code":"51404","name":"Segunda Aguada","aliases":["segunda aguada","cadiz","cádiz","trambahia","trambahía"]},{"code":"51405","name":"Cádiz","aliases":["PUERTO DE SANTA MARÍA (EL)","cadiz","cádiz","trambahia","trambahía","trambahía cádiz"]},{"code":"51406","name":"San Fernando Bahía Sur","aliases":["bahia sur","bahía sur","san fernando bahia sur","san fernando bahía sur","san fernando","cadiz","cercanias cadiz"]},{"code":"51407","name":"Cortadura","aliases":["CÁDIZ","cortadura","cadiz","cádiz","trambahia","trambahía"]},{"code":"51409","name":"Estadio","aliases":["CÁDIZ","cádiz","estadio","cadiz","trambahia","trambahía"]},{"code":"51414","name":"San Severiano","aliases":["CÁDIZ","san severiano","cadiz","cádiz","trambahia","trambahía"]},{"code":"51415","name":"Las Aletas","aliases":[]},{"code":"51416","name":"Universidad de Cádiz","aliases":["universidad","universidad cadiz","universidad de cadiz","cadiz","puerto real","cercanias cadiz"]},{"code":"51417","name":"Valdelagrana","aliases":["valdelagrana","el puerto de santa maria","puerto de santa maria","cadiz","cercanias cadiz"]},{"code":"51418","name":"Pinar de los Franceses","aliases":["pinar franceses","pinar de los franceses","chiclana","chiclana de la frontera","trambahia","trambahía"]},{"code":"51419","name":"Río Arillo","aliases":["rio arillo","río arillo","san fernando","trambahia","trambahía"]},{"code":"51437","name":"Santo Entierro","aliases":["santo entierro","san fernando","trambahia","trambahía"]},{"code":"51438","name":"La Ardila","aliases":["la ardila","ardila","san fernando","trambahia","trambahía"]},{"code":"51439","name":"Plaza del Carmen","aliases":["plaza del carmen","san fernando","trambahia","trambahía"]},{"code":"51440","name":"Compañía de María","aliases":["compania maria","compania de maria","compañía de maría","san fernando","trambahia","trambahía"]},{"code":"51441","name":"Plaza del Rey","aliases":["plaza del rey","san fernando","trambahia","trambahía"]},{"code":"51442","name":"Plaza de la Iglesia","aliases":["plaza iglesia","plaza de la iglesia","san fernando","trambahia","trambahía"]},{"code":"51443","name":"Venta de Vargas","aliases":["venta vargas","venta de vargas","san fernando","trambahia","trambahía"]},{"code":"51444","name":"Tres Caminos","aliases":["tres caminos","puerto real","trambahia","trambahía"]},{"code":"51445","name":"Marquesado","aliases":["marquesado","chiclana","chiclana de la frontera","trambahia","trambahía"]},{"code":"51446","name":"Alameda Solano","aliases":["alameda solano","chiclana","chiclana de la frontera","trambahia","trambahía"]},{"code":"51447","name":"Nuestra Señora de los Remedios","aliases":["nuestra senora remedios","ntra sra de los remedios","remedios","nuestra senora de los remedios","chiclana","chiclana de la frontera","trambahia","trambahía"]},{"code":"51448","name":"Reyes Católicos","aliases":["reyes catolicos","reyes católicos","chiclana","chiclana de la frontera","trambahia","trambahía"]},{"code":"51449","name":"La Hoya","aliases":["la hoya","chiclana","chiclana de la frontera","trambahia","trambahía"]},{"code":"51450","name":"Pelagatos","aliases":["pelagatos","chiclana","chiclana de la frontera","trambahia","trambahía"]},{"code":"54400","name":"BOBADILLA","aliases":["ANTEQUERA","MÁLAGA"]},{"code":"54403","name":"EL CHORRO-CAMINITO DEL REY","aliases":["ÁLORA","MÁLAGA"]},{"code":"54404","name":"LAS MELLIZAS","aliases":["ÁLORA","MÁLAGA"]},{"code":"54405","name":"ÁLORA","aliases":["MÁLAGA"]},{"code":"54406","name":"PIZARRA","aliases":["MÁLAGA"]},{"code":"54407","name":"ALJAIMA","aliases":["CÁRTAMA","MÁLAGA"]},{"code":"54408","name":"CÁRTAMA","aliases":["MÁLAGA"]},{"code":"54410","name":"CAMPANILLAS","aliases":["MÁLAGA"]},{"code":"54412","name":"MÁLAGA-LOS PRADOS","aliases":["MÁLAGA","los prados"]},{"code":"54413","name":"MÁLAGA MARÍA ZAMBRANO","aliases":["MÁLAGA"]},{"code":"54501","name":"VICTORIA KENT","aliases":["MÁLAGA"]},{"code":"54517","name":"MÁLAGA-CENTRO ALAMEDA","aliases":["MÁLAGA"]},{"code":"55001","name":"CAMPILLOS","aliases":["MÁLAGA"]},{"code":"55003","name":"ALMARGEN-CAÑETE LA REAL","aliases":["ALMARGEN","MÁLAGA"]},{"code":"55005","name":"SETENIL","aliases":["SETENIL DE LAS BODEGAS","CÁDIZ"]},{"code":"55007","name":"RONDA","aliases":["MÁLAGA"]},{"code":"55008","name":"ARRIATE","aliases":["MÁLAGA"]},{"code":"55010","name":"BENAOJÁN-MONTEJAQUE","aliases":["BENAOJÁN","MÁLAGA"]},{"code":"55011","name":"JIMERA DE LÍBAR","aliases":["MÁLAGA"]},{"code":"55012","name":"CORTES DE LA FRONTERA","aliases":["MÁLAGA"]},{"code":"55013","name":"GAUCÍN","aliases":["CORTES DE LA FRONTERA","MÁLAGA"]},{"code":"55014","name":"SAN PABLO","aliases":["JIMENA DE LA FRONTERA","CÁDIZ"]},{"code":"55015","name":"JIMENA DE LA FRONTERA","aliases":["CÁDIZ"]},{"code":"55017","name":"ALMORAIMA","aliases":["CASTELLAR DE LA FRONTERA","CÁDIZ"]},{"code":"55018","name":"SAN ROQUE-LA LÍNEA","aliases":["SAN ROQUE","CÁDIZ"]},{"code":"55019","name":"LOS BARRIOS","aliases":["BARRIOS (LOS)","CÁDIZ"]},{"code":"55020","name":"ALGECIRAS","aliases":["CÁDIZ"]},{"code":"56004","name":"JÓDAR-ÚBEDA","aliases":["JÓDAR","JAÉN"]},{"code":"56009","name":"CABRA DEL SANTO CRISTO Y ALICÚN","aliases":["CABRA DEL SANTO CRISTO","JAÉN"]},{"code":"56100","name":"MOREDA","aliases":["MORELÁBOR","GRANADA"]},{"code":"56103","name":"BENALÚA DE GUADIX","aliases":["BENALÚA","GRANADA"]},{"code":"56200","name":"GUADIX","aliases":["GRANADA"]},{"code":"56301","name":"FIÑANA","aliases":["ALMERÍA"]},{"code":"56305","name":"GÉRGAL","aliases":["ALMERÍA"]},{"code":"56308","name":"GÁDOR","aliases":["ALMERÍA"]},{"code":"56310","name":"HUERCAL-VIATOR","aliases":["HUÉRCAL DE ALMERÍA","ALMERÍA"]},{"code":"56312","name":"ALMERÍA","aliases":[]},{"code":"57003","name":"IZNALLOZ","aliases":["GRANADA"]},{"code":"60000","name":"MADRID-PUERTA DE ATOCHA-ALMUDENA GRANDES","aliases":["madrid puerta de atocha","puerta de atocha","atocha"]},{"code":"60100","name":"Villaverde Bajo","aliases":[]},{"code":"60101","name":"San Cristóbal Industrial","aliases":["san cristobal industrial"]},{"code":"60102","name":"Getafe Industrial","aliases":[]},{"code":"60103","name":"Pinto","aliases":[]},{"code":"60104","name":"Valdemoro","aliases":[]},{"code":"60105","name":"Ciempozuelos","aliases":[]},{"code":"60107","name":"San Cristóbal de los Ángeles","aliases":["san cristobal de los angeles","san cristobal"]},{"code":"60200","name":"Aranjuez","aliases":["MADRID"]},{"code":"60202","name":"CASTILLEJO-AÑOVER","aliases":["ARANJUEZ","MADRID"]},{"code":"60203","name":"VILLASEQUILLA","aliases":["TOLEDO"]},{"code":"60206","name":"TEMBLEQUE","aliases":["TOLEDO"]},{"code":"60207","name":"EL ROMERAL","aliases":["ROMERAL (EL)","TOLEDO"]},{"code":"60300","name":"VILLACAÑAS","aliases":["TOLEDO"]},{"code":"60301","name":"QUERO","aliases":["TOLEDO"]},{"code":"60400","name":"ALCÁZAR DE SAN JUAN","aliases":["CIUDAD REAL"]},{"code":"60402","name":"CAMPO DE CRIPTANA","aliases":["CIUDAD REAL"]},{"code":"60406","name":"SOCUÉLLAMOS","aliases":["CIUDAD REAL"]},{"code":"60500","name":"VILLARROBLEDO","aliases":["ALBACETE"]},{"code":"60503","name":"MINAYA","aliases":["ALBACETE"]},{"code":"60505","name":"LA RODA DE ALBACETE","aliases":["RODA (LA)","ALBACETE"]},{"code":"60507","name":"LA GINETA","aliases":["GINETA (LA)","ALBACETE"]},{"code":"60600","name":"ALBACETE-LOS LLANOS","aliases":["ALBACETE"]},{"code":"60800","name":"ALMANSA","aliases":["ALBACETE"]},{"code":"60900","name":"LA ENCINA","aliases":["VILLENA","ALICANTE/ALACANT"]},{"code":"60901","name":"CAUDETE","aliases":["ALBACETE"]},{"code":"60902","name":"VILLENA","aliases":["ALICANTE/ALACANT"]},{"code":"60904","name":"SAX","aliases":["ALICANTE/ALACANT"]},{"code":"60905","name":"ELDA-PETRER","aliases":["ELDA","ALICANTE/ALACANT"]},{"code":"60907","name":"NOVELDA-ASPE","aliases":["NOVELDA","ALICANTE/ALACANT"]},{"code":"60911","name":"ALICANTE/ALACANT-TERMINAL","aliases":["ALICANTE/ALACANT"]},{"code":"60913","name":"SANT VICENT CENTRE","aliases":["SAN VICENTE DEL RASPEIG/SANT VICENT DEL RASPEIG","ALICANTE/ALACANT"]},{"code":"60914","name":"UNIVERSIDAD DE ALICANTE","aliases":["ALICANTE/ALACANT"]},{"code":"61005","name":"HELLÍN","aliases":["ALBACETE"]},{"code":"61012","name":"CIEZA","aliases":["MURCIA"]},{"code":"61015","name":"ARCHENA-FORTUNA","aliases":["MOLINA DE SEGURA","MURCIA"]},{"code":"61200","name":"MURCIA DEL CARMEN","aliases":["MURCIA"]},{"code":"61303","name":"BALSICAS-MAR MENOR","aliases":["TORRE-PACHECO","MURCIA"]},{"code":"61304","name":"TORRE-PACHECO","aliases":["MURCIA"]},{"code":"61307","name":"CARTAGENA","aliases":["MURCIA"]},{"code":"62001","name":"BENIEL","aliases":["MURCIA"]},{"code":"62002","name":"ORIHUELA-MIGUEL HERNÁNDEZ","aliases":["ORIHUELA","ALICANTE/ALACANT"]},{"code":"62003","name":"CALLOSA DE SEGURA","aliases":["ALICANTE/ALACANT"]},{"code":"62100","name":"SAN ISIDRO-ALBATERA-CATRAL","aliases":["SAN ISIDRO","ALICANTE/ALACANT"]},{"code":"62101","name":"CREVILLENTE","aliases":["CREVILLENT","ALICANTE/ALACANT"]},{"code":"62102","name":"ELCHE/ELX-CARRÚS","aliases":["ELCHE/ELX","ALICANTE/ALACANT"]},{"code":"62103","name":"ELCHE/ELX-PARC","aliases":["ELCHE/ELX","ALICANTE/ALACANT"]},{"code":"62104","name":"TORRELLANO","aliases":["ELCHE/ELX","ALICANTE/ALACANT"]},{"code":"62109","name":"SANT GABRIEL","aliases":["ALICANTE/ALACANT"]},{"code":"64007","name":"LENOVA-MANUEL","aliases":["MANUEL","VALENCIA/VALÈNCIA"]},{"code":"64100","name":"XÀTIVA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64102","name":"LA POBLA LLARGA","aliases":["POBLA LLARGA (LA)","VALENCIA/VALÈNCIA"]},{"code":"64103","name":"CARCAIXENT","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64104","name":"ALZIRA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64105","name":"ALGEMESÍ","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64107","name":"BENIFAIÓ","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64200","name":"SILLA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64201","name":"CATARROJA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64202","name":"MASSANASSA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64203","name":"ALFAFAR-BENETÚSSER","aliases":["ALFAFAR","VALENCIA/VALÈNCIA"]},{"code":"65000","name":"VALÈNCIA-ESTACIÓ DEL NORD","aliases":["VALENCIA","VALENCIA/VALÈNCIA"]},{"code":"65001","name":"ROCA-CÚPER","aliases":["MELIANA","VALENCIA/VALÈNCIA"]},{"code":"65002","name":"VALÈNCIA-LA FONT DE SANT LLUÍS","aliases":["VALENCIA","VALENCIA/VALÈNCIA"]},{"code":"65003","name":"VALÈNCIA-CABANYAL","aliases":["VALENCIA","VALENCIA/VALÈNCIA"]},{"code":"65005","name":"ALBUIXECH","aliases":["VALENCIA/VALÈNCIA"]},{"code":"65006","name":"MASSALFASSAR","aliases":["VALENCIA/VALÈNCIA"]},{"code":"65007","name":"EL PUIG","aliases":["PUIG DE SANTA MARIA (EL)","VALENCIA/VALÈNCIA"]},{"code":"65008","name":"PUÇOL","aliases":["VALENCIA/VALÈNCIA"]},{"code":"65200","name":"SAGUNT","aliases":["SAGUNTO/SAGUNT","VALENCIA/VALÈNCIA"]},{"code":"65201","name":"LES VALLS","aliases":["SAGUNTO/SAGUNT","VALENCIA/VALÈNCIA"]},{"code":"65202","name":"ALMENARA","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65203","name":"LA LLOSA","aliases":["LLOSA (LA)","CASTELLÓN/CASTELLÓ"]},{"code":"65204","name":"CHILCHES/XILXES","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65205","name":"MONCOFA","aliases":["NULES","CASTELLÓN/CASTELLÓ","moncofar"]},{"code":"65206","name":"NULES LA VILLAVELLA","aliases":["NULES","CASTELLÓN/CASTELLÓ"]},{"code":"65207","name":"BURRIANA-ALQUERÍAS NIÑO PERDIDO","aliases":["BORRIANA/BURRIANA","CASTELLÓN/CASTELLÓ"]},{"code":"65208","name":"VILA-REAL","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65209","name":"ALMASSORA","aliases":["ALMAZORA/ALMASSORA","CASTELLÓN/CASTELLÓ"]},{"code":"65300","name":"CASTELLÓ DE LA PLANA","aliases":["CASTELLÓN DE LA PLANA/CASTELLÓ DE LA PLANA","CASTELLÓN/CASTELLÓ"]},{"code":"65304","name":"ORPESA","aliases":["OROPESA DEL MAR/ORPESA","CASTELLÓN/CASTELLÓ"]},{"code":"65306","name":"TORREBLANCA","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65308","name":"ALCALÁ DE CHIVERT","aliases":["ALCALÀ DE XIVERT","CASTELLÓN/CASTELLÓ"]},{"code":"65311","name":"BENICARLÓ-PEÑÍSCOLA","aliases":["BENICARLÓ","CASTELLÓN/CASTELLÓ"]},{"code":"65312","name":"VINARÒS","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65314","name":"ULLDECONA-ALCANAR-LA SÉNIA","aliases":["ULLDECONA","TARRAGONA"]},{"code":"65318","name":"BENICÀSSIM","aliases":["BENICASIM/BENICÀSSIM","CASTELLÓN/CASTELLÓ"]},{"code":"65400","name":"TORTOSA","aliases":["TARRAGONA"]},{"code":"65401","name":"CAMP-REDÓ","aliases":["TORTOSA","TARRAGONA"]},{"code":"65402","name":"L'ALDEA-AMPOSTA-TORTOSA","aliases":["ALDEA (L')","TARRAGONA"]},{"code":"65403","name":"CAMARLES-DELTEBRE","aliases":["CAMARLES","TARRAGONA"]},{"code":"65404","name":"L'AMPOLLA-EL PERELLÓ-DELTEBRE","aliases":["AMPOLLA (L')","TARRAGONA"]},{"code":"65405","name":"L'AMETLLA DE MAR","aliases":["AMETLLA DE MAR (L')","TARRAGONA"]},{"code":"65411","name":"SALOU-PORT AVENTURA","aliases":["SALOU","TARRAGONA"]},{"code":"65420","name":"L'HOSPITALET DE L'INFANT","aliases":["VANDELLÒS I L'HOSPITALET DE L'INFANT","TARRAGONA"]},{"code":"65422","name":"CAMBRILS","aliases":["TARRAGONA"]},{"code":"66200","name":"Utiel","aliases":[]},{"code":"66206","name":"Buñol","aliases":[]},{"code":"66212","name":"Valencia-Sant Isidre","aliases":[]},{"code":"67004","name":"MARÍA DE HUERVA","aliases":["ZARAGOZA"]},{"code":"67007","name":"ARAÑALES DE MUEL","aliases":["MUEL","ZARAGOZA"]},{"code":"67009","name":"LONGARES","aliases":["ZARAGOZA"]},{"code":"67010","name":"CARIÑENA","aliases":["ZARAGOZA"]},{"code":"67011","name":"ENCINACORBA","aliases":["ZARAGOZA"]},{"code":"67013","name":"VILLARREAL DE HUERVA","aliases":["ZARAGOZA"]},{"code":"67014","name":"VILLADOZ","aliases":["ZARAGOZA"]},{"code":"67015","name":"BADULES","aliases":["ZARAGOZA"]},{"code":"67016","name":"VILLAHERMOSA","aliases":["VILLAHERMOSA DEL CAMPO","TERUEL"]},{"code":"67017","name":"FERRERUELA","aliases":["FERRERUELA DE HUERVA","TERUEL"]},{"code":"67018","name":"CUENCABUENA","aliases":["CALAMOCHA","TERUEL"]},{"code":"67019","name":"LECHAGO","aliases":["CALAMOCHA","TERUEL"]},{"code":"67020","name":"NAVARRETE","aliases":["CALAMOCHA","TERUEL"]},{"code":"67021","name":"CALAMOCHA","aliases":["TERUEL"]},{"code":"67100","name":"CAMINREAL-FUENTES CLARAS","aliases":["CAMINREAL","TERUEL"]},{"code":"67101","name":"TORRIJO DEL CAMPO","aliases":["TERUEL"]},{"code":"67103","name":"VILLAFRANCA DEL CAMPO","aliases":["TERUEL"]},{"code":"67105","name":"SANTA EULALIA DEL CAMPO","aliases":["SANTA EULALIA","TERUEL"]},{"code":"67107","name":"CELLA","aliases":["TERUEL"]},{"code":"67113","name":"MONREAL DEL CAMPO","aliases":["TERUEL"]},{"code":"67200","name":"TERUEL","aliases":[]},{"code":"67202","name":"Puerto Escandón","aliases":[]},{"code":"67203","name":"PUEBLA DE VALVERDE","aliases":["PUEBLA DE VALVERDE (LA)","TERUEL"]},{"code":"67205","name":"SARRIÓN","aliases":["TERUEL"]},{"code":"67206","name":"MORA DE RUBIELOS","aliases":["ALBENTOSA","TERUEL"]},{"code":"67207","name":"RUBIELOS DE MORA","aliases":["TERUEL"]},{"code":"67208","name":"BARRACAS","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"67211","name":"Caudiel","aliases":[]},{"code":"67215","name":"SEGORBE-CIUDAD","aliases":["SEGORBE","CASTELLÓN/CASTELLÓ"]},{"code":"69001","name":"GENOVÉS","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69002","name":"BENIGÀNIM","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69003","name":"LA POBLA DEL DUC","aliases":["POBLA DEL DUC (LA)","VALENCIA/VALÈNCIA"]},{"code":"69004","name":"MONTABERNER","aliases":["MONTAVERNER","VALENCIA/VALÈNCIA"]},{"code":"69005","name":"BUFALÍ","aliases":["BUFALI","VALENCIA/VALÈNCIA"]},{"code":"69006","name":"ALBAIDA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69007","name":"AGULLENT","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69008","name":"ONTINYENT","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69009","name":"AGRES","aliases":["ALICANTE/ALACANT"]},{"code":"69010","name":"COCENTAINA","aliases":["ALICANTE/ALACANT"]},{"code":"69011","name":"ALCOI","aliases":["ALCOY/ALCOI","ALICANTE/ALACANT"]},{"code":"69104","name":"Cullera","aliases":[]},{"code":"69110","name":"Gandia","aliases":[]},{"code":"70001","name":"Vallecas","aliases":["MADRID","vallecas industrial"]},{"code":"70002","name":"Asamblea de Madrid-Entrevías","aliases":["MADRID","asamblea","entrevias","entrevías"]},{"code":"70003","name":"El Pozo","aliases":["MADRID"]},{"code":"70100","name":"Vicálvaro","aliases":["MADRID","vicalvaro"]},{"code":"70101","name":"San Fernando de Henares","aliases":["COSLADA","MADRID","san fernando"]},{"code":"70102","name":"Torrejón de Ardoz","aliases":["MADRID","torrejon","torrejón","torrejon de ardoz"]},{"code":"70103","name":"ALCALÁ DE HENARES","aliases":["MADRID"]},{"code":"70104","name":"Meco","aliases":["MADRID"]},{"code":"70105","name":"Azuqueca","aliases":["AZUQUECA DE HENARES","GUADALAJARA"]},{"code":"70106","name":"Guadalajara","aliases":[]},{"code":"70107","name":"ALCALÁ DE HENARES-UNIVERSIDAD","aliases":["ALCALÁ DE HENARES","MADRID"]},{"code":"70108","name":"COSLADA","aliases":["MADRID"]},{"code":"70109","name":"Santa Eugenia","aliases":["MADRID"]},{"code":"70111","name":"La Garena","aliases":["ALCALÁ DE HENARES","MADRID"]},{"code":"70112","name":"Soto del Henares","aliases":["YUNQUERA DE HENARES","MADRID"]},{"code":"70202","name":"YUNQUERA DE HENARES","aliases":["GUADALAJARA"]},{"code":"70204","name":"HUMANES DE MOHERNANDO","aliases":["HUMANES","GUADALAJARA"]},{"code":"70207","name":"ESPINOSA DE HENARES","aliases":["COPERNAL","GUADALAJARA"]},{"code":"70208","name":"CARRASCOSA DE HENARES","aliases":["ESPINOSA DE HENARES","GUADALAJARA"]},{"code":"70209","name":"JADRAQUE","aliases":["GUADALAJARA"]},{"code":"70210","name":"MATILLAS","aliases":["GUADALAJARA"]},{"code":"70300","name":"BAIDES","aliases":["GUADALAJARA"]},{"code":"70302","name":"SIGÜENZA","aliases":["GUADALAJARA"]},{"code":"70400","name":"TORRALBA","aliases":["MEDINACELI","SORIA"]},{"code":"70401","name":"MEDINACELI","aliases":["SORIA"]},{"code":"70403","name":"ARCOS DE JALÓN","aliases":["SORIA"]},{"code":"70404","name":"SANTA MARÍA DE HUERTA","aliases":["SORIA"]},{"code":"70405","name":"MONREAL DE ARIZA","aliases":["ZARAGOZA"]},{"code":"70500","name":"ARIZA","aliases":["ZARAGOZA"]},{"code":"70501","name":"CETINA","aliases":["ZARAGOZA"]},{"code":"70502","name":"ALHAMA DE ARAGÓN","aliases":["ZARAGOZA"]},{"code":"70503","name":"BUBIERCA","aliases":["ZARAGOZA"]},{"code":"70504","name":"ATECA","aliases":["ZARAGOZA"]},{"code":"70505","name":"TERRER","aliases":["ZARAGOZA"]},{"code":"70600","name":"CALATAYUD","aliases":["ZARAGOZA"]},{"code":"70602","name":"EMBID DE JALÓN","aliases":["CALATAYUD","ZARAGOZA"]},{"code":"70603","name":"PARACUELLOS-SABIÑÁN","aliases":["PARACUELLOS DE LA RIBERA","ZARAGOZA"]},{"code":"70604","name":"SABIÑÁN","aliases":["ZARAGOZA"]},{"code":"70605","name":"MORÉS","aliases":["ZARAGOZA"]},{"code":"70606","name":"PURROY","aliases":["MORÉS","ZARAGOZA"]},{"code":"70607","name":"MORATA DE JALÓN","aliases":["ZARAGOZA"]},{"code":"70700","name":"RICLA-LA ALMUNIA","aliases":["RICLA","ZARAGOZA"]},{"code":"70701","name":"CALATORAO","aliases":["ZARAGOZA"]},{"code":"70702","name":"SALILLAS DE JALÓN","aliases":["ZARAGOZA"]},{"code":"70703","name":"ÉPILA","aliases":["ZARAGOZA"]},{"code":"70704","name":"RUEDA DE JALÓN-LUMPIAQUE","aliases":["RUEDA DE JALÓN","ZARAGOZA"]},{"code":"70705","name":"PLASENCIA DE JALÓN","aliases":["ZARAGOZA"]},{"code":"70706","name":"GRISÉN","aliases":["ZARAGOZA"]},{"code":"70800","name":"CASETAS","aliases":["ZARAGOZA"]},{"code":"70801","name":"UTEBO","aliases":["ZARAGOZA"]},{"code":"70806","name":"ZARAGOZA-PORTILLO","aliases":["ZARAGOZA"]},{"code":"70807","name":"ZARAGOZA-GOYA","aliases":["ZARAGOZA","zaragoza goya","goya","zaragoza-goya (apd)"]},{"code":"71100","name":"ZARAGOZA-MIRAFLORES","aliases":["ZARAGOZA"]},{"code":"71103","name":"FUENTES DE EBRO","aliases":["ZARAGOZA"]},{"code":"71105","name":"QUINTO","aliases":["ZARAGOZA"]},{"code":"71108","name":"LA ZAIDA-SÁSTAGO","aliases":["ZAIDA (LA)","ZARAGOZA"]},{"code":"71200","name":"LA PUEBLA DE HÍJAR","aliases":["PUEBLA DE HÍJAR (LA)","TERUEL"]},{"code":"71201","name":"SAMPER","aliases":["SAMPER DE CALANDA","TERUEL"]},{"code":"71204","name":"CASPE","aliases":["ZARAGOZA"]},{"code":"71205","name":"VAL DE PILAS","aliases":["CASPE","ZARAGOZA"]},{"code":"71206","name":"FABARA","aliases":["ZARAGOZA"]},{"code":"71207","name":"NONASPE","aliases":["ZARAGOZA"]},{"code":"71208","name":"FAIÓ-LA POBLA DE MASSALUCA","aliases":["POBLA DE MASSALUCA (LA)","TARRAGONA","faio","faió","la pobla de massaluca"]},{"code":"71209","name":"RIBA-ROJA D'EBRE","aliases":["TARRAGONA","riba roja","riba-roja d ebre"]},{"code":"71210","name":"FLIX","aliases":["TARRAGONA","flix"]},{"code":"71211","name":"ASCÓ","aliases":["TARRAGONA","asco","ascó"]},{"code":"71300","name":"MÓRA LA NOVA","aliases":["TARRAGONA","mora la nova","móra la nova"]},{"code":"71302","name":"CAPÇANES","aliases":["TARRAGONA","capcanes","capçanes"]},{"code":"71303","name":"MARÇÀ-FALSET","aliases":["MARÇÀ","TARRAGONA","marca falset","marça falset"]},{"code":"71304","name":"PRADELL","aliases":["PRADELL DE LA TEIXETA","TARRAGONA","pradell"]},{"code":"71305","name":"DUESAIGÜES-L'ARGENTERA","aliases":["ARGENTERA (L')","TARRAGONA","duesaigues","duesaigües","l argentera"]},{"code":"71306","name":"RIUDECANYES-BOTARELL","aliases":["RIUDECANYES","TARRAGONA","riudecanyes botarell"]},{"code":"71307","name":"LES BORGES DEL CAMP","aliases":["BORGES DEL CAMP (LES)","TARRAGONA","borges del camp"]},{"code":"71400","name":"REUS","aliases":["TARRAGONA","reus"]},{"code":"71401","name":"VILA-SECA","aliases":["TARRAGONA","vila seca","vila-seca"]},{"code":"71500","name":"TARRAGONA","aliases":["tarragona"]},{"code":"71502","name":"ALTAFULLA-TAMARIT","aliases":["TARRAGONA","altafulla","tamarit"]},{"code":"71503","name":"TORREDEMBARRA","aliases":["TARRAGONA","torredembarra"]},{"code":"71600","name":"SANT VICENÇ DE CALDERS","aliases":["VENDRELL (EL)","TARRAGONA"]},{"code":"71700","name":"VILANOVA I LA GELTRÚ","aliases":["BARCELONA"]},{"code":"71707","name":"El Prat de Llobregat","aliases":["prat","el prat"]},{"code":"71708","name":"Bellvitge","aliases":["bellvitge"]},{"code":"71801","name":"BARCELONA-SANTS","aliases":["BARCELONA"]},{"code":"71802","name":"BARCELONA-PASSEIG DE GRÀCIA","aliases":["BARCELONA","barcelona passeig de gracia","passeig de gracia","paseo de gracia"]},{"code":"72101","name":"RODA DE MAR","aliases":["RODA DE BARÀ","TARRAGONA","roda de mar"]},{"code":"72209","name":"Martorell Central","aliases":["martorell"]},{"code":"72210","name":"Castellbisbal","aliases":["castellbisbal"]},{"code":"72305","name":"L'Hospitalet de Llobregat","aliases":["hospitalet","l hospitalet","l hospitalet de llobregat"]},{"code":"73001","name":"PUIGVERD DE LLEIDA-ARTESA","aliases":["PUIGVERD DE LLEIDA","LLEIDA","puigverd de lleida","artesa de lleida"]},{"code":"73002","name":"JUNEDA","aliases":["LLEIDA","juneda"]},{"code":"73003","name":"LES BORGES BLANQUES","aliases":["BORGES BLANQUES (LES)","LLEIDA","les borges blanques"]},{"code":"73004","name":"LA FLORESTA","aliases":["FLORESTA (LA)","LLEIDA","la floresta"]},{"code":"73005","name":"VINAIXA","aliases":["LLEIDA","vinaixa"]},{"code":"73006","name":"VIMBODÍ I POBLET","aliases":["TARRAGONA","vimbodi","vimbodí","poblet"]},{"code":"73007","name":"L'ESPLUGA DE FRANCOLÍ","aliases":["ESPLUGA DE FRANCOLÍ (L')","TARRAGONA","espluga de francoli","espluga de francolí"]},{"code":"73008","name":"MONTBLANC","aliases":["TARRAGONA","montblanc"]},{"code":"73009","name":"VILAVERD","aliases":["TARRAGONA","vilaverd"]},{"code":"73010","name":"LA RIBA","aliases":["RIBA (LA)","TARRAGONA","la riba"]},{"code":"73100","name":"LA PLANA-PICAMOIXONS","aliases":["VALLS","TARRAGONA","la plana picamoixons","la plana","picamoixons"]},{"code":"73101","name":"ALCOVER","aliases":["TARRAGONA","alcover"]},{"code":"73102","name":"LA SELVA DEL CAMP","aliases":["SELVA DEL CAMP (LA)","TARRAGONA","la selva del camp"]},{"code":"74200","name":"HUESCA","aliases":[]},{"code":"74204","name":"AYERBE","aliases":["HUESCA"]},{"code":"74206","name":"RIGLOS","aliases":["PEÑAS DE RIGLOS (LAS)","HUESCA"]},{"code":"74207","name":"SANTA MARÍA Y LA PEÑA","aliases":["PEÑAS DE RIGLOS (LAS)","HUESCA"]},{"code":"74208","name":"ANZÁNIGO","aliases":["JACA","HUESCA"]},{"code":"74209","name":"CALDEARENAS-AQUILUÉ","aliases":["CALDEARENAS","HUESCA"]},{"code":"74211","name":"SABIÑÁNIGO","aliases":["HUESCA"]},{"code":"74213","name":"JACA","aliases":["HUESCA"]},{"code":"74214","name":"CASTIELLO-PUEBLO","aliases":["CASTIELLO DE JACA","HUESCA"]},{"code":"74216","name":"VILLANÚA","aliases":["HUESCA"]},{"code":"74217","name":"CANFRANC","aliases":["HUESCA"]},{"code":"75101","name":"ALCOLETGE","aliases":["LLEIDA"]},{"code":"75102","name":"VILANOVA DE LA BARCA","aliases":["LLEIDA"]},{"code":"75103","name":"TÉRMENS","aliases":["LLEIDA"]},{"code":"75104","name":"VALLFOGONA DE BALAGUER","aliases":["LLEIDA"]},{"code":"75105","name":"BALAGUER","aliases":["LLEIDA"]},{"code":"75106","name":"GERB","aliases":["OS DE BALAGUER","LLEIDA"]},{"code":"75107","name":"SANT LLORENÇ DE MONTGAI","aliases":["CAMARASA","LLEIDA"]},{"code":"75108","name":"VILANOVA DE LA SAL","aliases":["AVELLANES I SANTA LINYA (LES)","LLEIDA"]},{"code":"75109","name":"SANTA LIÑA","aliases":["AVELLANES I SANTA LINYA (LES)","LLEIDA"]},{"code":"75110","name":"AGER","aliases":["ÀGER","LLEIDA"]},{"code":"75111","name":"CELLERS-LLIMIANA","aliases":["CASTELL DE MUR","LLEIDA"]},{"code":"75112","name":"GUARDIA DE TREMP","aliases":["SANT ESTEVE DE LA SARGA","LLEIDA"]},{"code":"75113","name":"PALAU-PUIGCERCOS","aliases":["TREMP","LLEIDA"]},{"code":"75114","name":"TREMP","aliases":["LLEIDA"]},{"code":"75115","name":"SALAS DE PALLARS","aliases":["SALÀS DE PALLARS","LLEIDA"]},{"code":"75116","name":"LA POBLA DE SEGUR","aliases":["POBLA DE SEGUR (LA)","LLEIDA"]},{"code":"76001","name":"SALOMÓ","aliases":["TARRAGONA","salomo","salomó"]},{"code":"76002","name":"VILABELLA","aliases":["TARRAGONA","vilabella"]},{"code":"76003","name":"NULLES-BRÀFIM","aliases":["NULLES","TARRAGONA","nulles","brafim"]},{"code":"76004","name":"VALLS","aliases":["TARRAGONA","valls"]},{"code":"77002","name":"MONTCADA-RIPOLLET","aliases":["MONTCADA RIPOLLET","MONTCADA","RIPOLLET","R3","BARCELONA","montcada ripollet","montcada"]},{"code":"77003","name":"SANTA PERPÈTUA DE MOGODA LA FLORIDA","aliases":["SANTA PERPÈTUA","SANTA PERPETUA","LA FLORIDA","SANTA PERPÈTUA DE MOGODA","R3","BARCELONA","santa perpetua","santa perpetua de mogoda"]},{"code":"77004","name":"MOLLET SANTA ROSA","aliases":["MOLLET-SANTA ROSA","MOLLET SANTA ROSA","MOLLET","SANTA ROSA","R3","BARCELONA","mollet santa rosa","santa rosa"]},{"code":"77005","name":"PARETS DEL VALLÈS","aliases":["PARETS","PARETS DEL VALLES","R3","BARCELONA","parets","parets del valles"]},{"code":"77100","name":"GRANOLLERS-CANOVELLES","aliases":["GRANOLLERS","CANOVELLES","BARCELONA","les franqueses","franqueses del valles"]},{"code":"77101","name":"LES FRANQUESES DEL VALLÈS","aliases":["LES FRANQUESES","GRANOLLERS","BARCELONA"]},{"code":"77102","name":"LA GARRIGA","aliases":["BARCELONA","la garriga"]},{"code":"77103","name":"FIGARÓ","aliases":["FIGARO","BARCELONA","figaro","figaró"]},{"code":"77104","name":"SANT MARTÍ DE CENTELLES","aliases":["SANT MARTÍ","CENTELLES","BARCELONA","sant marti de centelles"]},{"code":"77105","name":"CENTELLES","aliases":["BARCELONA","centelles"]},{"code":"77106","name":"BALENYÀ-ELS HOSTALETS","aliases":["BALENYÀ","ELS HOSTALETS","BARCELONA","BALENYA","R3","balenya els hostalets"]},{"code":"77107","name":"BALENYÀ-TONA-SEVA","aliases":["BALENYÀ","TONA","SEVA","BARCELONA","BALENYA","Balenyà-Tona-Seva","R3","balenya tona seva","tona"]},{"code":"77109","name":"Vic","aliases":["VIC","R3","BARCELONA","OSONA","vic"]},{"code":"77110","name":"MANLLEU","aliases":["MANLLEU","R3","BARCELONA","manlleu"]},{"code":"77111","name":"Torelló","aliases":["TORELLÓ","TORELLO","R3","OSONA","torello","torelló"]},{"code":"77112","name":"BORGOÑÀ","aliases":["BORGONYÀ","SANT VICENÇ DE TORELLÓ","BARCELONA","BORGOÑÀ","BORGONYA","R3","borgonya"]},{"code":"77113","name":"SANT QUIRZE DE BESORA-MONTESQUIU","aliases":["SANT QUIRZE DE BESORA","MONTESQUIU","BARCELONA","R3","sant quirze de besora","montesquiu"]},{"code":"77114","name":"LA FARGA DE BEBIÉ","aliases":["LA FARGA","BEBIÉ","BARCELONA","LA FARGA DE BEBIÉ","BEBIE","R3","la farga de bebie","la farga"]},{"code":"77300","name":"RIPOLL","aliases":["GIRONA","RIPOLLÈS","RIPOLL","R3"]},{"code":"77301","name":"CAMPDEVÀNOL","aliases":["CAMPDEVANOL","GIRONA","RIPOLLÈS","CAMPDEVÀNOL","R3"]},{"code":"77303","name":"RIBES DE FRESER","aliases":["RIBES","GIRONA","RIPOLLÈS","RIBES DE FRESER","R3","ribes de freser"]},{"code":"77304","name":"PLANOLES","aliases":["GIRONA","RIPOLLÈS","PLANOLES","PLANÒLES","R3","planoles"]},{"code":"77305","name":"TOSES","aliases":["GIRONA","RIPOLLÈS","TOSES","R3","toses"]},{"code":"77306","name":"LA MOLINA","aliases":["ALP","GIRONA","CERDANYA","LA MOLINA","R3","la molina"]},{"code":"77307","name":"URTX-ALP","aliases":["URTX","ALP","GIRONA","CERDANYA","R3","urtx alp","alp"]},{"code":"77309","name":"Puigcerdà","aliases":["PUIGCERDÀ","PUIGCERDA","R3","CERDANYA","puigcerda","puigcerdà"]},{"code":"77310","name":"LA TOUR DE CAROL-ENVEIGT","aliases":["LA TOUR DE CAROL","LA TOUR","ENVEIGT","FRANCIA","LA TOUR DE CAROL-ENVEIGT","ENVEIG","R3"]},{"code":"78005","name":"VILLANUEVA DE GÁLLEGO","aliases":["ZARAGOZA"]},{"code":"78200","name":"TARDIENTA","aliases":["HUESCA"]},{"code":"78201","name":"GRAÑÉN","aliases":["HUESCA"]},{"code":"78203","name":"SARIÑENA","aliases":["HUESCA"]},{"code":"78301","name":"MONZÓN-RÍO CINCA","aliases":["MONZÓN","HUESCA"]},{"code":"78302","name":"BINÉFAR","aliases":["HUESCA"]},{"code":"78400","name":"LLEIDA-PIRINEUS","aliases":["LLEIDA"]},{"code":"78402","name":"BELL-LLOC D'URGELL","aliases":["LLEIDA","bell lloc","bell-lloc d urgell"]},{"code":"78403","name":"MOLLERUSSA","aliases":["LLEIDA","mollerussa"]},{"code":"78404","name":"GOLMÉS","aliases":["LLEIDA","golmes","golmés"]},{"code":"78405","name":"CASTELLNOU DE SEANA","aliases":["LLEIDA","castellnou"]},{"code":"78406","name":"BELLPUIG","aliases":["LLEIDA","bellpuig"]},{"code":"78407","name":"ANGLESOLA","aliases":["LLEIDA","anglesola"]},{"code":"78408","name":"TÀRREGA","aliases":["LLEIDA","tarrega","tàrrega"]},{"code":"78500","name":"CERVERA","aliases":["LLEIDA","cervera"]},{"code":"78501","name":"SANT GUIM DE FREIXENET","aliases":["LLEIDA","sant guim"]},{"code":"78502","name":"SANT MARTÍ SESGUEIOLES","aliases":["BARCELONA","sant marti sesgueioles"]},{"code":"78503","name":"CALAF","aliases":["BARCELONA","calaf"]},{"code":"78504","name":"SEGUERS-SANT PERE SALLAVINERA","aliases":["SANT PERE SALLAVINERA","BARCELONA","seguers","sant pere sallavinera"]},{"code":"78505","name":"AGUILAR DE SEGARRA","aliases":["BARCELONA","aguilar de segarra"]},{"code":"78506","name":"RAJADELL","aliases":["BARCELONA","rajadell"]},{"code":"78600","name":"MANRESA","aliases":["BARCELONA","manresa"]},{"code":"78604","name":"SANT VICENÇ DE CASTELLET","aliases":["BARCELONA","sant vicenc de castellet","sant vicenç"]},{"code":"78700","name":"TERRASSA ESTACIÓ DEL NORD","aliases":["TERRASSA","BARCELONA","terrassa"]},{"code":"78800","name":"Montcada-Bifurcació","aliases":["montcada bifurcacio","montcada bifurcació"]},{"code":"78802","name":"Fabra i Puig","aliases":["sant andreu arenal"]},{"code":"78804","name":"BARCELONA-ARC DE TRIOMF","aliases":["ARC DE TRIOMF","BARCELONA ARC DE TRIOMF","BARCELONA","R1","R3","R4","arc de triomf"]},{"code":"78805","name":"BARCELONA-PLAÇA DE CATALUNYA","aliases":["PLAÇA DE CATALUNYA","PLACA DE CATALUNYA","BARCELONA PLAÇA DE CATALUNYA","BARCELONA","R1","R3","R4","placa de catalunya","plaça de catalunya","plaza de catalunya"]},{"code":"78806","name":"BARCELONA-LA SAGRERA-MERIDIANA","aliases":["LA SAGRERA","SAGRERA","LA SAGRERA-MERIDIANA","BARCELONA LA SAGRERA","BARCELONA","R3","R4","la sagrera meridiana","sagrera"]},{"code":"79004","name":"BARCELONA-SANT ANDREU","aliases":["BARCELONA","barcelona sant andreu comtal","sant andreu comtal"]},{"code":"79009","name":"BARCELONA-EL CLOT","aliases":["BARCELONA","barcelona clot arago","clot arago","clot"]},{"code":"79100","name":"GRANOLLERS-CENTRE","aliases":["GRANOLLERS","BARCELONA","granollers centre","granollers"]},{"code":"79104","name":"SANT CELONI","aliases":["BARCELONA","sant celoni"]},{"code":"79105","name":"GUALBA","aliases":["BARCELONA","gualba"]},{"code":"79106","name":"RIELLS I VIABREA-BREDA","aliases":["RIELLS I VIABREA","GIRONA","riells i viabrea","breda"]},{"code":"79107","name":"HOSTALRIC","aliases":["GIRONA","hostalric"]},{"code":"79200","name":"MAÇANET-MASSANES","aliases":["MASSANES","GIRONA","macanet massanes","maçanet massanes"]},{"code":"79202","name":"SILS","aliases":["GIRONA","sils"]},{"code":"79203","name":"CALDES DE MALAVELLA","aliases":["GIRONA","caldes de malavella"]},{"code":"79204","name":"RIUDELLOTS","aliases":["RIUDELLOTS DE LA SELVA","GIRONA","riudellots"]},{"code":"79205","name":"FORNELLS DE LA SELVA","aliases":["GIRONA","fornells de la selva"]},{"code":"79300","name":"GIRONA","aliases":["girona"]},{"code":"79301","name":"CELRÀ","aliases":["GIRONA","celra","celrà"]},{"code":"79302","name":"BORDILS-JUIÀ","aliases":["BORDILS","GIRONA","bordils juia","bordils"]},{"code":"79303","name":"FLAÇÀ","aliases":["GIRONA","flaca","flaçà"]},{"code":"79304","name":"SANT JORDI DESVALLS","aliases":["GIRONA","sant jordi desvalls"]},{"code":"79305","name":"CAMALLERA","aliases":["SAUS, CAMALLERA I LLAMPAIES","GIRONA","camallera"]},{"code":"79306","name":"SANT MIQUEL DE FLUVIÀ","aliases":["GIRONA","sant miquel de fluvia"]},{"code":"79308","name":"VILAMALLA","aliases":["GIRONA","vilamalla"]},{"code":"79309","name":"FIGUERES","aliases":["GIRONA","figueres"]},{"code":"79311","name":"VILAJUÏGA","aliases":["GIRONA","vilajuiga","vilajuïga"]},{"code":"79312","name":"LLANÇÀ","aliases":["GIRONA","llanca","llançà"]},{"code":"79314","name":"COLERA","aliases":["GIRONA","colera"]},{"code":"79315","name":"PORTBOU","aliases":["GIRONA","portbou"]},{"code":"79316","name":"CERBÈRE","aliases":["PORTBOU","GIRONA"]},{"code":"79400","name":"BARCELONA ESTACIÓ DE FRANÇA","aliases":["BARCELONA","barcelona estacio de franca","estacio de franca","estació de frança"]},{"code":"79500","name":"Mataró","aliases":["mataro","mataró"]},{"code":"79600","name":"Arenys de Mar","aliases":["arenys de mar"]},{"code":"79606","name":"Blanes","aliases":["blanes"]},{"code":"80001","name":"ALTSASU-PUEBLO","aliases":["ALTSASU/ALSASUA","NAVARRA"]},{"code":"80003","name":"ETXARRI-ARANATZ","aliases":["NAVARRA"]},{"code":"80005","name":"UHARTE-ARAKIL","aliases":["NAVARRA"]},{"code":"80100","name":"PAMPLONA/IRUÑA","aliases":["NAVARRA","pamplona"]},{"code":"80108","name":"TAFALLA","aliases":["NAVARRA"]},{"code":"80109","name":"OLITE-ERRIBERRI","aliases":["OLITE/ERRIBERRI","NAVARRA"]},{"code":"80114","name":"MARCILLA DE NAVARRA","aliases":["MARCILLA","NAVARRA"]},{"code":"80115","name":"VILLAFRANCA DE NAVARRA","aliases":["VILLAFRANCA","NAVARRA"]},{"code":"81002","name":"HARO","aliases":["RIOJA, LA"]},{"code":"81100","name":"LOGROÑO","aliases":["RIOJA, LA"]},{"code":"81102","name":"AGONCILLO","aliases":["RIOJA, LA"]},{"code":"81105","name":"ALCANADRE","aliases":["RIOJA, LA"]},{"code":"81106","name":"FÉCULAS-NAVARRA","aliases":["LODOSA","NAVARRA"]},{"code":"81108","name":"CALAHORRA","aliases":["RIOJA, LA"]},{"code":"81109","name":"RINCÓN DE SOTO","aliases":["RIOJA, LA"]},{"code":"81110","name":"ALFARO","aliases":["RIOJA, LA"]},{"code":"81200","name":"CASTEJÓN DE EBRO","aliases":["CASTEJÓN","NAVARRA"]},{"code":"81202","name":"TUDELA DE NAVARRA","aliases":["TUDELA","NAVARRA"]},{"code":"81203","name":"RIBAFORADA","aliases":["NAVARRA"]},{"code":"81205","name":"CORTES DE NAVARRA","aliases":["CORTES","NAVARRA"]},{"code":"81206","name":"GALLUR","aliases":["ZARAGOZA"]},{"code":"81207","name":"LUCENI","aliases":["ZARAGOZA"]},{"code":"81208","name":"PEDROLA","aliases":["ZARAGOZA"]},{"code":"81209","name":"CABAÑAS DE EBRO","aliases":["ZARAGOZA"]},{"code":"81210","name":"ALAGÓN","aliases":["ZARAGOZA"]},{"code":"82100","name":"SORIA","aliases":[]},{"code":"84101","name":"ALMAZÁN-VILLA","aliases":["ALMAZÁN","SORIA"]},{"code":"84103","name":"TARDELCUENDE","aliases":["SORIA"]},{"code":"84104","name":"QUINTANA REDONDA","aliases":["SORIA"]},{"code":"87088","name":"NARBONNE","aliases":["NARBONA","DESCONOCIDO"]},{"code":"87089","name":"MARSEILLE ST CHARLES","aliases":["MARSEILLE"]},{"code":"87173","name":"MONTPELLIER SAINT-ROCH","aliases":["MONTPELLIER","DESCONOCIDO"]},{"code":"87302","name":"NIMES","aliases":[]},{"code":"87303","name":"LYON PART DIEU","aliases":["LYON"]},{"code":"87374","name":"PERPIGNAN","aliases":[]},{"code":"87810","name":"VALENCE TGV","aliases":["VALENCE"]},{"code":"87814","name":"AVIGNON TGV","aliases":["AVIGNON"]},{"code":"87912","name":"AIX EN PROVENCE TGV","aliases":["AIX EN PROVENCE"]},{"code":"92102","name":"TOLEDO","aliases":[]},{"code":"94002","name":"DAIMIEL","aliases":["CIUDAD REAL"]},{"code":"94004","name":"ALMAGRO","aliases":["CIUDAD REAL"]},{"code":"94005","name":"Ciudad Real-Miguelturra","aliases":[]},{"code":"94021","name":"NINE","aliases":[]},{"code":"94033","name":"VIANA DA CASTELO","aliases":[]},{"code":"94346","name":"PORTO CAMPANHA - O PORTO CAMPAÑA","aliases":["O PORTO CAMPAÑA"]},{"code":"94563","name":"Vilar Formoso","aliases":["vilar","formoso","vilar-formoso","VF","Vilar","Formoso","Vilar-Formoso","vilar formoso"]},{"code":"96122","name":"BARCELOS","aliases":[]},{"code":"97004","name":"PORTAVE.FERRARI","aliases":["DESCONOCIDO","BARCELONA"]},{"code":"97015","name":"PORTAVENTURA","aliases":["SALOU","BARCELONA"]},{"code":"97017","name":"SANT SADURNÍ D'ANOIA","aliases":["BARCELONA"]},{"code":"97018","name":"CARIBE PARK","aliases":["SALOU","BARCELONA"]},{"code":"97100","name":"Pitis","aliases":["MADRID"]},{"code":"97200","name":"Mirasierra","aliases":["CANENCIA","MADRID"]},{"code":"97201","name":"Ramón y Cajal","aliases":["MADRID","ramon y cajal","ramon"]},{"code":"98003","name":"Fuente de la Mora","aliases":[]},{"code":"98304","name":"Valdebebas","aliases":[]},{"code":"98305","name":"Aeropuerto T4","aliases":["t4","aeropuerto"]},{"code":"99000","name":"MADRID CERCANÍAS","aliases":["MADRID"]},{"code":"99117","name":"OURENSE-TURÍSTICO","aliases":["OURENSE"]},{"code":"99143","name":"A CORUÑA-TURÍSTICO","aliases":["CORUÑA (A)","CORUÑA, A"]},{"code":"99159","name":"SANTIAGO-TURÍSTICO","aliases":["SANTIAGO DE COMPOSTELA","CORUÑA, A"]},{"code":"99161","name":"PONTEVEDRA-TURÍSTICO","aliases":["PONTEVEDRA"]},{"code":"99173","name":"OVIEDO-TUR","aliases":["OVIEDO","ASTURIAS"]},{"code":"99174","name":"FERROL-TUR","aliases":["FERROL","CORUÑA, A"]},{"code":"99180","name":"SORIA ENLACE AVE","aliases":["SORIA"]},{"code":"99183","name":"MADRID EMBAJADORES MuF","aliases":["MADRID"]},{"code":"87751008","name":"Marseille Saint-Charles","aliases":[]},{"code":"71601","name":"CALAFELL","aliases":["calafell"]},{"code":"71602","name":"SEGUR DE CALAFELL","aliases":["segur"]},{"code":"71603","name":"CUNIT","aliases":["cunit"]},{"code":"71604","name":"CUBELLES","aliases":["cubelles"]},{"code":"71701","name":"SITGES","aliases":["sitges","trguetges"]},{"code":"71703","name":"GARRAF","aliases":["garraf"]},{"code":"71704","name":"PLATJA DE CASTELLDEFELS","aliases":["platja castelldefels","playa de castelldefels"]},{"code":"71705","name":"CASTELLDEFELS","aliases":["castelldefels"]},{"code":"71706","name":"GAVÀ","aliases":["gava","gavà"]},{"code":"71709","name":"VILADECANS","aliases":["viladecans"]},{"code":"72100","name":"RODA DE BARÀ","aliases":["roda de bara","roda de berà"]},{"code":"72201","name":"EL VENDRELL","aliases":["vendrell","el vendrell"]},{"code":"72202","name":"L'ARBOÇ","aliases":["arboc","l arboc","l arboç"]},{"code":"72203","name":"ELS MONJOS","aliases":["els monjos","santa margarida i els monjos"]},{"code":"72204","name":"VILAFRANCA DEL PENEDÈS","aliases":["vilafranca","vilafranca del penedes"]},{"code":"72205","name":"LA GRANADA","aliases":["la granada"]},{"code":"72206","name":"LAVERN-SUBIRATS","aliases":["lavern","subirats"]},{"code":"72207","name":"SANT SADURNÍ D'ANOIA","aliases":["sant sadurni","sant sadurni d anoia"]},{"code":"72208","name":"GELIDA","aliases":["gelida"]},{"code":"72211","name":"EL PAPIOL","aliases":["papiol","el papiol"]},{"code":"72300","name":"MOLINS DE REI","aliases":["molins","molins de rei"]},{"code":"72301","name":"SANT FELIU DE LLOBREGAT","aliases":["sant feliu","sant feliu de llobregat"]},{"code":"72302","name":"SANT JOAN DESPÍ","aliases":["sant joan despi","sant joan despí"]},{"code":"72303","name":"CORNELLÀ","aliases":["cornella","cornellà","cornella de llobregat"]},{"code":"72400","name":"AEROPORT","aliases":["aeroport","aeropuerto"]},{"code":"72501","name":"RUBÍ","aliases":["rubi","rubí"]},{"code":"72502","name":"SANT CUGAT DEL VALLÈS","aliases":["sant cugat","sant cugat del valles"]},{"code":"72503","name":"CERDANYOLA UNIVERSITAT","aliases":["cerdanyola universitat","uab"]},{"code":"77006","name":"GRANOLLERS-CANOVELLES","aliases":["granollers canovelles","canovelles"]},{"code":"78801","name":"TORRE DEL BARÓ","aliases":["torre del baro","torre del baró"]},{"code":"79005","name":"MONTCADA I REIXAC","aliases":["montcada i reixac"]},{"code":"79006","name":"MOLLET-SANT FOST","aliases":["mollet sant fost"]},{"code":"79007","name":"MONTMELÓ","aliases":["montmelo","montmeló"]},{"code":"79011","name":"LA LLAGOSTA","aliases":["la llagosta"]},{"code":"79101","name":"CARDEDEU","aliases":["cardedeu"]},{"code":"79102","name":"LLINARS DEL VALLÈS","aliases":["llinars del valles","llinars"]},{"code":"79103","name":"PALAUTORDERA","aliases":["palautordera","santa maria de palautordera"]},{"code":"79109","name":"LES FRANQUESES-GRANOLLERS NORD","aliases":["les franqueses granollers nord","granollers nord"]},{"code":"79403","name":"SANT ADRIÀ DE BESÒS","aliases":["sant adria de besos","sant adrià de besòs"]},{"code":"79404","name":"BADALONA","aliases":["badalona"]},{"code":"79405","name":"MONTGAT","aliases":["montgat"]},{"code":"79406","name":"MONTGAT-NORD","aliases":["montgat nord"]},{"code":"79407","name":"EL MASNOU","aliases":["masnou","el masnou"]},{"code":"79408","name":"OCATA","aliases":["ocata"]},{"code":"79409","name":"PREMIÀ DE MAR","aliases":["premia de mar","premià de mar"]},{"code":"79410","name":"VILASSAR DE MAR","aliases":["vilassar de mar"]},{"code":"79412","name":"CABRERA DE MAR-VILASSAR DE MAR","aliases":["cabrera de mar","vilassar de mar cabrera"]},{"code":"79501","name":"SANT ANDREU DE LLAVANERES","aliases":["sant andreu de llavaneres"]},{"code":"79502","name":"CALDES D'ESTRAC","aliases":["caldes destrac","caldes d estrac"]},{"code":"79601","name":"CANET DE MAR","aliases":["canet de mar"]},{"code":"79602","name":"SANT POL DE MAR","aliases":["sant pol de mar"]},{"code":"79603","name":"CALELLA","aliases":["calella"]},{"code":"79604","name":"PINEDA DE MAR","aliases":["pineda de mar"]},{"code":"79605","name":"MALGRAT DE MAR","aliases":["malgrat de mar"]},{"code":"79607","name":"TORDERA","aliases":["tordera"]},{"code":"79608","name":"SANTA SUSANNA","aliases":["santa susanna"]},{"code":"71301","name":"ELS GUIAMETS","aliases":["els guiamets"]},{"code":"78605","name":"CASTELLBELL I EL VILAR-MONISTROL DE MONTSERRAT","aliases":["castellbell","monistrol de montserrat"]},{"code":"78606","name":"VACARISSES","aliases":["vacarisses"]},{"code":"78607","name":"VACARISSES-TORREBLANCA","aliases":["torreblanca"]},{"code":"78609","name":"VILADECAVALLS","aliases":["viladecavalls"]},{"code":"78610","name":"SANT MIQUEL DE GONTERES","aliases":["sant miquel de gonteres"]},{"code":"78703","name":"SABADELL SUD","aliases":["sabadell sud"]},{"code":"78704","name":"SABADELL CENTRE","aliases":["sabadell centre"]},{"code":"78705","name":"BARBERÀ DEL VALLÈS","aliases":["barbera del valles","barberà"]},{"code":"78706","name":"CERDANYOLA DEL VALLÈS","aliases":["cerdanyola del valles","cerdanyola"]},{"code":"78707","name":"MONTCADA I REIXAC-SANTA MARIA","aliases":["montcada santa maria"]},{"code":"78708","name":"MONTCADA I REIXAC-MANRESA","aliases":["montcada manresa"]},{"code":"78709","name":"SABADELL NORD","aliases":["sabadell nord"]},{"code":"78710","name":"TERRASSA EST","aliases":["terrassa est"]}];
const $=id=>document.getElementById(id),
      norm=s=>String(s??"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,"").trim();
const stationNorm=s=>String(s??"")
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9\s]/g," ")
  .replace(/\s+/g," ")
  .trim();

const stationCompact=s=>stationNorm(s).replace(/\s+/g,"");
const stationCodeNorm=s=>String(s??"").trim().replace(/[^0-9]/g,"");
const stationTokens=s=>stationNorm(s).split(" ").filter(Boolean);

// Índice de búsqueda construido una sola vez. Evita depender de cómo esté
// escrito el nombre en la base y permite buscar por código, nombre, alias,
// palabras, tildes, guiones y espacios.
const stationIndex=stations.map((st,index)=>{
  const name=stationNorm(st.name);
  const aliases=(st.aliases||[]).map(stationNorm).filter(Boolean);
  const terms=[name,...aliases];
  return {index,st,code:stationCodeNorm(st.code),terms,compactTerms:terms.map(stationCompact),tokens:[...new Set(terms.flatMap(stationTokens))]};
});

const stationMatches=q=>{
  const raw=String(q??"").trim();
  const query=stationNorm(raw);
  if(!query)return[];
  const queryCompact=stationCompact(query);
  const queryCode=stationCodeNorm(raw);
  const qTokens=stationTokens(query);
  const scored=[];

  for(const item of stationIndex){
    const {st,code,terms,compactTerms,tokens}=item;
    let score=999;

    if(queryCode && code===queryCode) score=0;
    else if(queryCode && code.startsWith(queryCode)) score=1;
    else if(terms.some(t=>t===query)) score=2;
    else if(terms.some(t=>t.startsWith(query))) score=3;
    else if(terms.some(t=>t.includes(query))) score=4;
    else if(queryCompact && compactTerms.some(t=>t.includes(queryCompact))) score=5;
    else if(qTokens.length>1 && qTokens.every(token=>tokens.some(t=>t.includes(token)))) score=6;
    else if(qTokens.length===1 && tokens.some(t=>t.startsWith(qTokens[0]))) score=7;

    if(score<999) scored.push({st,score});
  }

  return scored
    .sort((a,b)=>a.score-b.score || String(a.st.name).localeCompare(String(b.st.name),"es"))
    .map(x=>x.st);
};

window.stationMatches=stationMatches;
window.argosStationIndex=stationIndex;
const services=()=>{try{const v=JSON.parse(localStorage.getItem(KEY)||"[]");return Array.isArray(v)?v:[]}catch(e){return[]}};
const saveServices=a=>localStorage.setItem(KEY,JSON.stringify(a));
const esc=s=>String(s??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  const target=$(id); if(!target)return;
  target.classList.add("active");
  window.scrollTo({top:0,behavior:"instant"});
  if(id==="history")renderHistory();
  if(id==="stats")renderStats();
  refreshHome();
}
window.showScreen=showScreen;
document.querySelectorAll("[data-screen]").forEach(b=>b.addEventListener("click",()=>showScreen(b.dataset.screen)));
document.querySelectorAll("[data-back]").forEach(b=>b.addEventListener("click",()=>showScreen("menu")));
if($("openSettings")) $("openSettings").onclick=()=>showScreen("settings");

function applyTheme(theme){
  document.body.classList.toggle("dark",theme==="dark");
  localStorage.setItem(THEME_KEY,theme);
  if($("lightTheme"))$("lightTheme").classList.toggle("active",theme!=="dark");
  if($("darkTheme"))$("darkTheme").classList.toggle("active",theme==="dark");
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute("content",theme==="dark"?"#171717":"#8a005c");
}
applyTheme(localStorage.getItem(THEME_KEY)||"light");
if($("lightTheme"))$("lightTheme").onclick=()=>applyTheme("light");
if($("darkTheme"))$("darkTheme").onclick=()=>applyTheme("dark");

// ===== BASE DE MATERIAL ARGOS =====
// Serie 100: datos aportados para ARGOS.
const fleet = {
  "100": {
    "seriesName": "Serie 100",
    "fabricante": "Alstom",
    "numeroCoches": "10 (2 cabezas tractoras + 8 remolques)",
    "tipoMaterial": "AVE / Alta Velocidad · evolución del TGV Atlantique",
    "anchoVia": "1435 mm",
    "modelo": "AVE Serie 100",
    "apodo": "AVE",
    "velocidadMaxima": "300 km/h",
    "potencia": "8.800 kW",
    "tension": "25 kV / 50 Hz y 3 kV CC",
    "capacidad": "332 plazas tras la reforma",
    "plazasSentadas": "329 (332 tras la reforma)",
    "longitud": "200,150 m",
    "peso": "392,6 t en vacío",
    "señalizacion": "LZB y ASFA; parte de la flota adaptada con ERTMS",
    "numeroUnidades": "18 composiciones originales de la serie 100",
    "subseries": "100 / 100F (ramas 15–24)",
    "generalNotes": [
      "La serie 100 fue el primer tren de alta velocidad de Renfe y comenzó a circular en abril de 1992 con la inauguración de la línea Madrid-Sevilla.",
      "Es una evolución del TGV Atlantique adaptada a las condiciones españolas, con modificaciones en climatización, presión en túneles y sistemas de control y señalización.",
      "Cada composición está formada por 2 cabezas tractoras y 8 coches de viajeros, con cafetería y clases Preferente y Turista.",
      "Velocidad máxima comercial: 300 km/h. Potencia total: 8.800 kW.",
      "Ancho de vía: 1.435 mm. Alimentación: 25 kV / 50 Hz y 3 kV en corriente continua.",
      "Tras unos 15 años de servicio, la flota recibió una importante remodelación técnica y estética iniciada en 2007 y finalizada progresivamente en 2009.",
      "La serie tuvo un papel destacado en la expansión de la alta velocidad española y posteriormente fue adaptada para servicios internacionales hacia Francia.",
      "Durante las pruebas de homologación, un S-100 alcanzó 356,8 km/h.",
      "En 2011 se adjudicó la adaptación de 10 composiciones para su explotación internacional entre España y Francia."
    ],
    "units": {
      "101": {
        "rama": "1",
        "numero": "9-100-101-5",
        "ano": 1992,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra."
        ]
      },
  "102": {
        "rama": "2",
        "numero": "9-100-102-3",
        "ano": 1992,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Récord de España de velocidad durante breve tiempo: 330 km/h en 01/92.",
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra.",
          "Vinilos aceite de oliva 04/19."
        ]
      },
      "103": {
        "rama": "3",
        "numero": "9-100-103-1",
        "ano": 1992,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra."
        ]
      },
      "104": {
        "rama": "4",
        "numero": "9-100-104-9",
        "ano": 1992,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra.",
          "04/08/2017: accidente con topera en estación de Alicante."
        ]
      },
      "105": {
        "rama": "5",
        "numero": "9-100-105-6",
        "ano": 1992,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra."
        ]
      },
      "106": {
        "rama": "6",
        "numero": "9-100-106-4",
        "ano": 1992,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra."
        ]
      },
      "107": {
        "rama": "7",
        "numero": "9-100-107-2",
        "ano": 1992,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra."
        ]
      },
      "108": {
        "rama": "8",
        "numero": "9-100-108-0",
        "ano": 1992,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra.",
          "Vinilos Copa del Rey 04/25."
        ]
      },
      "109": {
        "rama": "9",
        "numero": "9-100-109-8",
        "ano": 1993,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra."
        ]
      },
      "110": {
        "rama": "10",
        "numero": "9-100-110-6",
        "ano": 1993,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra.",
          "02/07/2014: descarrilo en Alpera.",
          "Vinilos Movistar 07/15."
        ]
      },
      "111": {
        "rama": "11",
        "numero": "9-100-111-4",
        "ano": 1993,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Rama 11. Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra.",
          "Decoración original AVE desde 20/04/2017 por los 25 años AVE.",
          "Nombre Miguel de Cervantes.",
          "Posteriormente recuperó colores de Renfe Operadora."
        ]
      },
      "119": {
        "rama": "12",
        "numero": "9-100-119-7",
        "ano": 1996,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Ex-rama 101.101 (GL01) y reformada a 100.019.",
          "En 2011, las motrices 9-100-119-7 y 9-100-219-5, originales de la rama 19, fueron instaladas en la rama 12.",
          "Ex-Cerro Negro. Nuevos logos AVE."
        ]
      },
      "113": {
        "rama": "13",
        "numero": "9-100-113-0",
        "ano": 1993,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Rama 13. Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra.",
          "Logos 75 años Renfe.",
          "Tren inaugural 3er carril Valencia-Castellón 22/01/2018.",
          "Nombre Juan Sebastián Elcano."
        ]
      },

  "114": {
        "rama": "14",
        "numero": "9-100-114-8",
        "ano": 1993,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra."
        ]
      },
      "115": {
        "rama": "15",
        "numero": "9-100-115-5",
        "ano": 1993,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra >> Cerro Negro.",
          "Pertenece a la subserie 100F.",
          "Antiguo récord de España de velocidad: 356,8 km/h el 23/04/1993, pk 104 de la LAV Sevilla."
        ]
      },
      "116": {
        "rama": "16",
        "numero": "9-100-116-3",
        "ano": 1993,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra >> Cerro Negro.",
          "Pertenece a la subserie 100F."
        ]
      },
      "117": {
        "rama": "17",
        "numero": "9-100-117-1",
        "ano": 1996,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra >> Cerro Negro.",
          "Nuevos logos AVE 02/22.",
          "Pertenece a la subserie 100F."
        ]
      },
      "118": {
        "rama": "18",
        "numero": "9-100-118-9",
        "ano": 1996,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Reformada interiormente. Colores Renfe Operadora.",
          "Ex-La Sagra >> Cerro Negro.",
          "Pertenece a la subserie 100F."
        ]
      },
      "112": {
        "rama": "19",
        "numero": "9-100-112-2",
        "ano": 1993,
        "deposito": "Cerro Negro",
        "ancho": "1435",
        "notas": [
          "Procede de la serie 101 y se incorporó a la serie 100.",
          "Reformada interiormente en 07/08. Colores Renfe Operadora.",
          "En 2011 recibió las cabezas motrices originales de la rama 12; las ramas 12 y 19 intercambiaron cabezas motrices.",
          "Pertenece a la subserie 100F."
        ]
      },
      "120": {
        "rama": "22",
        "numero": "9-100-120-5",
        "ano": 1996,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Procede de la serie 101.102 (GL02), reformada en 2008 según placas.",
          "Apartada por incendio 06/14. Tras el incendio, extremo 9-100-120-5 circuló en rama 22.",
          "Circuló con motrices 100-220 y 224.",
          "Nombre Marseille. Nuevos logos AVE 02/23.",
          "Habilitación maquinistas Francia 2023 entre Barcelona y Lyon.",
          "Pertenece a la subserie 100F."
        ]
      },
      "121": {
        "rama": "21",
        "numero": "9-100-121-3",
        "ano": 1997,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Procede de la serie 101.103 (GL03).",
          "Ex-La Sagra.",
          "Nombre Marseille.",
          "Pertenece a la subserie 100F."
        ]
      },
      "122": {
        "rama": "22",
        "numero": "9-100-122-1",
        "ano": 1997,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Procede de la serie 101.104 (GL04).",
          "Incendiado en Lunel 02/08/2015. Tras incendio, circuló con coches de la rama 20.",
          "Circula con motrices 100-122 y 120. Con coches motores rama 20 y 24 en 02/24.",
          "Pertenece a la subserie 100F."
        ]
      },
      "123": {
        "rama": "23",
        "numero": "9-100-123-9",
        "ano": 1997,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Procede de la serie 101.105 (GL05).",
          "Ex-La Sagra.",
          "Pertenece a la subserie 100F."
        ]
      },
      "124": {
        "rama": "24",
        "numero": "9-100-124-7",
        "ano": 1997,
        "deposito": "Can Tunis",
        "ancho": "1435",
        "notas": [
          "Procede de la serie 101.106 (GL06). Último 101 en comenzar la reforma.",
          "Primer AVE en salir de España, verano de 2012.",
          "10/09/2014: colisión con una rama 736 de TGV en Marsella.",
          "Ex-La Sagra.",
          "Coche motor de rama 24 se instala en rama 22.",
          "Pertenece a la subserie 100F."
        ]
      }
    }
  },
  "106": {
    "seriesName": "Serie 106",
    "fabricante": "Talgo",
    "modelo": "Talgo AVRIL F070",
    "apodo": "AVRIL",
    "anoPuestaServicio": "2020-2024 (según rama)",
    "tipoMaterial": "Alta Velocidad · AVE / Avlo",
    "numeroCoches": "14 vehículos: 2 cabezas motrices + 12 coches intermedios",
    "anchoVia": "1435 mm (ancho fijo) / 1435-1668 mm (rodadura desplazable)",
    "numeroRamas": "30 ramas: 1-15 de ancho fijo y 51-65 de ancho variable",
    "velocidadMaxima": "330 km/h",
    "plazasSentadas": "521 plazas + 2 espacios PMR",
    "generalNotes": [
      "Trenes de muy alta velocidad basados en el prototipo AVRIL de Talgo (Talgo F057 Modelo G3). El modelo adquirido por Renfe es F070.",
      "Renfe dispone de 15 ramas de ancho fijo y otras 15 de rodadura desplazable.",
      "Cada rama está formada por 2 cabezas motrices y 12 coches intermedios.",
      "Configuración indicada en la documentación aportada: un extremo Preferente de 44 plazas, un Preferente de 36 plazas, un Turista de 25 plazas + 2 PMR, una cafetería, cuatro Turista de 49 plazas, tres Turista de 54 plazas y un cola Turista de 58 plazas.",
      "Los coches Turista tienen distribución de asientos 3+2 y los Preferente 2+2.",
      "Las ramas 1-15 son de ancho fijo 1.435 mm. Las ramas 51-65 son de rodadura desplazable y permiten ancho 1.435/1.668 mm.",
      "La tabla aportada muestra las dos cabezas motrices de cada rama: 001-015/101-115 y 051-065/151-165. Las dos cabezas de cada pareja pertenecen a la misma rama."
    ],
    "units": {
      "1": {
        "rama": "1",
        "numero": "9-106-001-3",
        "vehiculoBase": "001",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [],
        "ano": 2020
      },
      "2": {
        "rama": "2",
        "numero": "9-106-002-1",
        "vehiculoBase": "002",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [],
        "ano": 2024
      },
      "3": {
        "rama": "3",
        "numero": "9-106-003-9",
        "vehiculoBase": "003",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [
          "Primer 106 de ancho fijo en colores AVLO, 10/12/22."
        ],
        "ano": 2024
      },
      "4": {
        "rama": "4",
        "numero": "9-106-004-7",
        "vehiculoBase": "004",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [],
        "ano": 2024
      },
      "5": {
        "rama": "5",
        "numero": "9-106-005-4",
        "vehiculoBase": "005",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [],
        "ano": 2022
      },
      "6": {
        "rama": "6",
        "numero": "9-106-006-2",
        "vehiculoBase": "006",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [
          "Primera rama en salir de pruebas. Pruebas de homologación entre Olmedo y Otero de Sanabria en 02/21."
        ],
        "ano": 2020
      },
      "7": {
        "rama": "7",
        "numero": "9-106-007-0",
        "vehiculoBase": "007",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [
          "En pruebas de homologación línea Venta de Baños-Burgos, 04/21."
        ],
        "ano": 2020
      },
      "8": {
        "rama": "8",
        "numero": "9-106-008-8",
        "vehiculoBase": "008",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [
          "Traslado Ribavellosa-La Sagra 23/07/20. Incluye sistemas de seguridad Francia."
        ],
        "ano": 2020
      },
      "9": {
        "rama": "9",
        "numero": "9-106-009-6",
        "vehiculoBase": "009",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [
          "Traslado Ribavellosa-La Sagra 19/04/21. Trasladado a Francia para pruebas de homologación 04/10/22. Devuelta a España 13/05/26."
        ],
        "ano": 2024
      },
      "10": {
        "rama": "10",
        "numero": "9-106-010-4",
        "vehiculoBase": "010",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [],
        "ano": 2024
      },
      "11": {
        "rama": "11",
        "numero": "9-106-011-2",
        "vehiculoBase": "011",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [],
        "ano": 2024
      },
      "12": {
        "rama": "12",
        "numero": "9-106-012-0",
        "vehiculoBase": "012",
        "deposito": "Fuencarral",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [
          "Morado AVLO desde 05/24."
        ],
        "ano": 2024
      },
      "13": {
        "rama": "13",
        "numero": "9-106-013-8",
        "vehiculoBase": "013",
        "deposito": "Fuencarral",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [
          "Morado AVLO desde 05/24."
        ],
        "ano": 2024
      },
      "14": {
        "rama": "14",
        "numero": "9-106-014-6",
        "vehiculoBase": "014",
        "deposito": "Fuencarral",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [
          "Morado AVLO desde 05/24."
        ],
        "ano": 2024
      },
      "15": {
        "rama": "15",
        "numero": "9-106-015-3",
        "vehiculoBase": "015",
        "deposito": "Fuencarral",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435",
        "subserie": "Ancho fijo",
        "notas": [
          "Morado AVLO desde 05/24."
        ],
        "ano": 2024
      },
      "51": {
        "rama": "51",
        "numero": "9-106-051-8",
        "vehiculoBase": "051",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [
          "Primer 106 en colores AVLO, 09/12/22."
        ],
        "ano": 2021
      },
      "52": {
        "rama": "52",
        "numero": "9-106-052-6",
        "vehiculoBase": "052",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [
          "Pruebas entre Galicia y Madrid 07/23."
        ],
        "ano": 2021
      },
      "53": {
        "rama": "53",
        "numero": "9-106-053-4",
        "vehiculoBase": "053",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [
          "Traslado de Miranda de Ebro a Galicia 12/07/21."
        ],
        "ano": 2021
      },
      "54": {
        "rama": "54",
        "numero": "9-106-054-2",
        "vehiculoBase": "054",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [],
        "ano": 2022
      },
      "55": {
        "rama": "55",
        "numero": "9-106-055-9",
        "vehiculoBase": "055",
        "deposito": "Can Tunis",
        "color": "Morado",
        "servicio": "AVLO",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [
          "Traslado Ribavellosa-La Sagra 20/08/21."
        ],
        "ano": 2022
      },
      "56": {
        "rama": "56",
        "numero": "9-106-056-7",
        "vehiculoBase": "056",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [],
        "ano": 2021
      },
      "57": {
        "rama": "57",
        "numero": "9-106-057-5",
        "vehiculoBase": "057",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [],
        "ano": 2024
      },
      "58": {
        "rama": "58",
        "numero": "9-106-058-3",
        "vehiculoBase": "058",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [],
        "ano": 2024
      },
      "59": {
        "rama": "59",
        "numero": "9-106-059-1",
        "vehiculoBase": "059",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [
          "Logos Ave 02/24."
        ],
        "ano": 2024
      },
      "60": {
        "rama": "60",
        "numero": "9-106-060-9",
        "vehiculoBase": "060",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [
          "Primer tren de Alta Velocidad en realizar pruebas en la LAV: Plasencia-Badajoz."
        ],
        "ano": 2024
      },
      "61": {
        "rama": "61",
        "numero": "9-106-061-7",
        "vehiculoBase": "061",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [],
        "ano": 2024
      },
      "62": {
        "rama": "62",
        "numero": "9-106-062-5",
        "vehiculoBase": "062",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [
          "Presentación en Vigo 05/01/24. Primera rama con logos Ave 02/24."
        ],
        "ano": 2024
      },
      "63": {
        "rama": "63",
        "numero": "9-106-063-3",
        "vehiculoBase": "063",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [],
        "ano": 2024
      },
      "64": {
        "rama": "64",
        "numero": "9-106-064-1",
        "vehiculoBase": "064",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [],
        "ano": 2024
      },
      "65": {
        "rama": "65",
        "numero": "9-106-065-8",
        "vehiculoBase": "065",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ancho": "1435/1668",
        "subserie": "Ancho variable · Rodadura desplazable",
        "notas": [],
        "ano": 2024
      }
    }
  },
    "121": {
  "seriesName": "Serie 121",
  "fabricante": "CAF-Alstom",
  "modelo": "CAF-Alstom S-121",
  "apodo": "AVR (Ancho Variable Regional)",
  "anoPuestaServicio": "enero de 2009",
  "tipoMaterial": "Media Distancia · Alta Velocidad · AVANT",
  "numeroCoches": "4 coches · Mc + M + M + Mc",
  "anchoVia": "1435/1668 mm",
  "numeroRamas": 29,
  "velocidadMaxima": "250 km/h (25 kV c.a.) · 220 km/h (3 kV c.c.)",
  "potencia": "4.000 kW (25 kV) · 2.500 kW (3 kV)",
  "longitud": "107,36 m",
  "peso": "251,3 t",
  "tension": "25 kV c.a. / 3 kV c.c.",
  "traccion": "Distribuida · 8 motores asíncronos Alstom",
  "señalizacion": "ASFA y ERTMS",
  "composicion": "Mc + M + M + Mc",
  "capacidad": "281 plazas · 280 de clase única + 1 PMR",
  "plazasSentadas": "281",
  "numeroUnidades": "29 composiciones",
  "generalNotes": [
      "Trenes eléctricos de Media Distancia para servicios AVANT por líneas de Alta Velocidad y líneas convencionales.",
      "La serie 121 es una evolución de la familia S-120, fabricada por el consorcio CAF-Alstom.",
      "Las 29 unidades están formadas por cuatro coches motores en composición Mc + M + M + Mc.",
      "Todos los asientos son de clase única y la capacidad total es de 281 plazas, incluyendo una plaza para personas con movilidad reducida.",
      "Disponen de sistema de rodadura desplazable BRAVA, que permite circular por ancho internacional e ibérico.",
      "Son bitensión: 25 kV en corriente alterna para líneas de Alta Velocidad y 3 kV en corriente continua para líneas convencionales.",
      "La velocidad máxima comercial es de 250 km/h con 25 kV c.a. y 220 km/h con 3 kV c.c.",
      "La serie dispone de tracción distribuida con ocho motores de tracción y cuatro coches motores.",
      "Las ramas de la tabla aportada están numeradas del 1 al 29. Cada rama se identifica mediante sus dos coches extremos/cabezas y los dos coches motores intermedios asociados.",
      "El sistema BRAVA permite realizar el cambio de ancho sin necesidad de maniobras convencionales, facilitando servicios que combinan líneas de ancho internacional e ibérico."
  ],
  "units": {
      "1": {
          "rama": "1",
          "vehiculoBase": "001",
          "numero": "9-121-001-2",
          "vehiculosRama": [
              "9-121-001-2",
              "6-121-001-2",
              "6-121-501-1",
              "9-121-501-1"
          ],
          "searchCodes": [
              "001",
              "501"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-001-2 + 6-121-001-2 + 6-121-501-1 + 9-121-501-1",
          "notas": [
              "En pruebas desde 04/08. AVANT Madrid-Valladolid. Ex-Fuencarral → Sta. Catalina → Redondela 01/25 → Sta. Catalina."
          ]
      },
      "2": {
          "rama": "2",
          "vehiculoBase": "002",
          "numero": "9-121-002-0",
          "vehiculosRama": [
              "9-121-002-0",
              "6-121-002-0",
              "6-121-502-9",
              "9-121-502-9"
          ],
          "searchCodes": [
              "002",
              "502"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-002-0 + 6-121-002-0 + 6-121-502-9 + 9-121-502-9",
          "notas": [
              "En pruebas desde 08/08. AVANT Madrid-Valladolid. Ex-Logos Junta Andalucía. Ex-Can Tunis → Redondela."
          ]
      },
      "3": {
          "rama": "3",
          "vehiculoBase": "003",
          "numero": "9-121-003-8",
          "vehiculosRama": [
              "9-121-003-8",
              "6-121-003-8",
              "6-121-503-7",
              "9-121-503-7"
          ],
          "searchCodes": [
              "003",
              "503"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-003-8 + 6-121-003-8 + 6-121-503-7 + 9-121-503-7",
          "notas": [
              "En pruebas desde 09/08 → AVANT Madrid-Valladolid → Galicia desde 12/11."
          ]
      },
      "4": {
          "rama": "4",
          "vehiculoBase": "004",
          "numero": "9-121-004-6",
          "vehiculosRama": [
              "9-121-004-6",
              "6-121-004-6",
              "6-121-504-5",
              "9-121-504-5"
          ],
          "searchCodes": [
              "004",
              "504"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-004-6 + 6-121-004-6 + 6-121-504-5 + 9-121-504-5",
          "notas": [
              "AVANT Madrid-Valladolid → Galicia desde 12/11."
          ]
      },
      "5": {
          "rama": "5",
          "vehiculoBase": "005",
          "numero": "9-121-005-3",
          "vehiculosRama": [
              "9-121-005-3",
              "6-121-005-3",
              "6-121-505-2",
              "9-121-505-2"
          ],
          "searchCodes": [
              "005",
              "505"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-005-3 + 6-121-005-3 + 6-121-505-2 + 9-121-505-2",
          "notas": [
              "AVANT Madrid-Valladolid → Redondela."
          ]
      },
      "6": {
          "rama": "6",
          "vehiculoBase": "006",
          "numero": "9-121-006-1",
          "vehiculosRama": [
              "9-121-006-1",
              "6-121-006-1",
              "6-121-506-0",
              "9-121-506-0"
          ],
          "searchCodes": [
              "006",
              "506"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-006-1 + 6-121-006-1 + 6-121-506-0 + 9-121-506-0",
          "notas": [
              "AVANT Madrid-Valladolid. Ex-Fuencarral → Redondela → Sta. Catalina."
          ]
      },
      "7": {
          "rama": "7",
          "vehiculoBase": "007",
          "numero": "9-121-007-9",
          "vehiculosRama": [
              "9-121-007-9",
              "6-121-007-9",
              "6-121-507-8",
              "9-121-507-8"
          ],
          "searchCodes": [
              "007",
              "507"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-007-9 + 6-121-007-9 + 6-121-507-8 + 9-121-507-8",
          "notas": []
      },
      "8": {
          "rama": "8",
          "vehiculoBase": "008",
          "numero": "9-121-008-7",
          "vehiculosRama": [
              "9-121-008-7",
              "6-121-008-7",
              "6-121-508-6",
              "9-121-508-6"
          ],
          "searchCodes": [
              "008",
              "508"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-008-7 + 6-121-008-7 + 6-121-508-6 + 9-121-508-6",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "9": {
          "rama": "9",
          "vehiculoBase": "009",
          "numero": "9-121-009-5",
          "vehiculosRama": [
              "9-121-009-5",
              "6-121-009-5",
              "6-121-509-4",
              "9-121-509-4"
          ],
          "searchCodes": [
              "009",
              "509"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-009-5 + 6-121-009-5 + 6-121-509-4 + 9-121-509-4",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "10": {
          "rama": "10",
          "vehiculoBase": "010",
          "numero": "9-121-010-3",
          "vehiculosRama": [
              "9-121-010-3",
              "6-121-010-3",
              "6-121-510-2",
              "9-121-510-2"
          ],
          "searchCodes": [
              "010",
              "510"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-010-3 + 6-121-010-3 + 6-121-510-2 + 9-121-510-2",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "11": {
          "rama": "11",
          "vehiculoBase": "011",
          "numero": "9-121-011-1",
          "vehiculosRama": [
              "9-121-011-1",
              "6-121-011-1",
              "6-121-511-0",
              "9-121-511-0"
          ],
          "searchCodes": [
              "011",
              "511"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-011-1 + 6-121-011-1 + 6-121-511-0 + 9-121-511-0",
          "notas": [
              "Ex-Can Tunis → Redondela → Sta. Catalina → Redondela."
          ]
      },
      "12": {
          "rama": "12",
          "vehiculoBase": "012",
          "numero": "9-121-012-7",
          "vehiculosRama": [
              "9-121-012-7",
              "6-121-012-7",
              "6-121-512-8",
              "9-121-512-8"
          ],
          "searchCodes": [
              "012",
              "512"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-012-7 + 6-121-012-7 + 6-121-512-8 + 9-121-512-8",
          "notas": [
              "Galicia desde 12/11. Accidente contra un tractor en Arbo (17/08/13)."
          ]
      },
      "13": {
          "rama": "13",
          "vehiculoBase": "013",
          "numero": "9-121-013-7",
          "vehiculosRama": [
              "9-121-013-7",
              "6-121-013-7",
              "6-121-513-6",
              "9-121-513-6"
          ],
          "searchCodes": [
              "013",
              "513"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-013-7 + 6-121-013-7 + 6-121-513-6 + 9-121-513-6",
          "notas": [
              "Inauguró el servicio Salamanca - Madrid vía Medina - LAV Valladolid, 17/12/15. Ex-Fuencarral."
          ]
      },
      "14": {
          "rama": "14",
          "vehiculoBase": "014",
          "numero": "9-121-014-5",
          "vehiculosRama": [
              "9-121-014-5",
              "6-121-014-5",
              "6-121-514-4",
              "9-121-514-4"
          ],
          "searchCodes": [
              "014",
              "514"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-014-5 + 6-121-014-5 + 6-121-514-4 + 9-121-514-4",
          "notas": [
              "Galicia desde 12/11. Ex-Can Tunis."
          ]
      },
      "15": {
          "rama": "15",
          "vehiculoBase": "015",
          "numero": "9-121-015-2",
          "vehiculosRama": [
              "9-121-015-2",
              "6-121-015-2",
              "6-121-515-1",
              "9-121-515-1"
          ],
          "searchCodes": [
              "015",
              "515"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-015-2 + 6-121-015-2 + 6-121-515-1 + 9-121-515-1",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "16": {
          "rama": "16",
          "vehiculoBase": "016",
          "numero": "9-121-016-0",
          "vehiculosRama": [
              "9-121-016-0",
              "6-121-016-0",
              "6-121-516-9",
              "9-121-516-9"
          ],
          "searchCodes": [
              "016",
              "516"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-016-0 + 6-121-016-0 + 6-121-516-9 + 9-121-516-9",
          "notas": [
              "En Ourense para formación maquinistas en LAV Ourense - Santiago 07/11. Ex-Can Tunis → Fuencarral."
          ]
      },
      "17": {
          "rama": "17",
          "vehiculoBase": "017",
          "numero": "9-121-017-8",
          "vehiculosRama": [
              "9-121-017-8",
              "6-121-017-8",
              "6-121-517-7",
              "9-121-517-7"
          ],
          "searchCodes": [
              "017",
              "517"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-017-8 + 6-121-017-8 + 6-121-517-7 + 9-121-517-7",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "18": {
          "rama": "18",
          "vehiculoBase": "018",
          "numero": "9-121-018-6",
          "vehiculosRama": [
              "9-121-018-6",
              "6-121-018-6",
              "6-121-518-5",
              "9-121-518-5"
          ],
          "searchCodes": [
              "018",
              "518"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-018-6 + 6-121-018-6 + 6-121-518-5 + 9-121-518-5",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "19": {
          "rama": "19",
          "vehiculoBase": "019",
          "numero": "9-121-019-4",
          "vehiculosRama": [
              "9-121-019-4",
              "6-121-019-4",
              "6-121-519-3",
              "9-121-519-3"
          ],
          "searchCodes": [
              "019",
              "519"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-019-4 + 6-121-019-4 + 6-121-519-3 + 9-121-519-3",
          "notas": [
              "Ex-Fuencarral → Sta. Catalina → Redondela."
          ]
      },
      "20": {
          "rama": "20",
          "vehiculoBase": "020",
          "numero": "9-121-020-2",
          "vehiculosRama": [
              "9-121-020-2",
              "6-121-020-2",
              "6-121-520-1",
              "9-121-520-1"
          ],
          "searchCodes": [
              "020",
              "520"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-020-2 + 6-121-020-2 + 6-121-520-1 + 9-121-520-1",
          "notas": [
              "Ex-Fuencarral. Descarrilo en cambiador de ancho Burgos 21/09/25."
          ]
      },
      "21": {
          "rama": "21",
          "vehiculoBase": "021",
          "numero": "9-121-021-0",
          "vehiculosRama": [
              "9-121-021-0",
              "6-121-021-0",
              "6-121-521-9",
              "9-121-521-9"
          ],
          "searchCodes": [
              "021",
              "521"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-021-0 + 6-121-021-0 + 6-121-521-9 + 9-121-521-9",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "22": {
          "rama": "22",
          "vehiculoBase": "022",
          "numero": "9-121-022-8",
          "vehiculosRama": [
              "9-121-022-8",
              "6-121-022-8",
              "6-121-522-7",
              "9-121-522-7"
          ],
          "searchCodes": [
              "022",
              "522"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-022-8 + 6-121-022-8 + 6-121-522-7 + 9-121-522-7",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "23": {
          "rama": "23",
          "vehiculoBase": "023",
          "numero": "9-121-023-6",
          "vehiculosRama": [
              "9-121-023-6",
              "6-121-023-6",
              "6-121-523-5",
              "9-121-523-5"
          ],
          "searchCodes": [
              "023",
              "523"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-023-6 + 6-121-023-6 + 6-121-523-5 + 9-121-523-5",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "24": {
          "rama": "24",
          "vehiculoBase": "024",
          "numero": "9-121-024-4",
          "vehiculosRama": [
              "9-121-024-4",
              "6-121-024-4",
              "6-121-524-3",
              "9-121-524-3"
          ],
          "searchCodes": [
              "024",
              "524"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "Incendiado",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-024-4 + 6-121-024-4 + 6-121-524-3 + 9-121-524-3",
          "notas": [
              "Incendio A Coruña 18/08/26."
          ]
      },
      "25": {
          "rama": "25",
          "vehiculoBase": "025",
          "numero": "9-121-025-1",
          "vehiculosRama": [
              "9-121-025-1",
              "6-121-025-1",
              "6-121-525-0",
              "9-121-525-0"
          ],
          "searchCodes": [
              "025",
              "525"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-025-1 + 6-121-025-1 + 6-121-525-0 + 9-121-525-0",
          "notas": []
      },
      "26": {
          "rama": "26",
          "vehiculoBase": "026",
          "numero": "9-121-026-9",
          "vehiculosRama": [
              "9-121-026-9",
              "6-121-026-9",
              "6-121-526-8",
              "9-121-526-8"
          ],
          "searchCodes": [
              "026",
              "526"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-026-9 + 6-121-026-9 + 6-121-526-8 + 9-121-526-8",
          "notas": [
              "Ex-Fuencarral."
          ]
      },
      "27": {
          "rama": "27",
          "vehiculoBase": "027",
          "numero": "9-121-027-7",
          "vehiculosRama": [
              "9-121-027-7",
              "6-121-027-7",
              "6-121-527-6",
              "9-121-527-6"
          ],
          "searchCodes": [
              "027",
              "527"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-027-7 + 6-121-027-7 + 6-121-527-6 + 9-121-527-6",
          "notas": [
              "Ex-Fuencarral. Arrollamiento tractor S. Juan del Puerto 29/09/23. Reparación en Can Tunis.",
              "Rama reparada desde julio de 2026."
          ]
      },
      "28": {
          "rama": "28",
          "vehiculoBase": "028",
          "numero": "9-121-028-5",
          "vehiculosRama": [
              "9-121-028-5",
              "6-121-028-5",
              "6-121-528-4",
              "9-121-528-4"
          ],
          "searchCodes": [
              "028",
              "528"
          ],
          "deposito": "Redondela",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-028-5 + 6-121-028-5 + 6-121-528-4 + 9-121-528-4",
          "notas": [
              "Ex-Fuencarral → Redondela → Baja por avería 06/24, en reparación. En servicio."
          ]
      },
      "29": {
          "rama": "29",
          "vehiculoBase": "029",
          "numero": "9-121-029-3",
          "vehiculosRama": [
              "9-121-029-3",
              "6-121-029-3",
              "6-121-529-2",
              "9-121-529-2"
          ],
          "searchCodes": [
              "029",
              "529"
          ],
          "deposito": "Santa Catalina",
          "color": "Blanco",
          "estado": "En servicio",
          "servicio": "AVANT",
          "ano": "2008–2010",
          "ancho": "1435/1668",
          "composicionRama": "9-121-029-3 + 6-121-029-3 + 6-121-529-2 + 9-121-529-2",
          "notas": [
              "Ex-Can Tunis → Fuencarral → Sta. Catalina → Redondela.",
              "Circula con su composición original tras la reparación de la Rama 27."
          ]
      }
  }
},
  "130": {
  "seriesName": "Serie 130",
  "fabricante": "Talgo / Bombardier",
  "modelo": "Talgo 250",
  "apodo": "Patito",
  "anoPuestaServicio": "2007",
  "tipoMaterial": "Alta Velocidad · Larga Distancia · Alvia",
  "numeroCoches": "13 vehículos · 2 cabezas tractoras + 11 coches Talgo 7",
  "anchoVia": "1435/1668 mm",
  "numeroRamas": 45,
  "velocidadMaxima": "250 km/h (25 kV c.a.) · 220 km/h (3 kV c.c.)",
  "potencia": "4.800 kW (25 kV c.a.) · 4.000 kW (3 kV c.c.)",
  "longitud": "aprox. 184 m",
  "peso": "aprox. 312 t",
  "tension": "25 kV c.a. / 3 kV c.c.",
  "traccion": "2 cabezas tractoras Talgo-Bombardier",
  "señalizacion": "ERTMS / LZB / ASFA según línea y unidad",
  "composicion": "M + 11 coches Talgo 7 + M",
  "capacidad": "299 plazas · 63 Preferente + 236 Turista",
  "plazasSentadas": "299",
  "numeroUnidades": "45 composiciones originales · 90 cabezas tractoras",
  "generalNotes": [
  "Automotores eléctricos formados por dos cabezas tractoras derivadas de la plataforma 'Travca' y una rama de 11 coches Talgo 7.",
  "La serie está formada por 45 trenes, equivalentes a 90 locomotoras/cabezas tractoras.",
  "Las 27 primeras composiciones se formaron a partir de ramas Talgo 7 existentes, adaptadas para servicio diurno y acopladas permanentemente a las nuevas cabezas tractoras.",
  "Las ramas 28 a 45 fueron construidas de nueva planta para la serie 130.",
  "La identificación por Ex-número es especialmente importante en esta serie: permite reconocer las ramas Talgo 7 de procedencia anterior. Cuando existe, se conserva el código 7B correspondiente.",
  "Puede circular por ancho ibérico (1668 mm) y ancho estándar (1435 mm) gracias a la rodadura desplazable.",
  "La potencia total es de 4.800 kW a 25 kV c.a. y 4.000 kW a 3 kV c.c.",
  "La velocidad máxima es de 250 km/h en líneas de alta velocidad y 220 km/h en ancho ibérico.",
  "La composición convencional de la serie es de dos cabezas tractoras y once coches Talgo 7, con 299 plazas.",
  "Las ramas 11 a 25 fueron posteriormente transformadas en composiciones bimodales de la serie 730.",
  "La serie comenzó oficialmente su servicio comercial el 6 de noviembre de 2007 en la relación Gijón–Madrid bajo la denominación Alvia."
  ],
  "units": {
  "01": {
  "rama": "01",
  "vehiculoBase": "001",
  "numero": "130-001-1",
  "vehiculosRama": [
  "130-001-1",
  "130-002-9"
  ],
  "searchCodes": [
  "001",
  "002"
  ],
  "exNumero": "7B2",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Formado el 14/09/06. Reforma 08/22, segundo 130. Colisión con tractor en Arenas de Iguña 27/04/23. Reformado interiorismo y decoración 2024.",
  "Formado en 10/06. Reforma 08/22, segundo 130. Colisión con tractor en Arenas de Iguña 27/04/23. Reformado interiorismo y decoración 2024."
  ]
  },
  "02": {
  "rama": "02",
  "vehiculoBase": "003",
  "numero": "130-003-7",
  "vehiculosRama": [
  "130-003-7",
  "130-004-5"
  ],
  "searchCodes": [
  "003",
  "004"
  ],
  "exNumero": "7B5",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Formado en 11/06. Reforma interior pero no exterior, 2023.",
  "Formada en 11/06. Reforma interior pero no exterior, 2023."
  ]
  },
  "03": {
  "rama": "03",
  "vehiculoBase": "005",
  "numero": "130-005-2",
  "vehiculosRama": [
  "130-005-2",
  "130-006-0"
  ],
  "searchCodes": [
  "005",
  "006"
  ],
  "exNumero": "7B16",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Entra a reforma en 01/07. En pruebas desde 02/07. Nuevo interiorismo y decoración 05/26",
  "Entra a reforma en 01/07. En pruebas desde 02/07. Nuevo interiorismo y decoración 05/26"
  ]
  },
  "04": {
  "rama": "04",
  "vehiculoBase": "007",
  "numero": "130-007-8",
  "vehiculosRama": [
  "130-007-8",
  "130-008-6"
  ],
  "searchCodes": [
  "007",
  "008"
  ],
  "exNumero": "7B22",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Entra a reforma en 02/07. En pruebas en 07/07. Nuevo interiorismo y decoración 05/26.",
  "Entra a reforma en 02/07. En pruebas en 07/07. Nuevo interiorismo y decoración 05/26."
  ]
  },
  "05": {
  "rama": "05",
  "vehiculoBase": "009",
  "numero": "130-009-4",
  "vehiculosRama": [
  "130-009-4",
  "130-010-2"
  ],
  "searchCodes": [
  "009",
  "010"
  ],
  "exNumero": "7B26",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Reformada solo interiorismo 03/23.",
  "Reformada solo interiorismo 03/23."
  ]
  },
  "06": {
  "rama": "06",
  "vehiculoBase": "011",
  "numero": "130-011-0",
  "vehiculosRama": [
  "130-011-0",
  "130-012-8"
  ],
  "searchCodes": [
  "011",
  "012"
  ],
  "exNumero": "7B24",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Entra a reforma en 04/07. En pruebas desde 13/08/07. Logos 80 años Renfe",
  "Entra a reforma en 04/07. En pruebas desde 13/08/07. Logos 80 años Renfe"
  ]
  },
  "07": {
  "rama": "07",
  "vehiculoBase": "013",
  "numero": "130-013-6",
  "vehiculosRama": [
  "130-013-6",
  "130-014-4"
  ],
  "searchCodes": [
  "013",
  "014"
  ],
  "exNumero": "7B25",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Entra a reforma en 05/07. Piedra en Mont-Roig del Camp 15/03/16. Logos 75 años Renfe. Reformada interior 2023 sin decoración externa. Nueva decoración externa 05/26",
  "Entra a reforma en 05/07. Piedra en Mont-Roig del Camp 15/03/16. Logos 75 años Renfe. Reformada interior 2023 sin decoración externa."
  ]
  },
  "08": {
  "rama": "08",
  "vehiculoBase": "015",
  "numero": "130-015-1",
  "vehiculosRama": [
  "130-015-1",
  "130-016-9"
  ],
  "searchCodes": [
  "015",
  "016"
  ],
  "exNumero": "7B23",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Entra a reforma para 130 en 07/07. Reformado nuevo interiorismo y decoración 05/22 (Primer 130)",
  "Entra a reforma para 130 en 07/07. Reformado nuevo interiorismo y decoración 05/22 (Primer 130)"
  ]
  },
  "31": {
  "rama": "31",
  "vehiculoBase": "017",
  "numero": "130-017-7",
  "vehiculosRama": [
  "130-017-7",
  "130-018-5"
  ],
  "searchCodes": [
  "017",
  "018"
  ],
  "exNumero": "7B31",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Realizó pruebas LAV Valladolid. Descarrilo Freixeiro 26/08/22. Reformada interior y exterior xx/24.",
  "Realizó pruebas LAV Valladolid. Descarrilo Freixeiro 26/08/22. Reformada interior/exterior xx/24."
  ]
  },
  "29": {
  "rama": "29",
  "vehiculoBase": "019",
  "numero": "130-019-3",
  "vehiculosRama": [
  "130-019-3",
  "130-020-1"
  ],
  "searchCodes": [
  "019",
  "020"
  ],
  "exNumero": "7B29",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-Fuencarral. Reformado 04/23",
  "Ex-Fuencarral. Reformado 04/23"
  ]
  },
  "10": {
  "rama": "10",
  "vehiculoBase": "021",
  "numero": "130-021-9",
  "vehiculosRama": [
  "130-021-9",
  "130-022-7"
  ],
  "searchCodes": [
  "021",
  "022"
  ],
  "exNumero": "7B14",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-Fuencarral. Arrollamiento vehículo Husillos 26/11/24. Reformado, nuevo interiorismo y decoración 2024",
  "Ex-Fuencarral. Arrollamiento vehículo Husillos 26/11/24. Reformado,nuevo interiorismo y decoración 2024"
  ]
  },
  "32": {
  "rama": "32",
  "vehiculoBase": "023",
  "numero": "130-023-5",
  "vehiculosRama": [
  "130-023-5",
  "130-024-3"
  ],
  "searchCodes": [
  "023",
  "024"
  ],
  "exNumero": "",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Logos 80 años Renfe",
  "Logos 80 años Renfe"
  ]
  },
  "30": {
  "rama": "30",
  "vehiculoBase": "025",
  "numero": "130-025-0",
  "vehiculosRama": [
  "130-025-0",
  "130-026-8"
  ],
  "searchCodes": [
  "025",
  "026"
  ],
  "exNumero": "7B30",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "En pruebas desde 12/07. Primer 130 en llegar a Bilbao. Ex-Fuencarral",
  "En pruebas desde 12/07. Primer 130 en llegar a Bilbao. Ex-Fuencarral"
  ]
  },
  "34": {
  "rama": "34",
  "vehiculoBase": "027",
  "numero": "130-027-6",
  "vehiculosRama": [
  "130-027-6",
  "130-028-4"
  ],
  "searchCodes": [
  "027",
  "028"
  ],
  "exNumero": "",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "En pruebas desde 12/07. Descarrilo León 05/03/21. Reformada 10/22",
  "En pruebas desde 12/07. Descarrilo León 05/03/21. Reformada 10/22"
  ]
  },
  "09": {
  "rama": "09",
  "vehiculoBase": "029",
  "numero": "130-029-2",
  "vehiculosRama": [
  "130-029-2",
  "130-030-0"
  ],
  "searchCodes": [
  "029",
  "030"
  ],
  "exNumero": "7B15",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": []
  },
  "33": {
  "rama": "33",
  "vehiculoBase": "031",
  "numero": "130-031-8",
  "vehiculosRama": [
  "130-031-8",
  "130-032-6"
  ],
  "searchCodes": [
  "031",
  "032"
  ],
  "exNumero": "",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Logos \"80 Años RENFE\"",
  "Logos \"80 Años RENFE\""
  ]
  },
  "28": {
  "rama": "28",
  "vehiculoBase": "033",
  "numero": "130-033-4",
  "vehiculosRama": [
  "130-033-4",
  "130-034-2"
  ],
  "searchCodes": [
  "033",
  "034"
  ],
  "exNumero": "7B28",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Fabricado en el TCR de Málaga. Sale de talleres 19/12/07. Reformado, nuevo interiorismo y decoración 2024",
  "Reformado, nuevo interiorismo y decoración 2024"
  ]
  },
  "36": {
  "rama": "36",
  "vehiculoBase": "035",
  "numero": "130-035-9",
  "vehiculosRama": [
  "130-035-9",
  "130-036-7"
  ],
  "searchCodes": [
  "035",
  "036"
  ],
  "exNumero": "",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-Fuencarral. Reformado interior y exterior con librea nueva 03/25.",
  "Ex-Fuencarral. Reformado interior y exterior con librea nueva 03/25."
  ]
  },
  "38": {
  "rama": "38",
  "vehiculoBase": "037",
  "numero": "130-037-5",
  "vehiculosRama": [
  "130-037-5",
  "130-041-7"
  ],
  "searchCodes": [
  "037",
  "041"
  ],
  "exNumero": "",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": []
  },
  "13": {
  "rama": "13",
  "vehiculoBase": "038",
  "numero": "130-038-3",
  "vehiculosRama": [
  "130-038-3",
  "130-042-5"
  ],
  "searchCodes": [
  "038",
  "042"
  ],
  "exNumero": "7B10",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral>> Reformada a 730-038.",
  "Ex-G.L. Fuencarral>> Reformada a 730-042."
  ]
  },
  "35": {
  "rama": "35",
  "vehiculoBase": "039",
  "numero": "130-039-1",
  "vehiculosRama": [
  "130-039-1",
  "130-040-9"
  ],
  "searchCodes": [
  "039",
  "040"
  ],
  "exNumero": "",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-Fuencarral. Reformado interior y exterior. Descarrilo Chamartín 12/06/25",
  "Ex-Fuencarral. Reformada interior y exterior. Descarrilo Chamartín 12/06/25"
  ]
  },
  "11": {
  "rama": "11",
  "vehiculoBase": "043",
  "numero": "130-043-3",
  "vehiculosRama": [
  "130-043-3",
  "130-044-1"
  ],
  "searchCodes": [
  "043",
  "044"
  ],
  "exNumero": "7B17",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral>> Reformada a 730-043.",
  "Ex-G.L. Fuencarral>> Reformada a 730-044. Vinilo Xacobeo 21-22, desde 28/05/21"
  ]
  },
  "12": {
  "rama": "12",
  "vehiculoBase": "045",
  "numero": "130-045-8",
  "vehiculosRama": [
  "130-045-8",
  "130-046-6"
  ],
  "searchCodes": [
  "045",
  "046"
  ],
  "exNumero": "7B11",
  "deposito": "",
  "color": "Blanco",
  "estado": "Desguazada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral.>> Reformada a 730-045. Accidentada como 730 en Santiago, 24/07/13.",
  "Ex-G.L. Fuencarral.>> Reformada a 730-046. Accidentada como 730 en Santiago, 24/07/13."
  ]
  },
  "42": {
  "rama": "42",
  "vehiculoBase": "047",
  "numero": "130-047-4",
  "vehiculosRama": [
  "130-047-4",
  "130-048-2"
  ],
  "searchCodes": [
  "047",
  "048"
  ],
  "exNumero": "",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-Fuencarral. Reformado, nuevo interiorismo y decoración",
  "Ex-Fuencarral. Reformado, nuevo interiorismo y decoración"
  ]
  },
  "40": {
  "rama": "40",
  "vehiculoBase": "049",
  "numero": "130-049-0",
  "vehiculosRama": [
  "130-049-0",
  "130-054-0"
  ],
  "searchCodes": [
  "049",
  "054"
  ],
  "exNumero": "",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Choque con árbol en Villabona de Asturias 04/06/18. Reformado, nuevo interiorismo y decoración 2024",
  "Vinilos USAL 03/18 Reformado, nuevo interiorismo y decoración 2024"
  ]
  },
  "15": {
  "rama": "15",
  "vehiculoBase": "050",
  "numero": "130-050-8",
  "vehiculosRama": [
  "130-050-8",
  "130-053-2"
  ],
  "searchCodes": [
  "050",
  "053"
  ],
  "exNumero": "7B7",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral>> Reformada a 730-050.",
  "Ex-G.L. Fuencarral>> Reformada a 730-053."
  ]
  },
  "37": {
  "rama": "37",
  "vehiculoBase": "051",
  "numero": "130-051-6",
  "vehiculosRama": [
  "130-051-6",
  "130-056-5"
  ],
  "searchCodes": [
  "051",
  "056"
  ],
  "exNumero": "",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-Fuencarral. Reformado,nuevo interiorismo y decoración 2024",
  "Ex-Fuencarral. Reformado,nuevo interiorismo y decoración 2024"
  ]
  },
  "39": {
  "rama": "39",
  "vehiculoBase": "052",
  "numero": "130-052-4",
  "vehiculosRama": [
  "130-052-4",
  "130-055-7"
  ],
  "searchCodes": [
  "052",
  "055"
  ],
  "exNumero": "",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Logos 75 años Renfe.Ex-Fuencarral. Logos 80 años",
  "Logos 75 años Renfe.Ex-Fuencarral"
  ]
  },
  "14": {
  "rama": "14",
  "vehiculoBase": "057",
  "numero": "130-057-3",
  "vehiculosRama": [
  "130-057-3",
  "130-058-1"
  ],
  "searchCodes": [
  "057",
  "058"
  ],
  "exNumero": "7B8",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral>> Reformada a 730-057.",
  "Ex-G.L. Fuencarral>> Reformada a 730-058."
  ]
  },
  "41": {
  "rama": "41",
  "vehiculoBase": "059",
  "numero": "130-059-9",
  "vehiculosRama": [
  "130-059-9",
  "130-060-7"
  ],
  "searchCodes": [
  "059",
  "060"
  ],
  "exNumero": "",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-Fuencarral",
  "Ex-Fuencarral"
  ]
  },
  "43": {
  "rama": "43",
  "vehiculoBase": "061",
  "numero": "130-061-5",
  "vehiculosRama": [
  "130-061-5",
  "130-062-3"
  ],
  "searchCodes": [
  "061",
  "062"
  ],
  "exNumero": "",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Logos 75 años Renfe. Descarrilo Pajares 30/09/16. Ex-Fuencarral. Reformado interior y exterior."
  ]
  },
  "16": {
  "rama": "16",
  "vehiculoBase": "063",
  "numero": "130-063-1",
  "vehiculosRama": [
  "130-063-1",
  "130-064-9"
  ],
  "searchCodes": [
  "063",
  "064"
  ],
  "exNumero": "7B6",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral>> Reformada a 730-063.",
  "Ex-G.L. Fuencarral>> Reformada a 730-064."
  ]
  },
  "44": {
  "rama": "44",
  "vehiculoBase": "065",
  "numero": "130-065-6",
  "vehiculosRama": [
  "130-065-6",
  "130-066-4"
  ],
  "searchCodes": [
  "065",
  "066"
  ],
  "exNumero": "",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-Fuencarral. Nuevo interiorismo y decoración",
  "Ex-Fuencarral. Nuevo interiorismo y decoración"
  ]
  },
  "45": {
  "rama": "45",
  "vehiculoBase": "067",
  "numero": "130-067-2",
  "vehiculosRama": [
  "130-067-2",
  "130-068-0"
  ],
  "searchCodes": [
  "067",
  "068"
  ],
  "exNumero": "",
  "deposito": "Can Tunis",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-Fuencarral. Reformada interiormente",
  "Ex-Fuencarral"
  ]
  },
  "17": {
  "rama": "17",
  "vehiculoBase": "069",
  "numero": "130-069-8",
  "vehiculosRama": [
  "130-069-8",
  "130-070-6"
  ],
  "searchCodes": [
  "069",
  "070"
  ],
  "exNumero": "7B12",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral>> Reformada a 730-069.",
  "Ex-G.L. Fuencarral>> Reformada a 730-070."
  ]
  },
  "18": {
  "rama": "18",
  "vehiculoBase": "071",
  "numero": "130-071-4",
  "vehiculosRama": [
  "130-071-4",
  "130-072-2"
  ],
  "searchCodes": [
  "071",
  "072"
  ],
  "exNumero": "7B19",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral>> Reformada a 730-071.",
  "Ex-G.L. Fuencarral>> Reformada a 730-072."
  ]
  },
  "19": {
  "rama": "19",
  "vehiculoBase": "073",
  "numero": "130-073-0",
  "vehiculosRama": [
  "130-073-0",
  "130-074-8"
  ],
  "searchCodes": [
  "073",
  "074"
  ],
  "exNumero": "7B20",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral>> Reformada a 730-073.",
  "Ex-G.L. Fuencarral>> Reformada a 730-074."
  ]
  },
  "20": {
  "rama": "20",
  "vehiculoBase": "075",
  "numero": "130-075-5",
  "vehiculosRama": [
  "130-075-5",
  "130-076-3"
  ],
  "searchCodes": [
  "075",
  "076"
  ],
  "exNumero": "7B18",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral>> Reformada a 730-075.",
  "Ex-G.L. Fuencarral>> Reformada a 730-076."
  ]
  },
  "21": {
  "rama": "21",
  "vehiculoBase": "077",
  "numero": "130-077-1",
  "vehiculosRama": [
  "130-077-1",
  "130-078-9"
  ],
  "searchCodes": [
  "077",
  "078"
  ],
  "exNumero": "7B13",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral >> Reformada a 730-077.",
  "Ex-G.L. Fuencarral >> Reformada a 730-078."
  ]
  },
  "22": {
  "rama": "22",
  "vehiculoBase": "079",
  "numero": "130-079-7",
  "vehiculosRama": [
  "130-079-7",
  "130-080-5"
  ],
  "searchCodes": [
  "079",
  "080"
  ],
  "exNumero": "7B9",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral >> Reformada a 730-079.",
  "Ex-G.L. Fuencarral >> Reformada a 730-080."
  ]
  },
  "23": {
  "rama": "23",
  "vehiculoBase": "081",
  "numero": "130-081-3",
  "vehiculosRama": [
  "130-081-3",
  "130-082-1"
  ],
  "searchCodes": [
  "081",
  "082"
  ],
  "exNumero": "7B1",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral >> Reformada a 730-081.",
  "Ex-G.L. Fuencarral >> Reformada a 730-082."
  ]
  },
  "24": {
  "rama": "24",
  "vehiculoBase": "083",
  "numero": "130-083-9",
  "vehiculosRama": [
  "130-083-9",
  "130-084-7"
  ],
  "searchCodes": [
  "083",
  "084"
  ],
  "exNumero": "7B21",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral >> Reformada a 730-083 desde 13/11/18.",
  "Ex-G.L. Fuencarral >> Reformada a 730-084 desde 13/11/18."
  ]
  },
  "25": {
  "rama": "25",
  "vehiculoBase": "085",
  "numero": "130-085-4",
  "vehiculosRama": [
  "130-085-4",
  "130-086-2"
  ],
  "searchCodes": [
  "085",
  "086"
  ],
  "exNumero": "7B4",
  "deposito": "",
  "color": "Blanco",
  "estado": "Reformada",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Ex-G.L. Fuencarral. 10/19 comienza transformación a 730>> En servicio como 730-25 desde 15/08/20",
  "Ex-G.L. Fuencarral. 10/19 comienza transformación a 730>> En servicio como 730-25 desde 15/08/20"
  ]
  },
  "26": {
  "rama": "26",
  "vehiculoBase": "087",
  "numero": "130-087-0",
  "vehiculosRama": [
  "130-087-0",
  "130-088-8"
  ],
  "searchCodes": [
  "087",
  "088"
  ],
  "exNumero": "7B3",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Nuevo interiorismo y decoración 06/25",
  "Nuevo interiorismo y decoración 06/25"
  ]
  },
  "27": {
  "rama": "27",
  "vehiculoBase": "089",
  "numero": "130-089-6",
  "vehiculosRama": [
  "130-089-6",
  "130-090-4"
  ],
  "searchCodes": [
  "089",
  "090"
  ],
  "exNumero": "7B27",
  "deposito": "Fuencarral",
  "color": "Blanco",
  "estado": "En servicio",
  "servicio": "Alvia",
  "ano": "2006–2010",
  "ancho": "1435/1668",
  "composicionRama": "2 cabezas tractoras + 11 coches Talgo 7",
  "notas": [
  "Nuevo interiorismo y decoración 01/23.",
  "Nuevo interiorismo y decoración 01/23."
  ]
  }
  }
  },
  "730": {
    "seriesName": "Serie 730",
    "fabricante": "Talgo / Bombardier",
    "modelo": "Talgo 250 Dual",
    "apodo": "Frankenstein",
    "anoPuestaServicio": "2012",
    "tipoMaterial": "Alta Velocidad · Larga Distancia · Alvia · Híbrido diésel-eléctrico",
    "numeroCoches": "13 vehículos · 2 cabezas tractoras + 2 furgones generadores diésel + 9 coches Talgo VII",
    "anchoVia": "1435/1668 mm",
    "numeroRamas": 15,
    "velocidadMaxima": "250 km/h (alta velocidad) · 220 km/h (convencional electrificada) · 180 km/h (convencional sin electrificar)",
    "potencia": "2 × 1.800 kW diésel de generación · 2 × 1.200 kW para tracción",
    "longitud": "aprox. 186,5 m",
    "peso": "aprox. 346 t",
    "tension": "25 kV c.a. / 3 kV c.c. / diésel en líneas sin electrificar",
    "traccion": "2 cabezas tractoras eléctricas S-130 + 2 grupos generadores diésel MTU",
    "señalizacion": "ERTMS / LZB / ASFA Digital",
    "composicion": "M + CET + 9 coches Talgo VII + CET + M",
    "capacidad": "263 plazas · 47 Preferente + 216 Turista",
    "plazasSentadas": "263",
    "numeroUnidades": "15 composiciones híbridas · 30 cabezas tractoras de la S-130",
    "generalNotes": [
      "Trenes híbridos de alta velocidad y ancho variable derivados de la serie 130.",
      "La serie está formada por 15 composiciones obtenidas mediante la transformación de las ramas 11 a 25 de la serie 130.",
      "Cada tren incorpora dos cabezas tractoras de la S-130, dos furgones generadores diésel y nueve coches de viajeros Talgo VII.",
      "Los dos furgones generadores sustituyen a los coches extremos originales y permiten alimentar eléctricamente la tracción y los servicios del tren en líneas sin electrificar.",
      "Puede circular por ancho ibérico (1668 mm) y ancho estándar (1435 mm) gracias a la rodadura desplazable.",
      "La velocidad máxima es de 250 km/h en alta velocidad, 220 km/h en líneas convencionales electrificadas y 180 km/h en líneas convencionales sin electrificar.",
      "Cuenta con dos motores diésel MTU de 1.800 kW, uno en cada furgón generador, y dos cabezas tractoras eléctricas derivadas de la S-130.",
      "Renfe inició el servicio comercial de la serie en junio de 2012 en la relación Madrid–Galicia.",
      "La identificación mediante Ex-número permite conocer la rama original de la serie 130 de la que procede cada composición."
    ],
    "units": {
      "11": {
        "rama": "11",
        "vehiculoBase": "043",
        "numero": "730-043-7",
        "vehiculosRama": [
          "730-043-7",
          "730-044-5"
        ],
        "searchCodes": [
          "043",
          "044"
        ],
        "exNumeros": {
          "043": "130-043-3",
          "044": "130-044-1"
        },
        "exNumero": "130-043-3",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "043": "Logos 75 años Renfe. Logo Xacobeo 21-22.",
          "044": "Logos 75 años Renfe. Logo Xacobeo 21-22."
        },
        "notas": [
          "Logos 75 años Renfe. Logo Xacobeo 21-22."
        ]
      },
      "12": {
        "rama": "12",
        "vehiculoBase": "045",
        "numero": "730-045-2",
        "vehiculosRama": [
          "730-045-2",
          "730-046-0"
        ],
        "searchCodes": [
          "045",
          "046"
        ],
        "exNumeros": {
          "045": "130-045-8",
          "046": "130-046-6"
        },
        "exNumero": "130-045-8",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "Desguazada",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "045": "Ex-Fuencarral. Accidente en Santiago de Compostela, 24/07/13. Custodiada en Grúas Padrón de A Escravitude. Desguazada verano 2020.",
          "046": "Ex-Fuencarral. Accidente en Santiago de Compostela, 24/07/13. Custodiada en Grúas Padrón de A Escravitude. Desguazada verano 2020."
        },
        "notas": [
          "Ex-Fuencarral. Accidente en Santiago de Compostela, 24/07/13. Custodiada en Grúas Padrón de A Escravitude. Desguazada verano 2020."
        ]
      },
      "13": {
        "rama": "13",
        "vehiculoBase": "038",
        "numero": "730-038-7",
        "vehiculosRama": [
          "730-038-7",
          "730-042-9"
        ],
        "searchCodes": [
          "038",
          "042"
        ],
        "exNumeros": {
          "038": "130-038-3",
          "042": "130-042-5"
        },
        "exNumero": "130-038-3",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "038": "Ex 130-038-3. Primer tren en pruebas variante Pajares 03/11/22, con ministra 09/11/22.",
          "042": "Primer tren en pruebas variante Pajares 03/11/22, con ministra 09/11/22."
        },
        "notas": [
          "Ex 130-038-3. Primer tren en pruebas variante Pajares 03/11/22, con ministra 09/11/22.",
          "Primer tren en pruebas variante Pajares 03/11/22, con ministra 09/11/22."
        ]
      },
      "14": {
        "rama": "14",
        "vehiculoBase": "057",
        "numero": "730-057-7",
        "vehiculosRama": [
          "730-057-7",
          "730-058-5"
        ],
        "searchCodes": [
          "057",
          "058"
        ],
        "exNumeros": {
          "057": "130-057-3",
          "058": "130-058-1"
        },
        "exNumero": "130-057-3",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "Reformada",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "057": "02/06/20 Accidente en Hiniesta (Zamora), tren de cola. En servicio 07/21, vinilos Xacobeo 21-22. Reformado. Colores AVE, 04/22.",
          "058": "02/06/20 Accidente en Hiniesta (Zamora), tren de cola. En servicio 07/21, vinilos Xacobeo 21-22. Reformado. Colores AVE, 04/22."
        },
        "notas": [
          "02/06/20 Accidente en Hiniesta (Zamora), tren de cola. En servicio 07/21, vinilos Xacobeo 21-22. Reformado. Colores AVE, 04/22."
        ]
      },
      "15": {
        "rama": "15",
        "vehiculoBase": "050",
        "numero": "730-050-2",
        "vehiculosRama": [
          "730-050-2",
          "730-053-6"
        ],
        "searchCodes": [
          "050",
          "053"
        ],
        "exNumeros": {
          "050": "130-050-8",
          "053": "130-053-2"
        },
        "exNumero": "130-050-8",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En reparación",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "050": "Rama inaugural Alvia Cartagena-Madrid, 17/09/18. Incendio en motriz turista 06/09/24.",
          "053": "Rama inaugural Alvia Cartagena-Madrid, 17/09/18. Incendio en motriz turista 06/09/24."
        },
        "notas": [
          "Rama inaugural Alvia Cartagena-Madrid, 17/09/18. Incendio en motriz turista 06/09/24."
        ]
      },
      "16": {
        "rama": "16",
        "vehiculoBase": "063",
        "numero": "730-063-5",
        "vehiculosRama": [
          "730-063-5",
          "730-064-3"
        ],
        "searchCodes": [
          "063",
          "064"
        ],
        "exNumeros": {
          "063": "130-063-1",
          "064": "130-064-9"
        },
        "exNumero": "130-063-1",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "063": "Incendio CET 06/04/17 Puebla de Sanabria → en servicio 12/17. Logos Xacobeo 21-22 desde 06/21. Arrollamiento coche entre Montearagón y Talavera 05/06/25.",
          "064": "Incendio CET 06/04/17 Puebla de Sanabria → en servicio 12/17. Logos Xacobeo 21-22 desde 06/21. Arrollamiento coche entre Montearagón y Talavera 05/06/25."
        },
        "notas": [
          "Incendio CET 06/04/17 Puebla de Sanabria → en servicio 12/17. Logos Xacobeo 21-22 desde 06/21. Arrollamiento coche entre Montearagón y Talavera 05/06/25."
        ]
      },
      "17": {
        "rama": "17",
        "vehiculoBase": "069",
        "numero": "730-069-2",
        "vehiculosRama": [
          "730-069-2",
          "730-070-0"
        ],
        "searchCodes": [
          "069",
          "070"
        ],
        "exNumeros": {
          "069": "130-069-8",
          "070": "130-070-6"
        },
        "exNumero": "130-069-8",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "069": "Ex-Logos Xacobeo 21-22.",
          "070": "Ex-Logos Xacobeo 21-22."
        },
        "notas": [
          "Ex-Logos Xacobeo 21-22."
        ]
      },
      "18": {
        "rama": "18",
        "vehiculoBase": "071",
        "numero": "730-071-8",
        "vehiculosRama": [
          "730-071-8",
          "730-072-6"
        ],
        "searchCodes": [
          "071",
          "072"
        ],
        "exNumeros": {
          "071": "130-071-4",
          "072": "130-072-2"
        },
        "exNumero": "130-071-4",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "Reformada",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "071": "Logos 75 años Renfe. Tren medicalizado 04/20. Tte. Covid-19. Reformado (excepto fundas asientos turista), tercero de la serie, sale 30/03/23. Incendio CET turista Puertollano 30/08/25 (intercambiado por CET turista rama 15). En servicio desde 10/25.",
          "072": "Logos 75 años Renfe. Tren medicalizado 04/20. Tte. Covid-19. Reformado (excepto fundas asientos turista), tercero de la serie, sale 30/03/23. Incendio CET turista Puertollano 30/08/25 (intercambiado por CET turista rama 15). En servicio desde 10/25."
        },
        "notas": [
          "Logos 75 años Renfe. Tren medicalizado 04/20. Tte. Covid-19. Reformado (excepto fundas asientos turista), tercero de la serie, sale 30/03/23. Incendio CET turista Puertollano 30/08/25 (intercambiado por CET turista rama 15). En servicio desde 10/25."
        ]
      },
      "19": {
        "rama": "19",
        "vehiculoBase": "073",
        "numero": "730-073-4",
        "vehiculosRama": [
          "730-073-4",
          "730-074-2"
        ],
        "searchCodes": [
          "073",
          "074"
        ],
        "exNumeros": {
          "073": "130-073-0",
          "074": "130-074-8"
        },
        "exNumero": "130-073-0",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "073": "-",
          "074": "-"
        },
        "notas": [
          "-"
        ]
      },
      "20": {
        "rama": "20",
        "vehiculoBase": "075",
        "numero": "730-075-9",
        "vehiculosRama": [
          "730-075-9",
          "730-076-7"
        ],
        "searchCodes": [
          "075",
          "076"
        ],
        "exNumeros": {
          "075": "130-075-5",
          "076": "130-076-3"
        },
        "exNumero": "130-075-5",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "075": "Logotipo de Xacobeo 21-22",
          "076": "-"
        },
        "notas": [
          "Logotipo de Xacobeo 21-22",
          "-"
        ]
      },
      "21": {
        "rama": "21",
        "vehiculoBase": "077",
        "numero": "730-077-5",
        "vehiculosRama": [
          "730-077-5",
          "730-078-3"
        ],
        "searchCodes": [
          "077",
          "078"
        ],
        "exNumeros": {
          "077": "130-077-1",
          "078": "130-078-9"
        },
        "exNumero": "130-077-1",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "077": "Logos 75 años Renfe.",
          "078": "Logos 75 años Renfe."
        },
        "notas": [
          "Logos 75 años Renfe."
        ]
      },
      "22": {
        "rama": "22",
        "vehiculoBase": "079",
        "numero": "730-079-1",
        "vehiculosRama": [
          "730-079-1",
          "730-080-9"
        ],
        "searchCodes": [
          "079",
          "080"
        ],
        "exNumeros": {
          "079": "130-079-7",
          "080": "130-080-5"
        },
        "exNumero": "130-079-7",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "Reformada",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "079": "Reformado desde 11/21, colores AVE. Descarrilo Badajoz 07/01/24. Primer tren Alvia en realizar el Badajoz-Madrid usando el bypass de Mérida y parando en Plasencia 09/05/2025",
          "080": "Reformado desde 11/21, colores AVE. Descarrilo Badajoz 07/01/24."
        },
        "notas": [
          "Reformado desde 11/21, colores AVE. Descarrilo Badajoz 07/01/24. Primer tren Alvia en realizar el Badajoz-Madrid usando el bypass de Mérida y parando en Plasencia 09/05/2025",
          "Reformado desde 11/21, colores AVE. Descarrilo Badajoz 07/01/24."
        ]
      },
      "23": {
        "rama": "23",
        "vehiculoBase": "081",
        "numero": "730-081-7",
        "vehiculosRama": [
          "730-081-7",
          "730-082-5"
        ],
        "searchCodes": [
          "081",
          "082"
        ],
        "exNumeros": {
          "081": "130-081-3",
          "082": "130-082-1"
        },
        "exNumero": "130-081-3",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "081": "02/06/20 Accidente en Hiniesta (Zamora), tren de cabeza. Motriz destruida, se construye una nueva. Terminada 05/24. En servicio 12/24",
          "082": "02/06/20 Accidente en Hiniesta (Zamora), tren de cabeza. En reparación. En servicio 12/24"
        },
        "notas": [
          "02/06/20 Accidente en Hiniesta (Zamora), tren de cabeza. Motriz destruida, se construye una nueva. Terminada 05/24. En servicio 12/24",
          "02/06/20 Accidente en Hiniesta (Zamora), tren de cabeza. En reparación. En servicio 12/24"
        ]
      },
      "24": {
        "rama": "24",
        "vehiculoBase": "083",
        "numero": "730-083-3",
        "vehiculosRama": [
          "730-083-3",
          "730-084-1"
        ],
        "searchCodes": [
          "083",
          "084"
        ],
        "exNumeros": {
          "083": "130-083-9",
          "084": "130-084-7"
        },
        "exNumero": "130-083-9",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "Reformada",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "083": "En transformación desde 13/11/18. En pruebas desde 10/06/19 → en servicio desde 07/19. Reformada interiormente 10/25",
          "084": "En transformación desde 13/11/18. En pruebas desde 10/06/19 → en servicio desde 07/19. Reformada interiormente 10/25"
        },
        "notas": [
          "En transformación desde 13/11/18. En pruebas desde 10/06/19 → en servicio desde 07/19. Reformada interiormente 10/25"
        ]
      },
      "25": {
        "rama": "25",
        "vehiculoBase": "085",
        "numero": "730-085-8",
        "vehiculosRama": [
          "730-085-8",
          "730-086-6"
        ],
        "searchCodes": [
          "085",
          "086"
        ],
        "exNumeros": {
          "085": "130-085-4",
          "086": "130-086-2"
        },
        "exNumero": "130-085-4",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "Reformada",
        "servicio": "Alvia",
        "ano": "2010–2012 (transformación a S-730)",
        "ancho": "1435/1668",
        "composicionRama": "2 cabezas tractoras S-130 + 2 furgones generadores diésel + 9 coches Talgo VII",
        "notasPorVehiculo": {
          "085": "En transformación desde 10/19. En servicio 08/20. Logos Xacobeo 21-22. Reformada 03/26",
          "086": "En transformación desde 10/19. En servicio 08/20. Logos Xacobeo 21-22. Reformada interior y exterior 03/26"
        },
        "notas": [
          "En transformación desde 10/19. En servicio 08/20. Logos Xacobeo 21-22. Reformada 03/26",
          "En transformación desde 10/19. En servicio 08/20. Logos Xacobeo 21-22. Reformada interior y exterior 03/26"
        ]
      }
    }
  },
  "102": {
    "seriesName": "Serie 102",
    "fabricante": "Talgo-Bombardier",
    "numeroCoches": "12 remolques Talgo + 2 cabezas tractoras",
    "anoPuestaServicio": "2005",
    "tipoMaterial": "AVE / Alta Velocidad",
    "anchoVia": "1435 mm",
    "numeroRamas": 16,
    "modelo": "Talgo 350",
    "apodo": "Pato",
    "velocidadMaxima": "330 km/h",
    "potencia": "8.000 kW",
    "longitud": "200,244 m",
    "capacidad": "316 plazas + 2 PMR",
    "plazasSentadas": "316",
    "generalNotes": [
      "La serie 102 corresponde al Talgo 350, desarrollado por Talgo y Bombardier para los servicios AVE de alta velocidad.",
      "Está formada por 16 ramas. Cada rama dispone de dos cabezas tractoras, un motor impar y un motor par, y doce remolques Talgo.",
      "La puesta en servicio comercial comenzó el 26 de febrero de 2005 en la relación Madrid-Zaragoza-Lleida.",
      "La velocidad máxima comercial es de 330 km/h y la potencia instalada es de 8.000 kW.",
      "El tren es conocido popularmente como «Pato» por la forma aerodinámica de sus cabezas tractoras.",
      "La serie fue la primera aplicación comercial del Talgo 350 en Renfe y posteriormente sirvió de base para la serie 112.",
      "En junio de 2004, el Talgo 350 alcanzó 365 km/h en pruebas, estableciendo un récord español de velocidad con tracción eléctrica."
    ],
    "units": {
      "1": {
        "rama": "1",
        "numero": "9-102-001-5",
        "motorTipo": "impar",
        "motorImpar": "9-102-001-5",
        "motorPar": "9-102-002-3",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "2": {
        "rama": "1",
        "numero": "9-102-002-3",
        "motorTipo": "par",
        "motorImpar": "9-102-001-5",
        "motorPar": "9-102-002-3",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "3": {
        "rama": "2",
        "numero": "9-102-003-1",
        "motorTipo": "impar",
        "motorImpar": "9-102-003-1",
        "motorPar": "9-102-004-9",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Primer vehículo con nuevos logos de Renfe AVE 20/04/22."
        ]
      },
      "4": {
        "rama": "2",
        "numero": "9-102-004-9",
        "motorTipo": "par",
        "motorImpar": "9-102-003-1",
        "motorPar": "9-102-004-9",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Primer vehículo con nuevos logos de Renfe AVE 20/04/22."
        ]
      },
      "5": {
        "rama": "3",
        "numero": "9-102-005-6",
        "motorTipo": "impar",
        "motorImpar": "9-102-005-6",
        "motorPar": "9-102-006-4",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Accidentada en Urda al chocar con topera 13/02/04, en servicio.",
          "Ex-Cerro Negro.",
          "La caja accidentada está en Aranda-Chelva, preservada por ASAAT.",
          "Vinilo Lego 07/21."
        ]
      },
      "6": {
        "rama": "3",
        "numero": "9-102-006-4",
        "motorTipo": "par",
        "motorImpar": "9-102-005-6",
        "motorPar": "9-102-006-4",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Accidentada en Urda al chocar con topera 13/02/04, en servicio.",
          "Ex-Cerro Negro.",
          "La caja accidentada está en Aranda-Chelva, preservada por ASAAT.",
          "Vinilo Lego 07/21."
        ]
      },
      "7": {
        "rama": "4",
        "numero": "9-102-007-2",
        "motorTipo": "impar",
        "motorImpar": "9-102-007-2",
        "motorPar": "9-102-008-0",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "8": {
        "rama": "4",
        "numero": "9-102-008-0",
        "motorTipo": "par",
        "motorImpar": "9-102-007-2",
        "motorPar": "9-102-008-0",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "9": {
        "rama": "5",
        "numero": "9-102-009-8",
        "motorTipo": "impar",
        "motorImpar": "9-102-009-8",
        "motorPar": "9-102-010-6",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "10": {
        "rama": "5",
        "numero": "9-102-010-6",
        "motorTipo": "par",
        "motorImpar": "9-102-009-8",
        "motorPar": "9-102-010-6",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "11": {
        "rama": "6",
        "numero": "9-102-011-4",
        "motorTipo": "impar",
        "motorImpar": "9-102-011-4",
        "motorPar": "9-102-012-2",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Tuvo vinilos APP Mapfre."
        ]
      },
      "12": {
        "rama": "6",
        "numero": "9-102-012-2",
        "motorTipo": "par",
        "motorImpar": "9-102-011-4",
        "motorPar": "9-102-012-2",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Tuvo vinilos APP Mapfre."
        ]
      },
      "13": {
        "rama": "7",
        "numero": "9-102-013-0",
        "motorTipo": "impar",
        "motorImpar": "9-102-013-0",
        "motorPar": "9-102-014-8",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "4.º 102 en entrar en AV Valladolid, 14/12/07 hasta 13/05/08.",
          "Vinilos «Tren del deporte Español» 04/12."
        ]
      },
      "14": {
        "rama": "7",
        "numero": "9-102-014-8",
        "motorTipo": "par",
        "motorImpar": "9-102-013-0",
        "motorPar": "9-102-014-8",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "4.º 102 en entrar en AV Valladolid, 14/12/07 hasta 13/05/08.",
          "Vinilos «Tren del deporte Español» 04/12."
        ]
      },
      "15": {
        "rama": "8",
        "numero": "9-102-015-5",
        "motorTipo": "impar",
        "motorImpar": "9-102-015-5",
        "motorPar": "9-102-016-3",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "16": {
        "rama": "8",
        "numero": "9-102-016-3",
        "motorTipo": "par",
        "motorImpar": "9-102-015-5",
        "motorPar": "9-102-016-3",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "17": {
        "rama": "9",
        "numero": "9-102-017-1",
        "motorTipo": "impar",
        "motorImpar": "9-102-017-1",
        "motorPar": "9-102-018-9",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Vinilos Expo Zaragoza 2008.",
          "Logos 80 años Renfe (2021)."
        ]
      },
      "18": {
        "rama": "9",
        "numero": "9-102-018-9",
        "motorTipo": "par",
        "motorImpar": "9-102-017-1",
        "motorPar": "9-102-018-9",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Vinilos Expo Zaragoza 2008.",
          "Logos 80 años Renfe (2021)."
        ]
      },
      "19": {
        "rama": "10",
        "numero": "9-102-019-7",
        "motorTipo": "impar",
        "motorImpar": "9-102-019-7",
        "motorPar": "9-102-020-5",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Vinilo Starlite 2024."
        ]
      },
      "20": {
        "rama": "10",
        "numero": "9-102-020-5",
        "motorTipo": "par",
        "motorImpar": "9-102-019-7",
        "motorPar": "9-102-020-5",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Vinilo Starlite 2024."
        ]
      },
      "21": {
        "rama": "11",
        "numero": "9-102-021-3",
        "motorTipo": "impar",
        "motorImpar": "9-102-021-3",
        "motorPar": "9-102-022-1",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "2.º 102 en entrar en AV Valladolid, 02/12/07.",
          "Tren inaugural 22/12/07.",
          "Ex-Cerro Negro >> Fuencarral >> Málaga."
        ]
      },
      "22": {
        "rama": "11",
        "numero": "9-102-022-1",
        "motorTipo": "par",
        "motorImpar": "9-102-021-3",
        "motorPar": "9-102-022-1",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "2.º 102 en entrar en AV Valladolid, 02/12/07.",
          "Tren inaugural 22/12/07.",
          "Ex-Cerro Negro >> Fuencarral >> Málaga."
        ]
      },
      "23": {
        "rama": "12",
        "numero": "9-102-023-9",
        "motorTipo": "impar",
        "motorImpar": "9-102-023-9",
        "motorPar": "9-102-024-7",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Logos 80 años Renfe (2021).",
          "Vinilos final Copa del Rey de fútbol masculino 04/24."
        ]
      },
      "24": {
        "rama": "12",
        "numero": "9-102-024-7",
        "motorTipo": "par",
        "motorImpar": "9-102-023-9",
        "motorPar": "9-102-024-7",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro.",
          "Logos 80 años Renfe (2021).",
          "Vinilos final Copa del Rey de fútbol masculino 04/24."
        ]
      },
      "25": {
        "rama": "13",
        "numero": "9-102-025-4",
        "motorTipo": "impar",
        "motorImpar": "9-102-025-4",
        "motorPar": "9-102-026-2",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Primer 102 en entrar en AV Madrid-Valladolid 27/11/07.",
          "Ex-Cerro Negro >> Fuencarral >> Málaga."
        ]
      },
      "26": {
        "rama": "13",
        "numero": "9-102-026-2",
        "motorTipo": "par",
        "motorImpar": "9-102-025-4",
        "motorPar": "9-102-026-2",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Primer 102 en entrar en AV Madrid-Valladolid 27/11/07.",
          "Ex-Cerro Negro >> Fuencarral >> Málaga."
        ]
      },
      "27": {
        "rama": "14",
        "numero": "9-102-027-0",
        "motorTipo": "impar",
        "motorImpar": "9-102-027-0",
        "motorPar": "9-102-028-8",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "28": {
        "rama": "14",
        "numero": "9-102-028-8",
        "motorTipo": "par",
        "motorImpar": "9-102-027-0",
        "motorPar": "9-102-028-8",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro."
        ]
      },
      "29": {
        "rama": "15",
        "numero": "9-102-029-6",
        "motorTipo": "impar",
        "motorImpar": "9-102-029-6",
        "motorPar": "9-102-030-4",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro >> Fuencarral.",
          "Logos 75 años Renfe.",
          "24/05/18: primer AVE en llegar en pruebas a Granada."
        ]
      },
      "30": {
        "rama": "15",
        "numero": "9-102-030-4",
        "motorTipo": "par",
        "motorImpar": "9-102-029-6",
        "motorPar": "9-102-030-4",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Colores Renfe Operadora.",
          "Ex-Cerro Negro >> Fuencarral.",
          "Logos 75 años Renfe.",
          "24/05/18: primer AVE en llegar en pruebas a Granada."
        ]
      },
      "31": {
        "rama": "16",
        "numero": "9-102-031-2",
        "motorTipo": "impar",
        "motorImpar": "9-102-031-2",
        "motorPar": "9-102-032-0",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Fuencarral UIC.",
          "Tercer 102 en entrar en AV Valladolid, 12/07 >> Málaga.",
          "Vinilo final Copa del Rey de fútbol 05/23."
        ]
      },
      "32": {
        "rama": "16",
        "numero": "9-102-032-0",
        "motorTipo": "par",
        "motorImpar": "9-102-031-2",
        "motorPar": "9-102-032-0",
        "deposito": "Málaga",
        "ancho": "1435",
        "notas": [
          "Fuencarral UIC.",
          "Tercer 102 en entrar en AV Valladolid, 12/07 >> Málaga.",
          "Vinilo final Copa del Rey de fútbol 05/23."
        ]
      }
    }
  },
  "103": {
    "seriesName": "Serie 103",
    "fabricante": "Siemens",
    "numeroCoches": "8",
    "tipoMaterial": "AVE / Alta Velocidad · Siemens Velaro E",
    "anchoVia": "1435 mm",
    "modelo": "Siemens Velaro E",
    "familia": "Velaro / ICE 3",
    "apodo": "Velaro",
    "velocidadMaxima": "350 km/h",
    "potencia": "8.800 kW",
    "tension": "25 kV / 50 Hz",
    "capacidad": "404/405 plazas",
    "plazasSentadas": "404/405",
    "longitud": "200 m",
    "peso": "425 t",
    "motores": "16 motores asíncronos",
    "numeroUnidades": "26 composiciones",
    "traccion": "Distribuida",
    "señalizacion": "ERTMS niveles 1 y 2, ASFA y STM de LZB",
    "composicion": "8 coches: Mc-R-M-R-R-M-R-Mc",
    "generalNotes": [
      "Unidades Siemens Velaro E de alta velocidad para los corredores AVE, con especial protagonismo en la línea Madrid-Barcelona.",
      "La serie 103 fue presentada en enero de 2007 y está formada por 26 trenes adjudicados a Siemens en dos concursos.",
      "Es un tren de tracción distribuida: no tiene cabezas tractoras convencionales y los equipos de tracción se reparten bajo los bastidores de la composición.",
      "Cada unidad está formada por 8 coches. Los coches 1, 3, 6 y 8 disponen de bogies motores; el 50 % de los ejes están motorizados.",
      "La potencia total es de 8.800 kW y la velocidad máxima de diseño es de 350 km/h.",
      "La capacidad oficial es de 404/405 plazas según configuración; Renfe distribuye el interior entre Club, Preferente, cafetería y Turista.",
      "La composición incorpora 2 plazas para viajeros en silla de ruedas y un aseo adaptado a PMR.",
      "Está basada en la familia ICE 3 de Deutsche Bahn y corresponde a la variante española Siemens Velaro E.",
      "La tracción distribuida mejora la adherencia, la aceleración y el aprovechamiento del espacio interior.",
      "Dispone de ERTMS niveles 1 y 2, ASFA y STM de LZB para circular por distintos corredores de alta velocidad.",
      "El tren puede circular en composición múltiple de dos unidades.",
      "Los vehículos están equipados con sistemas de freno regenerativo, reostático y neumático, además de sistemas de protección contra incendios y antiacaballamiento.",
    ],
    "units": {
      "1": {
        "rama": "1",
        "numero": "9-103-201",
        "vehiculoBase": "201",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Vinilos Movistar, 07/15."]
      },
      "2": {
        "rama": "2",
        "numero": "9-103-202",
        "vehiculoBase": "202",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Récord de España de velocidad: 390 km/h, 03/07/06."]
      },
      "3": {
        "rama": "3",
        "numero": "9-103-203",
        "vehiculoBase": "203",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "4": {
        "rama": "4",
        "numero": "9-103-204",
        "vehiculoBase": "204",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "5": {
        "rama": "5",
        "numero": "9-103-205",
        "vehiculoBase": "205",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Récord de velocidad nocturno del 15 al 16/07/06: 403,7 km/h entre Alcalá de Henares y Calatayud, en la LAV Madrid-Lleida.", "Colores Renfe Operadora.", "Nuevo logo AVE 10/22.", "Ex-La Sagra → Can Tunis."]
      },
      "6": {
        "rama": "6",
        "numero": "9-103-206",
        "vehiculoBase": "206",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Vinilos Feria del Libro 2023 en el coche 606."]
      },
      "7": {
        "rama": "7",
        "numero": "9-103-207",
        "vehiculoBase": "207",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Nuevos logos AVE 10/22."]
      },
      "8": {
        "rama": "8",
        "numero": "9-103-208",
        "vehiculoBase": "208",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "9": {
        "rama": "9",
        "numero": "9-103-209",
        "vehiculoBase": "209",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "10": {
        "rama": "10",
        "numero": "9-103-210",
        "vehiculoBase": "210",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Golpe con la rama 11 en talleres Cerro Negro, 08/10/13.", "Tras el accidente, circuló con coches de la rama 11.", "Vinilos Vuelta a España 08/23."]
      },
      "11": {
        "rama": "11",
        "numero": "9-103-211",
        "vehiculoBase": "211",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Golpe con la rama 10 en talleres Cerro Negro, 08/10/13.", "Tras el accidente, por lo menos el coche Club (9-103-211-9) circuló en la rama 10.", "En servicio 05/21.", "Vinilo Vuelta a España 06/23."]
      },
      "12": {
        "rama": "12",
        "numero": "9-103-212",
        "vehiculoBase": "212",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "13": {
        "rama": "13",
        "numero": "9-103-213",
        "vehiculoBase": "213",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Vinilos Fujitsu, 06/18.", "Vinilos PortAventura, 06/23."]
      },
      "14": {
        "rama": "14",
        "numero": "9-103-214",
        "vehiculoBase": "214",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "15": {
        "rama": "15",
        "numero": "9-103-215",
        "vehiculoBase": "215",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "16": {
        "rama": "16",
        "numero": "9-103-216",
        "vehiculoBase": "216",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "17": {
        "rama": "17",
        "numero": "9-103-217",
        "vehiculoBase": "217",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Colisión con 120.60 en Santa Catalina, 13/05/17.", "En servicio 07/21."]
      },
      "18": {
        "rama": "18",
        "numero": "9-103-218",
        "vehiculoBase": "218",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Vinilos Feria del Libro Madrid 05/26."]
      },
      "19": {
        "rama": "19",
        "numero": "9-103-219",
        "vehiculoBase": "219",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "20": {
        "rama": "20",
        "numero": "9-103-220",
        "vehiculoBase": "220",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Vinilo Lola Índigo 06/25."]
      },
      "21": {
        "rama": "21",
        "numero": "9-103-221",
        "vehiculoBase": "221",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "22": {
        "rama": "22",
        "numero": "9-103-222",
        "vehiculoBase": "222",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Vinilos 25 años Estopa desde 20/03/24."]
      },
      "23": {
        "rama": "23",
        "numero": "9-103-223",
        "vehiculoBase": "223",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "24": {
        "rama": "24",
        "numero": "9-103-224",
        "vehiculoBase": "224",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis.", "Vinilos Correos, 07/16."]
      },
      "25": {
        "rama": "25",
        "numero": "9-103-225",
        "vehiculoBase": "225",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      },
      "26": {
        "rama": "26",
        "numero": "9-103-226",
        "vehiculoBase": "226",
        "deposito": "Santa Catalina",
        "ancho": "1435",
        "notas": ["Colores Renfe Operadora.", "Ex-La Sagra → Can Tunis."]
      }
    }
  },
  "104":{
    "seriesName":"Serie 104",
    "fabricante":"CAF-Alstom",
    "modelo":"Serie 104 / Pendolino",
    "apodo":"Avant",
    "tipoMaterial":"Media Distancia · Alta Velocidad / Avant",
    "numeroCoches":"4",
    "unidades":"20",
    "año":"2004",
    "deposito":"Cerro Negro / Málaga",
    "anchoVia":"1435 mm",
    "velocidadMaxima":"270 km/h",
    "velocidadComercial":"250 km/h",
    "potencia":"4.000 kW",
    "tension":"25 kV / 50 Hz",
    "traccion":"Eléctrica · 8 motores asíncronos",
    "composicion":"Mc + Mi + Mi + Mc",
    "plazasSentadas":"236 + 1 PMR",
    "capacidad":"237 plazas",
    "longitud":"107,10 m",
    "peso":"221,5 t",
    "generalNotes":[
      "Unidades construidas por CAF y Alstom para servicios regionales en líneas de Alta Velocidad.",
      "Inicialmente pertenecieron a Regionales, aunque antes de iniciar servicio pasaron a Grandes Líneas.",
      "Fueron diseñadas específicamente para prestar servicios de media distancia a alta velocidad.",
      "El primer servicio comercial comenzó el 29 de diciembre de 2004 entre Madrid, Ciudad Real y Puertollano.",
      "La serie está formada por 20 unidades de cuatro coches y puede circular en mando múltiple.",
      "La plataforma pertenece a la familia Pendolino desarrollada originalmente por Fiat Ferroviaria y posteriormente integrada en Alstom."
    ],
    "units":{
      "1":{
        "rama":1,"vehiculoBase":"001","numero":"9-104-001-3",
        "motor":"7-104-001-1","motorCentral":"6-104-501-2","cocheMotorFinal":"9-104-901-4",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "2":{
        "rama":2,"vehiculoBase":"002","numero":"9-104-002-1",
        "motor":"7-104-002-1","motorCentral":"6-104-502-0","cocheMotorFinal":"9-104-902-2",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra. Logos 75 años Renfe."]
      },
      "3":{
        "rama":3,"vehiculoBase":"003","numero":"9-104-003-9",
        "motor":"7-104-003-9","motorCentral":"6-104-503-8","cocheMotorFinal":"9-104-903-0",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "4":{
        "rama":4,"vehiculoBase":"004","numero":"9-104-004-7",
        "motor":"7-104-004-7","motorCentral":"6-104-504-6","cocheMotorFinal":"9-104-904-8",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "5":{
        "rama":5,"vehiculoBase":"005","numero":"9-104-005-4",
        "motor":"7-104-005-5","motorCentral":"6-104-505-3","cocheMotorFinal":"9-104-905-5",
        "deposito":"Málaga","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "6":{
        "rama":6,"vehiculoBase":"006","numero":"9-104-006-2",
        "motor":"7-104-006-2","motorCentral":"6-104-506-1","cocheMotorFinal":"9-104-906-3",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "7":{
        "rama":7,"vehiculoBase":"007","numero":"9-104-007-0",
        "motor":"7-104-007-0","motorCentral":"6-104-507-9","cocheMotorFinal":"9-104-907-1",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Estuvo en LAV Valladolid (único de su serie). Ex-Fuenlabrada."]
      },
      "8":{
        "rama":8,"vehiculoBase":"008","numero":"9-104-008-8",
        "motor":"7-104-008-8","motorCentral":"6-104-508-7","cocheMotorFinal":"9-104-908-9",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "9":{
        "rama":9,"vehiculoBase":"009","numero":"9-104-009-6",
        "motor":"7-104-009-6","motorCentral":"6-104-509-5","cocheMotorFinal":"9-104-909-7",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra. Logos 75 años Renfe."]
      },
      "10":{
        "rama":10,"vehiculoBase":"010","numero":"9-104-010-4",
        "motor":"7-104-010-4","motorCentral":"6-104-510-3","cocheMotorFinal":"9-104-910-5",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "11":{
        "rama":11,"vehiculoBase":"011","numero":"9-104-011-2",
        "motor":"7-104-011-2","motorCentral":"6-104-511-1","cocheMotorFinal":"9-104-911-3",
        "deposito":"Málaga","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "12":{
        "rama":12,"vehiculoBase":"012","numero":"9-104-012-0",
        "motor":"7-104-012-0","motorCentral":"6-104-512-9","cocheMotorFinal":"9-104-912-1",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "13":{
        "rama":13,"vehiculoBase":"013","numero":"9-104-013-8",
        "motor":"7-104-013-8","motorCentral":"6-104-513-7","cocheMotorFinal":"9-104-913-9",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "14":{
        "rama":14,"vehiculoBase":"014","numero":"9-104-014-6",
        "motor":"7-104-014-6","motorCentral":"6-104-514-5","cocheMotorFinal":"9-104-914-7",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra. Ex-Cerro Negro → Málaga."]
      },
      "15":{
        "rama":15,"vehiculoBase":"015","numero":"9-104-015-3",
        "motor":"7-104-015-3","motorCentral":"6-104-515-2","cocheMotorFinal":"9-104-915-4",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "16":{
        "rama":16,"vehiculoBase":"016","numero":"9-104-016-1",
        "motor":"7-104-016-1","motorCentral":"6-104-516-0","cocheMotorFinal":"9-104-916-2",
        "deposito":"Málaga","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "17":{
        "rama":17,"vehiculoBase":"017","numero":"9-104-017-9",
        "motor":"7-104-017-9","motorCentral":"6-104-517-8","cocheMotorFinal":"9-104-917-0",
        "deposito":"Málaga","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra. Logos 75 años Renfe."]
      },
      "18":{
        "rama":18,"vehiculoBase":"018","numero":"9-104-018-7",
        "motor":"7-104-018-7","motorCentral":"6-104-518-6","cocheMotorFinal":"9-104-918-8",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "19":{
        "rama":19,"vehiculoBase":"019","numero":"9-104-019-5",
        "motor":"7-104-019-5","motorCentral":"6-104-519-4","cocheMotorFinal":"9-104-919-6",
        "deposito":"Málaga","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      },
      "20":{
        "rama":20,"vehiculoBase":"020","numero":"9-104-020-3",
        "motor":"7-104-020-3","motorCentral":"6-104-520-2","cocheMotorFinal":"9-104-920-4",
        "deposito":"Cerro Negro","ano":"2004","anchoVia":"1435 mm","numeroCoches":"4",
        "tipoMaterial":"Media Dist.","notas":["Colores Renfe Op. Logos Avant. Ex-La Sagra."]
      }
    }
  },


  "120":{
    "seriesName":"Serie 120",
    "fabricante":"CAF-Alstom",
    "numeroCoches":"4 coches · Cabina Preferente + Preferente/Cafetería + Turista + Cabina Turista",
    "anoPuestaServicio":"2005 / 2009",
    "tipoMaterial":"Alta Velocidad · Alvia",
    "anchoVia":"1435/1668 mm",
    "numeroRamas":28,
    "modelo":"CAF-Alstom ATPRD",
    "velocidadMaxima":"250 km/h (1.435 mm) · 220 km/h (1.668 mm)",
    "potencia":"4.000 kW (25 kV) · 2.500 kW (3 kV)",
    "longitud":"107,36 m",
    "peso":"247 t",
    "tension":"25 kV c.a. / 3 kV c.c.",
    "traccion":"Distribuida · 8 motores asíncronos Alstom MTA/550 H",
    "señalizacion":"ASFA, ERTMS y AVE",
    "composicion":"Mc + M + M + Mc",
    "capacidad":"238 plazas · 156 Turista + 81 Preferente + 1 PMR",
    "plazasSentadas":"238",
    "numeroUnidades":"12 ramas de primera subserie + 15 construidas de segunda subserie; la 66 (120.366) no fue construida",
    "generalNotes":[
      "La serie 120 de Renfe (ATPRD) es una familia de trenes de alta velocidad de ancho variable fabricados por CAF y Alstom.",
      "Cada unidad está formada por cuatro coches: Cabina Preferente + Preferente/Cafetería + Turista + Cabina Turista.",
      "El sistema de rodadura desplazable BRAVA, desarrollado por CAF, permite circular por ancho ibérico e internacional y realizar el cambio de ancho de forma continua.",
      "La serie es bitensión: 25 kV en corriente alterna para ancho internacional y 3 kV en corriente continua para ancho ibérico.",
      "La velocidad máxima comercial es de 250 km/h en ancho internacional y 220 km/h en ancho ibérico.",
      "La S-120 cuenta con 238 plazas: 156 de Turista, 81 de Preferente y 1 plaza para personas con movilidad reducida.",
      "La primera subserie comprende las ramas 1 a 12; la segunda subserie, correspondiente a la S-120.5, se desarrolló a partir del verano de 2009 y comprende las ramas 51 a 66, aunque la 66 no llegó a construirse.",
      "La primera unidad de la serie inició el servicio comercial el 17 de mayo de 2006 en la relación Madrid-Barcelona bajo la denominación Alvia.",
      "La segunda subserie incorporó equipos redundantes para mejorar la seguridad en el cruce de túneles de la LAV de Madrid a Valladolid.",
      "El sistema de tracción está distribuido a lo largo de los cuatro coches y emplea ocho motores asíncronos."
    ],
    "units":{
      "1":{"rama":"1","vehiculoBase":"301","subserie":"Primera subserie","numero":"9-120-301-7","vehiculosRama":["9-120-301-7","6-120-901-4","6-120-601-0","9-120-601-0"],"searchCodes":["301","901","601"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-301-7 + 6-120-901-4 + 6-120-601-0 + 9-120-601-0","notas":["Arrollamiento de tractor en Rincón de Soto, 13/05/16.", "Logos 75 años Renfe."]},
      "2":{"rama":"2","vehiculoBase":"302","subserie":"Primera subserie","numero":"9-120-302-5","vehiculosRama":["9-120-302-5","6-120-902-2","6-120-602-8","9-120-602-8"],"searchCodes":["302","902","602"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-302-5 + 6-120-902-2 + 6-120-602-8 + 9-120-602-8","notas":["Logos 75 años Renfe."]},
      "3":{"rama":"3","vehiculoBase":"303","subserie":"Primera subserie","numero":"9-120-303-3","vehiculosRama":["9-120-303-3","6-120-903-0","6-120-603-6","9-120-603-6"],"searchCodes":["303","903","603"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-303-3 + 6-120-903-0 + 6-120-603-6 + 9-120-603-6","notas":[]},
      "4":{"rama":"4","vehiculoBase":"304","subserie":"Primera subserie","numero":"9-120-304-1","vehiculosRama":["9-120-304-1","6-120-904-8","6-120-604-4","9-120-604-4"],"searchCodes":["304","904","604"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-304-1 + 6-120-904-8 + 6-120-604-4 + 9-120-604-4","notas":["Ex-Madrid."]},
      "5":{"rama":"5","vehiculoBase":"305","subserie":"Primera subserie","numero":"9-120-305-8","vehiculosRama":["9-120-305-8","6-120-905-5","6-120-605-1","9-120-605-1"],"searchCodes":["305","905","605"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-305-8 + 6-120-905-5 + 6-120-605-1 + 9-120-605-1","notas":["Apartada por accidente 09/09. Vuelve al servicio 07/10."]},
      "6":{"rama":"6","vehiculoBase":"306","subserie":"Primera subserie","numero":"9-120-306-6","vehiculosRama":["9-120-306-6","6-120-906-3","6-120-606-9","9-120-606-9"],"searchCodes":["306","906","606"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-306-6 + 6-120-906-3 + 6-120-606-9 + 9-120-606-9","notas":["Ex-Madrid."]},
      "7":{"rama":"7","vehiculoBase":"307","subserie":"Primera subserie","numero":"9-120-307-4","vehiculosRama":["9-120-307-4","6-120-907-1","6-120-607-7","9-120-607-7"],"searchCodes":["307","907","607"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-307-4 + 6-120-907-1 + 6-120-607-7 + 9-120-607-7","notas":["Ex-Madrid. Logos 75 años Renfe."]},
      "8":{"rama":"8","vehiculoBase":"308","subserie":"Primera subserie","numero":"9-120-308-2","vehiculosRama":["9-120-308-2","6-120-908-9","6-120-608-5","9-120-608-5"],"searchCodes":["308","908","608"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-308-2 + 6-120-908-9 + 6-120-608-5 + 9-120-608-5","notas":["Ex-Madrid → Can Tunis."]},
      "9":{"rama":"9","vehiculoBase":"309","subserie":"Primera subserie","numero":"9-120-309-0","vehiculosRama":["9-120-309-0","6-120-909-7","6-120-609-3","9-120-609-3"],"searchCodes":["309","909","609"],"deposito":"Can Tunis","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-309-0 + 6-120-909-7 + 6-120-609-3 + 9-120-609-3","notas":["Ex-Madrid."]},
      "10":{"rama":"10","vehiculoBase":"310","subserie":"Primera subserie","numero":"9-120-310-8","vehiculosRama":["9-120-310-8","6-120-910-5","6-120-610-1","9-120-610-1"],"searchCodes":["310","910","610"],"deposito":"Can Tunis","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-310-8 + 6-120-910-5 + 6-120-610-1 + 9-120-610-1","notas":["Ex-Madrid."]},
      "11":{"rama":"11","vehiculoBase":"311","subserie":"Primera subserie","numero":"9-120-311-6","vehiculosRama":["9-120-311-6","6-120-911-3","6-120-611-9","9-120-611-9"],"searchCodes":["311","911","611"],"deposito":"Can Tunis","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-311-6 + 6-120-911-3 + 6-120-611-9 + 9-120-611-9","notas":["Ex-Madrid."]},
      "12":{"rama":"12","vehiculoBase":"312","subserie":"Primera subserie","numero":"9-120-312-4","vehiculosRama":["9-120-312-4","6-120-912-1","6-120-612-7","9-120-612-7"],"searchCodes":["312","912","612"],"deposito":"Can Tunis","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2005,"ancho":"1435/1668","composicionRama":"9-120-312-4 + 6-120-912-1 + 6-120-612-7 + 9-120-612-7","notas":["Amunt en testeros 04/08. Ex-Madrid."]},
      "51":{"rama":"51","vehiculoBase":"351","subserie":"Segunda subserie","numero":"9-120-351-2","vehiculosRama":["9-120-351-2","6-120-951-9","6-120-651-5","9-120-651-5"],"searchCodes":["351","951","651"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-351-2 + 6-120-951-9 + 6-120-651-5 + 9-120-651-5","notas":["En pruebas 10/09. En servicio 11/09. Ex-Can Tunis → Fuencarral"]},
      "52":{"rama":"52","vehiculoBase":"352","subserie":"Segunda subserie","numero":"9-120-352-0","vehiculosRama":["9-120-352-0","6-120-952-7","6-120-652-3","9-120-652-3"],"searchCodes":["352","952","652"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-352-0 + 6-120-952-7 + 6-120-652-3 + 9-120-652-3","notas":["En pruebas 10/09. En servicio 11/09. Descarrilo Artomaña 31/05/22. Ex-Fuencarral."]},
      "53":{"rama":"53","vehiculoBase":"353","subserie":"Segunda subserie","numero":"9-120-353-8","vehiculosRama":["9-120-353-8","6-120-953-5","6-120-653-1","9-120-653-1"],"searchCodes":["353","953","653"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-353-8 + 6-120-953-5 + 6-120-653-1 + 9-120-653-1","notas":["En pruebas 10/09. En servicio. Ex-Sta. Catalina → Fuencarral"]},
      "54":{"rama":"54","vehiculoBase":"354","subserie":"Segunda subserie","numero":"9-120-354-6","vehiculosRama":["9-120-354-6","6-120-954-3","6-120-654-9","9-120-654-9"],"searchCodes":["354","954","654"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-354-6 + 6-120-954-3 + 6-120-654-9 + 9-120-654-9","notas":["En pruebas 10/09. En servicio. Ex-Sta.Catalina. Incendio cambiador Córdoba 30/01/23. Ex-Fuencarral"]},
      "55":{"rama":"55","vehiculoBase":"355","subserie":"Segunda subserie","numero":"9-120-355-3","vehiculosRama":["9-120-355-3","6-120-955-0","6-120-655-6","9-120-655-6"],"searchCodes":["355","955","655"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-355-3 + 6-120-955-0 + 6-120-655-6 + 9-120-655-6","notas":["Vinilo Los Señores del Tiempo en coche 3, 01/10/18. Descarrilamiento coche 3 en Villaquirán 07/01/19. Ex-Sta.Catalina → Fuencarral"]},
      "56":{"rama":"56","vehiculoBase":"356","subserie":"Segunda subserie","numero":"9-120-356-1","vehiculosRama":["9-120-356-1","6-120-956-8","6-120-656-4","9-120-656-4"],"searchCodes":["356","956","656"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-356-1 + 6-120-956-8 + 6-120-656-4 + 9-120-656-4","notas":["Choque contra un remolque de camión en un paso a nivel entre Benacazón y Carrión de los Céspedes 2/19. Ex-Fuencarral"]},
      "57":{"rama":"57","vehiculoBase":"357","subserie":"Segunda subserie","numero":"9-120-357-9","vehiculosRama":["9-120-357-9","6-120-957-6","6-120-657-2","9-120-657-2"],"searchCodes":["357","957","657"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-357-9 + 6-120-957-6 + 6-120-657-2 + 9-120-657-2","notas":["Arrollamiento de caballo entre Brinkola y Zegama, 29/10/14. Ex-Fuencarral"]},
      "58":{"rama":"58","vehiculoBase":"358","subserie":"Segunda subserie","numero":"9-120-358-7","vehiculosRama":["9-120-358-7","6-120-958-4","6-120-658-0","9-120-658-0"],"searchCodes":["358","958","658"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-358-7 + 6-120-958-4 + 6-120-658-0 + 9-120-658-0","notas":["Logos 75 años Renfe. Ex-Fuencarral. Descarrilo Inoso-Oiardo 11/10/24."]},
      "59":{"rama":"59","vehiculoBase":"359","subserie":"Segunda subserie","numero":"9-120-359-5","vehiculosRama":["9-120-359-5","6-120-959-2","6-120-659-8","9-120-659-8"],"searchCodes":["359","959","659"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-359-5 + 6-120-959-2 + 6-120-659-8 + 9-120-659-8","notas":["Ex-Fuencarral"]},
      "60":{"rama":"60","vehiculoBase":"360","subserie":"Segunda subserie","numero":"9-120-360-3","vehiculosRama":["9-120-360-3","6-120-960-0","6-120-660-6","9-120-660-6"],"searchCodes":["360","960","660"],"deposito":"Santa Catalina","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-360-3 + 6-120-960-0 + 6-120-660-6 + 9-120-660-6","notas":["Colisión con 103.17 en Santa Catalina, 13/05/17. Apartado. En reparación desde 12/19. Vuelta al servicio 08/21. Ex-Fuencarral"]},
      "61":{"rama":"61","vehiculoBase":"361","subserie":"Segunda subserie","numero":"9-120-361-1","vehiculosRama":["9-120-361-1","6-120-961-8","6-120-661-4","9-120-661-4"],"searchCodes":["361","961","661"],"deposito":"Can Tunis","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-361-1 + 6-120-961-8 + 6-120-661-4 + 9-120-661-4","notas":["Logos 75 años Renfe. Ex-Fuencarral. Descarrilo Adamuz 18/01/26."]},
      "62":{"rama":"62","vehiculoBase":"362","subserie":"Segunda subserie","numero":"9-120-362-9","vehiculosRama":["9-120-362-9","6-120-962-6","6-120-662-2","9-120-662-2"],"searchCodes":["362","962","662"],"deposito":"Can Tunis","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-362-9 + 6-120-962-6 + 6-120-662-2 + 9-120-662-2","notas":["Ex-Fuencarral"]},
      "63":{"rama":"63","vehiculoBase":"363","subserie":"Segunda subserie","numero":"9-120-363-7","vehiculosRama":["9-120-363-7","6-120-963-4","6-120-663-0","9-120-663-0"],"searchCodes":["363","963","663"],"deposito":"Can Tunis","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-363-7 + 6-120-963-4 + 6-120-663-0 + 9-120-663-0","notas":["Logos 75 años Renfe. Ex-Fuencarral"]},
      "64":{"rama":"64","vehiculoBase":"364","subserie":"Segunda subserie","numero":"9-120-364-5","vehiculosRama":["9-120-364-5","6-120-964-2","6-120-664-8","9-120-664-8"],"searchCodes":["364","964","664"],"deposito":"Can Tunis","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-364-5 + 6-120-964-2 + 6-120-664-8 + 9-120-664-8","notas":["Ex-Sta.Catalina. Ex-Fuencarral"]},
      "65":{"rama":"65","vehiculoBase":"365","subserie":"Segunda subserie","numero":"9-120-365-2","vehiculosRama":["9-120-365-2","6-120-965-9","6-120-665-5","9-120-665-5"],"searchCodes":["365","965","665"],"deposito":"Can Tunis","color":"Blanco","estado":"En servicio","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-365-2 + 6-120-965-9 + 6-120-665-5 + 9-120-665-5","notas":["Ex-Fuencarral"]},
      "66":{"rama":"66","vehiculoBase":"366","subserie":"Segunda subserie","numero":"9-120-366-0","vehiculosRama":["9-120-366-0","6-120-966-7","6-120-666-3","9-120-666-3"],"searchCodes":["366","966","666"],"deposito":"","color":"Blanco","estado":"No construido","servicio":"Grandes Líneas","ano":2009,"ancho":"1435/1668","composicionRama":"9-120-366-0 + 6-120-966-7 + 6-120-666-3 + 9-120-666-3","notas":["No construido. En su lugar, y con el mismo contrato, se construyó el prototipo OARIS de la serie 105."]}
    }
  },
  "114": {
    "seriesName":"Serie 114",
    "fabricante":"CAF-Alstom",
    "numeroCoches":"4 coches · Mc + Mi + Mi + Mc",
    "anoPuestaServicio":"2011",
    "tipoMaterial":"Media Distancia · Alta Velocidad · Avant",
    "anchoVia":"1435 mm",
    "numeroRamas":13,
    "velocidadMaxima":"250 km/h comercial · 270 km/h máxima",
    "potencia":"4.000 kW",
    "longitud":"107,9 m",
    "peso":"221,5 t en vacío",
    "tension":"25 kV / 50 Hz",
    "señalizacion":"ERTMS, STM-LZB y ASFA Digital",
    "traccion":"8 motores asíncronos trifásicos",
    "composicion":"Mc + Mi + Mi + Mc",
    "capacidad":"237 plazas · 236 + 1 PMR",
    "plazasSentadas":"237",
    "numeroUnidades":"13 composiciones",
    "generalNotes":[
      "Trenes de Media Distancia para servicios AVANT sobre líneas de Alta Velocidad.",
      "La serie 114 es una evolución de la serie 104, con mejoras en tracción, frenado, eficiencia energética, confort e interiorismo.",
      "Las 13 unidades fueron construidas por Alstom y CAF; Alstom realizó la construcción de la serie en su centro industrial de Santa Perpètua de Mogoda (Barcelona).",
      "Cada composición está formada por cuatro coches: dos coches extremos con cabina y dos coches intermedios.",
      "El tren es monotensión a 25 kV / 50 Hz y utiliza ancho internacional de 1.435 mm.",
      "Dispone de 237 plazas: 236 plazas de clase única y una plaza adaptada para personas con movilidad reducida.",
      "La velocidad comercial es de 250 km/h. Algunas fuentes técnicas sitúan la velocidad máxima del tren en 270 km/h.",
      "Incorpora tomas de corriente en los asientos, zona de vending y espacio para bicicletas.",
      "Los sistemas de señalización y protección incluyen ERTMS, STM-LZB y ASFA Digital.",
      "La primera unidad de la serie entró en servicio comercial en junio de 2011 en servicios Avant entre Madrid, Segovia y Valladolid."
    ],
    "units": {
      "1":{"rama":"1","vehiculoBase":"601","numero":"9-114-601-8","motorPar":"9-114-601-8","motorCentral1":"6-114-501-0","motorCentral2":"6-114-601-8","motorImpar":"9-114-602-6","composicionRama":"114 601 · Rama 1 formada por remolques 501 y 601 y motor impar 602","vehiculosRama":["9-114-601-8","9-114-602-6","601","602"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["En pruebas desde 10/08.","Ex-Fuencarral → Can Tunis → 11/19 Cerro Negro → Fuencarral."]},
      "2":{"rama":"2","vehiculoBase":"603","numero":"9-114-603-4","motorPar":"9-114-603-4","motorCentral1":"6-114-502-8","motorCentral2":"6-114-602-6","motorImpar":"9-114-604-2","composicionRama":"114 603 · Rama 2 formada por remolques 502 y 602 y motor impar 604","vehiculosRama":["9-114-603-4","9-114-604-2","603","604"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["En servicio LAV Valladolid.","Desde 11/19 Cerro Negro para Avant Granada-Málaga → 06/20 Fuencarral."]},
      "3":{"rama":"3","vehiculoBase":"605","numero":"9-114-605-9","motorPar":"9-114-605-9","motorCentral1":"6-114-503-6","motorCentral2":"6-114-603-4","motorImpar":"9-114-606-7","composicionRama":"114 605 · Rama 3 formada por remolques 503 y 603 y motor impar 606","vehiculosRama":["9-114-605-9","9-114-606-7","605","606"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["En servicio LAV Valladolid."]},
      "4":{"rama":"4","vehiculoBase":"607","numero":"9-114-607-5","motorPar":"9-114-607-5","motorCentral1":"6-114-504-4","motorCentral2":"6-114-604-2","motorImpar":"9-114-608-3","composicionRama":"114 607 · Rama 4 formada por remolques 504 y 604 y motor impar 608","vehiculosRama":["9-114-607-5","9-114-608-3","607","608"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["En servicio LAV Valladolid.","Desde 11/19 Cerro Negro para Avant Granada-Málaga → Fuencarral."]},
      "5":{"rama":"5","vehiculoBase":"609","numero":"9-114-609-1","motorPar":"9-114-609-1","motorCentral1":"6-114-505-1","motorCentral2":"6-114-605-9","motorImpar":"9-114-610-9","composicionRama":"114 609 · Rama 5 formada por remolques 505 y 605 y motor impar 610","vehiculosRama":["9-114-609-1","9-114-610-9","609","610"],"deposito":"Fuencarral","color":"Blanco","estado":"Desguazada","servicio":"","ano":"2008–2011","ancho":"1435","notas":["En pruebas en LAV Valladolid, 03/11.","Logos 75 años Renfe. Fuencarral → Desde 01/20 Cerro Negro para Avant Granada-Málaga → 06/20 Fuencarral.","Accidente y vuelco en Jardín Botánico (túnel urbano LAV Madrid Atocha - Chamartín) 19/10/24.","Desguazado in situ 15/12/24."]},
      "6":{"rama":"6","vehiculoBase":"611","numero":"9-114-611-7","motorPar":"9-114-611-7","motorCentral1":"6-114-506-9","motorCentral2":"6-114-606-7","motorImpar":"9-114-612-5","composicionRama":"114 611 · Rama 6 formada por remolques 506 y 606 y motor impar 612","vehiculosRama":["9-114-611-7","9-114-612-5","611","612"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["LAV Valladolid (Fuencarral) → Lleida, 06/13 → Cerro Negro 10/19.","Pruebas ERTMS LAV Antequera-Granada → Fuencarral."]},
      "7":{"rama":"7","vehiculoBase":"613","numero":"9-114-613-3","motorPar":"9-114-613-3","motorCentral1":"6-114-507-7","motorCentral2":"6-114-607-5","motorImpar":"9-114-614-1","composicionRama":"114 613 · Rama 7 formada por remolques 507 y 607 y motor impar 614","vehiculosRama":["9-114-613-3","9-114-614-1","613","614"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["Avant Madrid-Segovia-Valladolid → Pruebas en Zaragoza, 04/13.","Fuencarral → Can Tunis → 11/19 Fuencarral.","Logos 75 años Renfe → Cerro Negro → Fuencarral."]},
      "8":{"rama":"8","vehiculoBase":"615","numero":"9-114-615-8","motorPar":"9-114-615-8","motorCentral1":"6-114-508-5","motorCentral2":"6-114-608-3","motorImpar":"9-114-616-6","composicionRama":"114 615 · Rama 8 formada por remolques 508 y 608 y motor impar 616","vehiculosRama":["9-114-615-8","9-114-616-6","615","616"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["En servicio LAV Valladolid.","Fuencarral → Cerro Negro.","Vinilos Transporte Sostenible y 80 años Renfe."]},
      "9":{"rama":"9","vehiculoBase":"617","numero":"9-114-617-4","motorPar":"9-114-617-4","motorCentral1":"6-114-509-3","motorCentral2":"6-114-609-1","motorImpar":"9-114-618-2","composicionRama":"114 617 · Rama 9 formada por remolques 509 y 609 y motor impar 618","vehiculosRama":["9-114-617-4","9-114-618-2","617","618"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["En servicio LAV Valladolid → 06/20 Cerro Negro → Fuencarral."]},
      "10":{"rama":"10","vehiculoBase":"619","numero":"9-114-619-0","motorPar":"9-114-619-0","motorCentral1":"6-114-510-1","motorCentral2":"6-114-610-9","motorImpar":"9-114-620-8","composicionRama":"114 619 · Rama 10 formada por remolques 510 y 610 y motor impar 620","vehiculosRama":["9-114-619-0","9-114-620-8","619","620"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["Rama 10. Fuencarral → Cerro Negro."]},
      "11":{"rama":"11","vehiculoBase":"621","numero":"9-114-621-6","motorPar":"9-114-621-6","motorCentral1":"6-114-511-9","motorCentral2":"6-114-611-7","motorImpar":"9-114-622-4","composicionRama":"114 621 · Rama 11 formada por remolques 511 y 611 y motor impar 622","vehiculosRama":["9-114-621-6","9-114-622-4","621","622"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["Avant Madrid-Segovia-Valladolid → 06/20 Cerro Negro → Fuencarral."]},
      "12":{"rama":"12","vehiculoBase":"623","numero":"9-114-623-2","motorPar":"9-114-623-2","motorCentral1":"6-114-512-7","motorCentral2":"6-114-612-5","motorImpar":"9-114-624-0","composicionRama":"114 623 · Rama 12 formada por remolques 512 y 612 y motor impar 624","vehiculosRama":["9-114-623-2","9-114-624-0","623","624"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["Avant Madrid-Segovia-Valladolid → 06/20 Cerro Negro → Fuencarral → Cerro Negro."]},
      "13":{"rama":"13","vehiculoBase":"625","numero":"9-114-625-7","motorPar":"9-114-625-7","motorCentral1":"6-114-513-5","motorCentral2":"6-114-613-3","motorImpar":"9-114-626-5","composicionRama":"114 625 · Rama 13 formada por remolques 513 y 613 y motor impar 626","vehiculosRama":["9-114-625-7","9-114-626-5","625","626"],"deposito":"Fuencarral","color":"Blanco","estado":"En servicio","servicio":"Media Dist.","ano":"2008–2011","ancho":"1435","notas":["Avant Madrid-Segovia-Valladolid.","Logos 75 años Renfe. Fuencarral → Cerro Negro."]}
    }
  },


  "112": {
    "seriesName":"Serie 112",
    "fabricante":"Talgo-Bombardier",
    "numeroCoches":"12 remolques Talgo + 2 cabezas tractoras",
    "anoPuestaServicio":"2009",
    "tipoMaterial":"AVE / Alta Velocidad",
    "anchoVia":"1435 mm",
    "numeroRamas":30,
    "modelo":"Talgo 350",
    "apodo":"Pato",
    "velocidadMaxima":"330 km/h homologada",
    "potencia":"8.000 kW",
    "longitud":"200 m",
    "peso":"332 t en vacío / 357 t cargado",
    "tension":"25 kV / 50 Hz",
    "señalizacion":"ERTMS, LZB-STM y ASFA",
    "traccion":"2 cabezas tractoras Bombardier · 8 motores asíncronos trifásicos",
    "composicion":"Motriz + 12 remolques Talgo + motriz",
    "capacidad":"348 plazas",
    "plazasSentadas":"348",
    "numeroUnidades":"30 composiciones",
    "generalNotes":[
      "La serie 112 es una evolución de la serie 102 Talgo 350, fabricada por Talgo y Bombardier para los servicios de Alta Velocidad de Renfe.",
      "Está formada por 30 composiciones, cada una con dos cabezas tractoras y doce remolques Talgo articulados.",
      "La principal diferencia respecto a la serie 102 es el aumento de capacidad hasta 348 plazas mediante una nueva distribución interior.",
      "La potencia total es de 8.000 kW, con ocho motores de tracción asíncronos trifásicos y alimentación a 25 kV / 50 Hz.",
      "La velocidad máxima homologada es de 330 km/h; el diseño del Talgo 350 está preparado para velocidades de hasta 350 km/h.",
      "La composición tiene aproximadamente 200 metros de longitud y emplea el sistema de rodadura propio de Talgo.",
      "Los trenes disponen de cafetería y de tomas de corriente en los asientos.",
      "Renfe transformó cinco composiciones de la serie 112 para el servicio Avlo, con configuración de clase única y 438 plazas.",
      "Las 30 unidades fueron fabricadas en el periodo 2009-2010, con participación de los talleres de Renfe Integria en Los Prados (Málaga)."
    ],
    "units": {
      "1": {
        "rama": "1",
        "numero": "9-112-001-3",
        "motorTipo": "impar",
        "motorImpar": "9-112-001-3",
        "motorPar": "9-112-002-1",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2008,
        "ancho": "1435",
        "notas": ["En pruebas 2008.", "Descarrilo de un rodal/coche 7 en Brazatortas, 12/05/17.", "Nuevos logos AVE 03/23.", "Vinilos #TotsAlValencia 2024.", "Vinilos 84ª Feria del Libro de Madrid 05/25.", "Ex-Málaga.", "Descarrilo en Fuencarral 31/12/25."]
      },
      "2": {
        "rama": "1",
        "numero": "9-112-002-1",
        "motorTipo": "par",
        "motorImpar": "9-112-001-3",
        "motorPar": "9-112-002-1",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2008,
        "ancho": "1435",
        "notas": ["En pruebas 2008.", "Descarrilo de un rodal/coche 7 en Brazatortas, 12/05/17.", "Nuevos logos AVE 03/23.", "Vinilos #TotsAlValencia 2024.", "Vinilos 84ª Feria del Libro de Madrid 05/25.", "Ex-Málaga.", "Descarrilo en Fuencarral 31/12/25."]
      },
      "3": {
        "rama": "2",
        "numero": "9-112-003-9",
        "motorTipo": "impar",
        "motorImpar": "9-112-003-9",
        "motorPar": "9-112-004-7",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2008,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Nuevos logos AVE.", "Ex-Santa Catalina."]
      },
      "4": {
        "rama": "2",
        "numero": "9-112-004-7",
        "motorTipo": "par",
        "motorImpar": "9-112-003-9",
        "motorPar": "9-112-004-7",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2008,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Nuevos logos AVE.", "Ex-Santa Catalina."]
      },
      "5": {
        "rama": "3",
        "numero": "9-112-005-4",
        "motorTipo": "impar",
        "motorImpar": "9-112-005-4",
        "motorPar": "9-112-006-2",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Nuevo logo AVE.", "Ex-Santa Catalina."]
      },
      "6": {
        "rama": "3",
        "numero": "9-112-006-2",
        "motorTipo": "par",
        "motorImpar": "9-112-005-4",
        "motorPar": "9-112-006-2",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Nuevo logo AVE.", "Ex-Santa Catalina."]
      },
      "7": {
        "rama": "4",
        "numero": "9-112-007-0",
        "motorTipo": "impar",
        "motorImpar": "9-112-007-0",
        "motorPar": "9-112-008-8",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Línea AV Madrid-León 2015.", "Ex-Fuencarral.", "Servicio Avlo desde 03/23.", "Interiorismo de AVE."]
      },
      "8": {
        "rama": "4",
        "numero": "9-112-008-8",
        "motorTipo": "par",
        "motorImpar": "9-112-007-0",
        "motorPar": "9-112-008-8",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Línea AV Madrid-León 2015.", "Ex-Fuencarral.", "Servicio Avlo desde 03/23.", "Interiorismo de AVE."]
      },
      "9": {
        "rama": "5",
        "numero": "9-112-009-6",
        "motorTipo": "impar",
        "motorImpar": "9-112-009-6",
        "motorPar": "9-112-010-4",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Vinilos Feria del Libro de Madrid 05/24.", "Ex-Santa Catalina."]
      },
      "10": {
        "rama": "5",
        "numero": "9-112-010-4",
        "motorTipo": "par",
        "motorImpar": "9-112-009-6",
        "motorPar": "9-112-010-4",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Vinilos Feria del Libro de Madrid 05/24.", "Ex-Santa Catalina."]
      },
      "11": {
        "rama": "6",
        "numero": "9-112-011-2",
        "motorTipo": "impar",
        "motorImpar": "9-112-011-2",
        "motorPar": "9-112-012-0",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Ex-Santa Catalina."]
      },
      "12": {
        "rama": "6",
        "numero": "9-112-012-0",
        "motorTipo": "par",
        "motorImpar": "9-112-011-2",
        "motorPar": "9-112-012-0",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Ex-Santa Catalina."]
      },
      "13": {
        "rama": "7",
        "numero": "9-112-013-8",
        "motorTipo": "impar",
        "motorImpar": "9-112-013-8",
        "motorPar": "9-112-014-6",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009; en servicio desde 04/10.", "Nuevo logo AVE.", "Ex-Santa Catalina."]
      },
      "14": {
        "rama": "7",
        "numero": "9-112-014-6",
        "motorTipo": "par",
        "motorImpar": "9-112-013-8",
        "motorPar": "9-112-014-6",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009; en servicio desde 04/10.", "Nuevo logo AVE.", "Ex-Santa Catalina."]
      },
      "15": {
        "rama": "8",
        "numero": "9-112-015-3",
        "motorTipo": "impar",
        "motorImpar": "9-112-015-3",
        "motorPar": "9-112-016-1",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Pruebas ERTMS N2 en LAV Palencia-León y antena Wi-Fi.", "Ex-Fuencarral → Santa Catalina.", "Nuevo logo AVE."]
      },
      "16": {
        "rama": "8",
        "numero": "9-112-016-1",
        "motorTipo": "par",
        "motorImpar": "9-112-015-3",
        "motorPar": "9-112-016-1",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Pruebas ERTMS N2 en LAV Palencia-León y antena Wi-Fi.", "Ex-Fuencarral → Santa Catalina.", "Nuevo logo AVE."]
      },
      "17": {
        "rama": "9",
        "numero": "9-112-017-9",
        "motorTipo": "impar",
        "motorImpar": "9-112-017-9",
        "motorPar": "9-112-018-7",
        "deposito": "Málaga",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Vinilos AVLO de 03/23 a 11/24.", "Interiorismo AVE.", "Ex-Santa Catalina."]
      },
      "18": {
        "rama": "9",
        "numero": "9-112-018-7",
        "motorTipo": "par",
        "motorImpar": "9-112-017-9",
        "motorPar": "9-112-018-7",
        "deposito": "Málaga",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Vinilos AVLO de 03/23 a 11/24.", "Interiorismo AVE.", "Ex-Santa Catalina."]
      },
      "19": {
        "rama": "10",
        "numero": "9-112-019-5",
        "motorTipo": "impar",
        "motorImpar": "9-112-019-5",
        "motorPar": "9-112-020-3",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Pruebas LAV Galicia 08/21.", "Vinilos bandera de España 11/10/24."]
      },
      "20": {
        "rama": "10",
        "numero": "9-112-020-3",
        "motorTipo": "par",
        "motorImpar": "9-112-019-5",
        "motorPar": "9-112-020-3",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En pruebas 2009.", "Pruebas LAV Galicia 08/21.", "Vinilos bandera de España 11/10/24."]
      },
      "21": {
        "rama": "11",
        "numero": "9-112-021-1",
        "motorTipo": "impar",
        "motorImpar": "9-112-021-1",
        "motorPar": "9-112-022-9",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina."]
      },
      "22": {
        "rama": "11",
        "numero": "9-112-022-9",
        "motorTipo": "par",
        "motorImpar": "9-112-021-1",
        "motorPar": "9-112-022-9",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina."]
      },
      "23": {
        "rama": "12",
        "numero": "9-112-023-7",
        "motorTipo": "impar",
        "motorImpar": "9-112-023-7",
        "motorPar": "9-112-024-5",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina."]
      },
      "24": {
        "rama": "12",
        "numero": "9-112-024-5",
        "motorTipo": "par",
        "motorImpar": "9-112-023-7",
        "motorPar": "9-112-024-5",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina."]
      },
      "25": {
        "rama": "13",
        "numero": "9-112-025-2",
        "motorTipo": "impar",
        "motorImpar": "9-112-025-2",
        "motorPar": "9-112-026-0",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Vinilos AVLO provisionales, con interior AVE en 02/22.", "Ex-Santa Catalina."]
      },
      "26": {
        "rama": "13",
        "numero": "9-112-026-0",
        "motorTipo": "par",
        "motorImpar": "9-112-025-2",
        "motorPar": "9-112-026-0",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Vinilos AVLO provisionales, con interior AVE en 02/22.", "Ex-Santa Catalina."]
      },
      "27": {
        "rama": "14",
        "numero": "9-112-027-8",
        "motorTipo": "impar",
        "motorImpar": "9-112-027-8",
        "motorPar": "9-112-028-6",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Nuevos logos AVE.", "Descarrilo por desprendimiento en Álora, 29/10/24.", "Ex-Santa Catalina.", "Vinilos LGTBQ+ 06/26."]
      },
      "28": {
        "rama": "14",
        "numero": "9-112-028-6",
        "motorTipo": "par",
        "motorImpar": "9-112-027-8",
        "motorPar": "9-112-028-6",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Nuevos logos AVE.", "Descarrilo por desprendimiento en Álora, 29/10/24.", "Ex-Santa Catalina.", "Vinilos LGTBQ+ 06/26."]
      },
      "29": {
        "rama": "15",
        "numero": "9-112-029-4",
        "motorTipo": "impar",
        "motorImpar": "9-112-029-4",
        "motorPar": "9-112-030-2",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina → Fuencarral desde 08/22."]
      },
      "30": {
        "rama": "15",
        "numero": "9-112-030-2",
        "motorTipo": "par",
        "motorImpar": "9-112-029-4",
        "motorPar": "9-112-030-2",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina → Fuencarral desde 08/22."]
      },
      "31": {
        "rama": "16",
        "numero": "9-112-031-0",
        "motorTipo": "impar",
        "motorImpar": "9-112-031-0",
        "motorPar": "9-112-032-8",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina."]
      },
      "32": {
        "rama": "16",
        "numero": "9-112-032-8",
        "motorTipo": "par",
        "motorImpar": "9-112-031-0",
        "motorPar": "9-112-032-8",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina."]
      },
      "33": {
        "rama": "17",
        "numero": "9-112-033-6",
        "motorTipo": "impar",
        "motorImpar": "9-112-033-6",
        "motorPar": "9-112-034-4",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Vinilo 10 años AVE Madrid-Valencia."]
      },
      "34": {
        "rama": "17",
        "numero": "9-112-034-4",
        "motorTipo": "par",
        "motorImpar": "9-112-033-6",
        "motorPar": "9-112-034-4",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Vinilo 10 años AVE Madrid-Valencia."]
      },
      "35": {
        "rama": "18",
        "numero": "9-112-035-1",
        "motorTipo": "impar",
        "motorImpar": "9-112-035-1",
        "motorPar": "9-112-036-9",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Logos 75 años Renfe.", "Tuvo vinilos en puertas APP Renfe.", "Vinilo 'Barcelona estrena Navidad, ¿vendrás?' en 2021.", "Nuevo logo AVE."]
      },
      "36": {
        "rama": "18",
        "numero": "9-112-036-9",
        "motorTipo": "par",
        "motorImpar": "9-112-035-1",
        "motorPar": "9-112-036-9",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Logos 75 años Renfe.", "Tuvo vinilos en puertas APP Renfe.", "Vinilo 'Barcelona estrena Navidad, ¿vendrás?' en 2021.", "Nuevo logo AVE."]
      },
      "37": {
        "rama": "19",
        "numero": "9-112-037-7",
        "motorTipo": "impar",
        "motorImpar": "9-112-037-7",
        "motorPar": "9-112-038-5",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Cerro Negro → Fuencarral 2015 para Madrid-León.", "En reforma AVLO desde 03/02/20.", "Estreno servicio AVLO 23/06/21."]
      },
      "38": {
        "rama": "19",
        "numero": "9-112-038-5",
        "motorTipo": "par",
        "motorImpar": "9-112-037-7",
        "motorPar": "9-112-038-5",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Cerro Negro → Fuencarral 2015 para Madrid-León.", "En reforma AVLO desde 03/02/20.", "Estreno servicio AVLO 23/06/21."]
      },
      "39": {
        "rama": "20",
        "numero": "9-112-039-3",
        "motorTipo": "impar",
        "motorImpar": "9-112-039-3",
        "motorPar": "9-112-040-1",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En preparación en La Sagra para AVLO, 09/19.", "Presentación como AVLO, 11/12/19."]
      },
      "40": {
        "rama": "20",
        "numero": "9-112-040-1",
        "motorTipo": "par",
        "motorImpar": "9-112-039-3",
        "motorPar": "9-112-040-1",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["En preparación en La Sagra para AVLO, 09/19.", "Presentación como AVLO, 11/12/19."]
      },
      "41": {
        "rama": "21",
        "numero": "9-112-041-9",
        "motorTipo": "impar",
        "motorImpar": "9-112-041-9",
        "motorPar": "9-112-042-7",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina → Fuencarral.", "Servicio AVLO (Morado) de 02/22 a 10/25."]
      },
      "42": {
        "rama": "21",
        "numero": "9-112-042-7",
        "motorTipo": "par",
        "motorImpar": "9-112-041-9",
        "motorPar": "9-112-042-7",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Santa Catalina → Fuencarral.", "Servicio AVLO (Morado) de 02/22 a 10/25."]
      },
      "43": {
        "rama": "22",
        "numero": "9-112-043-5",
        "motorTipo": "impar",
        "motorImpar": "9-112-043-5",
        "motorPar": "9-112-044-3",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["25/06/19: tren inaugural AVE Madrid-Granada.", "Ex-Santa Catalina."]
      },
      "44": {
        "rama": "22",
        "numero": "9-112-044-3",
        "motorTipo": "par",
        "motorImpar": "9-112-043-5",
        "motorPar": "9-112-044-3",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["25/06/19: tren inaugural AVE Madrid-Granada.", "Ex-Santa Catalina."]
      },
      "45": {
        "rama": "23",
        "numero": "9-112-045-0",
        "motorTipo": "impar",
        "motorImpar": "9-112-045-0",
        "motorPar": "9-112-046-8",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Nuevo logo AVE.", "Vinilos Sorolla 08/23.", "Ex-Santa Catalina."]
      },
      "46": {
        "rama": "23",
        "numero": "9-112-046-8",
        "motorTipo": "par",
        "motorImpar": "9-112-045-0",
        "motorPar": "9-112-046-8",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Nuevo logo AVE.", "Vinilos Sorolla 08/23.", "Ex-Santa Catalina."]
      },
      "47": {
        "rama": "24",
        "numero": "9-112-047-6",
        "motorTipo": "impar",
        "motorImpar": "9-112-047-6",
        "motorPar": "9-112-048-4",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Málaga."]
      },
      "48": {
        "rama": "24",
        "numero": "9-112-048-4",
        "motorTipo": "par",
        "motorImpar": "9-112-047-6",
        "motorPar": "9-112-048-4",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Málaga."]
      },
      "49": {
        "rama": "25",
        "numero": "9-112-049-2",
        "motorTipo": "impar",
        "motorImpar": "9-112-049-2",
        "motorPar": "9-112-050-0",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Logos 75 años Renfe.", "Ex-Santa Catalina.", "08/02/20: accidentada por invasión de vehículo en Villarrubia de Santiago.", "Transformación AVLO desde 21/03/20."]
      },
      "50": {
        "rama": "25",
        "numero": "9-112-050-0",
        "motorTipo": "par",
        "motorImpar": "9-112-049-2",
        "motorPar": "9-112-050-0",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Logos 75 años Renfe.", "Ex-Santa Catalina.", "08/02/20: accidentada por invasión de vehículo en Villarrubia de Santiago.", "Transformación AVLO desde 21/03/20."]
      },
      "51": {
        "rama": "26",
        "numero": "9-112-051-8",
        "motorTipo": "impar",
        "motorImpar": "9-112-051-8",
        "motorPar": "9-112-052-6",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Nuevo logo AVE.", "Ex-Málaga."]
      },
      "52": {
        "rama": "26",
        "numero": "9-112-052-6",
        "motorTipo": "par",
        "motorImpar": "9-112-051-8",
        "motorPar": "9-112-052-6",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Nuevo logo AVE.", "Ex-Málaga."]
      },
      "53": {
        "rama": "27",
        "numero": "9-112-053-4",
        "motorTipo": "impar",
        "motorImpar": "9-112-053-4",
        "motorPar": "9-112-054-2",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Tuvo vinilos Caballo Ganador.", "Transformación AVLO desde 09/03/20."]
      },
      "54": {
        "rama": "27",
        "numero": "9-112-054-2",
        "motorTipo": "par",
        "motorImpar": "9-112-053-4",
        "motorPar": "9-112-054-2",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Tuvo vinilos Caballo Ganador.", "Transformación AVLO desde 09/03/20."]
      },
      "55": {
        "rama": "28",
        "numero": "9-112-055-9",
        "motorTipo": "impar",
        "motorImpar": "9-112-055-9",
        "motorPar": "9-112-056-7",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["—"]
      },
      "56": {
        "rama": "28",
        "numero": "9-112-056-7",
        "motorTipo": "par",
        "motorImpar": "9-112-055-9",
        "motorPar": "9-112-056-7",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["—"]
      },
      "57": {
        "rama": "29",
        "numero": "9-112-057-5",
        "motorTipo": "impar",
        "motorImpar": "9-112-057-5",
        "motorPar": "9-112-058-3",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Transformación AVLO desde 09/03/20."]
      },
      "58": {
        "rama": "29",
        "numero": "9-112-058-3",
        "motorTipo": "par",
        "motorImpar": "9-112-057-5",
        "motorPar": "9-112-058-3",
        "deposito": "Málaga",
        "color": "Morado",
        "servicio": "AVLO",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Transformación AVLO desde 09/03/20."]
      },
      "59": {
        "rama": "30",
        "numero": "9-112-059-1",
        "motorTipo": "impar",
        "motorImpar": "9-112-059-1",
        "motorPar": "9-112-060-9",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Málaga → Fuencarral 2020.", "Pruebas LAV Galicia 08/21.", "Nuevos logos Renfe AVE 07/22."]
      },
      "60": {
        "rama": "30",
        "numero": "9-112-060-9",
        "motorTipo": "par",
        "motorImpar": "9-112-059-1",
        "motorPar": "9-112-060-9",
        "deposito": "Fuencarral",
        "color": "Blanco",
        "servicio": "AVE",
        "ano": 2009,
        "ancho": "1435",
        "notas": ["Ex-Málaga → Fuencarral 2020.", "Pruebas LAV Galicia 08/21.", "Nuevos logos Renfe AVE 07/22."]
      }
    }
  },
  "463": {
  "seriesName": "Serie 463 · Civia",
  "fabricante": "",
  "apodo": "Civia",
  "anoPuestaServicio": "2004-2008",
  "tipoMaterial": "Cercanías · Civia de 3 coches",
  "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
  "anchoVia": "1668 mm",
  "numeroRamas": 35,
  "velocidadMaxima": "120 km/h",
  "potencia": "1.400 kW",
  "longitud": "65,55 m",
  "peso": "105,8 t",
  "tension": "3.000 V cc",
  "traccion": "4 motores Siemens ITB2220-0JA03 · 350 kW por motor",
  "señalizacion": "ASFA",
  "composicion": "A1-A3-A1",
  "capacidad": "607 plazas · 169 sentadas",
  "plazasSentadas": "169",
  "numeroUnidades": "36 composiciones originales incluyendo el prototipo 199",
  "lotes": "Primer lote CAF: 001-015 + prototipo 199 · Segundo lote Alstom: 201-220",
  "generalNotes": [
    "Tren de Cercanías CIVIA formado por dos coches motores extremos y un remolque intermedio.",
    "El primer lote corresponde a CAF y comprende las ramas 001 a 015, además del prototipo 199 procedente de CAF Investigación.",
    "Composición 463: A1-A3-A1. El coche intermedio A3 es de piso bajo y está adaptado para el acceso de personas con movilidad reducida.",
    "Ancho de vía: 1.668 mm. Alimentación: 3.000 V en corriente continua. Velocidad máxima comercial: 120 km/h.",
    "Longitud aproximada: 65,55 m. Masa: 105,8 t. Potencia: 1.400 kW.",
    "La plataforma Civia es modular y permite formar composiciones de 2 a 5 coches; la serie 463 corresponde a la configuración de tres coches.",
    "Varias ramas del segundo lote fueron posteriormente transformadas a las series 464 y 465. La ficha de cada rama conserva su historial y muestra expresamente su numeración actual."
  ],
  "units": {
    "001": {
      "rama": "01",
      "lote": "Primer lote",
      "vehiculoBase": "001",
      "numero": "9-463-001-8",
      "vehiculosRama": [
        "9-463-001-8",
        "6-463-001-8",
        "9-463-501-7"
      ],
      "searchCodes": [
        "001",
        "001",
        "501"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2004,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "En servicio en Asturias desde 10/03/04. En Sevilla desde 10/02/08. Colores Renfe Op. Santander desde 10/09.",
        "Llanera 11/10. En reparación desde 08/22 hasta 13/02/23."
      ]
    },
    "002": {
      "rama": "02",
      "lote": "Primer lote",
      "vehiculoBase": "002",
      "numero": "9-463-002-6",
      "vehiculosRama": [
        "9-463-002-6",
        "6-463-002-6",
        "9-463-502-5"
      ],
      "searchCodes": [
        "002",
        "002",
        "502"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2004,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "En servicio en Asturias desde 19/03/04. Sevilla desde 10/02/08 → Irún desde 13/03/09 → Santander desde 10/09 → Santander 01/10.",
        "Asturias 12/09 → Santander 01/10 → Asturias 10/10 → Lagos 75 años Renfe."
      ]
    },
    "003": {
      "rama": "03",
      "lote": "Primer lote",
      "vehiculoBase": "003",
      "numero": "9-463-003-4",
      "vehiculosRama": [
        "9-463-003-4",
        "6-463-003-4",
        "9-463-503-3"
      ],
      "searchCodes": [
        "003",
        "003",
        "503"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2004,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "En servicio Asturias desde 03/04. Sevilla desde 10/02/08 → Asturias 11/09.",
        "Colores Renfe Op. Vinilo 102 desde 02/16. Descarrilo por argayo en túnel de Olloniego 22/01/16."
      ]
    },
    "004": {
      "rama": "04",
      "lote": "Primer lote",
      "vehiculoBase": "004",
      "numero": "9-463-004-0",
      "vehiculosRama": [
        "9-463-004-0",
        "6-463-004-0",
        "9-463-504-9"
      ],
      "searchCodes": [
        "004",
        "004",
        "504"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2004,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Ex-462-001. En servicio desde 31/10/06. Ex-Sevilla → Asturias, 11/09.",
        "Colores Renfe Op. Logos 75 años Renfe."
      ]
    },
    "005": {
      "rama": "05",
      "lote": "Primer lote",
      "vehiculoBase": "005",
      "numero": "9-463-005-9",
      "vehiculosRama": [
        "9-463-005-9",
        "6-463-005-9",
        "9-463-505-8"
      ],
      "searchCodes": [
        "005",
        "005",
        "505"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2004,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Ex-462-002. Colores Renfe Op. Asturias desde 10/02/08."
      ]
    },
    "006": {
      "rama": "06",
      "lote": "Primer lote",
      "vehiculoBase": "006",
      "numero": "9-463-006-7",
      "vehiculosRama": [
        "9-463-006-7",
        "6-463-006-7",
        "9-463-506-6"
      ],
      "searchCodes": [
        "006",
        "006",
        "506"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2004,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Ex-462-003. Colores Renfe Op. Asturias desde 10/02/08."
      ]
    },
    "007": {
      "rama": "07",
      "lote": "Primer lote",
      "vehiculoBase": "007",
      "numero": "9-463-007-5",
      "vehiculosRama": [
        "9-463-007-5",
        "6-463-007-5",
        "9-463-507-4"
      ],
      "searchCodes": [
        "007",
        "007",
        "507"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Testero carenado. Primer Civia fabricado en CAF-Santana."
      ]
    },
    "008": {
      "rama": "08",
      "lote": "Primer lote",
      "vehiculoBase": "008",
      "numero": "9-463-008-3",
      "vehiculosRama": [
        "9-463-008-3",
        "6-463-008-3",
        "9-463-508-2"
      ],
      "searchCodes": [
        "008",
        "008",
        "508"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "CAF-Santana. En Asturias desde 30/11/07. Vinilo 103 desde 02/16."
      ]
    },
    "009": {
      "rama": "09",
      "lote": "Primer lote",
      "vehiculoBase": "009",
      "numero": "9-463-009-1",
      "vehiculosRama": [
        "9-463-009-1",
        "6-463-009-1",
        "9-463-509-0"
      ],
      "searchCodes": [
        "009",
        "009",
        "509"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "CAF-Santana. En Asturias desde 03/01/08. Ex-Llanera → descarrilo en Pola de Lena → apartada Puigverd de Lleida → reparada y traslado a Asturias 02/07/13.",
        "Modificado carenado Scharfenberg."
      ]
    },
    "010": {
      "rama": "10",
      "lote": "Primer lote",
      "vehiculoBase": "010",
      "numero": "9-463-010-9",
      "vehiculosRama": [
        "9-463-010-9",
        "6-463-010-9",
        "9-463-510-8"
      ],
      "searchCodes": [
        "010",
        "010",
        "510"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "En servicio 02/08. Colores Renfe Op. CAF-Santana. Descarrilo por desprendimiento en Pola de Lena en 03/13."
      ]
    },
    "011": {
      "rama": "11",
      "lote": "Primer lote",
      "vehiculoBase": "011",
      "numero": "9-463-011-7",
      "vehiculosRama": [
        "9-463-011-7",
        "6-463-011-7",
        "9-463-511-6"
      ],
      "searchCodes": [
        "011",
        "011",
        "511"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "En servicio desde 02/08. Descarrilo en Soto del Rey 23/01/25."
      ]
    },
    "012": {
      "rama": "12",
      "lote": "Primer lote",
      "vehiculoBase": "012",
      "numero": "9-463-012-5",
      "vehiculosRama": [
        "9-463-012-5",
        "6-463-012-5",
        "9-463-512-4"
      ],
      "searchCodes": [
        "012",
        "012",
        "512"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "En servicio desde 02/08."
      ]
    },
    "013": {
      "rama": "13",
      "lote": "Primer lote",
      "vehiculoBase": "013",
      "numero": "9-463-013-3",
      "vehiculosRama": [
        "9-463-013-3",
        "6-463-013-3",
        "9-463-513-2"
      ],
      "searchCodes": [
        "013",
        "013",
        "513"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Ex-Asturias desde 14/02/08 → Zaragoza desde 06/08 → Llanera 10/10. Llegó a tener M en color amarillo.",
        "Descarrilo por argayo 29/12/17."
      ]
    },
    "014": {
      "rama": "14",
      "lote": "Primer lote",
      "vehiculoBase": "014",
      "numero": "9-463-014-1",
      "vehiculosRama": [
        "9-463-014-1",
        "6-463-014-1",
        "9-463-514-0"
      ],
      "searchCodes": [
        "014",
        "014",
        "514"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Entregado 03/08."
      ]
    },
    "015": {
      "rama": "15",
      "lote": "Primer lote",
      "vehiculoBase": "015",
      "numero": "9-463-015-8",
      "vehiculosRama": [
        "9-463-015-8",
        "6-463-015-8",
        "9-463-515-7"
      ],
      "searchCodes": [
        "015",
        "015",
        "515"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "CAF-Irún. Entregado 03/08. Asturias → Zaragoza desde 06/08 → Llanera 10/10.",
        "Colisión con tronco (Protesta minera) Serín 14/06/12. De nuevo en servicio 06/13."
      ]
    },
    "199": {
      "rama": "199 (prototipo)",
      "lote": "Prototipo CAF",
      "vehiculoBase": "199",
      "numero": "9-463-199-0",
      "vehiculosRama": [
        "9-463-199-0",
        "7-463-199-0",
        "9-463-699-9"
      ],
      "searchCodes": [
        "199",
        "199",
        "699"
      ],
      "deposito": "Zaragoza",
      "color": "Cercanías",
      "red": "Zaragoza",
      "ano": 2009,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Ex-462-004/504 (no circuló con esa numeración) → 462-099/599 «CAF Investigación».",
        "Ampliado a 463 en 2009. Autorizada su circulación comercial 09/03/10. Ex-Zaragoza → Asturias, desde 09/10 → Zaragoza desde 09/21.",
        "Cedida a CAF para investigación de hidrógeno, 11/21. Color azul. Devuelta a Renfe Operadora. Decoración Cercanías con puertas PMR rojas 09/25."
      ]
    },
    "201": {
      "rama": "01",
      "lote": "Segundo lote",
      "vehiculoBase": "201",
      "numero": "9-463-201-4",
      "vehiculosRama": [
        "9-463-201-4",
        "6-463-201-4",
        "9-463-701-3"
      ],
      "searchCodes": [
        "201",
        "201",
        "701"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. En servicio desde 01/07. Barcelona hasta 11/10 → Zaragoza.",
        "Logos 75 años Renfe. Refuerzos Fallas 2017 y 2018. Hizo pruebas en Bilbao (2018)."
      ]
    },
    "202": {
      "rama": "02",
      "lote": "Segundo lote",
      "vehiculoBase": "202",
      "numero": "9-463-202-2",
      "vehiculosRama": [
        "9-463-202-2",
        "6-463-202-2",
        "9-463-702-1"
      ],
      "searchCodes": [
        "202",
        "202",
        "702"
      ],
      "deposito": "",
      "color": "Cercanías",
      "red": "",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. En servicio desde 01/07. Barcelona hasta 11/10 → Zaragoza → Valencia 15/03/16 hasta 20/03/16 para refuerzos Fallas → BCN 12.",
        "Baja 12/16 para reforma a 464-230."
      ],
      "transformadaA": "464-230",
      "estadoActual": "Transformada a la serie 464, unidad 464-230."
    },
    "203": {
      "rama": "03",
      "lote": "Segundo lote",
      "vehiculoBase": "203",
      "numero": "9-463-203-0",
      "vehiculosRama": [
        "9-463-203-0",
        "7-463-203-0",
        "9-463-703-9"
      ],
      "searchCodes": [
        "203",
        "203",
        "703"
      ],
      "deposito": "",
      "color": "Cercanías",
      "red": "",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Reforma a 464-229. Ex-Cercanías BCN (Vilanova). Ex-Zaragoza; en Valencia desde 03/18.",
        "Baja 22/01/17 por transformación a 464-229."
      ],
      "transformadaA": "464-229",
      "estadoActual": "Transformada a la serie 464, unidad 464-229."
    },
    "204": {
      "rama": "04",
      "lote": "Segundo lote",
      "vehiculoBase": "204",
      "numero": "9-463-204-8",
      "vehiculosRama": [
        "9-463-204-8",
        "6-463-204-8",
        "9-463-704-7"
      ],
      "searchCodes": [
        "204",
        "204",
        "704"
      ],
      "deposito": "",
      "color": "Cercanías",
      "red": "",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Ex-Valencia hasta 14/01/08 → Sevilla Cádiz hasta 10/10 → Zaragoza hasta 11/10 → Barcelona (Vilanova).",
        "Reforma para 464-228 desde 10/15."
      ],
      "transformadaA": "464-228",
      "estadoActual": "Transformada a la serie 464, unidad 464-228."
    },
    "205": {
      "rama": "05",
      "lote": "Segundo lote",
      "vehiculoBase": "205",
      "numero": "9-463-205-5",
      "vehiculosRama": [
        "9-463-205-5",
        "7-463-205-5",
        "9-463-705-4"
      ],
      "searchCodes": [
        "205",
        "205",
        "705"
      ],
      "deposito": "Llanera",
      "color": "Cercanías",
      "red": "Asturias",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Ex-Barcelona → Santander → Llanera desde 02/10 → Vilanova (BCN) → Llanera desde 09/21."
      ]
    },
    "206": {
      "rama": "06",
      "lote": "Segundo lote",
      "vehiculoBase": "206",
      "numero": "9-463-206-3",
      "vehiculosRama": [
        "9-463-206-3",
        "6-463-206-3",
        "9-463-706-2"
      ],
      "searchCodes": [
        "206",
        "206",
        "706"
      ],
      "deposito": "",
      "color": "Cercanías",
      "red": "",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Barcelona → Santander → Sevilla → Zaragoza, 06/12 → Cádiz, desde 09/12 → Sevilla, desde 04/14.",
        "Reformada a 464-226."
      ],
      "transformadaA": "464-226",
      "estadoActual": "Transformada a la serie 464, unidad 464-226."
    },
    "207": {
      "rama": "07",
      "lote": "Segundo lote",
      "vehiculoBase": "207",
      "numero": "9-463-207-1",
      "vehiculosRama": [
        "9-463-207-1",
        "6-463-207-1",
        "9-463-707-0"
      ],
      "searchCodes": [
        "207",
        "207",
        "707"
      ],
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "red": "Barcelona",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Valencia hasta 14/01/08 → Cádiz hasta 10/10 → Zaragoza hasta 11/10 → Barcelona.",
        "1ª unidad en colores Rodalies 03/22."
      ]
    },
    "208": {
      "rama": "08",
      "lote": "Segundo lote",
      "vehiculoBase": "208",
      "numero": "9-463-208-1",
      "vehiculosRama": [
        "9-463-208-1",
        "7-463-208-9",
        "9-463-708-8"
      ],
      "searchCodes": [
        "208",
        "208",
        "708"
      ],
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "red": "Barcelona",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. 2ª unidad en colores Rodalies 07/22."
      ]
    },
    "209": {
      "rama": "09",
      "lote": "Segundo lote",
      "vehiculoBase": "209",
      "numero": "9-463-209-7",
      "vehiculosRama": [
        "9-463-209-7",
        "7-463-209-7",
        "9-463-709-6"
      ],
      "searchCodes": [
        "209",
        "209",
        "709"
      ],
      "deposito": "",
      "color": "Cercanías",
      "red": "",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Entra en servicio 09/07. Ex-Cercanías Barcelona.",
        "Reformada a 464-231 desde 06/18."
      ],
      "transformadaA": "464-231",
      "estadoActual": "Transformada a la serie 464, unidad 464-231."
    },
    "210": {
      "rama": "10",
      "lote": "Segundo lote",
      "vehiculoBase": "210",
      "numero": "9-463-210-5",
      "vehiculosRama": [
        "9-463-210-5",
        "6-463-210-5",
        "9-463-710-4"
      ],
      "searchCodes": [
        "210",
        "210",
        "710"
      ],
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "red": "Barcelona",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Ex-Barcelona → Sevilla (02/11) → BCN."
      ]
    },
    "211": {
      "rama": "11",
      "lote": "Segundo lote",
      "vehiculoBase": "211",
      "numero": "9-463-211-3",
      "vehiculosRama": [
        "9-463-211-3",
        "7-463-211-3",
        "9-463-711-2"
      ],
      "searchCodes": [
        "211",
        "211",
        "711"
      ],
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "red": "Barcelona",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Entregado 10/07. Colores Rodalies 2022. Vinilos Turisme Barcelona 04/23."
      ]
    },
    "212": {
      "rama": "12",
      "lote": "Segundo lote",
      "vehiculoBase": "212",
      "numero": "9-463-212-1",
      "vehiculosRama": [
        "9-463-212-1",
        "7-463-212-1",
        "9-463-712-0"
      ],
      "searchCodes": [
        "212",
        "212",
        "712"
      ],
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "red": "Barcelona",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. → 02/23 colores Rodalies."
      ]
    },
    "213": {
      "rama": "13",
      "lote": "Segundo lote",
      "vehiculoBase": "213",
      "numero": "9-463-213-9",
      "vehiculosRama": [
        "9-463-213-9",
        "7-463-213-9",
        "9-463-713-8"
      ],
      "searchCodes": [
        "213",
        "213",
        "713"
      ],
      "deposito": "Zaragoza",
      "color": "Rojo/Blanco",
      "red": "Zaragoza",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. En pruebas 11/07. Colores Rodalies desde 28/09/23. A Asturias 13/10/23 → Zaragoza 06/24.",
        "Hizo pruebas en Bilbao cuando se trasladó a Zaragoza 06/24."
      ]
    },
    "214": {
      "rama": "14",
      "lote": "Segundo lote",
      "vehiculoBase": "214",
      "numero": "9-463-214-7",
      "vehiculosRama": [
        "9-463-214-7",
        "7-463-214-7",
        "9-463-714-6"
      ],
      "searchCodes": [
        "214",
        "214",
        "714"
      ],
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "red": "Barcelona",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. En pruebas 11/07. Colores Rodalies 02/24."
      ]
    },
    "215": {
      "rama": "15",
      "lote": "Segundo lote",
      "vehiculoBase": "215",
      "numero": "9-463-215-4",
      "vehiculosRama": [
        "9-463-215-4",
        "6-463-215-4",
        "9-463-715-3"
      ],
      "searchCodes": [
        "215",
        "215",
        "715"
      ],
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "red": "Barcelona",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. En pruebas 12/07. Ex-Sevilla → Vilanova. Colores Rodalies 01/24."
      ]
    },
    "216": {
      "rama": "16",
      "lote": "Segundo lote",
      "vehiculoBase": "216",
      "numero": "9-463-216-2",
      "vehiculosRama": [
        "9-463-216-2",
        "6-463-216-2",
        "9-463-716-1"
      ],
      "searchCodes": [
        "216",
        "216",
        "716"
      ],
      "deposito": "",
      "color": "Cercanías",
      "red": "",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Entregado 13/02/08. En servicio Sevilla.",
        "Transformado en 465-267 desde 27/11/11."
      ],
      "transformadaA": "465-267",
      "estadoActual": "Transformada a la serie 465, unidad 465-267."
    },
    "217": {
      "rama": "17",
      "lote": "Segundo lote",
      "vehiculoBase": "217",
      "numero": "9-463-217-0",
      "vehiculosRama": [
        "9-463-217-0",
        "6-463-217-0",
        "9-463-717-9"
      ],
      "searchCodes": [
        "217",
        "217",
        "717"
      ],
      "deposito": "",
      "color": "Cercanías",
      "red": "",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Ex-Cádiz → reformado a 464-227.",
        "Transformado a 464-227 en Vilanova 02/16."
      ],
      "transformadaA": "464-227",
      "estadoActual": "Transformada a la serie 464, unidad 464-227."
    },
    "218": {
      "rama": "18",
      "lote": "Segundo lote",
      "vehiculoBase": "218",
      "numero": "9-463-218-8",
      "vehiculosRama": [
        "9-463-218-8",
        "6-463-218-8",
        "9-463-718-7"
      ],
      "searchCodes": [
        "218",
        "218",
        "718"
      ],
      "deposito": "Zaragoza",
      "color": "Cercanías",
      "red": "Zaragoza",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Colores Renfe Op. Jerez de la Frontera → Zaragoza. Refuerzo Fallas 2017 y 2018 → Llanera 12/18 → Zaragoza 04/24.",
        "Accidente en Cortes de Navarra 22/05/25."
      ]
    },
    "219": {
      "rama": "19",
      "lote": "Segundo lote",
      "vehiculoBase": "219",
      "numero": "9-463-219-6",
      "vehiculosRama": [
        "9-463-219-6",
        "6-463-219-6",
        "9-463-719-5"
      ],
      "searchCodes": [
        "219",
        "219",
        "719"
      ],
      "deposito": "",
      "color": "Cercanías",
      "red": "",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Jerez de la Frontera (Sevilla/Cádiz) → 03/13 Barcelona.",
        "Reformada a 464-225."
      ],
      "transformadaA": "464-225",
      "estadoActual": "Transformada a la serie 464, unidad 464-225."
    },
    "220": {
      "rama": "20",
      "lote": "Segundo lote",
      "vehiculoBase": "220",
      "numero": "9-463-220-4",
      "vehiculosRama": [
        "9-463-220-4",
        "6-463-220-4",
        "9-463-720-3"
      ],
      "searchCodes": [
        "220",
        "220",
        "720"
      ],
      "deposito": "",
      "color": "Cercanías",
      "red": "",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor extremos + 1 remolque intermedio",
      "composicionRama": "Coche motor extremo + remolque intermedio + coche motor extremo",
      "notas": [
        "Ex-Sevilla → Barcelona. Circuló con 4 coches por Barcelona 03/13.",
        "Renumerado a 464-224."
      ],
      "transformadaA": "464-224",
      "estadoActual": "Transformada a la serie 464, unidad 464-224."
    }
  }
},
  "464": {
  "seriesName": "Serie 464 · Civia",
  "fabricante": "Alstom",
  "apodo": "Civia",
  "anoPuestaServicio": "2003-2010",
  "tipoMaterial": "Cercanías · Civia de 4 coches",
  "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
  "anchoVia": "1668 mm",
  "numeroRamas": 37,
  "velocidadMaxima": "120 km/h",
  "potencia": "2.100 kW",
  "longitud": "80,30 m",
  "peso": "131,5 t",
  "tension": "3.000 V cc",
  "traccion": "6 motores de tracción · 320 kW por motor",
  "señalizacion": "ASFA digital / ERTMS / preinstalación LZB",
  "composicion": "A1-A2-A3-A1",
  "capacidad": "832 plazas · 223 sentadas + 4 PMR",
  "plazasSentadas": "223 + 4 PMR",
  "numeroUnidades": "37 ramas: 6 preserie CAF + 31 ramas registradas en las tablas de la subserie 200.",
  "lotes": "Primer lote CAF: 001-006 (todas transformadas a 465) · Segundo lote Alstom: 201-231, incluyendo ramas procedentes de 463",
  "generalNotes": [
    "Unidades CIVIA de cuatro coches, con dos coches motores extremos y dos remolques intermedios.",
    "PRIMER LOTE · CAF: ramas 001 a 006, preserie. Todas fueron posteriormente transformadas a la serie 465 mediante el añadido de un coche intermedio.",
    "La composición de la serie 464 es A1-A2-A3-A1. El remolque A3 dispone de piso bajo y facilita el acceso de personas con movilidad reducida.",
    "Ancho de vía: 1.668 mm. Alimentación: 3.000 V en corriente continua. Velocidad máxima comercial: 120 km/h.",
    "Longitud aproximada: 80,30 m. Masa: 131,5 t. Potencia nominal: 2.100 kW. Capacidad aproximada: 832 plazas, 223 sentadas.",
    "Las ramas 224 a 231 de las tablas proceden de la transformación de unidades de la serie 463 mediante el añadido del remolque intermedio correspondiente.",
  ],
  "units": {
    "001": {
      "rama": "01",
      "lote": "Primer lote",
      "vehiculoBase": "001",
      "numero": "9-464-001-7",
      "vehiculosRama": [
        "9-464-001-7",
        "7-464-001-7",
        "7-464-501-6",
        "9-464-501-6"
      ],
      "searchCodes": [
        "001",
        "001",
        "501",
        "501"
      ],
      "fabricante": "CAF",
      "ano": 2003,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-Madrid. Reformado en 465-004 mediante el añadido de un coche intermedio."
      ],
      "transformadaA": "465-004",
      "estadoActual": "Transformada a la serie 465, unidad 465-004."
    },
    "002": {
      "rama": "02",
      "lote": "Primer lote",
      "vehiculoBase": "002",
      "numero": "9-464-002-5",
      "vehiculosRama": [
        "9-464-002-5",
        "7-464-002-5",
        "7-464-502-4",
        "9-464-502-4"
      ],
      "searchCodes": [
        "002",
        "002",
        "502",
        "502"
      ],
      "fabricante": "CAF",
      "ano": 2003,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-Madrid. Reformado en 465-005 mediante el añadido de un remolque intermedio."
      ],
      "transformadaA": "465-005",
      "estadoActual": "Transformada a la serie 465, unidad 465-005."
    },
    "003": {
      "rama": "03",
      "lote": "Primer lote",
      "vehiculoBase": "003",
      "numero": "9-464-003-3",
      "vehiculosRama": [
        "9-464-003-3",
        "7-464-003-3",
        "7-464-503-2",
        "9-464-503-2"
      ],
      "searchCodes": [
        "003",
        "003",
        "503",
        "503"
      ],
      "fabricante": "CAF",
      "ano": 2003,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-Madrid. Reformado en 465-006 mediante el añadido de un coche intermedio."
      ],
      "transformadaA": "465-006",
      "estadoActual": "Transformada a la serie 465, unidad 465-006."
    },
    "004": {
      "rama": "04",
      "lote": "Primer lote",
      "vehiculoBase": "004",
      "numero": "9-464-004-1",
      "vehiculosRama": [
        "9-464-004-1",
        "7-464-004-1",
        "7-464-504-0",
        "9-464-504-0"
      ],
      "searchCodes": [
        "004",
        "004",
        "504",
        "504"
      ],
      "fabricante": "CAF",
      "ano": 2003,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-Madrid. Reformado en 465-007 mediante el añadido de un coche intermedio."
      ],
      "transformadaA": "465-007",
      "estadoActual": "Transformada a la serie 465, unidad 465-007."
    },
    "005": {
      "rama": "05",
      "lote": "Primer lote",
      "vehiculoBase": "005",
      "numero": "9-464-005-8",
      "vehiculosRama": [
        "9-464-005-8",
        "7-464-005-8",
        "7-464-505-7",
        "9-464-505-7"
      ],
      "searchCodes": [
        "005",
        "005",
        "505",
        "505"
      ],
      "fabricante": "CAF",
      "ano": 2003,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-Madrid. Reformado en 465-008 mediante el añadido de un coche intermedio."
      ],
      "transformadaA": "465-008",
      "estadoActual": "Transformada a la serie 465, unidad 465-008."
    },
    "006": {
      "rama": "06",
      "lote": "Primer lote",
      "vehiculoBase": "006",
      "numero": "9-464-006-6",
      "vehiculosRama": [
        "9-464-006-6",
        "7-464-006-6",
        "7-464-506-5",
        "9-464-506-5"
      ],
      "searchCodes": [
        "006",
        "006",
        "506",
        "506"
      ],
      "fabricante": "CAF",
      "ano": 2003,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Reformada para la 465-003 mediante el añadido de un coche. Ex-Cercanías Atocha."
      ],
      "transformadaA": "465-003",
      "estadoActual": "Transformada a la serie 465, unidad 465-003."
    },
    "201": {
      "rama": "01",
      "lote": "Segundo lote",
      "vehiculoBase": "201",
      "numero": "9-464-201-3",
      "vehiculosRama": [
        "9-464-201-3",
        "7-464-201-3",
        "7-464-701-2",
        "9-464-701-2"
      ],
      "searchCodes": [
        "201",
        "201",
        "701",
        "701"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. Entra en servicio 01/07. Ex-Barcelona>>Sevilla>>Zaragoza>>Málaga 2019. M amarilla"
      ]
    },
    "202": {
      "rama": "02",
      "lote": "Segundo lote",
      "vehiculoBase": "202",
      "numero": "9-464-202-1",
      "vehiculosRama": [
        "9-464-202-1",
        "7-464-202-1",
        "7-464-702-0",
        "9-464-702-0"
      ],
      "searchCodes": [
        "202",
        "202",
        "702",
        "702"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Sevilla",
      "color": "Cercanías",
      "red": "Sevilla",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. En servicio 01/07. Ex-BCN>>Málaga>>Sevilla 2019"
      ]
    },
    "203": {
      "rama": "03",
      "lote": "Segundo lote",
      "vehiculoBase": "203",
      "numero": "9-464-203-9",
      "vehiculosRama": [
        "9-464-203-9",
        "7-464-203-9",
        "7-464-703-8",
        "9-464-703-8"
      ],
      "searchCodes": [
        "203",
        "203",
        "703",
        "703"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. Ex-Mataró>>Sevilla>>Málaga 2019"
      ]
    },
    "204": {
      "rama": "04",
      "lote": "Segundo lote",
      "vehiculoBase": "204",
      "numero": "9-464-204-7",
      "vehiculosRama": [
        "9-464-204-7",
        "7-464-204-7",
        "7-464-704-6",
        "9-464-704-6"
      ],
      "searchCodes": [
        "204",
        "204",
        "704",
        "704"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Valencia",
      "color": "Cercanías",
      "red": "Valencia",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. Ex-Mataró>>Sevilla desde 12/17>>Zaragoza desde 03/18>>Valencia desde 04/18"
      ]
    },
    "205": {
      "rama": "05",
      "lote": "Segundo lote",
      "vehiculoBase": "205",
      "numero": "9-464-205-4",
      "vehiculosRama": [
        "9-464-205-4",
        "7-464-205-4",
        "7-464-705-3",
        "9-464-705-3"
      ],
      "searchCodes": [
        "205",
        "205",
        "705",
        "705"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Valencia",
      "color": "Cercanías",
      "red": "Valencia",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. (C) Ex-Mataró. Ex-Sevilla>>Valencia desde 12/17>>Cedida a Zaragoza desde 03/24 a 03/04/24>>De nuevo en Valencia."
      ]
    },
    "206": {
      "rama": "06",
      "lote": "Segundo lote",
      "vehiculoBase": "206",
      "numero": "9-464-206-2",
      "vehiculosRama": [
        "9-464-206-2",
        "7-464-206-2",
        "7-464-706-1",
        "9-464-706-1"
      ],
      "searchCodes": [
        "206",
        "206",
        "706",
        "706"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Sevilla",
      "color": "Cercanías",
      "red": "Sevilla",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. (C). Mataró hasta 27/04/18. Estuvo de pruebas de gálibo en la C-5 madrileña del 27 al 30/04/18. Ex-Sevilla>>Cádiz"
      ]
    },
    "207": {
      "rama": "07",
      "lote": "Segundo lote",
      "vehiculoBase": "207",
      "numero": "9-464-207-0",
      "vehiculosRama": [
        "9-464-207-0",
        "7-464-207-0",
        "7-464-707-9",
        "9-464-707-9"
      ],
      "searchCodes": [
        "207",
        "207",
        "707",
        "707"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. (C) Ex-Mataró>>Málaga 2019"
      ]
    },
    "208": {
      "rama": "08",
      "lote": "Segundo lote",
      "vehiculoBase": "208",
      "numero": "9-464-208-8",
      "vehiculosRama": [
        "9-464-208-8",
        "7-464-208-8",
        "7-464-708-7",
        "9-464-708-7"
      ],
      "searchCodes": [
        "208",
        "208",
        "708",
        "708"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Sevilla",
      "color": "Cercanías",
      "red": "Sevilla",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. (C) Ex-Mataró. Trasladado a Zaragoza 19/12/18. Visto realizando Regionales entre Zaragoza y Vitoria, 23/12/18. Sevilla 2019"
      ]
    },
    "209": {
      "rama": "09",
      "lote": "Segundo lote",
      "vehiculoBase": "209",
      "numero": "9-464-209-6",
      "vehiculosRama": [
        "9-464-209-6",
        "6-464-209-6",
        "6-464-709-5",
        "9-464-709-5"
      ],
      "searchCodes": [
        "209",
        "209",
        "709",
        "709"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Valencia",
      "color": "Cercanías",
      "red": "Valencia",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. (C). Ex-Mataró. Ex-Sevilla>>Valencia 12/17"
      ]
    },
    "210": {
      "rama": "10",
      "lote": "Segundo lote",
      "vehiculoBase": "210",
      "numero": "9-464-210-4",
      "vehiculosRama": [
        "9-464-210-4",
        "6-464-210-4",
        "6-464-710-3",
        "9-464-710-3"
      ],
      "searchCodes": [
        "210",
        "210",
        "710",
        "710"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. (C) Ex-Mataró"
      ]
    },
    "211": {
      "rama": "11",
      "lote": "Segundo lote",
      "vehiculoBase": "211",
      "numero": "9-464-211-2",
      "vehiculosRama": [
        "9-464-211-2",
        "6-464-211-2",
        "6-464-711-1",
        "9-464-711-1"
      ],
      "searchCodes": [
        "211",
        "211",
        "711",
        "711"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Sevilla",
      "color": "Cercanías",
      "red": "Sevilla",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Comenzó pruebas en 09/07. Colores Renfe Op. (C). Ex-Mataró>>Sevilla>>Cádiz"
      ]
    },
    "212": {
      "rama": "12",
      "lote": "Segundo lote",
      "vehiculoBase": "212",
      "numero": "9-464-212-0",
      "vehiculosRama": [
        "9-464-212-0",
        "7-464-212-0",
        "7-464-712-9",
        "9-464-712-9"
      ],
      "searchCodes": [
        "212",
        "212",
        "712",
        "712"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Valencia",
      "color": "Cercanías",
      "red": "Valencia",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-Valencia. Colores Renfe Op. En servicio. Ex-Málaga>>Valencia desde 02/18."
      ]
    },
    "213": {
      "rama": "13",
      "lote": "Segundo lote",
      "vehiculoBase": "213",
      "numero": "9-464-213-8",
      "vehiculosRama": [
        "9-464-213-8",
        "7-464-213-8",
        "7-464-713-7",
        "9-464-713-7"
      ],
      "searchCodes": [
        "213",
        "213",
        "713",
        "713"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Cádiz",
      "color": "Cercanías",
      "red": "Cádiz",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-Valencia. Colores Renfe Op. En servicio. Ex-Málaga>>Sevilla. Logos 75 años Renfe. Ex-Cádiz"
      ]
    },
    "214": {
      "rama": "14",
      "lote": "Segundo lote",
      "vehiculoBase": "214",
      "numero": "9-464-214-6",
      "vehiculosRama": [
        "9-464-214-6",
        "7-464-214-6",
        "7-464-714-5",
        "9-464-714-5"
      ],
      "searchCodes": [
        "214",
        "214",
        "714",
        "714"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Sevilla",
      "color": "Cercanías",
      "red": "Sevilla",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. En servicio. Ex-Valencia desde 05/09>>Sevilla-Málaga>>Sevilla>>Valencia. Ex-Valencia (en Zaragoza desde 03/18). Pruebas gálibo C-5 Madrid de 27 a 30/04/18."
      ]
    },
    "215": {
      "rama": "15",
      "lote": "Segundo lote",
      "vehiculoBase": "215",
      "numero": "9-464-215-3",
      "vehiculosRama": [
        "9-464-215-3",
        "6-464-215-3",
        "6-464-715-2",
        "9-464-715-2"
      ],
      "searchCodes": [
        "215",
        "215",
        "715",
        "715"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Sevilla",
      "color": "Cercanías",
      "red": "Sevilla",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. Ex-Sevilla/Málaga>>Mataró. Transformado a 465-268, otoño 2012."
      ],
      "transformadaA": "465-268",
      "estadoActual": "Transformada a la serie 465, unidad 465-268."
    },
    "216": {
      "rama": "16",
      "lote": "Segundo lote",
      "vehiculoBase": "216",
      "numero": "9-464-216-1",
      "vehiculosRama": [
        "9-464-216-1",
        "6-464-216-1",
        "6-464-716-0",
        "9-464-716-0"
      ],
      "searchCodes": [
        "216",
        "216",
        "716",
        "716"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. En servicio. Ex-Sevilla>>Málaga>>Sevilla"
      ]
    },
    "217": {
      "rama": "17",
      "lote": "Segundo lote",
      "vehiculoBase": "217",
      "numero": "9-464-217-9",
      "vehiculosRama": [
        "9-464-217-9",
        "7-464-217-9",
        "7-464-717-8",
        "9-464-717-8"
      ],
      "searchCodes": [
        "217",
        "217",
        "717",
        "717"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. Ex-Valencia>>Málaga>>Refuerzo Fallas Valencia 01/03/24>>Málaga 05/03/24"
      ]
    },
    "218": {
      "rama": "18",
      "lote": "Segundo lote",
      "vehiculoBase": "218",
      "numero": "9-464-218-7",
      "vehiculosRama": [
        "9-464-218-7",
        "7-464-218-7",
        "7-464-718-6",
        "9-464-718-6"
      ],
      "searchCodes": [
        "218",
        "218",
        "718",
        "718"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Cádiz",
      "color": "Cercanías",
      "red": "Cádiz",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. En servicio. Ex-Barcelona>>Sevilla>>Málaga"
      ]
    },
    "219": {
      "rama": "19",
      "lote": "Segundo lote",
      "vehiculoBase": "219",
      "numero": "9-464-219-5",
      "vehiculosRama": [
        "9-464-219-5",
        "7-464-219-5",
        "7-464-719-4",
        "9-464-719-4"
      ],
      "searchCodes": [
        "219",
        "219",
        "719",
        "719"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Valencia",
      "color": "Cercanías",
      "red": "Valencia",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. (C). Ex-Barcelona>>Sevilla desde 05/17>>Valencia desde 01/18>>Zaragoza desde 16/01/25>>Valencia desde 15/05/26"
      ]
    },
    "220": {
      "rama": "20",
      "lote": "Segundo lote",
      "vehiculoBase": "220",
      "numero": "9-464-220-3",
      "vehiculosRama": [
        "9-464-220-3",
        "7-464-220-3",
        "7-464-720-2",
        "9-464-720-2"
      ],
      "searchCodes": [
        "220",
        "220",
        "720",
        "720"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. En servicio. Ex-Barcelona. Ex-Valencia desde 05/09. Logos 75 años Renfe. Málaga>>Sevilla desde 10/21."
      ]
    },
    "221": {
      "rama": "21",
      "lote": "Segundo lote",
      "vehiculoBase": "221",
      "numero": "9-464-221-1",
      "vehiculosRama": [
        "9-464-221-1",
        "7-464-221-1",
        "7-464-721-0",
        "9-464-721-0"
      ],
      "searchCodes": [
        "221",
        "221",
        "721",
        "721"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. Ex-Barcelona desde 03/18>>Sevilla>>Málaga 2019"
      ]
    },
    "222": {
      "rama": "22",
      "lote": "Segundo lote",
      "vehiculoBase": "222",
      "numero": "9-464-222-9",
      "vehiculosRama": [
        "9-464-222-9",
        "7-464-222-9",
        "7-464-722-8",
        "9-464-722-8"
      ],
      "searchCodes": [
        "222",
        "222",
        "722",
        "722"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Cádiz",
      "color": "Cercanías",
      "red": "Cádiz",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. Ex-Mataró>>Cádiz"
      ]
    },
    "223": {
      "rama": "23",
      "lote": "Segundo lote",
      "vehiculoBase": "223",
      "numero": "9-464-223-7",
      "vehiculosRama": [
        "9-464-223-7",
        "7-464-223-7",
        "7-464-723-6",
        "9-464-723-6"
      ],
      "searchCodes": [
        "223",
        "223",
        "723",
        "723"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Sevilla",
      "color": "Cercanías",
      "red": "Sevilla",
      "estado": "En servicio",
      "ano": 2007,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Colores Renfe Op. Accidente con Talgo en Clot 19/01/12. (C). Ex-Barcelona desde 03/18. Ex-Sevilla"
      ]
    },
    "224": {
      "rama": "24",
      "lote": "Segundo lote",
      "vehiculoBase": "224",
      "numero": "9-464-224-5",
      "vehiculosRama": [
        "9-464-224-5",
        "6-464-224-5",
        "6-464-724-4",
        "9-464-724-4"
      ],
      "searchCodes": [
        "224",
        "224",
        "724",
        "724"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2013,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-463-220, añadido remolque intermedio (6-464-724-4), 2013. Colores Renfe Op. Barcelona>>Sevilla, desde 04/14>>Málaga, se añaden plazas poniendo todos los asientos en composición 2+2"
      ],
      "procedencia": "463-220",
      "estadoActual": "Procede de la serie 463; transformada a la serie 464, unidad 464-224."
    },
    "225": {
      "rama": "25",
      "lote": "Segundo lote",
      "vehiculoBase": "225",
      "numero": "9-464-225-2",
      "vehiculosRama": [
        "9-464-225-2",
        "6-464-225-2",
        "6-464-725-1",
        "9-464-725-1"
      ],
      "searchCodes": [
        "225",
        "225",
        "725",
        "725"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Cádiz",
      "color": "Cercanías",
      "red": "Cádiz",
      "estado": "En servicio",
      "ano": 2013,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-463-219, añadido remolque intermedio (6-464-725-1, del 2011), 10/13. Ex-Letra amarilla. Barcelona, hasta 28/10/14>>Zaragoza>>Cádiz>>Málaga desde 02/16>>Cádiz 2019>>Zaragoza desde 09/21>>Cádiz desde 10/24"
      ],
      "procedencia": "463-219",
      "estadoActual": "Procede de la serie 463; transformada a la serie 464, unidad 464-225."
    },
    "226": {
      "rama": "26",
      "lote": "Segundo lote",
      "vehiculoBase": "226",
      "numero": "9-464-226-0",
      "vehiculosRama": [
        "9-464-226-0",
        "6-464-226-0",
        "6-464-726-9",
        "9-464-726-9"
      ],
      "searchCodes": [
        "226",
        "226",
        "726",
        "726"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Cádiz",
      "color": "Cercanías",
      "red": "Cádiz",
      "estado": "En servicio",
      "ano": 2013,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-463-206, añadido remolque intermedio (6-464-726-9) Ex-Cádiz"
      ],
      "procedencia": "463-206",
      "estadoActual": "Procede de la serie 463; transformada a la serie 464, unidad 464-226."
    },
    "227": {
      "rama": "27",
      "lote": "Segundo lote",
      "vehiculoBase": "227",
      "numero": "9-464-227-8",
      "vehiculosRama": [
        "9-464-227-8",
        "6-464-227-8",
        "6-464-727-7",
        "9-464-727-7"
      ],
      "searchCodes": [
        "227",
        "227",
        "727",
        "727"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Málaga",
      "color": "Cercanías",
      "red": "Málaga",
      "estado": "En servicio",
      "ano": 2013,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-463-217, añadido remolque intermedio (6-464-727-7) 02/16. Ex-Vilanova. Logos 75 aniversario. Ex-Cádiz>>Málaga 03/24"
      ],
      "procedencia": "463-217",
      "estadoActual": "Procede de la serie 463; transformada a la serie 464, unidad 464-227."
    },
    "228": {
      "rama": "28",
      "lote": "Segundo lote",
      "vehiculoBase": "228",
      "numero": "9-464-228-6",
      "vehiculosRama": [
        "9-464-228-6",
        "6-464-228-6",
        "6-464-728-5",
        "9-464-728-5"
      ],
      "searchCodes": [
        "228",
        "228",
        "728",
        "728"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Sevilla",
      "color": "Cercanías",
      "red": "Sevilla",
      "estado": "En servicio",
      "ano": 2013,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-463-204, añadido remolque intermedio (6-464-728-5) Ex-Barcelona>>Sevilla>>Málaga, se añaden plazas poniendo todos los asientos en composición 2+2"
      ],
      "procedencia": "463-204",
      "estadoActual": "Procede de la serie 463; transformada a la serie 464, unidad 464-228."
    },
    "229": {
      "rama": "29",
      "lote": "Segundo lote",
      "vehiculoBase": "229",
      "numero": "9-464-229-4",
      "vehiculosRama": [
        "9-464-229-4",
        "6-464-229-4",
        "6-464-729-3",
        "9-464-729-3"
      ],
      "searchCodes": [
        "229",
        "229",
        "729",
        "729"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Valencia",
      "color": "Cercanías",
      "red": "Valencia",
      "estado": "En servicio",
      "ano": 2013,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-463-203, añadido remolque intermedio (6-464-729-3). Ex-Barcelona>>Sevilla desde 12/16>>Valencia desde 02/18."
      ],
      "procedencia": "463-203",
      "estadoActual": "Procede de la serie 463; transformada a la serie 464, unidad 464-229."
    },
    "230": {
      "rama": "30",
      "lote": "Segundo lote",
      "vehiculoBase": "230",
      "numero": "9-464-230-2",
      "vehiculosRama": [
        "9-464-230-2",
        "6-464-230-2",
        "6-464-730-1",
        "9-464-730-1"
      ],
      "searchCodes": [
        "230",
        "230",
        "730",
        "730"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Valencia",
      "color": "Cercanías",
      "red": "Valencia",
      "estado": "En servicio",
      "ano": 2013,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-463-202, añadido remolque intermedio (6-464-730-1) desde 04/17. Ex-Barcelona hasta 05/17>>Sevilla>>Valencia desde 12/17. Logos 75 años Renfe."
      ],
      "procedencia": "463-202",
      "estadoActual": "Procede de la serie 463; transformada a la serie 464, unidad 464-230."
    },
    "231": {
      "rama": "31",
      "lote": "Segundo lote",
      "vehiculoBase": "231",
      "numero": "9-464-231-0",
      "vehiculosRama": [
        "9-464-231-0",
        "7-464-231-0",
        "7-464-731-9",
        "9-464-731-9"
      ],
      "searchCodes": [
        "231",
        "231",
        "731",
        "731"
      ],
      "fabricante": "Alstom",
      "une": "Cercanías",
      "deposito": "Zaragoza",
      "color": "Cercanías",
      "red": "Zaragoza",
      "estado": "En servicio",
      "ano": 2013,
      "ancho": "1668",
      "numeroCoches": "4 coches · 2 coches motor extremos + 2 remolques intermedios",
      "composicionRama": "Coche motor + remolque + remolque + coche motor",
      "notas": [
        "Ex-463-209 hasta 06/18. Vilanova>>Mataró>>Zaragoza>>Asturias>>Zaragoza 01/11/23. Pruebas en Bilbao 10/24.>>Valencia 16/01/25>>Zaragoza 11/05/26"
      ],
      "procedencia": "463-209",
      "estadoActual": "Procede de la serie 463; transformada a la serie 464, unidad 464-231."
    }
  }
},
  "449": {
    "seriesName": "Serie 449",
    "fabricante": "CAF",
    "apodo": "Besugo",
    "anoPuestaServicio": "2009",
    "tipoMaterial": "Media Distancia",
    "numeroCoches": "5 coches · 2 coches motor + 3 remolques",
    "anchoVia": "1668 mm",
    "numeroRamas": 57,
    "velocidadMaxima": "160 km/h (3 kV c.c.)",
    "potencia": "2.400 kW",
    "longitud": "98.970 mm",
    "peso": "172 t en tara",
    "tension": "3.000 V c.c.",
    "traccion": "6 motores eléctricos asíncronos · 400 kW por motor",
    "señalizacion": "ASFA Digital · GSM-R · Tren-Tierra",
    "composicion": "A1-A4-A3-A5-A2",
    "capacidad": "260 plazas sentadas + 1 PMR",
    "plazasSentadas": "260 + 1 PMR",
    "numeroUnidades": "57 automotores eléctricos",
    "generalNotes": [
      "Automotores eléctricos de Media Distancia fabricados por CAF para servicios regionales en líneas electrificadas.",
      "La serie está formada por 57 unidades de cinco coches con bogies compartidos y mando múltiple, pudiendo acoplarse hasta tres unidades (15 coches).",
      "La composición mínima es A1-A4-A3-A5-A2. El coche intermedio A3 dispone de piso bajo y está adaptado para personas con movilidad reducida.",
      "La alimentación es de 3.000 V c.c. y el ancho de vía de 1.668 mm. Las unidades incorporaron preinstalación para una posible adaptación a ancho UIC.",
      "La velocidad máxima es de 160 km/h y la potencia total instalada de tracción es de 2.400 kW, mediante seis motores eléctricos de 400 kW.",
      "La unidad dispone de 260 plazas sentadas más una plaza PMR, en clase única, además de espacio para bicicletas y servicios adaptados.",
      "El contrato original contempló 23 unidades exclusivamente de ancho ibérico y otras 34 preparadas para ancho UIC; finalmente las 57 unidades quedaron configuradas de forma homogénea para ancho ibérico.",
      "La serie 449 es una adaptación para Media Distancia de la plataforma Civia y comparte elementos de diseño y motorización con ella."
    ],
    "units": {
      "1": {
        "rama": "01",
        "vehiculoBase": "001",
        "numero": "9-449-001-7",
        "vehiculosRama": [
          "9-449-001-7",
          "6-449-701-2",
          "6-449-001-7",
          "6-449-501-6",
          "9-449-501-6"
        ],
        "remolquesRama": ["449-001", "449-701", "449-501"],
        "searchCodes": [
          "001",
          "701",
          "001",
          "501",
          "501"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "14/07/2009",
        "ano": 2008,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "En pruebas desde 29/09/08."
        ]
      },
      "2": {
        "rama": "02",
        "vehiculoBase": "002",
        "numero": "9-449-002-5",
        "vehiculosRama": [
          "9-449-002-5",
          "6-449-702-0",
          "6-449-002-5",
          "6-449-502-4",
          "9-449-502-4"
        ],
        "remolquesRama": ["449-002", "449-702", "449-502"],
        "searchCodes": [
          "002",
          "702",
          "002",
          "502",
          "502"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "16/07/2009",
        "ano": 2008,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "En pruebas desde 10/08. Ex-León"
        ]
      },
      "3": {
        "rama": "03",
        "vehiculoBase": "003",
        "numero": "9-449-003-3",
        "vehiculosRama": [
          "9-449-003-3",
          "6-449-703-8",
          "6-449-003-3",
          "6-449-503-2",
          "9-449-503-2"
        ],
        "remolquesRama": ["449-003", "449-703", "449-503"],
        "searchCodes": [
          "003",
          "703",
          "003",
          "503",
          "503"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2008,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "En pruebas desde 20/04/09."
        ]
      },
      "4": {
        "rama": "04",
        "vehiculoBase": "004",
        "numero": "9-449-004-1",
        "vehiculosRama": [
          "9-449-004-1",
          "6-449-704-6",
          "6-449-004-1",
          "6-449-504-0",
          "9-449-504-0"
        ],
        "remolquesRama": ["449-004", "449-704", "449-504"],
        "searchCodes": [
          "004",
          "704",
          "004",
          "504",
          "504"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "14/07/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "5": {
        "rama": "05",
        "vehiculoBase": "005",
        "numero": "9-449-005-8",
        "vehiculosRama": [
          "9-449-005-8",
          "6-449-705-3",
          "6-449-005-8",
          "6-449-505-7",
          "9-449-505-7"
        ],
        "remolquesRama": ["449-005", "449-705", "449-505"],
        "searchCodes": [
          "005",
          "705",
          "005",
          "505",
          "505"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "14/07/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-Fuencarral"
        ]
      },
      "6": {
        "rama": "06",
        "vehiculoBase": "006",
        "numero": "9-449-006-6",
        "vehiculosRama": [
          "9-449-006-6",
          "6-449-706-1",
          "6-449-006-6",
          "6-449-506-5",
          "9-449-506-5"
        ],
        "remolquesRama": ["449-006", "449-706", "449-506"],
        "searchCodes": [
          "006",
          "706",
          "006",
          "506",
          "506"
        ],
        "deposito": "León",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "16/07/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Logos 75 años Renfe."
        ]
      },
      "7": {
        "rama": "07",
        "vehiculoBase": "007",
        "numero": "9-449-007-4",
        "vehiculosRama": [
          "9-449-007-4",
          "6-449-707-9",
          "6-449-007-4",
          "6-449-507-3",
          "9-449-507-3"
        ],
        "remolquesRama": ["449-007", "449-707", "449-507"],
        "searchCodes": [
          "007",
          "707",
          "007",
          "507",
          "507"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "8": {
        "rama": "08",
        "vehiculoBase": "008",
        "numero": "9-449-008-2",
        "vehiculosRama": [
          "9-449-008-2",
          "6-449-708-7",
          "6-449-008-2",
          "6-449-508-1",
          "9-449-508-1"
        ],
        "remolquesRama": ["449-008", "449-708", "449-508"],
        "searchCodes": [
          "008",
          "708",
          "008",
          "508",
          "508"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-Fuencarral"
        ]
      },
      "9": {
        "rama": "09",
        "vehiculoBase": "009",
        "numero": "9-449-009-0",
        "vehiculosRama": [
          "9-449-009-0",
          "6-449-709-5",
          "6-449-009-0",
          "6-449-509-9",
          "9-449-509-9"
        ],
        "remolquesRama": ["449-009", "449-709", "449-509"],
        "searchCodes": [
          "009",
          "709",
          "009",
          "509",
          "509"
        ],
        "deposito": "León",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "16/07/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "1ª Unidad en hacer el trayecto Vigo-León"
        ]
      },
      "10": {
        "rama": "10",
        "vehiculoBase": "010",
        "numero": "9-449-010-8",
        "vehiculosRama": [
          "9-449-010-8",
          "6-449-710-3",
          "6-449-010-8",
          "6-449-510-7",
          "9-449-510-7"
        ],
        "remolquesRama": ["449-010", "449-710", "449-510"],
        "searchCodes": [
          "010",
          "710",
          "010",
          "510",
          "510"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "11": {
        "rama": "11",
        "vehiculoBase": "011",
        "numero": "9-449-011-6",
        "vehiculosRama": [
          "9-449-011-6",
          "6-449-711-1",
          "6-449-011-6",
          "6-449-511-5",
          "9-449-511-5"
        ],
        "remolquesRama": ["449-011", "449-711", "449-511"],
        "searchCodes": [
          "011",
          "711",
          "011",
          "511",
          "511"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "14/07/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "12": {
        "rama": "12",
        "vehiculoBase": "012",
        "numero": "9-449-012-4",
        "vehiculosRama": [
          "9-449-012-4",
          "6-449-712-9",
          "6-449-012-4",
          "6-449-512-3",
          "9-449-512-3"
        ],
        "remolquesRama": ["449-012", "449-712", "449-512"],
        "searchCodes": [
          "012",
          "712",
          "012",
          "512",
          "512"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "14/07/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-Fuencarral>>Valencia"
        ]
      },
      "13": {
        "rama": "13",
        "vehiculoBase": "013",
        "numero": "9-449-013-2",
        "vehiculosRama": [
          "9-449-013-2",
          "6-449-713-7",
          "6-449-013-2",
          "6-449-513-1",
          "9-449-513-1"
        ],
        "remolquesRama": ["449-013", "449-713", "449-513"],
        "searchCodes": [
          "013",
          "713",
          "013",
          "513",
          "513"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Logos Junta Andalucía."
        ]
      },
      "14": {
        "rama": "14",
        "vehiculoBase": "014",
        "numero": "9-449-014-0",
        "vehiculosRama": [
          "9-449-014-0",
          "6-449-714-5",
          "6-449-014-0",
          "6-449-514-9",
          "9-449-514-9"
        ],
        "remolquesRama": ["449-014", "449-714", "449-514"],
        "searchCodes": [
          "014",
          "714",
          "014",
          "514",
          "514"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "14/07/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": []
      },
      "15": {
        "rama": "15",
        "vehiculoBase": "015",
        "numero": "9-449-015-7",
        "vehiculosRama": [
          "9-449-015-7",
          "6-449-715-2",
          "6-449-015-7",
          "6-449-515-6",
          "9-449-515-6"
        ],
        "remolquesRama": ["449-015", "449-715", "449-515"],
        "searchCodes": [
          "015",
          "715",
          "015",
          "515",
          "515"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "16": {
        "rama": "16",
        "vehiculoBase": "016",
        "numero": "9-449-016-5",
        "vehiculosRama": [
          "9-449-016-5",
          "6-449-716-0",
          "6-449-016-5",
          "6-449-516-4",
          "9-449-516-4"
        ],
        "remolquesRama": ["449-016", "449-716", "449-516"],
        "searchCodes": [
          "016",
          "716",
          "016",
          "516",
          "516"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-Sevilla>> Barcelona 10/09."
        ]
      },
      "17": {
        "rama": "17",
        "vehiculoBase": "017",
        "numero": "9-449-017-3",
        "vehiculosRama": [
          "9-449-017-3",
          "6-449-717-8",
          "6-449-017-3",
          "6-449-517-2",
          "9-449-517-2"
        ],
        "remolquesRama": ["449-017", "449-717", "449-517"],
        "searchCodes": [
          "017",
          "717",
          "017",
          "517",
          "517"
        ],
        "deposito": "León",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "14/07/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Logos Junta Andalucía. Ex-Sevilla>>Fuencarral 07/13"
        ]
      },
      "18": {
        "rama": "18",
        "vehiculoBase": "018",
        "numero": "9-449-018-1",
        "vehiculosRama": [
          "9-449-018-1",
          "6-449-718-6",
          "6-449-018-1",
          "6-449-518-0",
          "9-449-518-0"
        ],
        "remolquesRama": ["449-018", "449-718", "449-518"],
        "searchCodes": [
          "018",
          "718",
          "018",
          "518",
          "518"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "28/10/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "19": {
        "rama": "19",
        "vehiculoBase": "019",
        "numero": "9-449-019-9",
        "vehiculosRama": [
          "9-449-019-9",
          "6-449-719-4",
          "6-449-019-9",
          "6-449-519-8",
          "9-449-519-8"
        ],
        "remolquesRama": ["449-019", "449-719", "449-519"],
        "searchCodes": [
          "019",
          "719",
          "019",
          "519",
          "519"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Apartada taller Humanes por accidente>> En servicio."
        ]
      },
      "20": {
        "rama": "20",
        "vehiculoBase": "020",
        "numero": "9-449-020-7",
        "vehiculosRama": [
          "9-449-020-7",
          "6-449-720-2",
          "6-449-020-7",
          "6-449-520-6",
          "9-449-520-6"
        ],
        "remolquesRama": ["449-020", "449-720", "449-520"],
        "searchCodes": [
          "020",
          "720",
          "020",
          "520",
          "520"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "21": {
        "rama": "21",
        "vehiculoBase": "021",
        "numero": "9-449-021-5",
        "vehiculosRama": [
          "9-449-021-5",
          "6-449-721-0",
          "6-449-021-5",
          "6-449-521-4",
          "9-449-521-4"
        ],
        "remolquesRama": ["449-021", "449-721", "449-521"],
        "searchCodes": [
          "021",
          "721",
          "021",
          "521",
          "521"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "22": {
        "rama": "22",
        "vehiculoBase": "022",
        "numero": "9-449-022-3",
        "vehiculosRama": [
          "9-449-022-3",
          "6-449-722-8",
          "6-449-022-3",
          "6-449-522-2",
          "9-449-522-2"
        ],
        "remolquesRama": ["449-022", "449-722", "449-522"],
        "searchCodes": [
          "022",
          "722",
          "022",
          "522",
          "522"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "28/10/2009",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Descarrilo haciendo maniobras en Barcelona-SAC (19/02/17)"
        ]
      },
      "23": {
        "rama": "23",
        "vehiculoBase": "023",
        "numero": "9-449-023-1",
        "vehiculosRama": [
          "9-449-023-1",
          "6-449-723-6",
          "6-449-023-1",
          "6-449-523-0",
          "9-449-523-0"
        ],
        "remolquesRama": ["449-023", "449-723", "449-523"],
        "searchCodes": [
          "023",
          "723",
          "023",
          "523",
          "523"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Logos 75 años Renfe."
        ]
      },
      "24": {
        "rama": "24",
        "vehiculoBase": "024",
        "numero": "9-449-024-9",
        "vehiculosRama": [
          "9-449-024-9",
          "6-449-724-4",
          "6-449-024-9",
          "6-449-524-8",
          "9-449-524-8"
        ],
        "remolquesRama": ["449-024", "449-724", "449-524"],
        "searchCodes": [
          "024",
          "724",
          "024",
          "524",
          "524"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": []
      },
      "25": {
        "rama": "25",
        "vehiculoBase": "025",
        "numero": "9-449-025-6",
        "vehiculosRama": [
          "9-449-025-6",
          "6-449-725-1",
          "6-449-025-6",
          "6-449-525-5",
          "9-449-525-5"
        ],
        "remolquesRama": ["449-025", "449-725", "449-525"],
        "searchCodes": [
          "025",
          "725",
          "025",
          "525",
          "525"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Accidente en PN entre Bolaños y Almagro (Ciudad Real), 16/11/17. Apartado Fuencarral>> En servicio 12/18."
        ]
      },
      "26": {
        "rama": "26",
        "vehiculoBase": "026",
        "numero": "9-449-026-4",
        "vehiculosRama": [
          "9-449-026-4",
          "6-449-726-9",
          "6-449-026-4",
          "6-449-526-3",
          "9-449-526-3"
        ],
        "remolquesRama": ["449-026", "449-726", "449-526"],
        "searchCodes": [
          "026",
          "726",
          "026",
          "526",
          "526"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "27": {
        "rama": "27",
        "vehiculoBase": "027",
        "numero": "9-449-027-2",
        "vehiculosRama": [
          "9-449-027-2",
          "6-449-727-7",
          "6-449-027-2",
          "6-449-527-1",
          "9-449-527-1"
        ],
        "remolquesRama": ["449-027", "449-727", "449-527"],
        "searchCodes": [
          "027",
          "727",
          "027",
          "527",
          "527"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "28": {
        "rama": "28",
        "vehiculoBase": "028",
        "numero": "9-449-028-0",
        "vehiculosRama": [
          "9-449-028-0",
          "6-449-728-5",
          "6-449-028-0",
          "6-449-528-9",
          "9-449-528-9"
        ],
        "remolquesRama": ["449-028", "449-728", "449-528"],
        "searchCodes": [
          "028",
          "728",
          "028",
          "528",
          "528"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-BCN SAC>> Valencia, desde 05/13>>>Bcn SAC."
        ]
      },
      "29": {
        "rama": "29",
        "vehiculoBase": "029",
        "numero": "9-449-029-8",
        "vehiculosRama": [
          "9-449-029-8",
          "6-449-729-3",
          "6-449-029-8",
          "6-449-529-7",
          "9-449-529-7"
        ],
        "remolquesRama": ["449-029", "449-729", "449-529"],
        "searchCodes": [
          "029",
          "729",
          "029",
          "529",
          "529"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Nuevo tapizado de asientos con piel sintética (2022)"
        ]
      },
      "30": {
        "rama": "30",
        "vehiculoBase": "030",
        "numero": "9-449-030-6",
        "vehiculosRama": [
          "9-449-030-6",
          "6-449-730-1",
          "6-449-030-6",
          "6-449-530-5",
          "9-449-530-5"
        ],
        "remolquesRama": ["449-030", "449-730", "449-530"],
        "searchCodes": [
          "030",
          "730",
          "030",
          "530",
          "530"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-BCN SAC>> Valencia, desde 05/13. Logos 75 años Renfe.>> BCN-SAC."
        ]
      },
      "31": {
        "rama": "31",
        "vehiculoBase": "031",
        "numero": "9-449-031-4",
        "vehiculosRama": [
          "9-449-031-4",
          "6-449-731-9",
          "6-449-031-4",
          "6-449-531-3",
          "9-449-531-3"
        ],
        "remolquesRama": ["449-031", "449-731", "449-531"],
        "searchCodes": [
          "031",
          "731",
          "031",
          "531",
          "531"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Logos 75 años Renfe."
        ]
      },
      "32": {
        "rama": "32",
        "vehiculoBase": "032",
        "numero": "9-449-032-2",
        "vehiculosRama": [
          "9-449-032-2",
          "6-449-732-7",
          "6-449-032-2",
          "6-449-532-1",
          "9-449-532-1"
        ],
        "remolquesRama": ["449-032", "449-732", "449-532"],
        "searchCodes": [
          "032",
          "732",
          "032",
          "532",
          "532"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "33": {
        "rama": "33",
        "vehiculoBase": "033",
        "numero": "9-449-033-0",
        "vehiculosRama": [
          "9-449-033-0",
          "6-449-733-5",
          "6-449-033-0",
          "6-449-533-9",
          "9-449-533-9"
        ],
        "remolquesRama": ["449-033", "449-733", "449-533"],
        "searchCodes": [
          "033",
          "733",
          "033",
          "533",
          "533"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": []
      },
      "34": {
        "rama": "34",
        "vehiculoBase": "034",
        "numero": "9-449-034-8",
        "vehiculosRama": [
          "9-449-034-8",
          "6-449-734-3",
          "6-449-034-8",
          "6-449-534-7",
          "9-449-534-7"
        ],
        "remolquesRama": ["449-034", "449-734", "449-534"],
        "searchCodes": [
          "034",
          "734",
          "034",
          "534",
          "534"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": []
      },
      "35": {
        "rama": "35",
        "vehiculoBase": "035",
        "numero": "9-449-035-5",
        "vehiculosRama": [
          "9-449-035-5",
          "6-449-735-0",
          "6-449-035-5",
          "6-449-535-4",
          "9-449-535-4"
        ],
        "remolquesRama": ["449-035", "449-735", "449-535"],
        "searchCodes": [
          "035",
          "735",
          "035",
          "535",
          "535"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": []
      },
      "36": {
        "rama": "36",
        "vehiculoBase": "036",
        "numero": "9-449-036-3",
        "vehiculosRama": [
          "9-449-036-3",
          "6-449-736-8",
          "6-449-036-3",
          "6-449-536-2",
          "9-449-536-2"
        ],
        "remolquesRama": ["449-036", "449-736", "449-536"],
        "searchCodes": [
          "036",
          "736",
          "036",
          "536",
          "536"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-BCN-SAC"
        ]
      },
      "37": {
        "rama": "37",
        "vehiculoBase": "037",
        "numero": "9-449-037-1",
        "vehiculosRama": [
          "9-449-037-1",
          "6-449-737-6",
          "6-449-037-1",
          "6-449-537-0",
          "9-449-537-0"
        ],
        "remolquesRama": ["449-037", "449-737", "449-537"],
        "searchCodes": [
          "037",
          "737",
          "037",
          "537",
          "537"
        ],
        "deposito": "León",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Logos Junta Andalucía>>Sin logos. Ex-Sevilla>>Fuencarral. Descarrilo Robledo Chavela tras tormenta, 17/09/20"
        ]
      },
      "38": {
        "rama": "38",
        "vehiculoBase": "038",
        "numero": "9-449-038-9",
        "vehiculosRama": [
          "9-449-038-9",
          "6-449-738-4",
          "6-449-038-9",
          "6-449-538-8",
          "9-449-538-8"
        ],
        "remolquesRama": ["449-038", "449-738", "449-538"],
        "searchCodes": [
          "038",
          "738",
          "038",
          "538",
          "538"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "39": {
        "rama": "39",
        "vehiculoBase": "039",
        "numero": "9-449-039-7",
        "vehiculosRama": [
          "9-449-039-7",
          "6-449-739-2",
          "6-449-039-7",
          "6-449-539-6",
          "9-449-539-6"
        ],
        "remolquesRama": ["449-039", "449-739", "449-539"],
        "searchCodes": [
          "039",
          "739",
          "039",
          "539",
          "539"
        ],
        "deposito": "León",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Arrollamiento de árboles entre Zegama y Alsasua, 13/02/17. Visto coche 449-039-7 en 449.041 en sustitución de coche 449-041-3, 07/06/18. Ex-Fuencarral."
        ]
      },
      "40": {
        "rama": "40",
        "vehiculoBase": "040",
        "numero": "9-449-040-5",
        "vehiculosRama": [
          "9-449-040-5",
          "6-449-740-0",
          "6-449-040-5",
          "6-449-540-4",
          "9-449-540-4"
        ],
        "remolquesRama": ["449-040", "449-740", "449-540"],
        "searchCodes": [
          "040",
          "740",
          "040",
          "540",
          "540"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "41": {
        "rama": "41",
        "vehiculoBase": "041",
        "numero": "9-449-041-3",
        "vehiculosRama": [
          "9-449-041-3",
          "6-449-741-8",
          "6-449-041-3",
          "6-449-541-2",
          "9-449-541-2"
        ],
        "remolquesRama": ["449-041", "449-741", "449-541"],
        "searchCodes": [
          "041",
          "741",
          "041",
          "541",
          "541"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Visto coche 449-039-7 en sustitución de coche 449-041-3, 07/06/18. Arrollamiento Sanchidrian 19/10/17. Apartada Fuencarral. De nuevo en servicio, 09/20."
        ]
      },
      "42": {
        "rama": "42",
        "vehiculoBase": "042",
        "numero": "9-449-042-1",
        "vehiculosRama": [
          "9-449-042-1",
          "6-449-742-6",
          "6-449-042-1",
          "6-449-542-0",
          "9-449-542-0"
        ],
        "remolquesRama": ["449-042", "449-742", "449-542"],
        "searchCodes": [
          "042",
          "742",
          "042",
          "542",
          "542"
        ],
        "deposito": "BCN-SAC",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "43": {
        "rama": "43",
        "vehiculoBase": "043",
        "numero": "9-449-043-9",
        "vehiculosRama": [
          "9-449-043-9",
          "6-449-743-4",
          "6-449-043-9",
          "6-449-543-8",
          "9-449-543-8"
        ],
        "remolquesRama": ["449-043", "449-743", "449-543"],
        "searchCodes": [
          "043",
          "743",
          "043",
          "543",
          "543"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-Sevilla. Apartada Sta. Justa desde 28/08/23 para reparación por colisión>> Traslado a Fuencarral>> En servicio 05/24."
        ]
      },
      "44": {
        "rama": "44",
        "vehiculoBase": "044",
        "numero": "9-449-044-7",
        "vehiculosRama": [
          "9-449-044-7",
          "6-449-744-2",
          "6-449-044-7",
          "6-449-544-6",
          "9-449-544-6"
        ],
        "remolquesRama": ["449-044", "449-744", "449-544"],
        "searchCodes": [
          "044",
          "744",
          "044",
          "544",
          "544"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Logos Junta Andalucía>>Sin logos.>>Ex-Sevilla>>Madrid desde 14/12/23"
        ]
      },
      "45": {
        "rama": "45",
        "vehiculoBase": "045",
        "numero": "9-449-045-4",
        "vehiculosRama": [
          "9-449-045-4",
          "6-449-745-9",
          "6-449-045-4",
          "6-449-545-3",
          "9-449-545-3"
        ],
        "remolquesRama": ["449-045", "449-745", "449-545"],
        "searchCodes": [
          "045",
          "745",
          "045",
          "545",
          "545"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-León"
        ]
      },
      "46": {
        "rama": "46",
        "vehiculoBase": "046",
        "numero": "9-449-046-2",
        "vehiculosRama": [
          "9-449-046-2",
          "6-449-746-7",
          "6-449-046-2",
          "6-449-546-1",
          "9-449-546-1"
        ],
        "remolquesRama": ["449-046", "449-746", "449-546"],
        "searchCodes": [
          "046",
          "746",
          "046",
          "546",
          "546"
        ],
        "deposito": "León",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-Fuencarral"
        ]
      },
      "47": {
        "rama": "47",
        "vehiculoBase": "047",
        "numero": "9-449-047-0",
        "vehiculosRama": [
          "9-449-047-0",
          "6-449-747-5",
          "6-449-047-0",
          "6-449-547-9",
          "9-449-547-9"
        ],
        "remolquesRama": ["449-047", "449-747", "449-547"],
        "searchCodes": [
          "047",
          "747",
          "047",
          "547",
          "547"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "48": {
        "rama": "48",
        "vehiculoBase": "048",
        "numero": "9-449-048-8",
        "vehiculosRama": [
          "9-449-048-8",
          "6-449-748-3",
          "6-449-048-8",
          "6-449-548-7",
          "9-449-548-7"
        ],
        "remolquesRama": ["449-048", "449-748", "449-548"],
        "searchCodes": [
          "048",
          "748",
          "048",
          "548",
          "548"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Logos Junta Andalucía. Ex-Sevilla>>Fuencarral 07/13>>Sevilla"
        ]
      },
      "49": {
        "rama": "49",
        "vehiculoBase": "049",
        "numero": "9-449-049-6",
        "vehiculosRama": [
          "9-449-049-6",
          "6-449-749-1",
          "6-449-049-6",
          "6-449-549-5",
          "9-449-549-5"
        ],
        "remolquesRama": ["449-049", "449-749", "449-549"],
        "searchCodes": [
          "049",
          "749",
          "049",
          "549",
          "549"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": []
      },
      "50": {
        "rama": "50",
        "vehiculoBase": "050",
        "numero": "9-449-050-4",
        "vehiculosRama": [
          "9-449-050-4",
          "6-449-750-9",
          "6-449-050-4",
          "6-449-550-3",
          "9-449-550-3"
        ],
        "remolquesRama": ["449-050", "449-750", "449-550"],
        "searchCodes": [
          "050",
          "750",
          "050",
          "550",
          "550"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-Sevilla>> Fuencarral>> Sevilla"
        ]
      },
      "51": {
        "rama": "51",
        "vehiculoBase": "051",
        "numero": "9-449-051-2",
        "vehiculosRama": [
          "9-449-051-2",
          "6-449-751-7",
          "6-449-051-2",
          "6-449-551-1",
          "9-449-551-1"
        ],
        "remolquesRama": ["449-051", "449-751", "449-551"],
        "searchCodes": [
          "051",
          "751",
          "051",
          "551",
          "551"
        ],
        "deposito": "León",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-León>>Fuencarral"
        ]
      },
      "52": {
        "rama": "52",
        "vehiculoBase": "052",
        "numero": "9-449-052-0",
        "vehiculosRama": [
          "9-449-052-0",
          "6-449-752-5",
          "6-449-052-0",
          "6-449-552-9",
          "9-449-552-9"
        ],
        "remolquesRama": ["449-052", "449-752", "449-552"],
        "searchCodes": [
          "052",
          "752",
          "052",
          "552",
          "552"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Ex-Fuencarral>>BCN-SAC"
        ]
      },
      "53": {
        "rama": "53",
        "vehiculoBase": "053",
        "numero": "9-449-053-8",
        "vehiculosRama": [
          "9-449-053-8",
          "6-449-753-3",
          "6-449-053-8",
          "6-449-553-7",
          "9-449-553-7"
        ],
        "remolquesRama": ["449-053", "449-753", "449-553"],
        "searchCodes": [
          "053",
          "753",
          "053",
          "553",
          "553"
        ],
        "deposito": "Sevilla",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Logos 75 años Renfe."
        ]
      },
      "54": {
        "rama": "54",
        "vehiculoBase": "054",
        "numero": "9-449-054-6",
        "vehiculosRama": [
          "9-449-054-6",
          "6-449-754-1",
          "6-449-054-6",
          "6-449-554-5",
          "9-449-554-5"
        ],
        "remolquesRama": ["449-054", "449-754", "449-554"],
        "searchCodes": [
          "054",
          "754",
          "054",
          "554",
          "554"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": []
      },
      "55": {
        "rama": "55",
        "vehiculoBase": "055",
        "numero": "9-449-055-3",
        "vehiculosRama": [
          "9-449-055-3",
          "6-449-755-8",
          "6-449-055-3",
          "6-449-555-2",
          "9-449-555-2"
        ],
        "remolquesRama": ["449-055", "449-755", "449-555"],
        "searchCodes": [
          "055",
          "755",
          "055",
          "555",
          "555"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "Descarrilo por inundación entre La Encina-Almansa 12/06/24."
        ]
      },
      "56": {
        "rama": "56",
        "vehiculoBase": "056",
        "numero": "9-449-056-1",
        "vehiculosRama": [
          "9-449-056-1",
          "6-449-756-6",
          "6-449-056-1",
          "6-449-556-0",
          "9-449-556-0"
        ],
        "remolquesRama": ["449-056", "449-756", "449-556"],
        "searchCodes": [
          "056",
          "756",
          "056",
          "556",
          "556"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": [
          "-"
        ]
      },
      "57": {
        "rama": "57",
        "vehiculoBase": "057",
        "numero": "9-449-057-9",
        "vehiculosRama": [
          "9-449-057-9",
          "6-449-757-4",
          "6-449-057-9",
          "6-449-557-8",
          "9-449-557-8"
        ],
        "remolquesRama": ["449-057", "449-757", "449-557"],
        "searchCodes": [
          "057",
          "757",
          "057",
          "557",
          "557"
        ],
        "deposito": "Fuencarral",
        "color": "Blanco",
        "estado": "En servicio",
        "puestaServicio": "",
        "ano": 2009,
        "ancho": "1668",
        "composicionRama": "Coche motor A1 + remolque A4 + remolque A3 (piso bajo) + remolque A5 + coche motor A2",
        "notas": []
      }
    }
  },
  "801": {
    "seriesName": "Serie 801 · Trambahía",
    "fabricante": "CAF-Santana (Linares)",
    "modelo": "CAF Urbos TT",
    "apodo": "Trambahía",
    "anoPuestaServicio": "2022",
    "tipoMaterial": "Tren-tranvía · Trambahía de Cádiz",
    "numeroCoches": "3 coches · 2 remolques con cabina + 1 coche motor intermedio",
    "anchoVia": "1668 mm (adaptable a 1435 mm)",
    "numeroRamas": 7,
    "velocidadMaxima": "100 km/h (70 km/h con 750 Vcc)",
    "potencia": "900 kW",
    "longitud": "38,114 m (M-R-Rc)",
    "peso": "67,79 t en orden de marcha",
    "tension": "3.000 / 750 Vcc",
    "traccion": "6 motores de tracción trifásicos asíncronos · 150 kW por motor",
    "señalizacion": "ASFA en el tramo interurbano · señalización lateral luminosa y marcha a la vista con prioridad semafórica en los tramos urbanos · sistemas de seguridad ferroviaria de Adif en la RFIG Sevilla-Cádiz",
    "composicion": "Bo' + 2'Bo' + Bo'",
    "plazasSentadas": "84",
    "capacidad": "227 viajeros en ocupación normal · 299 a 6 viajeros/m²",
    "generalNotes": [
      "Siete trenes de tres coches fabricados por CAF en Linares para la red de tren-tranvía de la Bahía de Cádiz.",
      "Son tren-tranvía capaces de circular tanto por la red tranviaria como por la Red Ferroviaria de Interés General gestionada por ADIF en la entrada a Cádiz.",
      "Toda la serie está construida en ancho ibérico de 1.668 mm, incluido el tramo tranviario, y los ejes de los bogies están preparados para un futuro cambio a ancho internacional.",
      "Las siete unidades son bitensión: 750 Vcc en el trazado tranviario y 3.000 Vcc en la infraestructura ferroviaria, con un único pantógrafo. El cambio de tensión es semiautomático.",
      "Disponen de puertas a dos alturas para adaptarse a los andenes ferroviarios y tranviarios, y cuentan con sistemas de seguridad adecuados para ambos tipos de red.",
      "La velocidad máxima alcanza 100 km/h en la vía ferroviaria y en los tramos interurbanos; en los tramos urbanos tranviarios la velocidad se limita según el entorno.",
      "Fueron inaugurados en servicio comercial el 26 de octubre de 2022. Las unidades fueron entregadas y homologadas antes de su puesta en servicio comercial.",
      "La composición es de tres coches: dos remolques con cabina en los extremos y un coche motor intermedio. La longitud de la unidad es de 38,114 m.",
      "La capacidad es de 84 plazas sentadas; la capacidad total indicada por el fabricante es de 227 viajeros en condiciones normales de ocupación y 299 viajeros a seis viajeros por metro cuadrado.",
      "La flota presta servicio en el Trambahía, cuya línea combina trazado tranviario y ferroviario entre Chiclana de la Frontera, San Fernando y Cádiz."
    ],
    "units": {
      "1": {
        "rama": "001",
        "vehiculoBase": "001",
        "numero": "96 71 9 801 001-9",
        "vehiculosRama": [
          "96 71 9 801 001-9",
          "92 71 6 801 101-7",
          "96 71 9 801 201-5"
        ],
        "searchCodes": ["001", "101", "201"],
        "deposito": "Cádiz",
        "base": "Cádiz",
        "color": "Verde/Blanco",
        "estado": "En servicio",
        "ano": 2011,
        "ancho": "1668",
        "composicionRama": "Remolque con cabina + coche motor intermedio + remolque con cabina",
        "notas": ["-"]
      },
      "2": {
        "rama": "002",
        "vehiculoBase": "002",
        "numero": "96 71 9 801 002-7",
        "vehiculosRama": [
          "96 71 9 801 002-7",
          "92 71 6 801 102-5",
          "96 71 9 801 202-3"
        ],
        "searchCodes": ["002", "102", "202"],
        "deposito": "Cádiz",
        "base": "Cádiz",
        "color": "Verde/Blanco",
        "estado": "En servicio",
        "ano": 2011,
        "ancho": "1668",
        "composicionRama": "Remolque con cabina + coche motor intermedio + remolque con cabina",
        "notas": ["Pruebas Pajares 04/13. Llega Cádiz 13/07/16"]
      },
      "3": {
        "rama": "003",
        "vehiculoBase": "003",
        "numero": "96 71 9 801 003-5",
        "vehiculosRama": [
          "96 71 9 801 003-5",
          "92 71 6 801 103-3",
          "96 71 9 801 203-1"
        ],
        "searchCodes": ["003", "103", "203"],
        "deposito": "Cádiz",
        "base": "Cádiz",
        "color": "Verde/Blanco",
        "estado": "En servicio",
        "ano": 2012,
        "ancho": "1668",
        "composicionRama": "Remolque con cabina + coche motor intermedio + remolque con cabina",
        "notas": ["-"]
      },
      "4": {
        "rama": "004",
        "vehiculoBase": "004",
        "numero": "96 71 9 801 004-3",
        "vehiculosRama": [
          "96 71 9 801 004-3",
          "92 71 6 801 104-1",
          "96 71 9 801 204-9"
        ],
        "searchCodes": ["004", "104", "204"],
        "deposito": "Cádiz",
        "base": "Cádiz",
        "color": "Verde/Blanco",
        "estado": "En servicio",
        "ano": 2012,
        "ancho": "1668",
        "composicionRama": "Remolque con cabina + coche motor intermedio + remolque con cabina",
        "notas": ["-"]
      },
      "5": {
        "rama": "005",
        "vehiculoBase": "005",
        "numero": "96 71 9 801 005-0",
        "vehiculosRama": [
          "96 71 9 801 005-0",
          "92 71 6 801 105-8",
          "96 71 9 801 205-6"
        ],
        "searchCodes": ["005", "105", "205"],
        "deposito": "Cádiz",
        "base": "Cádiz",
        "color": "Verde/Blanco",
        "estado": "En servicio",
        "ano": 2012,
        "ancho": "1668",
        "composicionRama": "Remolque con cabina + coche motor intermedio + remolque con cabina",
        "notas": ["-"]
      },
      "6": {
        "rama": "006",
        "vehiculoBase": "006",
        "numero": "96 71 9 801 006-8",
        "vehiculosRama": [
          "96 71 9 801 006-8",
          "92 71 6 801 106-6",
          "96 71 9 801 206-4"
        ],
        "searchCodes": ["006", "106", "206"],
        "deposito": "Cádiz",
        "base": "Cádiz",
        "color": "Verde/Blanco",
        "estado": "En servicio",
        "ano": 2012,
        "ancho": "1668",
        "composicionRama": "Remolque con cabina + coche motor intermedio + remolque con cabina",
        "notas": ["-"]
      },
      "7": {
        "rama": "007",
        "vehiculoBase": "007",
        "numero": "96 71 9 801 007-6",
        "vehiculosRama": [
          "96 71 9 801 007-6",
          "92 71 6 801 107-4",
          "96 71 9 801 207-2"
        ],
        "searchCodes": ["007", "107", "207"],
        "deposito": "Cádiz",
        "base": "Cádiz",
        "color": "Verde/Blanco",
        "estado": "En servicio",
        "ano": 2012,
        "ancho": "1668",
        "composicionRama": "Remolque con cabina + coche motor intermedio + remolque con cabina",
        "notas": ["-"]
      }
    }
  },
  "446": {
  "seriesName": "Serie 446 · Cercanías · 3 coches",
  "fabricante": "CAF, MACOSA, MTM, MEINFESA",
  "modelo": "Unidad eléctrica de cercanías",
  "apodo": "Dodotis",
  "subseries": "446 · 3 coches",
  "anoPuestaServicio": "1989–1992",
  "tipoMaterial": "Cercanías · Tren eléctrico M-R-M · Gran capacidad de aceleración",
  "numeroCoches": "3 coches · 2 coches motor con cabina + 1 remolque intermedio",
  "anchoVia": "1668 mm",
  "numeroRamas": 170,
  "velocidadMaxima": "100 km/h",
  "potencia": "2.400 kW",
  "longitud": "76 m",
  "peso": "166,6 t",
  "tension": "3.000 Vcc",
  "traccion": "8 motores de tracción GEE-326 A2 · 300 kW por motor",
  "tipoBogies": "Bimotor y monorreductor",
  "anchoCaja": "2.940 mm",
  "alturaTecho": "4.185 mm",
  "longitudMotor": "25.479 mm",
  "pesoPorEje": "15,3 t",
  "frenos": "Eléctrico reostático y recuperación · neumático por aire comprimido",
  "mandoMultiple": "3 unidades",
  "enganche": "Scharfenberg",
  "composicion": "Bo’Bo’ + 2’2’ + Bo’Bo’",
  "senalizacion": "ASFA · LZB en las unidades indicadas en la ficha",
  "generalNotes": [
    "Para el número de cada unidad se toma como referencia la numeración del remolque intermedio, puesto que los motores van correlativos. La rama también puede identificarse mediante la mitad del número del coche motor par.",
    "La serie 446 está formada por tres coches: dos coches motores con cabina en los extremos y un remolque intermedio.",
    "Se construyeron 170 unidades para servicios de Cercanías de alta frecuencia y numerosas paradas. La serie fue pionera del material específicamente diseñado para estos tráficos y posteriormente convivió con las series 447 y Civia.",
    "Prestan servicio en distintos núcleos de Cercanías. La ficha aportada recoge unidades con bases en Madrid, Sevilla, Irun, Fuencarral, Humanes, Cerro Negro y Ollargan, entre otras.",
    "La tabla se divide en tres lotes: 1.º lote (ramas 01–50), 2.º lote (ramas 51–100) y 3.º lote (ramas 101–170).",
  ],
  "units": {
    "1": {
      "rama": "01",
      "lote": "Primer lote",
      "vehiculoBase": "001",
      "numero": "9-446-001-0",
      "vehiculosRama": [
        "9-446-001-0",
        "7-446-001-0",
        "9-446-002-8"
      ],
      "searchCodes": [
        "001",
        "002"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Con LZB. En origen blanca/gris.Colores Renfe Op. Ex-Móstoles>> 11/13 P.Pío >>Móstoles 02/16. Reformada nuevo interior 02/18. Tapizado de asientos diferente. Faros LEDs. (Espacio PMR en Remolque)"
      ]
    },
    "2": {
      "rama": "02",
      "lote": "Primer lote",
      "vehiculoBase": "003",
      "numero": "9-446-003-6",
      "vehiculosRama": [
        "9-446-003-6",
        "7-446-002-8",
        "9-446-004-4"
      ],
      "searchCodes": [
        "003",
        "004"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Con LZB. Colores Renfe Op. Reformada. Ex-Móstoles>> 11/13 P.Pío>> Móstoles 02/16. Vinilos cercanias"
      ]
    },
    "3": {
      "rama": "03",
      "lote": "Primer lote",
      "vehiculoBase": "005",
      "numero": "9-446-005-1",
      "vehiculosRama": [
        "9-446-005-1",
        "7-446-003-6",
        "9-446-006-9"
      ],
      "searchCodes": [
        "005",
        "006"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "48 Con LZB. Colores Renfe Op. Ex- Moéstoles>> 11/13 P.Pío>> Mdstoles 02/16. Nuevo interiorismo 2018, vinilos cercanias"
      ]
    },
    "4": {
      "rama": "04",
      "lote": "Primer lote",
      "vehiculoBase": "007",
      "numero": "9-446-007-7",
      "vehiculosRama": [
        "9-446-007-7",
        "7-446-004-4",
        "9-446-008-5"
      ],
      "searchCodes": [
        "007",
        "008"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[559 Con LZB. Colores Renfe Op. Reformada. Ex-Móstoles>> 11/13 P.Pío>> Móstoles 02/16"
      ]
    },
    "5": {
      "rama": "05",
      "lote": "Primer lote",
      "vehiculoBase": "009",
      "numero": "9-446-009-3",
      "vehiculosRama": [
        "9-446-009-3",
        "7-446-005-1",
        "9-446-010-1"
      ],
      "searchCodes": [
        "009",
        "010"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "Con LZB. Accidente en Fuencarral, 02/03. Remodelada (suelo y pintura interior nuevos, asientos pintados). Fuencarral >> Cercanías Santander 08/09 >> Fuencarral >> Apartada en Villaseca-Mocejón >> En servicio Madrid, 07/12 >> Trasladada a La Sagra 25/04/13 >> En servicio, 09/14 P.Pío >> Móstoles 02/16. Nuevo interiorismo 2018, vinilos cercanías."
      ]
    },
    "6": {
      "rama": "06",
      "lote": "Primer lote",
      "vehiculoBase": "011",
      "numero": "9-446-011-9",
      "vehiculosRama": [
        "9-446-011-9",
        "7-446-006-9",
        "9-446-012-7"
      ],
      "searchCodes": [
        "011",
        "012"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Colores Renfe Op. Reformada, con LZB. Ex-Móstoles>> 11/13 P.Pío>> Móstoles 02/16. Nuevo interiorismo, vinilos cercanias. (Espacio PMR en Remolque)"
      ]
    },
    "7": {
      "rama": "07",
      "lote": "Primer lote",
      "vehiculoBase": "013",
      "numero": "9-446-013-5",
      "vehiculosRama": [
        "9-446-013-5",
        "7-446-007-7",
        "9-446-014-3"
      ],
      "searchCodes": [
        "013",
        "014"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[599 Colores Renfe Op. Reformada, Con LZB. Ex-Móstoles hasta 11/13>>P.Pío>> Móstoles 02/16. Nuevo interiorismo, vinilos cercanias. Descarrilo Humanes 16/11/23."
      ]
    },
    "8": {
      "rama": "08",
      "lote": "Primer lote",
      "vehiculoBase": "015",
      "numero": "9-446-015-0",
      "vehiculosRama": [
        "9-446-015-0",
        "7-446-008-5",
        "9-446-016-8"
      ],
      "searchCodes": [
        "015",
        "016"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Colores Renfe Op. Reformada, Con LZB. Ex-Apartada Móstoles>>P.Pío>> Móstoles 02/16"
      ]
    },
    "9": {
      "rama": "09",
      "lote": "Primer lote",
      "vehiculoBase": "017",
      "numero": "9-446-017-6",
      "vehiculosRama": [
        "9-446-017-6",
        "7-446-009-3",
        "9-446-018-4"
      ],
      "searchCodes": [
        "017",
        "018"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[599 Ex-Madrid>> Santander desde verano 2009>>Madrid>> Apartada Villaseca-Mocejón desde 07/11>> Apartada en Madrid 06/12. Traslada a la Sagra 25/04/13. De nuevo en servicio verano 2017 con techo blanco y nuevo interiorismo. Nuevos tapizados de polipiel en los asientos."
      ]
    },
    "10": {
      "rama": "10",
      "lote": "Primer lote",
      "vehiculoBase": "019",
      "numero": "9-446-019-2",
      "vehiculosRama": [
        "9-446-019-2",
        "7-446-010-1",
        "9-446-020-0"
      ],
      "searchCodes": [
        "019",
        "020"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Madrid",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E559 Colores Renfe Op.Reformada.Apartada en Villaseca-Mocejón. Ex-Madrid. De nuevo en servicio 03/16 Fuencarral. Nuevo interior 03/16. Luces LED, Sevilla desde 07/23>> Madrid 07/25 i —"
      ]
    },
    "11": {
      "rama": "11",
      "lote": "Primer lote",
      "vehiculoBase": "021",
      "numero": "9-446-021-8",
      "vehiculosRama": [
        "9-446-021-8",
        "7-446-011-9",
        "9-446-022-6"
      ],
      "searchCodes": [
        "021",
        "022"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Rama 11. 021M afectado en el atentado de Téllez del 11/03/04 y dado de baja; 022M quedó intacto y posteriormente fue utilizado para recomponer la unidad 446-035. El remolque 011R pertenece a esta rama."
      ]
    },
    "12": {
      "rama": "12",
      "lote": "Primer lote",
      "vehiculoBase": "023",
      "numero": "9-446-023-4",
      "vehiculosRama": [
        "9-446-023-4",
        "7-446-012-7",
        "9-446-024-2"
      ],
      "searchCodes": [
        "023",
        "024"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E599 1994 concurso Grand Slam con 446.021M. Ex-Apartada en Miranda, 2011>> Madrid, 2012. Apartada en Villaseca-Mocejón>> En servicio Madrid 07/18. Remolque con espacio PMR. Incendio bogie en Chamartin 09/08/24. En servicio 03/26"
      ]
    },
    "13": {
      "rama": "13",
      "lote": "Primer lote",
      "vehiculoBase": "025",
      "numero": "9-446-025-9",
      "vehiculosRama": [
        "9-446-025-9",
        "7-446-013-5",
        "9-446-026-7"
      ],
      "searchCodes": [
        "025",
        "026"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "09 Ex-Madrid>> 06/09 Santander>> Irun 04/10 >> Apartada en Miranda de Ebro 09/11>> Cercanias Madrid 06/12"
      ]
    },
    "14": {
      "rama": "14",
      "lote": "Primer lote",
      "vehiculoBase": "027",
      "numero": "9-446-027-5",
      "vehiculosRama": [
        "9-446-027-5",
        "7-446-014-3",
        "9-446-028-3"
      ],
      "searchCodes": [
        "027",
        "028"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "HI&HA Colores Renfe Op. Reformada. Ex- Madrid.Ex-malaga Apartada en Villaseca- Mocejón. De nuevo en servicio 07/15>>Irun 09/19>> Madrid"
      ]
    },
    "15": {
      "rama": "15",
      "lote": "Primer lote",
      "vehiculoBase": "029",
      "numero": "9-446-029-1",
      "vehiculosRama": [
        "9-446-029-1",
        "7-446-015-0",
        "9-446-030-9"
      ],
      "searchCodes": [
        "029",
        "030"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Sevilla",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[99 Reformada.Sin logos Renfe. Ex- Madrid>> 14/03/09 Santander>> 12/09 Llanera>> Irun 04/10 >> Apartada en Iruin >> Madrid 11/12"
      ]
    },
    "16": {
      "rama": "16",
      "lote": "Primer lote",
      "vehiculoBase": "031",
      "numero": "9-446-031-7",
      "vehiculosRama": [
        "9-446-031-7",
        "7-446-016-8",
        "9-446-032-5"
      ],
      "searchCodes": [
        "031",
        "032"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "La Sagra",
      "estado": "Apartada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "EG Ex-Madrid>> 05/09 Irn>>Madrid. Colores Renfe Op. Ex-Principe Pio>> Trasladada a La Sagra el 12/06/13 desde Fuencarral."
      ]
    },
    "17": {
      "rama": "17",
      "lote": "Primer lote",
      "vehiculoBase": "033",
      "numero": "9-446-033-3",
      "vehiculosRama": [
        "9-446-033-3",
        "7-446-017-6",
        "9-446-034-1"
      ],
      "searchCodes": [
        "033",
        "034"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "09 Colores Renfe Op.Reformada, Ex- Bilbao>>Irun>>Madrid>>apartada en Valencia tras averia en servicio de fallas>>de nuevo en servicio 07/15. Nuevo interiorismo, 06/16."
      ]
    },
    "18": {
      "rama": "18",
      "lote": "Primer lote",
      "vehiculoBase": "035",
      "numero": "9-446-035-8",
      "vehiculosRama": [
        "9-446-035-8",
        "7-446-018-4",
        "9-446-036-6"
      ],
      "searchCodes": [
        "035",
        "036"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "",
      "estado": "Desguazada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Atentado en Atocha, 11/03/04. Desguazada."
      ]
    },
    "19": {
      "rama": "19",
      "lote": "Primer lote",
      "vehiculoBase": "037",
      "numero": "9-446-037-4",
      "vehiculosRama": [
        "9-446-037-4",
        "7-446-019-2",
        "9-446-038-2"
      ],
      "searchCodes": [
        "037",
        "038"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[S09 Colores Renfe Op. Reformada, Ex- Madrid>> Santander>> Apartada en Villaseca- Mocej6n desde 07/11>> P.Pío 2012. Trasladada a La Sagra 12/06/13 desde Fuencarral. En servicio en Madrid con nuevo interiorismo, Vista en Irun 10/19>>Fuencarral."
      ]
    },
    "20": {
      "rama": "20",
      "lote": "Primer lote",
      "vehiculoBase": "039",
      "numero": "9-446-039-0",
      "vehiculosRama": [
        "9-446-039-0",
        "7-446-020-0",
        "9-446-040-8"
      ],
      "searchCodes": [
        "039",
        "040"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "EZ504 Colores Renfe Op. Reformada. Ex- Madrid>> Irun >>P. Pio>>Sevilla>> Madrid desde 07/18>> Irun 03/22 >> Madrid desde 08/22."
      ]
    },
    "21": {
      "rama": "21",
      "lote": "Primer lote",
      "vehiculoBase": "041",
      "numero": "9-446-041-6",
      "vehiculosRama": [
        "9-446-041-6",
        "7-446-021-8",
        "9-446-042-4"
      ],
      "searchCodes": [
        "041",
        "042"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "EE Ex- Valencia>>Madrid>>Apartada>>De nuevo en servicio con nuevo interiorismo (01/17). Colores Renfe Op."
      ]
    },
    "22": {
      "rama": "22",
      "lote": "Primer lote",
      "vehiculoBase": "043",
      "numero": "9-446-043-2",
      "vehiculosRama": [
        "9-446-043-2",
        "7-446-022-6",
        "9-446-044-0"
      ],
      "searchCodes": [
        "043",
        "044"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E09 Choque y descarrilo en Atocha 05/01/05. Vinilos Renfe Op. Ex-Madrid>>Apartada La Sagra>> En servicio, colores Renfe Op. y nuevo interiorismo"
      ]
    },
    "23": {
      "rama": "23",
      "lote": "Primer lote",
      "vehiculoBase": "045",
      "numero": "9-446-045-7",
      "vehiculosRama": [
        "9-446-045-7",
        "7-446-023-4",
        "9-446-046-5"
      ],
      "searchCodes": [
        "045",
        "046"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Irun",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E599 Colores Renfe Op. Logos 75 años Renfe. Ex-Cerro Negro>> Irun 25/08/23"
      ]
    },
    "24": {
      "rama": "24",
      "lote": "Primer lote",
      "vehiculoBase": "047",
      "numero": "9-446-047-3",
      "vehiculosRama": [
        "9-446-047-3",
        "7-446-024-2",
        "9-446-048-1"
      ],
      "searchCodes": [
        "047",
        "048"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Irun",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "99 Colores Renfe Op. Nuevo interiorismo. Ex-Cerro Negro>> Irun 25/08/23"
      ]
    },
    "25": {
      "rama": "25",
      "lote": "Primer lote",
      "vehiculoBase": "049",
      "numero": "9-446-049-9",
      "vehiculosRama": [
        "9-446-049-9",
        "7-446-025-9",
        "9-446-050-7"
      ],
      "searchCodes": [
        "049",
        "050"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E599 Ex-Madrid>>Valencia. Con nuevo interiorismo"
      ]
    },
    "26": {
      "rama": "26",
      "lote": "Primer lote",
      "vehiculoBase": "051",
      "numero": "9-446-051-5",
      "vehiculosRama": [
        "9-446-051-5",
        "7-446-026-7",
        "9-446-052-3"
      ],
      "searchCodes": [
        "051",
        "052"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Madrid",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[S99 Reformada. Ex-Principe Pio. Ex- Sevilla>> Fuencarral>> Sevilla 07/23 (Para servicios Córdoba)>>Madrid 12/25"
      ]
    },
    "27": {
      "rama": "27",
      "lote": "Primer lote",
      "vehiculoBase": "053",
      "numero": "9-446-053-1",
      "vehiculosRama": [
        "9-446-053-1",
        "7-446-027-5",
        "9-446-054-9"
      ],
      "searchCodes": [
        "053",
        "054"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "4 Ex-Valencia >> Bilbao, Colores Renfe Op >>Irun desde 09/19>> Fuencarral"
      ]
    },
    "28": {
      "rama": "28",
      "lote": "Primer lote",
      "vehiculoBase": "055",
      "numero": "9-446-055-4",
      "vehiculosRama": [
        "9-446-055-4",
        "7-446-028-3",
        "9-446-056-6"
      ],
      "searchCodes": [
        "055",
        "056"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E99 Ex-Valencia >> Colores Renfe Op."
      ]
    },
    "29": {
      "rama": "29",
      "lote": "Primer lote",
      "vehiculoBase": "057",
      "numero": "9-446-057-2",
      "vehiculosRama": [
        "9-446-057-2",
        "7-446-029-1",
        "9-446-058-0"
      ],
      "searchCodes": [
        "057",
        "058"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[99 Ex-Barcelona. Colores Renfe Op. Reformada. Nuevo interiorismo. (Espacio PMR en Remolque)"
      ]
    },
    "30": {
      "rama": "30",
      "lote": "Primer lote",
      "vehiculoBase": "059",
      "numero": "9-446-059-8",
      "vehiculosRama": [
        "9-446-059-8",
        "7-446-030-9",
        "9-446-060-6"
      ],
      "searchCodes": [
        "059",
        "060"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[E99 Colores Renfe Op. Nuevo interior, 11/12/17."
      ]
    },
    "31": {
      "rama": "31",
      "lote": "Primer lote",
      "vehiculoBase": "061",
      "numero": "9-446-061-4",
      "vehiculosRama": [
        "9-446-061-4",
        "7-446-031-7",
        "9-446-062-2"
      ],
      "searchCodes": [
        "061",
        "062"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E93 Colores Renfe Op. Reformada. Ex- Valencia>>Madrid>> Santander, 02/11. Madrid. Reformada"
      ]
    },
    "32": {
      "rama": "32",
      "lote": "Primer lote",
      "vehiculoBase": "063",
      "numero": "9-446-063-0",
      "vehiculosRama": [
        "9-446-063-0",
        "7-446-032-5",
        "9-446-064-8"
      ],
      "searchCodes": [
        "063",
        "064"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "09 Ex-Valencia. Colores Renfe Op."
      ]
    },
    "33": {
      "rama": "33",
      "lote": "Primer lote",
      "vehiculoBase": "065",
      "numero": "9-446-065-5",
      "vehiculosRama": [
        "9-446-065-5",
        "7-446-033-3",
        "9-446-066-3"
      ],
      "searchCodes": [
        "065",
        "066"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Ea -"
      ]
    },
    "34": {
      "rama": "34",
      "lote": "Primer lote",
      "vehiculoBase": "067",
      "numero": "9-446-067-1",
      "vehiculosRama": [
        "9-446-067-1",
        "7-446-034-1",
        "9-446-068-9"
      ],
      "searchCodes": [
        "067",
        "068"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[9 Ex-Barcelona. Colores Renfe Op. Reformada"
      ]
    },
    "35": {
      "rama": "35",
      "lote": "Primer lote",
      "vehiculoBase": "069",
      "numero": "9-446-069-7",
      "vehiculosRama": [
        "9-446-069-7",
        "7-446-035-8",
        "9-446-022-6"
      ],
      "searchCodes": [
        "069",
        "022"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E94 Atentado en Atocha (11/03/04), desguazado 070M original, sustituido por 022M. Primer 446 en colores Renfe Op. Descarrilo El Espinar (03/06/16). Espacio PMR en Remolque"
      ]
    },
    "36": {
      "rama": "36",
      "lote": "Primer lote",
      "vehiculoBase": "071",
      "numero": "9-446-071-3",
      "vehiculosRama": [
        "9-446-071-3",
        "7-446-036-6",
        "9-446-072-1"
      ],
      "searchCodes": [
        "071",
        "072"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E99 Colores Renfe Op. Reformada"
      ]
    },
    "37": {
      "rama": "37",
      "lote": "Primer lote",
      "vehiculoBase": "073",
      "numero": "9-446-073-9",
      "vehiculosRama": [
        "9-446-073-9",
        "7-446-037-4",
        "9-446-074-7"
      ],
      "searchCodes": [
        "073",
        "074"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[9 Ex-Valencia. Colores Renfe Op.Reformada"
      ]
    },
    "38": {
      "rama": "38",
      "lote": "Primer lote",
      "vehiculoBase": "075",
      "numero": "9-446-075-4",
      "vehiculosRama": [
        "9-446-075-4",
        "7-446-038-2",
        "9-446-076-2"
      ],
      "searchCodes": [
        "075",
        "076"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E99 Colores Renfe Op.Reformada."
      ]
    },
    "39": {
      "rama": "39",
      "lote": "Primer lote",
      "vehiculoBase": "077",
      "numero": "9-446-077-0",
      "vehiculosRama": [
        "9-446-077-0",
        "7-446-039-0",
        "9-446-078-8"
      ],
      "searchCodes": [
        "077",
        "078"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E99 Colores Renfe Op. Reformada. Descarrilo de bogie en Atocha 04/06/23."
      ]
    },
    "40": {
      "rama": "40",
      "lote": "Primer lote",
      "vehiculoBase": "079",
      "numero": "9-446-079-6",
      "vehiculosRama": [
        "9-446-079-6",
        "7-446-040-8",
        "9-446-080-4"
      ],
      "searchCodes": [
        "079",
        "080"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "99 Colores Renfe Op.Reformada. Ex- Cerro Negro"
      ]
    },
    "41": {
      "rama": "41",
      "lote": "Primer lote",
      "vehiculoBase": "081",
      "numero": "9-446-081-2",
      "vehiculosRama": [
        "9-446-081-2",
        "7-446-041-6",
        "9-446-082-0"
      ],
      "searchCodes": [
        "081",
        "082"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[E599 Colores Renfe Op. Nuevo interiorismo"
      ]
    },
    "42": {
      "rama": "42",
      "lote": "Primer lote",
      "vehiculoBase": "083",
      "numero": "9-446-083-8",
      "vehiculosRama": [
        "9-446-083-8",
        "7-446-042-4",
        "9-446-084-6"
      ],
      "searchCodes": [
        "083",
        "084"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Cerro Negro",
      "estado": "Accidentada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[9% Colores Renfe Op. Reforma interior y LEDs. Descarrilo talleres 18/10/23. De nuevo en servicio 11/24. Tapizado de polipiel. Descarrilo 084M S. Fernando de Henares 27/10/25 Apartada en BMI Villaverde, canibalizada."
      ]
    },
    "43": {
      "rama": "43",
      "lote": "Primer lote",
      "vehiculoBase": "085",
      "numero": "9-446-085-3",
      "vehiculosRama": [
        "9-446-085-3",
        "7-446-043-2",
        "9-446-086-1"
      ],
      "searchCodes": [
        "085",
        "086"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "99 Colores Renfe Op. Ex-Cerro Negro"
      ]
    },
    "44": {
      "rama": "44",
      "lote": "Primer lote",
      "vehiculoBase": "087",
      "numero": "9-446-087-9",
      "vehiculosRama": [
        "9-446-087-9",
        "7-446-044-0",
        "9-446-088-1"
      ],
      "searchCodes": [
        "087",
        "088"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E99 Colores Renfe Op.Reformada. Ex- Cerro Negro. (Espacio PMR en Remolque)"
      ]
    },
    "45": {
      "rama": "45",
      "lote": "Primer lote",
      "vehiculoBase": "089",
      "numero": "9-446-089-5",
      "vehiculosRama": [
        "9-446-089-5",
        "7-446-045-7",
        "9-446-090-3"
      ],
      "searchCodes": [
        "089",
        "090"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Sevilla",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[99 Reformada. Colores Renfe Op. Ex- Cerro Negro>> Sevilla desde 2022."
      ]
    },
    "46": {
      "rama": "46",
      "lote": "Primer lote",
      "vehiculoBase": "091",
      "numero": "9-446-091-1",
      "vehiculosRama": [
        "9-446-091-1",
        "7-446-046-5",
        "9-446-092-9"
      ],
      "searchCodes": [
        "091",
        "092"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[99 Atentado en Atocha, 11/03/04. Colores Renfe Op. Reformada."
      ]
    },
    "47": {
      "rama": "47",
      "lote": "Primer lote",
      "vehiculoBase": "093",
      "numero": "9-446-093-7",
      "vehiculosRama": [
        "9-446-093-7",
        "7-446-047-3",
        "9-446-094-5"
      ],
      "searchCodes": [
        "093",
        "094"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E94 Choque y descarrilo en Atocha 05/01/05,Colores Renfe Op.Reformada. Ex-Cerro Negro. Negro."
      ]
    },
    "48": {
      "rama": "48",
      "lote": "Primer lote",
      "vehiculoBase": "095",
      "numero": "9-446-095-2",
      "vehiculosRama": [
        "9-446-095-2",
        "7-446-048-1",
        "9-446-096-0"
      ],
      "searchCodes": [
        "095",
        "096"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "559 Colores Renfe Op. Ex-Cerro Negro. Reformada. Fuencarral>>Irun 14/08/20>>Fuencarral 09/20"
      ]
    },
    "49": {
      "rama": "49",
      "lote": "Primer lote",
      "vehiculoBase": "097",
      "numero": "9-446-097-8",
      "vehiculosRama": [
        "9-446-097-8",
        "7-446-049-9",
        "9-446-098-6"
      ],
      "searchCodes": [
        "097",
        "098"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Madrid",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[599 Colores Renfe Op. desde 15/06/05,Reformada. Ex-Cerro Negro>>Irun 01/20>>Madrid 17/01/25."
      ]
    },
    "50": {
      "rama": "50",
      "lote": "Primer lote",
      "vehiculoBase": "099",
      "numero": "9-446-099-4",
      "vehiculosRama": [
        "9-446-099-4",
        "7-446-050-7",
        "9-446-100-0"
      ],
      "searchCodes": [
        "099",
        "100"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Primer lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "599 Colores Renfe Op.Reformada. Ex- Cerro Negro>> Fuencarral>> Irun 16/09/19>> Fuencarral J Motor impar Remolque 1 Motor par Depésito Estado Notas"
      ]
    },
    "51": {
      "rama": "51",
      "lote": "Segundo lote",
      "vehiculoBase": "101",
      "numero": "9-446-101-8",
      "vehiculosRama": [
        "9-446-101-8",
        "7-446-051-5",
        "9-446-102-6"
      ],
      "searchCodes": [
        "101",
        "102"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E509 Colores Renfe Op. Ex-Cerro Negro"
      ]
    },
    "52": {
      "rama": "52",
      "lote": "Segundo lote",
      "vehiculoBase": "103",
      "numero": "9-446-103-4",
      "vehiculosRama": [
        "9-446-103-4",
        "7-446-052-3",
        "9-446-104-2"
      ],
      "searchCodes": [
        "103",
        "104"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E509 Colores Renfe Op. Ex-Cerro Negro"
      ]
    },
    "53": {
      "rama": "53",
      "lote": "Segundo lote",
      "vehiculoBase": "105",
      "numero": "9-446-105-9",
      "vehiculosRama": [
        "9-446-105-9",
        "7-446-053-1",
        "9-446-106-7"
      ],
      "searchCodes": [
        "105",
        "106"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E559 Colores Renfe Op.,Reformada."
      ]
    },
    "54": {
      "rama": "54",
      "lote": "Segundo lote",
      "vehiculoBase": "107",
      "numero": "9-446-107-5",
      "vehiculosRama": [
        "9-446-107-5",
        "7-446-054-9",
        "9-446-108-3"
      ],
      "searchCodes": [
        "107",
        "108"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "99 Colores Renfe Op. (solo pegatinas) reformada con nuevo interior blanco"
      ]
    },
    "55": {
      "rama": "55",
      "lote": "Segundo lote",
      "vehiculoBase": "109",
      "numero": "9-446-109-1",
      "vehiculosRama": [
        "9-446-109-1",
        "7-446-055-6",
        "9-446-110-9"
      ],
      "searchCodes": [
        "109",
        "110"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Irun",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "99 Colores Renfe Op. (Ex-Pegatinas) Ex- Bilbao>>Málaga 25/10/08>> Bilbao desde 2010>> Choque con topera en Abando 14/09/15>> Reformada con nuevo interior blanco 2017>> Irun refuerzo carnavales Tolosa 01/03/25>> Ollargan 04/03/25 >> Irun 08/26"
      ]
    },
    "56": {
      "rama": "56",
      "lote": "Segundo lote",
      "vehiculoBase": "111",
      "numero": "9-446-111-7",
      "vehiculosRama": [
        "9-446-111-7",
        "7-446-056-4",
        "9-446-112-5"
      ],
      "searchCodes": [
        "111",
        "112"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "",
      "estado": "Desguazada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Colores Renfe Op. (solo pegatinas) >> Colores Renfe Op. Adaptada a andenes altos. Ex-Bilbao >> Apartada Santurce >> Traslado Miranda de Ebro 2018 >> Traslado TCR Valladolid. Apartada en TCR de Valladolid desde 12/18. Desguazada finales 2022."
      ]
    },
    "57": {
      "rama": "57",
      "lote": "Segundo lote",
      "vehiculoBase": "113",
      "numero": "9-446-113-3",
      "vehiculosRama": [
        "9-446-113-3",
        "7-446-057-2",
        "9-446-114-1"
      ],
      "searchCodes": [
        "113",
        "114"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "",
      "estado": "Apartada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Colores Renfe Op. (solo pegatinas). Ex-Bilbao >> Destacada en Irun 01/09. Apartada en Irun."
      ]
    },
    "58": {
      "rama": "58",
      "lote": "Segundo lote",
      "vehiculoBase": "115",
      "numero": "9-446-115-8",
      "vehiculosRama": [
        "9-446-115-8",
        "7-446-058-0",
        "9-446-116-6"
      ],
      "searchCodes": [
        "115",
        "116"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Miranda de Ebro",
      "estado": "Apartada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[99 Adaptada andenes altos. Ex-Bilbao>> 04/09 Irun>> Bilbao 02/10>> Apartada Santurce>> Traslado Miranda de Ebro. Mal estado de conservacién>> Coche motor usado para reconstruir 446.083"
      ]
    },
    "59": {
      "rama": "59",
      "lote": "Segundo lote",
      "vehiculoBase": "117",
      "numero": "9-446-117-4",
      "vehiculosRama": [
        "9-446-117-4",
        "7-446-059-8",
        "9-446-118-2"
      ],
      "searchCodes": [
        "117",
        "118"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "EBA Colores Renfe Op.(Ex-Pegatinas) Destacada en Irun 01/09>> Ollargan. Reformada con interior blanco (05/17)>>Irun 10/08/20>> Bilbao 02/24."
      ]
    },
    "60": {
      "rama": "60",
      "lote": "Segundo lote",
      "vehiculoBase": "119",
      "numero": "9-446-119-0",
      "vehiculosRama": [
        "9-446-119-0",
        "7-446-060-6",
        "9-446-120-8"
      ],
      "searchCodes": [
        "119",
        "120"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Sevilla",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E99 Colores Renfe Op. Ex- Sevilla>>Apartada La Sagra, 23/06/15>> En servicio Sevilla."
      ]
    },
    "61": {
      "rama": "61",
      "lote": "Segundo lote",
      "vehiculoBase": "121",
      "numero": "9-446-121-6",
      "vehiculosRama": [
        "9-446-121-6",
        "7-446-061-4",
        "9-446-122-4"
      ],
      "searchCodes": [
        "121",
        "122"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[09 Colores Renfe Op.Madrid>> Santander 02/11 >> Madrid P.P{fo 2012. Trasladada a La Sagra el 12/06/13 desde Fuencarral>> Reformado con nuevo interiorismo (01/17)"
      ]
    },
    "62": {
      "rama": "62",
      "lote": "Segundo lote",
      "vehiculoBase": "123",
      "numero": "9-446-123-2",
      "vehiculosRama": [
        "9-446-123-2",
        "7-446-062-2",
        "9-446-124-0"
      ],
      "searchCodes": [
        "123",
        "124"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E99 Atentado en Atocha, 11/03/04. Colores Renfe Op. Ex-Principe Pio>>Hibernada>> Vuelta a servicio 22/01/19"
      ]
    },
    "63": {
      "rama": "63",
      "lote": "Segundo lote",
      "vehiculoBase": "125",
      "numero": "9-446-125-7",
      "vehiculosRama": [
        "9-446-125-7",
        "7-446-063-0",
        "9-446-126-5"
      ],
      "searchCodes": [
        "125",
        "126"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "IBA Colores Renfe Op. Logos 75 años Renfe. Reformada con nuevo interiorismo en sevilla (05/17). Ex-Fuencarral>> Irun 16/09/19>>Fuencarral"
      ]
    },
    "64": {
      "rama": "64",
      "lote": "Segundo lote",
      "vehiculoBase": "127",
      "numero": "9-446-127-3",
      "vehiculosRama": [
        "9-446-127-3",
        "7-446-064-8",
        "9-446-128-1"
      ],
      "searchCodes": [
        "127",
        "128"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Sevilla",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[ESHA Ex-Madrid>> Málaga>>Sevilla. Colores Renfe Op. Interior reformado"
      ]
    },
    "65": {
      "rama": "65",
      "lote": "Segundo lote",
      "vehiculoBase": "129",
      "numero": "9-446-129-9",
      "vehiculosRama": [
        "9-446-129-9",
        "7-446-065-5",
        "9-446-130-7"
      ],
      "searchCodes": [
        "129",
        "130"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Madrid",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[E599 Colores Renfe Op. Ex-Madrid>> 05/09 Irun>> Madrid>> Sevilla>> Fuencarral>> La Sagra 25/04/13>> Málaga para preparaci6n al servicio desde 02/17>> De nuevo en servicio en 09/22"
      ]
    },
    "66": {
      "rama": "66",
      "lote": "Segundo lote",
      "vehiculoBase": "131",
      "numero": "9-446-131-5",
      "vehiculosRama": [
        "9-446-131-5",
        "7-446-066-3",
        "9-446-132-3"
      ],
      "searchCodes": [
        "131",
        "132"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[S99 Colores Renfe Op. Ex-Madrid>> 05/09 Irun>> Fuencarral>> Apartada La Sagra 25/04/13>>A Málaga para puesta en servicio en 02/17>>De nuevo en servicio 09/20"
      ]
    },
    "67": {
      "rama": "67",
      "lote": "Segundo lote",
      "vehiculoBase": "133",
      "numero": "9-446-133-1",
      "vehiculosRama": [
        "9-446-133-1",
        "7-446-067-1",
        "9-446-134-9"
      ],
      "searchCodes": [
        "133",
        "134"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "",
      "estado": "Desguazada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Adaptada a andenes altos. Colores Renfe Op. (solo pegatinas). Ex-Bilbao >> Apartada Santurce >> 2018 Miranda de Ebro >> TCR Valladolid desde 12/18. Puerta de 134M para exposición feria ARCO. Desguazada 12/22."
      ]
    },
    "68": {
      "rama": "68",
      "lote": "Segundo lote",
      "vehiculoBase": "135",
      "numero": "9-446-135-6",
      "vehiculosRama": [
        "9-446-135-6",
        "7-446-068-9",
        "9-446-136-4"
      ],
      "searchCodes": [
        "135",
        "136"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Madrid",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Colores Renfe Op. (solo pegatinas), reformada. Descarrilo talleres Málaga 07/18. Ex-Ollargan >> Madrid."
      ]
    },
    "69": {
      "rama": "69",
      "lote": "Segundo lote",
      "vehiculoBase": "137",
      "numero": "9-446-137-2",
      "vehiculosRama": [
        "9-446-137-2",
        "7-446-069-7",
        "9-446-138-0"
      ],
      "searchCodes": [
        "137",
        "138"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "99 Colores Renfe Op. (solo pegatinas). Ex-Bilbao. De baja verano 2010, apartada Fuencarral>> Trasladada TCR Valladolid 04/12/18. >>Irun 07/08/19>>Choque con baterias de 447-145 en Andoain 08/20, reparada en Ollargan>> Ollargan 09/20"
      ]
    },
    "70": {
      "rama": "70",
      "lote": "Segundo lote",
      "vehiculoBase": "139",
      "numero": "9-446-139-8",
      "vehiculosRama": [
        "9-446-139-8",
        "7-446-070-5",
        "9-446-140-6"
      ],
      "searchCodes": [
        "139",
        "140"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Sevilla",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[S99 Colores Renfe Op. Ex-Málaga>> 05/09 Irun>> Madrid>> Sevilla. Faros LEDs"
      ]
    },
    "71": {
      "rama": "71",
      "lote": "Segundo lote",
      "vehiculoBase": "141",
      "numero": "9-446-141-4",
      "vehiculosRama": [
        "9-446-141-4",
        "7-446-071-3",
        "9-446-142-2"
      ],
      "searchCodes": [
        "141",
        "142"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[4 Unidad con estribos condenados (C1 y C2 de Bilbao). Colores Renfe Op.(solo pegatinas).Logos 75 años Renfe."
      ]
    },
    "72": {
      "rama": "72",
      "lote": "Segundo lote",
      "vehiculoBase": "143",
      "numero": "9-446-143-0",
      "vehiculosRama": [
        "9-446-143-0",
        "7-446-072-1",
        "9-446-144-8"
      ],
      "searchCodes": [
        "143",
        "144"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[99 Estribos condenados (C-1 y C-2 Bilbao). Colores Renfe Op. Reformada. Ex- Bilbao>>Madrid>> Bilbao 10/12."
      ]
    },
    "73": {
      "rama": "73",
      "lote": "Segundo lote",
      "vehiculoBase": "145",
      "numero": "9-446-145-5",
      "vehiculosRama": [
        "9-446-145-5",
        "7-446-073-9",
        "9-446-146-3"
      ],
      "searchCodes": [
        "145",
        "146"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "G9 Colores Renfe Op. C3 de 03/25 a 03/26 (Sin condena de estribos)"
      ]
    },
    "74": {
      "rama": "74",
      "lote": "Segundo lote",
      "vehiculoBase": "147",
      "numero": "9-446-147-1",
      "vehiculosRama": [
        "9-446-147-1",
        "7-446-074-7",
        "9-446-148-9"
      ],
      "searchCodes": [
        "147",
        "148"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E599 Colores Renfe Op.Reformada. Ex- Ollargan Apartada>> Trasladada a Valladolid (30/01/17)>> En servicio Madrid 09/02/18>> Bilbao con nuevo interior blanco 02/18>> Irun 05/25>> Ollargan 06/25"
      ]
    },
    "75": {
      "rama": "75",
      "lote": "Segundo lote",
      "vehiculoBase": "149",
      "numero": "9-446-149-7",
      "vehiculosRama": [
        "9-446-149-7",
        "7-446-075-4",
        "9-446-150-5"
      ],
      "searchCodes": [
        "149",
        "150"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Unidad con estribos condenados (C1 y C2 de Bilbao). Colores Renfe Op."
      ]
    },
    "76": {
      "rama": "76",
      "lote": "Segundo lote",
      "vehiculoBase": "151",
      "numero": "9-446-151-3",
      "vehiculosRama": [
        "9-446-151-3",
        "7-446-076-2",
        "9-446-152-1"
      ],
      "searchCodes": [
        "151",
        "152"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[94 Unidad con estribos condenados (C1 y C2 de Bilbao). Colores Renfe Op. (C). Descarrilo Sestao por desprendimiento 03/02/18. En servicio desde 06/18"
      ]
    },
    "77": {
      "rama": "77",
      "lote": "Segundo lote",
      "vehiculoBase": "153",
      "numero": "9-446-153-9",
      "vehiculosRama": [
        "9-446-153-9",
        "7-446-077-0",
        "9-446-154-7"
      ],
      "searchCodes": [
        "153",
        "154"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[4 Unidad con estribos condenados (C1 y C2 de Bilbao). Colores Renfe Op. (solo pegatinas)"
      ]
    },
    "78": {
      "rama": "78",
      "lote": "Segundo lote",
      "vehiculoBase": "155",
      "numero": "9-446-155-4",
      "vehiculosRama": [
        "9-446-155-4",
        "7-446-078-8",
        "9-446-156-2"
      ],
      "searchCodes": [
        "155",
        "156"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "",
      "estado": "Apartada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Colores Renfe Op. Reformada. Apartada Miranda de Ebro >> Apartada en TCR Málaga."
      ]
    },
    "79": {
      "rama": "79",
      "lote": "Segundo lote",
      "vehiculoBase": "157",
      "numero": "9-446-157-0",
      "vehiculosRama": [
        "9-446-157-0",
        "7-446-079-6",
        "9-446-158-8"
      ],
      "searchCodes": [
        "157",
        "158"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Unidad con estribos condenados (C1 y C2 de Bilbao). Colores Renfe Op. Reformada. Descarrilo Bilbao-Abando 01/02/25 >> En servicio."
      ]
    },
    "80": {
      "rama": "80",
      "lote": "Segundo lote",
      "vehiculoBase": "159",
      "numero": "9-446-159-6",
      "vehiculosRama": [
        "9-446-159-6",
        "7-446-080-4",
        "9-446-160-4"
      ],
      "searchCodes": [
        "159",
        "160"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "0A Unidad con estribos condenados (C1 y C2 de Bilbao). Colores Renfe Op. Reformada."
      ]
    },
    "81": {
      "rama": "81",
      "lote": "Segundo lote",
      "vehiculoBase": "161",
      "numero": "9-446-161-2",
      "vehiculosRama": [
        "9-446-161-2",
        "7-446-081-2",
        "9-446-162-0"
      ],
      "searchCodes": [
        "161",
        "162"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        ". Unidad con estribos condenados (C1 y C2 de Bilbao). Ultimo tren de Bilbao-La Naja. Colores Renfe Op. Reformada"
      ]
    },
    "82": {
      "rama": "82",
      "lote": "Segundo lote",
      "vehiculoBase": "163",
      "numero": "9-446-163-8",
      "vehiculosRama": [
        "9-446-163-8",
        "7-446-082-0",
        "9-446-164-6"
      ],
      "searchCodes": [
        "163",
        "164"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "ESHA Unidad con estribos condenados (C1 y C2 de Bilbao) Ultimo tren en efectuar servicio Olabeaga-Bilbao Parke. Colores Renfe Op. Nuevo interiorismo 07/22."
      ]
    },
    "83": {
      "rama": "83",
      "lote": "Segundo lote",
      "vehiculoBase": "165",
      "numero": "9-446-165-3",
      "vehiculosRama": [
        "9-446-165-3",
        "7-446-083-8",
        "9-446-166-1"
      ],
      "searchCodes": [
        "165",
        "166"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E503 Colores Renfe Op. Ex-Valencia>> Barcelona>> Madrid>> Bilbao, 2010>>Iruin 2018>> Bilbao 2021>> Topetazo via 13 Bilbao 11/23>> Reconstruida usando caja de 446 apartada en Miranda>> En servicio 01/25."
      ]
    },
    "84": {
      "rama": "84",
      "lote": "Segundo lote",
      "vehiculoBase": "167",
      "numero": "9-446-167-9",
      "vehiculosRama": [
        "9-446-167-9",
        "7-446-084-6",
        "9-446-168-7"
      ],
      "searchCodes": [
        "167",
        "168"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "99 Ex-Barcelona>> Ex-Madrid>> Bilbao desde 2010. Colores Renfe Op. Nuevo interiorismo (Espacio PMR en Remolque)"
      ]
    },
    "85": {
      "rama": "85",
      "lote": "Segundo lote",
      "vehiculoBase": "169",
      "numero": "9-446-169-5",
      "vehiculosRama": [
        "9-446-169-5",
        "7-446-085-3",
        "9-446-170-3"
      ],
      "searchCodes": [
        "169",
        "170"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[99 Atentado en Atocha, 11/03/04. Ex- Barcelona>> Bilbao>> Madrid>> Bilbao>> Málaga>>Bilbao. Colores Renfe Op. (pegatinas). Reformada con nuevo interior blanco"
      ]
    },
    "86": {
      "rama": "86",
      "lote": "Segundo lote",
      "vehiculoBase": "171",
      "numero": "9-446-171-1",
      "vehiculosRama": [
        "9-446-171-1",
        "7-446-086-1",
        "9-446-172-9"
      ],
      "searchCodes": [
        "171",
        "172"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E98 Ex-Valencia>> Barcelona. Colores Renfe Op. Unidad con estribos condenados (C1 y C2 de Bilbao). Descarrilo 1 eje Zabalburu 18/02/26."
      ]
    },
    "87": {
      "rama": "87",
      "lote": "Segundo lote",
      "vehiculoBase": "173",
      "numero": "9-446-173-7",
      "vehiculosRama": [
        "9-446-173-7",
        "7-446-087-9",
        "9-446-174-5"
      ],
      "searchCodes": [
        "173",
        "174"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "S89 Ex-Barcelona>> Madrid>> 04/09 Irun/Bilbao>> Madrid. Colores Renfe Op. Nuevo interiorismo, 01/17. Incendio en Soto del Henares 03/22. Nuevo tapizado de asientos de cuero duro."
      ]
    },
    "88": {
      "rama": "88",
      "lote": "Segundo lote",
      "vehiculoBase": "175",
      "numero": "9-446-175-2",
      "vehiculosRama": [
        "9-446-175-2",
        "7-446-088-7",
        "9-446-176-0"
      ],
      "searchCodes": [
        "175",
        "176"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Sevilla",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "99 Ex-Barcelona>> Colores Renfe Op. Ex-Sevilla>> Trasladada a la Sagra 23/11/15. Ex- apartada>> 10/19 Sevilla"
      ]
    },
    "89": {
      "rama": "89",
      "lote": "Segundo lote",
      "vehiculoBase": "177",
      "numero": "9-446-177-8",
      "vehiculosRama": [
        "9-446-177-8",
        "7-446-089-5",
        "9-446-178-6"
      ],
      "searchCodes": [
        "177",
        "178"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "G09 Descarrilo puente de Tordera (01/94). Ex-Barcelona>> Colores Renfe Op. Ex-Málaga>> Bilbao 06/11>>Santander >>Bilbao >> Logos 75 años Renfe."
      ]
    },
    "90": {
      "rama": "90",
      "lote": "Segundo lote",
      "vehiculoBase": "179",
      "numero": "9-446-179-4",
      "vehiculosRama": [
        "9-446-179-4",
        "7-446-090-3",
        "9-446-180-2"
      ],
      "searchCodes": [
        "179",
        "180"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Ollargan",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "99 Ex-Barcelona >> Ex-Madrid >> Ollargan 2010. Colores Renfe Op. Iruin 07/23 >> Ollargan 01/25."
      ]
    },
    "91": {
      "rama": "91",
      "lote": "Segundo lote",
      "vehiculoBase": "181",
      "numero": "9-446-181-0",
      "vehiculosRama": [
        "9-446-181-0",
        "7-446-091-1",
        "9-446-182-8"
      ],
      "searchCodes": [
        "181",
        "182"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Sevilla",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[203 Ex-Barcelona>> En colores Renfe Op. desde 12/07. Ex-Málaga>> Irn desde 05/09>> Bilbao>> Sevilla/Córdoba."
      ]
    },
    "92": {
      "rama": "92",
      "lote": "Segundo lote",
      "vehiculoBase": "183",
      "numero": "9-446-183-6",
      "vehiculosRama": [
        "9-446-183-6",
        "7-446-092-9",
        "9-446-184-4"
      ],
      "searchCodes": [
        "183",
        "184"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Sevilla",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "E99 Ex-Barcelona. Asientos tapizados. Colores Renfe Op. Ex-Principe Pio>>Sevilla>> Irun. \"C\" volteada al estado original de los años 90. 90."
      ]
    },
    "93": {
      "rama": "93",
      "lote": "Segundo lote",
      "vehiculoBase": "185",
      "numero": "9-446-185-1",
      "vehiculosRama": [
        "9-446-185-1",
        "7-446-093-7",
        "9-446-186-9"
      ],
      "searchCodes": [
        "185",
        "186"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "",
      "estado": "Apartada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Ex-Barcelona >> Ex-Madrid >> Irun >> Príncipe Pío. Colores Renfe Op. Apartada en Fuencarral desde 02/15 >> Trasladada a La Sagra 24/06/21."
      ]
    },
    "94": {
      "rama": "94",
      "lote": "Segundo lote",
      "vehiculoBase": "187",
      "numero": "9-446-187-7",
      "vehiculosRama": [
        "9-446-187-7",
        "7-446-094-5",
        "9-446-188-5"
      ],
      "searchCodes": [
        "187",
        "188"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Irun",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Ex-Barcelona >> Ex-Madrid >> Irun. Colores Renfe Op. Bilbao >> Irun. Incendiada en Beasain, 20/05/20, en reparación Nuevo Valladolid. Reformada nuevo interior blanco 12/20."
      ]
    },
    "95": {
      "rama": "95",
      "lote": "Segundo lote",
      "vehiculoBase": "189",
      "numero": "9-446-189-3",
      "vehiculosRama": [
        "9-446-189-3",
        "7-446-095-2",
        "9-446-190-1"
      ],
      "searchCodes": [
        "189",
        "190"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Cerro Negro",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[99 Ex-Barcelona. Atentado en Santa Eugenia, 11/03/04. Explosi6n coche 190M. Apartada en Vicalvaro 12/03/04>> Reparada de nuevo en servicio 05/06/05. Colores Renfe Op. Reformada. Logos 75 años Renfe."
      ]
    },
    "96": {
      "rama": "96",
      "lote": "Segundo lote",
      "vehiculoBase": "191",
      "numero": "9-446-191-9",
      "vehiculosRama": [
        "9-446-191-9",
        "7-446-096-0",
        "9-446-192-7"
      ],
      "searchCodes": [
        "191",
        "192"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "",
      "estado": "Desguazada",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Ex-Valencia >> Barcelona >> Madrid. Atentado en Téllez, 11/03/04. Ex-Madrid >> Desguazada."
      ]
    },
    "97": {
      "rama": "97",
      "lote": "Segundo lote",
      "vehiculoBase": "193",
      "numero": "9-446-193-5",
      "vehiculosRama": [
        "9-446-193-5",
        "7-446-097-8",
        "9-446-194-3"
      ],
      "searchCodes": [
        "193",
        "194"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "Ex-Valencia >> Barcelona >> Madrid. Afectada pasivamente en los atentados de Madrid, 11/03/04. Colores Renfe Op. Ex-Madrid >> Irun desde 2014 >> Madrid desde 03/18 >> Sevilla 06/20."
      ]
    },
    "98": {
      "rama": "98",
      "lote": "Segundo lote",
      "vehiculoBase": "195",
      "numero": "9-446-195-0",
      "vehiculosRama": [
        "9-446-195-0",
        "7-446-098-6",
        "9-446-196-8"
      ],
      "searchCodes": [
        "195",
        "196"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Sevilla",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "EE Ex- Valencia>>Barcelona>>Madrid>>Málaga. Colores Renfe Op. Servicio Cordoba-Rabanales 2010. >> Servicio Alcolea de Córdoba-Villarrubia de Córdoba 2019"
      ]
    },
    "99": {
      "rama": "99",
      "lote": "Segundo lote",
      "vehiculoBase": "197",
      "numero": "9-446-197-6",
      "vehiculosRama": [
        "9-446-197-6",
        "7-446-099-4",
        "9-446-198-4"
      ],
      "searchCodes": [
        "197",
        "198"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[ESHA Ex-Barcelona>> Colores Renfe Op. Ex-Principe Pio, Apartada en La Sagra>> De nuevo en servicio (Madrid), 10/15. Nuevo interiorismo."
      ]
    },
    "100": {
      "rama": "100",
      "lote": "Segundo lote",
      "vehiculoBase": "199",
      "numero": "9-446-199-2",
      "vehiculosRama": [
        "9-446-199-2",
        "7-446-100-0",
        "9-446-200-8"
      ],
      "searchCodes": [
        "199",
        "200"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Segundo lote",
      "deposito": "Fuencarral",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "No",
      "notas": [
        "[99 Estrenada en Barcelona. Colores Renfe Op. Reformada. Ex-Principe Pio>>Irun>> Madrid 08/19 J Motor impar Remolque 1 Motor par Deposito Estado Notas"
      ]
    },
    "101": {
      "rama": "101",
      "lote": "Tercer lote",
      "vehiculoBase": "201",
      "numero": "9-446-201-6",
      "vehiculosRama": [
        "9-446-201-6",
        "7-446-101-8",
        "9-446-202-4"
      ],
      "searchCodes": [
        "201",
        "202"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "208 Con LZB. Colores Renfe Op. (ex- pegatinas)"
      ]
    },
    "102": {
      "rama": "102",
      "lote": "Tercer lote",
      "vehiculoBase": "203",
      "numero": "9-446-203-2",
      "vehiculosRama": [
        "9-446-203-2",
        "7-446-102-6",
        "9-446-204-0"
      ],
      "searchCodes": [
        "203",
        "204"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "99 Con LZB. Colores Renfe Op."
      ]
    },
    "103": {
      "rama": "103",
      "lote": "Tercer lote",
      "vehiculoBase": "205",
      "numero": "9-446-205-7",
      "vehiculosRama": [
        "9-446-205-7",
        "7-446-103-4",
        "9-446-206-5"
      ],
      "searchCodes": [
        "205",
        "206"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[248 Con LZB. Colores Renfe Op."
      ]
    },
    "104": {
      "rama": "104",
      "lote": "Tercer lote",
      "vehiculoBase": "207",
      "numero": "9-446-207-3",
      "vehiculosRama": [
        "9-446-207-3",
        "7-446-104-2",
        "9-446-208-1"
      ],
      "searchCodes": [
        "207",
        "208"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[93 Con LZB. Colores Renfe Op. (Espacio PMR en Remolque)"
      ]
    },
    "105": {
      "rama": "105",
      "lote": "Tercer lote",
      "vehiculoBase": "209",
      "numero": "9-446-209-9",
      "vehiculosRama": [
        "9-446-209-9",
        "7-446-105-9",
        "9-446-210-7"
      ],
      "searchCodes": [
        "209",
        "210"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[09 Con LZB. Colores Renfe Op."
      ]
    },
    "106": {
      "rama": "106",
      "lote": "Tercer lote",
      "vehiculoBase": "211",
      "numero": "9-446-211-5",
      "vehiculosRama": [
        "9-446-211-5",
        "7-446-106-7",
        "9-446-212-3"
      ],
      "searchCodes": [
        "211",
        "212"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Con LZB. Colores Renfe Op. (Espacio PMR en Remolque)"
      ]
    },
    "107": {
      "rama": "107",
      "lote": "Tercer lote",
      "vehiculoBase": "213",
      "numero": "9-446-213-1",
      "vehiculosRama": [
        "9-446-213-1",
        "7-446-107-5",
        "9-446-214-9"
      ],
      "searchCodes": [
        "213",
        "214"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[09 Con LZB. Colores Renfe Op. Nuevo interiorismo. Nuevo tapizado (08/23)."
      ]
    },
    "108": {
      "rama": "108",
      "lote": "Tercer lote",
      "vehiculoBase": "215",
      "numero": "9-446-215-6",
      "vehiculosRama": [
        "9-446-215-6",
        "7-446-108-3",
        "9-446-216-4"
      ],
      "searchCodes": [
        "215",
        "216"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Con LZB. Colores Renfe Op (ex- pegatinas)."
      ]
    },
    "109": {
      "rama": "109",
      "lote": "Tercer lote",
      "vehiculoBase": "217",
      "numero": "9-446-217-2",
      "vehiculosRama": [
        "9-446-217-2",
        "7-446-109-1",
        "9-446-218-0"
      ],
      "searchCodes": [
        "217",
        "218"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "EMA Con LZB. Colores Renfe Op. (Ex- pegatinas). Nuevo interiorismo, 09/16. Descarrilo Humanes 16/11/23. De vuelta al servicio 02/25."
      ]
    },
    "110": {
      "rama": "110",
      "lote": "Tercer lote",
      "vehiculoBase": "219",
      "numero": "9-446-219-8",
      "vehiculosRama": [
        "9-446-219-8",
        "7-446-110-9",
        "9-446-220-6"
      ],
      "searchCodes": [
        "219",
        "220"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[9 Con LZB. Colores Renfe Op. Nuevo interiorismo, 01/16. Faros LED."
      ]
    },
    "111": {
      "rama": "111",
      "lote": "Tercer lote",
      "vehiculoBase": "221",
      "numero": "9-446-221-4",
      "vehiculosRama": [
        "9-446-221-4",
        "7-446-111-7",
        "9-446-222-2"
      ],
      "searchCodes": [
        "221",
        "222"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[9 Con LZB. Colores Renfe Op. Faros LED"
      ]
    },
    "112": {
      "rama": "112",
      "lote": "Tercer lote",
      "vehiculoBase": "223",
      "numero": "9-446-223-0",
      "vehiculosRama": [
        "9-446-223-0",
        "7-446-112-5",
        "9-446-224-8"
      ],
      "searchCodes": [
        "223",
        "224"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[59 Con LZB. Colores Renfe Op. Patrociné en 1994 el anuncio de \"Besos\" de Cercanias. Reformado interior 12/23."
      ]
    },
    "113": {
      "rama": "113",
      "lote": "Tercer lote",
      "vehiculoBase": "225",
      "numero": "9-446-225-5",
      "vehiculosRama": [
        "9-446-225-5",
        "7-446-113-3",
        "9-446-226-3"
      ],
      "searchCodes": [
        "225",
        "226"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[9 Con LZB. Colores Renfe Op. Nuevo interiorismo, 2016."
      ]
    },
    "114": {
      "rama": "114",
      "lote": "Tercer lote",
      "vehiculoBase": "227",
      "numero": "9-446-227-1",
      "vehiculosRama": [
        "9-446-227-1",
        "7-446-114-1",
        "9-446-228-9"
      ],
      "searchCodes": [
        "227",
        "228"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[09 Con LZB. Colores Renfe Op. Nuevo interiorismo, 05/16."
      ]
    },
    "115": {
      "rama": "115",
      "lote": "Tercer lote",
      "vehiculoBase": "229",
      "numero": "9-446-229-7",
      "vehiculosRama": [
        "9-446-229-7",
        "7-446-115-8",
        "9-446-230-5"
      ],
      "searchCodes": [
        "229",
        "230"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "509 Con LZB. Colores Renfe Op."
      ]
    },
    "116": {
      "rama": "116",
      "lote": "Tercer lote",
      "vehiculoBase": "231",
      "numero": "9-446-231-3",
      "vehiculosRama": [
        "9-446-231-3",
        "7-446-116-6",
        "9-446-232-1"
      ],
      "searchCodes": [
        "231",
        "232"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[09 Con LZB. Colores Renfe Op (ex pegatinas). Accidente en Aluche, 06/09. Ex- Madrid>> Apartada en Móstoles-El Soto>> En servicio, 04/13. Nuevo interiorismo."
      ]
    },
    "117": {
      "rama": "117",
      "lote": "Tercer lote",
      "vehiculoBase": "233",
      "numero": "9-446-233-9",
      "vehiculosRama": [
        "9-446-233-9",
        "7-446-117-4",
        "9-446-234-7"
      ],
      "searchCodes": [
        "233",
        "234"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Con LZB. Ex-Apartada en Humanes. Colores Renfe Op., desde 20/03/13."
      ]
    },
    "118": {
      "rama": "118",
      "lote": "Tercer lote",
      "vehiculoBase": "235",
      "numero": "9-446-235-4",
      "vehiculosRama": [
        "9-446-235-4",
        "7-446-118-2",
        "9-446-236-2"
      ],
      "searchCodes": [
        "235",
        "236"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[59 Con LZB. Colores Renfe Op.(Ex- pegatinas) Ex-Madrid, apartada taller Humanes >> Madrid 02/13"
      ]
    },
    "119": {
      "rama": "119",
      "lote": "Tercer lote",
      "vehiculoBase": "237",
      "numero": "9-446-237-0",
      "vehiculosRama": [
        "9-446-237-0",
        "7-446-119-0",
        "9-446-238-8"
      ],
      "searchCodes": [
        "237",
        "238"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Con LZB. Ex-Apartada en Humanes, 2011.>> Trasladada a Valladolid, 10/07/13. Colores Renfe Op. Ultima 446 en colores originales."
      ]
    },
    "120": {
      "rama": "120",
      "lote": "Tercer lote",
      "vehiculoBase": "239",
      "numero": "9-446-239-6",
      "vehiculosRama": [
        "9-446-239-6",
        "7-446-120-8",
        "9-446-240-4"
      ],
      "searchCodes": [
        "239",
        "240"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "559 Con LZB. Colores Renfe Op. (Ex- Pegatinas) IS"
      ]
    },
    "121": {
      "rama": "121",
      "lote": "Tercer lote",
      "vehiculoBase": "241",
      "numero": "9-446-241-2",
      "vehiculosRama": [
        "9-446-241-2",
        "7-446-121-6",
        "9-446-242-0"
      ],
      "searchCodes": [
        "241",
        "242"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "99 Con LZB. Colores Renfe Op. (ex- pegatinas). Nuevo interiorismo (Espacio PMR en Remolque)"
      ]
    },
    "122": {
      "rama": "122",
      "lote": "Tercer lote",
      "vehiculoBase": "243",
      "numero": "9-446-243-8",
      "vehiculosRama": [
        "9-446-243-8",
        "7-446-122-4",
        "9-446-244-6"
      ],
      "searchCodes": [
        "243",
        "244"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "99 Con LZB. Colores Renfe Op. Faros LED. (Espacio PMR en Remolque)"
      ]
    },
    "123": {
      "rama": "123",
      "lote": "Tercer lote",
      "vehiculoBase": "245",
      "numero": "9-446-245-3",
      "vehiculosRama": [
        "9-446-245-3",
        "7-446-123-2",
        "9-446-246-1"
      ],
      "searchCodes": [
        "245",
        "246"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "99 Con LZB, colores Renfe Op."
      ]
    },
    "124": {
      "rama": "124",
      "lote": "Tercer lote",
      "vehiculoBase": "247",
      "numero": "9-446-247-9",
      "vehiculosRama": [
        "9-446-247-9",
        "7-446-124-0",
        "9-446-248-7"
      ],
      "searchCodes": [
        "247",
        "248"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "09 Con LZB. Colores Renfe Op. (Ex- pegatinas)"
      ]
    },
    "125": {
      "rama": "125",
      "lote": "Tercer lote",
      "vehiculoBase": "249",
      "numero": "9-446-249-5",
      "vehiculosRama": [
        "9-446-249-5",
        "7-446-125-7",
        "9-446-250-3"
      ],
      "searchCodes": [
        "249",
        "250"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "09 Con LZB. Colores Renfe Op. Con luces LED."
      ]
    },
    "126": {
      "rama": "126",
      "lote": "Tercer lote",
      "vehiculoBase": "251",
      "numero": "9-446-251-1",
      "vehiculosRama": [
        "9-446-251-1",
        "7-446-126-5",
        "9-446-252-9"
      ],
      "searchCodes": [
        "251",
        "252"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "04 Con LZB. Colores Renfe Op."
      ]
    },
    "127": {
      "rama": "127",
      "lote": "Tercer lote",
      "vehiculoBase": "253",
      "numero": "9-446-253-7",
      "vehiculosRama": [
        "9-446-253-7",
        "7-446-127-3",
        "9-446-254-5"
      ],
      "searchCodes": [
        "253",
        "254"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "99 Con LZB. Colores Renfe Op."
      ]
    },
    "128": {
      "rama": "128",
      "lote": "Tercer lote",
      "vehiculoBase": "255",
      "numero": "9-446-255-2",
      "vehiculosRama": [
        "9-446-255-2",
        "7-446-128-1",
        "9-446-256-0"
      ],
      "searchCodes": [
        "255",
        "256"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "09 Con LZB. Colores Renfe Op. Faros LED. (Espacio PMR en Remolque)"
      ]
    },
    "129": {
      "rama": "129",
      "lote": "Tercer lote",
      "vehiculoBase": "257",
      "numero": "9-446-257-8",
      "vehiculosRama": [
        "9-446-257-8",
        "7-446-129-9",
        "9-446-258-6"
      ],
      "searchCodes": [
        "257",
        "258"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "09 Con LZB. Colores Renfe Op. Nuevo interiorismo, 05/16."
      ]
    },
    "130": {
      "rama": "130",
      "lote": "Tercer lote",
      "vehiculoBase": "259",
      "numero": "9-446-259-4",
      "vehiculosRama": [
        "9-446-259-4",
        "7-446-130-7",
        "9-446-260-2"
      ],
      "searchCodes": [
        "259",
        "260"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "93 Con LZB. Colores Renfe Op. (Espacio PMR en Remolque)"
      ]
    },
    "131": {
      "rama": "131",
      "lote": "Tercer lote",
      "vehiculoBase": "261",
      "numero": "9-446-261-0",
      "vehiculosRama": [
        "9-446-261-0",
        "7-446-131-5",
        "9-446-262-8"
      ],
      "searchCodes": [
        "261",
        "262"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "44 Con LZB. Colores Renfe Op."
      ]
    },
    "132": {
      "rama": "132",
      "lote": "Tercer lote",
      "vehiculoBase": "263",
      "numero": "9-446-263-6",
      "vehiculosRama": [
        "9-446-263-6",
        "7-446-132-3",
        "9-446-264-4"
      ],
      "searchCodes": [
        "263",
        "264"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "09 Con LZB. Colores Renfe Op. Nuevo tapizado de asientos de cuero, 20/09/23"
      ]
    },
    "133": {
      "rama": "133",
      "lote": "Tercer lote",
      "vehiculoBase": "265",
      "numero": "9-446-265-1",
      "vehiculosRama": [
        "9-446-265-1",
        "7-446-133-1",
        "9-446-266-9"
      ],
      "searchCodes": [
        "265",
        "266"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "04 Con LZB. Colores Renfe Op. Nuevo interiorismo, 01/16. Arrollamiento arbol 21/09/24 entre Leganés y Zarzaquemada."
      ]
    },
    "134": {
      "rama": "134",
      "lote": "Tercer lote",
      "vehiculoBase": "267",
      "numero": "9-446-267-7",
      "vehiculosRama": [
        "9-446-267-7",
        "7-446-134-9",
        "9-446-268-5"
      ],
      "searchCodes": [
        "267",
        "268"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "04 Con LZB. Colores Renfe Op. Nuevo interiorismo, 2016."
      ]
    },
    "135": {
      "rama": "135",
      "lote": "Tercer lote",
      "vehiculoBase": "269",
      "numero": "9-446-269-3",
      "vehiculosRama": [
        "9-446-269-3",
        "7-446-135-6",
        "9-446-270-1"
      ],
      "searchCodes": [
        "269",
        "270"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[04 Con LZB. Techo de 135R sin color. Colores Renfe Op. y pintura de recho 135R 12/09."
      ]
    },
    "136": {
      "rama": "136",
      "lote": "Tercer lote",
      "vehiculoBase": "271",
      "numero": "9-446-271-9",
      "vehiculosRama": [
        "9-446-271-9",
        "7-446-136-4",
        "9-446-272-7"
      ],
      "searchCodes": [
        "271",
        "272"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "Con LZB. Colores Renfe Op."
      ]
    },
    "137": {
      "rama": "137",
      "lote": "Tercer lote",
      "vehiculoBase": "273",
      "numero": "9-446-273-5",
      "vehiculosRama": [
        "9-446-273-5",
        "7-446-137-2",
        "9-446-274-3"
      ],
      "searchCodes": [
        "273",
        "274"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "204 Con LZB. Colores Renfe Op."
      ]
    },
    "138": {
      "rama": "138",
      "lote": "Tercer lote",
      "vehiculoBase": "275",
      "numero": "9-446-275-0",
      "vehiculosRama": [
        "9-446-275-0",
        "7-446-138-0",
        "9-446-276-8"
      ],
      "searchCodes": [
        "275",
        "276"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[204 Ex-Barcelona>> Con LZB. Colores Renfe Op."
      ]
    },
    "139": {
      "rama": "139",
      "lote": "Tercer lote",
      "vehiculoBase": "277",
      "numero": "9-446-277-6",
      "vehiculosRama": [
        "9-446-277-6",
        "7-446-139-8",
        "9-446-278-4"
      ],
      "searchCodes": [
        "277",
        "278"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[204 Ex-Barcelona>> Con LZB. Colores Renfe Op. Nuevo interiorismo, 11/17."
      ]
    },
    "140": {
      "rama": "140",
      "lote": "Tercer lote",
      "vehiculoBase": "279",
      "numero": "9-446-279-2",
      "vehiculosRama": [
        "9-446-279-2",
        "7-446-140-6",
        "9-446-280-0"
      ],
      "searchCodes": [
        "279",
        "280"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "24 Ex-Barcelona. Con LZB. Colores Renfe Op. Reformada interiorismo 07/20"
      ]
    },
    "141": {
      "rama": "141",
      "lote": "Tercer lote",
      "vehiculoBase": "281",
      "numero": "9-446-281-8",
      "vehiculosRama": [
        "9-446-281-8",
        "7-446-141-4",
        "9-446-282-6"
      ],
      "searchCodes": [
        "281",
        "282"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "99 Ex-Barcelona. Con LZB. Colores Renfe Op. (Ex-pegatinas)"
      ]
    },
    "142": {
      "rama": "142",
      "lote": "Tercer lote",
      "vehiculoBase": "283",
      "numero": "9-446-283-4",
      "vehiculosRama": [
        "9-446-283-4",
        "7-446-142-2",
        "9-446-284-2"
      ],
      "searchCodes": [
        "283",
        "284"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "599 Ex-Barcelona. Con LZB. Colores Renfe Op."
      ]
    },
    "143": {
      "rama": "143",
      "lote": "Tercer lote",
      "vehiculoBase": "285",
      "numero": "9-446-285-9",
      "vehiculosRama": [
        "9-446-285-9",
        "7-446-143-0",
        "9-446-286-7"
      ],
      "searchCodes": [
        "285",
        "286"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "99 Ex-Barcelona. Con LZB. Colores Renfe Op. wens SP"
      ]
    },
    "144": {
      "rama": "144",
      "lote": "Tercer lote",
      "vehiculoBase": "287",
      "numero": "9-446-287-5",
      "vehiculosRama": [
        "9-446-287-5",
        "7-446-144-8",
        "9-446-288-3"
      ],
      "searchCodes": [
        "287",
        "288"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Ex-Barcelona. Con LZB. Colores Renfe Op. (ex-pegatinas)"
      ]
    },
    "145": {
      "rama": "145",
      "lote": "Tercer lote",
      "vehiculoBase": "289",
      "numero": "9-446-289-1",
      "vehiculosRama": [
        "9-446-289-1",
        "7-446-145-5",
        "9-446-290-9"
      ],
      "searchCodes": [
        "289",
        "290"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E98 Ex-Barcelona. Con LZB. Colores Renfe Op (ex-pegatinas). Luces LED en 289M. Descarrilamiento puente de Tordera (01/94)."
      ]
    },
    "146": {
      "rama": "146",
      "lote": "Tercer lote",
      "vehiculoBase": "291",
      "numero": "9-446-291-7",
      "vehiculosRama": [
        "9-446-291-7",
        "7-446-146-3",
        "9-446-292-5"
      ],
      "searchCodes": [
        "291",
        "292"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[9 Ex-Barcelona >> Con LZB. Colores Renfe Op. Faros LED"
      ]
    },
    "147": {
      "rama": "147",
      "lote": "Tercer lote",
      "vehiculoBase": "293",
      "numero": "9-446-293-3",
      "vehiculosRama": [
        "9-446-293-3",
        "7-446-147-1",
        "9-446-294-1"
      ],
      "searchCodes": [
        "293",
        "294"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "148": {
      "rama": "148",
      "lote": "Tercer lote",
      "vehiculoBase": "295",
      "numero": "9-446-295-8",
      "vehiculosRama": [
        "9-446-295-8",
        "7-446-148-9",
        "9-446-296-6"
      ],
      "searchCodes": [
        "295",
        "296"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "149": {
      "rama": "149",
      "lote": "Tercer lote",
      "vehiculoBase": "297",
      "numero": "9-446-297-4",
      "vehiculosRama": [
        "9-446-297-4",
        "7-446-149-7",
        "9-446-298-2"
      ],
      "searchCodes": [
        "297",
        "298"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Ex-Barcelona >> Con LZB. Colores Renfe Op (ex-pegatinas)."
      ]
    },
    "150": {
      "rama": "150",
      "lote": "Tercer lote",
      "vehiculoBase": "299",
      "numero": "9-446-299-0",
      "vehiculosRama": [
        "9-446-299-0",
        "7-446-150-5",
        "9-446-300-6"
      ],
      "searchCodes": [
        "299",
        "300"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E98 Ex-Barcelona >> Con LZB. Colores Renfe Op. (Ex-pegatinas). Ex-Málaga"
      ]
    },
    "151": {
      "rama": "151",
      "lote": "Tercer lote",
      "vehiculoBase": "301",
      "numero": "9-446-301-4",
      "vehiculosRama": [
        "9-446-301-4",
        "7-446-151-3",
        "9-446-302-2"
      ],
      "searchCodes": [
        "301",
        "302"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[94 Ex-Barcelona >> Con LZB. Colores Renfe Op. (C)"
      ]
    },
    "152": {
      "rama": "152",
      "lote": "Tercer lote",
      "vehiculoBase": "303",
      "numero": "9-446-303-0",
      "vehiculosRama": [
        "9-446-303-0",
        "7-446-152-1",
        "9-446-304-8"
      ],
      "searchCodes": [
        "303",
        "304"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "153": {
      "rama": "153",
      "lote": "Tercer lote",
      "vehiculoBase": "305",
      "numero": "9-446-305-5",
      "vehiculosRama": [
        "9-446-305-5",
        "7-446-153-9",
        "9-446-306-3"
      ],
      "searchCodes": [
        "305",
        "306"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E98 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "154": {
      "rama": "154",
      "lote": "Tercer lote",
      "vehiculoBase": "307",
      "numero": "9-446-307-1",
      "vehiculosRama": [
        "9-446-307-1",
        "7-446-154-7",
        "9-446-308-9"
      ],
      "searchCodes": [
        "307",
        "308"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "9 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "155": {
      "rama": "155",
      "lote": "Tercer lote",
      "vehiculoBase": "309",
      "numero": "9-446-309-7",
      "vehiculosRama": [
        "9-446-309-7",
        "7-446-155-4",
        "9-446-310-5"
      ],
      "searchCodes": [
        "309",
        "310"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Ex-Barcelona >> Con LZB. Colores Renfe Op. Reformada nuevo interiorismo."
      ]
    },
    "156": {
      "rama": "156",
      "lote": "Tercer lote",
      "vehiculoBase": "311",
      "numero": "9-446-311-3",
      "vehiculosRama": [
        "9-446-311-3",
        "7-446-156-2",
        "9-446-312-1"
      ],
      "searchCodes": [
        "311",
        "312"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "2M) Ex-Barcelona >> Con LZB. Colores Renfe Op. Nuevo interiorismo, 01/16."
      ]
    },
    "157": {
      "rama": "157",
      "lote": "Tercer lote",
      "vehiculoBase": "313",
      "numero": "9-446-313-9",
      "vehiculosRama": [
        "9-446-313-9",
        "7-446-157-0",
        "9-446-314-7"
      ],
      "searchCodes": [
        "313",
        "314"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E94 Ex-Barcelona >> Con LZB. Colores Renfe Op. (Espacio PMR en Remolque)"
      ]
    },
    "158": {
      "rama": "158",
      "lote": "Tercer lote",
      "vehiculoBase": "315",
      "numero": "9-446-315-4",
      "vehiculosRama": [
        "9-446-315-4",
        "7-446-158-8",
        "9-446-316-2"
      ],
      "searchCodes": [
        "315",
        "316"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Ex-Barcelona >> Con LZB. Colores Renfe Op. Nuevo interiorismo, 05/16."
      ]
    },
    "159": {
      "rama": "159",
      "lote": "Tercer lote",
      "vehiculoBase": "317",
      "numero": "9-446-317-0",
      "vehiculosRama": [
        "9-446-317-0",
        "7-446-159-6",
        "9-446-318-8"
      ],
      "searchCodes": [
        "317",
        "318"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "[99 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "160": {
      "rama": "160",
      "lote": "Tercer lote",
      "vehiculoBase": "319",
      "numero": "9-446-319-6",
      "vehiculosRama": [
        "9-446-319-6",
        "7-446-160-4",
        "9-446-320-4"
      ],
      "searchCodes": [
        "319",
        "320"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E99 Ex-Barcelona >> Con LZB. Colores Renfe Op. Prototipo de nuevo interiorismo, 03/15. Golpe en Humanes, en reparacion TCR Villaverde. En servicio 10/02/26"
      ]
    },
    "161": {
      "rama": "161",
      "lote": "Tercer lote",
      "vehiculoBase": "321",
      "numero": "9-446-321-2",
      "vehiculosRama": [
        "9-446-321-2",
        "7-446-161-2",
        "9-446-322-0"
      ],
      "searchCodes": [
        "321",
        "322"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E98 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "162": {
      "rama": "162",
      "lote": "Tercer lote",
      "vehiculoBase": "323",
      "numero": "9-446-323-8",
      "vehiculosRama": [
        "9-446-323-8",
        "7-446-162-0",
        "9-446-324-6"
      ],
      "searchCodes": [
        "323",
        "324"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E99 Ex-Barcelona >> Con LZB. Accidente en Móstoles. Colores Renfe Op."
      ]
    },
    "163": {
      "rama": "163",
      "lote": "Tercer lote",
      "vehiculoBase": "325",
      "numero": "9-446-325-3",
      "vehiculosRama": [
        "9-446-325-3",
        "7-446-163-8",
        "9-446-326-1"
      ],
      "searchCodes": [
        "325",
        "326"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E98 Ex-Barcelona >> Con LZB. Colores Renfe Op. Nuevo interiorismo, 2016."
      ]
    },
    "164": {
      "rama": "164",
      "lote": "Tercer lote",
      "vehiculoBase": "327",
      "numero": "9-446-327-9",
      "vehiculosRama": [
        "9-446-327-9",
        "7-446-164-6",
        "9-446-328-7"
      ],
      "searchCodes": [
        "327",
        "328"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E94 Ex-Barcelona >> Con LZB. Colores Renfe Op. Nuevo interiorismo."
      ]
    },
    "165": {
      "rama": "165",
      "lote": "Tercer lote",
      "vehiculoBase": "329",
      "numero": "9-446-329-5",
      "vehiculosRama": [
        "9-446-329-5",
        "7-446-165-3",
        "9-446-330-3"
      ],
      "searchCodes": [
        "329",
        "330"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E599 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "166": {
      "rama": "166",
      "lote": "Tercer lote",
      "vehiculoBase": "331",
      "numero": "9-446-331-1",
      "vehiculosRama": [
        "9-446-331-1",
        "7-446-166-1",
        "9-446-332-9"
      ],
      "searchCodes": [
        "331",
        "332"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E99 Ex-Barcelona >> Con LZB. Colores Renfe Op. Faros LED"
      ]
    },
    "167": {
      "rama": "167",
      "lote": "Tercer lote",
      "vehiculoBase": "333",
      "numero": "9-446-333-7",
      "vehiculosRama": [
        "9-446-333-7",
        "7-446-167-9",
        "9-446-334-5"
      ],
      "searchCodes": [
        "333",
        "334"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "HG Ex-Barcelona>> Bilbao. Con LZB. Colores Renfe Op, Reformada a nuevo interiorismo 07/17 (Espacio PMR en Remolque)"
      ]
    },
    "168": {
      "rama": "168",
      "lote": "Tercer lote",
      "vehiculoBase": "335",
      "numero": "9-446-335-2",
      "vehiculosRama": [
        "9-446-335-2",
        "7-446-168-7",
        "9-446-336-0"
      ],
      "searchCodes": [
        "335",
        "336"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E99 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "169": {
      "rama": "169",
      "lote": "Tercer lote",
      "vehiculoBase": "337",
      "numero": "9-446-337-8",
      "vehiculosRama": [
        "9-446-337-8",
        "7-446-169-5",
        "9-446-338-6"
      ],
      "searchCodes": [
        "337",
        "338"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "9 Ex-Barcelona >> Con LZB. Colores Renfe Op."
      ]
    },
    "170": {
      "rama": "170",
      "lote": "Tercer lote",
      "vehiculoBase": "339",
      "numero": "9-446-339-4",
      "vehiculosRama": [
        "9-446-339-4",
        "7-446-170-3",
        "9-446-340-2"
      ],
      "searchCodes": [
        "339",
        "340"
      ],
      "fabricante": "CAF, MACOSA, MTM, MEINFESA",
      "subserie": "446 · 3 coches · Tercer lote",
      "deposito": "Humanes",
      "estado": "En servicio",
      "ano": "1989–1992",
      "ancho": "1668",
      "numeroCoches": "3 coches · 2 coches motor + 1 remolque intermedio",
      "composicionRama": "Motor impar + remolque intermedio + motor par",
      "lzb": "Sí",
      "notas": [
        "E99 Ex-Barcelona >> Con LZB. Colores Renfe Op. (Espacio PMR en Remolque) 1"
      ]
    }
  }
},
  "450": {
    "seriesName": "Serie 450 · Cercanías · 6 coches",
  "fabricante": "ATEINSA, MTM",
  "modelo": "Unidad eléctrica de dos pisos",
  "apodo": "Buque",
  "subseries": "450 · 6 coches",
  "anoPuestaServicio": "1990–1994",
  "tipoMaterial": "Cercanías · Tren de dos pisos · Gran capacidad",
  "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
  "anchoVia": "1668 mm",
  "numeroRamas": 24,
  "velocidadMaxima": "140 km/h",
  "potencia": "2.960 kW",
  "longitud": "159,4 m",
  "peso": "350,8 t (tara) · 481,0 t (carga normal)",
  "tension": "3.000 Vcc",
  "traccion": "8 motores de tracción · potencia total 2.960 kW",
  "señalizacion": "ASFA · GSM",
  "composicion": "Mc-R-R-R-R-Mc",
  "rodaje": "Bo’Bo’ + 2’2’ + 2’2’ + 2’2’ + 2’2’ + Bo’Bo’",
  "plazasSentadas": "1.008",
  "capacidad": "1.844 plazas (1.008 sentadas + 836 de pie)",
  "frenos": "Eléctrico de recuperación y/o reostático · neumático",
  "enganche": "Couplomatic",
  "generalNotes": [
    "Serie de trenes de cercanías de dos pisos, compuestos por cuatro remolques intermedios entre dos coches motores con cabina extremos que también admiten viajeros. Las unidades 451 poseen vehículos idénticos pero con otra configuración. Prestan servicio en las redes de Madrid y Rodalies Barcelona. Los iniciales asientos de plástico han sido tapizados, sus interiores renovados y desde 2021, sus techos pintados de blanco.",
    "Unidades para servicios de cercanías de gran capacidad, ya que poseen 6 coches con dos pisos. Inicialmente las unidades sólo poseían una cabina en un extremo, ya que por el otro se encargaba de la tracción y empuje del tren una locomotora de la serie 269 acondicionada especialmente para ese servicio. Una vez que se construyeron los coches motores que encuadran cada unidad, los coches remolques con cabina sirvieron para formar la serie 451. Funcionan en los núcleos de Cercanías de Madrid y Barcelona."
  ],
  "units": {
    "1": {
      "rama": "1",
      "vehiculoBase": "001",
      "numero": "9-450-001-3",
      "vehiculosRama": [
        "9-450-001-3",
        "7-450-201-9",
        "7-450-202-7",
        "7-450-001-3",
        "7-450-203-5",
        "9-450-002-1"
      ],
      "searchCodes": [
        "001",
        "201",
        "202",
        "001",
        "203",
        "002"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Reformada interiormente. Colores Renfe Op. Teleindicadores exteriores leds naranjas. Nuevo interior, blanco y con paneles de pared como 447 PMR. Apartado de 23/02/26 a 04/26."
      ]
    },
    "2": {
      "rama": "2",
      "vehiculoBase": "003",
      "numero": "9-450-003-9",
      "vehiculosRama": [
        "9-450-003-9",
        "7-450-204-3",
        "7-450-205-0",
        "7-450-002-1",
        "7-450-206-8",
        "9-450-004-7"
      ],
      "searchCodes": [
        "003",
        "204",
        "205",
        "002",
        "206",
        "004"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Apartado 27/02/26 a 04/26."
      ]
    },
    "3": {
      "rama": "3",
      "vehiculoBase": "005",
      "numero": "9-450-005-4",
      "vehiculosRama": [
        "9-450-005-4",
        "7-450-207-6",
        "7-450-208-4",
        "7-450-003-9",
        "7-450-209-2",
        "9-450-006-2"
      ],
      "searchCodes": [
        "005",
        "207",
        "208",
        "003",
        "209",
        "006"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Vilanova",
      "color": "Blanco/Rojo",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. En 006M, nuevos pulsadores. Fuencarral >> Vilanova 06/02/23 para Rodalies. Colores Rodalies 03/23 >> Madrid desde 08/12/23, de nuevo blanco/rojo 09/12/23 >> De nuevo en Vilanova 07/25."
      ]
    },
    "4": {
      "rama": "4",
      "vehiculoBase": "007",
      "numero": "9-450-007-0",
      "vehiculosRama": [
        "9-450-007-0",
        "7-450-210-0",
        "7-450-211-8",
        "7-450-004-7",
        "7-450-212-6",
        "9-450-008-8"
      ],
      "searchCodes": [
        "007",
        "210",
        "211",
        "004",
        "212",
        "008"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "La Sagra",
      "color": "Blanco/Rojo",
      "estado": "Baja / apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Apartada en Fuencarral 28/10/15. Canibalizada para piezas. Coche 210R agregado a Rama 17, 09/21. Trasladada a La Sagra 17/10/24."
      ]
    },
    "5": {
      "rama": "5",
      "vehiculoBase": "009",
      "numero": "9-450-009-6",
      "vehiculosRama": [
        "9-450-009-6",
        "7-450-213-4",
        "7-450-214-2",
        "7-450-005-4",
        "7-450-215-9",
        "9-450-010-4"
      ],
      "searchCodes": [
        "009",
        "213",
        "214",
        "005",
        "215",
        "010"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Rojo/Blanco",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Apartada Pinar de Las Rozas 22/02/24 >> Baja 02/07/24 Fuencarral. Apartada Colmenar Viejo >> De nuevo en servicio 09/24 >> Apartada Valladolid >> De nuevo en servicio 11/25 >> Apartada 23/02/26."
      ]
    },
    "6": {
      "rama": "6",
      "vehiculoBase": "011",
      "numero": "9-450-011-2",
      "vehiculosRama": [
        "9-450-011-2",
        "7-450-216-7",
        "7-450-217-5",
        "7-450-006-2",
        "7-450-218-3",
        "9-450-012-0"
      ],
      "searchCodes": [
        "011",
        "216",
        "217",
        "006",
        "218",
        "012"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Vilanova",
      "color": "Naranja/Blanco",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Teleindicadores exteriores de leds naranjas. Ex-Fuencarral >> Barcelona desde 19/07/13. Colores Rodalies, desde 01/16."
      ]
    },
    "7": {
      "rama": "7",
      "vehiculoBase": "013",
      "numero": "9-450-013-8",
      "vehiculosRama": [
        "9-450-013-8",
        "7-450-219-1",
        "7-450-220-9",
        "7-450-007-0",
        "7-450-221-7",
        "9-450-014-6"
      ],
      "searchCodes": [
        "013",
        "219",
        "220",
        "007",
        "221",
        "014"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Apartado 02/23. De nuevo en servicio 05/23. Apartada Colmenar Viejo 24/02/24 >> Apartada Fuencarral 11/24."
      ]
    },
    "8": {
      "rama": "8",
      "vehiculoBase": "015",
      "numero": "9-450-015-3",
      "vehiculosRama": [
        "9-450-015-3",
        "7-450-222-5",
        "7-450-223-3",
        "7-450-008-8",
        "7-450-224-1",
        "9-450-016-1"
      ],
      "searchCodes": [
        "015",
        "222",
        "223",
        "008",
        "224",
        "016"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Focos LED. Teleindicadores exteriores de leds naranjas. Colores Rodalies 07/13."
      ]
    },
    "9": {
      "rama": "9",
      "vehiculoBase": "017",
      "numero": "9-450-017-9",
      "vehiculosRama": [
        "9-450-017-9",
        "7-450-225-8",
        "7-450-226-6",
        "7-450-009-6",
        "7-450-227-4",
        "9-450-018-7"
      ],
      "searchCodes": [
        "017",
        "225",
        "226",
        "009",
        "227",
        "018"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Vilanova",
      "color": "Blanco/Rojo",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Nuevo interior blanco. Ex-Fuencarral >> Traslado a Vilanova i la Geltrú 08/02/23 >> Valladolid Fuente Amarga 08/02/24 >> Madrid 06/24. Nueva botoneria 09/24 >> Vilanova."
      ]
    },
    "10": {
      "rama": "10",
      "vehiculoBase": "019",
      "numero": "9-450-019-5",
      "vehiculosRama": [
        "9-450-019-5",
        "7-450-228-2",
        "7-450-229-0",
        "7-450-010-4",
        "7-450-230-8",
        "9-450-020-3"
      ],
      "searchCodes": [
        "019",
        "228",
        "229",
        "010",
        "230",
        "020"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Apartado desde 07/10/22. S. V. de Calders >> En servicio Madrid 20/12/23. Apartada 23/02/26 a 04/26."
      ]
    },
    "11": {
      "rama": "11",
      "vehiculoBase": "021",
      "numero": "9-450-021-1",
      "vehiculosRama": [
        "9-450-021-1",
        "7-450-231-6",
        "7-450-232-4",
        "7-450-011-2",
        "7-450-233-2",
        "9-450-022-9"
      ],
      "searchCodes": [
        "021",
        "231",
        "232",
        "011",
        "233",
        "022"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Nuevo interior blanco. Descarrilada en Atocha 08/12/23. Apartada ZGZ Plaza."
      ]
    },
    "12": {
      "rama": "12",
      "vehiculoBase": "023",
      "numero": "9-450-023-7",
      "vehiculosRama": [
        "9-450-023-7",
        "7-450-234-0",
        "7-450-235-7",
        "7-450-012-0",
        "7-450-236-5",
        "9-450-024-5"
      ],
      "searchCodes": [
        "023",
        "234",
        "235",
        "012",
        "236",
        "024"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Apartada Montcada-Bifurcació 25/02/24. Trasladada Fuencarral 09/24."
      ]
    },
    "13": {
      "rama": "13",
      "vehiculoBase": "025",
      "numero": "9-450-025-2",
      "vehiculosRama": [
        "9-450-025-2",
        "7-450-237-3",
        "7-450-238-1",
        "7-450-013-8",
        "7-450-239-9",
        "9-450-026-0"
      ],
      "searchCodes": [
        "025",
        "237",
        "238",
        "013",
        "239",
        "026"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Choque topera Alcalá de Henares 22/12/17. Apartado temporalmente 01/23. De nuevo en servicio 04/23. Apartada en Zaragoza-Plaza 09/23. Trasladada a Sant Vicenç de Calders 01/24 >> Taller Vilanova 03/24 >> En servicio en Barcelona desde 20/06/24, prestada desde Fuencarral. De vuelta a Madrid, apartada 28/10/25."
      ]
    },
    "14": {
      "rama": "14",
      "vehiculoBase": "027",
      "numero": "9-450-027-8",
      "vehiculosRama": [
        "9-450-027-8",
        "7-450-251-4",
        "7-450-014-6",
        "7-450-242-3",
        "9-450-028-6"
      ],
      "searchCodes": [
        "027",
        "251",
        "014",
        "242",
        "028"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Baja / apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "5 coches · 2 coches motor + 3 remolques",
      "composicionRama": "Motor + remolque + remolque + remolque + motor",
      "notas": [
        "Atentados 11M en El Pozo, 11/03/04. Coches 240R y 241R desguazados en El Pozo, 15/03/04. Se agrega 251R (ex Rama 17) para hacer la rama de 5 coches, como remolque 1. Colores Renfe Op."
      ]
    },
    "15": {
      "rama": "15",
      "vehiculoBase": "029",
      "numero": "9-450-029-4",
      "vehiculosRama": [
        "9-450-029-4",
        "7-450-243-1",
        "7-450-244-9",
        "7-450-015-3",
        "7-450-245-6",
        "9-450-030-2"
      ],
      "searchCodes": [
        "029",
        "243",
        "244",
        "015",
        "245",
        "030"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Última en colores originales >> Colores Renfe Op. Teleindicadores de LEDs naranjas. Ex-Madrid >> Barcelona, 03/03/17 >> Colores Rodalies, desde 09/22."
      ]
    },
    "16": {
      "rama": "16",
      "vehiculoBase": "031",
      "numero": "9-450-031-0",
      "vehiculosRama": [
        "9-450-031-0",
        "7-450-246-4",
        "7-450-247-2",
        "7-450-016-1",
        "7-450-248-0",
        "9-450-032-8"
      ],
      "searchCodes": [
        "031",
        "246",
        "247",
        "016",
        "248",
        "032"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Última catalana en recibir colores Renfe Op. 5 coches >> 6 coches desde 10/08. Teleindicadores exteriores leds naranjas. 1ª unidad en colores Rodalies 21/12/11. Descarrilo El Prat 06/09/21."
      ]
    },
    "17": {
      "rama": "17",
      "vehiculoBase": "033",
      "numero": "9-450-033-6",
      "vehiculosRama": [
        "9-450-033-6",
        "7-450-249-8",
        "7-450-250-6",
        "7-450-017-9",
        "7-450-210-0",
        "9-450-034-4"
      ],
      "searchCodes": [
        "033",
        "249",
        "250",
        "017",
        "210",
        "034"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Coche 251R agregado a Rama 14 para crear dos ramas de 5 coches, tras atentados 11M. Colores Renfe Op. Nuevo interior blanco. Se agrega 210R (ex Rama 4) como remolque 4, 09/21."
      ]
    },
    "18": {
      "rama": "18",
      "vehiculoBase": "035",
      "numero": "9-450-035-1",
      "vehiculosRama": [
        "9-450-035-1",
        "7-450-252-2",
        "7-450-253-0",
        "7-450-018-7",
        "7-450-254-8",
        "9-450-036-9"
      ],
      "searchCodes": [
        "035",
        "252",
        "253",
        "018",
        "254",
        "036"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Ex-Vilanova >> Madrid desde 08/12/23. Apartada en Alcalá de Henares 23/02/26."
      ]
    },
    "19": {
      "rama": "19",
      "vehiculoBase": "037",
      "numero": "9-450-037-7",
      "vehiculosRama": [
        "9-450-037-7",
        "7-450-255-5",
        "7-450-256-3",
        "7-450-019-5",
        "7-450-257-1",
        "9-450-038-5"
      ],
      "searchCodes": [
        "037",
        "255",
        "256",
        "019",
        "257",
        "038"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Apartada 23/02/26 a 04/26."
      ]
    },
    "20": {
      "rama": "20",
      "vehiculoBase": "039",
      "numero": "9-450-039-3",
      "vehiculosRama": [
        "9-450-039-3",
        "7-450-258-9",
        "7-450-259-7",
        "7-450-020-3",
        "7-450-260-5",
        "9-450-040-1"
      ],
      "searchCodes": [
        "039",
        "258",
        "259",
        "020",
        "260",
        "040"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Pilotos LED. Teleindicadores exteriores leds naranjas. 2ª 450 en colores Rodalies."
      ]
    },
    "21": {
      "rama": "21",
      "vehiculoBase": "041",
      "numero": "9-450-041-9",
      "vehiculosRama": [
        "9-450-041-9",
        "7-450-261-3",
        "7-450-262-1",
        "7-450-021-1",
        "7-450-263-9",
        "9-450-042-7"
      ],
      "searchCodes": [
        "041",
        "261",
        "262",
        "021",
        "263",
        "042"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Apartada 27/02/26."
      ]
    },
    "22": {
      "rama": "22",
      "vehiculoBase": "043",
      "numero": "9-450-043-5",
      "vehiculosRama": [
        "9-450-043-5",
        "7-450-264-7",
        "7-450-265-4",
        "7-450-022-9",
        "7-450-266-2",
        "9-450-044-3"
      ],
      "searchCodes": [
        "043",
        "264",
        "265",
        "022",
        "266",
        "044"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Nuevo interior blanco. Apartado temporalmente 01/23. De nuevo en servicio 03/23. Apartada 23/02/26 >> En servicio."
      ]
    },
    "23": {
      "rama": "23",
      "vehiculoBase": "045",
      "numero": "9-450-045-0",
      "vehiculosRama": [
        "9-450-045-0",
        "7-450-267-0",
        "7-450-268-8",
        "7-450-023-7",
        "7-450-269-6",
        "9-450-046-8"
      ],
      "searchCodes": [
        "045",
        "267",
        "268",
        "023",
        "269",
        "046"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Fuencarral",
      "color": "Blanco/Rojo",
      "estado": "Apartada",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Colores Renfe Op. Nuevo interior, blanco y con paneles de pared como las 447 PMR, 03/16. Descarrilo agujas Atocha 05/12/23. Apartada 23/02/26 a 04/26."
      ]
    },
    "24": {
      "rama": "24",
      "vehiculoBase": "047",
      "numero": "9-450-047-6",
      "vehiculosRama": [
        "9-450-047-6",
        "7-450-270-4",
        "7-450-271-2",
        "7-450-024-5",
        "7-450-272-0",
        "9-450-048-4"
      ],
      "searchCodes": [
        "047",
        "270",
        "271",
        "024",
        "272",
        "048"
      ],
      "fabricante": "ATEINSA, MTM",
      "subserie": "450 · 6 coches",
      "deposito": "Vilanova",
      "color": "Blanco/Naranja",
      "estado": "En servicio",
      "ano": "1990–1994",
      "ancho": "1668",
      "numeroCoches": "6 coches · 2 coches motor + 4 remolques de dos pisos",
      "composicionRama": "Motor + remolque + remolque + remolque + remolque + motor",
      "notas": [
        "Pilotos LED + teleindicadores exteriores leds. Colores Rodalies 06/13. En 12/14 circula temporalmente con 4 coches."
      ]
    }
  }
},
  "451": {
    "seriesName": "Serie 451 · Cercanías · 3 coches",
    "fabricante": "ATEINSA, MTM",
    "modelo": "Unidad eléctrica de dos pisos",
    "apodo": "Buque",
    "subseries": "451 · 3 coches",
    "anoPuestaServicio": "1994–1995",
    "tipoMaterial": "Cercanías · Tren de dos pisos · Gran capacidad",
    "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
    "anchoVia": "1668 mm",
    "numeroRamas": 12,
    "velocidadMaxima": "140 km/h",
    "potencia": "2.960 kW",
    "longitud": "81 m",
    "peso": "177 t",
    "tension": "3.000 Vcc",
    "traccion": "4 motores de tracción · potencia total 2.960 kW",
    "tipoBogies": "Bimotor y monorreductor",
    "anchoCaja": "2.926 mm",
    "alturaTecho": "4.300 mm",
    "longitudMotor": "27.130 mm",
    "pesoPorEje": "14,75 t",
    "frenos": "Eléctrico reostático · neumático por aire comprimido",
    "enganche": "Scharfenberg",
    "composicion": "Bo’Bo’ + 2’2’ + 2’2’",
    "generalNotes": [
      "Una vez completadas las unidades de la serie 450 con dos coches motores en cada extremo, los coches remolque con cabina junto a otros tantos coches motores sirvieron para formar las unidades 451, compuestas por un coche motor, un coche remolque intermedio y otro remolque con cabina.",
      "Las unidades de la serie 451 prestan servicio en la red de Rodalies Barcelona y tienen depósito en Vilanova.",
      "Los coches de la serie 451 proceden de los remolques con cabina de las composiciones de la serie 450 y de coches motores asociados, manteniendo la misma numeración de rama.",
      "La rama puede localizarse mediante cualquiera de los tres vehículos de la composición: motor, remolque intermedio o remolque con cabina."
    ],
    "units": {
      "1": {
        "rama": "1",
        "vehiculoBase": "001",
        "numero": "9-451-001-2",
        "vehiculosRama": ["9-451-001-2", "7-451-001-2", "8-451-001-2"],
        "searchCodes": ["001"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 01. Teleindicadores frontales y laterales led's. Colores Renfe Op. >> Colores Rodalies."]
      },
      "2": {
        "rama": "2",
        "vehiculoBase": "002",
        "numero": "9-451-002-0",
        "vehiculosRama": ["9-451-002-0", "7-451-002-0", "8-451-002-0"],
        "searchCodes": ["002"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 02 (1ª con colores Renfe Op.) > (4ª en colores Rodalies de Catalunya.). Teleindicadores exteriores de leds naranjas. Ex-vinilos logos 75 Aniversario"]
      },
      "3": {
        "rama": "3",
        "vehiculoBase": "003",
        "numero": "9-451-003-8",
        "vehiculosRama": ["9-451-003-8", "7-451-003-8", "8-451-003-8"],
        "searchCodes": ["003"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 03. Interior remodelado como los Civia. Colores Rodalies de Catalunya. Tercera unidad con nuevos colores RdC. Teleindicadores exteriores LED"]
      },
      "4": {
        "rama": "4",
        "vehiculoBase": "004",
        "numero": "9-451-004-6",
        "vehiculosRama": ["9-451-004-6", "7-451-004-6", "8-451-004-6"],
        "searchCodes": ["004"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 04. Interior remodelado como los Civia. Colores Renfe Op. Círculo sin logo frontal. Última en repintarse a los nuevos colores. >> 6ª 451 en recibir los colores Rodalies. Vinilo logos 75 Aniversario"]
      },
      "5": {
        "rama": "5",
        "vehiculoBase": "005",
        "numero": "9-451-005-3",
        "vehiculosRama": ["9-451-005-3", "7-451-005-3", "8-451-005-3"],
        "searchCodes": ["005"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 05. Colores Renfe Op. Desde 15/12/10 con los nuevos colores de Rodalies de Catalunya. Teleindicadores frontales y laterales led's."]
      },
      "6": {
        "rama": "6",
        "vehiculoBase": "006",
        "numero": "9-451-006-1",
        "vehiculosRama": ["9-451-006-1", "7-451-006-1", "8-451-006-1"],
        "searchCodes": ["006"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 06. Colores Renfe Op. Teleindicadores frontales y laterales led's. Colores Rodalies desde 03/14"]
      },
      "7": {
        "rama": "7",
        "vehiculoBase": "007",
        "numero": "9-451-007-9",
        "vehiculosRama": ["9-451-007-9", "7-451-007-9", "8-451-007-9"],
        "searchCodes": ["007"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 07. Colores Renfe Op. Teleindicadores led>>Colores Rodalies 06/13"]
      },
      "8": {
        "rama": "8",
        "vehiculoBase": "008",
        "numero": "9-451-008-7",
        "vehiculosRama": ["9-451-008-7", "7-451-008-7", "8-451-008-7"],
        "searchCodes": ["008"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 08. Colores Renfe Op. Teleindicadores exteriores de leds naranjas. 7ª unidad en recibir colores Rodalies 11/12."]
      },
      "9": {
        "rama": "9",
        "vehiculoBase": "009",
        "numero": "9-451-009-5",
        "vehiculosRama": ["9-451-009-5", "7-451-009-5", "8-451-009-5"],
        "searchCodes": ["009"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 09. Colores Renfe Op. Teleindicadores exteriores de leds naranjas>>Colores Rodalies 05/13"]
      },
      "10": {
        "rama": "10",
        "vehiculoBase": "010",
        "numero": "9-451-010-3",
        "vehiculosRama": ["9-451-010-3", "7-451-010-3", "8-451-010-3"],
        "searchCodes": ["010"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 10. Colores Renfe Op. 5ª unidad en colores Rodalies. Teleindicadores led. Descarrilo en Estació de França 18/12/19. En servicio. Nueva batería."]
      },
      "11": {
        "rama": "11",
        "vehiculoBase": "011",
        "numero": "9-451-011-1",
        "vehiculosRama": ["9-451-011-1", "7-451-011-1", "8-451-011-1"],
        "searchCodes": ["011"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 11. Ex. Colores Renfe Op. Primera 451 con colores Rodalies desde 02/08/10. Teleindicadores exteriores de leds naranjas."]
      },
      "12": {
        "rama": "12",
        "vehiculoBase": "012",
        "numero": "9-451-012-9",
        "vehiculosRama": ["9-451-012-9", "7-451-012-9", "8-451-012-9"],
        "searchCodes": ["012"],
        "fabricante": "ATEINSA, MTM",
        "subserie": "451 · 3 coches",
        "deposito": "Vilanova",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": "1994–1995",
        "ancho": "1668",
        "numeroCoches": "3 coches · 1 coche motor + 1 remolque intermedio + 1 remolque con cabina",
        "composicionRama": "Motor + remolque + remolque con cabina",
        "notas": ["Rama 12. Colores Renfe Op. Teleindicadores frontales y laterales Led's.Colores de Rodalies 02/13"]
      }
    }
  },
  "453": {
    "seriesName": "Serie 453.0 · Stadler · TL100 · 4 coches",
    "fabricante": "Stadler Rail",
    "modelo": "FLIRT / KISS · TL100",
    "apodo": "Cercanías Stadler",
    "subseries": "453.0 · TL100 · 4 coches",
    "anoPuestaServicio": "2026",
    "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T100",
    "numeroCoches": "4 coches · 2 motores cabina + 2 remolques de dos pisos",
    "anchoVia": "1668 mm",
    "numeroRamas": 24,
    "velocidadMaxima": "140 km/h",
    "potencia": "4.000 kW",
    "esfuerzoTraccion": "320 kN",
    "longitud": "97,72 m",
    "peso": "207/272 t (tara/carga normal)",
    "tension": "3.000 V cc",
    "traccion": "8 motores de tracción · 500 kW por motor",
    "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
    "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mc",
    "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
    "plazasSentadas": "252",
    "capacidad": "912 plazas (252 sentadas + 660 de pie)",
    "frenos": "Eléctrico reostático y regenerativo · neumático",
    "mandoMultiple": "3 unidades máximo",
    "enganche": "Scharfenberg",
    "generalNotes": [
      "Serie de trenes modulares fabricados por Stadler para Cercanías, versión de cuatro coches TL100 (subserie 453.0), concebida como sustituta de material de Cercanías más antiguo.",
      "El modelo 453.0 está formado por cuatro coches: Mc-R-R-Mc. Los dos coches extremos son motores de piso bajo con cabina y los dos coches centrales son remolques de dos pisos.",
      "La serie 453 forma parte de la nueva familia modular de Stadler para Renfe: el diseño permite ampliar las composiciones y el pedido inicial comprendió 24 trenes TL100 de cuatro coches y 55 TL200 de ocho coches, dentro de un total de 79 trenes contratados. Stadler denomina TL100 a la configuración de cuatro coches y unos 100 metros.",
      "Renfe utiliza una rotulación simplificada de cuatro cifras: 1001 + 3001 + 3002 + 2001 para la primera rama. El primer dígito identifica el tipo de coche, el segundo la subserie (0 en la 453.0) y los dos últimos el número de la rama.",
      "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico fijo de 1.668 mm, con una velocidad máxima de 140 km/h. El T100 alcanza aproximadamente 100 metros de longitud y hasta 912 plazas.",
      "La tracción del T100 utiliza ocho motores de 500 kW, con una potencia nominal total de 4.000 kW. El tren dispone además de frenado eléctrico reostático y regenerativo y freno neumático.",
      "El equipamiento de seguridad y señalización incluye ASFA Digital y ERTMS niveles 1 y 2, además de PUC para comunicaciones ferroviarias (GSM-R y Tren-Tierra), según la ficha técnica aportada.",
      "Los coches motores extremos incorporan los pantógrafos, dos por tren. El coche motor de cabina par integra el espacio PMR y aseo accesible; el motor impar dispone de espacios para bicicletas. El tren dispone de puertas a nivel en los coches de piso bajo.",
      "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios accesibles. También dispone de baterías 'last mile' para pequeños desplazamientos sin alimentación de catenaria en maniobras o taller."
],
    "units": {
      "1": {
            "rama": "1",
            "vehiculoBase": "001",
            "numero": "1-453-001-9",
            "vehiculosRama": [
                  "1-453-001-9",
                  "3-453-001-5",
                  "3-453-002-3",
                  "2-453-001-7"
            ],
            "searchCodes": [
                  "001",
                  "1001",
                  "3001",
                  "2001"
            ],
            "deposito": "Fuencarral",
            "color": "Cercanías",
            "estado": "En pruebas",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "En pruebas 14/08/24"
            ]
      },
      "2": {
            "rama": "2",
            "vehiculoBase": "002",
            "numero": "1-453-002-7",
            "vehiculosRama": [
                  "1-453-002-7",
                  "3-453-003-1",
                  "3-453-004-9",
                  "2-453-002-5"
            ],
            "searchCodes": [
                  "002",
                  "1002",
                  "3003",
                  "2002"
            ],
            "deposito": "Fuencarral",
            "color": "Cercanías",
            "estado": "En pruebas",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "3": {
            "rama": "3",
            "vehiculoBase": "003",
            "numero": "1-453-003-5",
            "vehiculosRama": [
                  "1-453-003-5",
                  "3-453-005-7",
                  "3-453-006-5",
                  "2-453-003-3"
            ],
            "searchCodes": [
                  "003",
                  "1003",
                  "3005",
                  "2003"
            ],
            "deposito": "Fuencarral",
            "color": "Cercanías",
            "estado": "En servicio",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "Primero de la serie 453.0 en servicio comercial."
            ]
      },
      "4": {
            "rama": "4",
            "vehiculoBase": "004",
            "numero": "1-453-004-3",
            "vehiculosRama": [
                  "1-453-004-3",
                  "3-453-007-3",
                  "3-453-008-1",
                  "2-453-004-1"
            ],
            "searchCodes": [
                  "004",
                  "1004",
                  "3007",
                  "2004"
            ],
            "deposito": "Fuencarral",
            "color": "Cercanías",
            "estado": "En pruebas",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "5": {
            "rama": "5",
            "vehiculoBase": "005",
            "numero": "1-453-005-1",
            "vehiculosRama": [
                  "1-453-005-1",
                  "3-453-009-9",
                  "3-453-010-6",
                  "2-453-005-9"
            ],
            "searchCodes": [
                  "005",
                  "1005",
                  "3009",
                  "2005"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "6": {
            "rama": "6",
            "vehiculoBase": "006",
            "numero": "1-453-006-9",
            "vehiculosRama": [
                  "1-453-006-9",
                  "3-453-011-4",
                  "3-453-012-2",
                  "2-453-006-7"
            ],
            "searchCodes": [
                  "006",
                  "1006",
                  "3011",
                  "2006"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "7": {
            "rama": "7",
            "vehiculoBase": "007",
            "numero": "1-453-007-7",
            "vehiculosRama": [
                  "1-453-007-7",
                  "3-453-013-0",
                  "3-453-014-8",
                  "2-453-007-5"
            ],
            "searchCodes": [
                  "007",
                  "1007",
                  "3013",
                  "2007"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "8": {
            "rama": "8",
            "vehiculoBase": "008",
            "numero": "1-453-008-5",
            "vehiculosRama": [
                  "1-453-008-5",
                  "3-453-015-6",
                  "3-453-016-4",
                  "2-453-008-3"
            ],
            "searchCodes": [
                  "008",
                  "1008",
                  "3015",
                  "2008"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "9": {
            "rama": "9",
            "vehiculoBase": "009",
            "numero": "1-453-009-3",
            "vehiculosRama": [
                  "1-453-009-3",
                  "3-453-017-2",
                  "3-453-018-0",
                  "2-453-009-1"
            ],
            "searchCodes": [
                  "009",
                  "1009",
                  "3017",
                  "2009"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "10": {
            "rama": "10",
            "vehiculoBase": "010",
            "numero": "1-453-010-0",
            "vehiculosRama": [
                  "1-453-010-0",
                  "3-453-019-8",
                  "3-453-020-5",
                  "2-453-010-8"
            ],
            "searchCodes": [
                  "010",
                  "1010",
                  "3019",
                  "2010"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "11": {
            "rama": "11",
            "vehiculoBase": "011",
            "numero": "1-453-011-8",
            "vehiculosRama": [
                  "1-453-011-8",
                  "3-453-021-3",
                  "3-453-022-1",
                  "2-453-011-6"
            ],
            "searchCodes": [
                  "011",
                  "1011",
                  "3021",
                  "2011"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "12": {
            "rama": "12",
            "vehiculoBase": "012",
            "numero": "1-453-012-6",
            "vehiculosRama": [
                  "1-453-012-6",
                  "3-453-023-9",
                  "3-453-024-7",
                  "2-453-012-4"
            ],
            "searchCodes": [
                  "012",
                  "1012",
                  "3023",
                  "2012"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "13": {
            "rama": "13",
            "vehiculoBase": "013",
            "numero": "1-453-013-4",
            "vehiculosRama": [
                  "1-453-013-4",
                  "3-453-025-5",
                  "3-453-026-3",
                  "2-453-013-2"
            ],
            "searchCodes": [
                  "013",
                  "1013",
                  "3025",
                  "2013"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "14": {
            "rama": "14",
            "vehiculoBase": "014",
            "numero": "1-453-014-2",
            "vehiculosRama": [
                  "1-453-014-2",
                  "3-453-027-1",
                  "3-453-028-9",
                  "2-453-014-0"
            ],
            "searchCodes": [
                  "014",
                  "1014",
                  "3027",
                  "2014"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "15": {
            "rama": "15",
            "vehiculoBase": "015",
            "numero": "1-453-015-0",
            "vehiculosRama": [
                  "1-453-015-0",
                  "3-453-029-7",
                  "3-453-030-4",
                  "2-453-015-8"
            ],
            "searchCodes": [
                  "015",
                  "1015",
                  "3029",
                  "2015"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "16": {
            "rama": "16",
            "vehiculoBase": "016",
            "numero": "1-453-016-8",
            "vehiculosRama": [
                  "1-453-016-8",
                  "3-453-031-2",
                  "3-453-032-0",
                  "2-453-016-6"
            ],
            "searchCodes": [
                  "016",
                  "1016",
                  "3031",
                  "2016"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "17": {
            "rama": "17",
            "vehiculoBase": "017",
            "numero": "1-453-017-6",
            "vehiculosRama": [
                  "1-453-017-6",
                  "3-453-033-8",
                  "3-453-034-6",
                  "2-453-017-4"
            ],
            "searchCodes": [
                  "017",
                  "1017",
                  "3033",
                  "2017"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "18": {
            "rama": "18",
            "vehiculoBase": "018",
            "numero": "1-453-018-4",
            "vehiculosRama": [
                  "1-453-018-4",
                  "3-453-035-4",
                  "3-453-036-2",
                  "2-453-018-2"
            ],
            "searchCodes": [
                  "018",
                  "1018",
                  "3035",
                  "2018"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "19": {
            "rama": "19",
            "vehiculoBase": "019",
            "numero": "1-453-019-2",
            "vehiculosRama": [
                  "1-453-019-2",
                  "3-453-037-0",
                  "3-453-038-8",
                  "2-453-019-0"
            ],
            "searchCodes": [
                  "019",
                  "1019",
                  "3037",
                  "2019"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "20": {
            "rama": "20",
            "vehiculoBase": "020",
            "numero": "1-453-020-9",
            "vehiculosRama": [
                  "1-453-020-9",
                  "3-453-039-6",
                  "3-453-040-3",
                  "2-453-020-7"
            ],
            "searchCodes": [
                  "020",
                  "1020",
                  "3039",
                  "2020"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "21": {
            "rama": "21",
            "vehiculoBase": "021",
            "numero": "1-453-021-7",
            "vehiculosRama": [
                  "1-453-021-7",
                  "3-453-041-1",
                  "3-453-042-9",
                  "2-453-021-5"
            ],
            "searchCodes": [
                  "021",
                  "1021",
                  "3041",
                  "2021"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "22": {
            "rama": "22",
            "vehiculoBase": "022",
            "numero": "1-453-022-5",
            "vehiculosRama": [
                  "1-453-022-5",
                  "3-453-043-7",
                  "3-453-044-5",
                  "2-453-022-3"
            ],
            "searchCodes": [
                  "022",
                  "1022",
                  "3043",
                  "2022"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "23": {
            "rama": "23",
            "vehiculoBase": "023",
            "numero": "1-453-023-3",
            "vehiculosRama": [
                  "1-453-023-3",
                  "3-453-045-3",
                  "3-453-046-1",
                  "2-453-023-1"
            ],
            "searchCodes": [
                  "023",
                  "1023",
                  "3045",
                  "2023"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "24": {
            "rama": "24",
            "vehiculoBase": "024",
            "numero": "1-453-024-1",
            "vehiculosRama": [
                  "1-453-024-1",
                  "3-453-047-9",
                  "3-453-048-7",
                  "2-453-024-9"
            ],
            "searchCodes": [
                  "024",
                  "1024",
                  "3047",
                  "2024"
            ],
            "deposito": "Fuencarral",
            "color": "",
            "estado": "En construcción",
            "ano": 2026,
            "fechaAlta": "2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      }
},
    "unitsTL200": {
      "1": {
        "rama": "1",
        "vehiculoBase": "001",
        "numero": "1-453-601-6",
        "vehiculosRama": [
          "1-453-601-6",
          "3-453-601-2",
          "3-453-602-3",
          "4-453-601-0",
          "4-453-602-8",
          "3-453-603-8",
          "3-453-604-6",
          "2-453-601-4"
        ],
        "searchCodes": [
          "001",
          "1601",
          "2601"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En pruebas",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "2": {
        "rama": "2",
        "vehiculoBase": "002",
        "numero": "1-453-602-4",
        "vehiculosRama": [
          "1-453-602-4",
          "3-453-602-0",
          "3-453-603-8",
          "4-453-602-8",
          "4-453-603-6",
          "3-453-604-6",
          "3-453-605-3",
          "2-453-602-2"
        ],
        "searchCodes": [
          "002",
          "1602",
          "2602"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En pruebas",
        "ano": 2025,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "Vinilo blanco durante pruebas (Desde 09/25)."
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "3": {
        "rama": "3",
        "vehiculoBase": "003",
        "numero": "1-453-603-2",
        "vehiculosRama": [
          "1-453-603-2",
          "3-453-603-8",
          "3-453-604-6",
          "4-453-603-6",
          "4-453-604-4",
          "3-453-605-3",
          "3-453-606-1",
          "2-453-603-0"
        ],
        "searchCodes": [
          "003",
          "1603",
          "2603"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En servicio",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "Primero de la serie 453.6 en servicio comercial."
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "4": {
        "rama": "4",
        "vehiculoBase": "004",
        "numero": "1-453-604-0",
        "vehiculosRama": [
          "1-453-604-0",
          "3-453-604-6",
          "3-453-605-3",
          "4-453-604-4",
          "4-453-605-1",
          "3-453-606-1",
          "3-453-607-9",
          "2-453-604-8"
        ],
        "searchCodes": [
          "004",
          "1604",
          "2604"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "5": {
        "rama": "5",
        "vehiculoBase": "005",
        "numero": "1-453-605-7",
        "vehiculosRama": [
          "1-453-605-7",
          "3-453-605-3",
          "3-453-606-1",
          "4-453-605-1",
          "4-453-606-9",
          "3-453-607-9",
          "3-453-608-7",
          "2-453-605-5"
        ],
        "searchCodes": [
          "005",
          "1605",
          "2605"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "6": {
        "rama": "6",
        "vehiculoBase": "006",
        "numero": "1-453-606-5",
        "vehiculosRama": [
          "1-453-606-5",
          "3-453-606-1",
          "3-453-607-9",
          "4-453-606-9",
          "4-453-607-7",
          "3-453-608-7",
          "3-453-609-5",
          "2-453-606-3"
        ],
        "searchCodes": [
          "006",
          "1606",
          "2606"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "7": {
        "rama": "7",
        "vehiculoBase": "007",
        "numero": "1-453-607-3",
        "vehiculosRama": [
          "1-453-607-3",
          "3-453-607-9",
          "3-453-608-7",
          "4-453-607-7",
          "4-453-608-5",
          "3-453-609-5",
          "3-453-610-3",
          "2-453-607-1"
        ],
        "searchCodes": [
          "007",
          "1607",
          "2607"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "8": {
        "rama": "8",
        "vehiculoBase": "008",
        "numero": "1-453-608-1",
        "vehiculosRama": [
          "1-453-608-1",
          "3-453-608-7",
          "3-453-609-5",
          "4-453-608-5",
          "4-453-609-3",
          "3-453-610-3",
          "3-453-611-1",
          "2-453-608-9"
        ],
        "searchCodes": [
          "008",
          "1608",
          "2608"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "9": {
        "rama": "9",
        "vehiculoBase": "009",
        "numero": "1-453-609-9",
        "vehiculosRama": [
          "1-453-609-9",
          "3-453-609-5",
          "3-453-610-3",
          "4-453-609-3",
          "4-453-610-1",
          "3-453-611-1",
          "3-453-612-9",
          "2-453-609-7"
        ],
        "searchCodes": [
          "009",
          "1609",
          "2609"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "10": {
        "rama": "10",
        "vehiculoBase": "010",
        "numero": "1-453-610-7",
        "vehiculosRama": [
          "1-453-610-7",
          "3-453-610-3",
          "3-453-611-1",
          "4-453-610-1",
          "4-453-611-9",
          "3-453-612-9",
          "3-453-613-7",
          "2-453-610-5"
        ],
        "searchCodes": [
          "010",
          "1610",
          "2610"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "11": {
        "rama": "11",
        "vehiculoBase": "011",
        "numero": "1-453-611-5",
        "vehiculosRama": [
          "1-453-611-5",
          "3-453-611-1",
          "3-453-612-9",
          "4-453-611-9",
          "4-453-612-7",
          "3-453-613-7",
          "3-453-614-5",
          "2-453-611-3"
        ],
        "searchCodes": [
          "011",
          "1611",
          "2611"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "12": {
        "rama": "12",
        "vehiculoBase": "012",
        "numero": "1-453-612-3",
        "vehiculosRama": [
          "1-453-612-3",
          "3-453-612-9",
          "3-453-613-7",
          "4-453-612-7",
          "4-453-613-5",
          "3-453-614-5",
          "3-453-615-2",
          "2-453-612-1"
        ],
        "searchCodes": [
          "012",
          "1612",
          "2612"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "13": {
        "rama": "13",
        "vehiculoBase": "013",
        "numero": "1-453-613-1",
        "vehiculosRama": [
          "1-453-613-1",
          "3-453-613-7",
          "3-453-614-5",
          "4-453-613-5",
          "4-453-614-3",
          "3-453-615-2",
          "3-453-616-0",
          "2-453-613-9"
        ],
        "searchCodes": [
          "013",
          "1613",
          "2613"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "14": {
        "rama": "14",
        "vehiculoBase": "014",
        "numero": "1-453-614-9",
        "vehiculosRama": [
          "1-453-614-9",
          "3-453-614-5",
          "3-453-615-2",
          "4-453-614-3",
          "4-453-615-0",
          "3-453-616-0",
          "3-453-617-8",
          "2-453-614-7"
        ],
        "searchCodes": [
          "014",
          "1614",
          "2614"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "15": {
        "rama": "15",
        "vehiculoBase": "015",
        "numero": "1-453-615-6",
        "vehiculosRama": [
          "1-453-615-6",
          "3-453-615-2",
          "3-453-616-0",
          "4-453-615-0",
          "4-453-616-8",
          "3-453-617-8",
          "3-453-618-6",
          "2-453-615-4"
        ],
        "searchCodes": [
          "015",
          "1615",
          "2615"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "16": {
        "rama": "16",
        "vehiculoBase": "016",
        "numero": "1-453-616-4",
        "vehiculosRama": [
          "1-453-616-4",
          "3-453-616-0",
          "3-453-617-8",
          "4-453-616-8",
          "4-453-617-6",
          "3-453-618-6",
          "3-453-619-4",
          "2-453-616-2"
        ],
        "searchCodes": [
          "016",
          "1616",
          "2616"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "17": {
        "rama": "17",
        "vehiculoBase": "017",
        "numero": "1-453-617-2",
        "vehiculosRama": [
          "1-453-617-2",
          "3-453-617-8",
          "3-453-618-6",
          "4-453-617-6",
          "4-453-618-4",
          "3-453-619-4",
          "3-453-620-2",
          "2-453-617-0"
        ],
        "searchCodes": [
          "017",
          "1617",
          "2617"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "18": {
        "rama": "18",
        "vehiculoBase": "018",
        "numero": "1-453-618-0",
        "vehiculosRama": [
          "1-453-618-0",
          "3-453-618-6",
          "3-453-619-4",
          "4-453-618-4",
          "4-453-619-2",
          "3-453-620-2",
          "3-453-621-0",
          "2-453-618-8"
        ],
        "searchCodes": [
          "018",
          "1618",
          "2618"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "19": {
        "rama": "19",
        "vehiculoBase": "019",
        "numero": "1-453-619-8",
        "vehiculosRama": [
          "1-453-619-8",
          "3-453-619-4",
          "3-453-620-2",
          "4-453-619-2",
          "4-453-620-0",
          "3-453-621-0",
          "3-453-622-8",
          "2-453-619-6"
        ],
        "searchCodes": [
          "019",
          "1619",
          "2619"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "20": {
        "rama": "20",
        "vehiculoBase": "020",
        "numero": "1-453-620-6",
        "vehiculosRama": [
          "1-453-620-6",
          "3-453-620-2",
          "3-453-621-0",
          "4-453-620-0",
          "4-453-621-8",
          "3-453-622-8",
          "3-453-623-6",
          "2-453-620-4"
        ],
        "searchCodes": [
          "020",
          "1620",
          "2620"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "21": {
        "rama": "21",
        "vehiculoBase": "021",
        "numero": "1-453-621-4",
        "vehiculosRama": [
          "1-453-621-4",
          "3-453-621-0",
          "3-453-622-8",
          "4-453-621-8",
          "4-453-622-6",
          "3-453-623-6",
          "3-453-624-4",
          "2-453-621-2"
        ],
        "searchCodes": [
          "021",
          "1621",
          "2621"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "22": {
        "rama": "22",
        "vehiculoBase": "022",
        "numero": "1-453-622-2",
        "vehiculosRama": [
          "1-453-622-2",
          "3-453-622-8",
          "3-453-623-6",
          "4-453-622-6",
          "4-453-623-4",
          "3-453-624-4",
          "3-453-625-1",
          "2-453-622-0"
        ],
        "searchCodes": [
          "022",
          "1622",
          "2622"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "23": {
        "rama": "23",
        "vehiculoBase": "023",
        "numero": "1-453-623-0",
        "vehiculosRama": [
          "1-453-623-0",
          "3-453-623-6",
          "3-453-624-4",
          "4-453-623-4",
          "4-453-624-2",
          "3-453-625-1",
          "3-453-626-9",
          "2-453-623-8"
        ],
        "searchCodes": [
          "023",
          "1623",
          "2623"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "24": {
        "rama": "24",
        "vehiculoBase": "024",
        "numero": "1-453-624-8",
        "vehiculosRama": [
          "1-453-624-8",
          "3-453-624-4",
          "3-453-625-1",
          "4-453-624-2",
          "4-453-625-9",
          "3-453-626-9",
          "3-453-627-7",
          "2-453-624-6"
        ],
        "searchCodes": [
          "024",
          "1624",
          "2624"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "25": {
        "rama": "25",
        "vehiculoBase": "025",
        "numero": "1-453-625-5",
        "vehiculosRama": [
          "1-453-625-5",
          "3-453-625-1",
          "3-453-626-9",
          "4-453-625-9",
          "4-453-626-7",
          "3-453-627-7",
          "3-453-628-5",
          "2-453-625-3"
        ],
        "searchCodes": [
          "025",
          "1625",
          "2625"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "26": {
        "rama": "26",
        "vehiculoBase": "026",
        "numero": "1-453-626-3",
        "vehiculosRama": [
          "1-453-626-3",
          "3-453-626-9",
          "3-453-627-7",
          "4-453-626-7",
          "4-453-627-5",
          "3-453-628-5",
          "3-453-629-3",
          "2-453-626-1"
        ],
        "searchCodes": [
          "026",
          "1626",
          "2626"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "27": {
        "rama": "27",
        "vehiculoBase": "027",
        "numero": "1-453-627-1",
        "vehiculosRama": [
          "1-453-627-1",
          "3-453-627-7",
          "3-453-628-5",
          "4-453-627-5",
          "4-453-628-3",
          "3-453-629-3",
          "3-453-630-1",
          "2-453-627-9"
        ],
        "searchCodes": [
          "027",
          "1627",
          "2627"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "28": {
        "rama": "28",
        "vehiculoBase": "028",
        "numero": "1-453-628-9",
        "vehiculosRama": [
          "1-453-628-9",
          "3-453-628-5",
          "3-453-629-3",
          "4-453-628-3",
          "4-453-629-1",
          "3-453-630-1",
          "3-453-631-9",
          "2-453-628-7"
        ],
        "searchCodes": [
          "028",
          "1628",
          "2628"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "29": {
        "rama": "29",
        "vehiculoBase": "029",
        "numero": "1-453-629-7",
        "vehiculosRama": [
          "1-453-629-7",
          "3-453-629-3",
          "3-453-630-1",
          "4-453-629-1",
          "4-453-630-9",
          "3-453-631-9",
          "3-453-632-7",
          "2-453-629-5"
        ],
        "searchCodes": [
          "029",
          "1629",
          "2629"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "30": {
        "rama": "30",
        "vehiculoBase": "030",
        "numero": "1-453-630-5",
        "vehiculosRama": [
          "1-453-630-5",
          "3-453-630-1",
          "3-453-631-9",
          "4-453-630-9",
          "4-453-631-7",
          "3-453-632-7",
          "3-453-633-5",
          "2-453-630-3"
        ],
        "searchCodes": [
          "030",
          "1630",
          "2630"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "31": {
        "rama": "31",
        "vehiculoBase": "031",
        "numero": "1-453-631-3",
        "vehiculosRama": [
          "1-453-631-3",
          "3-453-631-9",
          "3-453-632-7",
          "4-453-631-7",
          "4-453-632-5",
          "3-453-633-5",
          "3-453-634-3",
          "2-453-631-1"
        ],
        "searchCodes": [
          "031",
          "1631",
          "2631"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "32": {
        "rama": "32",
        "vehiculoBase": "032",
        "numero": "1-453-632-1",
        "vehiculosRama": [
          "1-453-632-1",
          "3-453-632-7",
          "3-453-633-5",
          "4-453-632-5",
          "4-453-633-3",
          "3-453-634-3",
          "3-453-635-0",
          "2-453-632-9"
        ],
        "searchCodes": [
          "032",
          "1632",
          "2632"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "33": {
        "rama": "33",
        "vehiculoBase": "033",
        "numero": "1-453-633-9",
        "vehiculosRama": [
          "1-453-633-9",
          "3-453-633-5",
          "3-453-634-3",
          "4-453-633-3",
          "4-453-634-1",
          "3-453-635-0",
          "3-453-636-8",
          "2-453-633-7"
        ],
        "searchCodes": [
          "033",
          "1633",
          "2633"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "34": {
        "rama": "34",
        "vehiculoBase": "034",
        "numero": "1-453-634-7",
        "vehiculosRama": [
          "1-453-634-7",
          "3-453-634-3",
          "3-453-635-0",
          "4-453-634-1",
          "4-453-635-8",
          "3-453-636-8",
          "3-453-637-6",
          "2-453-634-5"
        ],
        "searchCodes": [
          "034",
          "1634",
          "2634"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "35": {
        "rama": "35",
        "vehiculoBase": "035",
        "numero": "1-453-635-4",
        "vehiculosRama": [
          "1-453-635-4",
          "3-453-635-0",
          "3-453-636-8",
          "4-453-635-8",
          "4-453-636-6",
          "3-453-637-6",
          "3-453-638-4",
          "2-453-635-2"
        ],
        "searchCodes": [
          "035",
          "1635",
          "2635"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "36": {
        "rama": "36",
        "vehiculoBase": "036",
        "numero": "1-453-636-2",
        "vehiculosRama": [
          "1-453-636-2",
          "3-453-636-8",
          "3-453-637-6",
          "4-453-636-6",
          "4-453-637-4",
          "3-453-638-4",
          "3-453-639-2",
          "2-453-636-0"
        ],
        "searchCodes": [
          "036",
          "1636",
          "2636"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "37": {
        "rama": "37",
        "vehiculoBase": "037",
        "numero": "1-453-637-2",
        "vehiculosRama": [
          "1-453-637-0",
          "3-453-637-6",
          "3-453-638-4",
          "4-453-637-4",
          "4-453-638-2",
          "3-453-639-2",
          "3-453-640-0",
          "2-453-637-8"
        ],
        "searchCodes": [
          "037",
          "1637",
          "2637"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "38": {
        "rama": "38",
        "vehiculoBase": "038",
        "numero": "1-453-638-8",
        "vehiculosRama": [
          "1-453-638-8",
          "3-453-638-4",
          "3-453-639-2",
          "4-453-638-2",
          "4-453-639-0",
          "3-453-640-0",
          "3-453-641-8",
          "2-453-638-6"
        ],
        "searchCodes": [
          "038",
          "1638",
          "2638"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "39": {
        "rama": "39",
        "vehiculoBase": "039",
        "numero": "1-453-639-6",
        "vehiculosRama": [
          "1-453-639-6",
          "3-453-639-2",
          "3-453-640-0",
          "4-453-639-0",
          "4-453-640-8",
          "3-453-641-8",
          "3-453-642-6",
          "2-453-639-4"
        ],
        "searchCodes": [
          "039",
          "1639",
          "2639"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "40": {
        "rama": "40",
        "vehiculoBase": "040",
        "numero": "1-453-640-4",
        "vehiculosRama": [
          "1-453-640-4",
          "3-453-640-0",
          "3-453-641-8",
          "4-453-640-8",
          "4-453-641-6",
          "3-453-642-6",
          "3-453-643-4",
          "2-453-640-2"
        ],
        "searchCodes": [
          "040",
          "1640",
          "2640"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "41": {
        "rama": "41",
        "vehiculoBase": "041",
        "numero": "1-453-641-2",
        "vehiculosRama": [
          "1-453-641-2",
          "3-453-641-8",
          "3-453-642-6",
          "4-453-641-6",
          "4-453-642-4",
          "3-453-643-4",
          "3-453-644-2",
          "2-453-641-0"
        ],
        "searchCodes": [
          "041",
          "1641",
          "2641"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "42": {
        "rama": "42",
        "vehiculoBase": "042",
        "numero": "1-453-642-0",
        "vehiculosRama": [
          "1-453-642-0",
          "3-453-642-6",
          "3-453-643-4",
          "4-453-642-4",
          "4-453-643-2",
          "3-453-644-2",
          "3-453-645-9",
          "2-453-642-8"
        ],
        "searchCodes": [
          "042",
          "1642",
          "2642"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "43": {
        "rama": "43",
        "vehiculoBase": "043",
        "numero": "1-453-643-8",
        "vehiculosRama": [
          "1-453-643-8",
          "3-453-643-4",
          "3-453-644-2",
          "4-453-643-2",
          "4-453-644-0",
          "3-453-645-9",
          "3-453-646-7",
          "2-453-643-6"
        ],
        "searchCodes": [
          "043",
          "1643",
          "2643"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "44": {
        "rama": "44",
        "vehiculoBase": "044",
        "numero": "1-453-644-6",
        "vehiculosRama": [
          "1-453-644-6",
          "3-453-644-2",
          "3-453-645-9",
          "4-453-644-0",
          "4-453-645-7",
          "3-453-646-7",
          "3-453-647-5",
          "2-453-644-4"
        ],
        "searchCodes": [
          "044",
          "1644",
          "2644"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "45": {
        "rama": "45",
        "vehiculoBase": "045",
        "numero": "1-453-645-3",
        "vehiculosRama": [
          "1-453-645-3",
          "3-453-645-9",
          "3-453-646-7",
          "4-453-645-7",
          "4-453-646-5",
          "3-453-647-5",
          "3-453-648-3",
          "2-453-645-1"
        ],
        "searchCodes": [
          "045",
          "1645",
          "2645"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "46": {
        "rama": "46",
        "vehiculoBase": "046",
        "numero": "1-453-646-8",
        "vehiculosRama": [
          "1-453-646-1",
          "3-453-646-7",
          "3-453-647-5",
          "4-453-646-5",
          "4-453-647-3",
          "3-453-648-3",
          "3-453-649-1",
          "2-453-646-9"
        ],
        "searchCodes": [
          "046",
          "1646",
          "2646"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "47": {
        "rama": "47",
        "vehiculoBase": "047",
        "numero": "1-453-647-6",
        "vehiculosRama": [
          "1-453-647-9",
          "3-453-647-5",
          "3-453-648-3",
          "4-453-647-3",
          "4-453-648-1",
          "3-453-649-1",
          "3-453-650-9",
          "2-453-647-7"
        ],
        "searchCodes": [
          "047",
          "1647",
          "2647"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "48": {
        "rama": "48",
        "vehiculoBase": "048",
        "numero": "1-453-648-4",
        "vehiculosRama": [
          "1-453-648-7",
          "3-453-648-3",
          "3-453-649-1",
          "4-453-648-1",
          "4-453-649-9",
          "3-453-650-9",
          "3-453-651-7",
          "2-453-648-5"
        ],
        "searchCodes": [
          "048",
          "1648",
          "2648"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "49": {
        "rama": "49",
        "vehiculoBase": "049",
        "numero": "1-453-649-2",
        "vehiculosRama": [
          "1-453-649-5",
          "3-453-649-1",
          "3-453-650-9",
          "4-453-649-9",
          "4-453-650-7",
          "3-453-651-7",
          "3-453-652-5",
          "2-453-649-3"
        ],
        "searchCodes": [
          "049",
          "1649",
          "2649"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "50": {
        "rama": "50",
        "vehiculoBase": "050",
        "numero": "1-453-650-0",
        "vehiculosRama": [
          "1-453-650-3",
          "3-453-650-9",
          "3-453-651-7",
          "4-453-650-7",
          "4-453-651-5",
          "3-453-652-5",
          "3-453-653-3",
          "2-453-650-1"
        ],
        "searchCodes": [
          "050",
          "1650",
          "2650"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "51": {
        "rama": "51",
        "vehiculoBase": "051",
        "numero": "1-453-651-8",
        "vehiculosRama": [
          "1-453-651-1",
          "3-453-651-7",
          "3-453-652-5",
          "4-453-651-5",
          "4-453-652-3",
          "3-453-653-3",
          "3-453-654-1",
          "2-453-651-9"
        ],
        "searchCodes": [
          "051",
          "1651",
          "2651"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "52": {
        "rama": "52",
        "vehiculoBase": "052",
        "numero": "1-453-652-6",
        "vehiculosRama": [
          "1-453-652-9",
          "3-453-652-5",
          "3-453-653-3",
          "4-453-652-3",
          "4-453-653-1",
          "3-453-654-1",
          "3-453-655-8",
          "2-453-652-7"
        ],
        "searchCodes": [
          "052",
          "1652",
          "2652"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "53": {
        "rama": "53",
        "vehiculoBase": "053",
        "numero": "1-453-653-4",
        "vehiculosRama": [
          "1-453-653-7",
          "3-453-653-3",
          "3-453-654-1",
          "4-453-653-1",
          "4-453-654-9",
          "3-453-655-8",
          "3-453-656-6",
          "2-453-653-5"
        ],
        "searchCodes": [
          "053",
          "1653",
          "2653"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "54": {
        "rama": "54",
        "vehiculoBase": "054",
        "numero": "1-453-654-2",
        "vehiculosRama": [
          "1-453-654-5",
          "3-453-654-1",
          "3-453-655-8",
          "4-453-654-9",
          "4-453-655-6",
          "3-453-656-6",
          "3-453-657-4",
          "2-453-654-3"
        ],
        "searchCodes": [
          "054",
          "1654",
          "2654"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "55": {
        "rama": "55",
        "vehiculoBase": "055",
        "numero": "1-453-655-9",
        "vehiculosRama": [
          "1-453-655-2",
          "3-453-655-8",
          "3-453-656-6",
          "4-453-655-6",
          "4-453-656-4",
          "3-453-657-4",
          "3-453-658-2",
          "2-453-655-0"
        ],
        "searchCodes": [
          "055",
          "1655",
          "2655"
        ],
        "deposito": "Fuencarral",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": 2026,
        "fechaAlta": "2026",
        "ancho": "1668",
        "subserie": "453.6 · TL200 · 8 coches",
        "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor intermedio 1 + motor intermedio 2 + remolque 3 de dos pisos + remolque 4 de dos pisos + motor cabina par",
        "notas": [
          "-"
        ],
        "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
        "modelo": "FLIRT / KISS · TL200",
        "tipoMaterial": "Cercanías · Tren modular de gran capacidad · T200",
        "tech": {
          "fabricante": "Stadler Rail",
          "numeroCoches": "8 coches · 2 motores cabina + 2 motores intermedios + 4 remolques de dos pisos",
          "anchoVia": "1668 mm",
          "diametroRuedas": "870 mm",
          "anchuraCaja": "3.050 mm",
          "alturaTecho": "4.297 mm",
          "pesoPorCoche": "19 t motor cabina impar y par · 17 t motor intermedio · 15 t remolque de dos pisos",
          "pesoPorEje": "16 t motor cabina impar · 15,5 t motor cabina par · 13,5 t motor intermedio · 10 t remolque de dos pisos",
          "velocidadMaxima": "140 km/h (Tipo A)",
          "potencia": "8.000 kW (10.728 CV)",
          "esfuerzoTraccion": "637 kN",
          "longitud": "191,16 m",
          "peso": "398/530 t (tara/carga normal)",
          "tension": "3.000 V cc",
          "traccion": "16 motores de tracción · 500 kW por motor",
          "señalizacion": "ASFA Digital · ERTMS N1/2 · PUC (GSM-R y Tren-Tierra)",
          "composicion": "Mc-R(2 pisos)-R(2 pisos)-Mi-Mi-R(2 pisos)-R(2 pisos)-Mc",
          "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo' + Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
          "plazasSentadas": "524",
          "capacidad": "1.884 plazas máximas · 524 sentadas · 1.360 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de 10 coches o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 1.884 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      }
    }
  },
  "465": (() => {
    // Serie 465 Civia · 5 coches: 2 motores + 3 remolques.
    // La búsqueda acepta cualquiera de los cinco vehículos de la rama.
    // El dígito de autocontrol se calcula según la matrícula nacional Renfe 465XXX.
    const check = order => {
      const ds = Array.from(("465" + String(order).padStart(3,"0")), Number);
      let sum = 0;
      ds.forEach((d,i) => {
        const p = d * (i % 2 === 0 ? 1 : 2);
        sum += Math.floor(p / 10) + (p % 10);
      });
      return String((10 - (sum % 10)) % 10);
    };
    const car = (type, order, forcedCheck=null) =>
      `${type}-465-${String(order).padStart(3,"0")}-${forcedCheck ?? check(order)}`;

    const units = {};
    const vehicleIndex = {};
    const notes = {
    1: "Preserie. Ex-colores originales pero sin logotipos. Ex-Madrid >> Valencia para Fallas 2011 >> Sevilla. Última en tener colores Renfe Op. (2013).",
    2: "Preserie. Colores Renfe Op. en 2013. Ex-Madrid >> Sevilla. Refuerzo Fallas 2024.",
    3: "Ex-464-006 con un remolque intermedio añadido. Colores Renfe Op. Ex-Madrid hasta 08/10 >> Sevilla hasta 09/11.",
    4: "Ex-464-001 con un remolque intermedio añadido. Colores Renfe Op. Ex-Madrid >> Sevilla hasta 09/11.",
    5: "Ex-464-002 con un remolque intermedio añadido. Colores Renfe Op. Ex-Madrid hasta 08/10 >> Sevilla hasta 08/11.",
    6: "Ex-464-003 con un remolque intermedio añadido. Colores Renfe Op. Ex-Madrid hasta 08/10 >> Sevilla hasta 09/11.",
    7: "Ex-464-004 con un remolque intermedio añadido. Colores Renfe Op. Nuevo esquema de pintura para los preserie. Refuerzo Fallas 2024.",
    8: "Ex-464-005 con un remolque intermedio añadido. Colores Renfe Op. Ex-Madrid hasta 03/11 >> Sevilla hasta 09/11. Nuevo esquema de pintura para los preserie.",
    9: "Colores Renfe Op. En servicio desde 07/06. Ex-Barcelona desde 15/09/08.",
    10: "Colores Renfe Op. En servicio desde 07/06. Madrid >> Barcelona desde 15/09/08 >> Madrid desde 04/11 >> Sevilla >> Madrid desde 09/11.",
    11: "Colores Renfe Op. Entregado en Atocha 04/07/06.",
    12: "En servicio desde 25/08/06. Colores Renfe Op. Pegatinas Marea azul en 2008.",
    13: "Colores Renfe Op. Ex-BCN hasta 12/08.",
    14: "Colores Renfe Op. Ex-Barcelona hasta 12/08. Logos LGTBIQ+ 06/23.",
    15: "En servicio en C-4 Madrid desde 10/06/08. Colores Renfe Op. Refuerzo fallas 2018 y 2024.",
    16: "En servicio desde 11/06. Colores Renfe Op. Modificado carenado Scharfenberg.",
    17: "En servicio en C-4 Madrid desde 12/06. Colores Renfe Op.",
    18: "En servicio desde 11/06. Colores Renfe Op. Pegatinas aeropuerto.",
    19: "En servicio en C-4 Madrid desde 01/07. Colores Renfe Op.",
    20: "En servicio en C-1. Pegatinas aeropuerto.",
    21: "Colores Renfe Op. Incendio en Valdemoro en 2019. Coche 021 acoplado a la 050. Resto de la composición, más coche 050M, apartados Cerro Negro. Canibalizado para repuestos. En pruebas y de nuevo en servicio 10/23.",
    22: "En servicio en C-4 Madrid desde 01/07. Colores Renfe Op. Modificado carenado Scharfenberg.",
    23: "En servicio en C-4 Madrid desde 02/07. Colores Renfe Op.",
    24: "En servicio en C-4 Madrid desde 03/07. Colores Renfe Op.",
    25: "Colores Renfe Op. Pegatinas Marea azul en 2008. Refuerzo fallas 2023.",
    26: "Colores Renfe Op. Pegatinas Marea azul en 2008.",
    30: "Colores Renfe Op. Pegatinas Marea azul en 2008. Madrid >> Valencia desde 14/08/26.",
    32: "Colores Renfe Op. Prototipo 03/15 protector Scharfenberg. Modificado carenado Scharfenberg.",
    34: "Colores Renfe Op. Refuerzo Fallas 2024.",
    37: "Colores Renfe Op. Valencia en Fallas 2010. Modificado carenado Scharfenberg.",
    44: "Colores Renfe Op. Ex-Madrid >> Valencia desde 14/08/26.",
    45: "Colores Renfe Op. Modificado carenado Scharfenberg. Refuerzo Regionales Navarra San Fermín 2022.",
    46: "Colores Renfe Op. Modificado carenado Scharfenberg.",
    47: "Colores Renfe Op. Pruebas en Zaragoza 05/08.",
    48: "Colores Renfe Op.",
    49: "En servicio 07/08. Colores Renfe Op.",
    50: "Incendio en Azuqueca en 2019. Coche 050 afectado; recibe coche motor de la unidad 021 para formar una nueva unidad. Resto de la composición, más coche 050M, apartados Cerro Negro.",
    52: "Nuevo interiorismo, 2021.",
    54: "Modificado carenado Scharfenberg.",
    56: "Caf Santana. Fallas 2023.",
    60: "Modificado carenado Scharfenberg.",
    61: "Modificado carenado Scharfenberg.",
    62: "Modificado carenado Scharfenberg.",
    63: "Modificado carenado Scharfenberg.",
    64: "Modificado carenado Scharfenberg.",
    65: "Modificado carenado Scharfenberg.",
    69: "Modificado carenado Scharfenberg.",
    70: "Modificado carenado Scharfenberg.",
    74: "Modificado carenado Scharfenberg.",
    75: "Refuerzo corredor Zaragoza-Pamplona fiestas del Pilar, 10/18.",
    77: "Modificado carenado Scharfenberg.",
    78: "Modificado carenado Scharfenberg.",
    79: "Modificado carenado Scharfenberg.",
    80: "Modificado carenado Scharfenberg. Refuerzo Regionales Navarra San Fermín 2022.",
    81: "Modificado carenado Scharfenberg.",
    82: "Modificado carenado Scharfenberg. Alcance con Mercancías entre Meco y Azuqueca 13/03/23.",
    83: "Bandas amarillas y luces en puertas. Distinto sonido de apertura/cierre de puertas. Modificado carenado Scharfenberg.",
    84: "Modificado carenado Scharfenberg.",
    85: "En pruebas 04/10. Bandas amarillas y luces en puertas. Distinto sonido de apertura/cierre de puertas.",
    86: "Modificado carenado Scharfenberg.",
    89: "Bandas amarillas y luces en puertas. Distinto sonido de apertura/cierre de puertas. Modificado carenado Scharfenberg.",
    92: "Vinilos AVE 102 (promoción +Renfe), desde 01/16. Modificado carenado Scharfenberg.",
    95: "Vinilos AVE 103 (promoción +Renfe), desde 01/16.",
    96: "Modificado carenado Scharfenberg.",
    101: "Inauguración línea T4 23/09/11.",
    103: "Inauguración ramal T4 23/09/11. Modificado carenado Scharfenberg.",
    104: "Modificado carenado Scharfenberg.",
    106: "En pruebas 10/11.",
    107: "En servicio desde 30/03/12, Atocha. Modificado carenado Scharfenberg.",
    108: "En servicio desde 05/12. Modificado carenado Scharfenberg.",
    109: "En servicio desde 06/12.",
    110: "En servicio desde 06/12.",
    111: "Modificado carenado Scharfenberg.",
    112: "Modificado carenado Scharfenberg.",
    201: "C2 de BCN >> Sevilla >> Jerez de La Frontera.",
    202: "Colores Renfe Op. Ex-Barcelona. Ex-Sevilla >> Refuerzo Fallas 2017, en Valencia desde 03/17 >> Sevilla desde 03/18. Fallas 2023.",
    203: "Colores Renfe Op. Ex-Barcelona >> Sevilla >> Valencia, desde 11/16. Refuerzo San Fermines, 07/17. Ex-Valencia >> Sevilla desde 12/17. Refuerzo fallas 03/18.",
    204: "C2 BCN. Colores Renfe Op. Ex-BCN. Ex-Sevilla >> Valencia desde 03/17 >> Sevilla desde 12/17 >> Vilanova 10/18 >> Sevilla.",
    205: "Colores Renfe Op. Ex-Barcelona >> Sevilla hasta 01/17. Colores Rodalies 11/21.",
    206: "Colores Renfe Op. Ex-Barcelona >> Sevilla. Simulacro La Sagrera 08/12/20. Rodalies 11/21.",
    207: "Colores Renfe Op. Ex-Barcelona >> Sevilla >> Barcelona. Colores Rodalies 11/21.",
    208: "En pruebas 10/08. Colores Renfe Op. Ex-Barcelona. Refuerzo Fallas 2017. Ex-Sevilla >> Valencia desde 03/17 >> Sevilla/Cádiz desde 12/17.",
    209: "En pruebas 10/08. Colores Renfe Op. Colores Rodalies desde 25/10/16 (pintura, no vinilos).",
    210: "En pruebas 10/08. Colores Renfe Op. Colores Rodalies desde 17/11/16. Choque contra topera Estació de França 28/07/17, apartado desde 12/02/18. Ex-Montcada.",
    211: "En pruebas 11/08. En servicio C2 Sur de Barcelona. Colores Rodalies (pintura, no vinilos).",
    212: "Refuerzo fallas Valencia 03/13. Colores Rodalies desde 15/12/12 (pintura, no vinilos).",
    213: "Refuerzo fallas Valencia 03/13. Colores Rodalies desde 15/12/12 (pintura, no vinilos).",
    214: "Colores Rodalies (pintura, no vinilos).",
    215: "Colores Rodalies (pintura, no vinilos).",
    216: "Colores Rodalies (pintura, no vinilos).",
    217: "Primera 465 pintada en colores Rodalies en vez de vinilos, 02/16.",
    218: "Colores Rodalies. Naranja/Blanco.",
    219: "Colores Rodalies (vinilo).",
    220: "Ex-Barcelona desde 08/11. Colores Rodalies.",
    221: "(C) >> Colores Rodalies (pintura, no vinilos).",
    222: "Unidad entregada 03/09. (C) >> Colores Rodalies (pintura, no vinilos).",
    223: "Entregado 04/09. (C) >> Colores Rodalies (pintura, no vinilos).",
    224: "Ex-Valencia >> Sevilla de 03/17 a 03/18. Colores Rodalies.",
    225: "Vinilo AVE 103 desde 01/16. Ex-Valencia >> Sevilla desde 03/17.",
    226: "Ex-Barcelona >> Valencia. Colores Rodalies (pintura, no vinilos). Barcelona 02/17. Reformado nuevo interior 03/22.",
    227: "Ex-Barcelona >> Sevilla hasta 12/16. Colores Rodalies (pintura, no vinilos).",
    228: "Ex-Barcelona >> Sevilla hasta 12/16. Colores Rodalies (pintura, no vinilos).",
    229: "Ex-Barcelona. Ex-Valencia >> Sevilla desde 03/17.",
    230: "Vinilo AVE 102 desde 01/16. Ex-Valencia >> Sevilla desde 12/17 >> Barcelona 02/18. Vinilos Rodalies.",
    231: "Vinilo AVE 102 desde 01/16. Ex-Valencia >> Sevilla desde 03/17 >> Mataró desde 03/18. Vinilos Rodalies.",
    232: "Ex-Sevilla hasta 12/16. Colores Rodalies 08/17.",
    233: "Ex-Sevilla hasta 12/16. Colores Rodalies 08/17. Colisión topera Mataró 16/06/20.",
    234: "Ex-Sevilla >> Barcelona desde 29/12/16. Colores Rodalies (pintura, no vinilos) >> Incendiado en Maçanet-Massanes 30/01/22.",
    235: "Ex-Sevilla/Cádiz hasta 29/12/16 >> Barcelona. Colores Rodalies (pintura, no vinilos).",
    236: "Ex-Sevilla hasta 12/16. Colores Rodalies (pintura, no vinilos).",
    237: "Primer tren con decoración Rodalies Catalunya. Entrada en servicio 18/02/10. En servicio en C1. Repintado a colores Rodalies (no vinilos).",
    238: "2º tren con decoración Rodalies. Inicio servicio 18/02/10. Vinilos Canet Rock 2015, entre 01/06/15 y 15/07/15. Repintada colores Rodalies 12/17.",
    239: "Colores Rodalies.",
    240: "Decoración Rodalies. Ex-color Renfe Op. Colores Rodalies (no vinilos).",
    241: "Colores Rodalies C.",
    242: "Decoración Rodalies.",
    243: "Colores Renfe Op. Colores Rodalies (5ª unidad). Logos 75 años Renfe. Repintado a colores Rodalies (no vinilos).",
    244: "Colores Rodalies. Logos 75 años Renfe. Ex-Montcada hasta 11/18.",
    245: "Colores Renfe Op. >> Color Rodalies 12/10. Repintado a Rodalies (no vinilos) 04/18. Ex-Montcada hasta 11/18.",
    246: "Color Rodalies de Catalunya. Ex-Montcada hasta 11/18.",
    247: "Color de Rodalies Catalunya. Repintado a colores Rodalies, no vinilos 04/18. Ex-Montcada hasta 11/18.",
    248: "Colores Rodalies de Catalunya. Ex-Montcada hasta 11/18.",
    249: "En servicio desde 07/10. Colores Renfe Op. >> Color Rodalies.",
    250: "Colores Renfe Op. >> Rodalies. Con LED debajo de puertas para alumbrar peldaños.",
    251: "Colores Rodalies de Catalunya. Repintado colores Rodalies, no vinilos 05/18.",
    252: "Colores Rodalies de Catalunya.",
    253: "Colores Rodalies de Catalunya.",
    254: "Colores Renfe Op. Colores Rodalies (8ª unidad). Logos 75 años Renfe.",
    255: "Colores Rodalies de Catalunya.",
    256: "Colores Rodalies de Catalunya (26/02/11).",
    257: "Colores Rodalies de Catalunya. Accidente en Montcada i Reixac - Manresa 07/12/22. En circulación tras el choque 09/23.",
    258: "Colores Rodalies de Catalunya.",
    259: "Colores Rodalies de Catalunya.",
    260: "Colores Rodalies de Catalunya.",
    261: "Colores Rodalies de Catalunya.",
    262: "Colores Rodalies de Catalunya. Vinilos \"175 Anys del Tren Barcelona-Mataró\" 10/23.",
    263: "Colores Rodalies de Catalunya. Primera unidad con nuevo interiorismo en los asientos para PMR (02/18).",
    264: "Colores Renfe Op. >> Rodalies. Circuló mal numerado como 465-264M/265R/864R/964R/764M. Incendio en techo C4 Maçanet-Massanes, 12/02.",
    265: "Colores Rodalies de Catalunya. Circuló mal numerado como 465-265M/265R/865R/965R/765M. 28/07/17, unidad de cola del choque contra topera BCN Francia, acoplada con 465-210. De nuevo en servicio desde 01/18.",
    266: "Colores Rodalies Cat.",
    267: "Ex-463-216 (465 desde 27/11/11).",
    268: "Ex-464-215 (465 desde otoño de 2012).",
    };

    const depot = {
      1:"Atocha", 2:"Atocha", 3:"Atocha", 4:"Atocha", 5:"Atocha", 6:"Atocha", 7:"Atocha", 8:"Atocha", 9:"Atocha", 10:"Atocha", 11:"Atocha", 12:"Atocha", 13:"Atocha", 14:"Atocha", 15:"Atocha", 16:"Atocha", 17:"Atocha", 18:"Atocha", 19:"Atocha", 20:"Atocha", 21:"Madrid", 22:"Madrid", 23:"Madrid", 24:"Madrid", 25:"Madrid", 26:"Madrid", 27:"Madrid", 28:"Madrid", 29:"Madrid", 30:"Valencia", 31:"Madrid", 32:"Madrid", 33:"Madrid", 34:"Madrid", 35:"Madrid", 36:"Madrid", 37:"Madrid", 38:"Madrid", 39:"Madrid", 40:"Madrid", 41:"Madrid", 42:"Madrid", 43:"Madrid", 44:"Valencia", 45:"Madrid", 46:"Madrid", 47:"Madrid", 48:"Madrid", 49:"Madrid", 50:"Madrid", 51:"Madrid", 52:"Madrid", 53:"Madrid", 54:"Madrid", 55:"Madrid", 56:"Madrid", 57:"Madrid", 58:"Madrid", 59:"Madrid", 60:"Madrid", 61:"Madrid", 62:"Madrid", 63:"Madrid", 64:"Madrid", 65:"Madrid", 66:"Madrid", 67:"Madrid", 68:"Madrid", 69:"Madrid", 70:"Madrid", 71:"Madrid", 72:"Madrid", 73:"Madrid", 74:"Madrid", 75:"Madrid", 76:"Madrid", 77:"Madrid", 78:"Madrid", 79:"Madrid", 80:"Madrid", 81:"Madrid", 82:"Atocha", 83:"Cerro Negro", 84:"Cerro Negro", 85:"Cerro Negro", 86:"Cerro Negro", 87:"Madrid", 88:"Madrid", 89:"Madrid", 90:"Madrid", 91:"Madrid", 92:"Madrid", 93:"Cerro Negro", 94:"Cerro Negro", 95:"Madrid", 96:"Madrid", 97:"Cerro Negro", 98:"Cerro Negro", 99:"Cerro Negro", 100:"Cerro Negro", 101:"Cerro Negro", 102:"Cerro Negro", 103:"Cerro Negro", 104:"Atocha", 105:"Cerro Negro", 106:"Atocha", 107:"Cerro Negro", 108:"Cerro Negro", 109:"Cerro Negro", 110:"Cerro Negro", 111:"Cerro Negro", 112:"Cerro Negro", 201:"Sevilla", 202:"Sevilla", 203:"Sevilla", 204:"Sevilla", 205:"Mataró", 206:"Mataró", 207:"Mataró", 208:"Sevilla", 209:"Mataró", 210:"Barcelona", 211:"Vilanova", 212:"Vilanova", 213:"Vilanova", 214:"Vilanova", 215:"Vilanova", 216:"Vilanova", 217:"Vilanova", 218:"Vilanova", 219:"Vilanova", 220:"Vilanova", 221:"Mataró", 222:"Mataró", 223:"Mataró", 224:"Mataró", 225:"Sevilla", 226:"Mataró", 227:"Vilanova", 228:"Mataró", 229:"Sevilla", 230:"Mataró", 231:"Mataró", 232:"Mataró", 233:"Mataró", 234:"Mataró", 235:"Mataró", 236:"Mataró", 237:"Mataró", 238:"Mataró", 239:"Mataró", 240:"Mataró", 241:"Mataró", 242:"Mataró", 243:"Mataró", 244:"Mataró", 245:"Mataró", 246:"Mataró", 247:"Mataró", 248:"Mataró", 249:"Mataró", 250:"Montcada", 251:"Montcada", 252:"Montcada", 253:"Montcada", 254:"Montcada", 255:"Montcada", 256:"Montcada", 257:"Montcada", 258:"Montcada", 259:"Montcada", 260:"Montcada", 261:"Montcada", 262:"Montcada", 263:"Montcada", 264:"Montcada", 265:"Montcada", 266:"Montcada", 267:"Sevilla", 268:"Sevilla"
    };

    const red = {
      1:"Madrid", 2:"Madrid", 3:"Madrid", 4:"Madrid", 5:"Madrid", 6:"Madrid", 7:"Madrid", 8:"Madrid", 9:"Madrid", 10:"Madrid", 11:"Madrid", 12:"Madrid", 13:"Madrid", 14:"Madrid", 15:"Madrid", 16:"Madrid", 17:"Madrid", 18:"Madrid", 19:"Madrid", 20:"Madrid", 21:"Madrid", 22:"Madrid", 23:"Madrid", 24:"Madrid", 25:"Madrid", 26:"Madrid", 27:"Madrid", 28:"Madrid", 29:"Madrid", 30:"Valencia", 31:"Madrid", 32:"Madrid", 33:"Madrid", 34:"Madrid", 35:"Madrid", 36:"Madrid", 37:"Madrid", 38:"Madrid", 39:"Madrid", 40:"Madrid", 41:"Madrid", 42:"Madrid", 43:"Madrid", 44:"Valencia", 45:"Madrid", 46:"Madrid", 47:"Madrid", 48:"Madrid", 49:"Madrid", 50:"Madrid", 51:"Madrid", 52:"Madrid", 53:"Madrid", 54:"Madrid", 55:"Madrid", 56:"Madrid", 57:"Madrid", 58:"Madrid", 59:"Madrid", 60:"Madrid", 61:"Madrid", 62:"Madrid", 63:"Madrid", 64:"Madrid", 65:"Madrid", 66:"Madrid", 67:"Madrid", 68:"Madrid", 69:"Madrid", 70:"Madrid", 71:"Madrid", 72:"Madrid", 73:"Madrid", 74:"Madrid", 75:"Madrid", 76:"Madrid", 77:"Madrid", 78:"Madrid", 79:"Madrid", 80:"Madrid", 81:"Madrid", 82:"Madrid", 83:"Madrid", 84:"Madrid", 85:"Madrid", 86:"Madrid", 87:"Madrid", 88:"Madrid", 89:"Madrid", 90:"Madrid", 91:"Madrid", 92:"Madrid", 93:"Madrid", 94:"Madrid", 95:"Madrid", 96:"Madrid", 97:"Madrid", 98:"Madrid", 99:"Madrid", 100:"Madrid", 101:"Madrid", 102:"Madrid", 103:"Madrid", 104:"Madrid", 105:"Madrid", 106:"Madrid", 107:"Madrid", 108:"Madrid", 109:"Madrid", 110:"Madrid", 111:"Madrid", 112:"Madrid", 113:"Madrid", 114:"Madrid", 115:"Madrid", 116:"Madrid", 117:"Madrid", 118:"Madrid", 119:"Madrid", 120:"Madrid", 121:"Madrid", 122:"Madrid", 123:"Madrid", 124:"Madrid", 125:"Madrid", 126:"Madrid", 127:"Madrid", 128:"Madrid", 129:"Madrid", 130:"Madrid", 131:"Madrid", 132:"Madrid", 133:"Madrid", 134:"Madrid", 135:"Madrid", 136:"Madrid", 137:"Madrid", 138:"Madrid", 139:"Madrid", 140:"Madrid", 141:"Madrid", 142:"Madrid", 143:"Madrid", 144:"Madrid", 145:"Madrid", 146:"Madrid", 147:"Madrid", 148:"Madrid", 149:"Madrid", 150:"Madrid", 151:"Madrid", 152:"Madrid", 153:"Madrid", 154:"Madrid", 155:"Madrid", 156:"Madrid", 157:"Madrid", 158:"Madrid", 159:"Madrid", 160:"Madrid", 161:"Madrid", 162:"Madrid", 163:"Madrid", 164:"Madrid", 165:"Madrid", 166:"Madrid", 167:"Madrid", 168:"Madrid", 169:"Madrid", 170:"Madrid", 171:"Madrid", 172:"Madrid", 173:"Madrid", 174:"Madrid", 175:"Madrid", 176:"Madrid", 177:"Madrid", 178:"Madrid", 179:"Madrid", 180:"Madrid", 181:"Madrid", 182:"Madrid", 183:"Madrid", 184:"Madrid", 185:"Madrid", 186:"Madrid", 187:"Madrid", 188:"Madrid", 189:"Madrid", 190:"Madrid", 191:"Madrid", 192:"Madrid", 193:"Madrid", 194:"Madrid", 195:"Madrid", 196:"Madrid", 197:"Madrid", 198:"Madrid", 199:"Madrid", 201:"Sevilla/Cádiz", 202:"Sevilla", 203:"Sevilla", 204:"Sevilla", 205:"Barcelona", 206:"Barcelona", 207:"Barcelona", 208:"Barcelona", 210:"Rodalies", 211:"Barcelona", 212:"Barcelona", 213:"Barcelona", 214:"Barcelona", 215:"Barcelona", 216:"Barcelona", 217:"Barcelona", 218:"Barcelona", 219:"Barcelona", 220:"Barcelona", 221:"Barcelona", 222:"Barcelona", 223:"Barcelona", 224:"Barcelona", 225:"Sevilla", 226:"Barcelona", 227:"Barcelona", 228:"Barcelona", 229:"Sevilla", 230:"Barcelona", 231:"Barcelona", 232:"Barcelona", 233:"Barcelona", 234:"Barcelona", 235:"Barcelona", 236:"Barcelona", 237:"Barcelona", 238:"Barcelona", 239:"Barcelona", 240:"Barcelona", 241:"Barcelona", 242:"Barcelona", 243:"Barcelona", 244:"Barcelona", 245:"Barcelona", 246:"Barcelona", 247:"Barcelona", 248:"Barcelona", 249:"Barcelona", 250:"Barcelona", 251:"Barcelona", 252:"Barcelona", 253:"Barcelona", 254:"Barcelona", 255:"Barcelona", 256:"Barcelona", 257:"Barcelona", 258:"Barcelona", 259:"Barcelona", 260:"Barcelona", 261:"Barcelona", 262:"Barcelona", 263:"Barcelona", 264:"Barcelona", 265:"Barcelona", 266:"Barcelona", 267:"Sevilla", 268:"Sevilla"
    };

    const makeUnit = (n, lote, subserie, fabricante, year, special={}) => {
      const branch = String(n).padStart(3,"0");
      let orders;
      if(n <= 99){
        orders = [n, 700+n, n, 500+n, 500+n];
      }else if(n <= 112){
        orders = [n, 400+2*n, n, 401+2*n, 500+n];
      }else{
        orders = [n, 700+n, n, 600+n, 500+n];
      }

      let types = ["9","6","6","6","9"];

      // Excepciones que figuran en la tabla aportada.
      if(n === 48) types = ["9","9","9","9","9"];
      if(n === 49) types[1] = "9";
      if(n === 218) types = ["9","9","9","9","9"];

      const forced = {};
      if(n === 93) forced[2] = "5"; // 6-465-093-5, tal como figura en la tabla.

      const vehiculosRama = orders.map((order,i) => car(types[i], order, forced[i] || null));
      const baseNotes = notes[n] || (n < 201 ? "Colores Renfe Op." : "Colores Rodalies.");

      const unit = {
        rama: branch,
        lote,
        subserie,
        vehiculoBase: branch,
        numero: vehiculosRama[0],
        vehiculosRama,
        searchCodes: orders.map(String),
        fabricante,
        ano: year,
        ancho: "1668",
        numeroCoches: "5 coches · 2 coches motor extremos + 3 remolques intermedios",
        composicionRama: "Coche motor + remolque + remolque + remolque + coche motor",
        deposito: depot[n] || depot[branch] || "",
        color: n >= 201 ? (red[n] === "Sevilla/Cádiz" || red[n] === "Sevilla" ? "Cercanías" : "Blanco/Naranja") : "Cercanías",
        red: red[n] || (n < 201 ? "Madrid" : "Barcelona"),
        estado: "En servicio",
        notas: [baseNotes]
      };

      if(special.procedencia){
        unit.procedencia = special.procedencia;
        unit.historialTransformacion = special.historialTransformacion;
        unit.estadoActual = `Actualmente: Serie 465, unidad 465-${branch}.`;
        unit.cadenaProcedencia = special.cadenaProcedencia || special.procedencia;
      }
      units[branch] = unit;
      orders.forEach((order,i) => {
        const padded=String(order).padStart(3,"0");
        const typedKey=`${types[i]}-${padded}`;
        if(vehicleIndex[typedKey]===undefined) vehicleIndex[typedKey]=branch;
        if(vehicleIndex[padded]===undefined) vehicleIndex[padded]=branch;
      });
    };

    const transform = {
      3: {procedencia:"464-006", historialTransformacion:"464-006 → 465-003 · añadido de un remolque intermedio"},
      4: {procedencia:"464-001", historialTransformacion:"464-001 → 465-004 · añadido de un remolque intermedio"},
      5: {procedencia:"464-002", historialTransformacion:"464-002 → 465-005 · añadido de un remolque intermedio"},
      6: {procedencia:"464-003", historialTransformacion:"464-003 → 465-006 · añadido de un remolque intermedio"},
      7: {procedencia:"464-004", historialTransformacion:"464-004 → 465-007 · añadido de un remolque intermedio"},
      8: {procedencia:"464-005", historialTransformacion:"464-005 → 465-008 · añadido de un remolque intermedio"},
      267:{procedencia:"463-216", cadenaProcedencia:"463-216 → 465-267", historialTransformacion:"463-216 → 465-267 · transformación con dos remolques intermedios A4 y A5"},
      268:{procedencia:"464-215", cadenaProcedencia:"464-215 → 465-268", historialTransformacion:"464-215 → 465-268 · añadido de un remolque intermedio"}
    };

    for(let n=1;n<=8;n++) makeUnit(n,"Primer lote","Civia I","CAF","2003",transform[n]||{});
    for(let n=9;n<=112;n++){
      const sub = n<=42 ? "Civia II" : (n<=82 ? "Civia III" : "Civia IV");
      const year = n<=42 ? "2006-2008" : (n<=82 ? "2008-2010" : "2010-2012");
      makeUnit(n,"Segundo lote",sub,"CAF",year,{});
    }
    for(let n=201;n<=268;n++){
      const sub = n<=236 ? "Modular 2 · equivalente a Civia III" :
                  (n<=266 ? "Modular 3 · equivalente a Civia IV" : "Transformación · tercer lote");
      const year = n<=236 ? "2008-2009" : (n<=266 ? "2009-2010" : (n===267 ? "2011" : "2012"));
      makeUnit(n,"Tercer lote",sub,"Alstom",year,transform[n]||{});
    }

    return {
      seriesName: "Serie 465 · Civia",
      fabricante: "CAF / Alstom",
      apodo: "Civia",
      anoPuestaServicio: "2003-2012",
      tipoMaterial: "Cercanías · Civia de 5 coches",
      numeroCoches: "5 coches · 2 coches motor + 3 remolques",
      anchoVia: "1668 mm",
      numeroRamas: 180,
      velocidadMaxima: "120 km/h",
      potencia: "2.200 kW",
      longitud: "98,05 m",
      peso: "157,3 t",
      tension: "3.000 V cc",
      traccion: "8 motores de tracción",
      señalizacion: "ASFA / ASFA Digital · ERTMS según unidad",
      composicion: "A1-A4-A3-A4-A2",
      capacidad: "997 plazas · 277 sentadas",
      plazasSentadas: "277",
      lotes: "PRIMER LOTE · CAF: 001-008 · SEGUNDO LOTE · CAF: 009-112 · TERCER LOTE · ALSTOM: 201-268",
      generalNotes: [
        "Unidades CIVIA de cinco coches: dos coches motores extremos y tres remolques intermedios.",
        "PRIMER LOTE · CAF · 001-008: las 001 y 002 son preserie; las 003-008 proceden de transformar seis unidades de la serie 464 mediante el añadido de un remolque intermedio.",
        "SEGUNDO LOTE · CAF · 009-112: 009-042 Civia II; 043-082 Civia III; 083-112 Civia IV. Las unidades CAF del núcleo de Cercanías de Madrid tienen como base Atocha.",
        "TERCER LOTE · ALSTOM · 201-268: 201-236 Modular 2 (equivalente a Civia III) y 237-266 Modular 3 (equivalente a Civia IV).",
        "Ancho de vía: 1.668 mm. Alimentación: 3.000 V en corriente continua. Velocidad máxima: 120 km/h.",
        "Longitud aproximada: 98,05 m. Masa: 157,3 t. Potencia nominal: 2.200 kW. Capacidad aproximada: 997 plazas, 277 sentadas.",
        "La numeración de cada rama se puede localizar mediante cualquiera de sus cinco vehículos."
      ],
      units,
      vehicleIndex
    };
  })(),
};

// Fabricante de la S-463: se determina automáticamente por el lote de la rama.
Object.values(fleet["463"]?.units||{}).forEach(unit=>{
  // Primer lote (001-015) y prototipo 199: CAF. Segundo lote (201-220): Alstom.
  unit.fabricante = unit.lote === "Segundo lote" ? "Alstom" : "CAF";
});

// Datos técnicos comunes de la serie 100. Los datos específicos de cada rama pueden sobrescribirlos.
Object.values(fleet["100"]?.units||{}).forEach(unit=>{
  unit.fabricante=unit.fabricante||fleet["100"].fabricante;
  unit.numeroCoches=unit.numeroCoches||fleet["100"].numeroCoches;
  unit.anchoVia=unit.anchoVia||fleet["100"].anchoVia;
});
Object.values(fleet["102"]?.units||{}).forEach(unit=>{
  unit.fabricante=unit.fabricante||fleet["102"].fabricante;
  unit.numeroCoches=unit.numeroCoches||fleet["102"].numeroCoches;
  unit.anchoVia=unit.anchoVia||fleet["102"].anchoVia;
  unit.ano=unit.ano||fleet["102"].anoPuestaServicio;
});
Object.values(fleet["103"]?.units||{}).forEach(unit=>{
  unit.fabricante=unit.fabricante||fleet["103"].fabricante;
  unit.numeroCoches=unit.numeroCoches||fleet["103"].numeroCoches;
  unit.anchoVia=unit.anchoVia||fleet["103"].anchoVia;
  unit.ano=unit.ano||"2007";
});
Object.values(fleet["114"]?.units||{}).forEach(unit=>{
  unit.fabricante=unit.fabricante||fleet["114"].fabricante;
  unit.numeroCoches=unit.numeroCoches||fleet["114"].numeroCoches;
  unit.anchoVia=unit.anchoVia||fleet["114"].anchoVia;
  unit.ano=unit.ano||fleet["114"].anoPuestaServicio;
});
Object.values(fleet["112"]?.units||{}).forEach(unit=>{
  unit.fabricante=unit.fabricante||fleet["112"].fabricante;
  unit.numeroCoches=unit.numeroCoches||fleet["112"].numeroCoches;
  unit.anchoVia=unit.anchoVia||fleet["112"].anchoVia;
});

function normalizeFleetValue(value){
  return String(value ?? "").trim().replace(/\D/g,"").replace(/^0+/,"") || "";
}

// Serie 106: las matrículas de rama se agrupan en dos bloques.
// 001–015 = ramas 1–15 (ancho fijo)
// 051–065 = ramas 51–65 (ancho variable)
// 101–115 y 151–165 = matrículas con dígito de coche adicional.
// Ej.: 106.063 -> rama 63.
function getS106Unit(vehicle){
  const v=normalizeFleetValue(vehicle);
  const n=Number(v);
  if(!Number.isFinite(n)) return null;

  let branch=null;
  if(n>=1 && n<=15) branch=n;
  else if(n>=51 && n<=65) branch=n;
  else if(n>=101 && n<=115) branch=n-100;
  else if(n>=151 && n<=165) branch=n-100;
  else return null;

  const base=fleet["106"]?.units?.[String(branch)];
  if(!base) return null;

  const variable=branch>=51;
  return {
    ...base,
    rama:String(branch),
    // La ficha conserva como número completo la primera motriz de la rama.
    // 063 y 163, por ejemplo, pertenecen ambos a la Rama 63.
    vehiculoBase:base.vehiculoBase || String(branch).padStart(3,'0'),
    vehiculoIntroducido:String(n).padStart(3,'0'),
    vehiculoBuscado:v,
    numero:base.numero,
    ano:base.ano || 2024,
    fabricante:fleet["106"].fabricante || 'Talgo',
    numeroCoches:fleet["106"].numeroCoches || '14 vehículos: 2 cabezas motrices + 12 coches intermedios',
    tipoMaterial:fleet["106"].tipoMaterial || 'Alta Velocidad · AVE / Avlo',
    ancho:base.ancho || (variable?'1435/1668':'1435'),
    subserie:base.subserie || (variable?'Ancho variable':'Ancho fijo'),
    notas:Array.isArray(base.notas)?[...base.notas]:[]
  };
}

function getFleetUnit(series, vehicle){
  const s=normalizeFleetValue(series);
  const v=normalizeFleetValue(vehicle);
  const seriesData=fleet[s];
  if(s==="106") return getS106Unit(v);
  if(!seriesData) return null;

  // Serie 104: cualquier coche se identifica por sus dos últimos dígitos.
  // Ej.: 901 -> Rama 1 y se registra como 001; 506 -> Rama 6 y se registra como 006.
  if(s==="104"){
    const digits=v.padStart(3,"0");
    const rama=Number(digits.slice(-2));
    const base=seriesData.units?.[String(rama)];
    if(!base) return null;
    return {
      ...base,
      numero:base.numero,
      vehiculoBase:base.vehiculoBase,
      vehiculoIntroducido:base.vehiculoBase,
      vehiculoBuscado:v,
      cocheTipo:"Composición S-104"
    };
  }

  // Serie 103: cualquier coche se identifica por sus dos últimos dígitos.
  // Ej.: 501 -> Rama 1, 521 -> Rama 21, 626 -> Rama 26.
  if(s==="103"){
    const digits=v.padStart(3,"0");
    const rama=Number(digits.slice(-2));
    const base=seriesData.units?.[String(rama)];
    if(!base) return null;
    const tipoCoche = v.startsWith("2") ? "Club" :
                      v.startsWith("3") ? "Preferente" :
                      v.startsWith("4") ? "Cafetería" :
                      v.startsWith("5") ? "Turista" :
                      v.startsWith("6") ? "Turista" : "Coche";
    const vehiculoCanonico=base.vehiculoBase || String(200+rama);
    return {
      ...base,
      numero:base.numero,
      vehiculoBase:vehiculoCanonico,
      vehiculoIntroducido:vehiculoCanonico,
      vehiculoBuscado:v,
      cocheTipo:tipoCoche
    };
  }

  // Serie 121: cualquier coche/motor de la rama identifica la composición.
  // Cada rama tiene dos códigos de búsqueda principales: 001-029 y 501-529.
  // Ej.: 001 o 501 -> Rama 1; 029 o 529 -> Rama 29.
  // Se acepta también la matrícula completa 9-121-XXX-X o 6-121-XXX-X.
  if(s==="121"){
    const raw=String(vehicle??"").trim();
    const matriculaMatch=raw.match(/(?:^|-)121-(\d{3})(?:-|$)/i);
    let code=matriculaMatch ? matriculaMatch[1] : v;
    if(!matriculaMatch && /^121\d{3}$/.test(v)) code=v.slice(-3);
    code=String(code).padStart(3,"0");
    let base=null;
    for(const candidate of Object.values(seriesData.units||{})){
      if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
    }
    if(!base) return null;
    return {
      ...base,
      numero:base.numero,
      vehiculoBase:base.vehiculoBase,
      vehiculoIntroducido:raw,
      vehiculoBuscado:code,
      cocheTipo:code.startsWith("5") ? "Coche motor 500" : "Coche motor 000"
    };
  }

  // Serie 730: cada rama se identifica por cualquiera de sus dos vehículos Talgo 730.
  // Se acepta el código corto (038), la matrícula 730-038-7 y la matrícula completa Renfe.
  // También se admite el Ex-número 130-038-3 para localizar la rama transformada.
  if(s==="730"){
    const raw=String(vehicle??"").trim();
    const matriculaMatch=raw.match(/(?:^|-)730-(\d{3})(?:-|$)/i);
    const exMatch=raw.match(/(?:^|-)130-(\d{3})(?:-|$)/i);
    let code=matriculaMatch ? matriculaMatch[1] : (exMatch ? exMatch[1] : v);
    if(!matriculaMatch && !exMatch && /^730\d{3}$/.test(v)) code=v.slice(-3);
    code=String(code).padStart(3,"0");
    let base=null;
    for(const candidate of Object.values(seriesData.units||{})){
      if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
      if(Object.values(candidate.exNumeros||{}).some(x=>String(x).split("-")[2]===code)){ base=candidate; break; }
    }
    if(!base) return null;
    const idx=(base.searchCodes||[]).indexOf(code);
    const canonicalVehicle=idx>=0 ? base.vehiculosRama[idx] : base.numero;
    const matchedEx=(base.exNumeros||{})[code] || base.exNumero || "";
    return {...base,numero:canonicalVehicle,vehiculoBase:code,vehiculoIntroducido:raw,vehiculoBuscado:code,exNumero:matchedEx,notas:(base.notasPorVehiculo||{})[code]?[ (base.notasPorVehiculo||{})[code] ]:(base.notas||[]),cocheTipo:"Vehículo Talgo 730"};
  }

  // Serie 446: la rama se determina por el remolque intermedio, pero el número
  // de vehículo registrado/buscado corresponde a los coches motores.
  // Se aceptan los códigos cortos de motor (001, 002...), matrículas 9-446-XXX-X
  // y el formato simplificado 446XXX. El remolque intermedio NO se usa como
  // número de vehículo; únicamente determina la rama de la composición.
  if(s==="446"){
    const raw=String(vehicle??"").trim();
    const compact=raw.replace(/\s+/g,"");
    let code="";
    const full=compact.match(/(?:^|[-])446[-]?(\d{3})(?:[-]\d)?$/i);
    if(full) code=full[1];
    if(!code && /^446\d{3}$/.test(compact)) code=compact.slice(3);
    if(!code && /^\d{1,3}$/.test(compact)) code=compact.padStart(3,"0");
    if(!code) return null;

    let base=null;
    for(const candidate of Object.values(seriesData.units||{})){
      if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
    }
    if(!base) return null;

    const idx=(base.searchCodes||[]).indexOf(code);
    const canonicalVehicle=idx>=0 ? base.vehiculosRama[idx===0?0:2] : base.numero;
    return {
      ...base,
      numero:canonicalVehicle,
      vehiculoBase:code,
      vehiculoIntroducido:raw,
      vehiculoBuscado:code,
      vehiculoEncontrado:canonicalVehicle,
      cocheTipo:idx===0 ? "Coche motor impar" : "Coche motor par"
    };
  }

  // Serie 450: cualquiera de los vehículos de la rama identifica la composición.
  // Se aceptan códigos cortos (001, 201, 202...), matrículas 450-XXX-X
  // y matrículas completas Renfe (9-450-XXX-X / 7-450-XXX-X).
  // La tabla de la serie 450 es la referencia de asociación de cada vehículo con su rama.
  if(s==="450"){
    const raw=String(vehicle??"").trim();
    const compact=raw.replace(/\s+/g,"");
    let code="";

    const full=compact.match(/(?:^|[-])450[-]?(\d{3})(?:[-]\d)?$/i);
    if(full) code=full[1];
    if(!code){
      const renfeFull=compact.match(/(?:^|[-])(?:9|7)[-]?450[-]?(\d{3})(?:[-]\d)?$/i);
      if(renfeFull) code=renfeFull[1];
    }
    if(!code && /^450\d{3}$/.test(compact)) code=compact.slice(3);
    if(!code && /^\d{1,3}$/.test(compact)) code=compact.padStart(3,"0");
    if(!code) return null;

    // 210R aparece históricamente en la Rama 04 y fue agregado a la Rama 17 en 09/21.
    // Para la búsqueda actual se prioriza la composición de la Rama 17.
    let base=null;
    if(code==="210") base=seriesData.units?.["17"]||null;
    if(!base){
      for(const candidate of Object.values(seriesData.units||{})){
        if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
      }
    }
    if(!base) return null;

    const idx=(base.searchCodes||[]).indexOf(code);
    const canonicalVehicle=idx>=0 ? base.vehiculosRama[idx] : base.numero;
    const tipos=["Coche motor cabina impar","Remolque de dos pisos","Remolque de dos pisos","Remolque de dos pisos","Remolque de dos pisos","Coche motor cabina par"];
    return {
      ...base,
      numero:canonicalVehicle,
      vehiculoBase:code,
      vehiculoIntroducido:raw,
      vehiculoBuscado:code,
      vehiculoEncontrado:canonicalVehicle,
      cocheTipo:tipos[idx]||"Vehículo Serie 450"
    };
  }

  // Serie 451: cualquiera de los tres vehículos de la rama identifica la composición.
  // Se aceptan códigos cortos (001, 002...), matrículas 451-XXX-X y matrículas completas
  // Renfe (9-451-XXX-X, 7-451-XXX-X y 8-451-XXX-X).
  if(s==="451"){
    const raw=String(vehicle??"").trim();
    const compact=raw.replace(/\s+/g,"");
    let code="";
    const full=compact.match(/(?:^|[-])451[-]?(\d{3})(?:[-]\d)?$/i);
    if(full) code=full[1];
    if(!code && /^451\d{3}$/.test(compact)) code=compact.slice(3);
    if(!code && /^\d{1,3}$/.test(compact)) code=compact.padStart(3,"0");
    if(!code) return null;

    const base=seriesData.units?.[String(Number(code))];
    if(!base) return null;
    return {
      ...base,
      numero:base.numero,
      vehiculoBase:base.vehiculoBase,
      vehiculoIntroducido:raw,
      vehiculoBuscado:code,
      vehiculoEncontrado:base.numero,
      cocheTipo:"Vehículo Serie 451"
    };
  }

  // Serie 453 Stadler: TL100 (453.0, 4 coches) + TL200 (453.6, 8 coches).
  // TL100: 001-024 y códigos simplificados 1001/2001/...
  // TL200: 001-055, códigos simplificados 1601/2601/... y matrículas de los dos motores cabina.
  // Para evitar ambigüedades NO se utilizan remolques ni motores intermedios como códigos de búsqueda.
  if(s==="453"){
    const raw=String(vehicle??"").trim();
    const compact=raw.replace(/\s+/g,"");
    let branch=null;
    let variant="";
    let matchedCode="";
    let matchedVehicle="";
    let cabIndex=0;

    // Matrícula completa o simplificada de los motores cabina.
    // TL100 usa órdenes 001-024; TL200 usa 601-655.
    const full=compact.match(/(?:^|[-])(?:94-71[-])?([12])[-]?453[-]?(\d{3})(?:[-]\d)?$/i);
    if(full){
      const tipo=full[1];
      const orden=Number(full[2]);
      if(orden>=1 && orden<=24){
        branch=orden;
        variant="TL100";
      }else if(orden>=601 && orden<=655){
        branch=orden-600;
        variant="TL200";
      }
      matchedCode=full[2];
      cabIndex=tipo==="2" ? (variant==="TL200" ? 7 : 3) : 0;
    }

    // Numeración simplificada de cuatro cifras.
    // 100x/200x = TL100; 160x/260x = TL200.
    if(!branch && /^\d{4}$/.test(compact)){
      const tipo4=compact.charAt(0);
      const sub4=compact.charAt(1);
      const orden4=Number(compact.slice(2));
      if((tipo4==="1" || tipo4==="2") && sub4==="0" && orden4>=1 && orden4<=24){
        branch=orden4;
        variant="TL100";
        matchedCode=compact;
        cabIndex=tipo4==="2" ? 3 : 0;
      }else if((tipo4==="1" || tipo4==="2") && sub4==="6" && orden4>=1 && orden4<=55){
        branch=orden4;
        variant="TL200";
        matchedCode=compact;
        cabIndex=tipo4==="2" ? 7 : 0;
      }
    }

    // Código corto de rama. 001-024 se reserva al TL100 para conservar el comportamiento anterior;
    // 025-055 identifica directamente el TL200.
    if(!branch && /^\d{1,3}$/.test(compact)){
      const n=Number(compact);
      if(n>=1 && n<=24){
        branch=n;
        variant="TL100";
        matchedCode=String(n).padStart(3,"0");
      }else if(n>=25 && n<=55){
        branch=n;
        variant="TL200";
        matchedCode=String(n).padStart(3,"0");
      }else if(n>=601 && n<=655){
        branch=n-600;
        variant="TL200";
        matchedCode=String(n);
      }
    }

    if(!branch) return null;
    const base = variant==="TL200"
      ? seriesData.unitsTL200?.[String(branch)]
      : seriesData.units?.[String(branch)];
    if(!base) return null;

    const vehicles=base.vehiculosRama||[];
    matchedVehicle=vehicles[cabIndex]||"";
    return {
      ...base,
      numero:base.numero,
      vehiculoBase:base.vehiculoBase,
      vehiculoIntroducido:raw,
      vehiculoBuscado:matchedCode||base.vehiculoBase,
      vehiculoEncontrado:matchedVehicle,
      cocheTipo:variant==="TL200" ? "Serie 453.6 · TL200 · 8 coches" : "Serie 453.0 · TL100 · 4 coches"
    };
  }

  // Serie 464 Civia: cualquiera de sus cuatro vehículos identifica la rama.
  // Se distinguen expresamente primer lote (CAF) y segundo lote (Alstom).
  // También se conserva la procedencia de las ramas 224-231 transformadas desde la 463.
  if(s==="464"){
    const raw=String(vehicle??"").trim();
    const full=raw.match(/(?:^|-)464-(\d{3})(?:-|$)/i);
    let code=full ? full[1] : v;
    if(!full && /^464\d{3}$/.test(v)) code=v.slice(-3);
    code=String(code).padStart(3,"0");

    let base=null;
    for(const candidate of Object.values(seriesData.units||{})){
      if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
      if((candidate.vehiculosRama||[]).some(x=>String(x).split("-")[2]===code)){ base=candidate; break; }
    }
    if(!base) return null;

    const idx=(base.searchCodes||[]).indexOf(code);
    const canonicalVehicle=idx>=0 ? base.vehiculosRama[idx] : base.numero;
    const tipoCoche=["Coche motor extremo A1","Remolque intermedio A2","Remolque intermedio A3 (piso bajo)","Coche motor extremo A1"][idx]||"Vehículo Serie 464";
    return {...base,numero:canonicalVehicle,vehiculoBase:code,vehiculoIntroducido:raw,vehiculoBuscado:code,cocheTipo:tipoCoche,fabricante:base.lote==="Primer lote"?"CAF":"Alstom"};
  }

  // Serie 465 Civia: cualquiera de sus cinco vehículos identifica la rama.
  // Se aceptan códigos cortos, 465-XXX-X y 6/9-465-XXX-X.
  if(s==="465"){
    const raw=String(vehicle??"").trim();
    const typed=raw.match(/(?:^|[-\s])([69])[-\s.]?465[-\s.]?(\d{3})/i);
    const match=raw.match(/465[\s.-]?(\d{3})/i);
    const code=String(typed ? typed[2] : (match ? match[1] : v)).padStart(3,"0");
    const typedKey=typed ? `${typed[1]}-${code}` : null;

    const branch=seriesData.vehicleIndex?.[typedKey] || seriesData.vehicleIndex?.[code];
    const base=branch ? seriesData.units?.[branch] : null;
    if(!base) return null;

    let idx=(base.searchCodes||[]).findIndex((x,i)=>{
      const padded=String(x).padStart(3,"0");
      if(padded!==code) return false;
      if(!typed) return true;
      const expectedType=String(base.vehiculosRama?.[i]||"").split("-")[0];
      return expectedType===typed[1];
    });
    if(idx<0) idx=(base.searchCodes||[]).findIndex(x=>String(x).padStart(3,"0")===code);

    const canonicalVehicle=idx>=0 ? base.vehiculosRama[idx] : base.numero;
    const tipoCoche=[
      "Coche motor extremo A1",
      "Remolque intermedio A4",
      "Remolque intermedio A3 (piso bajo)",
      "Remolque intermedio A4",
      "Coche motor extremo A2"
    ][idx] || "Vehículo Serie 465";

    return {
      ...base,
      numero:canonicalVehicle,
      vehiculoBase:code,
      vehiculoIntroducido:raw,
      vehiculoBuscado:code,
      cocheTipo:tipoCoche,
      fabricante:base.fabricante
    };
  }

  // Serie 463 Civia: cualquiera de sus tres vehículos identifica la rama.
  // Se aceptan códigos cortos (001/501, 201/701, 199/699), 463-XXX-X y matrículas completas Renfe.
  // En el segundo lote, 217 significa Rama 17 del Segundo lote.
  if(s==="463"){
    const raw=String(vehicle??"").trim();
    const full=raw.match(/(?:^|-)463-(\d{3})(?:-|$)/i);
    let code=full ? full[1] : v;
    if(!full && /^463\d{3}$/.test(v)) code=v.slice(-3);
    code=String(code).padStart(3,"0");

    let base=null;
    for(const candidate of Object.values(seriesData.units||{})){
      if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
      if((candidate.vehiculosRama||[]).some(x=>String(x).split("-")[2]===code)){ base=candidate; break; }
    }
    if(!base) return null;

    const idx=(base.searchCodes||[]).indexOf(code);
    const canonicalVehicle=idx>=0 ? base.vehiculosRama[idx] : base.numero;
    const tipoCoche=["Coche motor extremo A1","Remolque intermedio A3","Coche motor extremo A1"][idx]||"Vehículo Serie 463";
    const fabricante = base.lote === "Segundo lote" ? "Alstom" : "CAF";
    return {...base,numero:canonicalVehicle,vehiculoBase:code,vehiculoIntroducido:raw,vehiculoBuscado:code,cocheTipo:tipoCoche,fabricante};
  }

  // Serie 801 Trambahía: cualquiera de sus tres vehículos identifica la rama.
  // Se aceptan códigos cortos (001/101/201...), la matrícula 801-XXX-X
  // y la matrícula completa con espacios o guiones.
  if(s==="801"){
    const raw=String(vehicle??"").trim();
    const matriculaMatch=raw.match(/(?:^|[-\s])801[-\s.]?(\d{3})(?:[-\s.]|$)/i);
    let code=matriculaMatch ? matriculaMatch[1] : v;
    if(!matriculaMatch && /^801\d{3}$/.test(v)) code=v.slice(-3);
    code=String(code).padStart(3,"0");
    let base=null;
    for(const candidate of Object.values(seriesData.units||{})){
      if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
      if((candidate.vehiculosRama||[]).some(x=>String(x).replace(/\D/g,"").slice(-4,-1)===code)){ base=candidate; break; }
    }
    if(!base) return null;
    const idx=(base.searchCodes||[]).indexOf(code);
    const canonicalVehicle=idx>=0 ? base.vehiculosRama[idx] : base.numero;
    const tipos=["Remolque con cabina","Coche motor intermedio","Remolque con cabina"];
    return {
      ...base,
      numero:canonicalVehicle,
      vehiculoBase:code,
      vehiculoIntroducido:raw,
      vehiculoBuscado:code,
      cocheTipo:tipos[idx]||"Vehículo Serie 801",
      fabricante:seriesData.fabricante,
      numeroCoches:seriesData.numeroCoches
    };
  }

  // Serie 449: cada rama se identifica por cualquiera de sus cinco vehículos.
  // Se acepta el código corto (001, 701, 501...), la matrícula 449-XXX-X
  // y la matrícula completa Renfe.
  if(s==="449"){
    const raw=String(vehicle??"").trim();
    const matriculaMatch=raw.match(/(?:^|-)449-(\d{3})(?:-|$)/i);
    let code=matriculaMatch ? matriculaMatch[1] : v;
    if(!matriculaMatch && /^449\d{3}$/.test(v)) code=v.slice(-3);
    code=String(code).padStart(3,"0");
    let base=null;
    for(const candidate of Object.values(seriesData.units||{})){
      if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
    }
    if(!base) return null;
    const idx=(base.searchCodes||[]).indexOf(code);
    const canonicalVehicle=idx>=0 ? base.vehiculosRama[idx] : base.numero;
    const tipos=["Coche motor A1","Remolque A4","Remolque A3 (piso bajo)","Remolque A5","Coche motor A2"];
    return {...base,numero:canonicalVehicle,vehiculoBase:code,vehiculoIntroducido:raw,vehiculoBuscado:code,cocheTipo:tipos[idx]||"Vehículo Serie 449"};
  }

  // Serie 130: las dos cabezas tractoras de cada rama identifican la composición.
  // Cada rama usa dos códigos de búsqueda: 001–045 y 001–045 de la segunda cabeza,
  // representadas en los datos mediante los números reales 001–090.
  // Se acepta el código corto (001, 002...), la matrícula 130-001-X
  // y la matrícula completa Renfe (9-130-001-X / 9-130-501-X).
  if(s==="130"){
    const raw=String(vehicle??"").trim();
    const matriculaMatch=raw.match(/(?:^|-)130-(\d{3})(?:-|$)/i);
    let code=matriculaMatch ? matriculaMatch[1] : v;
    if(!matriculaMatch && /^130\d{3}$/.test(v)) code=v.slice(-3);
    code=String(code).padStart(3,"0");

    let base=null;
    for(const candidate of Object.values(seriesData.units||{})){
      if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
      if((candidate.vehiculosRama||[]).some(x=>String(x).split("-")[2]===code)){ base=candidate; break; }
    }
    if(!base) return null;

    return {
      ...base,
      numero:base.numero,
      vehiculoBase:base.vehiculoBase,
      vehiculoIntroducido:raw,
      vehiculoBuscado:code,
      cocheTipo:"Cabeza tractora"
    };
  }

  // Serie 120: cualquier vehículo de la rama identifica la composición.
  // Primera subserie: ramas 1-12 -> códigos 301/901/601 ... 312/912/612.
  // Segunda subserie: ramas 51-66 -> códigos 351/951/651 ... 366/966/666.
  // Se acepta tanto el código corto (356) como la matrícula completa (9-120-356-1).
  if(s==="120"){
    const raw=String(vehicle??"").trim();
    const matriculaMatch=raw.match(/(?:^|-)120-(\d{3})(?:-|$)/i);
    let code=matriculaMatch ? matriculaMatch[1] : v;
    if(!matriculaMatch && /^120\d{3}$/.test(v)) code=v.slice(-3);
    code=String(code).padStart(3,"0");
    let base=null;
    for(const candidate of Object.values(seriesData.units||{})){
      if((candidate.searchCodes||[]).includes(code)){ base=candidate; break; }
    }
    if(!base) return null;
    const tipoCoche = code.startsWith("3") ? "Cabina Preferente" :
                      code.startsWith("9") ? "Preferente / Cafetería" :
                      code.startsWith("6") ? "Turista / Cabina Turista" : "Vehículo";
    return {
      ...base,
      numero:base.numero,
      vehiculoBase:base.vehiculoBase,
      vehiculoIntroducido:raw,
      vehiculoBuscado:code,
      cocheTipo:tipoCoche,
      subserie:base.subserie
    };
  }

  // Serie 114: para evitar ambigüedades, SOLO se tienen en cuenta
  // las dos cabezas motrices de cada rama:
  //   - motor par (9-114-601, 603, 605...)
  //   - motor impar (9-114-602, 604, 606...)
  // Los dos remolques intermedios NO participan en la búsqueda.
  //
  // Ejemplo:
  //   601 / 9-114-601-8 -> Rama 1
  //   602 / 9-114-602-6 -> Rama 1
  //   501 / 601 (remolques) -> NO identifica ninguna rama.
  if(s==="114"){
    const raw=String(vehicle??"").trim();
    const normalized=v;
    let base=null;

    // La S-114 se identifica EXCLUSIVAMENTE por sus dos cabezas motrices.
    // Nunca se usan los remolques 501/601, 502/602, etc. para localizar una rama.
    // Importante: si se introduce la matrícula completa (9-114-602-6),
    // extraemos correctamente el código de vehículo 602 antes de comparar.
    const matriculaMatch=raw.match(/(?:^|-)114-(\d{3})(?:-|$)/i);
    const motorShort=matriculaMatch ? matriculaMatch[1] : normalized;

    // 1) Coincidencia exacta con el código corto del motor par o impar.
    for(const candidate of Object.values(seriesData.units||{})){
      const motorParShort=String(candidate.motorPar||"").split("-")[2] || "";
      const motorImparShort=String(candidate.motorImpar||"").split("-")[2] || "";
      if(motorShort===motorParShort || motorShort===motorImparShort){
        base=candidate;
        break;
      }
    }

    if(!base) return null;
    return {
      ...base,
      numero:base.numero,
      vehiculoBase:base.vehiculoBase,
      vehiculoIntroducido:raw,
      vehiculoBuscado:motorShort,
      cocheTipo:"Motor",
      composicionRama:base.composicionRama
    };
  }

  return seriesData?.units?.[v] || null;
}

function getSeriesData(series){
  return fleet[normalizeFleetValue(series)] || null;
}

function updateBranchBox(){
  const seriesEl=$("series"), vehicleEl=$("vehicle"), box=$("branchBox"), value=$("branchValue");
  if(!seriesEl || !vehicleEl || !box || !value) return;
  const unit=getFleetUnit(seriesEl.value, vehicleEl.value);
  if(unit){
    const lote=unit.lote ? ` · ${unit.lote}` : "";
    value.textContent=`Rama ${unit.rama}${lote}`;
    box.classList.add("visible");
  }
  else { value.textContent=""; box.classList.remove("visible"); }
}

function getCurrentFleetUnit(){
  return getFleetUnit($("series")?.value||"",$("vehicle")?.value||"");
}

if($("series")) $("series").addEventListener("input",()=>{
  const s=normalizeFleetValue($("series").value);
  const v=$("vehicle");
  if(v){
    if(v.dataset.argosOriginalMaxLength===undefined){
      v.dataset.argosOriginalMaxLength=v.getAttribute("maxlength")||"";
    }
    if(s==="453") v.maxLength=4;
    else if(v.dataset.argosOriginalMaxLength) v.setAttribute("maxlength",v.dataset.argosOriginalMaxLength);
    else v.removeAttribute("maxlength");
  }
  updateBranchBox();
});

if($("vehicle")) $("vehicle").addEventListener("input",updateBranchBox);

function autocomplete(inputId,listId){
  const input=$(inputId),list=$(listId);
  if(!input||!list)return;

  const render=()=>{
    const q=String(input.value??"").trim();
    list.innerHTML="";
    if(!q){list.classList.remove("show");return;}

    const matches=stationMatches(q).slice(0,10);
    if(!matches.length){
      list.innerHTML=`<div class="station-empty">No se encontraron estaciones.</div>`;
      list.classList.add("show");
      return;
    }

    for(const st of matches){
      const o=document.createElement("button");
      o.type="button";
      o.className="suggestion";
      o.dataset.name=st.name;
      o.dataset.code=st.code;
      o.innerHTML=`<span>${esc(st.name)}</span><small>${esc(st.code)}</small>`;
      o.addEventListener("mousedown",e=>e.preventDefault());
      o.addEventListener("click",()=>{
        input.value=st.name;
        input.dataset.stationCode=st.code;
        list.classList.remove("show");
        list.innerHTML="";
      });
      list.appendChild(o);
    }
    list.classList.add("show");
  };

  input.addEventListener("input",render);
  input.addEventListener("focus",render);
  input.addEventListener("change",render);
  input.addEventListener("compositionend",render);
  input.addEventListener("keydown",e=>{
    if(e.key==="Escape")list.classList.remove("show");
  });
};

if($("date")&&!$("date").value)$("date").valueAsDate=new Date();

function collectEntries(listId){
  const list=$(listId); if(!list)return[];
  return [...list.querySelectorAll(".entry-chip span")].map(x=>x.textContent.trim()).filter(Boolean);
}
function clearFormExtras(){
  ["notesEntries","incidentsEntries"].forEach(id=>{const e=$(id);if(e)e.innerHTML=""});
}

function saveCurrentService(e){
  e.preventDefault();
  const service={
    id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),
    train:$("train")?.value.trim()||"",
    series:$("series")?.value.trim()||"",
    vehicle:(()=>{
      const entered=$("vehicle")?.value.trim()||"";
      const unit=getFleetUnit($("series")?.value||"",entered);
      return ["103","104"].includes(normalizeFleetValue($("series")?.value||"")) ? (unit?.vehiculoBase||entered) : entered;
    })(),
    branch:getFleetUnit($("series")?.value||"", $("vehicle")?.value||"")?.rama||"",
    product:$("product")?.value||"",
    origin:$("origin")?.value.trim()||"",
    destination:$("destination")?.value.trim()||"",
    date:$("date")?.value||"",
    kilometres:$("kilometres")?.value?Number($("kilometres").value||0):0,
    notes:$("notes")?.value.trim()||"",
    notesEntries:collectEntries("notesEntries"),
    incidents:$("incidents")?.value.trim()||"",
    incidentsEntries:collectEntries("incidentsEntries"),
    createdAt:Date.now()
  };
  if(!service.train && !$("noTrainNumber")?.checked){toast("Introduce el número de tren");return}
  if(!service.series||!service.origin||!service.destination||!service.date){toast("Completa los campos obligatorios");return}
  const a=services();a.push(service);saveServices(a);
  e.target.reset();clearFormExtras();
  if($("date"))$("date").valueAsDate=new Date();
  if($("product"))$("product").selectedIndex=0;
  if($("productSelectValue")){ $("productSelectValue").textContent="Selecciona un producto";$("productSelectValue").classList.add("product-select-placeholder"); }
  refreshHome();renderHistory();renderStats();updateBranchBox();toast("Servicio guardado");showScreen("menu");
}
if($("serviceForm"))$("serviceForm").addEventListener("submit",saveCurrentService);

function cancelCurrentService(){
  const form=$("serviceForm");
  if(form){form.reset();clearFormExtras();}
  if($("date"))$("date").valueAsDate=new Date();
  if($("product"))$("product").selectedIndex=0;
  if($("productSelectValue")){
    $("productSelectValue").textContent="Selecciona un producto";
    $("productSelectValue").classList.add("product-select-placeholder");
  }
  updateBranchBox();
  document.querySelectorAll(".suggestions.show").forEach(e=>e.classList.remove("show"));
  showScreen("menu");
}
if($("cancelService"))$("cancelService").addEventListener("click",cancelCurrentService);

function fleetFichaHtml(series,vehicle,service=null){
  const unit=getFleetUnit(series,vehicle);
  const seriesData=getSeriesData(series);
  const tech=unit.tech||seriesData;
  if(!unit){
    return `<div class="ficha-empty"><strong>Ficha no disponible</strong><span>No hay información de material almacenada para Serie ${esc(series||"—")} · Vehículo ${esc(vehicle||"—")}.</span></div>`;
  }

  // Toda la información específica aportada para la rama forma parte de su ficha.
  const notes=unit.notas||[];

  // 1) Datos del servicio registrado.
  const serviceBlock=service?`
    <div class="ficha-section">
      <div class="ficha-section-title">DATOS DEL SERVICIO</div>
      <div class="ficha-grid">
        <div><span>Nº de tren</span><strong>${esc(service.train||"—")}</strong></div>
        <div><span>Producto</span><strong>${esc(service.product||"—")}</strong></div>
        <div><span>Origen</span><strong>${esc(service.origin||"—")}</strong></div>
        <div><span>Destino</span><strong>${esc(service.destination||"—")}</strong></div>
        <div><span>Fecha</span><strong>${esc(service.date||"—")}</strong></div>
      </div>
    </div>`:"";

  // 2) Identificación del tren.
  const identification=`
    <div class="ficha-section">
      <div class="ficha-section-title">IDENTIFICACIÓN</div>
      <div class="ficha-grid">
        <div><span>Serie</span><strong>${esc(series)}</strong></div>
        <div><span>Vehículo</span><strong>${esc(["103","104","120","121"].includes(normalizeFleetValue(series)) ? (unit.vehiculoBase||vehicle) : vehicle)}</strong></div>
        <div><span>Rama</span><strong>${esc(unit.rama)}</strong></div>
        ${["446","463","464"].includes(normalizeFleetValue(series))?`<div><span>Lote</span><strong>${esc(unit.lote||"—")}</strong></div>`:""}
        ${(["102","112"].includes(normalizeFleetValue(series)))?`
        <div><span>Motor introducido</span><strong>${esc(unit.motorTipo||"—")}</strong></div>
        <div><span>Motor impar</span><strong>${esc(unit.motorImpar||"—")}</strong></div>
        <div><span>Motor par</span><strong>${esc(unit.motorPar||"—")}</strong></div>`:""}
        <div><span>Número completo</span><strong>${esc(unit.numero||"—")}</strong></div>
        <div><span>Fabricante</span><strong>${esc(unit.fabricante||tech?.fabricante||"—")}</strong></div>
        <div><span>Número de coches</span><strong>${esc(unit.numeroCoches||tech?.numeroCoches||"—")}</strong></div>
        <div><span>Año</span><strong>${esc(unit.ano||"—")}</strong></div>
        ${["130","730"].includes(normalizeFleetValue(series)) && unit.exNumero?`<div><span>${normalizeFleetValue(series)==="730"?"Ex-número · procedencia S-130":"Ex-número"}</span><strong>${esc(unit.exNumero)}</strong></div>`:""}
        <div><span>Depósito / base</span><strong>${esc(unit.deposito||"—")}</strong></div>
        ${normalizeFleetValue(series)==="453"?`
        <div><span>Color</span><strong>${esc(unit.color||"—")}</strong></div>
        <div><span>Estado</span><strong>${esc(unit.estado||"—")}</strong></div>
        <div><span>Fecha de alta</span><strong>${esc(unit.fechaAlta||"—")}</strong></div>`:""}
        ${normalizeFleetValue(series)==="450"?`
        <div><span>Color</span><strong>${esc(unit.color||"—")}</strong></div>
        <div><span>Estado</span><strong>${esc(unit.estado||"—")}</strong></div>`:""}
        ${normalizeFleetValue(series)==="446"?`
        <div><span>LZB</span><strong>${esc(unit.lzb||"—")}</strong></div>
        <div><span>Vehículos de la rama</span><strong>${esc((unit.vehiculosRama||[]).join(" · ")||"—")}</strong></div>
        <div><span>Composición de la rama</span><strong>${esc(unit.composicionRama||"—")}</strong></div>`:""}
        ${normalizeFleetValue(series)==="463"?`<div><span>Color</span><strong>${esc(unit.color||"—")}</strong></div>
        <div><span>Red</span><strong>${esc(unit.red||"—")}</strong></div>`:""}
        <div><span>Ancho de vía</span><strong>${esc(unit.ancho||tech?.anchoVia||"—")} ${unit.ancho?"mm":""}</strong></div>
        ${(unit.subserie||seriesData?.subseries)?`<div><span>Subserie</span><strong>${esc(unit.subserie||seriesData.subseries)}</strong></div>`:""}
        ${(unit.modelo||tech?.modelo||seriesData?.modelo)?`<div><span>Modelo</span><strong>${esc(unit.modelo||tech?.modelo||seriesData.modelo)}</strong></div>`:""}
        ${(unit.apodo||tech?.apodo)?`<div><span>Apodo</span><strong>${esc(seriesData.apodo)}</strong></div>`:""}
        ${(unit.tipoMaterial||tech?.tipoMaterial||seriesData?.tipoMaterial)?`<div><span>Tipo de material</span><strong>${esc(unit.tipoMaterial||tech?.tipoMaterial||seriesData.tipoMaterial)}</strong></div>`:""}
        ${normalizeFleetValue(series)==="114"?`
        <div><span>Composición de la rama</span><strong>${esc(unit.composicionRama||"—")}</strong></div>`:""}
        ${["120","121","730"].includes(normalizeFleetValue(series))?`<div><span>Composición de la rama</span><strong>${esc(unit.composicionRama||"—")}</strong></div>`:""}
        ${normalizeFleetValue(series)==="449"?`<div><span>Remolques de la rama</span><strong>${esc((unit.remolquesRama||[]).join(" · ")||"—")}</strong></div>`:""}
        ${["463","464"].includes(normalizeFleetValue(series))?`<div><span>Vehículos de la rama</span><strong>${esc((unit.vehiculosRama||[]).join(" · ")||"—")}</strong></div>
        <div><span>Composición</span><strong>${esc(unit.composicionRama||seriesData?.composicion||"—")}</strong></div>
        ${unit.procedencia?`<div><span>Procedencia</span><strong>${esc(unit.procedencia)}</strong></div>`:""}
        ${unit.transformadaA?`<div><span>Transformación</span><strong>${esc(unit.transformadaA)}</strong></div>`:""}
        ${unit.estadoActual?`<div><span>Situación actual</span><strong>${esc(unit.estadoActual)}</strong></div>`:""}`:""}
        ${normalizeFleetValue(series)==="103"?`
        <div><span>Coche introducido</span><strong>${esc(unit.vehiculoBase||vehicle)}</strong></div>
        <div><span>Tipo de coche</span><strong>${esc(unit.cocheTipo||"—")}</strong></div>
        <div><span>Composición</span><strong>8 coches · Mc-R-M-R-R-M-R-Mc</strong></div>`:""}
        ${["453","801"].includes(normalizeFleetValue(series))?`
        <div><span>Vehículos de la rama</span><strong>${esc((unit.vehiculosRama||[]).join(" · ")||"—")}</strong></div>
        <div><span>Composición de la rama</span><strong>${esc(unit.composicionRama||seriesData?.composicion||"—")}</strong></div>`:""}
        ${tech?.velocidadMaxima?`<div><span>Velocidad máxima</span><strong>${esc(tech.velocidadMaxima||seriesData.velocidadMaxima)}</strong></div>`:""}
        ${tech?.potencia?`<div><span>Potencia</span><strong>${esc(tech.potencia||seriesData.potencia)}</strong></div>`:""}
        ${tech?.plazasSentadas?`<div><span>Plazas sentadas</span><strong>${esc(tech.plazasSentadas||seriesData.plazasSentadas)}</strong></div>`:""}
         ${["112","121","446","450","453","464","730","801"].includes(normalizeFleetValue(series))?`
         <div><span>Longitud</span><strong>${esc(tech.longitud||"—")}</strong></div>
         <div><span>Peso</span><strong>${esc(tech.peso||"—")}</strong></div>
         <div><span>Tensión</span><strong>${esc(tech.tension||"—")}</strong></div>
         <div><span>Tracción</span><strong>${esc(tech.traccion||"—")}</strong></div>
         <div><span>Señalización</span><strong>${esc(normalizeFleetValue(series)==="446" ? (unit.lzb==="Sí" ? "LZB · ASFA" : "ASFA") : (tech.señalizacion||"—"))}</strong></div>
         <div><span>Composición</span><strong>${esc(tech.composicion||"—")}</strong></div>
         ${["446","453"].includes(normalizeFleetValue(series))?`
         ${normalizeFleetValue(series)==="453"?`<div><span>Esfuerzo de tracción</span><strong>${esc(tech.esfuerzoTraccion||"—")}</strong></div>`:""}
         <div><span>Frenos</span><strong>${esc(tech.frenos||"—")}</strong></div>
         <div><span>Mando múltiple</span><strong>${esc(tech.mandoMultiple||"—")}</strong></div>
         <div><span>Enganche</span><strong>${esc(tech.enganche||"—")}</strong></div>
         <div><span>Tipo de bogies</span><strong>${esc(tech.tipoBogies||"—")}</strong></div>
         <div><span>Rodaje</span><strong>${esc(tech.rodaje||tech.composicion||"—")}</strong></div>`:""}`:""}
      </div>
    </div>`;

  // 3) Datos destacados de la rama.
  const highlights=notes.length?`
    <div class="ficha-section">
      <div class="ficha-section-title">DATOS DESTACADOS DE LA RAMA</div>
      <div class="ficha-notes${normalizeFleetValue(series)==="121"?" ficha-notes-121":""}">${notes.map(n=>`<div class="ficha-note">${esc(n)}</div>`).join("")}</div>
    </div>`:`
    <div class="ficha-section">
      <div class="ficha-section-title">DATOS DESTACADOS DE LA RAMA</div>
      <div class="ficha-empty-inline">No hay acontecimientos destacados registrados para esta rama.</div>
    </div>`;

  // 4) Información general de la serie.
  const general=Array.isArray(unit.generalNotes)?unit.generalNotes.flat(Infinity).filter(Boolean):
    (Array.isArray(seriesData?.generalNotes)?seriesData.generalNotes.flat(Infinity).filter(Boolean):[]);
  const generalBlock=general.length?`
    <div class="ficha-section ficha-general-section">
      <div class="ficha-section-title">INFORMACIÓN GENERAL DE LA SERIE ${esc(series)}</div>
      <div class="ficha-general-grid">${general.map((n,i)=>`<div class="ficha-general-item"><span class="ficha-general-number">${String(i+1).padStart(2,"0")}</span><div>${esc(n)}</div></div>`).join("")}</div>
    </div>`:"";

  const vehiculoFicha=["103","104","120","121"].includes(normalizeFleetValue(series)) ? (unit.vehiculoBase||vehicle) : (normalizeFleetValue(series)==="730" ? (unit.numero||vehicle) : vehicle);
  const fichaRama = normalizeFleetValue(series)==="453" ? String(Number(unit.rama||0)) : String(unit.rama||"");
  const fichaSubserie = normalizeFleetValue(series)==="453"
    ? (String(unit.numeroCoches||"").startsWith("8 coches") || String(unit.subserie||"").includes("453.6") ? "453.6 · TL200 · 8 coches" : "453.0 · TL100 · 4 coches")
    : (normalizeFleetValue(series)==="446"
        ? String(unit.subserie||"").replace(/\s*·\s*(Primer lote|Segundo lote|Tercer lote)\s*$/i,"")
        : (unit.subserie||""));
  const hero=`<div class="ficha-hero"><div class="ficha-kicker">MATERIAL RENFE</div><h3>Serie ${esc(series)}${fichaSubserie?` · ${esc(fichaSubserie)}`:""} · Rama ${esc(fichaRama)}${unit.lote?` · ${esc(unit.lote)}`:""}</h3><p>Vehículo ${esc(vehiculoFicha)} · ${esc(unit.numero||"—")}</p></div>`;

  return `${hero}
    ${serviceBlock}
    ${identification}
    ${highlights}
    ${generalBlock}`;
}
function openFicha(series,vehicle,service=null){
  if($("fichaContent")) $("fichaContent").innerHTML=fleetFichaHtml(series,vehicle,service);
  showScreen("ficha");
}

function card(s){
  const notes=[...(s.notesEntries||[]),s.notes||""].filter(Boolean);
  const incidents=[...(s.incidentsEntries||[]),s.incidents||""].filter(Boolean);
  const label=s.train?`Tren ${esc(s.train)}`:"Sin número de tren";
  return `<article class="history-card history-card-clickable" data-service-id="${esc(s.id||"")}" tabindex="0" role="button" aria-label="Ver ficha de ${label}"><div class="history-top"><span class="train-number">${label}</span><span class="service-date">${esc(s.date)}</span></div><div class="route">${esc(s.origin)} → ${esc(s.destination)}</div><div class="service-meta">Serie ${esc(s.series)}${s.vehicle?" · Vehículo "+esc(s.vehicle):""}${s.branch?" · Rama "+esc(s.branch):""}${s.product?" · "+esc(s.product):""}${s.kilometres?" · "+esc(s.kilometres)+" km":""}</div>${notes.length?`<div class="service-meta"><b>Anotaciones:</b> ${notes.map(esc).join(" · ")}</div>`:""}${incidents.length?`<div class="service-meta"><b>Incidencias:</b> ${incidents.map(esc).join(" · ")}</div>`:""}<div class="history-open-hint">Toca para ver ficha ›</div></article>`;
}
function renderHistory(){
  const list=$("historyList");if(!list)return;
  const a=services().slice().reverse();
  list.innerHTML=a.length?a.map(card).join(""):"<div class=\"empty\">Todavía no hay servicios registrados.</div>";
  list.querySelectorAll("[data-service-id]").forEach(el=>{
    const open=()=>{const service=services().find(s=>s.id===el.dataset.serviceId);if(service)openFicha(service.series,service.vehicle,service)};
    el.addEventListener("click",open);
    el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});
  });
}

function renderStats(){
  const a=services();
  if($("statServices"))$("statServices").textContent=a.length;
  if($("statKm"))$("statKm").textContent=a.reduce((n,s)=>n+Number(s.kilometres||0),0).toLocaleString("es-ES");
  if($("statSeries"))$("statSeries").textContent=new Set(a.map(s=>norm(s.series)).filter(Boolean)).size;
  if($("statLast"))$("statLast").textContent=a.length?(a[a.length-1].train||"Sin número"):"—";
}
function refreshHome(){
  const a=services(),latest=a.length?a[a.length-1]:null;
  if($("latestService")){
    $("latestService").textContent=latest?[latest.train?"Tren "+latest.train:"Sin número",latest.origin&&latest.destination?latest.origin+" → "+latest.destination:"",latest.date].filter(Boolean).join(" · "):"Aún no hay servicios registrados";
  }
  const select=$("lastTripSelect");if(!select)return;
  const current=select.value;while(select.options.length>1)select.remove(1);
  a.slice().reverse().forEach((s,i)=>{const o=document.createElement("option");o.value=String(i);o.textContent=[s.train?"Tren "+s.train:"Sin número",s.origin&&s.destination?s.origin+" → "+s.destination:"",s.date].filter(Boolean).join(" · ");select.appendChild(o)});
  if(current)select.value=current;
}
function toast(t){
  const e=$("toast");if(!e)return;
  e.textContent=t;e.classList.add("show");clearTimeout(window.__argosToast);window.__argosToast=setTimeout(()=>e.classList.remove("show"),1800);
}
window.renderHistory=renderHistory;window.renderStats=renderStats;window.refreshHome=refreshHome;window.toast=toast;
if($("viewFichaFromForm")) $("viewFichaFromForm").addEventListener("click",()=>{
  const series=$("series")?.value.trim()||"", vehicle=$("vehicle")?.value.trim()||"";
  if(!series||!vehicle){toast("Introduce serie y vehículo para ver la ficha");return;}
  openFicha(series,vehicle,null);
});



document.addEventListener("DOMContentLoaded",()=>{refreshHome();renderHistory();renderStats()});

(function(){
  if(document.getElementById("argos-general-ficha-clean")) return;
  const s=document.createElement("style");
  s.id="argos-general-ficha-clean";
  s.textContent=`.ficha-general-grid{display:grid;grid-template-columns:1fr;gap:10px}.ficha-general-item{display:flex;gap:12px;align-items:flex-start;padding:13px 14px;border:1px solid rgba(120,120,120,.16);border-radius:12px;background:rgba(128,128,128,.045);line-height:1.45}.ficha-general-number{font-weight:800;font-size:12px;opacity:.55;min-width:24px;padding-top:2px}@media(min-width:760px){.ficha-general-grid{grid-template-columns:1fr 1fr}}`;
  document.head.appendChild(s);
})();

(function(){
  if(document.getElementById("argos-s121-notes-separated")) return;
  const s=document.createElement("style");
  s.id="argos-s121-notes-separated";
  s.textContent=`
    .ficha-notes-121{display:grid;grid-template-columns:1fr;gap:10px}
    .ficha-notes-121 .ficha-note{padding:13px 14px;border:1px solid rgba(120,120,120,.16);border-radius:12px;background:rgba(128,128,128,.045);line-height:1.45}
  `;
  document.head.appendChild(s);
})();

/* ================================================================
   ARGOS · ÚLTIMO SERVICIO · RESUMEN INTERMEDIO
   Añadido sin modificar las funciones existentes.
   ================================================================ */
(function(){
  'use strict';

  function argosLatestService(){
    try{
      const raw=localStorage.getItem('argos_services')||'[]';
      const list=JSON.parse(raw);
      return Array.isArray(list)&&list.length?list[list.length-1]:null;
    }catch(e){
      console.warn('ARGOS · último servicio:',e);
      return null;
    }
  }

  function argosDigits(v){
    return String(v??'').replace(/\D/g,'');
  }

  function argosNormalizeSeries(v){
    return argosDigits(v).replace(/^0+/,'')||'';
  }

  function argosFindUnit(service){
    try{
      if(typeof fleet==='undefined') return null;
      const series=argosNormalizeSeries(service?.series);
      const vehicle=String(service?.vehicle||'').trim();
      const branch=argosDigits(service?.branch);
      const data=fleet[series];
      const units=data?.units||{};
      const entries=Object.entries(units);

      if(branch){
        const byBranch=entries.find(([,u])=>argosDigits(u?.rama)===branch);
        if(byBranch) return {key:byBranch[0],unit:byBranch[1]};
      }

      if(vehicle){
        const byKey=entries.find(([key])=>String(key).trim()===vehicle);
        if(byKey) return {key:byKey[0],unit:byKey[1]};

        const byBase=entries.find(([,u])=>String(u?.vehiculoBase||'').trim()===vehicle);
        if(byBase) return {key:byBase[0],unit:byBase[1]};

        const byNumber=entries.find(([,u])=>String(u?.numero||'').includes(vehicle));
        if(byNumber) return {key:byNumber[0],unit:byNumber[1]};
      }
    }catch(e){
      console.warn('ARGOS · unidad del último servicio:',e);
    }
    return null;
  }

  function argosEsc(v){
    if(typeof esc==='function') return esc(v);
    return String(v??'').replace(/[&<>"']/g,c=>({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function argosField(label,value){
    if(value===undefined||value===null||String(value).trim()==='') return '';
    return `<div class="argos-latest-field"><span>${argosEsc(label)}</span><strong>${argosEsc(value)}</strong></div>`;
  }

  function argosShowLatestSummary(){
    const service=argosLatestService();
    if(!service){
      if(typeof toast==='function') toast('Aún no hay servicios registrados');
      return;
    }

    const found=argosFindUnit(service);
    const unit=found?.unit||null;
    const series=String(service.series||'').trim()||'—';
    const vehicle=String(service.vehicle||'').trim() || String(unit?.vehiculoBase||found?.key||'').trim();
    const branch=String(service.branch||unit?.rama||'').trim();
    const numero=String(unit?.numero||'').trim();

    let modal=document.getElementById('argosLatestSummary');
    if(!modal){
      modal=document.createElement('div');
      modal.id='argosLatestSummary';
      modal.className='argos-latest-modal';
      modal.innerHTML=`
        <div class="argos-latest-backdrop" data-latest-close></div>
        <div class="argos-latest-panel" role="dialog" aria-modal="true" aria-labelledby="argosLatestTitle">
          <button type="button" class="argos-latest-close" data-latest-close aria-label="Cerrar">×</button>
          <div id="argosLatestContent"></div>
        </div>`;
      document.body.appendChild(modal);

      modal.querySelectorAll('[data-latest-close]').forEach(el=>el.addEventListener('click',argosCloseLatestSummary));
    }

    const content=modal.querySelector('#argosLatestContent');
    if(!content) return;

    const materialTitle=`Serie ${series}${branch?` · Rama ${branch}`:''}`;
    const vehicleLine=[vehicle?`Vehículo ${vehicle}`:'',numero].filter(Boolean).join(' · ');

    content.innerHTML=`
      <div class="argos-latest-kicker">ÚLTIMO SERVICIO</div>
      <div class="argos-latest-hero">
        <div class="argos-latest-material">MATERIAL RENFE</div>
        <h2 id="argosLatestTitle">${argosEsc(materialTitle)}</h2>
        <p>${argosEsc(vehicleLine||'Vehículo no especificado')}</p>
      </div>

      <div class="argos-latest-section-title">DATOS DEL SERVICIO</div>
      <div class="argos-latest-grid">
        ${argosField('Nº de tren',service.train||'Sin número')}
        ${argosField('Producto',service.product||'—')}
        ${argosField('Origen',service.origin||'—')}
        ${argosField('Destino',service.destination||'—')}
        ${argosField('Fecha',service.date||'—')}
        ${argosField('Kilómetros',service.kilometres?`${service.kilometres} km`: '')}
      </div>

      <button type="button" class="argos-latest-more" id="argosLatestMore">Ver más información</button>`;

    const more=document.getElementById('argosLatestMore');
    if(more){
      more.onclick=function(){
        argosCloseLatestSummary();
        setTimeout(function(){
          if(typeof openFicha==='function'){
            openFicha(series,vehicle,service);
          }else if(typeof window.openFicha==='function'){
            window.openFicha(series,vehicle,service);
          }else if(typeof toast==='function'){
            toast('No se ha podido abrir la ficha completa');
          }
        },30);
      };
    }

    modal.classList.add('open');
    document.body.classList.add('argos-latest-modal-open');
  }

  function argosCloseLatestSummary(){
    const modal=document.getElementById('argosLatestSummary');
    if(modal) modal.classList.remove('open');
    document.body.classList.remove('argos-latest-modal-open');
  }

  function argosBindLatestButton(){
    const buttons=document.querySelectorAll('.home-card[data-screen="history"]');
    let target=null;
    buttons.forEach(button=>{
      if(button.querySelector('#latestService')) target=button;
    });

    const latest=document.getElementById('latestService');
    target=target||latest?.closest('.home-card');
    if(!target || target.dataset.argosLatestBound==='1') return;

    target.dataset.argosLatestBound='1';

    // Captura el clic antes del listener original de data-screen="history".
    target.addEventListener('click',function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      argosShowLatestSummary();
    },true);

    target.addEventListener('keydown',function(e){
      if(e.key==='Enter'||e.key===' '){
        e.preventDefault();
        e.stopImmediatePropagation();
        argosShowLatestSummary();
      }
    },true);
  }

  function argosBlankLatestLabel(){
    const latest=document.getElementById('latestService');
    if(latest){
      latest.textContent='';
      latest.style.display='none';
    }
  }

  function argosInitLatestService(){
    argosBindLatestButton();
    argosBlankLatestLabel();
  }

  const style=document.createElement('style');
  style.id='argos-latest-service-summary-style';
  style.textContent=`
    #latestService{display:none!important}
    body.argos-latest-modal-open{overflow:hidden!important}
    .argos-latest-modal{
      position:fixed;inset:0;z-index:3000;display:none;
      align-items:center;justify-content:center;padding:18px;
    }
    .argos-latest-modal.open{display:flex}
    .argos-latest-backdrop{
      position:absolute;inset:0;background:rgba(15,10,15,.46);
      backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);
    }
    .argos-latest-panel{
      position:relative;z-index:1;width:min(760px,100%);max-height:calc(100dvh - 36px);
      overflow-y:auto;background:var(--card);color:var(--ink);
      border:1px solid var(--line);border-radius:24px;padding:22px;
      box-shadow:0 24px 70px rgba(0,0,0,.24);
      animation:argosLatestIn .18s ease-out;
    }
    @keyframes argosLatestIn{from{opacity:0;transform:translateY(10px) scale(.985)}to{opacity:1;transform:none}}
    .argos-latest-close{
      position:absolute;right:14px;top:14px;width:40px;height:40px;border:0;
      border-radius:13px;background:var(--soft);color:var(--renfe);font-size:28px;
      line-height:1;display:flex;align-items:center;justify-content:center;z-index:2;
    }
    .argos-latest-kicker{
      color:var(--renfe);font-size:11px;font-weight:900;letter-spacing:.1em;
      margin:2px 52px 10px 2px;
    }
    .argos-latest-hero{
      background:linear-gradient(135deg,var(--soft),var(--card));
      border:1px solid var(--line);border-radius:19px;padding:20px 18px;margin-bottom:18px;
    }
    .argos-latest-material{color:var(--renfe);font-size:11px;font-weight:900;letter-spacing:.09em}
    .argos-latest-hero h2{margin:5px 0 4px;font-size:30px;line-height:1.08;letter-spacing:-.02em}
    .argos-latest-hero p{margin:0;color:var(--muted);font-size:17px;font-weight:750}
    .argos-latest-section-title{
      color:var(--renfe);font-size:12px;font-weight:900;letter-spacing:.08em;margin:0 0 10px;
    }
    .argos-latest-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .argos-latest-field{
      min-width:0;padding:14px;border:1px solid var(--line);border-radius:15px;
      background:var(--page);display:flex;flex-direction:column;gap:5px;
    }
    .argos-latest-field span{color:var(--muted);font-size:12px}
    .argos-latest-field strong{font-size:16px;line-height:1.25;overflow-wrap:anywhere}
    .argos-latest-more{
      width:100%;min-height:52px;margin-top:16px;border:0;border-radius:15px;
      background:var(--renfe);color:#fff;font-weight:900;font-size:15px;
      box-shadow:0 8px 20px rgba(138,0,92,.18);
    }
    .argos-latest-more:active{transform:scale(.99)}
    @media(max-width:600px){
      .argos-latest-modal{padding:10px}
      .argos-latest-panel{max-height:calc(100dvh - 20px);padding:15px;border-radius:21px}
      .argos-latest-hero{padding:18px 15px;border-radius:17px}
      .argos-latest-hero h2{font-size:25px;padding-right:30px}
      .argos-latest-hero p{font-size:15px}
      .argos-latest-grid{grid-template-columns:1fr}
      .argos-latest-field{padding:13px}
    }
    body.dark .argos-latest-panel{box-shadow:0 24px 70px rgba(0,0,0,.5)}
  `;
  document.head.appendChild(style);

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',argosInitLatestService,{once:true});
  }else{
    argosInitLatestService();
  }

  // refreshHome() vuelve a escribir el contenido del elemento al navegar.
  // Lo dejamos vacío cada vez que se refresca la pantalla de inicio.
  const originalRefreshHome=window.refreshHome;
  if(typeof originalRefreshHome==='function' && !window.__argosLatestRefreshWrapped){
    window.__argosLatestRefreshWrapped=true;
    window.refreshHome=function(){
      const result=originalRefreshHome.apply(this,arguments);
      argosBlankLatestLabel();
      argosBindLatestButton();
      return result;
    };
  }

  window.argosShowLatestSummary=argosShowLatestSummary;
  window.argosCloseLatestSummary=argosCloseLatestSummary;
})();

/* ================================================================
   ARGOS · ÚLTIMA VEZ · MENÚ PROPIO
   Añadido sobre la versión existente.
   IMPORTANTE:
   - Último servicio NO se modifica aquí.
   - Última vez deja de ser una ventana flotante.
   - Se convierte en una pantalla propia de ARGOS.
   - Se conserva la selección agrupada por producto y la ficha intermedia.
   ================================================================ */
(function(){
  'use strict';

  const SCREEN_ID='argosLastTimeScreen';
  const TRIGGER_ID='argosLastTimeTrigger';

  function atServices(){
    try{
      const raw=localStorage.getItem('argos_services')||'[]';
      const list=JSON.parse(raw);
      return Array.isArray(list)?list:[];
    }catch(e){
      console.warn('ARGOS · última vez:',e);
      return [];
    }
  }

  function atEsc(v){
    if(typeof esc==='function') return esc(v);
    return String(v??'').replace(/[&<>"']/g,c=>({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function atVal(obj,keys){
    for(const key of keys){
      const value=obj?.[key];
      if(value!==undefined&&value!==null&&String(value).trim()!=='') return String(value).trim();
    }
    return '';
  }

  function atDateValue(service){
    const raw=atVal(service,['date','fecha']);
    const stamp=service?.createdAt?Number(service.createdAt):0;
    return {raw,stamp:Number.isFinite(stamp)?stamp:0};
  }

  function atDateLabel(service){
    const raw=atVal(service,['date','fecha']);
    if(!raw) return 'Fecha no indicada';
    const d=new Date(raw+'T00:00:00');
    if(Number.isNaN(d.getTime())) return raw;
    return d.toLocaleDateString('es-ES',{
      day:'2-digit',month:'short',year:'numeric'
    }).replace('.','');
  }

  function atProductName(service){
    return atVal(service,['product','producto'])||'Sin producto';
  }

  function atProductRank(name){
    const n=name.toLocaleLowerCase('es-ES')
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const order=[
      'ave','avlo','alvia','intercity','euromed','avant',
      'cercanias','media distancia','regional','md',
      'mercancias'
    ];
    const idx=order.findIndex(x=>n===x);
    return idx<0?100:idx;
  }

  function atSortServices(list){
    return list.slice().sort((a,b)=>{
      const pa=atProductName(a),pb=atProductName(b);
      const ra=atProductRank(pa),rb=atProductRank(pb);
      if(ra!==rb) return ra-rb;

      const pn=pa.localeCompare(pb,'es',{sensitivity:'base'});
      if(pn!==0) return pn;

      const da=atDateValue(a),db=atDateValue(b);
      const ta=da.raw?new Date(da.raw+'T00:00:00').getTime():0;
      const tb=db.raw?new Date(db.raw+'T00:00:00').getTime():0;

      if(ta!==tb) return tb-ta;
      return db.stamp-da.stamp;
    });
  }

  /*
   * "Última vez" NO es un historial.
   * Debe mostrar únicamente el último servicio realizado
   * para cada trayecto/línea.
   *
   * Si existe un campo explícito de línea, se utiliza.
   * En la versión actual de ARGOS no existe, así que el
   * trayecto se identifica por PRODUCTO + ORIGEN + DESTINO.
   *
   * La dirección importa:
   * Madrid → Alcalá y Alcalá → Madrid son trayectos distintos.
   */
  function atLineKey(service){
    const explicitLine=atVal(service,[
      'line','linea','línea','routeId','route','trayectoId'
    ]);

    if(explicitLine){
      return [
        atProductName(service),
        explicitLine
      ].map(v=>String(v).trim().toLocaleLowerCase('es-ES')
        .normalize('NFD').replace(/[\u0300-\u036f]/g,'')).join('|');
    }

    const origin=atVal(service,['origin','origen']);
    const destination=atVal(service,['destination','destino']);

    return [
      atProductName(service),
      origin,
      destination
    ].map(v=>String(v).trim().toLocaleLowerCase('es-ES')
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')).join('|');
  }

  function atServiceRecency(service,index){
    const dateInfo=atDateValue(service);
    const dateStamp=dateInfo.raw
      ? new Date(dateInfo.raw+'T00:00:00').getTime()
      : 0;

    return {
      date:Number.isFinite(dateStamp)?dateStamp:0,
      created:Number.isFinite(dateInfo.stamp)?dateInfo.stamp:0,
      index
    };
  }

  function atIsNewerService(candidate,current,candidateIndex,currentIndex){
    const a=atServiceRecency(candidate,candidateIndex);
    const b=atServiceRecency(current,currentIndex);

    if(a.date!==b.date) return a.date>b.date;
    if(a.created!==b.created) return a.created>b.created;

    // Si ambos no tienen una fecha/hora útil, gana el último
    // que aparece en argos_services (es decir, el último registrado).
    return a.index>b.index;
  }

  function atLatestPerLine(list){
    const latest=new Map();

    list.forEach((service,index)=>{
      const key=atLineKey(service);

      if(!latest.has(key)){
        latest.set(key,{service,index});
        return;
      }

      const current=latest.get(key);

      if(atIsNewerService(
        service,current.service,index,current.index
      )){
        latest.set(key,{service,index});
      }
    });

    return Array.from(latest.values()).map(item=>item.service);
  }

  function atSeriesName(service){
    return atVal(service,['series','serie'])||'';
  }

  function atSeriesKey(service){
    const series=atSeriesName(service);
    return series
      .trim()
      .toLocaleLowerCase('es-ES')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'');
  }

  function atLatestPerSeries(list){
    const latest=new Map();

    list.forEach((service,index)=>{
      const series=atSeriesName(service);
      if(!series) return;

      const key=atSeriesKey(service);

      if(!latest.has(key)){
        latest.set(key,{service,index});
        return;
      }

      const current=latest.get(key);

      if(atIsNewerService(
        service,current.service,index,current.index
      )){
        latest.set(key,{service,index});
      }
    });

    return Array.from(latest.values())
      .map(item=>item.service)
      .sort((a,b)=>{
        const sa=atSeriesName(a);
        const sb=atSeriesName(b);

        const na=Number(sa.replace(/\D/g,''));
        const nb=Number(sb.replace(/\D/g,''));

        if(Number.isFinite(na)&&Number.isFinite(nb)&&na!==nb){
          return na-nb;
        }

        return sa.localeCompare(sb,'es',{numeric:true,sensitivity:'base'});
      });
  }

  function atFindUnit(service){
    try{
      if(typeof fleet==='undefined') return null;

      const series=String(atVal(service,['series','serie']))
        .replace(/\D/g,'').replace(/^0+/,'');
      const vehicle=atVal(service,['vehicle','vehiculo']);
      const branch=String(atVal(service,['branch','rama']))
        .replace(/\D/g,'');

      const data=fleet[series];
      const units=data?.units||{};
      const entries=Object.entries(units);

      if(branch){
        const byBranch=entries.find(([,u])=>
          String(u?.rama??'').replace(/\D/g,'')===branch
        );
        if(byBranch) return {key:byBranch[0],unit:byBranch[1]};
      }

      if(vehicle){
        const byKey=entries.find(([key])=>String(key).trim()===vehicle);
        if(byKey) return {key:byKey[0],unit:byKey[1]};

        const byBase=entries.find(([,u])=>
          String(u?.vehiculoBase||'').trim()===vehicle
        );
        if(byBase) return {key:byBase[0],unit:byBase[1]};

        const byNumber=entries.find(([,u])=>
          String(u?.numero||'').includes(vehicle)
        );
        if(byNumber) return {key:byNumber[0],unit:byNumber[1]};
      }
    }catch(e){
      console.warn('ARGOS · unidad última vez:',e);
    }

    return null;
  }

  function atServiceTitle(service){
    return {
      origin:atVal(service,['origin','origen'])||'Origen no indicado',
      destination:atVal(service,['destination','destino'])||'Destino no indicado'
    };
  }

  function atServiceIdentity(service){
    const explicit=String(
      service?.id||service?.createdAt||''
    ).trim();

    if(explicit) return explicit;

    return JSON.stringify([
      atVal(service,['train','tren','number','numero']),
      atVal(service,['date','fecha']),
      atVal(service,['origin','origen']),
      atVal(service,['destination','destino']),
      atVal(service,['series','serie']),
      atVal(service,['vehicle','vehiculo']),
      atProductName(service)
    ]);
  }

  function atFindServiceFromCardKey(list,key){
    return list.find(s=>atServiceIdentity(s)===key)||null;
  }

  function atEnsureScreen(){
    let screen=document.getElementById(SCREEN_ID);
    if(screen) return screen;

    const host=document.querySelector('.app-shell')||document.querySelector('main')||document.body;

    screen=document.createElement('section');
    screen.id=SCREEN_ID;
    screen.className='screen argos-last-time-screen';
    screen.innerHTML=`
      <div class="argos-last-time-page">
        <div class="argos-last-time-header">
          <div class="argos-last-time-header-brand">
            <span>ARGOS</span>
            <small>· TU ACTIVIDAD</small>
          </div>
        </div>

        <div id="argosLastTimeContent"></div>
      </div>`;

    host.appendChild(screen);

    return screen;
  }

  let atMode='route';

  function atOpen(){
    const screen=atEnsureScreen();

    if(typeof showScreen==='function'){
      showScreen(SCREEN_ID);
    }else{
      document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
      screen.classList.add('active');
      window.scrollTo({top:0,behavior:'instant'});
    }

    atRenderMode(screen);
  }

  function atRenderMode(screen){
    if(atMode==='series'){
      atRenderSeriesList(screen,atServices());
      return;
    }

    atRenderList(screen,atLatestPerLine(atServices()));
  }

  function atRenderSearchMode(screen,mode){
    atMode=mode==='series'?'series':'route';
    atRenderMode(screen);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function atRenderList(screen,list){
    const content=screen?.querySelector('#argosLastTimeContent');
    if(!content) return;

    if(!list.length){
      content.innerHTML=`
        <div class="argos-last-time-empty">
          <div class="argos-last-time-empty-icon">◷</div>
          <div class="argos-last-time-kicker">ÚLTIMA VEZ</div>
          <h1>Todavía no hay trayectos</h1>
          <p>
            Cuando registres un servicio aparecerá aquí para que puedas
            volver a él rápidamente.
          </p>
          <button type="button"
                  class="argos-last-time-empty-button"
                  id="argosLastTimeEmptyBack">
            Volver al inicio
          </button>
        </div>`;

      content.querySelector('#argosLastTimeEmptyBack')?.addEventListener('click',()=>{
        if(typeof showScreen==='function') showScreen('menu');
      });
      return;
    }

    const grouped=new Map();

    atSortServices(list).forEach(service=>{
      const product=atProductName(service);
      if(!grouped.has(product)) grouped.set(product,[]);
      grouped.get(product).push(service);
    });

    let groups='';

    for(const [product,services] of grouped.entries()){
      const productCount=services.length;

      groups+=`
        <section class="argos-last-time-product">
          <div class="argos-last-time-product-head">
            <div>
              <div class="argos-last-time-product-kicker">PRODUCTO</div>
              <h2>${atEsc(product)}</h2>
            </div>
            <span class="argos-last-time-count">
              ${productCount}
              ${productCount===1?'servicio':'servicios'}
            </span>
          </div>

          <div class="argos-last-time-services">
            ${services.map(atServiceCard).join('')}
          </div>
        </section>`;
    }

    content.innerHTML=`
      <div class="argos-last-time-hero">
        <div>
          <div class="argos-last-time-kicker">ARGOS · TU ACTIVIDAD</div>
          <h1>Última vez</h1>
          <p>El último servicio realizado en cada trayecto.</p>
        </div>

        <div class="argos-last-time-total">
          <strong>${list.length}</strong>
          <span>${list.length===1?'trayecto':'trayectos'}</span>
        </div>
      </div>

      <div class="argos-last-time-searchbar">
        <div class="argos-last-time-search-label">
          <span>Buscar por:</span>
        </div>

        <div class="argos-last-time-switch"
             role="group"
             aria-label="Buscar por">
          <button type="button"
                  class="argos-last-time-switch-option ${atMode==='route'?'active':''}"
                  data-at-mode="route"
                  aria-pressed="${atMode==='route'?'true':'false'}">
            Trayecto
          </button>

          <button type="button"
                  class="argos-last-time-switch-option ${atMode==='series'?'active':''}"
                  data-at-mode="series"
                  aria-pressed="${atMode==='series'?'true':'false'}">
            Serie
          </button>
        </div>
      </div>

      <div class="argos-last-time-groups">
        ${groups}
      </div>`;

    content.querySelectorAll('[data-at-mode]').forEach(button=>{
      button.addEventListener('click',()=>{
        atRenderSearchMode(screen,button.dataset.atMode);
      });
    });

    content.querySelectorAll('[data-at-service-key]').forEach(card=>{
      const service=atFindServiceFromCardKey(
        list,
        card.dataset.atServiceKey
      );

      if(!service) return;

      const open=()=>{
        atRenderService(screen,service,list);
        screen.scrollIntoView({block:'start'});
      };

      card.addEventListener('click',open);

      card.addEventListener('keydown',e=>{
        if(e.key==='Enter'||e.key===' '){
          e.preventDefault();
          open();
        }
      });
    });
  }

  function atRenderSeriesList(screen,list){
    const content=screen?.querySelector('#argosLastTimeContent');
    if(!content) return;

    const seriesList=atLatestPerSeries(list);

    if(!seriesList.length){
      content.innerHTML=`
        <div class="argos-last-time-empty">
          <div class="argos-last-time-empty-icon">◉</div>
          <div class="argos-last-time-kicker">ÚLTIMA VEZ · SERIES</div>
          <h1>Todavía no hay series</h1>
          <p>
            Cuando registres un servicio con una serie identificada aparecerá aquí.
          </p>
          <button type="button"
                  class="argos-last-time-empty-button"
                  id="argosLastTimeSeriesEmptyBack">
            Volver a trayectos
          </button>
        </div>`;

      content.querySelector('#argosLastTimeSeriesEmptyBack')?.addEventListener(
        'click',
        ()=>{
          atMode='route';
          atRenderList(screen,atLatestPerLine(atServices()));
        }
      );
      return;
    }

    const total=seriesList.length;

    const cards=seriesList.map((service,index)=>{
      const series=atSeriesName(service);
      const branch=atVal(service,['branch','rama']);
      const vehicle=atVal(service,['vehicle','vehiculo']);
      const date=atDateLabel(service);
      const train=atVal(service,['train','tren','number','numero'])||'Sin número';
      const identity=atServiceIdentity(service);

      return `
        <article class="argos-last-time-series-card"
                  data-at-series-key="${atEsc(identity)}"
                  tabindex="0"
                  role="button">
          <div class="argos-last-time-series-index">
            ${String(index+1).padStart(2,'0')}
          </div>

          <div class="argos-last-time-series-main">
            <div class="argos-last-time-series-title">
              Serie ${atEsc(series)}
            </div>

            <div class="argos-last-time-series-sub">
              ${branch?`Rama ${atEsc(branch)}`:'Serie registrada'}
              ${vehicle?` · Vehículo ${atEsc(vehicle)}`:''}
            </div>

            <div class="argos-last-time-series-meta">
              <strong>Último servicio: ${atEsc(date)}</strong>
              <span>Tren ${atEsc(train)}</span>
            </div>
          </div>

          <div class="argos-last-time-series-arrow">›</div>
        </article>`;
    }).join('');

    content.innerHTML=`
      <div class="argos-last-time-hero">
        <div>
          <div class="argos-last-time-kicker">ARGOS · TU ACTIVIDAD</div>
          <h1>Última vez</h1>
          <p>Consulta el último servicio que realizaste de cada serie.</p>
        </div>

        <div class="argos-last-time-total">
          <strong>${total}</strong>
          <span>${total===1?'serie':'series'}</span>
        </div>
      </div>

      <div class="argos-last-time-searchbar">
        <div class="argos-last-time-search-label">
          <span>Buscar por:</span>
        </div>

        <div class="argos-last-time-switch"
             role="group"
             aria-label="Buscar por">
          <button type="button"
                  class="argos-last-time-switch-option ${atMode==='route'?'active':''}"
                  data-at-mode="route"
                  aria-pressed="${atMode==='route'?'true':'false'}">
            Trayecto
          </button>

          <button type="button"
                  class="argos-last-time-switch-option ${atMode==='series'?'active':''}"
                  data-at-mode="series"
                  aria-pressed="${atMode==='series'?'true':'false'}">
            Serie
          </button>
        </div>
      </div>

      <div class="argos-last-time-series-list">
        ${cards}
      </div>`;

    content.querySelectorAll('[data-at-mode]').forEach(button=>{
      button.addEventListener('click',()=>{
        atRenderSearchMode(screen,button.dataset.atMode);
      });
    });

    content.querySelectorAll('[data-at-series-key]').forEach(card=>{
      const service=atFindServiceFromCardKey(seriesList,card.dataset.atSeriesKey);
      if(!service) return;

      const open=()=>{
        atRenderSeriesDetail(screen,service,seriesList);
        window.scrollTo({top:0,behavior:'smooth'});
      };

      card.addEventListener('click',open);

      card.addEventListener('keydown',e=>{
        if(e.key==='Enter'||e.key===' '){
          e.preventDefault();
          open();
        }
      });
    });
  }

  function atRenderSeriesDetail(screen,service,seriesList){
    const content=screen?.querySelector('#argosLastTimeContent');
    if(!content) return;

    const series=atSeriesName(service)||'—';
    const date=atDateLabel(service);
    const train=atVal(service,['train','tren','number','numero'])||'Sin número';
    const product=atProductName(service);
    const {origin,destination}=atServiceTitle(service);

    content.innerHTML=`
      <div class="argos-last-time-series-detail">
        <button type="button"
                class="argos-last-time-back"
                id="argosLastTimeBackToSeries"
                aria-label="Volver a series"
                title="Volver a series">
          ‹
        </button>

        <div class="argos-last-time-series-detail-kicker">
          ÚLTIMA VEZ · SERIE
        </div>

        <div class="argos-last-time-series-summary">
          <div class="argos-last-time-kicker">TU ÚLTIMO SERVICIO</div>
          <h1>Serie ${atEsc(series)}</h1>
          <p>
            La última vez que subiste a la serie ${atEsc(series)}
            fue el ${atEsc(date)}.
          </p>
        </div>

        <div class="argos-last-time-series-service">
          <div class="argos-last-time-series-service-kicker">
            SERVICIO REALIZADO
          </div>

          <div class="argos-last-time-series-service-route">
            <span>${atEsc(origin)}</span>
            <b>→</b>
            <span>${atEsc(destination)}</span>
          </div>

          <div class="argos-last-time-series-service-meta">
            <strong>Tren ${atEsc(train)}</strong>
            <span>${atEsc(product)}</span>
            <span>${atEsc(date)}</span>
          </div>
        </div>

        <button type="button"
                class="argos-last-time-more"
                id="argosLastTimeSeriesMore">
          <span>Ver más información</span>
        </button>
      </div>`;

    content.querySelector('#argosLastTimeBackToSeries')?.addEventListener(
      'click',
      ()=>atRenderSeriesList(screen,atServices())
    );

    content.querySelector('#argosLastTimeSeriesMore')?.addEventListener(
      'click',
      ()=>{
        const found=atFindUnit(service);
        const vehicle=atVal(service,['vehicle','vehiculo'])||
          String(found?.unit?.vehiculoBase||found?.key||'').trim();

        if(typeof openFicha==='function'){
          openFicha(series,vehicle,service);
        }else if(typeof window.openFicha==='function'){
          window.openFicha(series,vehicle,service);
        }else if(typeof toast==='function'){
          toast('No se ha podido abrir la ficha completa');
        }
      }
    );

    window.scrollTo({top:0,behavior:'smooth'});
  }

  function atServiceCard(service){
    const {origin,destination}=atServiceTitle(service);
    const train=atVal(service,['train','tren','number','numero'])||'Sin número';
    const date=atDateLabel(service);
    const id=atServiceIdentity(service);

    return `
      <article class="argos-last-time-service"
                data-at-service-key="${atEsc(id)}"
                tabindex="0"
                role="button">

        <div class="argos-last-time-service-main">
          <div class="argos-last-time-route">
            <span class="argos-last-time-station">
              ${atEsc(origin)}
            </span>
            <span class="argos-last-time-route-arrow">→</span>
            <span class="argos-last-time-station">
              ${atEsc(destination)}
            </span>
          </div>

          <div class="argos-last-time-service-meta">
            <strong>Tren ${atEsc(train)}</strong>
            <span>${atEsc(date)}</span>
          </div>
        </div>

        <div class="argos-last-time-arrow">›</div>
      </article>`;
  }

  function atRenderService(screen,service,list){
    const content=screen?.querySelector('#argosLastTimeContent');
    if(!content) return;

    const found=atFindUnit(service);
    const unit=found?.unit||null;

    const series=atVal(service,['series','serie'])||'—';
    const branch=atVal(service,['branch','rama'])||
      String(unit?.rama||'').trim();

    const vehicle=atVal(service,['vehicle','vehiculo'])||
      String(unit?.vehiculoBase||found?.key||'').trim();

    const officialNumber=String(unit?.numero||'').trim();
    const train=atVal(service,['train','tren','number','numero'])||'Sin número';
    const product=atProductName(service);
    const {origin,destination}=atServiceTitle(service);
    const date=atVal(service,['date','fecha'])||'—';

    const materialTitle=`Serie ${series}${branch?` · Rama ${branch}`:''}`;
    const vehicleLine=[
      vehicle?`Vehículo ${vehicle}`:'',
      officialNumber
    ].filter(Boolean).join(' · ');

    content.innerHTML=`
      <div class="argos-last-time-detail-top">
        <button type="button"
                class="argos-last-time-back"
                id="argosLastTimeBackToList"
                aria-label="Volver a trayectos"
                title="Volver a trayectos">
          ‹
        </button>

        <div class="argos-last-time-detail-kicker">
          DETALLE DEL SERVICIO
        </div>
      </div>

      <div class="argos-last-time-detail-hero">
        <div class="argos-last-time-detail-material">
          MATERIAL RENFE
        </div>

        <h1>${atEsc(materialTitle)}</h1>

        <p>
          ${atEsc(vehicleLine||'Vehículo no especificado')}
        </p>
      </div>

      <div class="argos-last-time-detail-title">
        DATOS DEL SERVICIO
      </div>

      <div class="argos-last-time-detail-grid">
        ${atPreviewField('Nº de tren',train)}
        ${atPreviewField('Producto',product)}
        ${atPreviewField('Origen',origin)}
        ${atPreviewField('Destino',destination)}
        ${atPreviewField('Fecha',date)}
      </div>

      <button type="button"
              class="argos-last-time-more"
              id="argosLastTimeMore">
        <span>Ver más información</span>
      </button>`;

    content.querySelector('#argosLastTimeBackToList')?.addEventListener(
      'click',
      ()=>{
        atMode='route';
        atRenderList(screen,list);
      }
    );

    content.querySelector('#argosLastTimeMore')?.addEventListener(
      'click',
      ()=>{
        if(typeof openFicha==='function'){
          openFicha(series,vehicle,service);
        }else if(typeof window.openFicha==='function'){
          window.openFicha(series,vehicle,service);
        }else if(typeof toast==='function'){
          toast('No se ha podido abrir la ficha completa');
        }
      }
    );

    window.scrollTo({top:0,behavior:'smooth'});
  }

  function atPreviewField(label,value){
    if(value===undefined||value===null||String(value).trim()==='') return '';

    return `
      <div class="argos-last-time-preview-field">
        <span>${atEsc(label)}</span>
        <strong>${atEsc(value)}</strong>
      </div>`;
  }

  function atBindTrigger(){
    const card=document.querySelector('.last-time-card');
    if(!card) return;

    if(card.dataset.argosLastTimeReady==='1') return;

    card.dataset.argosLastTimeReady='1';
    card.id=TRIGGER_ID;

    card.classList.add('argos-last-time-trigger');
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.setAttribute('aria-label','Abrir Última vez');

    card.innerHTML=`
      <span class="home-icon">◷</span>

      <span>
        <h2>Última vez</h2>
        <p>Consulta los trayectos que ya has realizado</p>
      </span>

      <span></span>`;

    card.addEventListener('click',e=>{
      e.preventDefault();
      e.stopImmediatePropagation();
      atOpen();
    },true);

    card.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){
        e.preventDefault();
        e.stopImmediatePropagation();
        atOpen();
      }
    },true);
  }

  const style=document.createElement('style');
  style.id='argos-last-time-menu-style';

  style.textContent=`
    /* ============================================================
       ARGOS · ÚLTIMA VEZ · PANTALLA PROPIA
       No es modal, no flota y no tapa otras pantallas.
       ============================================================ */

    .argos-last-time-screen{
      min-height:100%;
      background:var(--page);
      padding:0!important;
    }

    .argos-last-time-page{
      width:min(1180px,100%);
      margin:0 auto;
      padding:18px 20px 42px;
      box-sizing:border-box;
    }

    .argos-last-time-header{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      margin-bottom:18px;
    }

    .argos-last-time-header-brand{
      color:var(--renfe);
      font-size:11px;
      font-weight:950;
      letter-spacing:.12em;
      text-transform:uppercase;
    }

    .argos-last-time-header-brand small{
      color:var(--muted);
      font-size:10px;
      font-weight:850;
      letter-spacing:.08em;
    }

    .argos-last-time-hero{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:22px;
      padding:28px;
      border-radius:26px;
      background:
        linear-gradient(135deg,var(--soft),var(--card) 70%);
      border:1px solid var(--line);
      box-shadow:0 10px 35px rgba(30,20,30,.06);
      margin-bottom:14px;
    }

    .argos-last-time-kicker,
    .argos-last-time-product-kicker,
    .argos-last-time-detail-kicker{
      color:var(--renfe);
      font-size:10px;
      font-weight:950;
      letter-spacing:.13em;
      text-transform:uppercase;
    }

    .argos-last-time-hero h1{
      margin:5px 0 5px;
      font-size:clamp(34px,5vw,52px);
      line-height:1;
      letter-spacing:-.035em;
    }

    .argos-last-time-hero p{
      margin:0;
      color:var(--muted);
      font-size:15px;
      line-height:1.4;
    }

    .argos-last-time-total{
      min-width:94px;
      height:88px;
      padding:10px 14px;
      border-radius:22px;
      background:var(--card);
      border:1px solid var(--line);
      color:var(--renfe);
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      box-shadow:0 7px 22px rgba(30,20,30,.06);
      flex:0 0 auto;
    }

    .argos-last-time-total strong{
      font-size:32px;
      line-height:1;
    }

    .argos-last-time-total span{
      margin-top:5px;
      font-size:10px;
      font-weight:900;
      letter-spacing:.04em;
    }

    .argos-last-time-searchbar{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      padding:9px;
      margin-bottom:24px;
      border-radius:18px;
      background:var(--card);
      border:1px solid var(--line);
      box-shadow:0 4px 16px rgba(30,20,30,.045);
    }

    .argos-last-time-search-label{
      padding:0 8px;
      color:var(--muted);
      font-size:13px;
      font-weight:850;
    }

    .argos-last-time-switch{
      display:grid;
      grid-template-columns:1fr 1fr;
      width:min(330px,100%);
      min-height:48px;
      padding:4px;
      border-radius:14px;
      background:var(--soft);
      border:1px solid var(--line);
    }

    .argos-last-time-switch-option{
      min-height:40px;
      padding:0 17px;
      border:0;
      border-radius:11px;
      background:transparent;
      color:var(--muted);
      font-size:13px;
      font-weight:950;
      cursor:pointer;
      transition:
        background .16s ease,
        color .16s ease,
        box-shadow .16s ease,
        transform .12s ease;
    }

    .argos-last-time-switch-option.active{
      background:var(--card);
      color:var(--renfe);
      box-shadow:0 4px 13px rgba(30,20,30,.10);
    }

    .argos-last-time-switch-option:active{
      transform:scale(.98);
    }

    .argos-last-time-switch-option:focus-visible{
      outline:3px solid rgba(138,0,92,.14);
      outline-offset:1px;
    }

    .argos-last-time-groups{
      display:flex;
      flex-direction:column;
      gap:26px;
    }

    .argos-last-time-product{
      min-width:0;
    }

    .argos-last-time-product-head{
      display:flex;
      align-items:flex-end;
      justify-content:space-between;
      gap:12px;
      padding:0 3px 9px;
      border-bottom:2px solid var(--line);
    }

    .argos-last-time-product-head h2{
      margin:4px 0 0;
      font-size:24px;
      letter-spacing:-.02em;
    }

    .argos-last-time-count{
      padding:7px 10px;
      border-radius:999px;
      background:var(--soft);
      color:var(--renfe);
      font-size:10px;
      font-weight:950;
      white-space:nowrap;
    }

    .argos-last-time-services{
      display:flex;
      flex-direction:column;
      gap:9px;
      margin-top:10px;
    }

    .argos-last-time-service{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      padding:17px 16px;
      border:1px solid var(--line);
      border-radius:18px;
      background:var(--card);
      box-shadow:0 4px 16px rgba(30,20,30,.045);
      cursor:pointer;
      transition:
        transform .14s ease,
        box-shadow .14s ease,
        border-color .14s ease;
      outline:none;
    }

    .argos-last-time-service:hover{
      transform:translateY(-2px);
      border-color:rgba(138,0,92,.28);
      box-shadow:0 12px 28px rgba(30,20,30,.10);
    }

    .argos-last-time-service:focus-visible{
      border-color:var(--renfe);
      box-shadow:0 0 0 3px rgba(138,0,92,.12);
    }

    .argos-last-time-service:active{
      transform:scale(.992);
    }

    .argos-last-time-service-main{
      min-width:0;
      flex:1;
    }

    .argos-last-time-route{
      display:flex;
      align-items:baseline;
      gap:7px;
      min-width:0;
      font-size:17px;
      font-weight:900;
      line-height:1.28;
    }

    .argos-last-time-station{
      min-width:0;
      overflow-wrap:anywhere;
    }

    .argos-last-time-route-arrow{
      color:var(--renfe);
      font-size:20px;
      font-weight:500;
      flex:0 0 auto;
    }

    .argos-last-time-service-meta{
      display:flex;
      flex-wrap:wrap;
      gap:7px 13px;
      margin-top:8px;
      color:var(--muted);
      font-size:11px;
    }

    .argos-last-time-service-meta strong{
      color:var(--renfe);
    }

    .argos-last-time-arrow{
      width:38px;
      height:38px;
      border-radius:12px;
      background:var(--soft);
      color:var(--renfe);
      font-size:29px;
      line-height:1;
      display:flex;
      align-items:center;
      justify-content:center;
      flex:0 0 auto;
    }

    .argos-last-time-series-list{
      display:flex;
      flex-direction:column;
      gap:10px;
    }

    .argos-last-time-series-card{
      display:flex;
      align-items:center;
      gap:14px;
      padding:16px;
      border:1px solid var(--line);
      border-radius:18px;
      background:var(--card);
      box-shadow:0 4px 16px rgba(30,20,30,.045);
      cursor:pointer;
      outline:none;
      transition:
        transform .14s ease,
        box-shadow .14s ease,
        border-color .14s ease;
    }

    .argos-last-time-series-card:hover{
      transform:translateY(-2px);
      border-color:rgba(138,0,92,.28);
      box-shadow:0 12px 28px rgba(30,20,30,.10);
    }

    .argos-last-time-series-card:focus-visible{
      border-color:var(--renfe);
      box-shadow:0 0 0 3px rgba(138,0,92,.12);
    }

    .argos-last-time-series-card:active{
      transform:scale(.992);
    }

    .argos-last-time-series-index{
      width:46px;
      height:46px;
      border-radius:14px;
      background:var(--soft);
      color:var(--renfe);
      display:flex;
      align-items:center;
      justify-content:center;
      flex:0 0 auto;
      font-size:11px;
      font-weight:950;
    }

    .argos-last-time-series-main{
      min-width:0;
      flex:1;
    }

    .argos-last-time-series-title{
      font-size:19px;
      font-weight:950;
      letter-spacing:-.02em;
    }

    .argos-last-time-series-sub{
      margin-top:3px;
      color:var(--muted);
      font-size:11px;
      font-weight:750;
      overflow-wrap:anywhere;
    }

    .argos-last-time-series-meta{
      display:flex;
      flex-wrap:wrap;
      gap:6px 13px;
      margin-top:8px;
      color:var(--muted);
      font-size:11px;
    }

    .argos-last-time-series-meta strong{
      color:var(--renfe);
    }

    .argos-last-time-series-arrow{
      width:38px;
      height:38px;
      border-radius:12px;
      background:var(--soft);
      color:var(--renfe);
      font-size:29px;
      line-height:1;
      display:flex;
      align-items:center;
      justify-content:center;
      flex:0 0 auto;
    }

    .argos-last-time-series-detail{
      width:100%;
    }

    .argos-last-time-series-detail-kicker{
      margin:16px 0 9px 2px;
      color:var(--renfe);
      font-size:10px;
      font-weight:950;
      letter-spacing:.13em;
      text-transform:uppercase;
    }

    .argos-last-time-series-summary{
      padding:28px;
      border-radius:25px;
      background:linear-gradient(135deg,var(--soft),var(--card));
      border:1px solid var(--line);
      box-shadow:0 9px 30px rgba(30,20,30,.06);
      margin-bottom:14px;
    }

    .argos-last-time-series-summary h1{
      margin:7px 0 8px;
      font-size:clamp(32px,5vw,48px);
      line-height:1.04;
      letter-spacing:-.035em;
    }

    .argos-last-time-series-summary p{
      margin:0;
      color:var(--muted);
      font-size:15px;
      line-height:1.45;
    }

    .argos-last-time-series-service{
      padding:22px;
      border-radius:20px;
      background:var(--card);
      border:1px solid var(--line);
      box-shadow:0 4px 16px rgba(30,20,30,.045);
    }

    .argos-last-time-series-service-kicker{
      color:var(--renfe);
      font-size:10px;
      font-weight:950;
      letter-spacing:.12em;
    }

    .argos-last-time-series-service-route{
      display:flex;
      align-items:baseline;
      gap:8px;
      margin-top:9px;
      font-size:18px;
      font-weight:950;
      line-height:1.3;
    }

    .argos-last-time-series-service-route span{
      min-width:0;
      overflow-wrap:anywhere;
    }

    .argos-last-time-series-service-route b{
      color:var(--renfe);
      font-size:21px;
      font-weight:500;
      flex:0 0 auto;
    }

    .argos-last-time-series-service-meta{
      display:flex;
      flex-wrap:wrap;
      gap:7px 13px;
      margin-top:10px;
      color:var(--muted);
      font-size:11px;
    }

    .argos-last-time-series-service-meta strong{
      color:var(--renfe);
    }

    .argos-last-time-empty{
      min-height:55vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      text-align:center;
      padding:50px 20px;
    }

    .argos-last-time-empty-icon{
      width:82px;
      height:82px;
      border-radius:25px;
      background:var(--soft);
      color:var(--renfe);
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:43px;
      margin-bottom:17px;
    }

    .argos-last-time-empty h1{
      margin:4px 0 6px;
      font-size:30px;
    }

    .argos-last-time-empty p{
      max-width:480px;
      margin:0 auto 20px;
      color:var(--muted);
      line-height:1.5;
    }

    .argos-last-time-empty-button{
      border:0;
      border-radius:14px;
      min-height:48px;
      padding:0 19px;
      background:var(--renfe);
      color:#fff;
      font-weight:900;
      cursor:pointer;
    }

    .argos-last-time-detail-top{
      margin-bottom:12px;
    }

    .argos-last-time-back{
      width:48px;
      height:48px;
      padding:0;
      border:1px solid var(--line);
      border-radius:14px;
      background:var(--card);
      color:var(--renfe);
      font-size:31px;
      font-weight:300;
      line-height:1;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      box-shadow:0 5px 18px rgba(30,20,30,.07);
      transition:transform .14s ease, box-shadow .14s ease;
    }

    .argos-last-time-back:hover{
      transform:translateY(-1px);
      box-shadow:0 9px 24px rgba(30,20,30,.11);
    }

    .argos-last-time-back:active{
      transform:scale(.96);
    }

    .argos-last-time-back:focus-visible{
      outline:3px solid rgba(138,0,92,.14);
      outline-offset:2px;
    }

    .argos-last-time-detail-kicker{
      margin:16px 0 9px 2px;
    }

    .argos-last-time-detail-hero{
      padding:28px;
      border-radius:25px;
      background:
        linear-gradient(135deg,var(--soft),var(--card));
      border:1px solid var(--line);
      box-shadow:0 9px 30px rgba(30,20,30,.06);
      margin-bottom:24px;
    }

    .argos-last-time-detail-material{
      color:var(--renfe);
      font-size:12px;
      font-weight:950;
      letter-spacing:.1em;
    }

    .argos-last-time-detail-hero h1{
      margin:7px 0 5px;
      font-size:clamp(30px,5vw,48px);
      line-height:1.04;
      letter-spacing:-.035em;
    }

    .argos-last-time-detail-hero p{
      margin:0;
      color:var(--muted);
      font-size:17px;
      font-weight:800;
    }

    .argos-last-time-detail-title{
      color:var(--renfe);
      font-size:12px;
      font-weight:950;
      letter-spacing:.09em;
      margin:0 0 10px 2px;
    }

    .argos-last-time-detail-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:11px;
    }

    .argos-last-time-preview-field{
      min-width:0;
      padding:16px;
      border:1px solid var(--line);
      border-radius:16px;
      background:var(--card);
      display:flex;
      flex-direction:column;
      gap:6px;
      box-shadow:0 3px 12px rgba(30,20,30,.035);
    }

    .argos-last-time-preview-field span{
      color:var(--muted);
      font-size:12px;
    }

    .argos-last-time-preview-field strong{
      font-size:16px;
      line-height:1.3;
      overflow-wrap:anywhere;
    }

    .argos-last-time-more{
      width:100%;
      min-height:58px;
      margin-top:18px;
      border:0;
      border-radius:16px;
      background:var(--renfe);
      color:#fff;
      font-size:15px;
      font-weight:950;
      box-shadow:0 10px 24px rgba(138,0,92,.20);
      display:flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      cursor:pointer;
    }

    .argos-last-time-more:active{
      transform:scale(.99);
    }

    .argos-last-time-trigger{
      position:relative!important;
      cursor:pointer!important;
      grid-template-columns:48px 1fr 22px!important;
      transition:
        transform .16s ease,
        box-shadow .16s ease,
        border-color .16s ease!important;
    }

    .argos-last-time-trigger:hover{
      transform:translateY(-1px)!important;
      border-color:rgba(138,0,92,.25)!important;
      box-shadow:0 12px 30px rgba(30,20,30,.11)!important;
    }

    .argos-last-time-trigger:active{
      transform:scale(.985)!important;
    }

    @media(min-width:601px){
      .argos-last-time-trigger{
        grid-template-columns:62px 1fr 25px!important;
      }

      .argos-last-time-trigger p{
        font-size:14px;
      }
    }

    @media(max-width:760px){
      .argos-last-time-page{
        padding:13px 13px 30px;
      }

      .argos-last-time-hero{
        padding:21px 17px;
        border-radius:21px;
      }

      .argos-last-time-hero h1{
        font-size:35px;
      }

      .argos-last-time-total{
        min-width:74px;
        height:72px;
        border-radius:18px;
      }

      .argos-last-time-total strong{
        font-size:27px;
      }

      .argos-last-time-route{
        font-size:15px;
      }

      .argos-last-time-service{
        padding:15px 13px;
      }

      .argos-last-time-detail-hero{
        padding:21px 17px;
        border-radius:21px;
      }

      .argos-last-time-detail-hero h1{
        font-size:29px;
      }
    }

    @media(max-width:600px){
      .argos-last-time-header{
        margin-bottom:12px;
      }

      .argos-last-time-header-brand{
        font-size:10px;
      }

      .argos-last-time-header-brand small{
        font-size:9px;
      }

      .argos-last-time-searchbar{
        align-items:stretch;
        flex-direction:column;
        gap:8px;
        padding:8px;
      }

      .argos-last-time-search-label{
        padding:3px 6px 0;
      }

      .argos-last-time-switch{
        width:100%;
      }

      .argos-last-time-series-card{
        padding:14px 13px;
      }

      .argos-last-time-series-title{
        font-size:17px;
      }

      .argos-last-time-series-detail-kicker{
        margin-top:13px;
      }

      .argos-last-time-series-summary{
        padding:21px 17px;
        border-radius:21px;
      }

      .argos-last-time-series-summary h1{
        font-size:29px;
      }

      .argos-last-time-series-service{
        padding:17px;
      }

      .argos-last-time-detail-grid{
        grid-template-columns:1fr;
      }

      .argos-last-time-service-meta{
        gap:6px 10px;
      }

      .argos-last-time-route{
        display:block;
      }

      .argos-last-time-route-arrow{
        display:inline-block;
        padding:0 3px;
      }
    }

    body.dark .argos-last-time-hero,
    body.dark .argos-last-time-total,
    body.dark .argos-last-time-searchbar,
    body.dark .argos-last-time-series-card,
    body.dark .argos-last-time-series-summary,
    body.dark .argos-last-time-series-service,
    body.dark .argos-last-time-service,
    body.dark .argos-last-time-preview-field,
    body.dark .argos-last-time-detail-hero{
      box-shadow:0 10px 30px rgba(0,0,0,.25);
    }
  `;

  if(!document.getElementById(style.id)){
    document.head.appendChild(style);
  }

  function init(){
    atEnsureScreen();
    atBindTrigger();
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  }else{
    init();
  }

  const originalRefresh=window.refreshHome;

  if(typeof originalRefresh==='function'&&!window.__argosLastTimeRefreshWrapped){
    window.__argosLastTimeRefreshWrapped=true;

    window.refreshHome=function(){
      const result=originalRefresh.apply(this,arguments);
      setTimeout(atBindTrigger,0);
      return result;
    };
  }

  window.argosOpenLastTime=atOpen;
  window.argosLatestPerLine=atLatestPerLine;
  window.argosLineKey=atLineKey;
  window.argosCloseLastTime=()=>{
    if(typeof showScreen==='function') showScreen('menu');
  };
})();
