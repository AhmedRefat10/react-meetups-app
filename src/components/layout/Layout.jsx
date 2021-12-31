import calsses from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
	return (
		<div>
			<MainNavigation />
			<main className={calsses.main}>{props.children}</main>
		</div>
		);
}

export default Layout;