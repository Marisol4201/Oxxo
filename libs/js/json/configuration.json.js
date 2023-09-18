Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Oxxo","publishDate":"18/09/2023 11:56:31","pages":[{"id":"949e8c7d-10ae-47e6-8fd5-85680735558c","name":"Compra en OXXO","version":"1.0","author":"Marisol Ramírez","image":"files\\diagrams\\Compra en OXXO.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"98560800-439d-4244-a7ba-e74749cd0f27","name":"Compra de productos en un OXXO","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":800.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"fa90aedd-9c71-4fd7-b050-5a0e6c96c447","name":"Inicio Simple","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">El proceso de negocios en una tienda de autoservicio como OXXO, abarca desde un inicio la selecci&oacute;n de productos por el cliente, el llenado del carrito de compras y la finalizaci&oacute;n de la transacci&oacute;n mediante diversos m&eacute;todos de pago</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\"> hasta finalizar la compra de los productos.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":95.0,"y":280.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart","elementSubType":"StartEvent"},{"id":"76d7df7b-fa03-4885-8d96-47226b2fc415","name":"Entrar al Oxxo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente eligira a que Oxxo de su preferencia va acudir a realizar la compra de sus productos</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":181.0,"y":265.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"933ea6ff-8345-481e-b18f-25afb96feb29","name":"Elegir producto","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">El cliente podra elegir entre 1 o mas productos de diferentes categorias, como por ejemplo algun snack, recargas, bebidas, etc.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":331.0,"y":265.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"b336e493-43fe-4d07-8ee8-73c80c7c9c3d","name":"Llevar producto","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Una vez que se han elegido todos los productos que el cliente desee comprar va a llevarlos a la caja, en donde un encargado de la tienda sera el que cobrar estos productos seleccionados</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":472.0,"y":265.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"328135ce-bd62-4043-987f-69bf3ba4aac4","name":"Registra producto","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">El encargado de cobrar o mejor dicho el cajero, sera la persona que registre los productos en el sistema para saber cuanto se le va a cobrar al cliente.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\BusinessRuleTask.png","imageBounds":{"points":[{"x":472.0,"y":667.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"BusinessRuleTask","elementSubType":"BusinessRuleTask","properties":[]},{"id":"35e12ea8-6903-4409-8137-4aeb399dc95a","name":"Indicar precio","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Ya que se registraron todos los productos el cajero indicara el monto total a pagar al cliente.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\BusinessRuleTask.png","imageBounds":{"points":[{"x":638.0,"y":667.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"BusinessRuleTask","elementSubType":"BusinessRuleTask","properties":[]},{"id":"6f32bc6e-c075-43cb-8992-9b40dc51ba91","name":"¿Cual sera su método de pago?","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Asi mismo el cajero le preguntara al cliente como es que desea pagar sus productos, teniendo la opcion de pagar con tarjeta ya sea de debito o credito (sea de la eleccion del cliente el banco de su preferencia) o con tarjeta de puntos misma que es proporcionada por tiendas Oxxo.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":800.0,"y":677.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","elementSubType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Efectivo","elementType":"SequenceFlow","properties":[]},{"name":"Tarjeta","elementType":"SequenceFlow","properties":[]}]},{"id":"4ee83947-34ff-4d2c-bbf7-fbd97eb5d057","name":"Efectivo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:11pt;font-weight:normal;font-style:normal;\">Si el cliente decide pagar con efectivo solamente le proporcionara al cajero el dinero</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":849.0,"y":85.0}],"radius":0.0,"height":180.0,"width":270.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"369d9452-39a0-4fb8-bbf8-a5207e4832d3","name":"Pagar productos","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Una vez que el cajero ha recibido el dinero del monto total se procedera con el pago de los productos.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1329.0,"y":250.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"d22f9fba-af7f-452f-83b0-ae756b607813","name":"Registra el pago en el sistema","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Una vez que se ha registrado el pago en el sistema se proporcionara un comprobante de la compra.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\BusinessRuleTask.png","imageBounds":{"points":[{"x":1482.0,"y":643.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"BusinessRuleTask","elementSubType":"BusinessRuleTask","properties":[]},{"id":"f74f1d21-b88d-4134-b4b3-63569dcb3098","name":"Le proporciona su ticket al cliente","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">El sistema dara un ticket una vez que la compra ha sido exitosa. El ticket proporcionara informacion como datos de la tienda, productos que se han comprado, como es que se pago e incluso el cambio que se recibio segun sea el caso, hasta la persona que brindo el servicio de atencion.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\BusinessRuleTask.png","imageBounds":{"points":[{"x":1678.0,"y":638.0}],"radius":0.0,"height":70.0,"width":113.0,"shape":"rect"},"elementType":"BusinessRuleTask","elementSubType":"BusinessRuleTask","properties":[]},{"id":"3866a2a4-5935-4e41-b7f0-23849c227c1e","name":"Recibe el ticket verificando su compra","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">El cliente sera eal encargado de verificar que todos los datos sean correctos, desde los productos cobrados hasta el monto total que pago corresponde al del ticket.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1684.0,"y":260.0}],"radius":0.0,"height":69.0,"width":101.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"6c023ebb-e697-49d5-9763-c94d123ed495","name":"Salir del Oxxo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Una vez que todo es correcto la compra ha sido exitosa, por lo que podemos salir de la sucursal.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1903.0,"y":265.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"aedabef3-aef4-409b-a5f3-c529f2d1a53f","name":"Fin Simple","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Fin de la compra.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2098.0,"y":280.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd","elementSubType":"EndEvent"},{"id":"8db705dd-13f3-4fd4-a6a1-739bc03ac0e5","name":"Tarjeta","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:11pt;font-weight:normal;font-style:normal;\">Si el cliente elige pagar con tarjeta tiene la opcion de pagar con tarjeta de debito, credito o puntos OXXO.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":849.0,"y":325.0}],"radius":0.0,"height":180.0,"width":270.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]}]}],"subPages":[{"id":"4ee83947-34ff-4d2c-bbf7-fbd97eb5d057","name":"Efectivo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:11pt;font-weight:normal;font-style:normal;\">Si el cliente decide pagar con efectivo solamente le proporcionara al cajero el dinero</span></p>","image":"files\\diagrams\\Efectivo.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[{"id":"c438b3eb-49ff-4c2d-b298-05af747461e7","name":"El cliente elige si pagar exacto o cualquier otra denominación ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">El cliente debera de tomar la decision de con que tarjeta es mas comodo el pagar, ya sea tarjeta bancaria o tiene la opcion de puntos oxxo, una tarjeta que es entregada por la tienda</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":96.0,"y":67.0}],"radius":0.0,"height":76.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"21fa4c70-dd30-4250-bea5-b54911e759d6","name":"Pago que requiere cambio ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">El cliente dara el dinero suficiente que abarque la cantidad a pagar siendo mas de lo que se necesita</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":346.0,"y":133.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"c3ea6633-7f0e-4313-bc7e-fb10a47b5152","name":"Recibe su cambio y lo verifica","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Se le cobrara solo el monto total y el dinero restante se le proporcionara al cliente</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":505.0,"y":128.0}],"radius":0.0,"height":69.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"db6fd79f-1ba7-4a7a-8ba7-72395c750520","name":"Pago del monto total exacto","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Si el cliente paga exacto solo se le dara la cantidad del monto total de forma exacta.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":346.0,"y":16.0}],"radius":0.0,"height":74.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"1847bd8a-6f66-46b4-bab7-a59e52cdc905","name":"Fin Simple","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Se finaliza el proceso de pago</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":617.0,"y":90.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd","elementSubType":"EndEvent"}],"parentRef":"949e8c7d-10ae-47e6-8fd5-85680735558c"},{"id":"8db705dd-13f3-4fd4-a6a1-739bc03ac0e5","name":"Tarjeta","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:11pt;font-weight:normal;font-style:normal;\">Si el cliente elige pagar con tarjeta tiene la opcion de pagar con tarjeta de debito, credito o puntos OXXO.</span></p>","image":"files\\diagrams\\Tarjeta.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[{"id":"63093a9f-ed1e-476b-b849-d64a0f5cddc4","name":"Entregar la tarjeta al cajero","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">El cliente le proporcionara al cajero la tarjeta con la que desea pagar</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":122.0,"y":102.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"bbcbcc85-6e21-4ca2-b797-6e12e76b94d7","name":"Se verifica que haya fondos suficientes","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Es importante que se verifique si se cuenta con los fondos necesarios para poder autorizar el pago</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":899.0,"y":16.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"155d7fe1-5489-4b1c-b7c0-679d64b64555","name":"Se cobra los puntos y se da el resto en efectivo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Si es que el cliente no alcanza a cubrir toda la cantidad con los puntos dara el resto en efectivo para validar el pago</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ReceiveTask.png","imageBounds":{"points":[{"x":753.0,"y":272.0}],"radius":0.0,"height":75.0,"width":101.0,"shape":"rect"},"elementType":"ReceiveTask","elementSubType":"ReceiveTask","properties":[{"id":"ReceiveTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]},{"id":"19faf26d-122b-4030-923d-2fb82f577a88","name":"Tarjeta bancaria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">El cliente podra elegir que tipo de denominacion sera su tarjeta es decir de debito o credito y asi mismo podra perteneces a cualquier institucion bancaria</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":469.0,"y":16.0}],"radius":0.0,"height":60.0,"width":77.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]},{"id":"d6f04c71-ac07-4185-9c6f-5c588304792b","name":"Ingresa su tarjeta","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Ingresara su tarjeta en la terminal que el cajero le proporcionara</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":613.0,"y":16.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"a90e7a51-48ea-491f-a628-539eb3adb237","name":"Marca su PIN","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Es importante que el cliente autorice su compra ingresando su pin que tiene asignado como contrase&ntilde;a para poder validar el pago,</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":759.0,"y":16.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]},{"id":"412b2481-7132-4bf6-ab71-60d0a0f9c81c","name":"Puntos Oxxo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">La tienda le proporciona al cliente una tarjeta de puntos oxxo con el que puede recabar puntos y utilizarlos cuando el lo requiera</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":463.0,"y":162.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]},{"id":"7203ba6f-ff36-4a15-95be-9b158770906e","name":"Pasa su tarjeta","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Pink Chicken';font-size:12pt;font-weight:normal;font-style:normal;\">Si al cliente le alcanzan los puntos para pagar toda su compra se valida la compra</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":759.0,"y":162.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]}],"parentRef":"949e8c7d-10ae-47e6-8fd5-85680735558c"}]}],"texts":{"tableOfContents":"Tabla de Contenidos","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versión","author":"Autor","description":"Descripción","mainPool":"Proceso principal","mainPoolDescription":"Proceso principal Descripción","processDiagrams":"Diagramas de Proceso","processElements":"Elementos del proceso","elements":"Elementos del proceso","defaultElementName":"Elemento","performers":"Ejecutantes","accountable":"Responsable","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Home","search":"Buscar","goToParentProcess":"Ir al proceso padre","calledBy":"Llamado por","attachmentsTooltip":"Ver adjuntos","visitBizagi":"Visite bizagi.com","contains":"Contiene {0} Subprocesos","showAll":"Ver todo","fullScreen":"Pantalla completa","zoomIn":"Acercar","zoomOut":"Alejar","close":"Cerrar","menu":"Menu: ","errorPage":"Error al visualizar la página","process":"Proceso","subProcess":"Subprocesos publicados","contain":"Contiene","checkAttributes":"Ver atributos","checkOverview":"Ver resumen","unavailableResource":"El recurso no esta disponible","localResource":"El recurso puede accederse localmente","performer":"Ejecutante","linktoimage":"Hipervínculo a imagen","presentationAction":"Acciones de presentación","searchGlobal":"Buscar todo","searchLocal":"Buscar en este proceso","searchResults":"No se encontraron resultados","titlePage":"Inicio","emptyElement":"Este elemento aún no se ha documentado","unsupported":"Su navegador no soporta contenido mostrado en esta página. <br> Le recomendamos actualizar su navegador.","details":"Detalles","viewDetails":"Ver detalles","expand":"Expandir","mainPoolProperties":"Propiedades Proceso principal","cannotVisualize":"No es posible visualizar correctamente","resourceNotFound":"No se encontró el recurso solicitado:","applyTheme":"Aplicando el tema","showMore":"Ver mas","showLess":"Ver menos","hideDescription":"Ocultar descripción","showDescription":"Mostrar descripción","presentationActionLink":"Ver acción de presentación","goToLinkThrow":"Ir al evento de destino","goToLinkCatch":"Ir al evento de origen","goToSubProcess":"Ir al subproceso","viewByList":"Lista de procesos","viewByTree":"Jerarquía de procesos","diagramList":"Lista de procesos","folderTree":"Jerarquía de procesos"},"searchMap":[{"containerId":"949e8c7d-10ae-47e6-8fd5-85680735558c","containerName":"Compra en OXXO","isSubprocess":false,"elements":[{"id":"98560800-439d-4244-a7ba-e74749cd0f27","value":"Compra de productos en un OXXO"},{"id":"259cedbc-6924-4254-8908-e1490c35be32","value":"CLIENTE"},{"id":"cbd85157-98ab-4330-814b-ed900d15f01b","value":"CAJERO"},{"id":"6f32bc6e-c075-43cb-8992-9b40dc51ba91","value":"¿Cual sera su método de pago?"},{"id":"fa90aedd-9c71-4fd7-b050-5a0e6c96c447","value":""},{"id":"f74f1d21-b88d-4134-b4b3-63569dcb3098","value":"Le proporciona su ticket al cliente"},{"id":"6c023ebb-e697-49d5-9763-c94d123ed495","value":"Salir del Oxxo"},{"id":"328135ce-bd62-4043-987f-69bf3ba4aac4","value":"Registra producto"},{"id":"35e12ea8-6903-4409-8137-4aeb399dc95a","value":"Indicar precio"},{"id":"d22f9fba-af7f-452f-83b0-ae756b607813","value":"Registra el pago en el sistema"},{"id":"3866a2a4-5935-4e41-b7f0-23849c227c1e","value":"Recibe el ticket verificando su compra"},{"id":"b336e493-43fe-4d07-8ee8-73c80c7c9c3d","value":"Llevar producto"},{"id":"933ea6ff-8345-481e-b18f-25afb96feb29","value":"Elegir producto"},{"id":"76d7df7b-fa03-4885-8d96-47226b2fc415","value":"Entrar al Oxxo"},{"id":"369d9452-39a0-4fb8-bbf8-a5207e4832d3","value":"Pagar productos"},{"id":"aedabef3-aef4-409b-a5f3-c529f2d1a53f","value":""},{"id":"4ee83947-34ff-4d2c-bbf7-fbd97eb5d057","value":"Efectivo"},{"id":"8db705dd-13f3-4fd4-a6a1-739bc03ac0e5","value":"Tarjeta"},{"id":"bed521e9-5a0d-4e37-a4b1-ff88d8ef701a"},{"id":"205e6f28-02bd-4548-bc39-639aabadf76a"}]}]}