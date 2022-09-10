import Item from './Item';
import {CENTRO_DE_AYUDA,  MY_BRANDS, SERVICES, PAGES_INTEREST} from './Menus';
import Logo from '../../../_metronic/assets/logos/logo_jairocolondev.png';

const ItemsContainer = () => {
	return (
		<div className="grid grid-cols-1 px-5 py-16 lg:grid-cols-5 gap-2 sm:px-8 sm:grid-cols-3">
			<div>
				<a href="/">
					<img
						className="ml-16"
						src={Logo}
						alt="Jairo Colón Developer"
						style={{ width: '150px' }}
					/>
				</a>
			</div>
			<Item Links={MY_BRANDS} title="MIS MARCAS" />
			<Item Links={SERVICES} title="SERVICIOS" />
			<Item Links={PAGES_INTEREST} title="PÁGINAS DE INTERÉS" />
			<Item Links={CENTRO_DE_AYUDA} title="CENTRO DE AYUDA" />
		</div>
	);
};

export default ItemsContainer;
