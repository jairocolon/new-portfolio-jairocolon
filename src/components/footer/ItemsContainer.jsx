import Item from './Item';
import { RESOURCES, MY_BRAND, SUPPORT } from './Menus';
import Logo from '../../assets/logos/logo_jairocolondev.png';

const ItemsContainer = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
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
			<Item Links={RESOURCES} title="RECURSOS" />
			<Item Links={MY_BRAND} title="MI MARCA" />
			<Item Links={SUPPORT} title="SOPORTE" />
		</div>
	);
};

export default ItemsContainer;
