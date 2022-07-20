import React from "react";
import {Link} from "react-router-dom";
import {NavBar} from "../../Element/Navbar/Navbar.jsx";
import {IconPlus, BurgerMenu} from "../../../assets/img/index.js";
import "./Button.scss";
import {useMobile} from "../../../hooks/useMobile/useMobile.jsx";

const DesktopTable = ({children}) => (
	<Link to="create-claim" className="createClaim">
		<img src={IconPlus} alt="" />
		{children}
	</Link>
);

export const Button = ({type, disabled, className, onCreatedClick, value, onClick, active, setActive, id}) => {
	const {isMobile} = useMobile();

	const typeButton = (type) => {
		switch (type) {
			case "cansel":
				return (
					<Link to="/" className={className}>
						{value}
					</Link>
				);
			case "create":
				return (
					<button disabled={disabled} className={className} onClick={onCreatedClick}>
						{value}
					</button>
				);
			case "browse":
				return (
					<Link to={`incoming/${id}`} className={className}>
						{value}
					</Link>
				);
			case "login/register":
				return (
					<button className={className} onClick={onClick}>
						{value}
					</button>
				);
			case "burger":
				return (
					<button className={className} onClick={onClick}>
						<img src={BurgerMenu} alt="" />
						<NavBar active={active} setActive={setActive} />
					</button>
				);
			case "create-claim":
				return isMobile ? <DesktopTable /> : <DesktopTable>Create claim</DesktopTable>;
			default:
				return null;
		}
	};

	return <>{typeButton(type)}</>;
};
