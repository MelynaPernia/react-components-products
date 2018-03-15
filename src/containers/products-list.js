import {connect} from 'react-redux'
import ProductLista from '../components/product-table'

function mapStateToProps(state) {
    //mandar a mis componentes las nuevas propiedades
    // y llamas al estado
    // devolviendo nuevas propiedades al componente 
    return { productslist: state.products}
}

export default connect(mapStateToProps)(ProductLista)