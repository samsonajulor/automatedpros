import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import { ESize } from 'theme/theme.enum';
import WalletButton from '../WalletButton';
import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Text type={ETextType.h1} size={ESize.s}>
				automatedpros
			</Text>

			<div>

				<WalletButton />
			</div>
		</nav>
	);
};

export { Navbar };
