import Item from './Item';
import {CENTRO_DE_AYUDA,  ABOUT, SERVICES} from './Menus';
import Logo from '../../../_metronic/assets/logos/logo_jairocolondev.png';

const ItemsContainer = () => {
	return (
		<div className="grid grid-cols-1 px-5 py-16 lg:grid-cols-4 gap-6 sm:px-8 sm:grid-cols-3 ">
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
			<Item Links={ABOUT} title="MIS MARCAS" />
			<Item Links={SERVICES} title="SERVICIOS" />
			<Item Links={CENTRO_DE_AYUDA} title="CENTRO DE AYUDA" />
		</div>
	);
};

export default ItemsContainer;
