// SECCIÓN PRINCIPAL
var templateContenedorUsuarioLogueado = {render: "<span class='glyphicon glyphicon-user spanIconoUsuario'></span>&nbsp;&nbsp;&nbsp;<div class='botonCerrarSesion' onclick='cerrarSesionUsuario();'>Salir</div>@{email}", separator: ""};
var templateContenedorUsuarioNoLogueado = {render: "<div class='botonIniciarSesion' onclick='mostrarContenedor(\"cC_contenedorLoginRequerido\", \"contenedorFondoGrisGeneral\");'>Entrar</div>", separator: ""};
// SECCIÓN CARTA 
var templateContenedorCategoria = {render: "<div id='contenedorCategoria@{id_categoria}' class='contenedorCategoria'><br /><div class='contenedorTituloCategoria'>@{nombre}</div><div>@{contenedorProductos}</div></div>",
                                   separator: ""};

var templateContenedorCategoriaTodas = {render: "<div id='contenedorCategoria@{id_categoria}' class='contenedorCategoria'><span><a name='@{nombre}'></a><br /><br /></span><div class='contenedorTituloCategoria'>@{nombre}</a></div>@{contenedorProductos}</div></div>", 
                                        separator: ""};

var templateContenedorProductos = {render: "<div id='contenedorProductosCategoria@{id_categoria}' class='contenedorProductos'><div>@{productos}</div></div>", 
                                   separator: ""};

var templateContenedorProducto = {render: "<div id='contenedorProducto@{id_concepto}' onclick='producto_Click(@{id_concepto})' class='contenedorProducto'><div class='contenedorSinStock' style='display: @{displayStock};'>&nbsp;Sin stock&nbsp;</div><div class='contenedorNombreProducto'>@{nombre}</div><div class='contenedorPrecioProducto'>$ @{precio}</div><div class='contenedorDescripcionProducto'>@{descripcionCorta}</div></div>", 
                                  separator: ""};

var templateTextoProductoNoEncontrado = {render: "<div class='contenedorProductoNoEncontrado'>" + cfgTextos.txt_productos_no_encontrados + "</div>", 
                                         separator: ""};

var templateBotonCategoriaBarraSuperior = {render: "<button id='btnCat_@{id_categoria}' class='botonTabCategoriaNoSeleccionada' onclick='cambiarCategoria_Click(@{id_categoria}, \"@{nombre}\");'>@{nombre}</button>", separator: "&nbsp;"};                         

var templateBotonCategoriaSeleccionada = {render: "<div class='botonTabCategoriaSeleccionadaBuscando'><button id='btnCategoriaSeleccionada' class='botonTabCategoriaSeleccionada' onclick='ocultarLupita_Click();'></button></div>", separator: ""};

var templateComboCategoriasBarraSuperior = {render: "<div class='contenedorCmbCategorias'><label class='lblCmbCategorias' for='cmbCategorias'>&nbsp;Categor&iacute;as:</label><select id='cmbCategorias' class='cmbCategorias'></select></div>", separator: "&nbsp;"};                         

var templateContenedorBarraSuperiorCategorias = {render: "@{contentBotonesCategorias}<div class='contenedorFiltroProducto'><span id='spanIconoLupita' class='glyphicon glyphicon-search botonLupita'></span><div class='contenedorTxtBuscarProducto'><input id='txtBuscarProducto' type='text' placeholder='Buscar' onkeyup='onChangeTextoBuscar();'></div></div>", separator: ""};

var templateGrupoOpcionCombo = {render: "<label style='width: 120px;' for='cmbGrupoOpcion@{id_grupo}'><b>@{nombre}:</b></label>&nbsp;&nbsp;<select style='width: 160px; font-size: 12px;' id='cmbGrupoOpcion@{id_grupo}'></select><br />",
                           separator: ""};

var templateOpcionSimpleCheck = {render: "<div style='display: inline-block; width: 175px; text-align: left;'><input id='chk_@{id_grupo}_@{id_opcion}' type='checkbox'>&nbsp; @{nombre}</div>", separator: ""};

// SECCIÓN PEDIDO
var templateLineaPedido = {render: "<tr><td style='vertical-align: top; width: 7%; text-align: left;'><span class='txtGeneralLineaPedido'>@{cantidad}</span></td><td style='vertical-align:top; width: 58%; text-align: left;'><span class='txtGeneralLineaPedido'>@{nombreConcepto}</span>@{htmlSalto}<span class='txtNotasLineaPedido'>@{observaciones}</span><br /><br /></td><td style='vertical-align: top; width: 25%; text-align:right;'><span class='txtGeneralLineaPedido'>$ @{precio}</span></td><td style='vertical-align: top; width: 10%; text-align: right;'>&nbsp;<span onclick='lineaPedido_Click(@{__itemIndex__});' class='glyphicon glyphicon-edit boton_Editar'></span><div class='btnIconEliminarLineaPedido'>&nbsp;<span onclick='iconoGrillaEliminarLineaPedido_Click(@{__itemIndex__});' class='glyphicon glyphicon-remove boton_Editar'></span></div></td></tr>", 
                           voidRender: "",         
                           separator: ""};

var templateLineaPedidoConceptoAgregado = {render: "<tr><td style='vertical-align: top; text-align: left;'><span class='txtGeneralLineaPedido'>@{cantidad}</span></td><td style='vertical-align: top; text-align: left;'><span class='txtLineaPedidoProductoAgregado'>@{nombreConcepto}</span><br /><br /></td><td style='vertical-align: top; text-align: right;'><span class='txtGeneralLineaPedido'>$ @{precio}</span></td><td> </td></tr>", 
                           voidRender: "",         
                           separator: ""};

var templateDtoPedido = {render: "<tr><td></td><td style='vertical-align: top; text-align: right;'><span class='txtDtoPedido'>Dto. @{porcentajeDto} %</span></td><td style='vertical-align: top; text-align: right;'><span class='txtDtoPedido'>- $ @{dtoAplicado}</span></td><td></td></tr><tr><td colspan='4'>&nbsp;</td></tr>", 
                         separator: ""};
             
var templateCostoEnvioPedido = {render: "<tr><td></td><td style='vertical-align: top; text-align: right;'><span class='txtCostoEnvioPedido'>Costo env&iacute;o:</span></td><td style='vertical-align: top; text-align: right;'><span class='txtCostoEnvioPedido'> $ @{costoEnvio}</span></td><td></td></tr><tr><td colspan='4'>&nbsp;</td></tr>", 
                         separator: ""};

var templateDetallePedido = {render: "<center><table style='width: 90%; margin-top: 5px; text-align:right;'>@{lineasPedido}<tr><td colspan='4'><hr style='margin-top: -2px; border-color: #BFBEBC;'></td></tr>@{contentDtoPedido}@{contentCostoEnvio}<tr><td></td><td style='vertical-align: top;'><span class='txtMontoTotalPedido'>Total:</span></td><td style='vertical-align: top; text-align: right;'><span class='txtMontoTotalPedido'>$ @{montoPedido}</span></td><td></td></tr><tr><td colspan='4'>&nbsp;</td></tr><tr><td></td><td><div style='display: inline-block; vertical-align: top; width: 100px;'><b>Cambio de:</div></td><td style='text-align: right;'>$&nbsp;<input id='cPP_txtPagaConPedido' type='text' style='text-align: right; width: 50px;' value='@{pagaCon}' onchange='pagaConPedido_Change();'></b></div></td><td></td></tr><tr><td colspan='4'> &nbsp; </td></tr><tr><td></td><td style='vertical-align: top; text-align: right;'><div style='display: inline-block; text-align:right; vertical-align: top;'></div></td><br /><td colspan='2' style='vertical-align: top; text-align: right;'><br /></td></tr></table></center>",
                             separator: ""};

/* NUEVO_17_03_2017 */
var templateLineasConceptosRegalo = {render: "<div><input id='optConceptoRegalo@{__itemIndex__}' type='radio' name='conceptoRegalo' onclick='optConceptoRegalo_Click(@{__itemIndex__});'><label for='optConceptoRegalo@{__itemIndex__}'><span></span>@{nombre}</label></div></div>",
                                       voidRender: "",
                                       separator: ""};

var templateNotasPedido = {render:"<div><br /><div style='margin-left: 10px;'><div style='display: inline-block;'><b>Ingresa lo que necesites aclarar sobre tu pedido:</b></div><br /><br /><div><textarea maxlength='255' id='cPP_txtNotasPedido' style='width: 98%; heigth: 70px;' onchange='observacionesPedido_Change();' placeholder='Notas del pedido'>@{observaciones}</textarea></div></div><br /></div>", separator: ""};

var templateDetallePedidoSinLineas = {render: "<center><br /><b>No hay productos en el pedido.</b><br /><br /></center>", separator: ""};

var templateDireccionEntregaCliente = {render: "<div style='margin-bottom: 3px;'><input id='optDireccionEntrega@{__itemIndex__}' type='radio' name='direccionEntrega' onclick='direccionEntrega_Click(@{__itemIndex__});'><label for='optDireccionEntrega@{__itemIndex__}'><span></span>@{calle} @{texto_nro_puerta}, @{texto_esquina}</label>&nbsp;&nbsp;&nbsp;<span class='boton_Editar' id='btnEditarDireccionEntrega_@{__itemIndex__}' onclick='editarDireccionEntrega_Click(@{__itemIndex__});' title='Editar'><span class='glyphicon glyphicon-edit'></span></span><div class='btnIconEliminarLineaPedido'>&nbsp;<span onclick='btnIconoEliminarDireccion_Click(@{__itemIndex__});' class='glyphicon glyphicon-remove boton_Editar'></span></div></div>",
                                       voidRender: "<br /><div style='text-align: center;'>No hay direcci&oacute;nes de entrega.</div>",
                                       separator: ""};

var templateDatosCliente = {render: "<div><br /><div style='margin-left: 10px;'><div style='display: inline-block; width: 72px;'><b>Nombre:</b></div>@{nombre}<br /><div style='display: inline-block; width: 72px;'><b>Email:</b></div>@{email}<br /><div style='display: inline-block; width: 72px;'><b>Tel&eacute;fono:</b></div>@{telefono}<span class='boton_Editar' onclick='editarTelefonoCliente_Click();' title='Editar'><span class='glyphicon glyphicon-edit'></span></span><br /><div id='divOpcionFacturaRut' style='margin-bottom: 3px;'><br /><input id='optFacturaRut' type='checkbox' name='facturaRut' onclick='facturaConRut_Click();'>&nbsp;<label for='optFacturaRut'><span></span>&nbsp;Factura con RUT</label>&nbsp;<div style='display: inline-block;' id='divDatosFacturacion'></div>&nbsp;<span class='boton_Editar' onclick='editarDatosFacturacion_Click();' title='Editar'><span class='glyphicon glyphicon-edit'></span></span></div><br /></div>",
                            separator: ""};
                
var templateEntregaPedido = {separator: "", render: "<div style='margin-left: 10px;'><br /><div id='divOpcionRetiraEnLocal' style='margin-bottom: 3px;'><input id='optRetiraEnLocal' type='radio' name='direccionEntrega' onclick='retiraEnLocal_Click();'><label for='optRetiraEnLocal'><span></span>RETIRO EN EL LOCAL : <div id='divDireccionRetiroLocal' style='display: inline-block;'></div></label></div>@{direcciones_entrega}<br /></div><center><input type='button' class='boton_Entrar' onclick='agregarDireccionEntrega_Click();' value='Agregar Dirección'></center><br /></div>"};

var templateMediosPagoPedido = {separator: "", render: "<div style='margin-left: 10px;'><br /><div id='divOpcionPagoAlRecibir' style='margin-bottom: 3px;'><input id='optPagoAlRecibir' type='radio' name='medioPago' checked='checked' onclick='optMedioPago_Click(0);'><label for='optPagoAlRecibir'><span></span>Pago al repartidor al recibir mi pedido.</label></div><div id='divOpcionPagoWeb' style='margin-bottom: 3px;'><input id='optPagoWeb' type='radio' name='medioPago' onclick='optMedioPago_Click(1);'><label for='optPagoWeb'><span></span>Pago online mediante:</label>&nbsp;&nbsp;<select disabled id='cmbMedioPagoWeb'></select></div><br /></div>"};

// SECCIÓN MAPA Y HORARIOS
var templateHorario = {render: "<div id='cPH_contenedorLineaHorario@{id_dia}'><span class='infoHorariosNombreDia'><b>@{nombre_dia}:</b></span>&nbsp;&nbsp;<div class='infoHorariosHorarioDia'>@{descripcion_horario}</div></div>", 
                       separator: ""};
           
var templateHorarioHoy = {render: "<div><span class='glyphicon glyphicon-time' style='margin-top:7px;color:#5FB404;'></span>&nbsp;<span>@{tmp_descripcion_horario}</span></div>", 
                       separator: ""};
           
var templateHorarioHoyCerrado = {render: "<div><span class='glyphicon glyphicon-time' style='margin-top:7px;color:red;'></span>&nbsp;<span>@{tmp_descripcion_horario}</span></div>", 
                       separator: ""};
           
var templateItemInfoZonaEntrega = {render: "<div class='contenedorItemInfoZonaMapa'><span style='color: @{color_fondo};' class='glyphicon glyphicon-stop'></span>&nbsp;&nbsp;&nbsp;@{nombre_mapa}</div>", 
                       separator: ""};