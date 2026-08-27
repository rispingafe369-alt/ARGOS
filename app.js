const KEY="argos_services",THEME_KEY="argos_theme";
const stations=[{"code":"01003","name":"ARAHAL","aliases":["SEVILLA"]},{"code":"01005","name":"MARCHENA","aliases":["SEVILLA"]},{"code":"01007","name":"OSUNA","aliases":["SEVILLA"]},{"code":"01009","name":"PEDRERA","aliases":["SEVILLA"]},{"code":"02002","name":"PUENTE GENIL-HERRERA","aliases":["PUENTE GENIL","CÓRDOBA"]},{"code":"02003","name":"ANTEQUERA-SANTA ANA","aliases":["ANTEQUERA","MÁLAGA"]},{"code":"02030","name":"ANTEQUERA AV","aliases":["ANTEQUERA","MÁLAGA"]},{"code":"03001","name":"MENGÍBAR-ARTICHUELA","aliases":["MENGÍBAR","JAÉN"]},{"code":"03100","name":"JAÉN","aliases":[]},{"code":"03208","name":"CUENCA-FERNANDO ZÓBEL","aliases":["CUENCA"]},{"code":"03213","name":"REQUENA-UTIEL","aliases":["REQUENA","VALENCIA/VALÈNCIA"]},{"code":"03216","name":"VALÈNCIA-JOAQUÍN SOROLLA","aliases":["VALENCIA","VALENCIA/VALÈNCIA"]},{"code":"03309","name":"VILLENA ALTA VELOCIDAD","aliases":["VILLENA","ALICANTE/ALACANT"]},{"code":"03410","name":"ELCHE/ELX AV","aliases":["ELCHE/ELX","ALICANTE/ALACANT"]},{"code":"03412","name":"CALLOSA DE SEGURA-COX","aliases":["CALLOSA DE SEGURA","ALICANTE/ALACANT"]},{"code":"04007","name":"GUADALAJARA-YEBES","aliases":["YEBES","GUADALAJARA"]},{"code":"04040","name":"ZARAGOZA DELICIAS","aliases":["ZARAGOZA"]},{"code":"04104","name":"CAMP DE TARRAGONA","aliases":["TARRAGONA"]},{"code":"04307","name":"FIGUERES-VILAFANT","aliases":["VILAFANT","GIRONA"]},{"code":"05000","name":"GRANADA","aliases":[]},{"code":"05012","name":"LOJA","aliases":["GRANADA"]},{"code":"05102","name":"SAN XOÁN","aliases":["FERROL","CORUÑA, A"]},{"code":"05103","name":"SANTA ICÍA","aliases":["NARÓN","CORUÑA, A"]},{"code":"05104","name":"VIRXE DO MAR","aliases":["NARÓN","CORUÑA, A"]},{"code":"05105","name":"PIÑEIROS","aliases":["NARÓN","CORUÑA, A"]},{"code":"05106","name":"O PONTO","aliases":["NARÓN","CORUÑA, A"]},{"code":"05107","name":"XUVIA","aliases":["NARÓN","CORUÑA, A"]},{"code":"05108","name":"O ALTO DO CASTIÑEIRO","aliases":["NARÓN","CORUÑA, A"]},{"code":"05109","name":"FERRERÍAS","aliases":["NARÓN","CORUÑA, A"]},{"code":"05111","name":"SEDES","aliases":["NARÓN","CORUÑA, A"]},{"code":"05113","name":"PEDROSO DE NARÓN","aliases":["NARÓN","CORUÑA, A"]},{"code":"05115","name":"SAN SADURNIÑO","aliases":["CORUÑA, A"]},{"code":"05117","name":"LAMAS","aliases":["SAN SADURNIÑO","CORUÑA, A"]},{"code":"05119","name":"APALLA","aliases":["SAN SADURNIÑO","CORUÑA, A"]},{"code":"05121","name":"MOECHE","aliases":["CORUÑA, A"]},{"code":"05123","name":"LABACENGOS","aliases":["MOECHE","CORUÑA, A"]},{"code":"05125","name":"ENTRAMBARRÍAS","aliases":["MOECHE","CORUÑA, A"]},{"code":"05127","name":"CERDIDO","aliases":["CORUÑA, A"]},{"code":"05129","name":"A CUQUEIRA","aliases":["CERDIDO","CORUÑA, A"]},{"code":"05131","name":"SANTA MARÍA DE MERA","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05133","name":"PONTE MERA","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05135","name":"SAN CLODIO","aliases":["RIBAS DE SIL","CORUÑA, A"]},{"code":"05137","name":"SENRA","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05139","name":"ORTIGUEIRA","aliases":["CORUÑA, A"]},{"code":"05141","name":"ESPASANTE","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05143","name":"LOIBA","aliases":["ORTIGUEIRA","CORUÑA, A"]},{"code":"05145","name":"O BARQUEIRO","aliases":["MAÑÓN","CORUÑA, A"]},{"code":"05147","name":"O VICEDO","aliases":["VICEDO (O)","LUGO"]},{"code":"05149","name":"MOSENDE","aliases":["VICEDO (O)","LUGO"]},{"code":"05151","name":"FOLGUEIRO","aliases":["VICEDO (O)","LUGO"]},{"code":"05153","name":"COVAS DE VIVEIRO","aliases":["VIVEIRO","LUGO"]},{"code":"05155","name":"VIVEIRO","aliases":["LUGO"]},{"code":"05156","name":"VIVEIRO APEADERO","aliases":["VIVEIRO","LUGO"]},{"code":"05157","name":"XUANCES","aliases":["XOVE","LUGO"]},{"code":"05159","name":"XOVE POBO","aliases":["XOVE","LUGO"]},{"code":"05161","name":"XOVE","aliases":["LUGO"]},{"code":"05163","name":"LAGO","aliases":["XOVE","LUGO"]},{"code":"05165","name":"BIDUEIROS","aliases":["CERVO","LUGO"]},{"code":"05167","name":"SAN CIBRAO","aliases":["CERVO","LUGO"]},{"code":"05169","name":"MADEIRO","aliases":["CERVO","LUGO"]},{"code":"05171","name":"BURELA","aliases":["LUGO"]},{"code":"05173","name":"CANGAS DE FOZ","aliases":["FOZ","LUGO"]},{"code":"05175","name":"NOIS","aliases":["FOZ","LUGO"]},{"code":"05177","name":"FAZOURO","aliases":["FOZ","LUGO"]},{"code":"05179","name":"MARZÁN","aliases":["FOZ","LUGO"]},{"code":"05181","name":"FOZ","aliases":["LUGO"]},{"code":"05183","name":"BARREIROS","aliases":["LUGO"]},{"code":"05185","name":"REINANTE","aliases":["BARREIROS","LUGO"]},{"code":"05187","name":"ESTEIRO","aliases":["RIBADEO","LUGO"]},{"code":"05189","name":"OS CASTROS","aliases":["RIBADEO","LUGO"]},{"code":"05191","name":"RINLO","aliases":["RIBADEO","LUGO"]},{"code":"05193","name":"RIBADEO","aliases":["LUGO"]},{"code":"05197","name":"VEGADEO PUEBLO","aliases":["VEGADEO","ASTURIAS"]},{"code":"05199","name":"VILAVEDELLE","aliases":["CASTROPOL","ASTURIAS"]},{"code":"05239","name":"SANTIANES","aliases":["PRAVIA","ASTURIAS"]},{"code":"05241","name":"LOS CABOS","aliases":["PRAVIA","ASTURIAS"]},{"code":"05243","name":"MUROS DEL NALÓN","aliases":["MUROS DE NALÓN","ASTURIAS"]},{"code":"05244","name":"EL PITO PIÑERA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05245","name":"CUDILLERO","aliases":["ASTURIAS"]},{"code":"05247","name":"VILLADEMAR","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05249","name":"LA MAGDALENA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05251","name":"SAN MARTÍN DE LUIÑA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05253","name":"SAN COSME","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05255","name":"SOTO DE LUIÑA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05257","name":"VALDREDO","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05259","name":"NOVELLANA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05261","name":"SANTA MARINA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05263","name":"BALLOTA","aliases":["CUDILLERO","ASTURIAS"]},{"code":"05265","name":"TABLIZO","aliases":["VALDÉS","ASTURIAS"]},{"code":"05267","name":"CADAVEDO","aliases":["VALDÉS","ASTURIAS"]},{"code":"05269","name":"SAN CRISTÓBAL","aliases":["VALDÉS","ASTURIAS"]},{"code":"05271","name":"CANERO","aliases":["VALDÉS","ASTURIAS"]},{"code":"05273","name":"BARCIA","aliases":["VALDÉS","ASTURIAS"]},{"code":"05275","name":"LUARCA","aliases":["VALDÉS","ASTURIAS"]},{"code":"05277","name":"OTUR","aliases":["VALDÉS","ASTURIAS"]},{"code":"05279","name":"VILLAPEDRE","aliases":["NAVIA","ASTURIAS"]},{"code":"05281","name":"PIÑERA-VILLAORIL","aliases":["NAVIA","ASTURIAS"]},{"code":"05283","name":"NAVIA","aliases":["ASTURIAS"]},{"code":"05285","name":"MEDAL","aliases":["COAÑA","ASTURIAS"]},{"code":"05287","name":"LOZA","aliases":["COAÑA","ASTURIAS"]},{"code":"05289","name":"CARTAVIO","aliases":["COAÑA","ASTURIAS"]},{"code":"05291","name":"LA CARIDAD","aliases":["FRANCO (EL)","ASTURIAS"]},{"code":"05293","name":"TAPIA","aliases":["TAPIA DE CASARIEGO","ASTURIAS"]},{"code":"05295","name":"TOL","aliases":["CASTROPOL","ASTURIAS"]},{"code":"05297","name":"LAS CAMPAS DE CASTROPOL","aliases":["CASTROPOL","ASTURIAS"]},{"code":"05299","name":"CASTROPOL","aliases":["ASTURIAS"]},{"code":"05300","name":"VALLOBÍN","aliases":["OVIEDO","ASTURIAS"]},{"code":"05301","name":"ARGAÑOSA-LAVAPIÉS","aliases":["OVIEDO","ASTURIAS"]},{"code":"05302","name":"LAS CAMPAS","aliases":["OVIEDO","ASTURIAS"]},{"code":"05303","name":"LAS MAZAS","aliases":["OVIEDO","ASTURIAS"]},{"code":"05304","name":"SAN CLAUDIO","aliases":["OVIEDO","ASTURIAS"]},{"code":"05306","name":"SAN PEDRO DE NORA","aliases":["OVIEDO","ASTURIAS"]},{"code":"05308","name":"SOTO UDRIÓN","aliases":["OVIEDO","ASTURIAS"]},{"code":"05311","name":"TRUBIA","aliases":["OVIEDO","ASTURIAS"]},{"code":"05313","name":"SANTA MARÍA DE GRADO","aliases":["GRADO","ASTURIAS"]},{"code":"05315","name":"VEGA DE ANZO","aliases":["GRADO","ASTURIAS"]},{"code":"05316","name":"PEÑAFLOR DE GRADO","aliases":["GRADO","ASTURIAS"]},{"code":"05317","name":"GRADO","aliases":["ASTURIAS"]},{"code":"05319","name":"SANDICHE","aliases":["CANDAMO","ASTURIAS"]},{"code":"05320","name":"ACES","aliases":["CANDAMO","ASTURIAS"]},{"code":"05321","name":"SAN ROMÁN","aliases":["CANDAMO","ASTURIAS"]},{"code":"05323","name":"BEIFAR","aliases":["PRAVIA","ASTURIAS"]},{"code":"05325","name":"PRAVIA","aliases":["ASTURIAS"]},{"code":"05451","name":"BILBAO LA CONCORDIA","aliases":["BILBAO","BIZKAIA"]},{"code":"05455","name":"BASURTO HOSPITAL","aliases":["BILBAO","BIZKAIA"]},{"code":"05457","name":"ZORROTZA ZORROZGOITI","aliases":["BILBAO","BIZKAIA"]},{"code":"05459","name":"SANTA ÁGUEDA","aliases":["BILBAO","BIZKAIA"]},{"code":"05460","name":"KASTREXANA","aliases":["BILBAO","BIZKAIA"]},{"code":"05461","name":"IRAUREGUI","aliases":["ALONSOTEGI","BIZKAIA"]},{"code":"05463","name":"ZARAMILLO","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05465","name":"LA QUADRA","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05467","name":"SODUPE","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05469","name":"ARTXUBE","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05470","name":"LAMBARRI","aliases":["GÜEÑES","BIZKAIA"]},{"code":"05471","name":"GÜEÑES","aliases":["BIZKAIA"]},{"code":"05473","name":"ARANGUREN","aliases":["ZALLA","BIZKAIA"]},{"code":"05474","name":"ARANGUREN-APEADERO","aliases":["ZALLA","BIZKAIA"]},{"code":"05475","name":"ZALLA","aliases":["BIZKAIA"]},{"code":"05477","name":"COLEGIO","aliases":["ZALLA","BIZKAIA"]},{"code":"05479","name":"IBARRA","aliases":["ZALLA","BIZKAIA"]},{"code":"05481","name":"LA HERRERA","aliases":["ZALLA","BIZKAIA"]},{"code":"05483","name":"BALMASEDA","aliases":["BIZKAIA"]},{"code":"05484","name":"MIMETIZ","aliases":["ZALLA","BIZKAIA"]},{"code":"05487","name":"TRASLAVIÑA","aliases":["ARTZENTALES","BIZKAIA"]},{"code":"05489","name":"ARTZENTALES","aliases":["ERRIBERAGOITIA/RIBERA ALTA","BIZKAIA"]},{"code":"05493","name":"VILLAVERDE DE TRUCIOS","aliases":["TRUCIOS-TURTZIOZ","BIZKAIA"]},{"code":"05497","name":"KARRANTZA","aliases":["KARRANTZA HARANA/VALLE DE CARRANZA","BIZKAIA"]},{"code":"05504","name":"PARQUE PRINCIPADO","aliases":["OVIEDO","ASTURIAS"]},{"code":"05505","name":"COLLOTO","aliases":["SIERO","ASTURIAS"]},{"code":"05507","name":"MERES","aliases":["SIERO","ASTURIAS"]},{"code":"05508","name":"FONCIELLO","aliases":["SIERO","ASTURIAS"]},{"code":"05509","name":"EL BERRÓN","aliases":["SIERO","ASTURIAS"]},{"code":"05511","name":"LA CARRERA DE SIERO","aliases":["SIERO","ASTURIAS"]},{"code":"05513","name":"POLA DE SIERO","aliases":["SIERO","ASTURIAS"]},{"code":"05515","name":"LOS CORROS","aliases":["SIERO","ASTURIAS"]},{"code":"05517","name":"LIERES","aliases":["SIERO","ASTURIAS"]},{"code":"05521","name":"EL REMEDIO","aliases":["NAVA","ASTURIAS"]},{"code":"05522","name":"LLAMES","aliases":["NAVA","ASTURIAS"]},{"code":"05523","name":"NAVA","aliases":["ASTURIAS"]},{"code":"05525","name":"FUENTE SANTA DE NAVA","aliases":["NAVA","ASTURIAS"]},{"code":"05527","name":"CECEDA","aliases":["NAVA","ASTURIAS"]},{"code":"05529","name":"CARANCOS","aliases":["NAVA","ASTURIAS"]},{"code":"05531","name":"PINTUELES","aliases":["PILOÑA","ASTURIAS"]},{"code":"05533","name":"INFIESTO","aliases":["PILOÑA","ASTURIAS"]},{"code":"05534","name":"INFIESTO APEADERO","aliases":["PILOÑA","ASTURIAS"]},{"code":"05535","name":"VILLAMAYOR","aliases":["PILOÑA","ASTURIAS"]},{"code":"05537","name":"SEBARES","aliases":["PILOÑA","ASTURIAS"]},{"code":"05539","name":"SOTO DE DUEÑAS","aliases":["PARRES","ASTURIAS"]},{"code":"05541","name":"OZANES","aliases":["PARRES","ASTURIAS"]},{"code":"05542","name":"POLICLÍNICO","aliases":["PARRES","ASTURIAS"]},{"code":"05543","name":"ARRIONDAS","aliases":["PARRES","ASTURIAS"]},{"code":"05545","name":"FUENTES","aliases":["PARRES","ASTURIAS"]},{"code":"05547","name":"TORAÑO","aliases":["PARRES","ASTURIAS"]},{"code":"05549","name":"CUEVAS","aliases":["RIBADESELLA","ASTURIAS"]},{"code":"05551","name":"LLOVIO","aliases":["RIBADESELLA","ASTURIAS"]},{"code":"05553","name":"RIBADESELLA","aliases":["ASTURIAS"]},{"code":"05555","name":"CAMANGO","aliases":["RIBADESELLA","ASTURIAS"]},{"code":"05557","name":"BELMONTE DE PRÍA","aliases":["LLANES","ASTURIAS"]},{"code":"05559","name":"NUEVA","aliases":["LLANES","ASTURIAS"]},{"code":"05561","name":"VILLAHORMES","aliases":["LLANES","ASTURIAS"]},{"code":"05563","name":"POSADA","aliases":["LLANES","ASTURIAS"]},{"code":"05565","name":"BALMORI","aliases":["LLANES","ASTURIAS"]},{"code":"05567","name":"CELORIO","aliases":["LLANES","ASTURIAS"]},{"code":"05569","name":"POO","aliases":["LLANES","ASTURIAS"]},{"code":"05571","name":"LLANES","aliases":["ASTURIAS"]},{"code":"05573","name":"SAN ROQUE DEL ACEBAL","aliases":["LLANES","ASTURIAS"]},{"code":"05575","name":"VIDIAGO","aliases":["LLANES","ASTURIAS"]},{"code":"05577","name":"PENDUELES","aliases":["LLANES","ASTURIAS"]},{"code":"05579","name":"COLOMBRES","aliases":["RIBADEDEVA","ASTURIAS"]},{"code":"05602","name":"VALDECILLA LA MARGA","aliases":["SANTANDER","CANTABRIA"]},{"code":"05621","name":"TORRELAVEGA-CENTRO","aliases":["TORRELAVEGA","CANTABRIA"]},{"code":"05623","name":"PUENTE SAN MIGUEL","aliases":["REOCÍN","CANTABRIA"]},{"code":"05637","name":"CABEZÓN DE LA SAL","aliases":["CANTABRIA"]},{"code":"05641","name":"TRECEÑO","aliases":["VALDÁLIGA","CANTABRIA"]},{"code":"05643","name":"ROIZ","aliases":["VALDÁLIGA","CANTABRIA"]},{"code":"05644","name":"EL BARCENAL","aliases":["SAN VICENTE DE LA BARQUERA","CANTABRIA"]},{"code":"05645","name":"SAN VICENTE DE LA BARQUERA","aliases":["CANTABRIA"]},{"code":"05647","name":"PESUÉS","aliases":["VAL DE SAN VICENTE","CANTABRIA"]},{"code":"05649","name":"UNQUERA","aliases":["VAL DE SAN VICENTE","CANTABRIA"]},{"code":"05651","name":"NUEVA MONTAÑA","aliases":["SANTANDER","CANTABRIA"]},{"code":"05652","name":"VALLE REAL","aliases":["SANTANDER","CANTABRIA"]},{"code":"05655","name":"MALIAÑO VIDRIERA","aliases":["CAMARGO","CANTABRIA"]},{"code":"05657","name":"ASTILLERO","aliases":["ASTILLERO (EL)","CANTABRIA"]},{"code":"05661","name":"HERAS","aliases":["MEDIO CUDEYO","CANTABRIA"]},{"code":"05663","name":"OREJO","aliases":["MARINA DE CUDEYO","CANTABRIA"]},{"code":"05672","name":"PUENTE AGÜERO","aliases":["ENTRAMBASAGUAS","CANTABRIA"]},{"code":"05673","name":"VILLAVERDE DE PONTONES","aliases":["RIBAMONTÁN AL MONTE","CANTABRIA"]},{"code":"05675","name":"HOZ DE ANERO","aliases":["RIBAMONTÁN AL MONTE","CANTABRIA"]},{"code":"05677","name":"BERANGA","aliases":["HAZAS DE CESTO","CANTABRIA"]},{"code":"05679","name":"GAMA","aliases":["BÁRCENA DE CICERO","CANTABRIA"]},{"code":"05681","name":"CICERO","aliases":["BÁRCENA DE CICERO","CANTABRIA"]},{"code":"05683","name":"TRETO","aliases":["BÁRCENA DE CICERO","CANTABRIA"]},{"code":"05685","name":"LIMPIAS","aliases":["CANTABRIA"]},{"code":"05687","name":"MARRÓN","aliases":["AMPUERO","CANTABRIA"]},{"code":"05689","name":"UDALLA","aliases":["RASINES","CANTABRIA"]},{"code":"05691","name":"GIBAJA","aliases":["RAMALES DE LA VICTORIA","CANTABRIA"]},{"code":"05721","name":"ARLA BERRÓN","aliases":["VALLE DE MENA","BURGOS"]},{"code":"05722","name":"UNGO NAVA","aliases":["VALLE DE MENA","BURGOS"]},{"code":"05724","name":"MERCADILLO VILLASANA","aliases":["CEREZO DE RÍO TIRÓN","BURGOS"]},{"code":"05727","name":"CADAGUA","aliases":["VALLE DE MENA","BURGOS"]},{"code":"05730","name":"BERCEDO-MONTIJA","aliases":["MERINDAD DE SOTOSCUEVA","BURGOS"]},{"code":"05731","name":"QUINTANA DE LOS PRADOS","aliases":["ESPINOSA DE LOS MONTEROS","BURGOS"]},{"code":"05732","name":"ESPINOSA DE LOS MONTEROS","aliases":["BURGOS"]},{"code":"05733","name":"REDONDO","aliases":["MERINDAD DE SOTOSCUEVA","BURGOS"]},{"code":"05734","name":"SOTOSCUEVA","aliases":["MERINDAD DE SOTOSCUEVA","BURGOS"]},{"code":"05735","name":"PEDROSA","aliases":["MERINDAD DE VALDEPORRES","BURGOS"]},{"code":"05736","name":"DOSANTE CIDAD","aliases":["MERINDAD DE VALDEPORRES","BURGOS"]},{"code":"05737","name":"ROBREDO AHEDO","aliases":["MERINDAD DE VALDEPORRES","BURGOS"]},{"code":"05738","name":"SONCILLO","aliases":["VALLE DE VALDEBEZANA","BURGOS"]},{"code":"05739","name":"CABAÑAS DE VIRTUS","aliases":["VALLE DE VALDEBEZANA","BURGOS"]},{"code":"05740","name":"ARIJA","aliases":["BURGOS"]},{"code":"05741","name":"LLANO","aliases":["ROZAS DE VALDEARROYO (LAS)","CANTABRIA"]},{"code":"05742","name":"LAS ROZAS DE VALDEARROYO","aliases":["ROZAS DE VALDEARROYO (LAS)","CANTABRIA"]},{"code":"05743","name":"MONTES CLAROS","aliases":["VALDEPRADO DEL RÍO","CANTABRIA"]},{"code":"05744","name":"LOS CARABEOS","aliases":["VALDEPRADO DEL RÍO","CANTABRIA"]},{"code":"05747","name":"CILLAMAYOR","aliases":["BARRUELO DE SANTULLÁN","PALENCIA"]},{"code":"05748","name":"SALINAS DE PISUERGA","aliases":["PALENCIA"]},{"code":"05749","name":"VADO-CERVERA","aliases":["DEHESA DE MONTEJO","PALENCIA"]},{"code":"05750","name":"CASTREJÓN DE LA PEÑA","aliases":["PALENCIA"]},{"code":"05751","name":"VILLAVERDE TARILONTE","aliases":["SANTIBÁÑEZ DE LA PEÑA","PALENCIA"]},{"code":"05752","name":"SANTIBÁÑEZ DE LA PEÑA","aliases":["PALENCIA"]},{"code":"05753","name":"GUARDO APEADERO","aliases":["GUARDO","PALENCIA"]},{"code":"05754","name":"GUARDO","aliases":["PALENCIA"]},{"code":"05755","name":"LA LLAMA DE LA GUZPEÑA","aliases":["PRADO DE LA GUZPEÑA","LEÓN"]},{"code":"05756","name":"LA ESPINA","aliases":["VALDERRUEDA","LEÓN"]},{"code":"05757","name":"VALCUENDE","aliases":["VALDERRUEDA","LEÓN"]},{"code":"05758","name":"PUENTE ALMUHEY","aliases":["VALDERRUEDA","LEÓN"]},{"code":"05759","name":"PRADO DE LA GUZPEÑA","aliases":["LEÓN"]},{"code":"05760","name":"VALLE DE LAS CASAS","aliases":["CEBANICO","LEÓN"]},{"code":"05761","name":"CISTIERNA","aliases":["LEÓN"]},{"code":"05763","name":"LA ERCINA","aliases":["ERCINA (LA)","LEÓN"]},{"code":"05766","name":"BOÑAR","aliases":["LEÓN"]},{"code":"05767","name":"LA VECILLA","aliases":["VECILLA (LA)","LEÓN"]},{"code":"05770","name":"MATALLANA","aliases":["MATALLANA DE TORÍO","LEÓN"]},{"code":"05776","name":"SAN FELIZ","aliases":["GARRAFE DE TORÍO","LEÓN"]},{"code":"05778","name":"FEVE-LEÓN","aliases":["LEÓN"]},{"code":"05790","name":"SORRIBA","aliases":["VALVERDE DE LA VIRGEN","LEÓN"]},{"code":"05799","name":"CEREZAL DE LA GUZPEÑA","aliases":["PRADO DE LA GUZPEÑA","LEÓN"]},{"code":"05803","name":"LA ASUNCIÓN UNIVERSIDAD","aliases":["LEÓN"]},{"code":"06002","name":"ALHAMA DE MURCIA","aliases":["MURCIA"]},{"code":"06003","name":"TOTANA","aliases":["MURCIA"]},{"code":"06006","name":"LORCA-SUTULLENA","aliases":["LORCA","MURCIA"]},{"code":"07004","name":"ÁGUILAS","aliases":["MURCIA"]},{"code":"08004","name":"SEGOVIA-GUIOMAR","aliases":["SEGOVIA"]},{"code":"08223","name":"VIGO URZAIZ","aliases":["VIGO","PONTEVEDRA"]},{"code":"08224","name":"REDONDELA AV","aliases":["REDONDELA","PONTEVEDRA"]},{"code":"08240","name":"MEDINA DEL CAMPO AV","aliases":["MEDINA DEL CAMPO","VALLADOLID"]},{"code":"08247","name":"SANABRIA AV","aliases":["PUEBLA DE SANABRIA","ZAMORA"]},{"code":"08251","name":"A GUDIÑA-PORTA DE GALICIA","aliases":["GUDIÑA (A)","OURENSE"]},{"code":"10000","name":"Madrid-Príncipe Pío","aliases":["MADRID","principe pio","príncipe pío"]},{"code":"10001","name":"Aravaca","aliases":["MADRID","aravaca"]},{"code":"10002","name":"Pozuelo","aliases":["POZUELO DE ALARCÓN","MADRID","pozuelo"]},{"code":"10005","name":"Las Rozas","aliases":["ROZAS DE MADRID (LAS)","MADRID","las rozas"]},{"code":"10100","name":"Pinar de Las Rozas","aliases":["ROZAS DE MADRID (LAS)","MADRID","pinar","pinar de las rozas"]},{"code":"10101","name":"Las Matas","aliases":["ROZAS DE MADRID (LAS)","MADRID","las matas"]},{"code":"10103","name":"Torrelodones","aliases":["MADRID","torrelodones"]},{"code":"10104","name":"Galapagar-La Navata","aliases":["GALAPAGAR","MADRID","galapagar","la navata","galapagar la navata"]},{"code":"10200","name":"Villalba de Guadarrama","aliases":["COLLADO VILLALBA","MADRID","villalba","villalba de guadarrama"]},{"code":"10201","name":"San Yago","aliases":["GALAPAGAR","MADRID","san yago"]},{"code":"10202","name":"Las Zorreras-Navalquejigo","aliases":["SAN LORENZO DE EL ESCORIAL","MADRID","las zorreras","navalquejigo"]},{"code":"10203","name":"El Escorial","aliases":["SAN LORENZO DE EL ESCORIAL","MADRID","escorial"]},{"code":"10204","name":"ZARZALEJO","aliases":["MADRID"]},{"code":"10205","name":"ROBLEDO DE CHAVELA","aliases":["MADRID"]},{"code":"10206","name":"SANTA MARÍA DE LA ALAMEDA-PEGUERINOS","aliases":["SANTA MARÍA DE LA ALAMEDA","MADRID","santa maría de la alameda"]},{"code":"10207","name":"LAS NAVAS DEL MARQUÉS","aliases":["NAVAS DEL MARQUÉS (LAS)","ÁVILA"]},{"code":"10208","name":"NAVALPERAL","aliases":["NAVALPERAL DE PINARES","ÁVILA"]},{"code":"10209","name":"EL PIMPOLLAR","aliases":["SANTA MARÍA DE LA ALAMEDA","MADRID"]},{"code":"10300","name":"HERRADÓN-LA CAÑADA","aliases":["HERRADÓN DE PINARES","ÁVILA"]},{"code":"10302","name":"GUIMORCONDO","aliases":["ÁVILA"]},{"code":"10400","name":"ÁVILA","aliases":[]},{"code":"10409","name":"ARÉVALO","aliases":["ÁVILA"]},{"code":"10500","name":"MEDINA DEL CAMPO","aliases":["VALLADOLID"]},{"code":"10501","name":"POZALDEZ","aliases":["VALLADOLID"]},{"code":"10502","name":"MATAPOZUELOS","aliases":["VALLADOLID"]},{"code":"10503","name":"VALDESTILLAS","aliases":["VALLADOLID"]},{"code":"10504","name":"VIANA","aliases":["VIANA DE CEGA","VALLADOLID"]},{"code":"10600","name":"VALLADOLID-CAMPO GRANDE","aliases":["VALLADOLID"]},{"code":"10602","name":"CABEZÓN DEL PISUERGA","aliases":["CABEZÓN DE PISUERGA","VALLADOLID","cabezón de pisuerga"]},{"code":"10603","name":"CORCOS-AGUILAREJO","aliases":["CORCOS","VALLADOLID"]},{"code":"10604","name":"CUBILLAS DE SANTA MARTA","aliases":["VALLADOLID"]},{"code":"10605","name":"DUEÑAS","aliases":["PALENCIA"]},{"code":"10610","name":"VALLADOLID UNIVERSIDAD","aliases":["VALLADOLID"]},{"code":"11000","name":"VENTA DE BAÑOS","aliases":["PALENCIA"]},{"code":"11004","name":"MAGAZ","aliases":["MAGAZ DE PISUERGA","PALENCIA"]},{"code":"11006","name":"QUINTANA DEL PUENTE","aliases":["PALENCIA"]},{"code":"11009","name":"VILLAQUIRÁN","aliases":["VILLAQUIRÁN DE LOS INFANTES","BURGOS"]},{"code":"11014","name":"BURGOS-ROSA MANZANO","aliases":["BURGOS"]},{"code":"11109","name":"BRIVIESCA","aliases":["BURGOS"]},{"code":"11111","name":"PANCORBO","aliases":["BURGOS"]},{"code":"11200","name":"MIRANDA DE EBRO","aliases":["BURGOS"]},{"code":"11203","name":"MANZANOS","aliases":["RIBERA BAJA/ERRIBERA BEITIA","ARABA/ÁLAVA"]},{"code":"11204","name":"LA PUEBLA DE ARGANZÓN","aliases":["PUEBLA DE ARGANZÓN (LA)","BURGOS"]},{"code":"11205","name":"NANCLARES-LANGRAIZ","aliases":["IRUÑA OKA/IRUÑA DE OCA","ARABA/ÁLAVA"]},{"code":"11208","name":"VITORIA-GASTEIZ","aliases":["ARABA/ÁLAVA"]},{"code":"11210","name":"ALEGRÍA-DULANTZI","aliases":["ARABA/ÁLAVA"]},{"code":"11212","name":"AGURAIN-SALVATIERRA DE ÁLAVA","aliases":["SALVATIERRA/AGURAIN","ARABA/ÁLAVA"]},{"code":"11213","name":"ARAIA","aliases":["ZALDUONDO","ARABA/ÁLAVA"]},{"code":"11300","name":"ALTSASU","aliases":["ALTSASU/ALSASUA","NAVARRA"]},{"code":"11305","name":"BRINKOLA","aliases":["LEGAZPI","GIPUZKOA"]},{"code":"11306","name":"LEGAZPI","aliases":["GIPUZKOA"]},{"code":"11400","name":"ZUMARRAGA","aliases":["GIPUZKOA"]},{"code":"11402","name":"ORMÁIZTEGUI","aliases":["ORMAIZTEGI","GIPUZKOA"]},{"code":"11404","name":"BEASAIN","aliases":["GIPUZKOA"]},{"code":"11405","name":"ORDIZIA","aliases":["GIPUZKOA"]},{"code":"11500","name":"TOLOSA","aliases":["GIPUZKOA"]},{"code":"11501","name":"TOLOSA-CENTRO","aliases":["TOLOSA","GIPUZKOA"]},{"code":"11503","name":"BILLABONA-ZIZURKIL","aliases":["VILLABONA","GIPUZKOA"]},{"code":"11504","name":"ANDOAIN-CENTRO","aliases":["ANDOAIN","GIPUZKOA"]},{"code":"11507","name":"HERNANI-ERDIA","aliases":["HERNANI","GIPUZKOA"]},{"code":"11511","name":"SAN SEBASTIÁN-DONOSTIA","aliases":["DONOSTIA/SAN SEBASTIÁN","GIPUZKOA"]},{"code":"11515","name":"PASAIA","aliases":["GIPUZKOA"]},{"code":"11516","name":"LEZO-RENTERÍA","aliases":["LEZO","GIPUZKOA"]},{"code":"11600","name":"IRUN","aliases":["GIPUZKOA"]},{"code":"12001","name":"Los Negrales","aliases":["ALPEDRETE","MADRID","los negrales"]},{"code":"12002","name":"ALPEDRETE","aliases":["MADRID"]},{"code":"12004","name":"Collado Mediano","aliases":["MADRID","collado mediano"]},{"code":"12005","name":"Los Molinos","aliases":["MOLINOS (LOS)","MADRID","los molinos"]},{"code":"12006","name":"Cercedilla","aliases":["MADRID","cercedilla"]},{"code":"12009","name":"SAN RAFAEL","aliases":["CASTRO DEL RÍO","SEGOVIA"]},{"code":"12010","name":"EL ESPINAR","aliases":["CASTRO DEL RÍO","SEGOVIA"]},{"code":"12011","name":"LOS ÁNGELES DE SAN RAFAEL","aliases":["CASTRO DEL RÍO","SEGOVIA"]},{"code":"12012","name":"OTERO-HERREROS","aliases":["OTERO DE HERREROS","SEGOVIA"]},{"code":"12013","name":"ORTIGOSA DEL MONTE","aliases":["SEGOVIA"]},{"code":"12014","name":"NAVAS DE RIOFRÍO-LA LOSA","aliases":["NAVAS DE RIOFRÍO","SEGOVIA"]},{"code":"12020","name":"Puerto de Navacerrada","aliases":["CERCEDILLA","MADRID","puerto navacerrada","navacerrada"]},{"code":"12023","name":"Cotos","aliases":["REAL SITIO DE SAN ILDEFONSO","SEGOVIA","cotos"]},{"code":"12100","name":"SEGOVIA","aliases":[]},{"code":"13106","name":"LLODIO","aliases":["LAUDIO/LLODIO","ARABA/ÁLAVA"]},{"code":"13200","name":"BILBAO-INTERMOD. ABANDO INDALECIO PRIETO","aliases":["BILBAO","BIZKAIA","intermodal abando indalecio prieto"]},{"code":"13206","name":"AMETZOLA","aliases":["BILBAO","BIZKAIA"]},{"code":"14100","name":"PALENCIA","aliases":[]},{"code":"14103","name":"PIÑA","aliases":["PIÑA DE CAMPOS","PALENCIA"]},{"code":"14104","name":"FRÓMISTA","aliases":["PALENCIA"]},{"code":"14107","name":"OSORNO","aliases":["OSORNO LA MAYOR","PALENCIA"]},{"code":"14108","name":"ESPINOSA DE VILLAGONZALO","aliases":["PALENCIA"]},{"code":"14111","name":"HERRERA DE PISUERGA","aliases":["PALENCIA"]},{"code":"14112","name":"ALAR DEL REY","aliases":["PALENCIA"]},{"code":"14113","name":"MAVE","aliases":["AGUILAR DE CAMPOO","PALENCIA"]},{"code":"14114","name":"AGUILAR DE CAMPOO","aliases":["PALENCIA"]},{"code":"14115","name":"QUINTANILLA DE LAS TORRES","aliases":["POMAR DE VALDIVIA","PALENCIA"]},{"code":"14117","name":"EL CARRIÓN","aliases":["MONZÓN DE CAMPOS","PALENCIA"]},{"code":"14200","name":"MATAPORQUERA","aliases":["VALDEOLEA","CANTABRIA"]},{"code":"14202","name":"REINOSA","aliases":["CANTABRIA"]},{"code":"14206","name":"BÁRCENA","aliases":["BÁRCENA DE PIE DE CONCHA","CANTABRIA"]},{"code":"14210","name":"LOS CORRALES DE BUELNA","aliases":["CORRALES DE BUELNA (LOS)","CANTABRIA"]},{"code":"14213","name":"TORRELAVEGA","aliases":["CANTABRIA"]},{"code":"14216","name":"RENEDO","aliases":["PIÉLAGOS","CANTABRIA"]},{"code":"14220","name":"MALIAÑO","aliases":["CAMARGO","CANTABRIA"]},{"code":"14223","name":"SANTANDER","aliases":["CANTABRIA"]},{"code":"14230","name":"VALDECILLA","aliases":["SANTANDER","CANTABRIA"]},{"code":"15001","name":"GRIJOTA","aliases":["PALENCIA"]},{"code":"15003","name":"BECERRIL","aliases":["BECERRIL DE CAMPOS","PALENCIA"]},{"code":"15004","name":"PAREDES DE NAVA","aliases":["PALENCIA"]},{"code":"15006","name":"CISNEROS","aliases":["PALENCIA"]},{"code":"15007","name":"VILLADA","aliases":["PALENCIA"]},{"code":"15008","name":"GRAJAL","aliases":["GRAJAL DE CAMPOS","LEÓN"]},{"code":"15009","name":"SAHAGÚN","aliases":["LEÓN"]},{"code":"15012","name":"EL BURGO RANERO","aliases":["BURGO RANERO (EL)","LEÓN"]},{"code":"15014","name":"SANTAS MARTAS","aliases":["LEÓN"]},{"code":"15015","name":"PALANQUINOS","aliases":["VILLANUEVA DE LAS MANZANAS","LEÓN"]},{"code":"15100","name":"LEÓN","aliases":[]},{"code":"15106","name":"LA ROBLA","aliases":["ROBLA (LA)","LEÓN"]},{"code":"15108","name":"LA POLA DE GORDÓN","aliases":["POLA DE GORDÓN (LA)","LEÓN"]},{"code":"15109","name":"SANTA LUCÍA","aliases":["POLA DE GORDÓN (LA)","LEÓN"]},{"code":"15112","name":"VILLAMANÍN","aliases":["LEÓN"]},{"code":"15113","name":"BUSDONGO","aliases":["VILLAMANÍN","LEÓN"]},{"code":"15116","name":"LINARES-CONGOSTINAS","aliases":["LENA","ASTURIAS"]},{"code":"15118","name":"PUENTE DE LOS FIERROS","aliases":["LENA","ASTURIAS"]},{"code":"15120","name":"CAMPOMANES","aliases":["LENA","ASTURIAS"]},{"code":"15122","name":"POLA DE LENA","aliases":["LENA","ASTURIAS"]},{"code":"15200","name":"UJO","aliases":["MIERES","ASTURIAS"]},{"code":"15203","name":"MIERES-PUENTE","aliases":["MIERES","ASTURIAS"]},{"code":"15211","name":"OVIEDO","aliases":["ASTURIAS"]},{"code":"15217","name":"LA CORREDORIA","aliases":["OVIEDO","ASTURIAS"]},{"code":"15218","name":"LLAMAQUIQUE","aliases":["OVIEDO","ASTURIAS"]},{"code":"15401","name":"CALZADA DE ASTURIAS","aliases":["GIJÓN","ASTURIAS"]},{"code":"15410","name":"GIJÓN-SANZ CRESPO","aliases":["GIJÓN","ASTURIAS"]},{"code":"16403","name":"AVILÉS","aliases":["ASTURIAS"]},{"code":"17000","name":"MADRID-CHAMARTÍN-CLARA CAMPOAMOR","aliases":["MADRID","chamartin","chamartín","madrid chamartin","madrid chamartín","chamartín cercanías","chamartin cercanias","madrid chamartín clara campoamor"]},{"code":"18000","name":"Madrid-Atocha Cercanías","aliases":["atocha cercanias","atocha cercanías","madrid atocha cercanias","madrid atocha cercanías"]},{"code":"18001","name":"Madrid-Recoletos","aliases":["MADRID","chamartin","chamartín","madrid chamartin","madrid chamartín","recoletos"]},{"code":"18002","name":"Madrid-Nuevos Ministerios","aliases":["MADRID","nuevos ministerios"]},{"code":"20002","name":"QUINTANA-RANEROS","aliases":["SANTOVENIA DE LA VALDONCINA","LEÓN"]},{"code":"20005","name":"VEGUELLINA","aliases":["VILLAREJO DE ÓRBIGO","LEÓN"]},{"code":"20006","name":"BARRIENTOS","aliases":["VALDERREY","LEÓN"]},{"code":"20007","name":"NISTAL","aliases":["SAN JUSTO DE LA VEGA","LEÓN"]},{"code":"20008","name":"VILLAVANTE","aliases":["SANTA MARINA DEL REY","LEÓN"]},{"code":"20100","name":"ASTORGA","aliases":["LEÓN"]},{"code":"20102","name":"VEGA-MAGAZ","aliases":["MAGAZ DE CEPEDA","LEÓN"]},{"code":"20103","name":"PORQUEROS","aliases":["MAGAZ DE CEPEDA","LEÓN"]},{"code":"20104","name":"BRAÑUELAS","aliases":["VILLAGATÓN","LEÓN"]},{"code":"20106","name":"LA GRANJA","aliases":["TORRE DEL BIERZO","LEÓN"]},{"code":"20109","name":"TORRE DEL BIERZO","aliases":["LEÓN"]},{"code":"20111","name":"BEMBIBRE","aliases":["LEÓN"]},{"code":"20113","name":"SAN MIGUEL DE LAS DUEÑAS","aliases":["CONGOSTO","LEÓN"]},{"code":"20200","name":"PONFERRADA","aliases":["LEÓN"]},{"code":"20203","name":"VILLADEPALOS","aliases":["CARRACEDELO","LEÓN"]},{"code":"20204","name":"TORAL DE LOS VADOS","aliases":["LEÓN"]},{"code":"20207","name":"COVAS","aliases":["RUBIÁ","OURENSE"]},{"code":"20208","name":"QUEREÑO","aliases":["RUBIÁ","OURENSE"]},{"code":"20210","name":"SOBRADELO","aliases":["CARBALLEDA DE VALDEORRAS","OURENSE"]},{"code":"20211","name":"O BARCO DE VALDEORRAS","aliases":["BARCO DE VALDEORRAS (O)","OURENSE"]},{"code":"20212","name":"VILAMARTÍN DE VALDEORRAS","aliases":["OURENSE"]},{"code":"20213","name":"A RÚA-PETÍN","aliases":["RÚA (A)","OURENSE"]},{"code":"20214","name":"MONTEFURADO","aliases":["QUIROGA","LUGO"]},{"code":"20216","name":"SAN CLODIO-QUIROGA","aliases":["RIBAS DE SIL","LUGO"]},{"code":"20218","name":"A POBRA DO BROLLÓN","aliases":["POBRA DO BROLLÓN (A)","LUGO","pobra de brollon","pobra de brollón"]},{"code":"20300","name":"MONFORTE DE LEMOS","aliases":["LUGO"]},{"code":"20305","name":"SARRIA","aliases":["LUGO"]},{"code":"20306","name":"PEDRELO-CÉLTIGOS","aliases":["SARRIA","LUGO"]},{"code":"20309","name":"LUGO","aliases":[]},{"code":"20310","name":"RÁBADE","aliases":["LUGO"]},{"code":"20312","name":"BAAMONDE","aliases":["BEGONTE","LUGO"]},{"code":"20313","name":"PARGA","aliases":["GUITIRIZ","LUGO"]},{"code":"20314","name":"GUITIRIZ","aliases":["LUGO"]},{"code":"20316","name":"TEIXEIRO","aliases":["CURTIS","CORUÑA, A"]},{"code":"20317","name":"CURTIS","aliases":["CORUÑA, A"]},{"code":"20318","name":"PIÑOI","aliases":["CESURAS","CORUÑA, A"]},{"code":"20319","name":"CESURAS","aliases":["CORUÑA, A"]},{"code":"20320","name":"OZA DOS RÍOS","aliases":["CORUÑA, A"]},{"code":"20400","name":"BETANZOS-INFESTA","aliases":["BETANZOS","CORUÑA, A"]},{"code":"20402","name":"CECEBRE","aliases":["CAMBRE","CORUÑA, A"]},{"code":"20403","name":"CAMBRE","aliases":["CORUÑA, A"]},{"code":"20404","name":"O BURGO-SANTIAGO","aliases":["CULLEREDO","CORUÑA, A"]},{"code":"20410","name":"ELVIÑA-UNIVERSIDADE","aliases":["CORUÑA (A)","CORUÑA, A"]},{"code":"21001","name":"BETANZOS-CIDADE","aliases":["BETANZOS","CORUÑA, A"]},{"code":"21002","name":"MIÑO","aliases":["CORUÑA, A"]},{"code":"21003","name":"PERBES","aliases":["MIÑO","CORUÑA, A"]},{"code":"21004","name":"PONTEDEUME","aliases":["CORUÑA, A"]},{"code":"21005","name":"CABANAS","aliases":["CORUÑA, A"]},{"code":"21007","name":"BARALLOBRE","aliases":["FENE","CORUÑA, A"]},{"code":"21008","name":"PERLÍO","aliases":["FENE","CORUÑA, A"]},{"code":"21009","name":"NEDA","aliases":["CORUÑA, A"]},{"code":"21010","name":"FERROL","aliases":["CORUÑA, A"]},{"code":"21913","name":"POLIGON INDUSTRIAL DEL SEGRE","aliases":["LLEIDA"]},{"code":"22001","name":"CANAVAL","aliases":["SOBER","LUGO"]},{"code":"22002","name":"AREAS","aliases":["SOBER","LUGO"]},{"code":"22003","name":"SANTO ESTEVO DO SIL","aliases":["PANTÓN","LUGO"]},{"code":"22004","name":"SAN PEDRO DO SIL","aliases":["PANTÓN","LUGO"]},{"code":"22005","name":"OS PEARES","aliases":["PEROXA (A)","OURENSE"]},{"code":"22006","name":"BARRA DE MIÑO","aliases":["COLES","OURENSE"]},{"code":"22100","name":"OURENSE","aliases":[]},{"code":"22101","name":"BARBANTES","aliases":["CENLLE","OURENSE"]},{"code":"22102","name":"RIBADAVIA","aliases":["OURENSE"]},{"code":"22103","name":"FILGUEIRA","aliases":["CRECENTE","PONTEVEDRA"]},{"code":"22104","name":"FRIEIRA","aliases":["CRECENTE","PONTEVEDRA"]},{"code":"22105","name":"POUSA-CRECENTE","aliases":["CRECENTE","PONTEVEDRA"]},{"code":"22106","name":"ARBO","aliases":["PONTEVEDRA"]},{"code":"22107","name":"SELA","aliases":["ARBO","PONTEVEDRA"]},{"code":"22108","name":"AS NEVES","aliases":["NEVES (AS)","PONTEVEDRA"]},{"code":"22109","name":"SALVATERRA","aliases":["SALVATERRA DE MIÑO","PONTEVEDRA"]},{"code":"22110","name":"CALDELAS","aliases":["TUI","PONTEVEDRA"]},{"code":"22200","name":"GUILLAREI","aliases":["TUI","PONTEVEDRA"]},{"code":"22201","name":"O PORRIÑO","aliases":["PORRIÑO (O)","PONTEVEDRA"]},{"code":"22300","name":"REDONDELA","aliases":["PONTEVEDRA"]},{"code":"22308","name":"VIGO-GUIXAR","aliases":["VIGO","PONTEVEDRA"]},{"code":"22401","name":"TUI","aliases":["PONTEVEDRA"]},{"code":"22402","name":"VALENÇA DO MINHO","aliases":["TUI","PONTEVEDRA"]},{"code":"23000","name":"REDONDELA-PICOTA","aliases":["REDONDELA","PONTEVEDRA"]},{"code":"23001","name":"CESANTES","aliases":["REDONDELA","PONTEVEDRA"]},{"code":"23002","name":"ARCADE","aliases":["SOUTOMAIOR","PONTEVEDRA"]},{"code":"23004","name":"PONTEVEDRA","aliases":[]},{"code":"23005","name":"PORTELA","aliases":["BARRO","PONTEVEDRA"]},{"code":"23008","name":"VILAGARCÍA DE AROUSA","aliases":["PONTEVEDRA"]},{"code":"23009","name":"CATOIRA","aliases":["PONTEVEDRA"]},{"code":"23010","name":"PONTECESURES","aliases":["PONTEVEDRA"]},{"code":"23011","name":"PADRÓN","aliases":["CORUÑA, A"]},{"code":"23013","name":"OSEBE","aliases":["TEO","CORUÑA, A"]},{"code":"23018","name":"PONTEVEDRA UNIVERSIDAD","aliases":["PONTEVEDRA"]},{"code":"23021","name":"PADRÓN BARBANZA","aliases":["PADRÓN","CORUÑA, A"]},{"code":"30000","name":"MONFRAGÜE","aliases":["MALPARTIDA DE PLASENCIA","CÁCERES"]},{"code":"30002","name":"PLASENCIA","aliases":["CÁCERES"]},{"code":"30100","name":"SALAMANCA","aliases":[]},{"code":"30110","name":"SALAMANCA-LA ALAMEDILLA","aliases":["SALAMANCA"]},{"code":"30200","name":"ZAMORA","aliases":[]},{"code":"31002","name":"NAVA DEL REY","aliases":["VALLADOLID"]},{"code":"31006","name":"TORO","aliases":["ZAMORA"]},{"code":"31104","name":"CARBAJALES DE ALBA","aliases":["ZAMORA"]},{"code":"31106","name":"FERRERUELA DE TÁBARA","aliases":["FERRERUELA DE HUERVA","ZAMORA"]},{"code":"31107","name":"ABEJERA","aliases":["RIOFRÍO DE ALISTE","ZAMORA"]},{"code":"31108","name":"SARRACÍN DE ALISTE","aliases":["RIOFRÍO DE ALISTE","ZAMORA"]},{"code":"31109","name":"CABAÑAS DE ALISTE","aliases":["SAN VICENTE DE LA CABEZA","ZAMORA"]},{"code":"31112","name":"LINAREJOS-PEDROSO","aliases":["MANZANAL DE ARRIBA","ZAMORA"]},{"code":"31200","name":"PUEBLA DE SANABRIA","aliases":["ZAMORA"]},{"code":"31303","name":"A FRIELA-MASIDE","aliases":["MASIDE","OURENSE"]},{"code":"31304","name":"O CARBALLIÑO","aliases":["CARBALLIÑO (O)","OURENSE"]},{"code":"31306","name":"O IRIXO","aliases":["IRIXO (O)","OURENSE"]},{"code":"31308","name":"LALÍN","aliases":["PONTEVEDRA"]},{"code":"31400","name":"SANTIAGO DE COMPOSTELA-DANIEL CASTELAO","aliases":["SANTIAGO DE COMPOSTELA","CORUÑA, A"]},{"code":"31411","name":"UXES","aliases":["ARTEIXO","CORUÑA, A"]},{"code":"31412","name":"A CORUÑA","aliases":["CORUÑA (A)","CORUÑA, A"]},{"code":"31415","name":"ORDES","aliases":["CORUÑA, A"]},{"code":"31416","name":"CERCEDA-MEIRAMA","aliases":["CERCEDA","CORUÑA, A"]},{"code":"32001","name":"CAMPILLO","aliases":["CAMPILLO (EL)","VALLADOLID"]},{"code":"32002","name":"EL CARPIO","aliases":["CARPIO","VALLADOLID"]},{"code":"32003","name":"FRESNO EL VIEJO","aliases":["VALLADOLID"]},{"code":"32004","name":"CANTALAPIEDRA","aliases":["SALAMANCA"]},{"code":"32006","name":"EL PEDROSO DE LA ARMUÑA","aliases":["PEDROSO DE LA ARMUÑA (EL)","SALAMANCA"]},{"code":"32007","name":"PITIEGUA","aliases":["SALAMANCA"]},{"code":"32008","name":"GOMECELLO","aliases":["SALAMANCA"]},{"code":"32009","name":"MORISCOS","aliases":["SALAMANCA"]},{"code":"34002","name":"CARDEÑOSA DE ÁVILA","aliases":["CARDEÑOSA","ÁVILA"]},{"code":"34005","name":"SAN PEDRO DEL ARROYO","aliases":["ÁVILA"]},{"code":"34007","name":"CRESPOS","aliases":["ÁVILA"]},{"code":"34008","name":"NARROS DEL CASTILLO","aliases":["ÁVILA"]},{"code":"34010","name":"PEÑARANDA DE BRACAMONTE","aliases":["SALAMANCA"]},{"code":"34011","name":"VILLAR DE GALLIMAZO","aliases":["SALAMANCA"]},{"code":"34012","name":"BABILAFUENTE","aliases":["SALAMANCA"]},{"code":"34013","name":"SAN MORALES","aliases":["SALAMANCA"]},{"code":"34014","name":"ALDEALENGUA","aliases":["SALAMANCA"]},{"code":"35001","name":"Leganés","aliases":["MADRID","leganes","leganés"]},{"code":"35002","name":"FUENLABRADA","aliases":["fuenla","fuenlabrada"]},{"code":"35005","name":"ILLESCAS","aliases":["TOLEDO"]},{"code":"35012","name":"Humanes","aliases":["HUMANES DE MADRID","MADRID","humanes"]},{"code":"35105","name":"TORRIJOS","aliases":["TOLEDO"]},{"code":"35109","name":"MONTEARAGÓN","aliases":["TOLEDO"]},{"code":"35200","name":"TALAVERA DE LA REINA","aliases":["TOLEDO"]},{"code":"35203","name":"OROPESA DE TOLEDO","aliases":["OROPESA","TOLEDO"]},{"code":"35206","name":"NAVALMORAL DE LA MATA","aliases":["CÁCERES"]},{"code":"35207","name":"CASATEJADA","aliases":["CÁCERES"]},{"code":"35301","name":"MIRABEL","aliases":["CÁCERES"]},{"code":"35302","name":"CASAS DE MILLÁN","aliases":["CÁCERES"]},{"code":"35303","name":"CAÑAVERAL","aliases":["CÁCERES"]},{"code":"35400","name":"CÁCERES","aliases":[]},{"code":"35402","name":"ARROYO DE MALPARTIDA","aliases":["CÁCERES"]},{"code":"35405","name":"SAN VICENTE DE ALCÁNTARA","aliases":["BADAJOZ"]},{"code":"35406","name":"VALENCIA DE ALCÁNTARA","aliases":["CÁCERES"]},{"code":"37200","name":"CIUDAD REAL","aliases":[]},{"code":"37300","name":"PUERTOLLANO","aliases":["CIUDAD REAL"]},{"code":"37302","name":"BRAZATORTAS-VEREDAS","aliases":["BRAZATORTAS","CIUDAD REAL"]},{"code":"37305","name":"ALMADENEJOS-ALMADÉN","aliases":["ALMADENEJOS","CIUDAD REAL"]},{"code":"37308","name":"GUADALMEZ-LOS PEDROCHES","aliases":["GUADALMEZ","CIUDAD REAL"]},{"code":"37311","name":"CABEZA DEL BUEY","aliases":["BADAJOZ"]},{"code":"37400","name":"ALMORCHÓN","aliases":["CABEZA DEL BUEY","BADAJOZ"]},{"code":"37402","name":"CASTUERA","aliases":["BADAJOZ"]},{"code":"37404","name":"CAMPANARIO","aliases":["BADAJOZ"]},{"code":"37406","name":"VILLANUEVA DE LA SERENA","aliases":["BADAJOZ"]},{"code":"37407","name":"DON BENITO","aliases":["BADAJOZ"]},{"code":"37409","name":"VALDETORRES","aliases":["BADAJOZ"]},{"code":"37410","name":"GUAREÑA","aliases":["BADAJOZ"]},{"code":"37500","name":"MÉRIDA","aliases":["BADAJOZ"]},{"code":"37603","name":"MONTIJO","aliases":["BADAJOZ"]},{"code":"37604","name":"GUADIANA","aliases":["GUADIANA DEL CAUDILLO","BADAJOZ"]},{"code":"37606","name":"BADAJOZ","aliases":[]},{"code":"37608","name":"MONTIJO-EL MOLINO","aliases":["MONTIJO","BADAJOZ"]},{"code":"37611","name":"GARROVILLA-LAS VEGAS","aliases":["GARROVILLA (LA)","BADAJOZ"]},{"code":"37704","name":"VILLANUEVA DE CÓRDOBA","aliases":["CÓRDOBA"]},{"code":"40002","name":"CALAMONTE","aliases":["BADAJOZ"]},{"code":"40004","name":"ALMENDRALEJO","aliases":["BADAJOZ"]},{"code":"40005","name":"VILLAFRANCA DE LOS BARROS","aliases":["BADAJOZ"]},{"code":"40006","name":"LOS SANTOS DE MAIMONA","aliases":["SANTOS DE MAIMONA (LOS)","BADAJOZ"]},{"code":"40008","name":"ZAFRA FERIA","aliases":["ZAFRA","BADAJOZ"]},{"code":"40100","name":"ZAFRA","aliases":["BADAJOZ"]},{"code":"40105","name":"LLERENA","aliases":["BADAJOZ"]},{"code":"40107","name":"FUENTE DEL ARCO","aliases":["BADAJOZ"]},{"code":"40108","name":"GUADALCANAL","aliases":["SEVILLA"]},{"code":"40113","name":"CAZALLA-CONSTANTINA","aliases":["CONSTANTINA","SEVILLA"]},{"code":"40115","name":"PEDROSO","aliases":["PEDROSO (EL)","SEVILLA"]},{"code":"40119","name":"VILLANUEVA DEL RÍO-MINAS","aliases":["VILLANUEVA DEL RÍO Y MINAS","SEVILLA"]},{"code":"40122","name":"TOCINA","aliases":["SEVILLA"]},{"code":"42005","name":"FREGENAL DE LA SIERRA","aliases":["BADAJOZ"]},{"code":"42006","name":"CUMBRES MAYORES","aliases":["HUELVA"]},{"code":"42008","name":"JABUGO-GALAROZA","aliases":["JABUGO","HUELVA"]},{"code":"42009","name":"ALMONASTER-CORTEGANA","aliases":["ALMONASTER LA REAL","HUELVA"]},{"code":"42012","name":"VALDELAMUSA","aliases":["CORTEGANA","HUELVA"]},{"code":"42013","name":"EL TAMUJOSO","aliases":["CERRO DE ANDÉVALO (EL)","HUELVA"]},{"code":"42015","name":"CALAÑAS","aliases":["HUELVA"]},{"code":"42016","name":"LOS MILANOS","aliases":["CALAÑAS","HUELVA"]},{"code":"42018","name":"EL COBUJÓN","aliases":["CALAÑAS","HUELVA"]},{"code":"42019","name":"BELMONTE","aliases":["GIBRALEÓN","HUELVA"]},{"code":"42020","name":"GIBRALEÓN","aliases":["HUELVA"]},{"code":"43005","name":"BENACAZÓN","aliases":["SEVILLA"]},{"code":"43008","name":"CARRIÓN DE LOS CÉSPEDES","aliases":["SEVILLA"]},{"code":"43009","name":"ESCACENA","aliases":["ESCACENA DEL CAMPO","HUELVA"]},{"code":"43011","name":"LA PALMA DEL CONDADO","aliases":["PALMA DEL CONDADO (LA)","HUELVA"]},{"code":"43012","name":"VILLARRASA","aliases":["HUELVA"]},{"code":"43015","name":"NIEBLA-PUERTA DEL BUEY","aliases":["NIEBLA","HUELVA"]},{"code":"43019","name":"HUELVA","aliases":["huelva-término"]},{"code":"43021","name":"SAN JUAN DEL PUERTO","aliases":["HUELVA"]},{"code":"50002","name":"CINCO CASAS","aliases":["ALCÁZAR DE SAN JUAN","CIUDAD REAL"]},{"code":"50100","name":"MANZANARES","aliases":["CIUDAD REAL"]},{"code":"50102","name":"VALDEPEÑAS","aliases":["CIUDAD REAL"]},{"code":"50200","name":"SANTA CRUZ DE MUDELA","aliases":["CIUDAD REAL"]},{"code":"50202","name":"ALMURADIEL-VISO DEL MARQUÉS","aliases":["ALMURADIEL","CIUDAD REAL"]},{"code":"50207","name":"VILCHES","aliases":["JAÉN"]},{"code":"50300","name":"LINARES-BAEZA","aliases":["LINARES","JAÉN"]},{"code":"50400","name":"ESPELÚY","aliases":["JAÉN"]},{"code":"50403","name":"ANDÚJAR","aliases":["JAÉN"]},{"code":"50407","name":"VILLA DEL RÍO","aliases":["CÓRDOBA"]},{"code":"50413","name":"ALCOLEA DE CÓRDOBA","aliases":["CÓRDOBA"]},{"code":"50417","name":"CAMPUS UNIVERSITARIO DE RABANALES","aliases":["CÓRDOBA"]},{"code":"50500","name":"CÓRDOBA-JULIO ANGUITA","aliases":["CÓRDOBA"]},{"code":"50501","name":"EL HIGUERÓN","aliases":["CÓRDOBA"]},{"code":"50502","name":"VILLARRUBIA DE CÓRDOBA","aliases":["CÓRDOBA"]},{"code":"50504","name":"POSADAS","aliases":["CÓRDOBA"]},{"code":"50506","name":"PALMA DEL RÍO","aliases":["CÓRDOBA"]},{"code":"50507","name":"PEÑAFLOR","aliases":["SEVILLA"]},{"code":"50600","name":"LORA DEL RÍO","aliases":["SEVILLA"]},{"code":"50700","name":"LOS ROSALES","aliases":["TOCINA","SEVILLA"]},{"code":"51003","name":"SEVILLA-SANTA JUSTA","aliases":["SEVILLA"]},{"code":"51100","name":"SAN BERNARDO","aliases":["SEVILLA"]},{"code":"51103","name":"DOS HERMANAS","aliases":["SEVILLA"]},{"code":"51110","name":"VIRGEN DEL ROCÍO","aliases":["SEVILLA"]},{"code":"51111","name":"BELLAVISTA","aliases":["SEVILLA"]},{"code":"51200","name":"UTRERA","aliases":["SEVILLA"]},{"code":"51202","name":"LAS CABEZAS DE SAN JUAN","aliases":["CABEZAS DE SAN JUAN (LAS)","SEVILLA"]},{"code":"51203","name":"LEBRIJA","aliases":["SEVILLA"]},{"code":"51205","name":"AEROPUERTO DE JEREZ","aliases":["JEREZ DE LA FRONTERA","CÁDIZ"]},{"code":"51300","name":"JEREZ DE LA FRONTERA","aliases":["CÁDIZ","jerez","jerez de la frontera"]},{"code":"51405","name":"Cádiz","aliases":["PUERTO DE SANTA MARÍA (EL)","CÁDIZ","cadiz","cádiz","bahia sur","bahía sur","san fernando bahia sur","san fernando bahía sur"]},{"code":"51407","name":"Cortadura","aliases":["CÁDIZ","cortadura"]},{"code":"51414","name":"San Severiano","aliases":["CÁDIZ","segunda aguada","san severiano"]},{"code":"51409","name":"Estadio","aliases":["CÁDIZ","estadio","cádiz"]},{"code":"54400","name":"BOBADILLA","aliases":["ANTEQUERA","MÁLAGA"]},{"code":"54403","name":"EL CHORRO-CAMINITO DEL REY","aliases":["ÁLORA","MÁLAGA"]},{"code":"54404","name":"LAS MELLIZAS","aliases":["ÁLORA","MÁLAGA"]},{"code":"54405","name":"ÁLORA","aliases":["MÁLAGA"]},{"code":"54406","name":"PIZARRA","aliases":["MÁLAGA"]},{"code":"54407","name":"ALJAIMA","aliases":["CÁRTAMA","MÁLAGA"]},{"code":"54408","name":"CÁRTAMA","aliases":["MÁLAGA"]},{"code":"54410","name":"CAMPANILLAS","aliases":["MÁLAGA"]},{"code":"54412","name":"MÁLAGA-LOS PRADOS","aliases":["MÁLAGA","los prados"]},{"code":"54413","name":"MÁLAGA MARÍA ZAMBRANO","aliases":["MÁLAGA"]},{"code":"54501","name":"VICTORIA KENT","aliases":["MÁLAGA"]},{"code":"54517","name":"MÁLAGA-CENTRO ALAMEDA","aliases":["MÁLAGA"]},{"code":"55001","name":"CAMPILLOS","aliases":["MÁLAGA"]},{"code":"55003","name":"ALMARGEN-CAÑETE LA REAL","aliases":["ALMARGEN","MÁLAGA"]},{"code":"55005","name":"SETENIL","aliases":["SETENIL DE LAS BODEGAS","CÁDIZ"]},{"code":"55007","name":"RONDA","aliases":["MÁLAGA"]},{"code":"55008","name":"ARRIATE","aliases":["MÁLAGA"]},{"code":"55010","name":"BENAOJÁN-MONTEJAQUE","aliases":["BENAOJÁN","MÁLAGA"]},{"code":"55011","name":"JIMERA DE LÍBAR","aliases":["MÁLAGA"]},{"code":"55012","name":"CORTES DE LA FRONTERA","aliases":["MÁLAGA"]},{"code":"55013","name":"GAUCÍN","aliases":["CORTES DE LA FRONTERA","MÁLAGA"]},{"code":"55014","name":"SAN PABLO","aliases":["JIMENA DE LA FRONTERA","CÁDIZ"]},{"code":"55015","name":"JIMENA DE LA FRONTERA","aliases":["CÁDIZ"]},{"code":"55017","name":"ALMORAIMA","aliases":["CASTELLAR DE LA FRONTERA","CÁDIZ"]},{"code":"55018","name":"SAN ROQUE-LA LÍNEA","aliases":["SAN ROQUE","CÁDIZ"]},{"code":"55019","name":"LOS BARRIOS","aliases":["BARRIOS (LOS)","CÁDIZ"]},{"code":"55020","name":"ALGECIRAS","aliases":["CÁDIZ"]},{"code":"56004","name":"JÓDAR-ÚBEDA","aliases":["JÓDAR","JAÉN"]},{"code":"56009","name":"CABRA DEL SANTO CRISTO Y ALICÚN","aliases":["CABRA DEL SANTO CRISTO","JAÉN"]},{"code":"56100","name":"MOREDA","aliases":["MORELÁBOR","GRANADA"]},{"code":"56103","name":"BENALÚA DE GUADIX","aliases":["BENALÚA","GRANADA"]},{"code":"56200","name":"GUADIX","aliases":["GRANADA"]},{"code":"56301","name":"FIÑANA","aliases":["ALMERÍA"]},{"code":"56305","name":"GÉRGAL","aliases":["ALMERÍA"]},{"code":"56308","name":"GÁDOR","aliases":["ALMERÍA"]},{"code":"56310","name":"HUERCAL-VIATOR","aliases":["HUÉRCAL DE ALMERÍA","ALMERÍA"]},{"code":"56312","name":"ALMERÍA","aliases":[]},{"code":"57003","name":"IZNALLOZ","aliases":["GRANADA"]},{"code":"60000","name":"MADRID-PUERTA DE ATOCHA-ALMUDENA GRANDES","aliases":["madrid puerta de atocha","puerta de atocha","atocha"]},{"code":"60200","name":"Aranjuez","aliases":["MADRID","aranjuez"]},{"code":"60202","name":"CASTILLEJO-AÑOVER","aliases":["ARANJUEZ","MADRID"]},{"code":"60203","name":"VILLASEQUILLA","aliases":["TOLEDO"]},{"code":"60206","name":"TEMBLEQUE","aliases":["TOLEDO"]},{"code":"60207","name":"EL ROMERAL","aliases":["ROMERAL (EL)","TOLEDO"]},{"code":"60300","name":"VILLACAÑAS","aliases":["TOLEDO"]},{"code":"60301","name":"QUERO","aliases":["TOLEDO"]},{"code":"60400","name":"ALCÁZAR DE SAN JUAN","aliases":["CIUDAD REAL"]},{"code":"60402","name":"CAMPO DE CRIPTANA","aliases":["CIUDAD REAL"]},{"code":"60406","name":"SOCUÉLLAMOS","aliases":["CIUDAD REAL"]},{"code":"60500","name":"VILLARROBLEDO","aliases":["ALBACETE"]},{"code":"60503","name":"MINAYA","aliases":["ALBACETE"]},{"code":"60505","name":"LA RODA DE ALBACETE","aliases":["RODA (LA)","ALBACETE"]},{"code":"60507","name":"LA GINETA","aliases":["GINETA (LA)","ALBACETE"]},{"code":"60600","name":"ALBACETE-LOS LLANOS","aliases":["ALBACETE"]},{"code":"60800","name":"ALMANSA","aliases":["ALBACETE"]},{"code":"60900","name":"LA ENCINA","aliases":["VILLENA","ALICANTE/ALACANT"]},{"code":"60901","name":"CAUDETE","aliases":["ALBACETE"]},{"code":"60902","name":"VILLENA","aliases":["ALICANTE/ALACANT"]},{"code":"60904","name":"SAX","aliases":["ALICANTE/ALACANT"]},{"code":"60905","name":"ELDA-PETRER","aliases":["ELDA","ALICANTE/ALACANT"]},{"code":"60907","name":"NOVELDA-ASPE","aliases":["NOVELDA","ALICANTE/ALACANT"]},{"code":"60911","name":"ALICANTE/ALACANT-TERMINAL","aliases":["ALICANTE/ALACANT"]},{"code":"60913","name":"SANT VICENT CENTRE","aliases":["SAN VICENTE DEL RASPEIG/SANT VICENT DEL RASPEIG","ALICANTE/ALACANT"]},{"code":"60914","name":"UNIVERSIDAD DE ALICANTE","aliases":["ALICANTE/ALACANT"]},{"code":"61005","name":"HELLÍN","aliases":["ALBACETE"]},{"code":"61012","name":"CIEZA","aliases":["MURCIA"]},{"code":"61015","name":"ARCHENA-FORTUNA","aliases":["MOLINA DE SEGURA","MURCIA"]},{"code":"61200","name":"MURCIA DEL CARMEN","aliases":["MURCIA"]},{"code":"61303","name":"BALSICAS-MAR MENOR","aliases":["TORRE-PACHECO","MURCIA"]},{"code":"61304","name":"TORRE-PACHECO","aliases":["MURCIA"]},{"code":"61307","name":"CARTAGENA","aliases":["MURCIA"]},{"code":"62001","name":"BENIEL","aliases":["MURCIA"]},{"code":"62002","name":"ORIHUELA-MIGUEL HERNÁNDEZ","aliases":["ORIHUELA","ALICANTE/ALACANT"]},{"code":"62003","name":"CALLOSA DE SEGURA","aliases":["ALICANTE/ALACANT"]},{"code":"62100","name":"SAN ISIDRO-ALBATERA-CATRAL","aliases":["SAN ISIDRO","ALICANTE/ALACANT"]},{"code":"62101","name":"CREVILLENTE","aliases":["CREVILLENT","ALICANTE/ALACANT"]},{"code":"62102","name":"ELCHE/ELX-CARRÚS","aliases":["ELCHE/ELX","ALICANTE/ALACANT"]},{"code":"62103","name":"ELCHE/ELX-PARC","aliases":["ELCHE/ELX","ALICANTE/ALACANT"]},{"code":"62104","name":"TORRELLANO","aliases":["ELCHE/ELX","ALICANTE/ALACANT"]},{"code":"62109","name":"SANT GABRIEL","aliases":["ALICANTE/ALACANT"]},{"code":"64007","name":"LENOVA-MANUEL","aliases":["MANUEL","VALENCIA/VALÈNCIA"]},{"code":"64100","name":"XÀTIVA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64102","name":"LA POBLA LLARGA","aliases":["POBLA LLARGA (LA)","VALENCIA/VALÈNCIA"]},{"code":"64103","name":"CARCAIXENT","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64104","name":"ALZIRA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64105","name":"ALGEMESÍ","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64107","name":"BENIFAIÓ","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64200","name":"SILLA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64201","name":"CATARROJA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64202","name":"MASSANASSA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"64203","name":"ALFAFAR-BENETÚSSER","aliases":["ALFAFAR","VALENCIA/VALÈNCIA"]},{"code":"65000","name":"VALÈNCIA-ESTACIÓ DEL NORD","aliases":["VALENCIA","VALENCIA/VALÈNCIA"]},{"code":"65001","name":"ROCA-CÚPER","aliases":["MELIANA","VALENCIA/VALÈNCIA"]},{"code":"65002","name":"VALÈNCIA-LA FONT DE SANT LLUÍS","aliases":["VALENCIA","VALENCIA/VALÈNCIA"]},{"code":"65003","name":"VALÈNCIA-CABANYAL","aliases":["VALENCIA","VALENCIA/VALÈNCIA"]},{"code":"65005","name":"ALBUIXECH","aliases":["VALENCIA/VALÈNCIA"]},{"code":"65006","name":"MASSALFASSAR","aliases":["VALENCIA/VALÈNCIA"]},{"code":"65007","name":"EL PUIG","aliases":["PUIG DE SANTA MARIA (EL)","VALENCIA/VALÈNCIA"]},{"code":"65008","name":"PUÇOL","aliases":["VALENCIA/VALÈNCIA"]},{"code":"65200","name":"SAGUNT","aliases":["SAGUNTO/SAGUNT","VALENCIA/VALÈNCIA"]},{"code":"65201","name":"LES VALLS","aliases":["SAGUNTO/SAGUNT","VALENCIA/VALÈNCIA"]},{"code":"65202","name":"ALMENARA","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65203","name":"LA LLOSA","aliases":["LLOSA (LA)","CASTELLÓN/CASTELLÓ"]},{"code":"65204","name":"CHILCHES/XILXES","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65205","name":"MONCOFA","aliases":["NULES","CASTELLÓN/CASTELLÓ","moncofar"]},{"code":"65206","name":"NULES LA VILLAVELLA","aliases":["NULES","CASTELLÓN/CASTELLÓ"]},{"code":"65207","name":"BURRIANA-ALQUERÍAS NIÑO PERDIDO","aliases":["BORRIANA/BURRIANA","CASTELLÓN/CASTELLÓ"]},{"code":"65208","name":"VILA-REAL","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65209","name":"ALMASSORA","aliases":["ALMAZORA/ALMASSORA","CASTELLÓN/CASTELLÓ"]},{"code":"65300","name":"CASTELLÓ DE LA PLANA","aliases":["CASTELLÓN DE LA PLANA/CASTELLÓ DE LA PLANA","CASTELLÓN/CASTELLÓ"]},{"code":"65304","name":"ORPESA","aliases":["OROPESA DEL MAR/ORPESA","CASTELLÓN/CASTELLÓ"]},{"code":"65306","name":"TORREBLANCA","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65308","name":"ALCALÁ DE CHIVERT","aliases":["ALCALÀ DE XIVERT","CASTELLÓN/CASTELLÓ"]},{"code":"65311","name":"BENICARLÓ-PEÑÍSCOLA","aliases":["BENICARLÓ","CASTELLÓN/CASTELLÓ"]},{"code":"65312","name":"VINARÒS","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"65314","name":"ULLDECONA-ALCANAR-LA SÉNIA","aliases":["ULLDECONA","TARRAGONA"]},{"code":"65318","name":"BENICÀSSIM","aliases":["BENICASIM/BENICÀSSIM","CASTELLÓN/CASTELLÓ"]},{"code":"65400","name":"TORTOSA","aliases":["TARRAGONA"]},{"code":"65401","name":"CAMP-REDÓ","aliases":["TORTOSA","TARRAGONA"]},{"code":"65402","name":"L'ALDEA-AMPOSTA-TORTOSA","aliases":["ALDEA (L')","TARRAGONA"]},{"code":"65403","name":"CAMARLES-DELTEBRE","aliases":["CAMARLES","TARRAGONA"]},{"code":"65404","name":"L'AMPOLLA-EL PERELLÓ-DELTEBRE","aliases":["AMPOLLA (L')","TARRAGONA"]},{"code":"65405","name":"L'AMETLLA DE MAR","aliases":["AMETLLA DE MAR (L')","TARRAGONA"]},{"code":"65411","name":"SALOU-PORT AVENTURA","aliases":["SALOU","TARRAGONA"]},{"code":"65420","name":"L'HOSPITALET DE L'INFANT","aliases":["VANDELLÒS I L'HOSPITALET DE L'INFANT","TARRAGONA"]},{"code":"65422","name":"CAMBRILS","aliases":["TARRAGONA"]},{"code":"67004","name":"MARÍA DE HUERVA","aliases":["ZARAGOZA"]},{"code":"67007","name":"ARAÑALES DE MUEL","aliases":["MUEL","ZARAGOZA"]},{"code":"67009","name":"LONGARES","aliases":["ZARAGOZA"]},{"code":"67010","name":"CARIÑENA","aliases":["ZARAGOZA"]},{"code":"67011","name":"ENCINACORBA","aliases":["ZARAGOZA"]},{"code":"67013","name":"VILLARREAL DE HUERVA","aliases":["ZARAGOZA"]},{"code":"67014","name":"VILLADOZ","aliases":["ZARAGOZA"]},{"code":"67015","name":"BADULES","aliases":["ZARAGOZA"]},{"code":"67016","name":"VILLAHERMOSA","aliases":["VILLAHERMOSA DEL CAMPO","TERUEL"]},{"code":"67017","name":"FERRERUELA","aliases":["FERRERUELA DE HUERVA","TERUEL"]},{"code":"67018","name":"CUENCABUENA","aliases":["CALAMOCHA","TERUEL"]},{"code":"67019","name":"LECHAGO","aliases":["CALAMOCHA","TERUEL"]},{"code":"67020","name":"NAVARRETE","aliases":["CALAMOCHA","TERUEL"]},{"code":"67021","name":"CALAMOCHA","aliases":["TERUEL"]},{"code":"67100","name":"CAMINREAL-FUENTES CLARAS","aliases":["CAMINREAL","TERUEL"]},{"code":"67101","name":"TORRIJO DEL CAMPO","aliases":["TERUEL"]},{"code":"67103","name":"VILLAFRANCA DEL CAMPO","aliases":["TERUEL"]},{"code":"67105","name":"SANTA EULALIA DEL CAMPO","aliases":["SANTA EULALIA","TERUEL"]},{"code":"67107","name":"CELLA","aliases":["TERUEL"]},{"code":"67113","name":"MONREAL DEL CAMPO","aliases":["TERUEL"]},{"code":"67200","name":"TERUEL","aliases":[]},{"code":"67203","name":"PUEBLA DE VALVERDE","aliases":["PUEBLA DE VALVERDE (LA)","TERUEL"]},{"code":"67205","name":"SARRIÓN","aliases":["TERUEL"]},{"code":"67206","name":"MORA DE RUBIELOS","aliases":["ALBENTOSA","TERUEL"]},{"code":"67207","name":"RUBIELOS DE MORA","aliases":["TERUEL"]},{"code":"67208","name":"BARRACAS","aliases":["CASTELLÓN/CASTELLÓ"]},{"code":"67215","name":"SEGORBE-CIUDAD","aliases":["SEGORBE","CASTELLÓN/CASTELLÓ"]},{"code":"69001","name":"GENOVÉS","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69002","name":"BENIGÀNIM","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69003","name":"LA POBLA DEL DUC","aliases":["POBLA DEL DUC (LA)","VALENCIA/VALÈNCIA"]},{"code":"69004","name":"MONTABERNER","aliases":["MONTAVERNER","VALENCIA/VALÈNCIA"]},{"code":"69005","name":"BUFALÍ","aliases":["BUFALI","VALENCIA/VALÈNCIA"]},{"code":"69006","name":"ALBAIDA","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69007","name":"AGULLENT","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69008","name":"ONTINYENT","aliases":["VALENCIA/VALÈNCIA"]},{"code":"69009","name":"AGRES","aliases":["ALICANTE/ALACANT"]},{"code":"69010","name":"COCENTAINA","aliases":["ALICANTE/ALACANT"]},{"code":"69011","name":"ALCOI","aliases":["ALCOY/ALCOI","ALICANTE/ALACANT"]},{"code":"70002","name":"Asamblea de Madrid-Entrevías","aliases":["MADRID","asamblea","entrevias","entrevías"]},{"code":"70003","name":"El Pozo","aliases":["MADRID","el pozo"]},{"code":"70001","name":"Vallecas","aliases":["MADRID","vallecas","vallecas industrial"]},{"code":"70100","name":"Vicálvaro","aliases":["MADRID","vicalvaro","vicálvaro"]},{"code":"70101","name":"San Fernando de Henares","aliases":["COSLADA","MADRID","san fernando","san fernando de henares"]},{"code":"70102","name":"Torrejón de Ardoz","aliases":["MADRID","torrejon","torrejón","torrejon de ardoz"]},{"code":"70103","name":"ALCALÁ DE HENARES","aliases":["MADRID"]},{"code":"70104","name":"Meco","aliases":["MADRID","meco"]},{"code":"70105","name":"Azuqueca","aliases":["AZUQUECA DE HENARES","GUADALAJARA","azuqueca"]},{"code":"70107","name":"ALCALÁ DE HENARES-UNIVERSIDAD","aliases":["ALCALÁ DE HENARES","MADRID"]},{"code":"70108","name":"COSLADA","aliases":["MADRID"]},{"code":"70109","name":"Santa Eugenia","aliases":["MADRID","santa eugenia"]},{"code":"70111","name":"La Garena","aliases":["ALCALÁ DE HENARES","MADRID","la garena"]},{"code":"70112","name":"Soto del Henares","aliases":["YUNQUERA DE HENARES","MADRID","soto del henares"]},{"code":"70106","name":"Guadalajara","aliases":["guadalajara"]},{"code":"70202","name":"YUNQUERA DE HENARES","aliases":["GUADALAJARA"]},{"code":"70204","name":"HUMANES DE MOHERNANDO","aliases":["HUMANES","GUADALAJARA"]},{"code":"70207","name":"ESPINOSA DE HENARES","aliases":["COPERNAL","GUADALAJARA"]},{"code":"70208","name":"CARRASCOSA DE HENARES","aliases":["ESPINOSA DE HENARES","GUADALAJARA"]},{"code":"70209","name":"JADRAQUE","aliases":["GUADALAJARA"]},{"code":"70210","name":"MATILLAS","aliases":["GUADALAJARA"]},{"code":"70300","name":"BAIDES","aliases":["GUADALAJARA"]},{"code":"70302","name":"SIGÜENZA","aliases":["GUADALAJARA"]},{"code":"70400","name":"TORRALBA","aliases":["MEDINACELI","SORIA"]},{"code":"70401","name":"MEDINACELI","aliases":["SORIA"]},{"code":"70403","name":"ARCOS DE JALÓN","aliases":["SORIA"]},{"code":"70404","name":"SANTA MARÍA DE HUERTA","aliases":["SORIA"]},{"code":"70405","name":"MONREAL DE ARIZA","aliases":["ZARAGOZA"]},{"code":"70500","name":"ARIZA","aliases":["ZARAGOZA"]},{"code":"70501","name":"CETINA","aliases":["ZARAGOZA"]},{"code":"70502","name":"ALHAMA DE ARAGÓN","aliases":["ZARAGOZA"]},{"code":"70503","name":"BUBIERCA","aliases":["ZARAGOZA"]},{"code":"70504","name":"ATECA","aliases":["ZARAGOZA"]},{"code":"70505","name":"TERRER","aliases":["ZARAGOZA"]},{"code":"70600","name":"CALATAYUD","aliases":["ZARAGOZA"]},{"code":"70602","name":"EMBID DE JALÓN","aliases":["CALATAYUD","ZARAGOZA"]},{"code":"70603","name":"PARACUELLOS-SABIÑÁN","aliases":["PARACUELLOS DE LA RIBERA","ZARAGOZA"]},{"code":"70604","name":"SABIÑÁN","aliases":["ZARAGOZA"]},{"code":"70605","name":"MORÉS","aliases":["ZARAGOZA"]},{"code":"70606","name":"PURROY","aliases":["MORÉS","ZARAGOZA"]},{"code":"70607","name":"MORATA DE JALÓN","aliases":["ZARAGOZA"]},{"code":"70700","name":"RICLA-LA ALMUNIA","aliases":["RICLA","ZARAGOZA"]},{"code":"70701","name":"CALATORAO","aliases":["ZARAGOZA"]},{"code":"70702","name":"SALILLAS DE JALÓN","aliases":["ZARAGOZA"]},{"code":"70703","name":"ÉPILA","aliases":["ZARAGOZA"]},{"code":"70704","name":"RUEDA DE JALÓN-LUMPIAQUE","aliases":["RUEDA DE JALÓN","ZARAGOZA"]},{"code":"70705","name":"PLASENCIA DE JALÓN","aliases":["ZARAGOZA"]},{"code":"70706","name":"GRISÉN","aliases":["ZARAGOZA"]},{"code":"70800","name":"CASETAS","aliases":["ZARAGOZA"]},{"code":"70801","name":"UTEBO","aliases":["ZARAGOZA"]},{"code":"70806","name":"ZARAGOZA-PORTILLO","aliases":["ZARAGOZA"]},{"code":"70807","name":"ZARAGOZA-GOYA","aliases":["ZARAGOZA","zaragoza goya","goya","zaragoza-goya (apd)"]},{"code":"71100","name":"ZARAGOZA-MIRAFLORES","aliases":["ZARAGOZA"]},{"code":"71103","name":"FUENTES DE EBRO","aliases":["ZARAGOZA"]},{"code":"71105","name":"QUINTO","aliases":["ZARAGOZA"]},{"code":"71108","name":"LA ZAIDA-SÁSTAGO","aliases":["ZAIDA (LA)","ZARAGOZA"]},{"code":"71200","name":"LA PUEBLA DE HÍJAR","aliases":["PUEBLA DE HÍJAR (LA)","TERUEL"]},{"code":"71201","name":"SAMPER","aliases":["SAMPER DE CALANDA","TERUEL"]},{"code":"71204","name":"CASPE","aliases":["ZARAGOZA"]},{"code":"71205","name":"VAL DE PILAS","aliases":["CASPE","ZARAGOZA"]},{"code":"71206","name":"FABARA","aliases":["ZARAGOZA"]},{"code":"71207","name":"NONASPE","aliases":["ZARAGOZA"]},{"code":"71208","name":"FAIÓ-LA POBLA DE MASSALUCA","aliases":["POBLA DE MASSALUCA (LA)","TARRAGONA"]},{"code":"71209","name":"RIBA-ROJA D'EBRE","aliases":["TARRAGONA"]},{"code":"71210","name":"FLIX","aliases":["TARRAGONA"]},{"code":"71211","name":"ASCÓ","aliases":["TARRAGONA"]},{"code":"71300","name":"MÓRA LA NOVA","aliases":["TARRAGONA"]},{"code":"71302","name":"CAPÇANES","aliases":["TARRAGONA"]},{"code":"71303","name":"MARÇÀ-FALSET","aliases":["MARÇÀ","TARRAGONA"]},{"code":"71304","name":"PRADELL","aliases":["PRADELL DE LA TEIXETA","TARRAGONA"]},{"code":"71305","name":"DUESAIGÜES-L'ARGENTERA","aliases":["ARGENTERA (L')","TARRAGONA"]},{"code":"71306","name":"RIUDECANYES-BOTARELL","aliases":["RIUDECANYES","TARRAGONA"]},{"code":"71307","name":"LES BORGES DEL CAMP","aliases":["BORGES DEL CAMP (LES)","TARRAGONA"]},{"code":"71400","name":"REUS","aliases":["TARRAGONA"]},{"code":"71401","name":"VILA-SECA","aliases":["TARRAGONA"]},{"code":"71500","name":"TARRAGONA","aliases":[]},{"code":"71502","name":"ALTAFULLA-TAMARIT","aliases":["TARRAGONA"]},{"code":"71503","name":"TORREDEMBARRA","aliases":["TARRAGONA"]},{"code":"71600","name":"SANT VICENÇ DE CALDERS","aliases":["VENDRELL (EL)","TARRAGONA"]},{"code":"71700","name":"VILANOVA I LA GELTRÚ","aliases":["BARCELONA"]},{"code":"71801","name":"BARCELONA-SANTS","aliases":["BARCELONA"]},{"code":"71802","name":"BARCELONA-PASSEIG DE GRÀCIA","aliases":["BARCELONA"]},{"code":"72101","name":"RODA DE MAR","aliases":["RODA DE BARÀ","TARRAGONA"]},{"code":"73001","name":"PUIGVERD DE LLEIDA-ARTESA","aliases":["PUIGVERD DE LLEIDA","LLEIDA"]},{"code":"73002","name":"JUNEDA","aliases":["LLEIDA"]},{"code":"73003","name":"LES BORGES BLANQUES","aliases":["BORGES BLANQUES (LES)","LLEIDA"]},{"code":"73004","name":"LA FLORESTA","aliases":["FLORESTA (LA)","LLEIDA"]},{"code":"73005","name":"VINAIXA","aliases":["LLEIDA"]},{"code":"73006","name":"VIMBODÍ I POBLET","aliases":["TARRAGONA"]},{"code":"73007","name":"L'ESPLUGA DE FRANCOLÍ","aliases":["ESPLUGA DE FRANCOLÍ (L')","TARRAGONA"]},{"code":"73008","name":"MONTBLANC","aliases":["TARRAGONA"]},{"code":"73009","name":"VILAVERD","aliases":["TARRAGONA"]},{"code":"73010","name":"LA RIBA","aliases":["RIBA (LA)","TARRAGONA"]},{"code":"73100","name":"LA PLANA-PICAMOIXONS","aliases":["VALLS","TARRAGONA"]},{"code":"73101","name":"ALCOVER","aliases":["TARRAGONA"]},{"code":"73102","name":"LA SELVA DEL CAMP","aliases":["SELVA DEL CAMP (LA)","TARRAGONA"]},{"code":"74200","name":"HUESCA","aliases":[]},{"code":"74204","name":"AYERBE","aliases":["HUESCA"]},{"code":"74206","name":"RIGLOS","aliases":["PEÑAS DE RIGLOS (LAS)","HUESCA"]},{"code":"74207","name":"SANTA MARÍA Y LA PEÑA","aliases":["PEÑAS DE RIGLOS (LAS)","HUESCA"]},{"code":"74208","name":"ANZÁNIGO","aliases":["JACA","HUESCA"]},{"code":"74209","name":"CALDEARENAS-AQUILUÉ","aliases":["CALDEARENAS","HUESCA"]},{"code":"74211","name":"SABIÑÁNIGO","aliases":["HUESCA"]},{"code":"74213","name":"JACA","aliases":["HUESCA"]},{"code":"74214","name":"CASTIELLO-PUEBLO","aliases":["CASTIELLO DE JACA","HUESCA"]},{"code":"74216","name":"VILLANÚA","aliases":["HUESCA"]},{"code":"74217","name":"CANFRANC","aliases":["HUESCA"]},{"code":"75101","name":"ALCOLETGE","aliases":["LLEIDA"]},{"code":"75102","name":"VILANOVA DE LA BARCA","aliases":["LLEIDA"]},{"code":"75103","name":"TÉRMENS","aliases":["LLEIDA"]},{"code":"75104","name":"VALLFOGONA DE BALAGUER","aliases":["LLEIDA"]},{"code":"75105","name":"BALAGUER","aliases":["LLEIDA"]},{"code":"75106","name":"GERB","aliases":["OS DE BALAGUER","LLEIDA"]},{"code":"75107","name":"SANT LLORENÇ DE MONTGAI","aliases":["CAMARASA","LLEIDA"]},{"code":"75108","name":"VILANOVA DE LA SAL","aliases":["AVELLANES I SANTA LINYA (LES)","LLEIDA"]},{"code":"75109","name":"SANTA LIÑA","aliases":["AVELLANES I SANTA LINYA (LES)","LLEIDA"]},{"code":"75110","name":"AGER","aliases":["ÀGER","LLEIDA"]},{"code":"75111","name":"CELLERS-LLIMIANA","aliases":["CASTELL DE MUR","LLEIDA"]},{"code":"75112","name":"GUARDIA DE TREMP","aliases":["SANT ESTEVE DE LA SARGA","LLEIDA"]},{"code":"75113","name":"PALAU-PUIGCERCOS","aliases":["TREMP","LLEIDA"]},{"code":"75114","name":"TREMP","aliases":["LLEIDA"]},{"code":"75115","name":"SALAS DE PALLARS","aliases":["SALÀS DE PALLARS","LLEIDA"]},{"code":"75116","name":"LA POBLA DE SEGUR","aliases":["POBLA DE SEGUR (LA)","LLEIDA"]},{"code":"76001","name":"SALOMÓ","aliases":["TARRAGONA"]},{"code":"76002","name":"VILABELLA","aliases":["TARRAGONA"]},{"code":"76003","name":"NULLES-BRÀFIM","aliases":["NULLES","TARRAGONA"]},{"code":"76004","name":"VALLS","aliases":["TARRAGONA"]},{"code":"78005","name":"VILLANUEVA DE GÁLLEGO","aliases":["ZARAGOZA"]},{"code":"78200","name":"TARDIENTA","aliases":["HUESCA"]},{"code":"78201","name":"GRAÑÉN","aliases":["HUESCA"]},{"code":"78203","name":"SARIÑENA","aliases":["HUESCA"]},{"code":"78301","name":"MONZÓN-RÍO CINCA","aliases":["MONZÓN","HUESCA"]},{"code":"78302","name":"BINÉFAR","aliases":["HUESCA"]},{"code":"78400","name":"LLEIDA-PIRINEUS","aliases":["LLEIDA"]},{"code":"78402","name":"BELL-LLOC D'URGELL","aliases":["LLEIDA"]},{"code":"78403","name":"MOLLERUSSA","aliases":["LLEIDA"]},{"code":"78404","name":"GOLMÉS","aliases":["LLEIDA"]},{"code":"78405","name":"CASTELLNOU DE SEANA","aliases":["LLEIDA"]},{"code":"78406","name":"BELLPUIG","aliases":["LLEIDA"]},{"code":"78407","name":"ANGLESOLA","aliases":["LLEIDA"]},{"code":"78408","name":"TÀRREGA","aliases":["LLEIDA"]},{"code":"78500","name":"CERVERA","aliases":["LLEIDA"]},{"code":"78501","name":"SANT GUIM DE FREIXENET","aliases":["LLEIDA"]},{"code":"78502","name":"SANT MARTÍ SESGUEIOLES","aliases":["BARCELONA"]},{"code":"78503","name":"CALAF","aliases":["BARCELONA"]},{"code":"78504","name":"SEGUERS-SANT PERE SALLAVINERA","aliases":["SANT PERE SALLAVINERA","BARCELONA"]},{"code":"78505","name":"AGUILAR DE SEGARRA","aliases":["BARCELONA"]},{"code":"78506","name":"RAJADELL","aliases":["BARCELONA"]},{"code":"78600","name":"MANRESA","aliases":["BARCELONA"]},{"code":"78604","name":"SANT VICENÇ DE CASTELLET","aliases":["BARCELONA"]},{"code":"78700","name":"TERRASSA ESTACIÓ DEL NORD","aliases":["TERRASSA","BARCELONA","terrassa"]},{"code":"79004","name":"BARCELONA-SANT ANDREU","aliases":["BARCELONA"]},{"code":"79009","name":"BARCELONA-EL CLOT","aliases":["BARCELONA"]},{"code":"79100","name":"GRANOLLERS-CENTRE","aliases":["GRANOLLERS","BARCELONA"]},{"code":"79104","name":"SANT CELONI","aliases":["BARCELONA"]},{"code":"79105","name":"GUALBA","aliases":["BARCELONA"]},{"code":"79106","name":"RIELLS I VIABREA-BREDA","aliases":["RIELLS I VIABREA","GIRONA"]},{"code":"79107","name":"HOSTALRIC","aliases":["GIRONA"]},{"code":"79200","name":"MAÇANET-MASSANES","aliases":["MASSANES","GIRONA"]},{"code":"79202","name":"SILS","aliases":["GIRONA"]},{"code":"79203","name":"CALDES DE MALAVELLA","aliases":["GIRONA"]},{"code":"79204","name":"RIUDELLOTS","aliases":["RIUDELLOTS DE LA SELVA","GIRONA"]},{"code":"79205","name":"FORNELLS DE LA SELVA","aliases":["GIRONA"]},{"code":"79300","name":"GIRONA","aliases":[]},{"code":"79301","name":"CELRÀ","aliases":["GIRONA"]},{"code":"79302","name":"BORDILS-JUIÀ","aliases":["BORDILS","GIRONA"]},{"code":"79303","name":"FLAÇÀ","aliases":["GIRONA"]},{"code":"79304","name":"SANT JORDI DESVALLS","aliases":["GIRONA"]},{"code":"79305","name":"CAMALLERA","aliases":["SAUS, CAMALLERA I LLAMPAIES","GIRONA"]},{"code":"79306","name":"SANT MIQUEL DE FLUVIÀ","aliases":["GIRONA"]},{"code":"79308","name":"VILAMALLA","aliases":["GIRONA"]},{"code":"79309","name":"FIGUERES","aliases":["GIRONA"]},{"code":"79311","name":"VILAJUÏGA","aliases":["GIRONA"]},{"code":"79312","name":"LLANÇÀ","aliases":["GIRONA"]},{"code":"79314","name":"COLERA","aliases":["GIRONA"]},{"code":"79315","name":"PORTBOU","aliases":["GIRONA"]},{"code":"79316","name":"CERBÈRE","aliases":["PORTBOU","GIRONA"]},{"code":"79400","name":"BARCELONA ESTACIÓ DE FRANÇA","aliases":["BARCELONA"]},{"code":"80001","name":"ALTSASU-PUEBLO","aliases":["ALTSASU/ALSASUA","NAVARRA"]},{"code":"80003","name":"ETXARRI-ARANATZ","aliases":["NAVARRA"]},{"code":"80005","name":"UHARTE-ARAKIL","aliases":["NAVARRA"]},{"code":"80100","name":"PAMPLONA/IRUÑA","aliases":["NAVARRA","pamplona"]},{"code":"80108","name":"TAFALLA","aliases":["NAVARRA"]},{"code":"80109","name":"OLITE-ERRIBERRI","aliases":["OLITE/ERRIBERRI","NAVARRA"]},{"code":"80114","name":"MARCILLA DE NAVARRA","aliases":["MARCILLA","NAVARRA"]},{"code":"80115","name":"VILLAFRANCA DE NAVARRA","aliases":["VILLAFRANCA","NAVARRA"]},{"code":"81002","name":"HARO","aliases":["RIOJA, LA"]},{"code":"81100","name":"LOGROÑO","aliases":["RIOJA, LA"]},{"code":"81102","name":"AGONCILLO","aliases":["RIOJA, LA"]},{"code":"81105","name":"ALCANADRE","aliases":["RIOJA, LA"]},{"code":"81106","name":"FÉCULAS-NAVARRA","aliases":["LODOSA","NAVARRA"]},{"code":"81108","name":"CALAHORRA","aliases":["RIOJA, LA"]},{"code":"81109","name":"RINCÓN DE SOTO","aliases":["RIOJA, LA"]},{"code":"81110","name":"ALFARO","aliases":["RIOJA, LA"]},{"code":"81200","name":"CASTEJÓN DE EBRO","aliases":["CASTEJÓN","NAVARRA"]},{"code":"81202","name":"TUDELA DE NAVARRA","aliases":["TUDELA","NAVARRA"]},{"code":"81203","name":"RIBAFORADA","aliases":["NAVARRA"]},{"code":"81205","name":"CORTES DE NAVARRA","aliases":["CORTES","NAVARRA"]},{"code":"81206","name":"GALLUR","aliases":["ZARAGOZA"]},{"code":"81207","name":"LUCENI","aliases":["ZARAGOZA"]},{"code":"81208","name":"PEDROLA","aliases":["ZARAGOZA"]},{"code":"81209","name":"CABAÑAS DE EBRO","aliases":["ZARAGOZA"]},{"code":"81210","name":"ALAGÓN","aliases":["ZARAGOZA"]},{"code":"82100","name":"SORIA","aliases":[]},{"code":"84101","name":"ALMAZÁN-VILLA","aliases":["ALMAZÁN","SORIA"]},{"code":"84103","name":"TARDELCUENDE","aliases":["SORIA"]},{"code":"84104","name":"QUINTANA REDONDA","aliases":["SORIA"]},{"code":"87088","name":"NARBONNE","aliases":["NARBONA","DESCONOCIDO"]},{"code":"87089","name":"MARSEILLE ST CHARLES","aliases":["MARSEILLE"]},{"code":"87173","name":"MONTPELLIER SAINT-ROCH","aliases":["MONTPELLIER","DESCONOCIDO"]},{"code":"87302","name":"NIMES","aliases":[]},{"code":"87303","name":"LYON PART DIEU","aliases":["LYON"]},{"code":"87374","name":"PERPIGNAN","aliases":[]},{"code":"87810","name":"VALENCE TGV","aliases":["VALENCE"]},{"code":"87814","name":"AVIGNON TGV","aliases":["AVIGNON"]},{"code":"87912","name":"AIX EN PROVENCE TGV","aliases":["AIX EN PROVENCE"]},{"code":"92102","name":"TOLEDO","aliases":[]},{"code":"94002","name":"DAIMIEL","aliases":["CIUDAD REAL"]},{"code":"94004","name":"ALMAGRO","aliases":["CIUDAD REAL"]},{"code":"94021","name":"NINE","aliases":[]},{"code":"94033","name":"VIANA DA CASTELO","aliases":[]},{"code":"94346","name":"PORTO CAMPANHA - O PORTO CAMPAÑA","aliases":["O PORTO CAMPAÑA"]},{"code":"96122","name":"BARCELOS","aliases":[]},{"code":"97004","name":"PORTAVE.FERRARI","aliases":["DESCONOCIDO","BARCELONA"]},{"code":"97015","name":"PORTAVENTURA","aliases":["SALOU","BARCELONA"]},{"code":"97017","name":"SANT SADURNÍ D'ANOIA","aliases":["BARCELONA"]},{"code":"97018","name":"CARIBE PARK","aliases":["SALOU","BARCELONA"]},{"code":"97100","name":"Pitis","aliases":["MADRID","pitis"]},{"code":"97200","name":"Mirasierra","aliases":["CANENCIA","MADRID","mirasierra"]},{"code":"97201","name":"Ramón y Cajal","aliases":["MADRID","ramon y cajal","ramon"]},{"code":"99000","name":"MADRID CERCANÍAS","aliases":["MADRID"]},{"code":"99117","name":"OURENSE-TURÍSTICO","aliases":["OURENSE"]},{"code":"99143","name":"A CORUÑA-TURÍSTICO","aliases":["CORUÑA (A)","CORUÑA, A"]},{"code":"99159","name":"SANTIAGO-TURÍSTICO","aliases":["SANTIAGO DE COMPOSTELA","CORUÑA, A"]},{"code":"99161","name":"PONTEVEDRA-TURÍSTICO","aliases":["PONTEVEDRA"]},{"code":"99173","name":"OVIEDO-TUR","aliases":["OVIEDO","ASTURIAS"]},{"code":"99174","name":"FERROL-TUR","aliases":["FERROL","CORUÑA, A"]},{"code":"99180","name":"SORIA ENLACE AVE","aliases":["SORIA"]},{"code":"99183","name":"MADRID EMBAJADORES MuF","aliases":["MADRID"]},{"code":"51419","name":"Río Arillo","aliases":["rio arillo","río arillo"]},{"code":"51438","name":"La Ardila","aliases":["la ardila"]},{"code":"51437","name":"Santo Entierro","aliases":["santo entierro"]},{"code":"51439","name":"Plaza del Carmen","aliases":["plaza del carmen"]},{"code":"51440","name":"Compañía de María","aliases":["compania maria","compania de maria","compañía de maría"]},{"code":"51441","name":"Plaza del Rey","aliases":["plaza del rey"]},{"code":"51442","name":"Plaza de la Iglesia","aliases":["plaza iglesia","plaza de la iglesia"]},{"code":"51443","name":"Venta de Vargas","aliases":["venta vargas","venta de vargas"]},{"code":"51444","name":"Tres Caminos","aliases":["tres caminos"]},{"code":"51418","name":"Pinar de los Franceses","aliases":["pinar franceses"]},{"code":"51445","name":"Marquesado","aliases":["marquesado"]},{"code":"51447","name":"Nuestra Señora de los Remedios","aliases":["nuestra senora remedios","ntra sra de los remedios","remedios"]},{"code":"51448","name":"Reyes Católicos","aliases":["reyes catolicos","reyes católicos"]},{"code":"51449","name":"La Hoya","aliases":["la hoya"]},{"code":"51450","name":"Pelagatos","aliases":["pelagatos"]},{"code":"17001","name":"Fuencarral","aliases":["fuencarral"]},{"code":"17003","name":"El Goloso","aliases":["goloso"]},{"code":"17004","name":"Tres Cantos","aliases":["tres cantos","trescantos"]},{"code":"17005","name":"Colmenar Viejo","aliases":["colmenar","colmenar viejo"]},{"code":"17009","name":"Universidad-Cantoblanco","aliases":["cantoblanco","universidad cantoblanco","universidad"]},{"code":"98003","name":"Fuente de la Mora","aliases":["fuente de la mora"]},{"code":"98304","name":"Valdebebas","aliases":["valdebebas"]},{"code":"98305","name":"Aeropuerto T4","aliases":["aeropuerto t4","t4","aeropuerto"]},{"code":"19001","name":"Universidad P. Comillas","aliases":["universidad comillas","comillas"]},{"code":"19002","name":"Valdelasfuentes","aliases":["valdelasfuentes"]},{"code":"19003","name":"Alcobendas-San Sebastián de los Reyes","aliases":["alcobendas","san sebastian","san sebastian de los reyes","alcobendas/san sebastián"]},{"code":"10007","name":"Majadahonda","aliases":["majadahonda"]},{"code":"35009","name":"Zarzaquemada","aliases":["zarzaquemada"]},{"code":"35010","name":"La Serna-Fuenlabrada","aliases":["la serna","la serna fuenlabrada"]},{"code":"35011","name":"Parque Polvoranca","aliases":["parque polvoranca","polvoranca"]},{"code":"35600","name":"Aluche","aliases":["aluche"]},{"code":"35601","name":"Fanjul","aliases":["fanjul"]},{"code":"35602","name":"Las Águilas","aliases":["las aguilas","águilas"]},{"code":"35603","name":"Cuatro Vientos","aliases":["cuatro vientos"]},{"code":"35604","name":"San José de Valderas","aliases":["san jose de valderas","san jose"]},{"code":"35605","name":"Alcorcón","aliases":["alcorcon","alcorcón"]},{"code":"35606","name":"Móstoles","aliases":["mostoles","móstoles"]},{"code":"35607","name":"Móstoles-El Soto","aliases":["mostoles el soto","el soto"]},{"code":"35608","name":"Laguna","aliases":["laguna"]},{"code":"35609","name":"Embajadores","aliases":["embajadores"]},{"code":"35610","name":"Las Retamas","aliases":["las retamas"]},{"code":"35701","name":"Méndez Álvaro","aliases":["mendez alvaro","méndez álvaro"]},{"code":"35702","name":"Doce de Octubre","aliases":["doce de octubre"]},{"code":"35703","name":"Orcasitas","aliases":["orcasitas"]},{"code":"35704","name":"Puente Alcocer","aliases":["puente alcocer"]},{"code":"37001","name":"Villaverde Alto","aliases":["villaverde alto"]},{"code":"37002","name":"Getafe-Centro","aliases":["getafe centro","getafe"]},{"code":"37010","name":"Las Margaritas-Universidad","aliases":["las margaritas","las margaritas universidad"]},{"code":"37011","name":"Getafe-Sector 3","aliases":["getafe sector 3","sector 3"]},{"code":"37012","name":"Parla","aliases":["parla"]},{"code":"60100","name":"Villaverde Bajo","aliases":["villaverde bajo"]},{"code":"60101","name":"San Cristóbal Industrial","aliases":["san cristobal industrial"]},{"code":"60102","name":"Getafe Industrial","aliases":["getafe industrial"]},{"code":"60103","name":"Pinto","aliases":["pinto"]},{"code":"60104","name":"Valdemoro","aliases":["valdemoro"]},{"code":"60105","name":"Ciempozuelos","aliases":["ciempozuelos"]},{"code":"60107","name":"San Cristóbal de los Ángeles","aliases":["san cristobal de los angeles","san cristobal"]},{"code":"18004","name":"Madrid-Delicias","aliases":["delicias"]},{"code":"18005","name":"Madrid-Pirámides","aliases":["piramides","pirámides"]},{"code":"18101","name":"Madrid-Sol","aliases":["sol"]},{"code":"51446","name":"Alameda Solano","aliases":["alameda solano"]},{"code":"94563","name":"Vilar Formoso","aliases":["vilar formoso","vilar","formoso","vilar-formoso","VF"]},{"code":"15205","name":"Ablaña","aliases":[]},{"code":"05019","name":"Antequera","aliases":[]},{"code":"79600","name":"Arenys de Mar","aliases":[]},{"code":"79606","name":"Blanes","aliases":[]},{"code":"50702","name":"Brenes","aliases":[]},{"code":"66206","name":"Buñol","aliases":[]},{"code":"51050","name":"Cartuja","aliases":[]},{"code":"72210","name":"Castellbisbal","aliases":[]},{"code":"67211","name":"Caudiel","aliases":[]},{"code":"94005","name":"Ciudad Real-Miguelturra","aliases":[]},{"code":"33013","name":"Ciudad Rodrigo","aliases":[]},{"code":"69104","name":"Cullera","aliases":[]},{"code":"71707","name":"El Prat de Llobregat","aliases":[]},{"code":"78802","name":"Fabra i Puig","aliases":[]},{"code":"33016","name":"Fuentes de Oñoro","aliases":[]},{"code":"69110","name":"Gandia","aliases":[]},{"code":"16008","name":"La Felguera","aliases":[]},{"code":"51415","name":"Las Aletas","aliases":[]},{"code":"72305","name":"L'Hospitalet de Llobregat","aliases":[]},{"code":"72209","name":"Martorell Central","aliases":[]},{"code":"79500","name":"Mataró","aliases":[]},{"code":"78800","name":"Montcada-Bifurcació","aliases":[]},{"code":"13100","name":"Orduña","aliases":[]},{"code":"51400","name":"Puerto de Santa María","aliases":[]},{"code":"67202","name":"Puerto Escandón","aliases":[]},{"code":"77309","name":"Puigcerdà","aliases":[]},{"code":"16405","name":"San Juan de Nieva","aliases":[]},{"code":"13405","name":"Santurtzi","aliases":[]},{"code":"15208","name":"Soto de Rey","aliases":[]},{"code":"77111","name":"Torelló","aliases":[]},{"code":"66200","name":"Utiel","aliases":[]},{"code":"66212","name":"Valencia-Sant Isidre","aliases":[]},{"code":"77109","name":"Vic","aliases":[]},{"code":"43003","name":"Villanueva del Ariscal y Olivares","aliases":[]},{"code":"51404","name":"Segunda Aguada","aliases":[]},{"code":"87751008","name":"Marseille Saint-Charles","aliases":[]},{"code":"15300","name":"Lugo de Llanera","aliases":["lugo de llanera","llanera"]},{"code":"13506","name":"Muskiz","aliases":["muskiz"]},{"code":"71708","name":"Bellvitge","aliases":["bellvitge"]},{"code":"51410","name":"San Fernando Bahía Sur","aliases":["bahia sur","bahía sur","san fernando bahia sur","san fernando bahía sur"]}];
const $=id=>document.getElementById(id),
      norm=s=>String(s??"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,"").trim();
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
  "453": {
    "seriesName": "Serie 453.0 · Stadler · TL100 · 4 coches",
    "fabricante": "Stadler Rail",
    "modelo": "FLIRT / KISS · TL100",
    "apodo": "Cercanías Stadler",
    "subseries": "453.0",
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
    "composicion": "Mc-R-R-Mc",
    "rodaje": "Bo'Bo' + 2'2' + 2'2' + Bo'Bo'",
    "plazasSentadas": "252",
    "capacidad": "912 plazas (252 sentadas + 664 de pie, según ficha aportada)",
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
            "rama": "001",
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
            "deposito": "",
            "color": "Cercanías",
            "estado": "En pruebas",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "En pruebas 14/08/24"
            ]
      },
      "2": {
            "rama": "002",
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
            "fechaAlta": "25/08/2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "3": {
            "rama": "003",
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
            "ano": "",
            "fechaAlta": "24/08/2026",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "Primero de la serie 453.0 en servicio comercial."
            ]
      },
      "4": {
            "rama": "004",
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
            "deposito": "",
            "color": "Cercanías",
            "estado": "En pruebas",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "5": {
            "rama": "005",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "6": {
            "rama": "006",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "7": {
            "rama": "007",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "8": {
            "rama": "008",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "9": {
            "rama": "009",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "10": {
            "rama": "010",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "11": {
            "rama": "011",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "12": {
            "rama": "012",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "13": {
            "rama": "013",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "14": {
            "rama": "014",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "15": {
            "rama": "015",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "16": {
            "rama": "016",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "17": {
            "rama": "017",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "18": {
            "rama": "018",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "19": {
            "rama": "019",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "20": {
            "rama": "020",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "21": {
            "rama": "021",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "22": {
            "rama": "022",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "23": {
            "rama": "023",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      },
      "24": {
            "rama": "024",
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
            "deposito": "",
            "color": "",
            "estado": "En construcción",
            "ano": "",
            "fechaAlta": "",
            "ancho": "1668",
            "composicionRama": "Motor cabina impar + remolque 1 de dos pisos + remolque 2 de dos pisos + motor cabina par",
            "notas": [
                  "-"
            ]
      }
},
    "unitsTL200": {
      "1": {
        "rama": "001",
        "vehiculoBase": "001",
        "numero": "1-453-601-6",
        "vehiculosRama": [
          "1-453-601-6",
          "2-453-601-4"
        ],
        "searchCodes": [
          "001",
          "1601",
          "2601"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En pruebas",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "2": {
        "rama": "002",
        "vehiculoBase": "002",
        "numero": "1-453-602-4",
        "vehiculosRama": [
          "1-453-602-4",
          "2-453-602-2"
        ],
        "searchCodes": [
          "002",
          "1602",
          "2602"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En pruebas",
        "ano": 2025,
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "3": {
        "rama": "003",
        "vehiculoBase": "003",
        "numero": "1-453-603-2",
        "vehiculosRama": [
          "1-453-603-2",
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
        "fechaAlta": "24/08/2026",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "4": {
        "rama": "004",
        "vehiculoBase": "004",
        "numero": "1-453-604-0",
        "vehiculosRama": [
          "1-453-604-0",
          "2-453-604-8"
        ],
        "searchCodes": [
          "004",
          "1604",
          "2604"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "5": {
        "rama": "005",
        "vehiculoBase": "005",
        "numero": "1-453-605-7",
        "vehiculosRama": [
          "1-453-605-7",
          "2-453-605-5"
        ],
        "searchCodes": [
          "005",
          "1605",
          "2605"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "6": {
        "rama": "006",
        "vehiculoBase": "006",
        "numero": "1-453-606-5",
        "vehiculosRama": [
          "1-453-606-5",
          "2-453-606-3"
        ],
        "searchCodes": [
          "006",
          "1606",
          "2606"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "7": {
        "rama": "007",
        "vehiculoBase": "007",
        "numero": "1-453-607-3",
        "vehiculosRama": [
          "1-453-607-3",
          "2-453-607-1"
        ],
        "searchCodes": [
          "007",
          "1607",
          "2607"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "8": {
        "rama": "008",
        "vehiculoBase": "008",
        "numero": "1-453-608-1",
        "vehiculosRama": [
          "1-453-608-1",
          "2-453-608-9"
        ],
        "searchCodes": [
          "008",
          "1608",
          "2608"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "9": {
        "rama": "009",
        "vehiculoBase": "009",
        "numero": "1-453-609-9",
        "vehiculosRama": [
          "1-453-609-9",
          "2-453-609-7"
        ],
        "searchCodes": [
          "009",
          "1609",
          "2609"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "10": {
        "rama": "010",
        "vehiculoBase": "010",
        "numero": "1-453-610-7",
        "vehiculosRama": [
          "1-453-610-7",
          "2-453-610-5"
        ],
        "searchCodes": [
          "010",
          "1610",
          "2610"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "11": {
        "rama": "011",
        "vehiculoBase": "011",
        "numero": "1-453-611-5",
        "vehiculosRama": [
          "1-453-611-5",
          "2-453-611-3"
        ],
        "searchCodes": [
          "011",
          "1611",
          "2611"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "12": {
        "rama": "012",
        "vehiculoBase": "012",
        "numero": "1-453-612-3",
        "vehiculosRama": [
          "1-453-612-3",
          "2-453-612-1"
        ],
        "searchCodes": [
          "012",
          "1612",
          "2612"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "13": {
        "rama": "013",
        "vehiculoBase": "013",
        "numero": "1-453-613-1",
        "vehiculosRama": [
          "1-453-613-1",
          "2-453-613-9"
        ],
        "searchCodes": [
          "013",
          "1613",
          "2613"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "14": {
        "rama": "014",
        "vehiculoBase": "014",
        "numero": "1-453-614-9",
        "vehiculosRama": [
          "1-453-614-9",
          "2-453-614-7"
        ],
        "searchCodes": [
          "014",
          "1614",
          "2614"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "15": {
        "rama": "015",
        "vehiculoBase": "015",
        "numero": "1-453-615-6",
        "vehiculosRama": [
          "1-453-615-6",
          "2-453-615-4"
        ],
        "searchCodes": [
          "015",
          "1615",
          "2615"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "16": {
        "rama": "016",
        "vehiculoBase": "016",
        "numero": "1-453-616-4",
        "vehiculosRama": [
          "1-453-616-4",
          "2-453-616-2"
        ],
        "searchCodes": [
          "016",
          "1616",
          "2616"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "17": {
        "rama": "017",
        "vehiculoBase": "017",
        "numero": "1-453-617-2",
        "vehiculosRama": [
          "1-453-617-2",
          "2-453-617-0"
        ],
        "searchCodes": [
          "017",
          "1617",
          "2617"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "18": {
        "rama": "018",
        "vehiculoBase": "018",
        "numero": "1-453-618-0",
        "vehiculosRama": [
          "1-453-618-0",
          "2-453-618-8"
        ],
        "searchCodes": [
          "018",
          "1618",
          "2618"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "19": {
        "rama": "019",
        "vehiculoBase": "019",
        "numero": "1-453-619-8",
        "vehiculosRama": [
          "1-453-619-8",
          "2-453-619-6"
        ],
        "searchCodes": [
          "019",
          "1619",
          "2619"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "20": {
        "rama": "020",
        "vehiculoBase": "020",
        "numero": "1-453-620-6",
        "vehiculosRama": [
          "1-453-620-6",
          "2-453-620-4"
        ],
        "searchCodes": [
          "020",
          "1620",
          "2620"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "21": {
        "rama": "021",
        "vehiculoBase": "021",
        "numero": "1-453-621-4",
        "vehiculosRama": [
          "1-453-621-4",
          "2-453-621-2"
        ],
        "searchCodes": [
          "021",
          "1621",
          "2621"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "22": {
        "rama": "022",
        "vehiculoBase": "022",
        "numero": "1-453-622-2",
        "vehiculosRama": [
          "1-453-622-2",
          "2-453-622-0"
        ],
        "searchCodes": [
          "022",
          "1622",
          "2622"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "23": {
        "rama": "023",
        "vehiculoBase": "023",
        "numero": "1-453-623-0",
        "vehiculosRama": [
          "1-453-623-0",
          "2-453-623-8"
        ],
        "searchCodes": [
          "023",
          "1623",
          "2623"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "24": {
        "rama": "024",
        "vehiculoBase": "024",
        "numero": "1-453-624-8",
        "vehiculosRama": [
          "1-453-624-8",
          "2-453-624-6"
        ],
        "searchCodes": [
          "024",
          "1624",
          "2624"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "25": {
        "rama": "025",
        "vehiculoBase": "025",
        "numero": "1-453-625-5",
        "vehiculosRama": [
          "1-453-625-5",
          "2-453-625-3"
        ],
        "searchCodes": [
          "025",
          "1625",
          "2625"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "26": {
        "rama": "026",
        "vehiculoBase": "026",
        "numero": "1-453-626-3",
        "vehiculosRama": [
          "1-453-626-3",
          "2-453-626-1"
        ],
        "searchCodes": [
          "026",
          "1626",
          "2626"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "27": {
        "rama": "027",
        "vehiculoBase": "027",
        "numero": "1-453-627-1",
        "vehiculosRama": [
          "1-453-627-1",
          "2-453-627-9"
        ],
        "searchCodes": [
          "027",
          "1627",
          "2627"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "28": {
        "rama": "028",
        "vehiculoBase": "028",
        "numero": "1-453-628-9",
        "vehiculosRama": [
          "1-453-628-9",
          "2-453-628-7"
        ],
        "searchCodes": [
          "028",
          "1628",
          "2628"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "29": {
        "rama": "029",
        "vehiculoBase": "029",
        "numero": "1-453-629-7",
        "vehiculosRama": [
          "1-453-629-7",
          "2-453-629-5"
        ],
        "searchCodes": [
          "029",
          "1629",
          "2629"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "30": {
        "rama": "030",
        "vehiculoBase": "030",
        "numero": "1-453-630-5",
        "vehiculosRama": [
          "1-453-630-5",
          "2-453-630-3"
        ],
        "searchCodes": [
          "030",
          "1630",
          "2630"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "31": {
        "rama": "031",
        "vehiculoBase": "031",
        "numero": "1-453-631-3",
        "vehiculosRama": [
          "1-453-631-3",
          "2-453-631-1"
        ],
        "searchCodes": [
          "031",
          "1631",
          "2631"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "32": {
        "rama": "032",
        "vehiculoBase": "032",
        "numero": "1-453-632-1",
        "vehiculosRama": [
          "1-453-632-1",
          "2-453-632-9"
        ],
        "searchCodes": [
          "032",
          "1632",
          "2632"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "33": {
        "rama": "033",
        "vehiculoBase": "033",
        "numero": "1-453-633-9",
        "vehiculosRama": [
          "1-453-633-9",
          "2-453-633-7"
        ],
        "searchCodes": [
          "033",
          "1633",
          "2633"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "34": {
        "rama": "034",
        "vehiculoBase": "034",
        "numero": "1-453-634-7",
        "vehiculosRama": [
          "1-453-634-7",
          "2-453-634-5"
        ],
        "searchCodes": [
          "034",
          "1634",
          "2634"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "35": {
        "rama": "035",
        "vehiculoBase": "035",
        "numero": "1-453-635-4",
        "vehiculosRama": [
          "1-453-635-4",
          "2-453-635-2"
        ],
        "searchCodes": [
          "035",
          "1635",
          "2635"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "36": {
        "rama": "036",
        "vehiculoBase": "036",
        "numero": "1-453-636-2",
        "vehiculosRama": [
          "1-453-636-2",
          "2-453-636-0"
        ],
        "searchCodes": [
          "036",
          "1636",
          "2636"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "37": {
        "rama": "037",
        "vehiculoBase": "037",
        "numero": "1-453-637-2",
        "vehiculosRama": [
          "1-453-637-2",
          "2-453-637-8"
        ],
        "searchCodes": [
          "037",
          "1637",
          "2637"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "38": {
        "rama": "038",
        "vehiculoBase": "038",
        "numero": "1-453-638-8",
        "vehiculosRama": [
          "1-453-638-8",
          "2-453-638-6"
        ],
        "searchCodes": [
          "038",
          "1638",
          "2638"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "39": {
        "rama": "039",
        "vehiculoBase": "039",
        "numero": "1-453-639-6",
        "vehiculosRama": [
          "1-453-639-6",
          "2-453-639-4"
        ],
        "searchCodes": [
          "039",
          "1639",
          "2639"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "40": {
        "rama": "040",
        "vehiculoBase": "040",
        "numero": "1-453-640-4",
        "vehiculosRama": [
          "1-453-640-4",
          "2-453-640-2"
        ],
        "searchCodes": [
          "040",
          "1640",
          "2640"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "41": {
        "rama": "041",
        "vehiculoBase": "041",
        "numero": "1-453-641-2",
        "vehiculosRama": [
          "1-453-641-2",
          "2-453-641-0"
        ],
        "searchCodes": [
          "041",
          "1641",
          "2641"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "42": {
        "rama": "042",
        "vehiculoBase": "042",
        "numero": "1-453-642-0",
        "vehiculosRama": [
          "1-453-642-0",
          "2-453-642-8"
        ],
        "searchCodes": [
          "042",
          "1642",
          "2642"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "43": {
        "rama": "043",
        "vehiculoBase": "043",
        "numero": "1-453-643-8",
        "vehiculosRama": [
          "1-453-643-8",
          "2-453-643-6"
        ],
        "searchCodes": [
          "043",
          "1643",
          "2643"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "44": {
        "rama": "044",
        "vehiculoBase": "044",
        "numero": "1-453-644-6",
        "vehiculosRama": [
          "1-453-644-6",
          "2-453-644-4"
        ],
        "searchCodes": [
          "044",
          "1644",
          "2644"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "45": {
        "rama": "045",
        "vehiculoBase": "045",
        "numero": "1-453-645-3",
        "vehiculosRama": [
          "1-453-645-3",
          "2-453-645-1"
        ],
        "searchCodes": [
          "045",
          "1645",
          "2645"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "46": {
        "rama": "046",
        "vehiculoBase": "046",
        "numero": "1-453-646-8",
        "vehiculosRama": [
          "1-453-646-8",
          "2-453-646-9"
        ],
        "searchCodes": [
          "046",
          "1646",
          "2646"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "47": {
        "rama": "047",
        "vehiculoBase": "047",
        "numero": "1-453-647-6",
        "vehiculosRama": [
          "1-453-647-6",
          "2-453-647-7"
        ],
        "searchCodes": [
          "047",
          "1647",
          "2647"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "48": {
        "rama": "048",
        "vehiculoBase": "048",
        "numero": "1-453-648-4",
        "vehiculosRama": [
          "1-453-648-4",
          "2-453-648-5"
        ],
        "searchCodes": [
          "048",
          "1648",
          "2648"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "49": {
        "rama": "049",
        "vehiculoBase": "049",
        "numero": "1-453-649-2",
        "vehiculosRama": [
          "1-453-649-2",
          "2-453-649-3"
        ],
        "searchCodes": [
          "049",
          "1649",
          "2649"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "50": {
        "rama": "050",
        "vehiculoBase": "050",
        "numero": "1-453-650-0",
        "vehiculosRama": [
          "1-453-650-0",
          "2-453-650-1"
        ],
        "searchCodes": [
          "050",
          "1650",
          "2650"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "51": {
        "rama": "051",
        "vehiculoBase": "051",
        "numero": "1-453-651-8",
        "vehiculosRama": [
          "1-453-651-8",
          "2-453-651-6"
        ],
        "searchCodes": [
          "051",
          "1651",
          "2651"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "52": {
        "rama": "052",
        "vehiculoBase": "052",
        "numero": "1-453-652-6",
        "vehiculosRama": [
          "1-453-652-6",
          "2-453-652-4"
        ],
        "searchCodes": [
          "052",
          "1652",
          "2652"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "53": {
        "rama": "053",
        "vehiculoBase": "053",
        "numero": "1-453-653-4",
        "vehiculosRama": [
          "1-453-653-4",
          "2-453-653-2"
        ],
        "searchCodes": [
          "053",
          "1653",
          "2653"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "54": {
        "rama": "054",
        "vehiculoBase": "054",
        "numero": "1-453-654-2",
        "vehiculosRama": [
          "1-453-654-2",
          "2-453-654-0"
        ],
        "searchCodes": [
          "054",
          "1654",
          "2654"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
          "La tracción utiliza 16 motores de 500 kW, con una potencia nominal total de 8.000 kW y un esfuerzo de tracción de 637 kN. Dispone de frenado eléctrico reostático y regenerativo y freno neumático.",
          "El equipamiento de seguridad y señalización incluye ASFA Digital, ERTMS niveles 1 y 2 y PUC para comunicaciones ferroviarias mediante GSM-R y Tren-Tierra.",
          "Los dos coches motores cabina incorporan los pantógrafos del tren. El motor cabina par integra espacio PMR y aseo accesible, mientras que el motor cabina impar dispone de espacios para bicicletas.",
          "Cuenta con WiFi, enchufes USB, videovigilancia, información al viajero y espacios PMR. Renfe indica para el T200 una capacidad de hasta 18 bicicletas."
        ]
      },
      "55": {
        "rama": "055",
        "vehiculoBase": "055",
        "numero": "1-453-655-9",
        "vehiculosRama": [
          "1-453-655-9",
          "2-453-655-7"
        ],
        "searchCodes": [
          "055",
          "1655",
          "2655"
        ],
        "deposito": "",
        "color": "Cercanías",
        "estado": "En construcción",
        "ano": "",
        "fechaAlta": "",
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
          "capacidad": "2.378 plazas máximas · 524 sentadas · 1.359 de pie · +2 espacios PMR",
          "frenos": "Eléctrico reostático y regenerativo · neumático",
          "mandoMultiple": "3 unidades máximo",
          "enganche": "Scharfenberg"
        },
        "generalNotes": [
          "Serie de trenes modulares fabricados por Stadler para servicios de Cercanías, versión de ocho coches TL200 (subserie 453.6), con 55 trenes encargados.",
          "La composición del TL200 es Mc-R-R-Mi-Mi-R-R-Mc: dos motores cabina y dos motores intermedios de un piso, junto con cuatro remolques de dos pisos.",
          "El diseño es modular y permite adaptar la longitud de la composición. El T200 puede evolucionar a una configuración T240 de mayor longitud o reducirse a una configuración T160 de seis coches.",
          "Los trenes son eléctricos de 3.000 Vcc y ancho ibérico de 1.668 mm, con velocidad máxima de 140 km/h. El TL200 tiene una longitud de 191,16 m y una capacidad máxima de 2.378 plazas, con 524 sentadas.",
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
  const input=$(inputId),list=$(listId); if(!input||!list)return;
  const render=()=>{
    const q=norm(input.value);
    if(!q){list.classList.remove("show");list.innerHTML="";return}
    const matches=stations.filter(s=>[s.code,s.name,...(s.aliases||[])].map(norm).some(x=>x.includes(q))).slice(0,8);
    if(!matches.length){list.classList.remove("show");list.innerHTML="";return}
    list.innerHTML=matches.map(s=>`<button type="button" class="suggestion" data-name="${esc(s.name)}" style="display:flex;align-items:baseline;gap:8px"><strong>${esc(s.name)}</strong>${s.code?`<small>${esc(s.code)}</small>`:""}</button>`).join("");
    list.classList.add("show");
    list.querySelectorAll(".suggestion").forEach(o=>o.onclick=()=>{input.value=o.dataset.name;list.classList.remove("show")});
  };
  input.addEventListener("input",render);input.addEventListener("focus",render);
  document.addEventListener("click",e=>{if(!input.contains(e.target)&&!list.contains(e.target))list.classList.remove("show")});
}
autocomplete("origin","originList");autocomplete("destination","destinationList");
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
        <div><span>Rama</span><strong>${esc(normalizeFleetValue(series)==="453" ? String(unit.rama||"").replace(/^0+(?=\d)/,"") : unit.rama)}</strong></div>
        ${["463","464"].includes(normalizeFleetValue(series))?`<div><span>Lote</span><strong>${esc(unit.lote||"—")}</strong></div>`:""}
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
        ${normalizeFleetValue(series)==="463"?`<div><span>Color</span><strong>${esc(unit.color||"—")}</strong></div>
        <div><span>Red</span><strong>${esc(unit.red||"—")}</strong></div>`:""}
        <div><span>Ancho de vía</span><strong>${esc(unit.ancho||tech?.anchoVia||"—")} ${unit.ancho?"mm":""}</strong></div>
        ${(unit.subserie||seriesData?.subseries)?`<div><span>Subserie</span><strong>${esc(unit.subserie||seriesData.subseries)}</strong></div>`:""}
        ${(unit.modelo||tech?.modelo)?`<div><span>Modelo</span><strong>${esc(seriesData.modelo)}</strong></div>`:""}
        ${(unit.apodo||tech?.apodo)?`<div><span>Apodo</span><strong>${esc(seriesData.apodo)}</strong></div>`:""}
        ${(unit.tipoMaterial||tech?.tipoMaterial)?`<div><span>Tipo de material</span><strong>${esc(seriesData.tipoMaterial)}</strong></div>`:""}
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
        ${tech?.velocidadMaxima?`<div><span>Velocidad máxima</span><strong>${esc(seriesData.velocidadMaxima)}</strong></div>`:""}
        ${tech?.potencia?`<div><span>Potencia</span><strong>${esc(seriesData.potencia)}</strong></div>`:""}
        ${tech?.plazasSentadas?`<div><span>Plazas sentadas</span><strong>${esc(seriesData.plazasSentadas)}</strong></div>`:""}
         ${["112","121","453","464","730","801"].includes(normalizeFleetValue(series))?`
         <div><span>Longitud</span><strong>${esc(tech.longitud||"—")}</strong></div>
         <div><span>Peso</span><strong>${esc(tech.peso||"—")}</strong></div>
         <div><span>Tensión</span><strong>${esc(tech.tension||"—")}</strong></div>
         <div><span>Tracción</span><strong>${esc(tech.traccion||"—")}</strong></div>
         <div><span>Señalización</span><strong>${esc(tech.señalizacion||"—")}</strong></div>
         <div><span>Composición</span><strong>${esc(tech.composicion||"—")}</strong></div>
         ${normalizeFleetValue(series)==="453"?`
         <div><span>Esfuerzo de tracción</span><strong>${esc(tech.esfuerzoTraccion||"—")}</strong></div>
         <div><span>Frenos</span><strong>${esc(tech.frenos||"—")}</strong></div>
         <div><span>Mando múltiple</span><strong>${esc(tech.mandoMultiple||"—")}</strong></div>
         <div><span>Enganche</span><strong>${esc(tech.enganche||"—")}</strong></div>
         <div><span>Rodaje</span><strong>${esc(tech.rodaje||"—")}</strong></div>`:""}`:""}
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
  const heroBranch=String(unit.rama||"").replace(/^0+(?=\d)/,"") || "0";
  let heroTitle;
  if(normalizeFleetValue(series)==="453"){
    const isTL200=String(unit.subserie||"").includes("453.6") || /^6\d{2}$/.test(String(unit.vehiculoBase||"")) || /(?:^|-)453-6\d{2}(?:-|$)/.test(String(unit.numero||""));
    heroTitle=`Serie 453 · ${isTL200 ? "453.6 · TL200 · 8 coches" : "453.0 · TL100 · 4 coches"} · Rama ${heroBranch}`;
  }else{
    heroTitle=`Serie ${esc(series)}${unit.subserie?` · ${esc(unit.subserie)}`:""} · Rama ${esc(unit.rama)}${unit.lote?` · ${esc(unit.lote)}`:""}`;
  }
  const hero=`<div class="ficha-hero"><div class="ficha-kicker">MATERIAL RENFE</div><h3>${esc(heroTitle)}</h3><p>Vehículo ${esc(vehiculoFicha)} · ${esc(unit.numero||"—")}</p></div>`;

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
