import Item from './Item';
import {CENTRO_DE_AYUDA,  MY_BRANDS, SERVICES, SERVICES_OTHER} from './Menus';
import Logo from '../../../_metronic/assets/logos/logo_jairocolondev.png';

const ItemsContainer = () => {
	return (
		<div className="grid grid-cols-4 px-5 py-16 gap-6 lg:grid-cols-5 sm:px-8 sm:grid-cols-3">
			<div>
				<a href="/">
					<img
						className="ml-12"
						src={Logo}
						alt="Jairo Colón Developer"
						style={{ width: '150px' }}
					/>
				</a>
			</div>
			<Item Links={MY_BRANDS} title="MIS MARCAS" />
			<Item Links={SERVICES} title="SERVICIOS" />
			<Item Links={SERVICES_OTHER} title="OTROS SERVICIOS" />
			<Item Links={CENTRO_DE_AYUDA} title="CENTRO DE AYUDA" />
		</div>
	);
};

export default ItemsContainer;
