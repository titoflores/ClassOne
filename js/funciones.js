cargarTablaProductos(productos);
function cargarTablaProductos(productos) {
    var i = 0;
    var html='';
    while (i < productos.length) {
        debugger
     var fila = '<tr id="' + productos[i].id + '"><td>' + productos[i].id + '</td><td>' + productos[i].name
            + '</td><td>' + productos[i].cantidad + '</td><td>' + productos[i].precio + '</td><td> <input type="button" value="Eliminar" onclick="Eliminar(this.parentNode.parentNode.rowIndex)"/> </td></tr>';
        html =html + fila;
        debugger
        i++;
        debugger
    }
    document.getElementById('tblProductos').innerHTML = html;
}
cargarTablaUsuarios(usuarios);
function cargarTablaUsuarios(usuarios) {
    var i = 0;
    var html='';
    while (i < usuarios.length) {
        var fila = '<tr><td>' + usuarios[i].id + '</td><td>' + usuarios[i].name
            + '</td><td>' + usuarios[i].clave + '</td><td>' + usuarios[i].estado + '</td><td><input type="button" value="Eliminar" onclick="Eliminar(this.parentNode.parentNode.rowIndex)"/></td></tr>';
        // $('#tblUsuarios').append(fila);
        html=html + fila;
        i++;
    }
    document.getElementById('tblUsuarios').innerHTML = html;
}

cargarTablaTipoUsuario(tipoUsuario);
function cargarTablaTipoUsuario(tipoUsuario) {

    var i = 0;
     var html='';
    while (i < tipoUsuario.length) {

        var fila = '<tr><td>' + tipoUsuario[i].id + '</td><td>' + tipoUsuario[i].name
            + '</td><td>' + tipoUsuario[i].descripcion + '</td><td><input type="button" value="Eliminar" onclick="Eliminar(this.parentNode.parentNode.rowIndex)"/></td></tr>';
        // $('#tblTipoUsuario').append(fila);
         html=html + fila;
        
        i++;
    }
    document.getElementById('tblTipoUsuario').innerHTML = html;
}

cargarTablaSucursal(sucursal);
function cargarTablaSucursal(sucursal) {

    var i = 0;
    var html='';
    while (i < sucursal.length) {

        var fila = '<tr><td>' + sucursal[i].id + '</td><td>' + sucursal[i].name
            + '</td><td>' + sucursal[i].direccion + '</td><td>' + sucursal[i].telefono + '</td><td><input type="button" value="Eliminar" onclick="Eliminar(this.parentNode.parentNode.rowIndex)"/></td></tr>';
        //$('#tblSucursal').append(fila);
        html=html + fila;
        i++;
    }
    document.getElementById('tblSucursal').innerHTML = html;
}

// Creando Operaciones CRUD

function Eliminar(i) {
    document.getElementById('tblProductos').deleteRow(i);
}


cargarProductos();
function cargarProductos() {
    datos = '';
    debugger;
    $.ajax({
        url: '/Home/ObtenerProductos',
        type: 'GET',
        data: { "parametro1": "valor1", "parametro2": "valor2" },
        success: function (data) {
            debugger;
            cargarTablaProductos(data);
        }
    });
}
73156443
/*function Eliminar (i) {
    debugger
    var obj=document.getElementsByTagName("table")[0].setAttribute("id","tableid");
    debugger
    document.getElementById("tableid").deleteRow(i);
}*/
